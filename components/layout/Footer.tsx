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

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-base-900">{title}</h2>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}
