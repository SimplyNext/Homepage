import { defineRouting } from "next-intl/routing";

/**
 * Zwei vollwertige URL-Räume /de und /en (localePrefix "always" statt
 * "as-needed"), damit auch die Standardsprache eine explizite, teilbare
 * und SEO-indexierbare URL hat (/de/... statt nacktem /...).
 */
export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  localePrefix: "always",
});

export type AppLocale = (typeof routing.locales)[number];
