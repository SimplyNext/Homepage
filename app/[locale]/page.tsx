import { setRequestLocale } from "next-intl/server";
import GalerieHero from "@/components/sections/galerie/GalerieHero";
import GalerieStage from "@/components/sections/galerie/GalerieStage";
import {
  GalerieGrid,
  GalerieFacts,
  GalerieStatement,
  GalerieFinale,
} from "@/components/sections/galerie/GalerieRest";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <GalerieHero />
      <GalerieStage />
      <GalerieGrid />
      <GalerieFacts />
      <GalerieStatement />
      <GalerieFinale />
    </>
  );
}
