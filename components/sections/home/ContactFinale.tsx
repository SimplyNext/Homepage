"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap, useGSAP } from "@/lib/gsap";
import SplitText from "@/components/ui/SplitText";
import Magnetic from "@/components/ui/Magnetic";
import { site } from "@/lib/site";
import { sceneState } from "@/lib/homeScene";

/**
 * Finale: die Aurora beruhigt sich (sceneState.contactProgress → uCalm),
 * übrig bleibt eine ruhige Fläche mit großer Einladung.
 */
export default function ContactFinale() {
  const root = useRef<HTMLElement>(null);
  const t = useTranslations("contact");

  useGSAP(
    () => {
      const st = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          end: "center center",
          scrub: true,
          onUpdate: (self) => {
            sceneState.contactProgress = self.progress;
          },
        },
      });
      return () => {
        st.scrollTrigger?.kill();
        st.kill();
      };
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="contact"
      className="relative z-10 flex min-h-[90svh] items-center"
    >
      <div className="relative mx-auto w-full max-w-shell px-gutter py-section text-center">
        <div className="text-scrim pointer-events-none absolute inset-[-5%]" aria-hidden />
        <div className="relative">
          <p className="mb-8 font-mono text-xs uppercase tracking-label text-ink-faint">
            <span className="text-accent-soft">{"{"}</span> {t("eyebrow")}{" "}
            <span className="text-accent-alt">{"}"}</span>
          </p>
          <h2 className="mx-auto max-w-4xl font-display text-display-lg font-medium leading-[0.95] text-ink">
            <SplitText split="words" stagger={0.05}>
              {t("heading")}
            </SplitText>
          </h2>
          <p className="mt-6 text-base text-ink-muted">{t("sub")}</p>
          <div className="mt-14">
            <Magnetic strength={0.35}>
              <a
                href={`mailto:${site.email}`}
                className="liquid-glass inline-flex min-h-[44px] items-center rounded-full bg-base-800/40 px-10 py-5 text-base font-medium text-ink"
                data-cursor
              >
                {site.email}
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
