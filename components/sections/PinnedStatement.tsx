"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

const statement =
  "Eine App ist erst fertig, wenn sie sich leicht anfühlt. Jede Bewegung, jede Millisekunde, jedes Detail dient diesem einen Ziel.";

export default function PinnedStatement() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray<HTMLElement>(".stmt-word");

      // Komplexe Pin-Animation nur ab Tablet; mobil einfacher Reveal (Performance)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.set(words, { opacity: 0.12 });
        gsap.to(words, {
          opacity: 1,
          stagger: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "+=180%",
            scrub: true,
            pin: true,
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          words,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.06,
            scrollTrigger: { trigger: ref.current, start: "top 70%", end: "bottom 60%", scrub: true },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section ref={ref} id="studio" className="bg-base-900">
      <div className="mx-auto flex min-h-[60vh] max-w-shell items-center px-gutter py-section md:min-h-screen">
        <p className="font-display text-display-md font-medium leading-tight">
          {statement.split(" ").map((w, i) => (
            <span key={i} className="stmt-word inline-block">
              {w}&nbsp;
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
