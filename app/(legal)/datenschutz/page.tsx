import type { Metadata } from "next";
import { datenschutzSections } from "@/lib/legal";
import { InnerPageHeader, LegalDoc } from "@/components/layout/LegalDoc";
export const metadata: Metadata = { title: "Datenschutz" };
export default function Page() {
  return (
    <>
      <InnerPageHeader label="datenschutz" title="Datenschutzerklärung"
        intro="Diese Erklärung gilt für diese Website. Für unsere Apps gelten die jeweils dort verlinkten App-Datenschutzerklärungen."
        backLabel="Zurück zur Startseite" />
      <LegalDoc sections={datenschutzSections()} />
    </>
  );
}
