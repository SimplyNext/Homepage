"use client";

import { useState, type ChangeEvent } from "react";
import { useLocale } from "next-intl";

const LABELS = {
  de: { show: "Passwort anzeigen", hide: "Passwort verbergen" },
  en: { show: "Show password", hide: "Hide password" },
} as const;

/**
 * Passwortfeld mit Auge-Schalter: Standardmäßig verdeckt, auf Wunsch lesbar –
 * damit man beim Vergeben oder Eingeben sieht, was man tippt. Für alle
 * Passwortfelder der Website (Konto löschen, Passwort zurücksetzen).
 */
export default function PasswordInput({
  value,
  onChange,
  autoComplete,
  className,
  minLength,
  required,
}: {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  autoComplete: "new-password" | "current-password";
  className: string;
  minLength?: number;
  required?: boolean;
}) {
  const locale = useLocale();
  const l = LABELS[locale === "en" ? "en" : "de"];
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input
        type={visible ? "text" : "password"}
        autoComplete={autoComplete}
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
        minLength={minLength}
        required={required}
        value={value}
        onChange={onChange}
        className={`${className} pr-12`}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? l.hide : l.show}
        aria-pressed={visible}
        title={visible ? l.hide : l.show}
        className="absolute inset-y-0 right-0 mt-1.5 flex w-12 items-center justify-center text-ink-muted transition-colors hover:text-ink focus-visible:text-ink focus-visible:outline-none"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {visible ? (
            <>
              <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
              <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
              <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
              <path d="m1 1 22 22" />
            </>
          ) : (
            <>
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </>
          )}
        </svg>
      </button>
    </div>
  );
}
