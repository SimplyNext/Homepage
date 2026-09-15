import type { LegalSection } from "../legal";
import { fabulaAgb, fabulaDatenschutz } from "./fabula";
import { fabulaAgbEn, fabulaDatenschutzEn } from "./fabula.en";
import { nookAgb, nookDatenschutz } from "./nook";
import { nookAgbEn, nookDatenschutzEn } from "./nook.en";
import { shrinkitAgb, shrinkitDatenschutz } from "./shrinkit";
import { shrinkitAgbEn, shrinkitDatenschutzEn } from "./shrinkit.en";
import { werkflowAgb, werkflowDatenschutz } from "./werkflow";
import { werkflowAgbEn, werkflowDatenschutzEn } from "./werkflow.en";

/**
 * Registry für app-eigene Rechtstexte, je Sprache.
 *
 * Fehlt ein Eintrag, greifen die generischen Vorlagen aus lib/legal.ts
 * (datenschutzSections / agbSections). Die enthalten noch Platzhalter – jede
 * App sollte hier eine eigene, vollständige Fassung bekommen.
 *
 * Die englischen Fassungen (*.en.ts) sind Übersetzungen zur Information;
 * rechtlich verbindlich bleibt die deutsche. Ändert sich eine deutsche
 * Fassung, muss die englische nachgezogen werden.
 */
type LegalDocs = { datenschutz: LegalSection[]; agb: LegalSection[] };
type AppLegal = { de: LegalDocs; en: LegalDocs };

const appLegal: Record<string, AppLegal> = {
  nook: {
    de: { datenschutz: nookDatenschutz, agb: nookAgb },
    en: { datenschutz: nookDatenschutzEn, agb: nookAgbEn },
  },
  werkflow: {
    de: { datenschutz: werkflowDatenschutz, agb: werkflowAgb },
    en: { datenschutz: werkflowDatenschutzEn, agb: werkflowAgbEn },
  },
  fabula: {
    de: { datenschutz: fabulaDatenschutz, agb: fabulaAgb },
    en: { datenschutz: fabulaDatenschutzEn, agb: fabulaAgbEn },
  },
  shrinkit: {
    de: { datenschutz: shrinkitDatenschutz, agb: shrinkitAgb },
    en: { datenschutz: shrinkitDatenschutzEn, agb: shrinkitAgbEn },
  },
};

export function appLegalSections(slug: string, doc: keyof LegalDocs, locale: string): LegalSection[] | undefined {
  const entry = appLegal[slug];
  if (!entry) return undefined;
  return (locale === "en" ? entry.en : entry.de)[doc];
}
