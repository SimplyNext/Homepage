"use client";

import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

type Variant = "up" | "scale" | "clip" | "fade";

const variants: Record<Variant, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
  up: { from: { y: 40, autoAlpha: 0 }, to: { y: 0, autoAlpha: 1 } },
  scale: { from: { scale: 0.92, autoAlpha: 0 }, to: { scale: 1, autoAlpha: 1 } },
  fade: { from: { autoAlpha: 0 }, to: { autoAlpha: 1 } },
  clip: {
    from: { clipPath: "inset(0 100% 0 0)" },
    to: { clipPath: "inset(0 0% 0 0)" },
  },
};

export default function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(ref.current, { autoAlpha: 1, clearProps: "all" });
        return;
      }
      const v = variants[variant];
      gsap.fromTo(ref.current, v.from, {
        ...v.to,
        duration: variant === "clip" ? 1.1 : 0.9,
        ease: variant === "clip" ? "expo.inOut" : "power3.out",
        delay,
        scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
      });
    },
    { scope: ref }
  );

  // ElementType als Union aller Tags kollabiert die children-Props zu
  // `never` – auf die tatsächlich genutzten Props eingrenzen (ref ist in
  // React 19 eine normale Prop, auch für intrinsische Tags).
  const Comp = Tag as unknown as React.FC<{
    ref?: React.Ref<HTMLElement>;
    className?: string;
    children?: ReactNode;
  }>;

  return (
    <Comp ref={ref} className={className}>
      {children}
    </Comp>
  );
}
