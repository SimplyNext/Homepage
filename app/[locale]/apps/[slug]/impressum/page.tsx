import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { apps, getApp } from "@/lib/apps";
import { impressumWebsiteSections } from "@/lib/legal";
import { routing } from "@/i18n/routing";
import { InnerPageHeader, LegalDoc } from "@/components/layout/LegalDoc";

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => apps.map((a) => ({ locale, slug: a.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const app = getApp(slug);
  const t = await getTranslations({ locale, namespace: "legal.impressum" });
  return { title: app ? t("titleWithApp", { name: app.name }) : t("title") };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const app = getApp(slug);
  if (!app) notFound();
  const t = await getTranslations("legal");

  return (
    <>
      <InnerPageHeader
        label={t("impressum.label")}
        title={t("impressum.titleWithApp", { name: app.name })}
        backHref={`/apps/${app.slug}`}
        backLabel={t("backToApp", { name: app.name })}
      />
      <LegalDoc sections={impressumWebsiteSections(locale)} hideEnNotice />
    </>
  );
}
