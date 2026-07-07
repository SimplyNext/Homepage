"use client";

import { useRef, type ElementType } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

type Props = {
  children: string;
  className?: string;
  as?: ElementType;
  /** Aufteilung in Zeichen oder Wörter */
  split?: "chars" | "words";
  /** Beim Mount (Hero) oder beim Scrollen auslösen */
  trigger?: "load" | "scroll";
  stagger?: number;
  delay?: number;
};

/**
 * Eigenständiger, abhängigkeitsfreier Text-Splitter.
 * Zerlegt den String in Wörter (mit Zeilenumbruch-Schutz) und optional in
 * Zeichen, jeweils in einem Masken-Wrapper für ein sauberes „Reveal".
 */
export default function SplitText({
  children,
  className,
  as: Tag = "span",
  split = "chars",
  trigger = "scroll",
  stagger = 0.02,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  // Sichtbarer Fallback ohne JS / bei reduzierter Bewegung
  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current?.querySelectorAll<HTMLElement>("[data-piece]").forEach((p) => {
        p.style.transform = "none";
      });
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const pieces = ref.current.querySelectorAll<HTMLElement>("[data-piece]");
      if (!pieces.length) return;

      const anim = () =>
        gsap.fromTo(
          pieces,
          { yPercent: 115, rotate: 3 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1,
            ease: "power4.out",
            stagger,
            delay,
          }
        );

      if (trigger === "load") {
        anim();
      } else {
        ScrollTrigger.create({
          trigger: ref.current,
          start: "top 85%",
          once: true,
          onEnter: anim,
        });
      }
    },
    { scope: ref, dependencies: [children] }
  );

  const words = children.split(" ");

  // ElementType als Union aller Tags kollabiert die children-Props zu
  // `never` – auf die tatsächlich genutzten Props eingrenzen (ref ist in
  // React 19 eine normale Prop, auch für intrinsische Tags).
  const Comp = Tag as unknown as React.FC<{
    ref?: React.Ref<HTMLElement>;
    className?: string;
    children?: React.ReactNode;
    "aria-label"?: string;
  }>;

  return (
    <Comp ref={ref} className={className} aria-label={children}>
      {words.map((word, wi) => (
        <span
          key={wi}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden
        >
          {split === "chars" ? (
            word.split("").map((char, ci) => (
              <span key={ci} data-piece className="inline-block will-change-transform">
                {char}
              </span>
            ))
          ) : (
            <span data-piece className="inline-block will-change-transform">
              {word}
            </span>
          )}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Comp>
  );
}
