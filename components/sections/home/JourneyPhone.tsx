"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AppData } from "@/lib/apps";
import { PhoneFrame, PhoneScreenContent } from "@/components/ui/PhoneFrame";

/**
 * Premium CSS-3D-Phone der Desktop-Journey (ersetzt das frühere WebGL-Modell).
 *
 * Aufbau (echte 3D-Perspektive via CSS-Transforms, gestochen scharfe DOM-
 * Screenshots – kein Textur-Mapping, kein Ecken-Raten):
 *   perspective-Container
 *     └ .journey-phone-tilt   ← Pointer-Parallax (rotateX/rotateY, lokaler Listener)
 *         └ .journey-phone-turn ← Scroll-Flip des Geräts (rotateY, aus der Pin-Timeline)
 *             └ PhoneFrame (theme-invertierter Rahmen, Dynamic Island, Screen)
 *                 └ eine .journey-screen-Ebene pro App, gestapelt; Crossfade +
 *                   Flip steuert die Timeline in PhoneJourney.
 *
 * Zwei getrennte Transform-Ebenen (tilt vs. turn), damit Pointer-Parallax und
 * Scroll-Flip sich nicht gegenseitig überschreiben.
 */
export default function JourneyPhone({ apps }: { apps: AppData[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const tilt = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = tilt.current;
      const host = wrap.current;
      if (!el || !host) return;

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduced) return;

      const rx = gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3" });
      const ry = gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3" });

      // Fensterweiter Pointer: der Canvas/die Bühne ist teils pointer-events-none,
      // daher am window lauschen und relativ zur Phone-Mitte auslenken.
      const onMove = (e: PointerEvent) => {
        const r = host.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const nx = gsap.utils.clamp(-1, 1, (e.clientX - cx) / (r.width / 2));
        const ny = gsap.utils.clamp(-1, 1, (e.clientY - cy) / (r.height / 2));
        ry(nx * 14); // links/rechts neigen (deutlicher Ausschlag)
        rx(-ny * 11); // oben/unten neigen
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      return () => window.removeEventListener("pointermove", onMove);
    },
    { scope: wrap }
  );

  return (
    <div
      ref={wrap}
      className="grid h-full place-items-center"
      style={{ perspective: "1300px" }}
      aria-hidden
    >
      <div
        ref={tilt}
        className="journey-phone-tilt relative"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {/* Scroll-Flip-Ebene (rotateY aus der Pin-Timeline) */}
        <div
          className="journey-phone-turn relative"
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          <PhoneFrame className="h-[68svh] max-h-[620px] w-[calc(68svh*1080/2640)] max-w-[254px]">
            {apps.map((app, i) => (
              <div
                key={app.slug}
                className="journey-screen absolute inset-0"
                data-index={i}
                style={{ opacity: i === 0 ? 1 : 0, backfaceVisibility: "hidden" }}
              >
                <PhoneScreenContent
                  src={app.shots[0].src}
                  chrome={!!app.syntheticChrome}
                  priority={i === 0}
                />
              </div>
            ))}
          </PhoneFrame>
        </div>
      </div>
    </div>
  );
}
