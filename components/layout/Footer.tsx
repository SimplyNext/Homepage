import { getTranslations } from "next-intl/server";
import TransitionLink from "@/components/ui/TransitionLink";
import LogoMark from "@/components/brand/LogoMark";
import { apps } from "@/lib/apps";
import { site } from "@/lib/site";

/**
 * Fuß der Seite: eine invertierte Fläche mit runden oberen Ecken – im hellen
 * Theme dunkel, im dunklen hell.
 */
export default async function Footer() {
  const t = await getTranslations("footer");
  const link = "text-[15px] text-base-900/70 transition-colors hover:text-base-900";

  return (
    <footer className="relative z-10 bg-base-900">
      <div className="rounded-t-[clamp(28px,4vw,56px)] bg-ink text-base-900">
        <div className="mx-auto max-w-shell px-gutter pb-8 pt-20">
          <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
            <div>
              <p className="flex items-center gap-[0.34em] font-display text-3xl font-extrabold tracking-[-0.035em]">
                <LogoMark className="h-[1.1em] w-[1.1em] shrink-0" />
                SimplyNext
              </p>
              <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-base-900/70">
                {t("tagline")}
              </p>
              <ul className="mt-6 flex gap-3">
                {site.social.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("social", { name: s.name })}
                      title={s.name}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-base-900/20 text-base-900/70 transition-colors hover:border-base-900/60 hover:text-base-900"
                    >
                      <SocialIcon name={s.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <FooterCol title={t("columnApps")}>
              {apps.map((a) => (
                <li key={a.slug}>
                  <TransitionLink href={`/apps/${a.slug}`} className={link}>
                    {a.name}
                  </TransitionLink>
                </li>
              ))}
            </FooterCol>
            <FooterCol title={t("columnStudio")}>
              <li><TransitionLink href="/" className={link}>{t("studioApproach")}</TransitionLink></li>
              <li><a href={`mailto:${site.email}`} className={link}>{t("studioContact")}</a></li>
            </FooterCol>
            <FooterCol title={t("columnLegal")}>
              <li><TransitionLink href="/impressum" className={link}>{t("legalImpressum")}</TransitionLink></li>
              <li><TransitionLink href="/datenschutz" className={link}>{t("legalDatenschutz")}</TransitionLink></li>
            </FooterCol>
          </div>
          <div className="mt-16 flex flex-col gap-3 border-t border-base-900/20 pt-6 text-sm text-base-900/70 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} {site.legal.companyName}. {t("copyright")}</span>
            <span>{t("stack")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** Monochrome Marken-Icons (Simple Icons), färben sich über currentColor. */
const socialPaths: Record<string, string> = {
  TikTok:
    "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  Instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  YouTube:
    "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
};

function SocialIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]" fill="currentColor">
      <path d={socialPaths[name]} />
    </svg>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-base-900">{title}</h2>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}
