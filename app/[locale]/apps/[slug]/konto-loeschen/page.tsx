import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getApp } from "@/lib/apps";
import { accountDeletion } from "@/lib/account-deletion";
import { ACCOUNT_DELETION_SLUGS, hasAccountDeletion } from "@/lib/account-deletion-apps";
import { alternatesFor, noindex } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import { InnerPageHeader, LegalDoc } from "@/components/layout/LegalDoc";
import AccountDeletionForm from "@/components/layout/AccountDeletionForm";
import TransitionLink from "@/components/ui/TransitionLink";

type Params = { locale: string; slug: string };

/** Nur Apps mit Nutzerkonto haben diese Seite (siehe lib/account-deletion.ts). */
export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => ACCOUNT_DELETION_SLUGS.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const app = getApp(slug);
  const t = await getTranslations({ locale, namespace: "accountDeletion" });
  return {
    title: t("titleWithApp", { name: app?.name ?? slug }),
    alternates: alternatesFor(locale, `/apps/${slug}/konto-loeschen`),
    robots: noindex,
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const app = getApp(slug);
  if (!app || !hasAccountDeletion(slug)) notFound();
  const config = accountDeletion[slug];

  const t = await getTranslations("accountDeletion");
  const tLegal = await getTranslations("legal");
  const link = "text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink";
  const mailto = `mailto:info@simplynext.de?subject=${encodeURIComponent(config.mailSubject)}`;

  const slots = {
    subscriptions: (
      <p className="mt-3 leading-relaxed text-ink-muted">
        <a href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener noreferrer" className={link}>
          {t("subscriptionsLink")}
        </a>
      </p>
    ),
    form: <AccountDeletionForm slug={slug} supabaseUrl={config.supabaseUrl} anonKey={config.anonKey} />,
    mail: (
      <p className="mt-4">
        <a
          href={mailto}
          className="inline-flex rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-ink"
        >
          {t("mailButton")}
        </a>
      </p>
    ),
    footer: (
      <div className="mt-12 space-y-3 border-t border-line pt-8 leading-relaxed text-ink-muted">
        <p>
          {t("privacyBefore")}
          <TransitionLink href={`/apps/${slug}/datenschutz`} className={link}>
            {t("privacyLink")}
          </TransitionLink>
          {t("privacyAfter")}
        </p>
        <p>
          {t("provider")}: SimplyNext ·{" "}
          <TransitionLink href={`/apps/${slug}/impressum`} className={link}>
            {tLegal("impressum.title")}
          </TransitionLink>{" "}
          · <a href="mailto:info@simplynext.de" className={link}>info@simplynext.de</a>
        </p>
      </div>
    ),
  };

  return (
    <>
      <InnerPageHeader
        label={t("label")}
        title={t("titleWithApp", { name: app.name })}
        backHref={`/apps/${app.slug}`}
        backLabel={tLegal("backToApp", { name: app.name })}
      />
      <LegalDoc sections={config.sections[locale === "en" ? "en" : "de"]} slots={slots} hideEnNotice />
    </>
  );
}
