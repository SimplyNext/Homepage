"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useMountedTheme } from "@/hooks/useMountedTheme";

type Labels = { toLight: string; toDark: string };

/**
 * Einfacher Umschalt-Button (kein Select) – reagiert auf den zuletzt
 * aufgelösten Theme-Zustand und setzt danach explizit hell/dunkel
 * (überschreibt damit "system" bewusst, wie bei den meisten Theme-Switches
 * üblich). Tastaturbedienbar per Default (<button>), Fokus-Ring global via
 * :focus-visible, Name/Rolle über aria-label (4.1.2).
 */
export default function ThemeToggle({ labels }: { labels: Labels }) {
  const { setTheme } = useTheme();
  const { mounted, resolvedTheme } = useMountedTheme();
  const isLight = resolvedTheme === "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={isLight ? labels.toDark : labels.toLight}
      aria-pressed={isLight}
      data-cursor
      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink transition-colors hover:text-accent-soft"
    >
      {/* Vor dem Mount neutraler Platzhalter, damit Server/Client-Markup identisch bleiben (kein Hydration-Mismatch). */}
      {mounted && (isLight ? <Moon size={16} /> : <Sun size={16} />)}
    </button>
  );
}
