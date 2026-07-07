"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import clsx from "clsx";

/**
 * Gemeinsamer Bento-Baustein: Liquid-Glass + Noise + sanfter 3D-Tilt zur
 * Maus (max. 6°, gedämpft). Der Tilt liegt auf einem INNEREN Wrapper,
 * damit der Fokus-Ring des umgebenden Links untransformiert bleibt.
 * Touch-Geräte und prefers-reduced-motion bekommen keinen Tilt.
 */
export default function BentoTile({
  children,
  className,
  innerClassName,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      const target = inner.current;
      if (!el || !target) return;

      const mm = gsap.matchMedia();
      mm.add(
        "(pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          const rx = gsap.quickTo(target, "rotationX", {
            duration: 0.6,
            ease: "power3.out",
          });
          const ry = gsap.quickTo(target, "rotationY", {
            duration: 0.6,
            ease: "power3.out",
          });

          const onMove = (e: PointerEvent) => {
            const r = el.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            rx(-py * 6);
            ry(px * 6);
          };
          const onLeave = () => {
            rx(0);
            ry(0);
          };

          el.addEventListener("pointermove", onMove, { passive: true });
          el.addEventListener("pointerleave", onLeave);
          return () => {
            el.removeEventListener("pointermove", onMove);
            el.removeEventListener("pointerleave", onLeave);
          };
        }
      );
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root} className={className} style={{ perspective: "900px" }}>
      <div
        ref={inner}
        className={clsx(
          "liquid-glass noise-overlay h-full rounded-2xl bg-base-800/40 will-change-transform",
          innerClassName
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
}
