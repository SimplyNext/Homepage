import TransitionLink from "@/components/ui/TransitionLink";
import { apps } from "@/lib/apps";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-base-900">
      <div className="mx-auto max-w-shell px-gutter py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-medium tracking-tightest">SimplyNext</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              {site.description}
            </p>
          </div>
          <FooterCol title="Apps">
            {apps.map((a) => (
              <li key={a.slug}>
                <TransitionLink href={`/apps/${a.slug}`} className="text-sm text-ink-muted transition-colors hover:text-paper">
                  {a.name}
                </TransitionLink>
              </li>
            ))}
          </FooterCol>
          <FooterCol title="Studio">
            <li><TransitionLink href="/#studio" className="text-sm text-ink-muted hover:text-paper">Vorgehen</TransitionLink></li>
            <li><TransitionLink href="/#contact" className="text-sm text-ink-muted hover:text-paper">Kontakt</TransitionLink></li>
          </FooterCol>
          <FooterCol title="Rechtliches">
            <li><TransitionLink href="/impressum" className="text-sm text-ink-muted hover:text-paper">Impressum</TransitionLink></li>
            <li><TransitionLink href="/datenschutz" className="text-sm text-ink-muted hover:text-paper">Datenschutz</TransitionLink></li>
            <li><TransitionLink href="/agb" className="text-sm text-ink-muted hover:text-paper">AGB</TransitionLink></li>
          </FooterCol>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {site.legal.companyName}. Alle Rechte vorbehalten.</span>
          <span className="font-mono text-xs">Flutter · Expo</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-label text-ink-faint">{title}</h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}
