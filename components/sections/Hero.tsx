"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import SplitText from "@/components/ui/SplitText";
import Magnetic from "@/components/ui/Magnetic";
import TransitionLink from "@/components/ui/TransitionLink";

const heroImg = "/images/hero.jpg";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Parallax auf das Hintergrundbild beim Scrollen
      gsap.to(".hero-img", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      });
      // Eyebrow + Lead + CTA gestaffelt einblenden
      gsap.from(".hero-fade", {
        autoAlpha: 0,
        y: 20,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.2,
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      {/* Hintergrund */}
      <div className="absolute inset-0">
        <div className="hero-img absolute inset-[-10%]">
          <Image
            src={heroImg}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
        </div>
        <div className="grid-lines absolute inset-0 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-base-900 via-base-900/40 to-base-900/70" />
      </div>

      <div className="relative mx-auto w-full max-w-shell px-gutter pb-[12vh] pt-32">
        <p className="hero-fade mb-8 font-mono text-xs uppercase tracking-label text-ink-muted">
          <span className="text-accent">{"{"}</span> App-Studio · Flutter · Expo{" "}
          <span className="text-accent-alt">{"}"}</span>
        </p>

        <h1 className="font-display text-display-lg font-medium text-paper">
          <SplitText trigger="load" stagger={0.025}>
            Wir bauen Apps,
          </SplitText>
          <br />
          <SplitText trigger="load" stagger={0.025} delay={0.25} className="text-ink-muted">
            die in Erinnerung bleiben.
          </SplitText>
        </h1>

        <div className="hero-fade mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-prose text-lg leading-relaxed text-ink-muted">
            SimplyNext entwirft und entwickelt premium, plattformübergreifende
            Apps – kompromisslos in Performance, Detail und Gefühl.
          </p>
          <div className="flex shrink-0 gap-4">
            <Magnetic strength={0.4}>
              <TransitionLink
                href="/#apps"
                className="inline-flex rounded-full bg-paper px-7 py-4 text-sm font-medium text-base-900"
                data-cursor
              >
                Arbeiten ansehen
              </TransitionLink>
            </Magnetic>
            <Magnetic strength={0.4}>
              <TransitionLink
                href="/#contact"
                className="inline-flex rounded-full border border-line px-7 py-4 text-sm font-medium text-paper"
                data-cursor
              >
                Kontakt
              </TransitionLink>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
