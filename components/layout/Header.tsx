"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap, useGSAP } from "@/lib/gsap";
import TransitionLink from "@/components/ui/TransitionLink";
import Magnetic from "@/components/ui/Magnetic";
import ThemeToggle from "@/components/theme/ThemeToggle";
import LocaleSwitch from "@/components/layout/LocaleSwitch";
import MobileNav from "@/components/layout/MobileNav";

export default function Header() {
  const ref = useRef<HTMLElement>(null);
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");

  const nav = [
    { href: "/#apps", label: t("apps") },
    { href: "/#studio", label: t("studio") },
    { href: "/#contact", label: t("contact") },
  ];

  useGSAP(
    () => {
      if (!ref.current) return;
      // Header beim Hochscrollen einblenden, beim Runterscrollen verstecken
      gsap.set(ref.current, { yPercent: 0 });
      let last = 0;
      const onScroll = () => {
        const y = window.scrollY;
        const goingDown = y > last && y > 120;
        gsap.to(ref.current, {
          yPercent: goingDown ? -120 : 0,
          duration: 0.5,
          ease: "power3.out",
        });
        last = y;
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    },
    { scope: ref },
  );

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-0 z-[100] border-b border-line bg-base-900/75 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-shell items-center justify-between px-gutter py-6">
        <Magnetic strength={0.5}>
          <TransitionLink
            href="/"
            className="flex items-center gap-3"
            data-cursor
          >
            <Image
              src="/logo.png"
              alt="SimplyNext"
              width={34}
              height={34}
              priority
              className="h-[34px] w-[34px] object-contain"
            />
            <span className="font-display text-lg font-semibold tracking-tightest text-ink">
              SimplyNext
            </span>
          </TransitionLink>
        </Magnetic>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-10">
            {nav.map((n) => (
              <Magnetic key={n.href} strength={0.3}>
                <TransitionLink
                  href={n.href}
                  className="font-mono text-xs uppercase tracking-label text-ink/80 transition-colors hover:text-ink"
                >
                  {n.label}
                </TransitionLink>
              </Magnetic>
            ))}
          </nav>
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
        </div>

        <MobileNav nav={nav} />
      </div>
    </header>
  );
}
