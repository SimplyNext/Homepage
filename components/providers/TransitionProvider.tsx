"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { gsap } from "@/lib/gsap";
import { useSmoothScroll } from "./SmoothScrollProvider";

type TransitionContextValue = {
  navigate: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextValue>({
  navigate: () => {},
});

export const useTransition = () => useContext(TransitionContext);

const PANELS = 5;

export default function TransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  // Locale-freier Pfad (z. B. "/" statt "/de") – window.location.pathname
  // enthält das Locale-Präfix und würde Same-Page-Anker als Seitenwechsel
  // fehlklassifizieren (Panels decken ab, aber es wird nie gescrollt).
  const pathname = usePathname();
  const { stop, start, scrollTo } = useSmoothScroll();
  const animating = useRef(false);

  const navigate = useCallback(
    (href: string) => {
      if (animating.current) return;

      const url = new URL(href, window.location.origin);
      const samePage = url.pathname === pathname;
      const hash = url.hash; // z. B. "#apps" oder ""

      const panels = gsap.utils.toArray<HTMLElement>(".transition-panel");
      if (!panels.length) {
        if (samePage) scrollTo(hash || 0, { force: true });
        else router.push(url.pathname + hash);
        return;
      }

      // Deckt das Overlay wieder auf (Same-Page-Fall: template.tsx mountet nicht neu).
      const revealPanels = () => {
        gsap
          .timeline({
            onComplete: () => {
              start();
              animating.current = false;
            },
          })
          .set(panels, { transformOrigin: "top" })
          .to(panels, { scaleY: 0, duration: 0.5, ease: "power3.inOut", stagger: 0.05 })
          .set(".transition-overlay", { pointerEvents: "none" }, ">-0.1");
      };

      animating.current = true;
      stop();

      // COVER: Panels fahren von unten hoch und decken den Screen ab
      gsap
        .timeline({
          onComplete: () => {
            if (samePage) {
              // Cover liegt → zur Sektion springen → Cover wieder aufdecken.
              // force:true, weil Lenis gerade per stop() pausiert ist.
              scrollTo(hash || 0, { immediate: true, force: true });
              revealPanels();
            } else {
              // Anker für die Zielseite merken; template.tsx scrollt nach dem Mount.
              // WICHTIG: den Hash NICHT an next-intls Router hängen – ein
              // String wie "/#apps" wird dort nicht als Navigation aufgelöst
              // (der Klick bleibt wirkungslos). Nur den reinen Pfad pushen,
              // den Anker übernimmt pendingScroll + template.tsx.
              if (hash) sessionStorage.setItem("pendingScroll", hash);
              router.push(url.pathname);
              // Sicherheitsnetz, falls template nicht greift:
              window.setTimeout(() => {
                start();
                animating.current = false;
              }, 700);
            }
          },
        })
        .set(".transition-overlay", { pointerEvents: "auto" })
        .set(panels, { transformOrigin: "bottom" })
        .to(panels, {
          scaleY: 1,
          duration: 0.5,
          ease: "power3.inOut",
          stagger: 0.06,
        });
    },
    [router, pathname, stop, start, scrollTo]
  );

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      {/* Persistentes Overlay – lebt im Layout, wird von cover/reveal animiert */}
      <div
        className="transition-overlay pointer-events-none fixed inset-0 z-[120] flex"
        aria-hidden
      >
        {Array.from({ length: PANELS }).map((_, i) => (
          <span
            key={i}
            className="transition-panel h-full flex-1 origin-bottom scale-y-0 bg-base-800"
          />
        ))}
      </div>
    </TransitionContext.Provider>
  );
}
