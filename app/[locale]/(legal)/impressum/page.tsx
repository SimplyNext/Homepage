import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { impressumWebsiteSections } from "@/lib/legal";
import { InnerPageHeader, LegalDoc } from "@/components/layout/LegalDoc";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("legal.impressum");
  return { title: t("title") };
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
