"use client";

import { useRef } from "react";
import { Home, Map, Compass, User } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

const GREETING = "Guten Morgen";
const CLOSING = [
  { w: "We", em: false },
  { w: "create", em: false },
  { w: "fluid", em: true },
  { w: "digital", em: true },
  { w: "experiences.", em: true },
];

export default function AppDeconstruction() {
  const root = useRef<HTMLElement>(null);
  const routeRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { isDesktop, reduce } = ctx.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
            reduce: boolean;
          };
          const q = gsap.utils.selector(root);

          const phone = q(".deco-phone");
          const glow = q(".deco-glow");
          const sb = q(".deco-sb");
          const tab = q(".deco-tab");
          const tabIcons = q(".deco-ti");
          const mapcard = q(".deco-map");
          const dist = q(".deco-dist");
          const av = q(".deco-av");
          const sub = q(".deco-sub");
          const chars = q(".deco-char");
          const chips = q(".deco-chip");
          const items = q(".deco-li");
          const floats = q(".deco-float");
          const closeWords = q(".deco-cw");
          const route = routeRef.current;

          // Route vorbereiten (Zeichen-Effekt)
          let len = 0;
          if (route) {
            len = route.getTotalLength();
            gsap.set(route, { strokeDasharray: len, strokeDashoffset: len });
          }

          if (reduce) {
            gsap.set(
              [sb, tab, tabIcons, mapcard, dist, av, sub, chars, chips, items, floats, closeWords],
              { autoAlpha: 1, x: 0, y: 0, scale: 1 }
            );
            gsap.set(glow, { autoAlpha: 1, scale: 1 });
            if (route) gsap.set(route, { strokeDashoffset: 0 });
            return;
          }

          // Ausgangszustände
          gsap.set(glow, { autoAlpha: 0.2, scale: 0.6 });
          gsap.set(sb, { autoAlpha: 0, y: -40 });
          gsap.set(tab, { autoAlpha: 0, y: 90 });
          gsap.set(tabIcons, { autoAlpha: 0, scale: 0.4 });
          gsap.set(mapcard, { autoAlpha: 0, scale: 0.9 });
          gsap.set(dist, { autoAlpha: 0 });
          gsap.set(av, { autoAlpha: 0, scale: 0.4 });
          gsap.set(sub, { autoAlpha: 0 });
          gsap.set(chars, { autoAlpha: 0, y: 14 });
          gsap.set(chips, { autoAlpha: 0, y: 16 });
          gsap.set(items, { autoAlpha: 0, x: 26 });
          gsap.set(closeWords, { autoAlpha: 0, y: 40 });
          gsap.set(q(".deco-fl"), { x: -130, autoAlpha: 0 });
          gsap.set(q(".deco-fr"), { x: 130, autoAlpha: 0 });

          const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: isDesktop ? "+=460%" : "+=360%",
              pin: true,
              scrub: 1.5,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // PHASE 1 — Gerüst fliegt ein
          tl.to(glow, { autoAlpha: 0.85, scale: 1.1, duration: 2 }, 0)
            .to([q(".deco-fl"), q(".deco-fr")], { x: 0, autoAlpha: 1, duration: 1.4, stagger: 0.1 }, 0.1)
            .to(tab, { autoAlpha: 1, y: 0, duration: 1.2 }, 0.4)
            .to(tabIcons, { autoAlpha: 1, scale: 1, duration: 0.8, stagger: 0.08 }, 0.6)
            .to(sb, { autoAlpha: 1, y: 0, duration: 1 }, 0.5)
            // PHASE 1b — Karte + Routenzeichnung
            .to(mapcard, { autoAlpha: 1, scale: 1, duration: 1.2 }, 1.0)
            .to(route, { strokeDashoffset: 0, duration: 1.8, ease: "power2.inOut" }, 1.1)
            .to(dist, { autoAlpha: 1, duration: 0.6 }, 2.2)
            // PHASE 2 — Texte Zeichen für Zeichen
            .to(chars, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.03 }, 2.0)
            .to(av, { autoAlpha: 1, scale: 1, duration: 0.8 }, 2.2)
            .to(sub, { autoAlpha: 1, duration: 0.6 }, 2.6)
            // PHASE 3 — Statistik + Liste
            .to(chips, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12 }, 2.8)
            .to(items, { autoAlpha: 1, x: 0, duration: 0.8, stagger: 0.15 }, 3.2)
            // PHASE 4 — Tilt + Schlusstext
            .to(
              phone,
              {
                scale: isDesktop ? 0.86 : 0.84,
                rotateY: isDesktop ? -18 : 0,
                rotateX: isDesktop ? 7 : 0,
                x: isDesktop ? -130 : 0,
                y: isDesktop ? 0 : "-8%",
                duration: 1.6,
                ease: "power3.inOut",
              },
              4.0
            )
            .to(closeWords, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.12 }, 4.3);
        }
      );
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} id="studio" className="relative bg-base-900">
      <div
        className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden"
        style={{ perspective: "1600px" }}
      >
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-25" />
        <div
          className="deco-glow pointer-events-none absolute left-1/2 top-[48%] h-[78vmin] w-[78vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(59,91,255,0.5), rgba(34,164,99,0.22) 45%, transparent 70%)" }}
          aria-hidden
        />

        {/* schwebende Module (Desktop) */}
        <div className="deco-float deco-fl absolute left-[9%] top-[30%] hidden h-16 w-40 rounded-2xl border border-line bg-base-800/70 backdrop-blur md:block" aria-hidden>
          <div className="flex h-full items-center gap-3 px-4">
            <span className="h-8 w-8 shrink-0 rounded-lg bg-accent/30" />
            <span className="flex-1 space-y-2"><span className="block h-2 w-3/4 rounded-full bg-paper/20" /><span className="block h-2 w-1/2 rounded-full bg-paper/10" /></span>
          </div>
        </div>
        <div className="deco-float deco-fr absolute right-[9%] bottom-[24%] hidden h-16 w-40 rounded-2xl border border-line bg-base-800/70 backdrop-blur md:block" aria-hidden>
          <div className="flex h-full items-center gap-3 px-4">
            <span className="h-8 w-8 shrink-0 rounded-lg bg-accent-alt/30" />
            <span className="flex-1 space-y-2"><span className="block h-2 w-2/3 rounded-full bg-paper/20" /><span className="block h-2 w-1/2 rounded-full bg-paper/10" /></span>
          </div>
        </div>

        {/* Schlusstext */}
        <div className="deco-close pointer-events-none absolute inset-x-gutter bottom-[7%] z-20 text-center md:inset-x-auto md:right-[6%] md:top-1/2 md:max-w-lg md:-translate-y-1/2 md:text-left">
          <h3 className="font-display text-4xl font-medium leading-[1.04] md:text-6xl">
            {CLOSING.map((c, i) => (
              <span key={i} className={`deco-cw inline-block ${c.em ? "text-accent" : ""}`}>
                {c.w}&nbsp;
              </span>
            ))}
          </h3>
        </div>

        {/* Phone */}
        <div
          className="deco-phone relative z-10 h-[clamp(474px,54svh,612px)] w-[clamp(232px,27svh,300px)] rounded-[3rem] border-[10px] border-base-700 bg-base-700 shadow-2xl will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute left-1/2 top-3.5 z-20 h-6 w-24 -translate-x-1/2 rounded-2xl bg-black" />
          <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-[#F6F4EF] text-[#15151a]">
            {/* Status-Bar */}
            <div className="deco-sb absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-4">
              <span className="font-mono text-xs font-semibold">9:41</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-sm bg-[#15151a]" />
                <span className="h-1.5 w-1.5 rounded-sm bg-[#15151a]" />
                <span className="h-2 w-4 rounded-sm bg-[#15151a]" />
              </span>
            </div>

            {/* Inhalt */}
            <div className="absolute inset-x-0 bottom-[66px] top-14 overflow-hidden px-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-display text-2xl font-semibold leading-tight">
                    {GREETING.split("").map((c, i) => (
                      <span key={i} className="deco-char inline-block">
                        {c === " " ? "\u00A0" : c}
                      </span>
                    ))}
                  </div>
                  <div className="deco-sub mt-1 text-[0.82rem] text-[#6b6760]">
                    Bereit für deine nächste Tour.
                  </div>
                </div>
                <span className="deco-av h-10 w-10 shrink-0 rounded-full" style={{ background: "linear-gradient(135deg,#3B5BFF,#22A463)" }} />
              </div>

              {/* Karten-Vorschau mit Route */}
              <div className="deco-map relative mt-4 h-[150px] overflow-hidden rounded-[18px]" style={{ background: "linear-gradient(150deg,#1d6b46,#0f3d29)" }}>
                <svg viewBox="0 0 300 150" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                  <path ref={routeRef} d="M20,120 C70,60 110,150 150,80 S240,30 285,55" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.95" />
                </svg>
                <span className="deco-dist absolute bottom-3 left-3.5 rounded-lg bg-white/90 px-2.5 py-1.5 font-mono text-xs font-semibold text-[#15151a]">
                  12,4 km · 640 hm
                </span>
              </div>

              {/* Statistik-Chips */}
              <div className="mt-3.5 flex gap-2">
                {[
                  { v: "12,4", k: "km" },
                  { v: "640", k: "höhe" },
                  { v: "3:40", k: "std" },
                ].map((c) => (
                  <div key={c.k} className="deco-chip flex-1 rounded-[13px] bg-black/5 px-2 py-2.5 text-center">
                    <div className="font-display text-base font-semibold">{c.v}</div>
                    <div className="mt-0.5 text-[0.62rem] uppercase tracking-wider text-[#8a857c]">{c.k}</div>
                  </div>
                ))}
              </div>

              {/* Tour-Liste */}
              <div className="mt-3.5 flex flex-col gap-2.5">
                {[
                  "linear-gradient(135deg,#3B5BFF,#6f86ff)",
                  "linear-gradient(135deg,#22A463,#4fd396)",
                ].map((bg, i) => (
                  <div key={i} className="deco-li flex items-center gap-3">
                    <span className="h-10 w-10 shrink-0 rounded-xl" style={{ background: bg }} />
                    <span className="flex-1 space-y-1.5">
                      <span className="block h-2 w-[72%] rounded-full bg-black/15" />
                      <span className="block h-2 w-[46%] rounded-full bg-black/[0.08]" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tab-Bar */}
            <div className="deco-tab absolute inset-x-0 bottom-0 z-20 flex h-[66px] items-center justify-around border-t border-black/[0.06] bg-[#F6F4EF]/95 px-4 pb-2 backdrop-blur">
              {[Home, Map, Compass, User].map((Icon, i) => (
                <span key={i} className={`deco-ti ${i === 0 ? "text-accent" : "text-black/30"}`}>
                  <Icon size={22} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
