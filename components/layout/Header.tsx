"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import TransitionLink from "@/components/ui/TransitionLink";
import Magnetic from "@/components/ui/Magnetic";

const nav = [
  { href: "/#apps", label: "Apps" },
  { href: "/#studio", label: "Studio" },
  { href: "/#contact", label: "Kontakt" },
];

export default function Header() {
  const ref = useRef<HTMLElement>(null);

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
    { scope: ref }
  );

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-0 z-[100] mix-blend-difference"
    >
      <div className="mx-auto flex max-w-shell items-center justify-between px-gutter py-6">
        <Magnetic strength={0.5}>
          <TransitionLink href="/" className="flex items-center gap-3" data-cursor>
            <Image src="/logo.png" alt="SimplyNext" width={34} height={34} priority className="h-[34px] w-[34px] object-contain" />
            <span className="font-display text-lg font-semibold tracking-tightest text-paper">
              SimplyNext
            </span>
          </TransitionLink>
        </Magnetic>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Magnetic key={n.href} strength={0.3}>
              <TransitionLink
                href={n.href}
                className="font-mono text-xs uppercase tracking-label text-paper/80 transition-colors hover:text-paper"
              >
                {n.label}
              </TransitionLink>
            </Magnetic>
          ))}
        </nav>
      </div>
    </header>
  );
}
