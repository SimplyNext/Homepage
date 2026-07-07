"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/**
 * Liefert das aktive Theme erst NACH dem Mount zurück (vorher immer "dark",
 * passend zum Server-Render und CSS-Fallback). So bleibt der erste Client-
 * Render mit dem Server-Markup identisch – kein Hydration-Mismatch-Warning –
 * und Komponenten, die z. B. inline Farben je Theme wählen (App-Akzentfarben),
 * können sicher `resolvedTheme` lesen.
 */
export function useMountedTheme() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return { mounted, resolvedTheme: mounted ? resolvedTheme : "dark" };
}
