"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap, useGSAP } from "@/lib/gsap";
import TransitionLink from "@/components/ui/TransitionLink";
import ThemeToggle from "@/components/theme/ThemeToggle";
import LocaleSwitch from "@/components/layout/LocaleSwitch";

/**
 * Kopf der Seite: Wortmarke links (scrollt mit der Seite weg) und eine
 * schwebende Pille mit den Zielen, Sprach- und Theme-Umschalter. Die Pille
 * bleibt stehen, versteckt sich beim Runterscrollen und kommt beim
 * Hochscrollen zurück.
 */
export default function Header() {
  const pill = useRef<HTMLElement>(null);
  const t = useTranslations("galerie");
  const tCommon = useTranslations("common");

  useGSAP(() => {
    if (!pill.current) return;
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > last && y > 120;
      gsap.to(pill.current, {
        yPercent: goingDown ? -160 : 0,
        duration: 0.5,
        ease: "power3.out",
      });
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  const link =
    "inline-flex min-h-[44px] items-center rounded-full px-4 text-[1rem] font-medium transition-colors hover:bg-base-900 sm:px-5";

  return (
    <header>
      <TransitionLink
        href="/"
        className="absolute left-[clamp(1.25rem,4vw,4rem)] top-[calc(env(safe-area-inset-top)+1.75rem)] z-[90] font-display text-2xl font-extrabold tracking-[-0.03em] text-ink"
        data-cursor
      >
        SimplyNext <span className="text-accent-soft">{"{"}</span>
        <span className="text-accent-alt">{"}"}</span>
      </TransitionLink>
      <nav
        ref={pill}
        className="fixed right-4 top-[calc(env(safe-area-inset-top)+1.25rem)] z-[100] flex items-center gap-1 rounded-full bg-base-800/90 p-1.5 text-ink shadow-[0_8px_30px_rgba(20,22,28,0.14)] backdrop-blur-md md:left-1/2 md:right-auto md:-translate-x-1/2"
      >
        <TransitionLink href="/#apps" className={link} data-cursor>
          {t("navApps")}
        </TransitionLink>
        <TransitionLink href="/#alle" className={`${link} max-sm:hidden`} data-cursor>
          {t("navAll")}
        </TransitionLink>
        <LocaleSwitch
          labels={{
            toEnglish: tCommon("localeSwitch.toEnglish"),
            toGerman: tCommon("localeSwitch.toGerman"),
          }}
        />
        <ThemeToggle
          labels={{
            toLight: tCommon("themeToggle.toLight"),
            toDark: tCommon("themeToggle.toDark"),
          }}
        />
      </nav>
    </header>
  );
}
