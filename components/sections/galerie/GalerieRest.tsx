"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import TransitionLink from "@/components/ui/TransitionLink";
import Reveal from "@/components/ui/Reveal";
import { useApps } from "@/components/providers/AppsProvider";
import { type AppData } from "@/lib/apps";
import { useAppContent } from "@/lib/useAppContent";
import { stageColor } from "@/lib/galerie";
import { site } from "@/lib/site";

const DISPLAY = "font-display font-extrabold tracking-[-0.045em]";

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

/** Alle Apps als farbige Kacheln. */
export function GalerieGrid() {
  const t = useTranslations("galerie");
  const apps = useApps();
  return (
    <section id="alle" className="bg-base-900 text-ink">
      <div className="mx-auto max-w-shell px-gutter pt-24 md:pt-36">
        <Reveal as="h2" className={`${DISPLAY} text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95]`}>
          {t("gridHeading", { count: apps.length })}
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((app, i) => (
            <Reveal key={app.slug} delay={(i % 4) * 0.07}>
              <GridTile app={app} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GridTile({ app }: { app: AppData }) {
  const content = useAppContent(app.slug);
  const tStatus = useTranslations("status");
  return (
    <TransitionLink
      href={`/apps/${app.slug}`}
      className="group flex h-56 flex-col justify-between rounded-[30px] p-6 text-paperInk transition-transform duration-500 ease-premium hover:-translate-y-2 hover:-rotate-1"
      style={{ background: stageColor(app) }}
      data-cursor
    >
      <span className="inline-flex items-center gap-2 text-sm font-semibold">
        {app.status === "live" && (
          <span className="block h-2 w-2 rounded-full bg-paperInk" aria-hidden />
        )}
        {tStatus(app.status)}
      </span>
      <span>
        <span className="block font-display text-[2.1rem] font-extrabold leading-none tracking-[-0.03em]">
          {app.name}
        </span>
        <span className="mt-2 block text-[15px] leading-snug">{content.category}</span>
      </span>
    </TransitionLink>
  );
}

/**
 * Eckdaten als Kachel-Raster: Anzahl, Plattformen, Stack und was gerade in
 * Arbeit ist. Die Zahlen kommen aus dem mit AppControl abgeglichenen Status.
 */
export function GalerieFacts() {
  const t = useTranslations("bento");
  const tG = useTranslations("galerie");
  const apps = useApps();
  const live = apps.filter((a) => a.status === "live");
  const upcoming = apps.filter((a) => a.status !== "live");

  return (
    <section className="bg-base-900 text-ink">
      <div className="mx-auto grid max-w-shell grid-cols-1 gap-5 px-gutter pb-24 pt-5 sm:grid-cols-2 md:pb-32 lg:grid-cols-4">
        {/* Zahl */}
        <Reveal className="h-full">
          <div className="flex h-full min-h-[15rem] flex-col justify-between rounded-[30px] bg-[#FCAE27] p-7 text-paperInk">
            <p className={`${DISPLAY} text-[clamp(5rem,9vw,8.5rem)] leading-[0.8]`}>
              {live.length > 0 ? live.length : apps.length}
            </p>
            <div>
              <p className="text-lg font-semibold">
                {live.length > 0
                  ? t("statsApps", { count: live.length })
                  : tG("statsNone", { count: apps.length })}
              </p>
              <p className="mt-1 text-[15px]">{t("statsLocales")}</p>
            </div>
          </div>
        </Reveal>

        {/* Plattformen */}
        <Reveal delay={0.06} className="h-full">
          <div className="flex h-full min-h-[15rem] flex-col justify-between rounded-[30px] bg-base-800 p-7">
            <h3 className="text-sm font-semibold text-ink-faint">{t("platformsTitle")}</h3>
            <div>
              <p className="flex items-center gap-2.5 font-display text-[1.7rem] font-extrabold leading-tight tracking-[-0.03em]">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#9DBFA4] text-paperInk">
                  <Check size={16} strokeWidth={3} aria-hidden />
                </span>
                {t("android")}
              </p>
              <p className="mt-2 text-[15px] text-ink-muted">{t("iosSoon")}</p>
            </div>
          </div>
        </Reveal>

        {/* Stack */}
        <Reveal delay={0.12} className="h-full sm:col-span-2">
          <div className="flex h-full min-h-[15rem] flex-col justify-between overflow-hidden rounded-[30px] bg-[#9DBFA4] py-7 text-paperInk">
            <h3 className="px-7 text-sm font-semibold">{t("techTitle")}</h3>
            <div className="marquee overflow-hidden">
              <div className="marquee-track gap-3 px-1.5">
                <StackRow />
                <StackRow ariaHidden />
              </div>
            </div>
          </div>
        </Reveal>

        {/* In Entwicklung */}
        {upcoming.length > 0 && (
          <Reveal delay={0.18} className="sm:col-span-2 lg:col-span-4">
            <div className="flex flex-col gap-6 rounded-[30px] bg-base-800 p-7 lg:flex-row lg:items-center lg:justify-between">
              <h3 className={`${DISPLAY} shrink-0 text-[clamp(1.9rem,3vw,2.75rem)] leading-none`}>
                {t("roadmapTitle")}
              </h3>
              <ul className="flex flex-wrap gap-2.5 lg:justify-end">
                {upcoming.map((app) => (
                  <li key={app.slug}>
                    <TransitionLink
                      href={`/apps/${app.slug}`}
                      className="inline-flex min-h-[44px] items-center rounded-full px-5 text-[1rem] font-semibold text-paperInk transition-transform duration-300 ease-premium hover:-translate-y-1"
                      style={{ background: stageColor(app) }}
                      data-cursor
                    >
                      {app.name}
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function StackRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-3" aria-hidden={ariaHidden}>
      {TECH_STACK.map((item) => (
        <li
          key={item}
          className="whitespace-nowrap rounded-full bg-paperInk px-6 py-3 font-display text-xl font-bold tracking-[-0.02em] text-paper"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Statement: die Wörter färben sich beim Scrollen nacheinander ein. */
export function GalerieStatement() {
  const root = useRef<HTMLElement>(null);
  const t = useTranslations("statement");
  const words = t("text").split(" ");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const q = gsap.utils.selector(root);
        gsap.fromTo(
          q(".word"),
          { opacity: 0.16 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.12,
            scrollTrigger: {
              // Am Text selbst messen (ohne den Abstand darunter) und bis in
              // die obere Bildschirmhälfte laufen lassen – sonst ist ein kurzer
              // Dreizeiler auf breiten Bildschirmen gefüllt, bevor man ihn liest.
              trigger: q(".statement-text")[0],
              start: "top 85%",
              end: "top 30%",
              scrub: true,
            },
          }
        );
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-base-900 text-ink">
      <div className="mx-auto max-w-shell px-gutter pb-28 md:pb-40">
        <p className="statement-text font-display text-[clamp(1.9rem,4.6vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.035em]">
        {words.map((w, i) => (
          <span key={i} className="word">
            {w}{" "}
          </span>
        ))}
        </p>
      </div>
    </section>
  );
}

/** Abschluss der Startseite: Marken-Satz und der Weg zur E-Mail. */
export function GalerieFinale() {
  const t = useTranslations("finale");
  const tG = useTranslations("galerie");
  return (
    <section id="contact" className="bg-base-900 text-ink">
      <div className="mx-auto flex max-w-shell flex-col gap-10 px-gutter pb-28 md:flex-row md:items-end md:justify-between md:pb-36">
        <div>
          <Reveal
            as="h2"
            className={`${DISPLAY} max-w-4xl text-[clamp(2.6rem,6.6vw,6rem)] leading-[0.92]`}
          >
            {t("claim")}
          </Reveal>
          <p className="mt-6 text-lg text-ink-muted">{t("sub")}</p>
        </div>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex min-h-[60px] shrink-0 items-center self-start rounded-full bg-[#FCAE27] px-8 text-lg font-semibold text-paperInk transition-transform duration-300 ease-premium hover:scale-[1.04] md:self-auto"
          data-cursor
        >
          {tG("mail")}
        </a>
      </div>
    </section>
  );
}
