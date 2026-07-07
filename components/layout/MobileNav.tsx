"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import TransitionLink from "@/components/ui/TransitionLink";
import ThemeToggle from "@/components/theme/ThemeToggle";
import LocaleSwitch from "@/components/layout/LocaleSwitch";

type NavItem = { href: string; label: string };

/**
 * Mobiles Menü als natives <dialog>: liefert Fokus-Trap, Esc-zum-Schließen
 * und einen Backdrop kostenlos vom Browser (statt einer selbstgebauten,
 * fehleranfälligen Fokus-Falle). Beim Öffnen wandert der Fokus automatisch
 * in den Dialog, beim Schließen zurück auf den auslösenden Button.
 */
export default function MobileNav({ nav }: { nav: NavItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const t = useTranslations("common");

  const openMenu = () => {
    dialogRef.current?.showModal();
    setOpen(true);
  };
  const closeMenu = () => {
    dialogRef.current?.close();
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={openMenu}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={t("menuOpen")}
        data-cursor
        className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink"
      >
        <Menu size={18} aria-hidden />
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        className="m-0 h-dvh max-h-none w-full max-w-none border-none bg-base-900 p-0 text-ink backdrop:bg-base-900/70"
      >
        <div className="flex h-full flex-col px-gutter py-6">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={closeMenu}
              aria-label={t("menuClose")}
              data-cursor
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink"
            >
              <X size={20} aria-hidden />
            </button>
          </div>

          <nav className="mt-16 flex flex-1 flex-col items-start gap-8">
            {nav.map((n) => (
              <TransitionLink
                key={n.href}
                href={n.href}
                onClick={closeMenu}
                className="font-display text-3xl font-medium text-ink"
                data-cursor
              >
                {n.label}
              </TransitionLink>
            ))}
          </nav>

          <div className="flex items-center gap-4 pb-4">
            <LocaleSwitch labels={{ toEnglish: t("localeSwitch.toEnglish"), toGerman: t("localeSwitch.toGerman") }} />
            <ThemeToggle labels={{ toLight: t("themeToggle.toLight"), toDark: t("themeToggle.toDark") }} />
          </div>
        </div>
      </dialog>
    </div>
  );
}
