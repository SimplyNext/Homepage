import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { datenschutzWebsiteSections } from "@/lib/legal";
import { alternatesFor } from "@/lib/seo";
import { InnerPageHeader, LegalDoc } from "@/components/layout/LegalDoc";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.datenschutz" });
  return { title: t("title"), alternates: alternatesFor(locale, "/datenschutz") };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");

  return (
    <>
      <InnerPageHeader
        label={t("datenschutz.label")}
        title={t("datenschutz.title")}
        intro={t("datenschutz.intro")}
        backLabel={t("backToHome")}
      />
      <LegalDoc sections={datenschutzWebsiteSections(locale)} hideEnNotice />
    </>
  );
}
