import type { MetadataRoute } from "next";
import { apps } from "@/lib/apps";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticRoutes = ["", "/impressum", "/datenschutz", "/agb"].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
  const appRoutes = apps.flatMap((a) => ["", "/datenschutz", "/agb", "/impressum"].map((s) => ({ url: `${base}/apps/${a.slug}${s}`, lastModified: new Date() })));
  return [...staticRoutes, ...appRoutes];
}
