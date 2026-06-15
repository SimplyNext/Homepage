import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { apps, getApp } from "@/lib/apps";
import { site } from "@/lib/site";
import AppShowcase from "@/components/sections/AppShowcase";

type Params = { slug: string };

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};
  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.summary,
    openGraph: { title: `${app.name} · ${site.name}`, description: app.summary },
  };
}

export default async function AppPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();
  return <AppShowcase app={app} />;
}
