"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "working" | "done" | "error";

/**
 * Selbstlöschung eines App-Kontos ohne die App.
 *
 * Ablauf: 1. Anmeldung im Browser direkt bei Supabase (das Passwort erreicht
 * unsere Website nie), 2. das Zugriffstoken geht an /api/account-deletion,
 * das die Edge-Function `delete-account` der App aufruft. Token und Passwort
 * leben nur im Speicher dieser Komponente.
 */
export default function AccountDeletionForm({
  slug,
  supabaseUrl,
  anonKey,
}: {
  slug: string;
  supabaseUrl: string;
  anonKey: string;
}) {
  const t = useTranslations("accountDeletion.form");
  const word = t("word");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [backedUp, setBackedUp] = useState(false);
  const [typed, setTyped] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const ready = email.trim() !== "" && password !== "" && backedUp && typed.trim().toUpperCase() === word;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!ready || status === "working") return;
    setStatus("working");
    setError("");

    try {
      const login = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
        method: "POST",
        headers: { apikey: anonKey, "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });
      if (!login.ok) {
        const body = await login.json().catch(() => ({}));
        const code = body?.error_code ?? body?.code ?? "";
        setError(
          login.status === 429
            ? t("errorRateLimit")
            : code === "email_not_confirmed"
              ? t("errorNotConfirmed")
              : login.status === 400
                ? t("errorCredentials")
                : t("errorGeneric"),
        );
        setStatus("error");
        return;
      }
      const { access_token: token } = await login.json();

      const del = await fetch(`/api/account-deletion/${slug}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!del.ok) {
        setError(t("errorGeneric"));
        setStatus("error");
        return;
      }

      setPassword("");
      setStatus("done");
    } catch {
      setError(t("errorGeneric"));
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="mt-6 rounded-lg border border-line bg-base-800 px-5 py-4">
        <p className="font-medium">{t("successTitle")}</p>
        <p className="mt-2 leading-relaxed text-ink-muted">{t("successText")}</p>
      </div>
    );
  }

  const field =
    "mt-1.5 w-full rounded-lg border border-line bg-base-800 px-3.5 py-2.5 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4 rounded-lg border border-line p-5" noValidate>
      <label className="block text-sm">
        {t("email")}
        <input
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={field}
          required
        />
      </label>
      <label className="block text-sm">
        {t("password")}
        <input
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={field}
          required
        />
      </label>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-muted">
        <input
          type="checkbox"
          checked={backedUp}
          onChange={(e) => setBackedUp(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-[rgb(var(--color-accent))]"
        />
        {t("confirmBackup")}
      </label>
      <label className="block text-sm">
        {t("confirmWord", { word })}
        <input
          type="text"
          autoComplete="off"
          autoCapitalize="characters"
          spellCheck={false}
          value={typed}
          onChange={(e) => setTyped(e.target.value)}
          className={field}
        />
      </label>

      {status === "error" && (
        <p role="alert" className="rounded-lg border border-line bg-base-800 px-3.5 py-2.5 text-sm leading-relaxed">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!ready || status === "working"}
        className="w-full rounded-full bg-ink px-5 py-3 text-sm font-medium text-base-900 transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
      >
        {status === "working" ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}
