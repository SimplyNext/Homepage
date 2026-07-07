import type { MetadataRoute } from "next";
import { apps } from "@/lib/apps";
import { site } from "@/lib/site";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticPaths = ["", "/impressum", "/datenschutz"];
  const appPaths = apps.flatMap((a) => ["", "/datenschutz", "/agb", "/impressum"].map((s) => `/apps/${a.slug}${s}`));

  return routing.locales.flatMap((locale) =>
    [...staticPaths, ...appPaths].map((p) => ({
      url: `${base}/${locale}${p}`,
      lastModified: new Date(),
    }))
  );
}
