"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { AppAuthTexts } from "@/lib/app-auth";

type Mode = "confirm" | "recovery";
type Step = "start" | "working" | "form" | "saving" | "done" | "error";

/**
 * Löst das Einmal-Token aus einer Konto-Mail ein – erst auf Knopfdruck, damit
 * Mail-Scanner, die Links vorab aufrufen, es nicht verbrauchen.
 *
 * Spricht die Supabase-Auth-API direkt an (wie die Konto-löschen-Seite):
 * POST /auth/v1/verify → Sitzung, bei „recovery“ PUT /auth/v1/user mit dem neuen
 * Passwort, danach POST /auth/v1/logout. Das Zugriffstoken lebt nur im Speicher
 * dieser Komponente; nichts landet in Cookies oder im Browser-Speicher.
 */
export default function AppAuthFlow({
  mode,
  supabaseUrl,
  anonKey,
  appLink,
  texts,
}: {
  mode: Mode;
  supabaseUrl: string;
  anonKey: string;
  appLink: string;
  texts: AppAuthTexts;
}) {
  const m = mode === "confirm" ? texts.confirm : texts.recovery;
  const [params, setParams] = useState<{ tokenHash: string; type: string } | null>(null);
  const [step, setStep] = useState<Step>("start");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");

  // Parameter erst im Browser lesen (die Seite ist statisch vorgerendert).
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const tokenHash = q.get("token_hash") ?? "";
    const type = q.get("type") ?? (mode === "recovery" ? "recovery" : "signup");
    setParams({ tokenHash, type });
  }, [mode]);

  const allowedTypes = mode === "confirm" ? ["signup", "email_change", "email"] : ["recovery"];
  const linkOk = params !== null && params.tokenHash !== "" && allowedTypes.includes(params.type);

  async function signOut(accessToken: string) {
    try {
      await fetch(`${supabaseUrl}/auth/v1/logout`, {
        method: "POST",
        headers: { apikey: anonKey, Authorization: `Bearer ${accessToken}` },
      });
    } catch {
      // Abmelden ist Aufräumen – das Token verfällt ohnehin und wird nirgends gespeichert.
    }
  }

  async function verify() {
    if (!params || !linkOk || step === "working") return;
    setStep("working");
    setError("");
    try {
      const res = await fetch(`${supabaseUrl}/auth/v1/verify`, {
        method: "POST",
        headers: { apikey: anonKey, "Content-Type": "application/json" },
        body: JSON.stringify({ type: params.type, token_hash: params.tokenHash }),
      });
      if (!res.ok) {
        setError(res.status === 429 ? texts.rateLimit : res.status >= 500 ? texts.generic : texts.expired);
        setStep("error");
        return;
      }
      const body = await res.json().catch(() => ({}));
      const accessToken: string = body?.access_token ?? "";
      if (mode === "confirm") {
        if (accessToken) await signOut(accessToken);
        setStep("done");
      } else if (accessToken) {
        setToken(accessToken);
        setStep("form");
      } else {
        setError(texts.generic);
        setStep("error");
      }
    } catch {
      setError(texts.generic);
      setStep("error");
    }
  }

  async function save(e: FormEvent) {
    e.preventDefault();
    if (step === "saving") return;
    const r = texts.recovery;
    if (pw.length < 8) return setError(r.tooShort);
    if (pw !== pw2) return setError(r.mismatch);
    setStep("saving");
    setError("");
    try {
      const res = await fetch(`${supabaseUrl}/auth/v1/user`, {
        method: "PUT",
        headers: { apikey: anonKey, Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        const code: string = body?.error_code ?? body?.code ?? "";
        const msg: string = body?.msg ?? body?.message ?? "";
        setError(
          code === "same_password" || /different from the old/i.test(msg)
            ? r.samePassword
            : code === "weak_password"
              ? r.weakPassword
              : res.status === 401 || res.status === 403
                ? r.sessionLost
                : res.status === 429
                  ? texts.rateLimit
                  : texts.generic,
        );
        setStep("form");
        return;
      }
      await signOut(token);
      setToken("");
      setPw("");
      setPw2("");
      setStep("done");
    } catch {
      setError(texts.generic);
      setStep("form");
    }
  }

  const button =
    "inline-flex min-h-[52px] items-center justify-center rounded-full bg-ink px-7 text-[1rem] font-semibold text-base-900 transition-opacity disabled:cursor-not-allowed disabled:opacity-40";
  const field =
    "mt-1.5 w-full rounded-lg border border-line bg-base-800 px-3.5 py-2.5 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none";

  if (step === "done") {
    const href = mode === "confirm" ? `${appLink}?confirmed=1` : appLink;
    return (
      <div role="status">
        <p className="font-display text-2xl font-extrabold tracking-[-0.02em]">{m.successTitle}</p>
        <p className="mt-3 leading-relaxed text-ink-muted">{m.successText}</p>
        <a href={href} className={`${button} mt-6`}>
          {texts.openApp}
        </a>
        {mode === "confirm" && <p className="mt-6 text-sm leading-relaxed text-ink-muted">{texts.confirm.pcHint}</p>}
      </div>
    );
  }

  if (step === "form" || step === "saving") {
    const r = texts.recovery;
    return (
      <form onSubmit={save} className="space-y-4" noValidate>
        <p className="leading-relaxed text-ink-muted">{r.formIntro}</p>
        <label className="block text-sm">
          {r.password}
          <input
            type="password"
            autoComplete="new-password"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            minLength={8}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className={field}
          />
        </label>
        <label className="block text-sm">
          {r.repeat}
          <input
            type="password"
            autoComplete="new-password"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            minLength={8}
            value={pw2}
            onChange={(e) => setPw2(e.target.value)}
            className={field}
          />
        </label>
        {error && (
          <p role="alert" className="rounded-lg border border-line bg-base-800 px-3.5 py-2.5 text-sm leading-relaxed">
            {error}
          </p>
        )}
        <button type="submit" disabled={step === "saving" || pw === "" || pw2 === ""} className={`${button} w-full`}>
          {step === "saving" ? r.saving : r.save}
        </button>
      </form>
    );
  }

  return (
    <div>
      <p className="leading-relaxed text-ink-muted">{params && !linkOk ? m.missing : m.intro}</p>
      {step === "error" && (
        <p role="alert" className="mt-5 rounded-lg border border-line bg-base-800 px-3.5 py-2.5 text-sm leading-relaxed">
          {error}
        </p>
      )}
      {step === "error" ? (
        <a href={appLink} className={`${button} mt-6`}>
          {texts.openApp}
        </a>
      ) : (
        <button type="button" onClick={verify} disabled={!linkOk || step === "working"} className={`${button} mt-6`}>
          {step === "working" ? m.working : m.button}
        </button>
      )}
    </div>
  );
}
