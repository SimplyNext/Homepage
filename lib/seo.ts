import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

/**
 * Selbstreferenzierendes Canonical + korrekte hreflang-Verweise pro Seite.
 *
 * Warum nötig: Ohne Canonical wählte Google die unpräfixierte URL
 * (/apps/werkflow) als kanonisch. next-intl leitet von dort per 307
 * ("temporary") auf /de/apps/werkflow um – und ein 307 sagt Google
 * ausdrücklich, die Ausgangs-URL im Index zu behalten. Die eigentliche Seite
 * galt dadurch als Duplikat und wurde nicht indexiert. Der 307 ist korrekt
 * (die Middleware verhandelt dort die Browsersprache), also ist das Canonical
 * der richtige Hebel.
 *
 * x-default zeigt bewusst auf die unpräfixierte URL: genau dort findet die
 * Sprachverhandlung statt – das ist die Bedeutung von x-default.
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
      "x-default": path || "/",
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
