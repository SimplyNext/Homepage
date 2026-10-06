import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getApp } from "@/lib/apps";
import { appAuth, hasAppAuth, APP_AUTH_SLUGS } from "@/lib/app-auth";
import { stageColor } from "@/lib/galerie";
import { routing } from "@/i18n/routing";
import TransitionLink from "@/components/ui/TransitionLink";
import AppAuthFlow from "@/components/layout/AppAuthFlow";

/**
 * Gemeinsame Seite für /apps/<slug>/bestaetigen|confirm (E-Mail bestätigen)
 * und /apps/<slug>/passwort|password (Passwort zurücksetzen). Ohne Tracking,
 * nicht indexiert; die eigentliche Arbeit macht AppAuthFlow im Browser.
 */
type Params = { locale: string; slug: string };
type Mode = "confirm" | "recovery";

export function authStaticParams() {
  return routing.locales.flatMap((locale) => APP_AUTH_SLUGS.map((slug) => ({ locale, slug })));
}

export async function authMetadata(params: Promise<Params>, mode: Mode): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang = locale === "en" ? "en" : "de";
  const texts = hasAppAuth(slug) ? appAuth[slug].texts[lang] : null;
  const app = getApp(slug);
  return {
    title: `${(mode === "confirm" ? texts?.confirm.title : texts?.recovery.title) ?? ""} – ${app?.name ?? slug}`,
    robots: { index: false, follow: false },
  };
}

export async function AppAuthPage({ params, mode }: { params: Promise<Params>; mode: Mode }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const app = getApp(slug);
  if (!app || !hasAppAuth(slug)) notFound();
  const config = appAuth[slug];
  const texts = config.texts[locale === "en" ? "en" : "de"];
  const tLegal = await getTranslations("legal");
  const link = "underline decoration-[rgba(20,22,28,0.3)] underline-offset-4 hover:decoration-[rgba(20,22,28,0.9)]";

  return (
    <section className="px-gutter pb-20 pt-32">
      <div
        className="mx-auto max-w-xl rounded-[32px] p-6 text-paperInk sm:p-10"
        style={{ backgroundColor: stageColor(app) }}
      >
        <div className="flex items-center gap-3">
          <Image src={app.hero} alt="" width={52} height={52} className="h-[52px] w-[52px] rounded-2xl object-contain" />
          <p className="font-display text-xl font-extrabold tracking-[-0.03em]">{app.name}</p>
        </div>
        <h1 className="mt-8 font-display text-[clamp(2rem,6vw,2.75rem)] font-extrabold leading-[1.05] tracking-[-0.04em]">
          {mode === "confirm" ? texts.confirm.title : texts.recovery.title}
        </h1>
        <div className="mt-6 rounded-[24px] bg-base-800 p-6 text-ink sm:p-8">
          <AppAuthFlow
            mode={mode}
            supabaseUrl={config.supabaseUrl}
            anonKey={config.anonKey}
            appLink={config.appLink}
            texts={texts}
          />
        </div>
        <p className="mt-6 text-sm leading-relaxed">
          SimplyNext ·{" "}
          <a href="mailto:info@simplynext.de" className={link}>
            info@simplynext.de
          </a>{" "}
          ·{" "}
          <TransitionLink href={`/apps/${slug}/datenschutz`} className={link}>
            {tLegal("datenschutz.title")}
          </TransitionLink>{" "}
          ·{" "}
          <TransitionLink href={`/apps/${slug}/impressum`} className={link}>
            {tLegal("impressum.title")}
          </TransitionLink>
        </p>
      </div>
    </section>
  );
}
