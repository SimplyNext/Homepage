"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import TransitionLink from "@/components/ui/TransitionLink";
import Reveal from "@/components/ui/Reveal";
import { apps, type AppData } from "@/lib/apps";
import { useAppContent } from "@/lib/useAppContent";
import { useMountedTheme } from "@/hooks/useMountedTheme";
import JourneyPhone from "./JourneyPhone";

/**
 * Die 3D-Phone-Journey: auf Desktop eine gepinnte Bühne, in der ein premium
 * CSS-3D-Phone (JourneyPhone) rechts steht, während links die App-„Beats"
 * durchwechseln. Beim Scrollen macht der Screen im Phone denselben Takt mit
 * (Crossfade + Flip); das Gerät neigt sich mit der Maus (Pointer-Parallax).
 * Reines DOM/CSS – kein WebGL-Modell mehr (scharfe Screenshots, keine
 * Textur-/Ecken-Probleme).
 *
 * Mobil und bei prefers-reduced-motion: kein Pin – gestapelte Karten mit
 * echtem <Image>-Phone-Frame (Tailwind motion-reduce-Variante blendet die
 * Desktop-Bühne auch auf großen Screens aus).
 *
 * Neue App = Eintrag in lib/apps.ts + apps.<slug>-Messages; Timeline und
 * Screen-Flip skalieren generisch mit.
 */
export default function PhoneJourney() {
  const root = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("journey");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const stage = stageRef.current;
          if (!stage) return;

          const q = gsap.utils.selector(stage);
          const beats = q(".journey-beat");
          const screens = q(".journey-screen"); // je App eine Screenshot-Ebene
          const turn = q(".journey-phone-turn")[0]; // Gerät-Flip (rotateY)
          const N = beats.length;
          if (!N) return;

          gsap.set(beats, { autoAlpha: 0, y: 40 });
          // Erste App sichtbar, restliche Screens leicht weggedreht + unsichtbar.
          gsap.set(screens, { autoAlpha: 0, rotationY: 22 });
          if (screens[0]) gsap.set(screens[0], { autoAlpha: 1, rotationY: 0 });

          const tl = gsap.timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: {
              trigger: stage,
              start: "top top",
              // Pin-Länge wächst mit der App-Anzahl (~160 % Scrollweg pro App
              // – bewusst länger, damit die Screen-Wechsel ruhiger wirken)
              end: `+=${N * 160}%`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // Ein Zeit-Segment pro App: Beat rein → halten → raus. Der Screen im
          // Phone macht denselben Takt mit (Crossfade + „Flip" via rotateY),
          // das Gerät schwenkt pro App leicht mit (turn).
          beats.forEach((beat, i) => {
            tl.to(beat, { autoAlpha: 1, y: 0, duration: 0.3 }, i + 0.12);
            tl.to(beat, { autoAlpha: 0, y: -40, duration: 0.3 }, i + 1 - 0.3);

            const screen = screens[i];
            if (screen && i > 0) {
              tl.fromTo(
                screen,
                { autoAlpha: 0, rotationY: 22 },
                { autoAlpha: 1, rotationY: 0, duration: 0.3 },
                i + 0.12
              );
            }
            if (screen && i < N - 1) {
              tl.to(
                screen,
                { autoAlpha: 0, rotationY: -18, duration: 0.3 },
                i + 1 - 0.3
              );
            }
            if (turn) {
              tl.to(
                turn,
                { rotationY: i % 2 === 0 ? -5 : 5, duration: 0.5 },
                i + 0.1
              );
            }
          });

          // Tastatur: Fokus auf einen Beat-Link springt zur passenden
          // Scroll-Position, damit fokussierter Inhalt nie unsichtbar ist.
          const st = tl.scrollTrigger!;
          const links = q(".journey-beat a") as HTMLAnchorElement[];
          const onFocus = (i: number) => () => {
            const target = st.start + ((i + 0.5) / N) * (st.end - st.start);
            window.scrollTo({ top: target, behavior: "instant" });
          };
          const handlers = links.map((el, i) => {
            const h = onFocus(i);
            el.addEventListener("focus", h);
            return { el, h };
          });

          return () => {
            handlers.forEach(({ el, h }) => el.removeEventListener("focus", h));
          };
        }
      );

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative z-10">
      {/* ===== Desktop: gepinnte 3D-Bühne ===== */}
      <div
        ref={stageRef}
        className="relative hidden h-[100svh] overflow-hidden motion-reduce:md:hidden md:block"
      >
        <div className="mx-auto grid h-full max-w-shell grid-cols-[1.1fr_1fr] items-center gap-12 px-gutter pt-[90px]">
          <div className="relative h-[60svh]">
            <div className="absolute -top-16 left-0">
              <p className="font-mono text-xs uppercase tracking-label text-ink-faint">
                <span className="text-accent-soft">{"{"}</span> {t("eyebrow")}{" "}
                <span className="text-accent-alt">{"}"}</span>
              </p>
              <h2 className="mt-4 font-display text-2xl font-medium text-ink-muted">
                {t("heading")}
              </h2>
            </div>

            {apps.map((app, i) => (
              <JourneyBeat key={app.slug} app={app} index={i} total={apps.length} />
            ))}
          </div>

          {/* Premium CSS-3D-Phone: 3D-Tilt (Pointer) + Screen-Flip (Scroll) */}
          <div className="h-[68svh]">
            <JourneyPhone apps={apps} />
          </div>
        </div>
      </div>

      {/* ===== Mobil / Reduced Motion: gestapelte Karten ===== */}
      <div className="mx-auto max-w-shell px-gutter py-section md:hidden motion-reduce:md:block">
        <p className="font-mono text-xs uppercase tracking-label text-ink-faint">
          <span className="text-accent-soft">{"{"}</span> {t("eyebrow")}{" "}
          <span className="text-accent-alt">{"}"}</span>
        </p>
        <h2 className="mt-4 font-display text-display-md font-medium text-ink">
          {t("heading")}
        </h2>

        <div className="mt-16 flex flex-col gap-20 motion-reduce:md:grid motion-reduce:md:grid-cols-2 motion-reduce:md:gap-12">
          {apps.map((app, i) => (
            <MobileAppCard key={app.slug} app={app} index={i} total={apps.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Text-„Beat" einer App auf der gepinnten Desktop-Bühne. */
function JourneyBeat({
  app,
  index,
  total,
}: {
  app: AppData;
  index: number;
  total: number;
}) {
  const content = useAppContent(app.slug);
  const t = useTranslations("journey");
  const { resolvedTheme } = useMountedTheme();
  const accent = resolvedTheme === "light" ? app.accentLight : app.accent;

  return (
    <div className="journey-beat absolute inset-0 flex flex-col justify-center">
      <p className="font-mono text-xs uppercase tracking-label text-ink-faint">
        {t("counter", { current: index + 1, total })}
      </p>
      <h3 className="mt-5 font-display text-display-md font-medium text-ink">
        {app.name}
      </h3>
      <p className="mt-3 text-lg font-medium" style={{ color: accent }}>
        {content.tagline}
      </p>
      <ul className="mt-8 flex max-w-md flex-col gap-4">
        {content.features.slice(0, 2).map((f) => (
          <li key={f.title} className="border-l border-line pl-5">
            <p className="text-sm font-medium text-ink">{f.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-faint">{f.text}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <TransitionLink
          href={`/apps/${app.slug}`}
          className="liquid-glass inline-flex min-h-[44px] items-center gap-2 rounded-full bg-base-800/40 px-7 py-3.5 text-sm font-medium text-ink"
          data-cursor
        >
          {t("visitApp")}
          <ArrowUpRight size={16} aria-hidden />
        </TransitionLink>
      </div>
    </div>
  );
}

/** Mobile/Reduced-Motion-Variante: DOM-Phone-Frame mit echtem Screenshot. */
function MobileAppCard({
  app,
  index,
  total,
}: {
  app: AppData;
  index: number;
  total: number;
}) {
  const content = useAppContent(app.slug);
  const t = useTranslations("journey");
  const { resolvedTheme } = useMountedTheme();
  const accent = resolvedTheme === "light" ? app.accentLight : app.accent;
  const shotAlt = (content.shotAlts?.[0] as string | undefined) ?? app.name;

  return (
    <Reveal variant="up" className="flex flex-col items-start">
      <div className="relative mx-auto w-[min(240px,70vw)] overflow-hidden rounded-[2.2rem] border-8 border-base-700 bg-base-700 shadow-2xl">
        <div className="relative aspect-[1080/2640] overflow-hidden rounded-[1.7rem]">
          <Image
            src={app.shots[0].src}
            alt={`${app.name} – ${shotAlt}`}
            fill
            sizes="240px"
            className="object-cover"
          />
        </div>
      </div>
      <p className="mt-10 font-mono text-xs uppercase tracking-label text-ink-faint">
        {t("counter", { current: index + 1, total })}
      </p>
      <h3 className="mt-3 font-display text-3xl font-medium text-ink">{app.name}</h3>
      <p className="mt-2 text-base font-medium" style={{ color: accent }}>
        {content.tagline}
      </p>
      <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-faint">
        {content.summary}
      </p>
      <TransitionLink
        href={`/apps/${app.slug}`}
        className="liquid-glass mt-8 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-base-800/40 px-7 py-3.5 text-sm font-medium text-ink"
        data-cursor
      >
        {t("visitApp")}
        <ArrowUpRight size={16} aria-hidden />
      </TransitionLink>
    </Reveal>
  );
}
