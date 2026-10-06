"use client";

import { useRef, type MouseEvent } from "react";
import { useTranslations } from "next-intl";
import { gsap, useGSAP } from "@/lib/gsap";
import TransitionLink from "@/components/ui/TransitionLink";
import LogoMark from "@/components/brand/LogoMark";
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

  // Logo-Animation beim Hovern erneut abspielen – erst, wenn der letzte
  // Durchlauf (gut 2 s, auch der beim Laden) fertig ist, damit sie nicht flackert.
  const logoStart = useRef(0);
  const replayLogo = (e: MouseEvent<HTMLAnchorElement>) => {
    const svg = e.currentTarget.querySelector("svg.logo-anim");
    const now = performance.now();
    if (!svg || now - logoStart.current < 2100) return;
    logoStart.current = now;
    svg.classList.remove("logo-anim");
    void svg.getBoundingClientRect();
    svg.classList.add("logo-anim");
  };

  const link =
    "inline-flex min-h-[44px] items-center rounded-full px-4 text-[1rem] font-medium transition-colors hover:bg-base-900 sm:px-5";

  return (
    <header>
      <TransitionLink
        href="/"
        className="absolute left-[clamp(1.25rem,4vw,4rem)] top-[calc(env(safe-area-inset-top)+1.75rem)] z-[90] flex items-center gap-[0.34em] font-display text-2xl font-extrabold tracking-[-0.035em] text-ink"
        data-cursor
        onMouseEnter={replayLogo}
      >
        <LogoMark animated className="h-[1.1em] w-[1.1em] shrink-0" />
        SimplyNext
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
