"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import TransitionLink from "@/components/ui/TransitionLink";
import Reveal from "@/components/ui/Reveal";
import { type AppData } from "@/lib/apps";
import { useAppContent } from "@/lib/useAppContent";
import { stageApps, stageColor } from "@/lib/galerie";

/**
 * Die App-Bühne: auf Desktop eine angepinnte Fläche. Beim Scrollen schiebt
 * sich die Farbe der nächsten App von unten herein (clip-path), im Gerät in
 * der Mitte rollt der passende Bildschirm nach, der Name läuft groß dahinter
 * durch.
 *
 * Mobil und bei prefers-reduced-motion: kein Pin, sondern farbige Karten
 * untereinander.
 */
export default function GalerieStage() {
  const root = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const list = stageApps;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const stage = stageRef.current;
          if (!stage) return;
          const q = gsap.utils.selector(stage);
          const layers = q(".stage-layer");
          const screens = q(".stage-screen");
          const names = q(".stage-name");
          const phone = q(".stage-phone")[0];
          const N = layers.length;
          if (!N || !phone) return;

          const CLOSED = "inset(100% 0% 0% 0% round 56px 56px 0px 0px)";
          const OPEN = "inset(0% 0% 0% 0% round 0px 0px 0px 0px)";

          gsap.set(layers.slice(1), { clipPath: CLOSED });
          gsap.set(screens.slice(1), { yPercent: 100 });
          gsap.set(phone, { xPercent: -50, yPercent: -50, rotation: -4 });

          const tl = gsap.timeline({
            defaults: { ease: "power2.inOut", duration: 0.7 },
            scrollTrigger: {
              trigger: stage,
              start: "top top",
              end: `+=${(N - 1) * 120 + 40}%`,
              pin: true,
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                // Zeitachse: N-1 Wechsel + 0.3 Ausklang
                const time = self.progress * (N - 1 + 0.3);
                setActive(Math.min(N - 1, Math.max(0, Math.round(time - 0.15))));
              },
            },
          });

          names.forEach((name, i) => {
            tl.fromTo(
              name,
              { xPercent: 7 },
              { xPercent: -7, ease: "none", duration: 2 },
              Math.max(0, i - 1)
            );
          });
          for (let i = 1; i < N; i++) {
            const at = i - 1 + 0.3;
            tl.fromTo(layers[i], { clipPath: CLOSED }, { clipPath: OPEN }, at);
            tl.to(screens[i], { yPercent: 0 }, at);
            tl.to(phone, { rotation: i % 2 ? 4 : -4 }, at);
          }
          tl.to({}, { duration: 0.3 });

          // Tastatur: Fokus auf einen Link springt zur passenden Scroll-Position,
          // damit fokussierter Inhalt nie hinter einer anderen Farbfläche liegt.
          const st = tl.scrollTrigger!;
          const links = q(".stage-layer a") as HTMLAnchorElement[];
          const handlers = links.map((el, i) => {
            const h = () => {
              const target =
                st.start + (i / (N - 1 + 0.3)) * (st.end - st.start) + 2;
              window.scrollTo({ top: target, behavior: "instant" });
            };
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
    <section ref={root} id="apps" className="relative bg-base-900 text-paperInk">
      {/* ===== Desktop: angepinnte Bühne ===== */}
      <div
        ref={stageRef}
        className="relative hidden h-[100svh] overflow-hidden md:block motion-reduce:md:hidden"
      >
        {list.map((app, i) => (
          <StageLayer key={app.slug} app={app} index={i} total={list.length} />
        ))}

        {/* Gerät in der Mitte – liegt über allen Farbflächen */}
        <div
          className="stage-phone pointer-events-none absolute left-1/2 top-[52%] z-30 aspect-[1080/2640] h-[min(74svh,740px)] overflow-hidden rounded-[clamp(30px,3.2vw,46px)] border-[9px] border-[#14161C] bg-[#14161C] shadow-[0_50px_90px_rgba(20,22,28,0.35)] will-change-transform"
          aria-hidden
        >
          {list.map((app, i) => (
            <div key={app.slug} className="stage-screen absolute inset-0 will-change-transform">
              <Image
                src={app.shots[0].src}
                alt=""
                fill
                sizes="(min-width: 1800px) 420px, 320px"
                priority={i === 0}
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>

        {/* Fortschritt: ein Punkt je App in ihrer Farbe */}
        <div
          className="absolute right-[clamp(1rem,2.4vw,2.5rem)] top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2.5"
          aria-hidden
        >
          {list.map((app, i) => (
            <span
              key={app.slug}
              className="block w-3.5 rounded-full border-2 border-[#14161C] transition-all duration-500 ease-premium"
              style={{
                height: i === active ? 40 : 14,
                background: i === active ? "#14161C" : stageColor(app),
              }}
            />
          ))}
        </div>
      </div>

      {/* ===== Mobil / Reduced Motion: farbige Karten ===== */}
      <div className="mx-auto flex max-w-shell flex-col gap-5 px-gutter py-16 md:hidden motion-reduce:md:grid motion-reduce:md:grid-cols-2">
        {list.map((app, i) => (
          <MobileCard key={app.slug} app={app} index={i} total={list.length} />
        ))}
      </div>
    </section>
  );
}

/** Eine Farbfläche der Bühne mit Name, Text links und Funktionen rechts. */
function StageLayer({
  app,
  index,
  total,
}: {
  app: AppData;
  index: number;
  total: number;
}) {
  const content = useAppContent(app.slug);
  const t = useTranslations("galerie");
  // Lange Namen kleiner setzen, damit sie in die Breite passen.
  const nameSize = Math.min(30, 170 / app.name.length);

  return (
    <div
      className="stage-layer absolute inset-0 will-change-[clip-path]"
      style={{ background: stageColor(app), zIndex: index + 1 }}
    >
      <div
        className="stage-name pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center whitespace-nowrap font-display font-extrabold leading-none tracking-[-0.05em] text-transparent [-webkit-text-stroke:2px_rgba(20,22,28,0.2)] will-change-transform"
        style={{ fontSize: `${nameSize}vw` }}
        aria-hidden
      >
        {app.name}
      </div>

      <div className="absolute left-[clamp(1.5rem,6vw,6rem)] top-1/2 w-[min(25vw,520px)] -translate-y-1/2">
        <p className="text-[clamp(0.95rem,1.1vw,1.3rem)] font-semibold">
          {t("stageCounter", { current: index + 1, total })} · {content.category}
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.4rem,4.6vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
          {app.name}
        </h2>
        <p className="mt-4 text-[clamp(1.05rem,1.4vw,1.75rem)] font-medium leading-snug">
          {content.tagline}
        </p>
        <TransitionLink
          href={`/apps/${app.slug}`}
          className="mt-7 inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-paperInk px-7 text-[1rem] font-semibold text-paper transition-transform duration-300 ease-premium hover:scale-[1.04]"
          data-cursor
        >
          {t("stageVisit")}
          <ArrowUpRight size={18} aria-hidden />
        </TransitionLink>
      </div>

      <ul className="absolute right-[clamp(3.5rem,7vw,7.5rem)] top-1/2 hidden w-[min(22vw,460px)] -translate-y-1/2 flex-col gap-7 lg:flex">
        {content.features.slice(0, 2).map((f) => (
          <li key={f.title} className="border-t-2 border-[#14161C] pt-4">
            <p className="text-[clamp(1.15rem,1.3vw,1.6rem)] font-semibold">{f.title}</p>
            <p className="mt-1.5 line-clamp-4 text-[clamp(0.95rem,1.05vw,1.25rem)] leading-snug">{f.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileCard({
  app,
  index,
  total,
}: {
  app: AppData;
  index: number;
  total: number;
}) {
  const content = useAppContent(app.slug);
  const t = useTranslations("galerie");
  const shotAlt = (content.shotAlts?.[0] as string | undefined) ?? app.name;

  return (
    <Reveal
      variant="up"
      className="overflow-hidden rounded-[32px]"
    >
      <div
        className="flex flex-col px-6 pt-8"
        style={{ background: stageColor(app) }}
      >
        <p className="text-sm font-semibold">
          {t("stageCounter", { current: index + 1, total })} · {content.category}
        </p>
        <h2 className="mt-3 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.04em]">
          {app.name}
        </h2>
        <p className="mt-3 text-lg font-medium leading-snug">{content.tagline}</p>
        <TransitionLink
          href={`/apps/${app.slug}`}
          className="mt-6 inline-flex min-h-[48px] items-center gap-2 self-start rounded-full bg-paperInk px-6 text-[1rem] font-semibold text-paper"
        >
          {t("stageVisit")}
          <ArrowUpRight size={18} aria-hidden />
        </TransitionLink>
        <div className="relative mx-auto mt-8 aspect-[1080/1500] w-[min(240px,70%)] overflow-hidden rounded-t-[30px] border-[7px] border-b-0 border-[#14161C] bg-[#14161C]">
          <Image
            src={app.shots[0].src}
            alt={`${app.name} – ${shotAlt}`}
            fill
            sizes="240px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </Reveal>
  );
}
