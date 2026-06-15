"use client";

import SplitText from "@/components/ui/SplitText";
import Magnetic from "@/components/ui/Magnetic";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-base-900 py-section">
      <div className="mx-auto max-w-shell px-gutter text-center">
        <p className="mb-8 font-mono text-xs uppercase tracking-label text-ink-faint">
          <span className="text-accent">{"{"}</span> Kontakt{" "}
          <span className="text-accent-alt">{"}"}</span>
        </p>
        <h2 className="mx-auto max-w-4xl font-display text-display-lg font-medium leading-[0.95]">
          <SplitText split="words" stagger={0.05}>
            Lass uns etwas bauen.
          </SplitText>
        </h2>
        <div className="mt-14">
          <Magnetic strength={0.35}>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex rounded-full bg-paper px-9 py-5 text-base font-medium text-base-900"
              data-cursor
            >
              {site.email}
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
