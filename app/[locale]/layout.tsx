import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "../globals.css";

import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import TransitionProvider from "@/components/providers/TransitionProvider";
import ThemeProvider from "@/components/theme/ThemeProvider";
import CustomCursor from "@/components/cursor/CustomCursor";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";
import { routing } from "@/i18n/routing";

const ogLocale = { de: "de_DE", en: "en_US" } as const;

type Params = { locale: string };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(site.url),
    title: { default: `${site.name} — ${site.tagline}`, template: `%s · ${site.name}` },
    description: site.description,
    openGraph: {
      type: "website",
      locale: ogLocale[locale as keyof typeof ogLocale] ?? ogLocale.de,
      siteName: site.name,
      title: `${site.name} — ${site.tagline}`,
      description: site.description,
    },
    alternates: {
      languages: Object.fromEntries(routing.locales.map((l) => [l, `/${l}`])),
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F4EF" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0C" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Statisches Rendering pro Locale (next-intl) + Skip-Link-Text serverseitig.
  setRequestLocale(locale);
  const t = await getTranslations("common");

  return (
    <html lang={locale} suppressHydrationWarning>
      {/* suppressHydrationWarning (html): next-themes setzt die Theme-Klasse
          per Inline-Script VOR der Hydration – erwarteter Unterschied zum
          Server-Markup, kein Bug.
          suppressHydrationWarning (body): Browser-Extensions (z. B.
          ColorZilla) fügen vor der Hydration Attribute wie
          cz-shortcut-listen hinzu – ebenfalls kein App-Bug. */}
      <body suppressHydrationWarning>
        <NextIntlClientProvider>
          <ThemeProvider>
            <SmoothScrollProvider>
              <TransitionProvider>
                <CustomCursor />
                {/* Korn-Overlay über der gesamten Seite */}
                <div className="grain pointer-events-none fixed inset-0 z-[110] opacity-[0.035] mix-blend-screen" aria-hidden />
                <a
                  href="#main"
                  className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[140] focus:rounded focus:bg-paper focus:px-4 focus:py-2 focus:text-paperInk"
                >
                  {t("skipLink")}
                </a>
                <Header />
                <main id="main">{children}</main>
                <Footer />
              </TransitionProvider>
            </SmoothScrollProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
