import TransitionLink from "@/components/ui/TransitionLink";
export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center px-gutter text-center">
      <div>
        <p className="font-display text-display-lg font-medium">
          <span className="text-accent">{"{"}</span>404<span className="text-accent-alt">{"}"}</span>
        </p>
        <h1 className="mt-6 font-display text-2xl">Diese Seite gibt es nicht.</h1>
        <TransitionLink href="/" className="mt-8 inline-flex rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-base-900" data-cursor>
          Zur Startseite
        </TransitionLink>
      </div>
    </section>
  );
}
