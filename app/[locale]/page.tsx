import { setRequestLocale } from "next-intl/server";
import HomeSceneMount from "@/components/webgl/HomeSceneMount";
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
      {/* Eine WebGL-Ebene für die ganze Homepage: Aurora + 3D-Phone */}
      <HomeSceneMount />
      <HeroSignature />
      <PhoneJourney />
      <AppsRail />
      <AppsBento />
      <KineticStatement />
      <ContactFinale />
    </>
  );
}
