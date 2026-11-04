/**
 * Herkunft des Besuchers (utm_source/medium/campaign) für die Play-Store-Knöpfe.
 *
 * Die Quelle wird aus der Adresse der Einstiegsseite gelesen und nur im
 * sessionStorage des Browsers gehalten (Dauer des Tabs, kein Cookie, nichts
 * an Dritte). Erlaubt sind nur die drei Parameter mit Werten aus [a-z0-9_-]
 * und höchstens 40 Zeichen – alles andere wird verworfen, damit sich kein
 * beliebiger Text in den Store-Link einschleusen lässt.
 */
const KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;
const STORAGE_KEY = "sn_campaign";
const VALUE = /^[a-z0-9_-]{1,40}$/;

type Campaign = Partial<Record<(typeof KEYS)[number], string>>;

function read(): Campaign {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const out: Campaign = {};
    for (const k of KEYS) {
      const v = parsed[k];
      if (typeof v === "string" && VALUE.test(v)) out[k] = v;
    }
    return out;
  } catch {
    return {};
  }
}

/** Liest die Parameter aus der aktuellen Adresse und merkt sie sich für die Sitzung. */
export function captureCampaign(): void {
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Campaign = {};
    for (const k of KEYS) {
      const v = params.get(k)?.trim().toLowerCase();
      if (v && VALUE.test(v)) found[k] = v;
    }
    // Nur eine Adresse mit gültiger Quelle überschreibt die gemerkte Herkunft.
    if (found.utm_source) window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  } catch {
    // sessionStorage nicht verfügbar (z. B. blockiert) – Links bleiben unverändert.
  }
}

/** Hängt die gemerkte Herkunft als `referrer` an einen Play-Store-Link; ohne Quelle unverändert. */
export function withReferrer(url: string): string {
  if (typeof window === "undefined" || !url.startsWith("https://play.google.com/")) return url;
  captureCampaign();
  const c = read();
  const parts = KEYS.filter((k) => c[k]).map((k) => `${k}=${c[k]}`);
  if (parts.length === 0) return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}referrer=${encodeURIComponent(parts.join("&"))}`;
}
