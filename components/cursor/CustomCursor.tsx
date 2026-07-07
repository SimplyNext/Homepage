"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Premium-Custom-Cursor:
 *  - folgt dem Zeiger weich (gsap.quickTo / Lerp)
 *  - wächst und invertiert über interaktiven Elementen ([data-cursor])
 *  - blendet sich nur auf Geräten mit feinem Zeiger ein (Maus, kein Touch)
 *
 * Magnetisches Heranziehen einzelner Buttons übernimmt <Magnetic/>.
 */
export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    // Bei reduzierter Bewegung den System-Cursor behalten (Audit-Fix): der
    // eigene Cursor blendet ihn sonst komplett aus, unabhängig von der
    // Präferenz gegen Bewegungseffekte.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced || !dot.current || !ring.current) return;

    document.documentElement.classList.add("has-custom-cursor");

    gsap.set([dot.current, ring.current], { xPercent: -50, yPercent: -50 });

    const xDot = gsap.quickTo(dot.current, "x", { duration: 0.15, ease: "power3" });
    const yDot = gsap.quickTo(dot.current, "y", { duration: 0.15, ease: "power3" });
    const xRing = gsap.quickTo(ring.current, "x", { duration: 0.45, ease: "power3" });
    const yRing = gsap.quickTo(ring.current, "y", { duration: 0.45, ease: "power3" });

    const move = (e: PointerEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const enter = () =>
      gsap.to(ring.current, { scale: 2.4, opacity: 0.5, duration: 0.4, ease: "power3.out" });
    const leave = () =>
      gsap.to(ring.current, { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" });

    const press = () => gsap.to(ring.current, { scale: 0.8, duration: 0.2 });
    const release = () => gsap.to(ring.current, { scale: 1, duration: 0.2 });

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", press);
    window.addEventListener("pointerup", release);

    // Hover-Reaktion über Delegation – greift auch für später gemountete Elemente
    const over = (e: Event) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [data-cursor]")) enter();
      // Über fix-dunklen Flächen (z. B. App-Hero im Light-Mode) den Cursor auf
      // Weiß umschalten, damit er dort sichtbar bleibt.
      if (el.closest("[data-cursor-dark]")) {
        dot.current?.parentElement?.classList.add("cursor-on-dark");
      }
    };
    const out = (e: Event) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [data-cursor]")) leave();
      if (el.closest("[data-cursor-dark]")) {
        const to = (e as PointerEvent).relatedTarget as HTMLElement | null;
        if (!to || !to.closest("[data-cursor-dark]")) {
          dot.current?.parentElement?.classList.remove("cursor-on-dark");
        }
      }
    };
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);

    gsap.to([dot.current, ring.current], { opacity: 1, duration: 0.3 });

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
    };
  });

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[130] hidden md:block [&.cursor-on-dark_.cursor-ring]:border-paper [&.cursor-on-dark_.cursor-dot]:bg-paper"
      aria-hidden
    >
      {/* Ring + Punkt in ink (theme-adaptiv: dunkel im Light-, hell im
          Dark-Mode) → auf normalem Grund immer knackig sichtbar. Über
          fix-dunklen Flächen ([data-cursor-dark]) schaltet .cursor-on-dark
          auf paper (weiß) um. Dezenter Schatten für Kantenschärfe. */}
      <div
        ref={ring}
        className="cursor-ring fixed left-0 top-0 h-9 w-9 rounded-full border border-ink opacity-0 drop-shadow-[0_0_1px_rgba(0,0,0,0.35)]"
      />
      <div
        ref={dot}
        className="cursor-dot fixed left-0 top-0 h-2 w-2 rounded-full bg-ink opacity-0 drop-shadow-[0_0_1px_rgba(0,0,0,0.35)]"
      />
    </div>
  );
}
