"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import TransitionLink from "@/components/ui/TransitionLink";
import SplitText from "@/components/ui/SplitText";
import { apps, statusLabel } from "@/lib/apps";

export default function AppsTeaser() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".app-tile", {
        y: 60,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".app-grid", start: "top 80%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} id="apps" className="border-t border-line bg-base-900 py-section">
      <div className="mx-auto max-w-shell px-gutter">
        <div className="mb-16 flex items-end justify-between gap-8">
          <h2 className="font-display text-display-md font-medium">
            <SplitText split="words" stagger={0.06}>
              Ausgewählte Apps
            </SplitText>
          </h2>
          <span className="hidden font-mono text-xs uppercase tracking-label text-ink-faint sm:block">
            {apps.length} Projekte
          </span>
        </div>

        <div className="app-grid grid gap-6 md:grid-cols-2">
          {apps.map((app) => (
            <TransitionLink
              key={app.slug}
              href={`/apps/${app.slug}`}
              className="app-tile group relative block overflow-hidden rounded-2xl border border-line"
              data-cursor
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={app.hero}
                  alt={app.name}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-900/90 to-transparent" />
                <span
                  className="absolute right-5 top-5 rounded-full border border-line bg-base-900/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-paper backdrop-blur"
                >
                  {statusLabel[app.status]}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 p-7">
                <div>
                  <h3 className="font-display text-2xl font-medium">{app.name}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{app.tagline}</p>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-faint">{app.summary}</p>
                </div>
                <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-paper transition-all duration-500 group-hover:bg-paper group-hover:text-base-900">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </TransitionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
