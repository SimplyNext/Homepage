"use client";

import { useTranslations } from "next-intl";

export type AppContent = {
  tagline: string;
  summary: string;
  category: string;
  description: string[];
  features: { title: string; text: string }[];
  pricing: { free: string[]; premium: string[]; note: string };
  /** Alt-Texte für die Screenshots, Reihenfolge entspricht `app.shots` in lib/apps.ts */
  shotAlts: string[];
};

/** Liest die übersetzten Marketing-Texte einer App aus messages/*.json (apps.<slug>). */
export function useAppContent(slug: string): AppContent {
  const t = useTranslations(`apps.${slug}`);
  return {
    tagline: t("tagline"),
    summary: t("summary"),
    category: t("category"),
    description: t.raw("description") as string[],
    features: t.raw("features") as { title: string; text: string }[],
    pricing: {
      free: t.raw("pricing.free") as string[],
      premium: t.raw("pricing.premium") as string[],
      note: t("pricing.note"),
    },
    shotAlts: t.raw("shots") as string[],
  };
}
