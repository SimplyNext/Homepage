import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { apps, getApp } from "@/lib/apps";
import { site } from "@/lib/site";
import { routing } from "@/i18n/routing";
import AppShowcase from "@/components/sections/AppShowcase";

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => apps.map((a) => ({ locale, slug: a.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const app = getApp(slug);
  if (!app) return {};
  const t = await getTranslations({ locale, namespace: `apps.${slug}` });
  return {
    title: `${app.name} — ${t("tagline")}`,
    description: t("summary"),
    openGraph: { title: `${app.name} · ${site.name}`, description: t("summary") },
  };
}

export default async function AppPage({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const app = getApp(slug);
  if (!app) notFound();
  return <AppShowcase app={app} />;
}
