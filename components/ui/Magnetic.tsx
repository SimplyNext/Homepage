"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Umschließt ein Element und lässt es dem Cursor magnetisch folgen.
 * Nur auf Geräten mit feinem Zeiger aktiv; auf Touch passiert nichts.
 */
export default function Magnetic({
  children,
  strength = 0.4,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (!window.matchMedia("(pointer: fine)").matches) return;

      const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });

      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const relX = e.clientX - (r.left + r.width / 2);
        const relY = e.clientY - (r.top + r.height / 2);
        xTo(relX * strength);
        yTo(relY * strength);
      };
      const reset = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", reset);
      return () => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", reset);
      };
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={className} style={{ display: "inline-block" }}>
      {children}
    </span>
  );
}
