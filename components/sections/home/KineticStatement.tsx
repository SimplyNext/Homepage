"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Kinetisches Statement: Wörter kommen unscharf und leicht versetzt und
 * schärfen sich Wort für Wort beim Scrollen (gepinnt, Desktop). Mobil nur
 * Opacity-Scrub (blur() ist auf Mobile-GPUs teuer), reduced-motion: statisch.
 */
export default function KineticStatement() {
  const ref = useRef<HTMLElement>(null);
  const statement = useTranslations("statement")("text");

  useGSAP(
    () => {
      const words = gsap.utils.toArray<HTMLElement>(".stmt-word");
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.set(words, { opacity: 0.2, filter: "blur(6px)", y: "0.2em" });
          const tween = gsap.to(words, {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            stagger: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top top",
              end: "+=160%",
              scrub: true,
              pin: true,
            },
            onComplete: () => {
              gsap.set(words, { clearProps: "filter,willChange" });
            },
          });
          return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
          };
        }
      );

      mm.add(
        "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.fromTo(
            words,
            { opacity: 0.25 },
            {
              opacity: 1,
              stagger: 0.06,
              scrollTrigger: {
                trigger: ref.current,
                start: "top 70%",
                end: "bottom 60%",
                scrub: true,
              },
            }
          );
        }
      );

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="relative z-10">
      <div className="mx-auto flex min-h-[60vh] max-w-shell items-center px-gutter py-section md:min-h-screen">
        <p className="font-display text-display-md font-medium leading-tight text-ink">
          {statement.split(" ").map((w, i) => (
            <span key={i} className="stmt-word inline-block will-change-[filter,opacity]">
              {w}&nbsp;
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
