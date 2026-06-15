import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { apps, getApp } from "@/lib/apps";
import { agbSections } from "@/lib/legal";
import { InnerPageHeader, LegalDoc } from "@/components/layout/LegalDoc";

type Params = { slug: string };
export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  return { title: app ? `AGB – ${app.name}` : "AGB" };
}
export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();
  return (
    <>
      <InnerPageHeader label="agb" title={`Nutzungsbedingungen – ${app.name}`}
        intro={`Die Bedingungen für die Nutzung der App „${app.name}".`}
        backHref={`/apps/${app.slug}`} backLabel={`Zurück zu ${app.name}`} />
      <LegalDoc sections={agbSections(app)} updated={app.since} />
    </>
  );
}
