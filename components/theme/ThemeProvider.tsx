"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * Dark/Light-Mode: next-themes injiziert ein blockierendes Inline-Script vor
 * dem ersten Paint, das die Theme-Klasse am <html> setzt – dadurch kein FOUC.
 * defaultTheme="dark" + enableSystem=false: die Seite startet IMMER im
 * Dark-Mode (folgt bewusst NICHT der OS-Präferenz) – deckt sich mit dem
 * CSS-Fallback in globals.css (:root = Dark-Palette). Der ThemeToggle setzt
 * danach explizit hell/dunkel; eine bewusste Nutzerwahl bleibt gespeichert.
 */
export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
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
