import type { Metadata } from "next";
import { impressumSections } from "@/lib/legal";
import { InnerPageHeader, LegalDoc } from "@/components/layout/LegalDoc";
export const metadata: Metadata = { title: "Impressum" };
export default function Page() {
  return (
    <>
      <InnerPageHeader label="impressum" title="Impressum" backLabel="Zurück zur Startseite" />
      <LegalDoc sections={impressumSections()} />
    </>
  );
}
