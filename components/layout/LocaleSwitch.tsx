"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

type Labels = { toEnglish: string; toGerman: string };

/**
 * Verlinkt dieselbe Seite in der jeweils anderen Sprache (usePathname liefert
 * den Pfad OHNE Locale-Präfix, next-intls Link hängt das Ziel-Locale an) –
 * zeigt das Ziel-Kürzel (die Sprache, zu der gewechselt wird), nicht die
 * aktuelle.
 */
export default function LocaleSwitch({ labels }: { labels: Labels }) {
  const locale = useLocale();
  const pathname = usePathname();
  const target = locale === "de" ? "en" : "de";

  return (
    <Link
      href={pathname}
      locale={target}
      hrefLang={target}
      aria-label={target === "en" ? labels.toEnglish : labels.toGerman}
      data-cursor
      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line font-mono text-[11px] font-semibold uppercase text-ink transition-colors hover:text-accent-soft"
    >
      {target}
    </Link>
  );
}
