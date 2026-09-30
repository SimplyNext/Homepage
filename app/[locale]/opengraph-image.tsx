import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { apps } from "@/lib/apps";
import { galerie, stageColor } from "@/lib/galerie";
import { site } from "@/lib/site";
import { routing } from "@/i18n/routing";

/**
 * Open-Graph-Bild (1200×630) für Link-Vorschauen (WhatsApp, LinkedIn, X …).
 * Design: der Galerie-Look der Seite – heller Grund, große dunkle Headline,
 * unten je App eine Kachel in ihrer Bühnenfarbe. Wird pro Locale statisch
 * generiert, Next.js verlinkt es automatisch als og:image für alle Seiten
 * unterhalb von /[locale].
 */

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const HEADLINE: Record<string, [string, string]> = {
  de: ["Apps, die man", "gern benutzt."],
  en: ["Apps people", "enjoy using."],
};

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const [line1, line2] = HEADLINE[locale] ?? HEADLINE.de;

  const logo = await readFile(path.join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  // Die Schrift der Seite (Bricolage Grotesque, fett) – als .woff, weil der
  // Bild-Renderer keine variablen .woff2-Schriften lesen kann.
  const font = await readFile(
    path.join(
      process.cwd(),
      "node_modules/@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-800-normal.woff"
    )
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: galerie.ground,
          color: galerie.ink,
          fontFamily: "Bricolage Grotesque",
          padding: "56px 64px 0",
        }}
      >
        {/* Logo (auf seinem schwarzen Grund als Kachel) + Wortmarke */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 84,
              height: 84,
              borderRadius: 22,
              backgroundColor: "#000000",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={78} height={56} alt="" />
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
            {site.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 118,
            fontWeight: 800,
            lineHeight: 0.98,
            letterSpacing: -5,
          }}
        >
          <span>{line1}</span>
          <span>{line2}</span>
        </div>

        {/* Je App eine Kachel in ihrer Farbe, unten angeschnitten */}
        <div style={{ display: "flex", gap: 14, height: 118 }}>
          {apps.map((app) => (
            <div
              key={app.slug}
              style={{
                display: "flex",
                flex: 1,
                alignItems: "flex-start",
                padding: "18px 0 0 16px",
                borderRadius: "24px 24px 0 0",
                backgroundColor: stageColor(app),
                fontSize: 19,
                fontWeight: 800,
                letterSpacing: -0.5,
              }}
            >
              {app.name}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Bricolage Grotesque", data: font, weight: 800, style: "normal" }],
    }
  );
}
