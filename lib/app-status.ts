import { apps, type AppStatus, type StatusMap } from "@/lib/apps";

/**
 * Status-Abgleich mit AppControl: dort wird je App der Status gepflegt
 * (live, in Prüfung, in Entwicklung …). Die Website übernimmt ihn, damit eine
 * App hier nicht „Bald“ zeigt, während sie längst im Store steht – und
 * umgekehrt.
 *
 * Gelesen wird über die Funktion `website_app_status` im AppControl-Projekt.
 * Sie gibt für die angefragten Slugs nur Status und (bei Live-Apps) das
 * Play-Paket heraus. Der Schlüssel ist der öffentliche des Projekts, kein
 * Geheimnis. Die Antwort wird fünf Minuten zwischengespeichert; fällt
 * AppControl aus, gelten die Werte aus lib/apps.ts.
 */
const CONTROL_URL = "https://cmswxzqegyyupakkflrm.supabase.co";
const CONTROL_KEY = "sb_publishable_3hvc4b0HHmrjl2Hw34L8vQ_twKilzuo";
const REVALIDATE_SECONDS = 300;

/** Slugs, die in AppControl anders heißen als auf der Website. */
const controlSlug: Record<string, string> = { eatsafety: "eatsafely" };

type Row = { slug: string; status: string; play_package: string | null };

/** Nur „live“ zählt als veröffentlicht; alles davor zeigt die Website als „Bald“. */
function toWebsiteStatus(status: string): AppStatus {
  return status === "live" ? "live" : "coming-soon";
}

export async function getAppStatuses(): Promise<StatusMap> {
  const wanted = apps.map((a) => controlSlug[a.slug] ?? a.slug);
  const url = `${CONTROL_URL}/rest/v1/rpc/website_app_status?slugs=${encodeURIComponent(
    `{${wanted.join(",")}}`
  )}`;
  try {
    const res = await fetch(url, {
      headers: { apikey: CONTROL_KEY },
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return {};
    const rows = (await res.json()) as Row[];
    const bySlug = new Map(rows.map((r) => [r.slug, r]));
    const map: StatusMap = {};
    for (const app of apps) {
      const row = bySlug.get(controlSlug[app.slug] ?? app.slug);
      if (!row) continue;
      map[app.slug] = {
        status: toWebsiteStatus(row.status),
        ...(row.play_package
          ? { playUrl: `https://play.google.com/store/apps/details?id=${row.play_package}` }
          : {}),
      };
    }
    return map;
  } catch {
    return {};
  }
}
