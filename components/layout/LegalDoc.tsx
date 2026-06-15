import TransitionLink from "@/components/ui/TransitionLink";
import { ArrowLeft } from "lucide-react";
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
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-ink-muted transition-colors hover:text-paper"
          data-cursor
        >
          <ArrowLeft size={14} />
          {backLabel}
        </TransitionLink>
        <p className="mt-10 font-mono text-xs uppercase tracking-label text-ink-faint">
          <span className="text-accent">{"{"}</span> {label}{" "}
          <span className="text-accent-alt">{"}"}</span>
        </p>
        <h1 className="mt-4 font-display text-display-md font-medium">{title}</h1>
        {intro && <p className="mt-5 max-w-prose leading-relaxed text-ink-muted">{intro}</p>}
      </div>
    </header>
  );
}

export function LegalDoc({ sections, updated }: { sections: LegalSection[]; updated?: string }) {
  return (
    <article className="mx-auto max-w-3xl px-gutter py-20">
      {updated && (
        <p className="mb-12 font-mono text-xs uppercase tracking-label text-ink-faint">
          Stand: {updated}
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
        <strong className="text-paper">Hinweis:</strong> Dieser Text ist eine Vorlage und
        ersetzt keine Rechtsberatung. Bitte alle Platzhalter ausfüllen und vor
        Veröffentlichung fachkundig prüfen lassen.
      </div>
    </article>
  );
}
