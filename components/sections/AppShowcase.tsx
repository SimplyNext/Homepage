"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Apple, Play, Globe, ArrowLeft } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import SplitText from "@/components/ui/SplitText";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import TransitionLink from "@/components/ui/TransitionLink";
import { PhoneFrame, PhoneScreenContent } from "@/components/ui/PhoneFrame";
import type { AppData } from "@/lib/apps";
import { useAppContent } from "@/lib/useAppContent";
import { useMountedTheme } from "@/hooks/useMountedTheme";

const linkMeta = {
  appstore: { icon: Apple, label: "App Store" },
  playstore: { icon: Play, label: "Google Play" },
  web: { icon: Globe, label: "Web-App" },
} as const;

export default function AppShowcase({ app }: { app: AppData }) {
  const ref = useRef<HTMLDivElement>(null);
  const shotsStage = useRef<HTMLDivElement>(null);
  const shotsTrack = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useMountedTheme();
  // Hero-Bereich hat immer einen dunklen paperInk-Overlay, daher dort immer die
  // helle Akzentfarbe (app.accent) verwenden, nicht die Theme-abhängige Variante.
  const accentColor = app.accent;
  // Theme-abhängige Variante nur für Bereiche mit adaptivem Hintergrund (z. B. Pricing)
  const themeAccent = resolvedTheme === "light" ? app.accentLight : app.accent;
  const content = useAppContent(app.slug);
  const t = useTranslations("appShowcase");
  const tStatus = useTranslations("status");
  const tLegal = useTranslations("legal");

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

      // Horizontales Pinning der Shots-Gallery (nur ab 768px)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const track = shotsTrack.current;
        const stage = shotsStage.current;
        if (!track || !stage) return;

        const tween = gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: () => `+=${track.scrollWidth - window.innerWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  const legalLinks = [
    { href: `/apps/${app.slug}/datenschutz`, label: tLegal("datenschutz.title") },
    { href: `/apps/${app.slug}/agb`, label: tLegal("agb.title") },
    { href: `/apps/${app.slug}/impressum`, label: tLegal("impressum.title") },
  ];

  return (
    <div ref={ref}>
      {/* HERO */}
      {/* Fester dunkler Grund: der Hero nutzt statische paper-Farben und muss
          in beiden Themes lesbar bleiben (Light-Mode wäre sonst hell auf hell) */}
      <section
        className="app-hero relative flex min-h-[92svh] items-end overflow-hidden bg-paperInk"
        data-cursor-dark
      >
        <div className="absolute inset-0">
          {app.heroFit === "cover" ? (
            <div className="app-hero-img absolute inset-[-8%]">
              <Image src={app.hero} alt="" fill priority sizes="100vw" className="object-cover opacity-50" />
            </div>
          ) : (
            /* Logo-Heros (transparente PNGs): das Logo direkt – ohne Kachel/
               Hintergrund – als HINTERSTE Ebene auf Akzent-Schein. Kein z-10
               und pointer-events-none, damit der Text (Zurück-Link, Titel,
               Buttons) darüber liegt und klickbar bleibt. */
            <div
              className="app-hero-img pointer-events-none absolute inset-[-8%] grid place-items-center"
              style={{
                background: `radial-gradient(50% 55% at 50% 42%, ${app.accent}2b, transparent 72%)`,
              }}
            >
              <div className="relative aspect-square w-[min(52vh,460px)]">
                <Image src={app.hero} alt="" fill priority sizes="460px" className="object-contain" />
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-shell px-gutter pb-[10vh] pt-32">
          <TransitionLink
            href="/#apps"
            className="app-hero-fade inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-label text-paper/90 hover:text-paper"
            data-cursor
          >
            <ArrowLeft size={14} /> {t("backToApps")}
          </TransitionLink>

          <div className="app-hero-fade mt-8 flex flex-wrap gap-3 font-mono text-[11px] font-medium uppercase tracking-wider text-paper/80">
            {app.os.map((os) => (
              <span key={os} className="rounded-full border border-paper/30 px-3 py-1">
                {os}
              </span>
            ))}
            {app.iosSoon && (
              <span className="rounded-full border border-paper/30 px-3 py-1">{t("iosSoon")}</span>
            )}
            <span className="rounded-full border border-paper/30 px-3 py-1">{tStatus(app.status)}</span>
            <span className="rounded-full border border-paper/30 px-3 py-1">{content.category}</span>
          </div>

          <h1 className="mt-6 font-display text-display-lg font-medium text-paper">
            <SplitText trigger="load" stagger={0.03}>
              {app.name}
            </SplitText>
          </h1>
          <p className="app-hero-fade mt-4 text-xl font-medium text-paper/80">
            {content.tagline}
          </p>

          <div className="app-hero-fade mt-10 flex flex-wrap gap-4">
            {app.links.map((l) => {
              const m = linkMeta[l.type];
              return (
                <Magnetic key={l.type} strength={0.4}>
                  <a
                    href={l.url}
                    className="inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-base-900"
                    data-cursor
                  >
                    <m.icon size={18} /> {m.label}
                  </a>
                </Magnetic>
              );
            })}
          </div>

          {app.iosSoon && (
            <p className="app-hero-fade mt-4 font-mono text-xs text-paper/50">
              {t("iosSoonNote")}
            </p>
          )}
        </div>
      </section>

      {/* BESCHREIBUNG */}
      <section className="border-t border-line py-section">
        <div className="mx-auto max-w-3xl px-gutter">
          <Reveal variant="up">
            <div className="space-y-6">
              {content.description.map((p, i) => (
                <p key={i} className={i === 0 ? "text-2xl leading-snug text-ink" : "text-lg leading-relaxed text-ink-muted"}>
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
            <h2 className="font-display text-display-md font-medium">{t("featuresHeading")}</h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {content.features.map((f, i) => (
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

      {/* PREISE */}
      <section className="border-t border-line py-section">
        <div className="mx-auto max-w-shell px-gutter">
          <Reveal variant="clip">
            <h2 className="font-display text-display-md font-medium">{t("pricingHeading")}</h2>
          </Reveal>
          {content.pricing.note && (
            <Reveal variant="up">
              <p className="mt-4 text-lg text-ink-muted">{content.pricing.note}</p>
            </Reveal>
          )}
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {(
              [
                { label: t("free"), items: content.pricing.free },
                { label: t("premium"), items: content.pricing.premium },
              ] as const
            ).map((tier, i) => (
              <Reveal key={tier.label} variant="up" delay={i * 0.05}>
                <div className="h-full bg-base-900 p-8">
                  <span
                    className="font-mono text-xs uppercase tracking-label text-ink-faint"
                    style={i === 1 ? { color: themeAccent } : undefined}
                  >
                    {tier.label}
                  </span>
                  <ul className="mt-6 space-y-3">
                    {tier.items.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-ink-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: themeAccent }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE / SHOTS — angepinnt mit horizontalem Track-Scroll (ab 768px) */}
      <section className="app-shots relative border-t border-line">
        {/* Heading im Fluss (nicht absolut) + Phone-Höhe an den Viewport
            gekoppelt: so kann der Text auf keiner Viewport-Höhe in die
            Screenshots hineinlaufen. */}
        <div
          ref={shotsStage}
          className="app-shots-stage relative overflow-hidden md:flex md:h-[100svh] md:flex-col md:justify-center md:pt-[90px]"
        >
          <div className="mx-auto w-full max-w-shell px-gutter pt-section md:pb-10 md:pt-0">
            <p className="font-mono text-xs uppercase tracking-label text-ink-faint">{t("insightsHeading")}</p>
          </div>

          <div
            ref={shotsTrack}
            className="app-shots-track flex flex-col items-center gap-6 pb-section md:flex-row md:items-center md:gap-10 md:pb-0 md:pl-[90vw] md:pr-[62vw] md:will-change-transform"
          >
            {app.shots.map((s, i) => (
              <PhoneFrame
                key={i}
                className="aspect-[1080/2640] w-[220px] shrink-0 md:h-[min(58svh,520px)] md:w-auto"
              >
                <PhoneScreenContent
                  src={s.src}
                  chrome={!!app.syntheticChrome}
                  alt={content.shotAlts[i] ?? app.name}
                  sizes="240px"
                />
              </PhoneFrame>
            ))}
          </div>
        </div>
      </section>

      {/* RECHTLICHES */}
      <section className="border-t border-line py-14">
        <div className="mx-auto flex max-w-shell flex-col items-start justify-between gap-4 px-gutter sm:flex-row sm:items-center">
          <p className="text-sm text-ink-muted">{t("legalIntro", { name: app.name })}</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <TransitionLink key={l.href} href={l.href} className="text-sm text-ink-muted hover:text-ink" data-cursor>
                {l.label}
              </TransitionLink>
            ))}
          </nav>
        </div>
      </section>
    </div>
  );
}
