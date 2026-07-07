import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { datenschutzSections } from "@/lib/legal";
import { InnerPageHeader, LegalDoc } from "@/components/layout/LegalDoc";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("legal.datenschutz");
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
      <InnerPageHeader
        label={t("datenschutz.label")}
        title={t("datenschutz.title")}
        intro={t("datenschutz.intro")}
        backLabel={t("backToHome")}
      />
      <LegalDoc sections={datenschutzSections()} />
    </>
  );
}
