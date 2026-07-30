import type { LegalSection } from "../legal";
import { fabulaAgb, fabulaDatenschutz } from "./fabula";
import { nookAgb, nookDatenschutz } from "./nook";
import { shrinkitAgb, shrinkitDatenschutz } from "./shrinkit";
import { werkflowAgb, werkflowDatenschutz } from "./werkflow";

/**
 * Registry für app-eigene Rechtstexte.
 *
 * Fehlt ein Eintrag, greifen die generischen Vorlagen aus lib/legal.ts
 * (datenschutzSections / agbSections). Die enthalten noch Platzhalter – jede
 * App sollte hier eine eigene, vollständige Fassung bekommen.
 */
type AppLegal = { datenschutz?: LegalSection[]; agb?: LegalSection[] };

export const appLegal: Record<string, AppLegal> = {
  nook: { datenschutz: nookDatenschutz, agb: nookAgb },
  werkflow: { datenschutz: werkflowDatenschutz, agb: werkflowAgb },
  fabula: { datenschutz: fabulaDatenschutz, agb: fabulaAgb },
  shrinkit: { datenschutz: shrinkitDatenschutz, agb: shrinkitAgb },
};
