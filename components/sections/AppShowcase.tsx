"use client";

import Image from "next/image";
import { useRef } from "react";
import { Apple, Play, Globe, ArrowLeft } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import SplitText from "@/components/ui/SplitText";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import TransitionLink from "@/components/ui/TransitionLink";
import type { AppData } from "@/lib/apps";
import { platformLabel, statusLabel } from "@/lib/apps";

const linkMeta = {
  appstore: { icon: Apple, label: "App Store" },
  playstore: { icon: Play, label: "Google Play" },
  web: { icon: Globe, label: "Web-App" },
} as const;

export default function AppShowcase({ app }: { app: AppData }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".app-hero-img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: ".app-hero", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.from(".app-hero-fade", {
        autoAlpha: 0,
        y: 20,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.3,
      });
    },
    { scope: ref }
  );

  const legalLinks = [
    { href: `/apps/${app.slug}/datenschutz`, label: "Datenschutz" },
    { href: `/apps/${app.slug}/agb`, label: "AGB" },
    { href: `/apps/${app.slug}/impressum`, label: "Impressum" },
  ];

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="app-hero relative flex min-h-[92svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <div className="app-hero-img absolute inset-[-8%]">
            <Image src={app.hero} alt="" fill priority sizes="100vw" className="object-cover opacity-50" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-base-900 via-base-900/50 to-base-900/40" />
        </div>

        <div className="relative mx-auto w-full max-w-shell px-gutter pb-[10vh] pt-32">
          <TransitionLink
            href="/#apps"
            className="app-hero-fade inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-ink-muted hover:text-paper"
            data-cursor
          >
            <ArrowLeft size={14} /> Alle Apps
          </TransitionLink>

          <div className="app-hero-fade mt-8 flex flex-wrap gap-3 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
            <span className="rounded-full border border-line px-3 py-1" style={{ color: app.accent }}>
              {platformLabel[app.platform]}
            </span>
            <span className="rounded-full border border-line px-3 py-1">{statusLabel[app.status]}</span>
            <span className="rounded-full border border-line px-3 py-1">{app.category}</span>
          </div>

          <h1 className="mt-6 font-display text-display-lg font-medium">
            <SplitText trigger="load" stagger={0.03}>
              {app.name}
            </SplitText>
          </h1>
          <p className="app-hero-fade mt-4 text-xl text-ink-muted" style={{ color: app.accent }}>
            {app.tagline}
          </p>

          <div className="app-hero-fade mt-10 flex flex-wrap gap-4">
            {app.links.map((l) => {
              const m = linkMeta[l.type];
              return (
                <Magnetic key={l.type} strength={0.4}>
                  <a
                    href={l.url}
                    className="inline-flex items-center gap-2.5 rounded-full bg-paper px-6 py-3.5 text-sm font-medium text-base-900"
                    data-cursor
                  >
                    <m.icon size={18} /> {m.label}
                  </a>
                </Magnetic>
              );
            })}
          </div>
        </div>
      </section>

      {/* BESCHREIBUNG */}
      <section className="border-t border-line py-section">
        <div className="mx-auto max-w-3xl px-gutter">
          <Reveal variant="up">
            <div className="space-y-6">
              {app.description.map((p, i) => (
                <p key={i} className={i === 0 ? "text-2xl leading-snug text-paper" : "text-lg leading-relaxed text-ink-muted"}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-line py-section">
        <div className="mx-auto max-w-shell px-gutter">
          <Reveal variant="clip">
            <h2 className="font-display text-display-md font-medium">Funktionen</h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {app.features.map((f, i) => (
              <Reveal key={f.title} variant="up" delay={i * 0.05}>
                <div className="h-full bg-base-900 p-8">
                  <span className="font-mono text-xs text-ink-faint">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl font-medium">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE / SHOTS */}
      <section className="border-t border-line py-section">
        <div className="mx-auto max-w-shell px-gutter">
          <Reveal variant="up">
            <p className="font-mono text-xs uppercase tracking-label text-ink-faint">Einblicke</p>
          </Reveal>
          <div className="mt-10 flex gap-6 overflow-x-auto pb-6 [scrollbar-width:none]">
            {app.shots.map((s, i) => (
              <Reveal key={i} variant="up" delay={i * 0.05}>
                <div
                  className="relative aspect-[9/19.5] w-[240px] shrink-0 overflow-hidden rounded-[2rem] border border-line"
                  style={{ boxShadow: `0 40px 90px -50px ${app.accent}` }}
                >
                  <Image src={s.src} alt={s.alt} fill sizes="240px" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RECHTLICHES */}
      <section className="border-t border-line py-14">
        <div className="mx-auto flex max-w-shell flex-col items-start justify-between gap-4 px-gutter sm:flex-row sm:items-center">
          <p className="text-sm text-ink-muted">Rechtliche Informationen zu {app.name}:</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <TransitionLink key={l.href} href={l.href} className="text-sm text-ink-muted hover:text-paper" data-cursor>
                {l.label}
              </TransitionLink>
            ))}
          </nav>
        </div>
      </section>
    </div>
  );
}
