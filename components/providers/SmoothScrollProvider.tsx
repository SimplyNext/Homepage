"use client";

import { createContext, useContext, useRef, useState } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { registerGSAP, gsap, ScrollTrigger } from "@/lib/gsap";

type LenisContextValue = {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, opts?: object) => void;
  stop: () => void;
  start: () => void;
};

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollTo: () => {},
  stop: () => {},
  start: () => {},
});

export const useSmoothScroll = () => useContext(LenisContext);

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const [ready, setReady] = useState(false);

  useIsomorphicLayoutEffect(() => {
    registerGSAP();

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Bei reduzierter Bewegung: kein Smooth-Scroll, native Steuerung behalten.
    if (prefersReduced) {
      setReady(true);
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    // Lenis ↔ ScrollTrigger synchronisieren
    lenis.on("scroll", ScrollTrigger.update);

    // Lenis über den GSAP-Ticker antreiben (eine einzige RAF-Schleife = performant)
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);

    setReady(true);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Bei Routenwechsel / Mount Trigger neu berechnen, sobald bereit
  useIsomorphicLayoutEffect(() => {
    if (ready) ScrollTrigger.refresh();
  }, [ready]);

  const value: LenisContextValue = {
    lenis: lenisRef.current,
    scrollTo: (target, opts) => lenisRef.current?.scrollTo(target, opts),
    stop: () => lenisRef.current?.stop(),
    start: () => lenisRef.current?.start(),
  };

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}
