"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap, useGSAP } from "@/lib/gsap";
import SplitText from "@/components/ui/SplitText";
import { sceneState } from "@/lib/homeScene";

/**
 * Finale: die Aurora beruhigt sich (sceneState.contactProgress → uCalm),
 * übrig bleibt eine ruhige Fläche mit einem Marken-Abschluss (kein CTA –
 * der einzige Kontaktpunkt lebt im Footer).
 */
export default function ContactFinale() {
  const root = useRef<HTMLElement>(null);
  const t = useTranslations("finale");

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
        {/* text-scrim entfernt (Banding-Ringe auf 8-Bit-Monitoren) */}
        <div className="relative">
          <h2 className="mx-auto max-w-4xl font-display text-display-md font-medium leading-[0.95] text-ink sm:text-display-lg">
            <SplitText split="words" stagger={0.05}>
              {t("claim")}
            </SplitText>
          </h2>
          <p className="mt-6 text-base text-ink-muted">{t("sub")}</p>
        </div>
      </div>
    </section>
  );
}
