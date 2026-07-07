import TransitionLink from "@/components/ui/TransitionLink";
import { ArrowLeft } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import type { LegalSection } from "@/lib/legal";

export function InnerPageHeader({
  label,
  title,
  intro,
  backHref = "/",
  backLabel = "Zurück",
}: {
  label: string;
  title: string;
  intro?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <header className="border-b border-line pt-36">
      <div className="mx-auto max-w-3xl px-gutter pb-16">
        <TransitionLink
          href={backHref}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-ink-muted transition-colors hover:text-ink"
          data-cursor
        >
          <ArrowLeft size={14} />
          {backLabel}
        </TransitionLink>
        <p className="mt-10 font-mono text-xs uppercase tracking-label text-ink-faint">
          <span className="text-accent-soft">{"{"}</span> {label}{" "}
          <span className="text-accent-alt">{"}"}</span>
        </p>
        <h1 className="mt-4 font-display text-display-md font-medium">{title}</h1>
        {intro && <p className="mt-5 max-w-prose leading-relaxed text-ink-muted">{intro}</p>}
      </div>
    </header>
  );
}

export async function LegalDoc({ sections, updated }: { sections: LegalSection[]; updated?: string }) {
  const locale = await getLocale();
  const t = await getTranslations("legal");

  return (
    <article className="mx-auto max-w-3xl px-gutter py-20">
      {/* Rechtstexte bleiben bewusst Deutsch (rechtlich verbindliche Fassung
          für ein deutsches Unternehmen) – auf /en nur ein kurzer Hinweis. */}
      {locale !== "de" && (
        <p className="mb-8 rounded-lg border border-line bg-base-800 px-4 py-3 text-sm text-ink-muted">
          {t("enNotice")}
        </p>
      )}
      {updated && (
        <p className="mb-12 font-mono text-xs uppercase tracking-label text-ink-faint">
          {t("updated", { date: updated })}
        </p>
      )}
      <div className="space-y-12">
        {sections.map((s, i) => (
          <section key={i}>
            <h2 className="font-display text-xl font-medium">{s.heading}</h2>
            {s.paragraphs?.map((p, j) => (
              <p key={j} className="mt-3 leading-relaxed text-ink-muted">
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="mt-3 space-y-1.5 text-ink-muted">
                {s.list.map((it, k) => (
                  <li key={k}>{it}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
      <div className="mt-16 rounded-xl border border-line bg-base-800 p-5 text-sm leading-relaxed text-ink-muted">
        <strong className="text-ink">{t("note")}</strong> {t("noteText")}
      </div>
    </article>
  );
}
