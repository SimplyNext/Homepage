import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { accountDeletion } from "./lib/account-deletion";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// Die „Konto löschen“-Seiten melden Nutzer im Browser direkt bei der
// Supabase-Instanz der App an (das Passwort läuft nicht über diese Website).
// Genau diese Adressen – und nur sie – dürfen deshalb angesprochen werden.
const accountDeletionOrigins = Object.values(accountDeletion)
  .map((c) => new URL(c.supabaseUrl).origin)
  .join(" ");

const csp = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' ${process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob:;
  font-src 'self' data:;
  connect-src 'self' ${accountDeletionOrigins};
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
  object-src 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

// Bestätigungsseite für die Konto-Mails von WerkFlow (public/werkflow-auth.html,
// Quelle: werkflow/docs/web/werkflow-auth.html). Sie lädt supabase-js von
// jsDelivr und bestätigt die E-Mail-Adresse direkt bei Supabase. Nur diese
// Seite bekommt den CDN-Zugriff; die Regel steht nach der allgemeinen und
// ersetzt sie für diesen Pfad.
const werkflowAuthCsp = csp.replace(
  "script-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Lokale SVG-Platzhalter (public/images) über next/image ausliefern
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
      {
        source: "/werkflow-auth.html",
        headers: [
          { key: "Content-Security-Policy", value: werkflowAuthCsp },
          { key: "X-Robots-Tag", value: "noindex" },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
