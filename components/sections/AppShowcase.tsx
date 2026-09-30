"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Apple, Play, Globe, ArrowLeft } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import SplitText from "@/components/ui/SplitText";
import Reveal from "@/components/ui/Reveal";
import TransitionLink from "@/components/ui/TransitionLink";
import { PhoneFrame, PhoneScreenContent } from "@/components/ui/PhoneFrame";
import { useApp } from "@/components/providers/AppsProvider";
import type { AppData } from "@/lib/apps";
import { hasAccountDeletion } from "@/lib/account-deletion-apps";
import { useAppContent } from "@/lib/useAppContent";
import { stageColor } from "@/lib/galerie";

const linkMeta = {
  appstore: { icon: Apple, label: "App Store" },
  playstore: { icon: Play, label: "Google Play" },
  web: { icon: Globe, label: "Web-App" },
} as const;

const DISPLAY = "font-display font-extrabold tracking-[-0.045em]";

export default function AppShowcase({ app: staticApp }: { app: AppData }) {
  const ref = useRef<HTMLDivElement>(null);
  const shotsStage = useRef<HTMLDivElement>(null);
  const shotsTrack = useRef<HTMLDivElement>(null);
  // Status und Store-Link kommen abgeglichen aus AppControl (AppsProvider).
  const app = useApp(staticApp.slug) ?? staticApp;
  const color = stageColor(app);
  const content = useAppContent(app.slug);
  const t = useTranslations("appShowcase");
  const tStatus = useTranslations("status");
  const tLegal = useTranslations("legal");
  const tDeletion = useTranslations("accountDeletion");

  useGSAP(
    () => {
      gsap.to(".app-hero-phone", {
        yPercent: -10,
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
    // Google Play verlangt für Apps mit Nutzerkonto einen Löschweg ohne App.
    ...(hasAccountDeletion(app.slug)
      ? [{ href: `/apps/${app.slug}/konto-loeschen`, label: tDeletion("linkLabel") }]
      : []),
  ];
  const chip = "rounded-full border border-paperInk/30 px-3.5 py-1.5";

  return (
    <div ref={ref}>
      {/* HERO – farbige Fläche in der Bühnenfarbe der App, Text immer dunkel */}
      <section className="app-hero bg-base-900 px-[clamp(0.75rem,2vw,2rem)] pt-24">
        <div
          className="relative mx-auto max-w-shell overflow-hidden rounded-[clamp(28px,4vw,56px)] text-paperInk"
          style={{ background: color }}
        >
          <div className="grid items-end gap-10 px-[clamp(1.5rem,5vw,5rem)] pt-[clamp(2rem,5vw,4.5rem)] md:grid-cols-[1.25fr_1fr]">
            <div className="pb-[clamp(2rem,5vw,4.5rem)]">
              <TransitionLink
                href="/#apps"
                className="app-hero-fade inline-flex min-h-[44px] items-center gap-2 text-[1rem] font-semibold"
                data-cursor
              >
                <ArrowLeft size={18} aria-hidden /> {t("backToApps")}
              </TransitionLink>

              <div className="app-hero-fade relative mt-8 h-20 w-20">
                <Image src={app.hero} alt="" fill priority sizes="80px" className="object-contain" />
              </div>

              <h1 className={`${DISPLAY} mt-6 text-[clamp(3rem,8vw,7.5rem)] leading-[0.9]`}>
                <SplitText trigger="load" stagger={0.03}>
                  {app.name}
                </SplitText>
              </h1>
              <p className="app-hero-fade mt-5 max-w-xl text-[clamp(1.15rem,1.8vw,1.6rem)] font-medium leading-snug">
                {content.tagline}
              </p>

              <div className="app-hero-fade mt-7 flex flex-wrap gap-2 text-sm font-semibold">
                {app.os.map((os) => (
                  <span key={os} className={chip}>
                    {os}
                  </span>
                ))}
                {app.iosSoon && <span className={chip}>{t("iosSoon")}</span>}
                <span className={chip}>{tStatus(app.status)}</span>
                <span className={chip}>{content.category}</span>
              </div>

              <div className="app-hero-fade mt-9 flex flex-wrap gap-3">
                {app.links.map((l) => {
                  const m = linkMeta[l.type];
                  // Store-Knopf nur, wenn die App live ist und einen echten Link hat.
                  const available = app.status === "live" && l.url !== "#";
                  return available ? (
                    <a
                      key={l.type}
                      href={l.url}
                      className="inline-flex min-h-[56px] items-center gap-2.5 rounded-full bg-paperInk px-7 text-[1rem] font-semibold text-paper transition-transform duration-300 ease-premium hover:scale-[1.04]"
                      data-cursor
                    >
                      <m.icon size={18} aria-hidden /> {m.label}
                    </a>
                  ) : (
                    <span
                      key={l.type}
                      className="inline-flex min-h-[56px] items-center gap-2.5 rounded-full border-2 border-paperInk px-7 text-[1rem] font-semibold"
                    >
                      <m.icon size={18} aria-hidden /> {t("storeSoon", { store: m.label })}
                    </span>
                  );
                })}
              </div>

              {app.iosSoon && <p className="app-hero-fade mt-4 text-sm">{t("iosSoonNote")}</p>}
            </div>

            {/* Gerät, unten von der Fläche angeschnitten */}
            <div
              className="relative mx-auto h-[clamp(320px,46vw,620px)] w-[min(300px,70%)] self-end"
              aria-hidden
            >
              <div className="app-hero-phone absolute inset-x-0 top-0 aspect-[1080/2640] rotate-[4deg] overflow-hidden rounded-[clamp(28px,3vw,44px)] border-[8px] border-paperInk bg-paperInk shadow-[0_50px_90px_rgba(20,22,28,0.35)]">
                <Image
                  src={app.shots[0].src}
                  alt=""
                  fill
                  priority
                  sizes="300px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BESCHREIBUNG */}
      <section className="py-section">
        <div className="mx-auto max-w-4xl px-gutter">
          <Reveal variant="up">
            <div className="space-y-7">
              {content.description.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "font-display text-[clamp(1.6rem,3vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.03em] text-ink"
                      : "max-w-3xl text-xl leading-relaxed text-ink-muted"
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pb-section">
        <div className="mx-auto max-w-shell px-gutter">
          <Reveal as="h2" className={`${DISPLAY} text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95]`}>
            {t("featuresHeading")}
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.features.map((f, i) => (
              <Reveal key={f.title} variant="up" delay={(i % 3) * 0.06} className="h-full">
                <div className="h-full rounded-[30px] bg-base-800 p-8">
                  <span className="block h-3 w-10 rounded-full" style={{ background: color }} aria-hidden />
                  <h3 className="mt-6 font-display text-2xl font-extrabold tracking-[-0.03em]">{f.title}</h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-ink-muted">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PREISE */}
      <section className="pb-section">
        <div className="mx-auto max-w-shell px-gutter">
          <Reveal as="h2" className={`${DISPLAY} text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95]`}>
            {t("pricingHeading")}
          </Reveal>
          {content.pricing.note && (
            <Reveal variant="up">
              <p className="mt-5 max-w-3xl text-xl text-ink-muted">{content.pricing.note}</p>
            </Reveal>
          )}
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <Reveal variant="up" className="h-full">
              <div className="h-full rounded-[30px] bg-base-800 p-8">
                <h3 className="font-display text-3xl font-extrabold tracking-[-0.03em]">{t("free")}</h3>
                <ul className="mt-6 space-y-3">
                  {content.pricing.free.map((item) => (
                    <li key={item} className="flex gap-3 text-[17px] leading-relaxed text-ink-muted">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-ink" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal variant="up" delay={0.06} className="h-full">
              <div className="h-full rounded-[30px] p-8 text-paperInk" style={{ background: color }}>
                <h3 className="font-display text-3xl font-extrabold tracking-[-0.03em]">{t("premium")}</h3>
                <ul className="mt-6 space-y-3">
                  {content.pricing.premium.map((item) => (
                    <li key={item} className="flex gap-3 text-[17px] leading-relaxed">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-paperInk" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SHOWCASE / SHOTS — angepinnt mit horizontalem Track-Scroll (ab 768px) */}
      <section className="app-shots relative">
        {/* Heading im Fluss (nicht absolut) + Phone-Höhe an den Viewport
            gekoppelt: so kann der Text auf keiner Viewport-Höhe in die
            Screenshots hineinlaufen. */}
        <div
          ref={shotsStage}
          className="app-shots-stage relative overflow-hidden md:flex md:h-[100svh] md:flex-col md:justify-center md:pt-[90px]"
        >
          <div className="mx-auto w-full max-w-shell px-gutter pt-section md:pb-10 md:pt-0">
            <h2 className={`${DISPLAY} text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95]`}>{t("insightsHeading")}</h2>
          </div>

          <div
            ref={shotsTrack}
            className="app-shots-track flex flex-col items-center gap-6 pb-section md:flex-row md:items-center md:gap-10 md:pb-0 md:pl-[90vw] md:pr-[62vw] md:will-change-transform"
          >
            {app.shots.map((s, i) => (
              <PhoneFrame
                key={i}
                className="aspect-[1080/2640] w-[248px] shrink-0 md:h-[min(64svh,580px)] md:w-auto"
                island={!!app.syntheticChrome}
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
      <section className="py-16">
        <div className="mx-auto flex max-w-shell flex-col items-start justify-between gap-5 px-gutter lg:flex-row lg:items-center">
          <p className="text-[1rem] text-ink-muted">{t("legalIntro", { name: app.name })}</p>
          <nav className="flex flex-wrap gap-2.5">
            {legalLinks.map((l) => (
              <TransitionLink
                key={l.href}
                href={l.href}
                className="inline-flex min-h-[44px] items-center rounded-full bg-base-800 px-5 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-base-900"
                data-cursor
              >
                {l.label}
              </TransitionLink>
            ))}
          </nav>
        </div>
      </section>
    </div>
  );
}
