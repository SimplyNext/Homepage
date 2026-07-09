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
      // Kein Inline-`color-scheme` ans <html> schreiben lassen. Sonst
      // überschreibt next-themes (Default true) unsere CSS-Regel und mobile
      // Browser (Samsung Internet) sehen nur "light"/"dark" statt "only …"
      // → sie erzwingen ihr eigenes Force-Dark. Wir setzen color-scheme
      // stattdessen selbst klassenbasiert in globals.css.
      enableColorScheme={false}
    >
      {children}
    </NextThemesProvider>
  );
}
