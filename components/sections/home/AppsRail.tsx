"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import TransitionLink from "@/components/ui/TransitionLink";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import BentoTile from "./BentoTile";
import { apps, type AppData } from "@/lib/apps";
import { useAppContent } from "@/lib/useAppContent";
import { useMountedTheme } from "@/hooks/useMountedTheme";

/**
 * Die App-Rail: eine gepinnte Bühne, die beim Betreten leer ist – während
 * man scrollt, fahren die App-Karten von rechts nach links herein (Track
 * startet per pl-[100vw] komplett außerhalb des Viewports).
 *
 * Mobil und bei prefers-reduced-motion: kein Pin, gestapelte Karten.
 * Neue App = Eintrag in lib/apps.ts + apps.<slug>-Messages, die Rail
 * skaliert automatisch mit.
 */
export default function AppsRail() {
  const root = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("bento");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const stage = stageRef.current;
          const track = trackRef.current;
          if (!stage || !track) return;

          const distance = () => track.scrollWidth - window.innerWidth;
          const tween = gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: stage,
              start: "top top",
              end: () => `+=${distance()}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
          };
        }
      );

      return () => mm.revert();
    },
    { scope: root }
  );

  const heading = (
    <>
      <Reveal variant="fade">
        <p className="font-mono text-xs uppercase tracking-label text-ink-faint">
          <span className="text-accent-soft">{"{"}</span> {t("eyebrow")}{" "}
          <span className="text-accent-alt">{"}"}</span>
        </p>
      </Reveal>
      <h2 className="mt-4 font-display text-display-md font-medium text-ink">
        <SplitText split="words" stagger={0.06}>
          {t("heading")}
        </SplitText>
      </h2>
    </>
  );

  return (
    <section ref={root} id="apps" className="relative z-10">
      {/* ===== Desktop: gepinnte Rail, Karten kommen von rechts ===== */}
      <div
        ref={stageRef}
        className="relative hidden overflow-hidden motion-reduce:md:hidden md:flex md:h-[100svh] md:flex-col md:justify-center md:pt-[90px]"
      >
        <div className="mx-auto w-full max-w-shell px-gutter pb-10">{heading}</div>
        <div
          ref={trackRef}
          className="flex items-stretch gap-6 pl-[100vw] pr-[12vw] will-change-transform"
        >
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} className="w-[min(600px,84vw)] shrink-0" />
          ))}
        </div>

        {/* Scroll-Hinweis (wie im Hero) – unten links, außerhalb der Karten */}
        <div
          className="pointer-events-none absolute bottom-8 left-[max(1.25rem,calc((100vw-1440px)/2+1.25rem))] flex items-center gap-4"
          aria-hidden
        >
          <span className="relative block h-10 w-px overflow-hidden bg-line">
            <span className="absolute left-0 top-0 h-4 w-px animate-scroll-hint bg-ink" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-label text-ink-faint">
            {t("scrollHint")}
          </span>
        </div>
      </div>

      {/* ===== Mobil / Reduced Motion: gestapelte Karten ===== */}
      <div className="mx-auto max-w-shell px-gutter py-section md:hidden motion-reduce:md:block">
        {heading}
        <div className="mt-14 grid grid-cols-1 gap-6 motion-reduce:md:grid-cols-2">
          {apps.map((app) => (
            <Reveal key={app.slug} variant="up">
              <AppCard app={app} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Eine App-Karte (Glas-Tile): Hero, Status-Badge, Tagline, Summary, Pfeil. */
function AppCard({ app, className }: { app: AppData; className?: string }) {
  const content = useAppContent(app.slug);
  const t = useTranslations("bento");
  const tStatus = useTranslations("status");
  const { resolvedTheme } = useMountedTheme();
  const accent = resolvedTheme === "light" ? app.accentLight : app.accent;

  return (
    <BentoTile className={className}>
      <TransitionLink
        href={`/apps/${app.slug}`}
        className="group flex h-full flex-col"
        data-cursor
      >
        <div className="relative aspect-[2/1] overflow-hidden rounded-t-2xl">
          {/* Alle App-Heroes sind logohafte RGBA-Bilder → in der Rail
              einheitlich eingepasst (object-contain, gleiches Padding) auf
              akzentgetöntem Schein. So erscheinen alle fünf Icons gleich groß
              (kein cover-Aufblähen der quadratischen EatSafely-/WeFixIt-Logos). */}
          <div
            className="absolute inset-0 grid place-items-center"
            style={{
              background: `radial-gradient(70% 85% at 50% 45%, ${app.accent}2e, transparent 75%)`,
            }}
          >
            <div className="relative h-full w-full transition-transform duration-700 ease-premium group-hover:scale-105">
              <Image
                src={app.hero}
                alt={app.name}
                fill
                sizes="(min-width:768px) 560px, 100vw"
                className="object-contain p-6"
              />
            </div>
          </div>
          {/* Badge: bewusst statische Farben (dunkles Glas + heller Text),
              unabhängig von Theme und Bildinhalt */}
          <span className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-line bg-paperInk/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-paper backdrop-blur">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: app.accent }}
              aria-hidden
            />
            {tStatus(app.status)}
          </span>
        </div>
        <div className="flex flex-1 items-start justify-between gap-4 p-7">
          <div>
            <h3 className="font-display text-2xl font-medium text-ink md:text-3xl">
              {app.name}
            </h3>
            <p className="mt-1 text-sm font-medium" style={{ color: accent }}>
              {content.tagline}
            </p>
            <p className="mt-4 line-clamp-3 max-w-sm text-sm leading-relaxed text-ink-faint">
              {content.summary}
            </p>
          </div>
          <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-ink transition-all duration-500 group-hover:bg-ink group-hover:text-base-900">
            <ArrowUpRight size={18} aria-hidden />
            <span className="sr-only">{t("viewApp")}</span>
          </span>
        </div>
      </TransitionLink>
    </BentoTile>
  );
}
