import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

/**
 * Selbstreferenzierendes Canonical + korrekte hreflang-Verweise pro Seite.
 *
 * Warum nötig: Ohne Canonical wählte Google die unpräfixierte URL
 * (/apps/werkflow) als kanonisch. next-intl leitet von dort per 307
 * ("temporary") auf /de/apps/werkflow um – und ein 307 sagt Google
 * ausdrücklich, die Ausgangs-URL im Index zu behalten. Die eigentliche Seite
 * galt dadurch als Duplikat und wurde nicht indexiert. Das Canonical allein
 * reichte nicht – proxy.ts macht den Redirect für Unterseiten deshalb
 * zusätzlich dauerhaft (308).
 *
 * x-default zeigt auf die deutsche Fassung, nicht auf die unpräfixierte URL:
 * Die leitet nur weiter, und als Ziel von x-default hat Google sie trotz
 * Canonical selbst als kanonisch gewählt (Search Console, Okt. 2026:
 * /apps/werkflow statt /de/apps/werkflow).
 *
 * WICHTIG: Metadata-Felder werden von Next.js pro Route ersetzt, nicht tief
 * gemischt. Jede Seite mit eigenem generateMetadata MUSS daher alternates
 * selbst setzen, sonst erbt sie die des Layouts (= die der Startseite).
 *
 * @param path Pfad OHNE Locale-Präfix, mit führendem Slash ("" = Startseite).
 */
export function alternatesFor(locale: string, path = ""): Metadata["alternates"] {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      ...Object.fromEntries(routing.locales.map((l) => [l, `/${l}${path}`])),
      "x-default": `/${routing.defaultLocale}${path}`,
    },
  };
}

/**
 * Rechtstexte der Apps (AGB, Datenschutz, Impressum) müssen öffentlich
 * erreichbar sein – der Play Store verlangt das –, aber nicht indexiert.
 * Sie sind über alle Apps hinweg nahezu identisch und würden nur
 * Duplikat-Meldungen in der Search Console produzieren.
 */
export const noindex: Metadata["robots"] = { index: false, follow: true };
