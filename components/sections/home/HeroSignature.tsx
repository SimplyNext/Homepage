"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap, useGSAP } from "@/lib/gsap";
import SplitText from "@/components/ui/SplitText";
import Magnetic from "@/components/ui/Magnetic";
import TransitionLink from "@/components/ui/TransitionLink";
import HeroStarfieldMount from "@/components/webgl/HeroStarfieldMount";
import { sceneState } from "@/lib/homeScene";

/**
 * Hero „Signature": volle Viewport-Höhe über der Aurora. Die Headline
 * bricht beim Scrollen kinetisch auf (Zeilen driften gegenläufig, Buchstaben
 * fächern leicht), der Fortschritt speist gleichzeitig den Shader
 * (sceneState.heroProgress → Energie nimmt ab).
 */
export default function HeroSignature() {
  const root = useRef<HTMLElement>(null);
  const t = useTranslations("hero");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { reduce } = ctx.conditions as { reduce: boolean };
          if (reduce) return;

          const q = gsap.utils.selector(root);

          // Eintritts-Stagger beim Seitenaufruf
          gsap.from(q(".hero-fade"), {
            autoAlpha: 0,
            y: 24,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
            delay: 0.15,
          });

          // Scroll-Kinetik: Zeilen driften gegenläufig auseinander + Fade.
          // Der Trigger schreibt zusätzlich den Hero-Fortschritt in die Szene.
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
              onUpdate: (self) => {
                sceneState.heroProgress = self.progress;
              },
            },
          });
          tl.to(q(".hero-line-1"), { xPercent: -14, autoAlpha: 0 }, 0);
          tl.to(q(".hero-line-2"), { xPercent: 14, autoAlpha: 0 }, 0);
          tl.to(q(".hero-rest"), { y: -60, autoAlpha: 0 }, 0);
        }
      );
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="studio"
      className="relative z-10 flex min-h-[100svh] items-end overflow-hidden"
    >
      {/* Sternenhimmel als Hintergrund – NUR im Hero, opak, deckt die Aurora
          hier ab; der Rest der Seite behält die Aurora. */}
      <HeroStarfieldMount />

      <div className="relative z-10 mx-auto w-full max-w-shell px-gutter pb-[10vh] pt-40">
        {/* Kein text-scrim mehr: der radiale Fast-Schwarz-Verlauf erzeugte auf
            8-Bit-Monitoren Banding-Ringe („braune konzentrische Kreise").
            Der Sternen-Grund ist bereits dunkel & uniform – Text bleibt lesbar. */}
        <div className="relative">
          <p className="hero-fade mb-8 font-mono text-xs uppercase tracking-label text-ink-muted">
            <span className="text-accent-soft">{"{"}</span> {t("eyebrow")}{" "}
            <span className="text-accent-alt">{"}"}</span>
          </p>

          <h1 className="font-display text-display-xl font-medium text-ink">
            <span className="hero-line-1 block will-change-transform">
              <SplitText trigger="load" stagger={0.02}>
                {t("headlineLine1")}
              </SplitText>
            </span>
            <span className="hero-line-2 block text-ink-muted will-change-transform">
              <SplitText trigger="load" stagger={0.02} delay={0.25}>
                {t("headlineLine2")}
              </SplitText>
            </span>
          </h1>

          <div className="hero-rest mt-12 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <p className="hero-fade max-w-prose text-lg leading-relaxed text-ink-muted">
              {t("lead")}
            </p>
            <div className="hero-fade flex shrink-0 flex-wrap gap-4">
              <Magnetic strength={0.4}>
                <TransitionLink
                  href="/#apps"
                  className="inline-flex min-h-[44px] items-center rounded-full bg-ink px-8 py-4 text-sm font-medium text-base-900"
                  data-cursor
                >
                  {t("ctaWork")}
                </TransitionLink>
              </Magnetic>
            </div>
          </div>

          {/* Scroll-Hinweis */}
          <div className="hero-rest mt-16 flex items-center gap-4" aria-hidden>
            <span className="relative block h-10 w-px overflow-hidden bg-line">
              <span className="hero-scroll-dash absolute left-0 top-0 h-4 w-px animate-scroll-hint bg-ink" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-label text-ink-faint">
              {t("scrollHint")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
