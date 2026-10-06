import { AppAuthPage, authMetadata, authStaticParams } from "@/components/layout/AppAuthPage";

type Params = { locale: string; slug: string };

/** Link aus der Konto-Mail der App – siehe lib/app-auth.ts. */
export const dynamicParams = false;
export const generateStaticParams = authStaticParams;

export function generateMetadata({ params }: { params: Promise<Params> }) {
  return authMetadata(params, "confirm");
}

export default function Page({ params }: { params: Promise<Params> }) {
  return <AppAuthPage params={params} mode="confirm" />;
}
