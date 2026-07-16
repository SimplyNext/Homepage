import { setRequestLocale } from "next-intl/server";
import HeroSignature from "@/components/sections/home/HeroSignature";
import PhoneJourney from "@/components/sections/home/PhoneJourney";
import AppsRail from "@/components/sections/home/AppsRail";
import AppsBento from "@/components/sections/home/AppsBento";
import KineticStatement from "@/components/sections/home/KineticStatement";
import ContactFinale from "@/components/sections/home/ContactFinale";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Aurora-Hintergrund entfernt: seine sehr dunklen fBm-Schlieren wirkten
          im Dark-Mode als bräunliche konzentrische Blobs („Sonnensystem") und
          schlugen je nach Gerät im Hero durch. Seite nutzt jetzt den soliden
          Theme-Grund; der Hero hat seinen eigenen Sternenhimmel. */}
      <HeroSignature />
      <PhoneJourney />
      <AppsRail />
      <AppsBento />
      <KineticStatement />
      <ContactFinale />
    </>
  );
}
