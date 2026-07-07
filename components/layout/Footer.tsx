import { getTranslations } from "next-intl/server";
import TransitionLink from "@/components/ui/TransitionLink";
import { apps } from "@/lib/apps";
import { site } from "@/lib/site";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    // relative z-10: sonst übermalt der fixe Homepage-Canvas (z-0) den Footer
    <footer className="relative z-10 border-t border-line bg-base-900">
      <div className="mx-auto max-w-shell px-gutter py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-medium tracking-tightest">SimplyNext</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              {t("tagline")}
            </p>
          </div>
          <FooterCol title={t("columnApps")}>
            {apps.map((a) => (
              <li key={a.slug}>
                <TransitionLink href={`/apps/${a.slug}`} className="text-sm text-ink-muted transition-colors hover:text-ink">
                  {a.name}
                </TransitionLink>
              </li>
            ))}
          </FooterCol>
          <FooterCol title={t("columnStudio")}>
            <li><TransitionLink href="/" className="text-sm text-ink-muted hover:text-ink">{t("studioApproach")}</TransitionLink></li>
            <li><a href={`mailto:${site.email}`} className="text-sm text-ink-muted hover:text-ink">{t("studioContact")}</a></li>
          </FooterCol>
          <FooterCol title={t("columnLegal")}>
            <li><TransitionLink href="/impressum" className="text-sm text-ink-muted hover:text-ink">{t("legalImpressum")}</TransitionLink></li>
            <li><TransitionLink href="/datenschutz" className="text-sm text-ink-muted hover:text-ink">{t("legalDatenschutz")}</TransitionLink></li>
          </FooterCol>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {site.legal.companyName}. {t("copyright")}</span>
          <span className="font-mono text-xs">{t("stack")}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-mono text-xs uppercase tracking-label text-ink-faint">{title}</h2>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}
