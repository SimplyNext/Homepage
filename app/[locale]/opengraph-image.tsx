import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { site } from "@/lib/site";
import { routing } from "@/i18n/routing";

/**
 * Open-Graph-Bild (1200×630) für Link-Vorschauen (WhatsApp, LinkedIn, X …).
 * Design: Hero-Look der Seite – dunkler Sternenhimmel (base-900 #0B0B0C),
 * Logo + Wortmarke, Tagline mit den Klammer-Akzenten aus dem Hero-Eyebrow.
 * Wird pro Locale statisch generiert (de/en-Tagline), Next.js verlinkt es
 * automatisch als og:image für alle Seiten unterhalb von /[locale].
 */

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const TAGLINE: Record<string, string> = {
  de: "Premium-Apps. Plattformübergreifend gebaut.",
  en: "Premium apps. Built cross-platform.",
};

// Deterministische "Sterne" (kein Math.random – Build bleibt reproduzierbar).
function stars(count: number) {
  let seed = 42;
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };
  return Array.from({ length: count }, () => ({
    x: rnd() * 1200,
    y: rnd() * 630,
    s: 1 + rnd() * 2.2,
    o: 0.25 + rnd() * 0.65,
  }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tagline = TAGLINE[locale] ?? TAGLINE.de;

  const logo = await readFile(path.join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0B0C",
          backgroundImage:
            "radial-gradient(circle at 50% 120%, rgba(59,91,255,0.22) 0%, rgba(59,91,255,0) 55%)",
          position: "relative",
        }}
      >
        {/* Sternenfeld wie im Hero */}
        {stars(110).map((st, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: st.x,
              top: st.y,
              width: st.s,
              height: st.s,
              borderRadius: 9999,
              backgroundColor: "#EDEAE3",
              opacity: st.o,
            }}
          />
        ))}

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={306} height={220} alt="" />

        {/* Wortmarke */}
        <div
          style={{
            display: "flex",
            marginTop: 34,
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: -2,
            color: "#EDEAE3",
          }}
        >
          {site.name}
        </div>

        {/* Tagline mit Klammer-Akzenten (wie Hero-Eyebrow) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 18,
            fontSize: 30,
            color: "#8C8A85",
          }}
        >
          <span style={{ color: "#F5A623" }}>{"{"}</span>
          <span>{tagline}</span>
          <span style={{ color: "#5C7A5E" }}>{"}"}</span>
        </div>

        {/* URL dezent unten */}
        <div
          style={{
            position: "absolute",
            bottom: 42,
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            color: "#66625C",
          }}
        >
          simplynext.de
        </div>
      </div>
    ),
    size
  );
}
