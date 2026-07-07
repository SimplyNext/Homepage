"use client";

import { useTranslations } from "next-intl";
import { Check, Languages, Smartphone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import BentoTile from "./BentoTile";
import { apps } from "@/lib/apps";

/**
 * Bento-Grid im MotionSites-Stil: kleine Info-Tiles (Plattformen, Zahlen,
 * Tech-Marquee, Kontakt-Teaser). Alle Tiles: Liquid-Glass + Noise +
 * Hover-Tilt (BentoTile). Die großen App-Karten leben in AppsRail
 * (gepinnte Horizontal-Animation) direkt darüber.
 */

/** Bewusst unübersetzt: Eigennamen des Stacks. */
const TECH_STACK = [
  "Flutter",
  "Expo",
  "React Native",
  "Kotlin",
  "TypeScript",
  "Supabase",
  "GSAP",
  "Three.js",
];

export default function AppsBento() {
  const t = useTranslations("bento");
  const tStatus = useTranslations("status");
  // Nur veröffentlichte Apps zählen (nicht die „Bald"-Apps)
  const liveCount = apps.filter((a) => a.status === "live").length;
  const comingSoon = apps.filter((a) => a.status === "coming-soon");

  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-shell px-gutter pb-section pt-10 md:pt-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Plattformen */}
          <Reveal variant="up" className="lg:col-span-1">
            <BentoTile className="h-full">
              <div className="flex h-full flex-col justify-between gap-8 p-7">
                <Smartphone size={20} className="text-ink-muted" aria-hidden />
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-label text-ink-faint">
                    {t("platformsTitle")}
                  </h3>
                  <p className="mt-3 flex items-center gap-2 text-sm font-medium text-ink">
                    <Check size={14} className="text-accent-alt" aria-hidden />
                    {t("android")}
                  </p>
                  <p className="mt-1.5 text-sm text-ink-faint">{t("iosSoon")}</p>
                </div>
              </div>
            </BentoTile>
          </Reveal>

          {/* Zahlen */}
          <Reveal variant="up" delay={0.06} className="lg:col-span-1">
            <BentoTile className="h-full">
              <div className="flex h-full flex-col justify-between gap-8 p-7">
                <Languages size={20} className="text-ink-muted" aria-hidden />
                <div>
                  <p className="font-display text-5xl font-medium text-ink">
                    {liveCount}
                  </p>
                  <p className="mt-2 text-sm font-medium text-ink">
                    {t("statsApps", { count: liveCount })}
                  </p>
                  <p className="mt-1 text-sm text-ink-faint">{t("statsLocales")}</p>
                </div>
              </div>
            </BentoTile>
          </Reveal>

          {/* Tech-Marquee */}
          <Reveal variant="up" delay={0.12} className="sm:col-span-2 lg:col-span-2">
            <BentoTile className="h-full">
              <div className="flex h-full flex-col justify-between gap-8 p-7">
                <h3 className="font-mono text-[11px] uppercase tracking-label text-ink-faint">
                  {t("techTitle")}
                </h3>
                <div className="marquee -mx-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <div className="marquee-track gap-3 px-3">
                    <MarqueeRow items={TECH_STACK} />
                    <MarqueeRow items={TECH_STACK} ariaHidden />
                  </div>
                </div>
              </div>
            </BentoTile>
          </Reveal>

          {/* In Entwicklung – kommende Apps als Ausblick */}
          <Reveal variant="up" delay={0.18} className="sm:col-span-2 lg:col-span-4">
            <BentoTile className="h-full">
              <div className="flex h-full flex-col justify-between gap-6 p-7 sm:flex-row sm:items-center">
                <h3 className="shrink-0 font-display text-2xl font-medium text-ink md:text-3xl">
                  {t("roadmapTitle")}
                </h3>
                <ul className="flex flex-wrap gap-2.5 sm:justify-end">
                  {comingSoon.map((app) => (
                    <li
                      key={app.slug}
                      className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: app.accent }}
                        aria-hidden
                      />
                      {app.name}
                      <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                        {tStatus("coming-soon")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </BentoTile>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  ariaHidden,
}: {
  items: string[];
  ariaHidden?: boolean;
}) {
  return (
    <ul className="flex shrink-0 items-center gap-3" aria-hidden={ariaHidden}>
      {items.map((item) => (
        <li
          key={item}
          className="whitespace-nowrap rounded-full border border-line px-4 py-2 font-mono text-xs text-ink-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
