"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * template.tsx wird bei JEDER Navigation neu gemountet (anders als layout.tsx).
 * Perfekt, um die ENTER-Animation zu spielen: Das Transition-Overlay wird
 * aufgedeckt und der neue Seiteninhalt sanft eingeblendet.
 */
export default function Template({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(".transition-panel");

      const tl = gsap.timeline();

      // REVEAL: Panels fahren nach oben raus (Origin oben), Overlay wird inaktiv
      if (panels.length) {
        tl.set(panels, { transformOrigin: "top", scaleY: 1 })
          .to(panels, {
            scaleY: 0,
            duration: 0.5,
            ease: "power3.inOut",
            stagger: 0.05,
          })
          .set(".transition-overlay", { pointerEvents: "none" }, ">-0.1");
      }

      // Inhalt einblenden
      tl.from(
        root.current,
        { autoAlpha: 0, y: 24, duration: 0.6, ease: "power2.out" },
        panels.length ? "<0.15" : 0
      );
    },
    { scope: root }
  );

  return (
    <div ref={root} data-transition-root>
      {children}
    </div>
  );
}
