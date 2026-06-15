"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
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
  const { stop, start, scrollTo } = useSmoothScroll();
  const animating = useRef(false);

  const navigate = useCallback(
    (href: string) => {
      if (animating.current) return;
      const panels = gsap.utils.toArray<HTMLElement>(".transition-panel");
      if (!panels.length) {
        router.push(href);
        return;
      }
      animating.current = true;
      stop();

      // COVER: Panels fahren von unten hoch und decken den Screen ab
      gsap
        .timeline({
          onComplete: () => {
            router.push(href);
            // Nach dem Push übernimmt template.tsx das REVEAL.
            // Sicherheitsnetz, falls template nicht greift:
            window.setTimeout(() => {
              start();
              animating.current = false;
            }, 700);
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

      scrollTo(0, { immediate: true });
    },
    [router, stop, start, scrollTo]
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
