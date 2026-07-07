import { getTranslations } from "next-intl/server";
import TransitionLink from "@/components/ui/TransitionLink";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return (
    <section className="grid min-h-[80svh] place-items-center px-gutter text-center">
      <div>
        <p className="font-display text-display-lg font-medium">
          <span className="text-accent-soft">{"{"}</span>404<span className="text-accent-alt">{"}"}</span>
        </p>
        <h1 className="mt-6 font-display text-2xl">{t("title")}</h1>
        <TransitionLink href="/" className="mt-8 inline-flex rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-paperInk" data-cursor>
          {t("cta")}
        </TransitionLink>
      </div>
    </section>
  );
}
