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

export async function LegalDoc({ sections, updated, hideEnNotice = false }: { sections: LegalSection[]; updated?: string; hideEnNotice?: boolean }) {
  const locale = await getLocale();
  const t = await getTranslations("legal");

  return (
    <article className="mx-auto max-w-3xl px-gutter py-20">
      {/* Rechtstexte bleiben bewusst Deutsch (rechtlich verbindliche Fassung
          für ein deutsches Unternehmen) – auf /en nur ein kurzer Hinweis. */}
      {!hideEnNotice && locale !== "de" && (
        <p className="mb-8 rounded-lg border border-line bg-base-800 px-4 py-3 text-sm text-ink-muted">
          {t("enNotice")}
        </p>
      )}
      {updated && (
        <p className="mb-12 font-mono text-xs uppercase tracking-label text-ink-faint">
          {t("updated", { date: updated })}
        </p>
      )}
      <div>
        {sections.map((s, i) => {
          const sub = s.level === 3;
          const Heading = sub ? "h3" : "h2";
          // Abstände als Margins statt space-y, damit Unterabschnitte enger
          // ans übergeordnete Kapitel rücken.
          const gap = i === 0 ? "" : sub ? "mt-8" : "mt-12";

          return (
            <section key={i} className={gap}>
              <Heading className={sub ? "font-display text-base font-medium" : "font-display text-xl font-medium"}>
                {s.heading}
              </Heading>
              {s.paragraphs?.map((p, j) => (
                <p key={j} className="mt-3 leading-relaxed text-ink-muted">
                  {p}
                </p>
              ))}
              {s.list &&
                (s.ordered ? (
                  <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-ink-muted [&>li]:leading-relaxed">
                    {s.list.map((it, k) => (
                      <li key={k}>{it}</li>
                    ))}
                  </ol>
                ) : (
                  <ul className="mt-3 space-y-1.5 text-ink-muted">
                    {s.list.map((it, k) => (
                      <li key={k}>{it}</li>
                    ))}
                  </ul>
                ))}
              {/* Tabellen scrollen auf Mobile in sich, statt die Seite zu weiten. */}
              {s.table && (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-line">
                        {s.table.head.map((h, k) => (
                          <th key={k} className="py-2 pr-4 align-bottom font-medium">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((row, r) => (
                        <tr key={r} className="border-b border-line">
                          {row.map((c, k) => (
                            <td key={k} className="py-2 pr-4 align-top leading-relaxed text-ink-muted">
                              {c}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {s.afterList?.map((p, j) => (
                <p key={j} className="mt-3 leading-relaxed text-ink-muted">
                  {p}
                </p>
              ))}
            </section>
          );
        })}
      </div>
    </article>
  );
}
