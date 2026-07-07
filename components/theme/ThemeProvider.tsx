"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * Dark/Light-Mode: next-themes injiziert ein blockierendes Inline-Script vor
 * dem ersten Paint, das die Theme-Klasse am <html> setzt – dadurch kein FOUC.
 * defaultTheme="system" folgt der OS-Präferenz; wer keine hat (oder JS ohne
 * matchMedia-Support), bekommt "dark" – deckt sich mit dem CSS-Fallback in
 * globals.css (:root = Dark-Palette).
 */
export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
