"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import { useMountedTheme } from "@/hooks/useMountedTheme";

/**
 * Client-Einstieg für den Hero-Sternenhimmel. Nur im Hero (nicht seitenweit).
 * – lädt HeroStarfield ausschließlich im Browser (ssr:false).
 * – prüft WebGL; ohne GPU / bei contextlost bleibt der statische, theme-
 *   abhängige Fallback-Grund (bg-base-900) → kein Blitz, Seite bleibt lesbar.
 * – Sichtbarkeits-Pause: der Canvas rendert nur, solange der Hero im Bild ist
 *   (IntersectionObserver → frameloop "always"/"never"), spart GPU beim Scrollen.
 * – position:absolute (innerhalb der relative Hero-<section>), daher – anders
 *   als die fixe Aurora – unkritisch bzgl. Containing-Block/Pinning.
 */
const HeroStarfield = dynamic(() => import("./HeroStarfield"), { ssr: false });

function webglAvailable(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") ?? c.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function HeroStarfieldMount() {
  const wrap = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const { resolvedTheme } = useMountedTheme();

  const reduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    setEnabled(webglAvailable());
  }, []);

  // Nur rendern, solange der Hero (teilweise) im Viewport ist.
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrap}
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-base-900"
    >
      {enabled && (
        <HeroStarfield
          theme={resolvedTheme === "light" ? "light" : "dark"}
          reduced={reduced}
          frameloop={visible ? "always" : "never"}
          onContextLost={() => setEnabled(false)}
        />
      )}
    </div>
  );
}
