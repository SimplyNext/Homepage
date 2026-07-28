import type { MetadataRoute } from "next";
import { apps } from "@/lib/apps";
import { site } from "@/lib/site";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticPaths = ["", "/impressum", "/datenschutz"];
  // Nur die App-Detailseiten. Die Rechtsunterseiten (AGB/Datenschutz/
  // Impressum je App) sind bewusst noindex – sie sind über alle Apps hinweg
  // nahezu identisch. Eine noindex-Seite in der Sitemap wäre widersprüchlich.
  const appPaths = apps.map((a) => `/apps/${a.slug}`);

  return routing.locales.flatMap((locale) =>
    [...staticPaths, ...appPaths].map((p) => ({
      url: `${base}/${locale}${p}`,
      lastModified: new Date(),
    }))
  );
}
