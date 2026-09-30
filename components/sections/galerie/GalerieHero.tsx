"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap, useGSAP } from "@/lib/gsap";
import SplitText from "@/components/ui/SplitText";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";
import { getApp } from "@/lib/apps";

// Fächer im Hero: fünf Apps, die mittlere steht gerade.
const FAN = ["eatsafety", "wefixit", "werkflow", "shrinkit", "fabula"];
const TILT = [-12, -6, 0, 6, 12];
const DROP = [14, 4, 0, 4, 14]; // äußere Geräte sitzen etwas tiefer (in %)

/**
 * Hero der Galerie: große Headline, darunter ein Fächer aus fünf Geräten, der
 * beim Laden aufsteigt und sich beim Scrollen weiter auffächert.
 */
export default function GalerieHero() {
  const root = useRef<HTMLElement>(null);
  const t = useTranslations("galerie");
  const { scrollTo } = useSmoothScroll();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const q = gsap.utils.selector(root);

        gsap.from(q(".hero-fade"), {
          autoAlpha: 0,
          y: 24,
          duration: 0.7,
          stagger: 0.1,
          delay: 0.35,
        });
        // Aufsteigen beim Laden (innere Ebene)
        gsap.from(q(".fan-rise"), {
          yPercent: 70,
          rotation: 0,
          autoAlpha: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: { each: 0.08, from: "center" },
          delay: 0.25,
        });
        // Auffächern beim Scrollen (äußere Ebene)
        const phones = q(".fan-spread");
        const mid = (phones.length - 1) / 2;
        phones.forEach((el, i) => {
          gsap.to(el, {
            xPercent: (i - mid) * 28,
            yPercent: -12 - Math.abs(i - mid) * 5,
            rotation: (i - mid) * 5,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[max(100svh,780px)] flex-col overflow-hidden bg-base-900 text-ink"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-shell flex-col items-center px-gutter pt-[clamp(8rem,18vh,11rem)] text-center">
        <h1 className="font-display text-[clamp(3rem,8.6vw,11rem)] font-extrabold leading-[0.92] tracking-[-0.045em]">
          <span className="block">
            <SplitText trigger="load" stagger={0.02}>
              {t("heroLine1")}
            </SplitText>
          </span>
          <span className="block">
            <SplitText trigger="load" stagger={0.02} delay={0.2}>
              {t("heroLine2")}
            </SplitText>
          </span>
        </h1>
        <p className="hero-fade mt-7 max-w-[34em] text-[clamp(1.05rem,1.45vw,1.75rem)] leading-relaxed text-ink-muted">
          {t("heroLead")}
        </p>
        <a
          href="#apps"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#apps");
          }}
          className="hero-fade mt-8 inline-flex min-h-[52px] items-center rounded-full bg-ink px-7 text-[1rem] font-semibold text-base-900 transition-transform duration-300 ease-premium hover:scale-[1.04]"
          data-cursor
        >
          {t("heroCta")}
        </a>
      </div>

      {/* Geräte-Fächer, unten angeschnitten */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-[46%] items-end justify-center"
        aria-hidden
      >
        {FAN.map((slug, i) => {
          const app = getApp(slug);
          if (!app) return null;
          return (
            <div
              key={slug}
              className="fan-spread -mx-[0.6vw] w-[clamp(118px,15vw,340px)] shrink-0 will-change-transform"
              style={{ zIndex: i === 2 ? 3 : 2 - Math.abs(i - 2) + 1 }}
            >
              <div
                className="fan-rise relative aspect-[1080/2640] overflow-hidden rounded-[clamp(18px,2.4vw,36px)] border-[clamp(4px,0.5vw,7px)] border-[#23262F] bg-[#23262F] shadow-[0_30px_60px_rgba(20,22,28,0.22)]"
                style={{ transform: `translateY(${DROP[i]}%) rotate(${TILT[i]}deg)` }}
              >
                <Image
                  src={app.shots[0].src}
                  alt=""
                  fill
                  sizes="(min-width: 1800px) 340px, 224px"
                  priority={i === 2}
                  className="object-cover object-top"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
