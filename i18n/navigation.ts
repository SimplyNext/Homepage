import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-bewusste Varianten von Link/usePathname/useRouter/redirect –
 * bilden Pfade automatisch auf /de/... bzw. /en/... ab.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
