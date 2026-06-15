import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { apps, getApp } from "@/lib/apps";
import { datenschutzSections } from "@/lib/legal";
import { InnerPageHeader, LegalDoc } from "@/components/layout/LegalDoc";

type Params = { slug: string };
export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  return { title: app ? `Datenschutz – ${app.name}` : "Datenschutz" };
}
export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();
  return (
    <>
      <InnerPageHeader label="datenschutz" title={`Datenschutz – ${app.name}`}
        intro={`Wie wir in der App „${app.name}" mit deinen Daten umgehen.`}
        backHref={`/apps/${app.slug}`} backLabel={`Zurück zu ${app.name}`} />
      <LegalDoc sections={datenschutzSections(app)} updated={app.since} />
    </>
  );
}
