import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { impressumWebsiteSections } from "@/lib/legal";
import { alternatesFor } from "@/lib/seo";
import { InnerPageHeader, LegalDoc } from "@/components/layout/LegalDoc";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.impressum" });
  return { title: t("title"), alternates: alternatesFor(locale, "/impressum") };
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
      <InnerPageHeader label={t("impressum.label")} title={t("impressum.title")} backLabel={t("backToHome")} />
      <LegalDoc sections={impressumWebsiteSections(locale)} hideEnNotice />
    </>
  );
}
