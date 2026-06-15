import type { Metadata } from "next";
import { agbSections } from "@/lib/legal";
import { InnerPageHeader, LegalDoc } from "@/components/layout/LegalDoc";
export const metadata: Metadata = { title: "AGB" };
export default function Page() {
  return (
    <>
      <InnerPageHeader label="agb" title="Allgemeine Geschäftsbedingungen"
        intro="Für einzelne Apps können ergänzende Bedingungen gelten, die auf der jeweiligen App-Seite verlinkt sind."
        backLabel="Zurück zur Startseite" />
      <LegalDoc sections={agbSections()} />
    </>
  );
}
