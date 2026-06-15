import type { Metadata, Viewport } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import TransitionProvider from "@/components/providers/TransitionProvider";
import CustomCursor from "@/components/cursor/CustomCursor";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <SmoothScrollProvider>
          <TransitionProvider>
            <CustomCursor />
            {/* Korn-Overlay über der gesamten Seite */}
            <div className="grain pointer-events-none fixed inset-0 z-[110] opacity-[0.035] mix-blend-screen" aria-hidden />
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[140] focus:rounded focus:bg-paper focus:px-4 focus:py-2 focus:text-base-900"
            >
              Zum Inhalt springen
            </a>
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </TransitionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
