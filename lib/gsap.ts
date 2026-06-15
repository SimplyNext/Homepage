/**
 * Zentrale GSAP-Konfiguration.
 * --------------------------------------------------------------------------
 * Alle Plugins werden hier EINMAL registriert. Komponenten importieren gsap
 * und die Plugins ausschließlich von hier, damit es keine doppelten
 * Registrierungen oder SSR-Probleme gibt.
 *
 * Hinweis: GSAP inkl. ScrollTrigger, Flip und SplitText ist seit 2025 unter
 * Webflow vollständig kostenlos nutzbar – kein Club-Abo nötig.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

let registered = false;

export function registerGSAP() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger, Flip, useGSAP);

  // Globale Defaults für ein konsistentes, „premium" Bewegungsgefühl
  gsap.defaults({ ease: "power3.out", duration: 1 });

  // Performance: lagSmoothing aus, damit ScrollTrigger sauber mit Lenis läuft
  gsap.ticker.lagSmoothing(0);

  registered = true;
}

// Sofort beim Modul-Import registrieren (clientseitig). Layout-Effects
// feuern bottom-up (Kinder vor Eltern), daher würde eine Registrierung im
// Effect von SmoothScrollProvider zu spät kommen – ScrollTrigger.create()
// in Kind-Komponenten liefe dann gegen das unregistrierte Plugin.
registerGSAP();

export { gsap, ScrollTrigger, Flip, useGSAP };
