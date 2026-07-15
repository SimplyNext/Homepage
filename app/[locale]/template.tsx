"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

/**
 * template.tsx wird bei JEDER Navigation neu gemountet (anders als layout.tsx)
 * und spielt die ENTER-Animation: Das persistente Transition-Overlay
 * (.transition-panel in TransitionProvider) wird aufgedeckt und der neue
 * Seiteninhalt eingeblendet.
 *
 * WICHTIG: Die Overlay-Panels leben im Layout und überdauern den Wechsel.
 * Bleiben sie versehentlich abgedeckt (scaleY:1) – etwa weil React StrictMode
 * den Mount doppelt ausführt und eine laufende Reveal-Animation abbricht –,
 * sieht der Nutzer einen schwarzen Screen, bis er neu lädt. Deshalb wird der
 * aufgedeckte Endzustand hier IMMER erzwungen (forceRevealed), unabhängig
 * davon, ob die Animation sauber durchläuft.
 */
// StrictMode-Schutz: der Doppelmount des Templates würde den gemerkten
// Anker beim ersten Lauf konsumieren und beim zweiten auf 0 scrollen.
// Deshalb wird der konsumierte Anker kurz gecacht (Zeitfenster deckt den
// Zweitmount derselben Navigation ab, nie eine spätere Navigation).
let consumedPending: { value: string; at: number } | null = null;

export default function Template({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const { lenis, scrollTo } = useSmoothScroll();

  useIsomorphicLayoutEffect(() => {
    const el = root.current;
    const panels = gsap.utils.toArray<HTMLElement>(".transition-panel");

    // Garantierter, sicherer Endzustand: Panels offen, Overlay inaktiv,
    // Inhalt sichtbar. Wird bei onComplete UND im Cleanup aufgerufen.
    const forceRevealed = () => {
      if (panels.length) {
        gsap.killTweensOf(panels);
        gsap.set(panels, { transformOrigin: "top", scaleY: 0 });
      }
      gsap.set(".transition-overlay", { pointerEvents: "none" });
      if (el) {
        gsap.set(el, { clearProps: "opacity,visibility,transform,willChange" });
        // Direkter DOM-Fallback: GSAP clearProps nach tl.kill() ist in React
        // StrictMode (Doppelmount) nicht immer zuverlässig.
        el.style.removeProperty("opacity");
        el.style.removeProperty("visibility");
      }
    };

    // tl im Funktions-Scope deklariert, damit sie im Cleanup unten erreichbar
    // bleibt, auch wenn ihr Aufbau (zweiter try-Block) fehlschlägt.
    let tl: gsap.core.Timeline | null = null;

    // Pins der neuen Seite neu vermessen und an den richtigen Startpunkt
    // scrollen: gemerkter Anker (Cross-Page) oder ganz nach oben.
    //
    // In try/catch: verlässt man eine Seite mit gepinntem ScrollTrigger
    // (z. B. die App-Detailseite mit ihrer gepinnten Shots-Galerie), kann es
    // zu einer Race zwischen dem Pin-Teardown der alten Seite und diesem
    // Refresh kommen. Wirft das hier, darf der Effekt NICHT abbrechen, bevor
    // die Panels wieder aufgedeckt sind – sonst bleibt der Screen dauerhaft
    // schwarz (persistentes Overlay in TransitionProvider) bis zum Reload.
    // Deshalb wird der Fehler hier nur geloggt; der zweite try-Block (Reveal-
    // Timeline) läuft trotzdem weiter und deckt die Panels in jedem Fall auf.
    try {
      ScrollTrigger.refresh();
      let pending = sessionStorage.getItem("pendingScroll");
      if (pending) {
        sessionStorage.removeItem("pendingScroll");
        consumedPending = { value: pending, at: Date.now() };
      } else if (consumedPending && Date.now() - consumedPending.at < 1000) {
        pending = consumedPending.value; // StrictMode-Zweitmount derselben Navigation
      }
      if (pending) {
        const target = pending;
        const jump = () => {
          const elm = document.querySelector<HTMLElement>(target);
          if (!elm) return;
          const top = elm.getBoundingClientRect().top + window.scrollY;
          // Nativ scrollen: Lenis ist während der Transition per stop() pausiert,
          // sein scrollTo bewegt dann nichts. Lenis synchronisiert beim start()
          // auf die native Position, springt also nicht zurück. Lenis zusätzlich
          // informieren (immediate/force), falls es bereits wieder läuft.
          window.scrollTo(0, top);
          if (lenis) scrollTo(top, { immediate: true, force: true });
        };
        jump();
        // Nachziehen: Pins/Fonts verändern die Seitenhöhe nach dem Mount noch –
        // mehrfach neu vermessen und exakt landen, solange die Reveal-Panels den
        // Screen (teilweise) abdecken.
        [200, 500, 900].forEach((ms) =>
          window.setTimeout(() => {
            try {
              ScrollTrigger.refresh();
              jump();
            } catch (err) {
              console.error("[template] verzögerter ScrollTrigger.refresh fehlgeschlagen", err);
            }
          }, ms)
        );
      } else if (lenis) {
        scrollTo(0, { immediate: true, force: true });
      } else {
        window.scrollTo(0, 0);
      }
    } catch (err) {
      console.error("[template] ScrollTrigger.refresh/Anker-Scroll fehlgeschlagen", err);
    }

    try {
      // Nur durchsweepen, wenn die Panels gerade abdecken (echter Seitenwechsel).
      // Beim StrictMode-Zweitmount oder Direktaufruf sind sie bereits offen –
      // dann kein erneutes Abdecken (verhindert Flackern), nur Inhalt einblenden.
      const covered =
        panels.length > 0 && Number(gsap.getProperty(panels[0], "scaleY")) > 0.5;

      tl = gsap.timeline({ onComplete: forceRevealed });

      if (covered) {
        tl.set(panels, { transformOrigin: "top", scaleY: 1 })
          .to(panels, { scaleY: 0, duration: 0.5, ease: "power3.inOut", stagger: 0.05 })
          .set(".transition-overlay", { pointerEvents: "none" }, ">-0.1");
      } else {
        forceRevealed();
      }

      // Inhalt einblenden – bewusst NUR Opacity, kein y/transform: jeder
      // transform-Wert ≠ none macht dieses DIV zum Containing-Block für
      // position:fixed und bricht damit kurzzeitig ALLE ScrollTriggern-Pins
      // (Phone & Pinned-Text), solange die Animation läuft. Mit reinem
      // autoAlpha entsteht dieses Fenster gar nicht erst.
      //
      // immediateRender: covered – wenn panels abdecken, el sofort auf
      // autoAlpha:0 setzen (sonst kurzer Flash des neuen Inhalts bevor die
      // Panels fertig sind). Im nicht-abgedeckten Fall (covered=false) KEIN
      // immediateRender: dann setzt GSAP el erst beim ersten rAF auf 0, was
      // den synchronen React-StrictMode-Cleanup-Zyklus ausschließt und
      // verhindert, dass el dauerhaft auf opacity:0 hängen bleibt.
      tl.from(
        el,
        { autoAlpha: 0, duration: 0.5, ease: "power2.out", immediateRender: covered },
        covered ? "<0.15" : 0
      );
      tl.set(el, { clearProps: "willChange" });
    } catch (err) {
      console.error("[template] Reveal-Timeline fehlgeschlagen", err);
      forceRevealed();
    }

    // Absoluter Fallback: Inhalt nach max. 1,5 s sichtbar machen,
    // unabhängig von Animationsstatus (rAF-Throttling, Hintergrund-Tab, …).
    const safetyTimer = window.setTimeout(() => {
      if (!el) return;
      el.style.removeProperty("opacity");
      el.style.removeProperty("visibility");
    }, 1500);

    return () => {
      clearTimeout(safetyTimer);
      tl?.kill();
      // Niemals abgedeckt zurücklassen – sonst schwarzer Screen bis Reload.
      forceRevealed();
    };
    // Bewusst nur beim Mount – Scroll-/Reveal-Logik soll pro Seite einmal laufen.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={root} data-transition-root>
      {children}
    </div>
  );
}
