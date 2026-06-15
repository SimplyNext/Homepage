/**
 * Zentrales App-Verzeichnis. Ein Eintrag erzeugt automatisch:
 *   /apps/<slug>                → Landingpage (Showcase, Beschreibung, Features)
 *   /apps/<slug>/datenschutz    → App-Datenschutz (für die App-Store-URL)
 *   /apps/<slug>/agb            → Nutzungsbedingungen
 *   /apps/<slug>/impressum      → Impressum
 *
 * Beispiel-Apps unten durch echte ersetzen. Für echte Screenshots die
 * `shots`-URLs auf eigene Bilder unter /public umstellen.
 */
export type AppPlatform = "flutter" | "expo";
export type AppStatus = "live" | "beta" | "coming-soon";

export type AppData = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string[];
  platform: AppPlatform;
  category: string;
  status: AppStatus;
  /** Zurückhaltende Akzentfarbe der App (nur punktuell eingesetzt) */
  accent: string;
  features: { title: string; text: string }[];
  /** Hero-/Showcase-Bilder (Pollinations-Platzhalter) */
  hero: string;
  shots: { src: string; alt: string }[];
  links: { type: "appstore" | "playstore" | "web"; url: string }[];
  since: string;
};

export const apps: AppData[] = [
  {
    slug: "trailmark",
    name: "TrailMark",
    tagline: "Jede Tour. Offline dabei.",
    summary: "Outdoor-Navigation mit Offline-Karten, Höhenprofilen und geteilten Touren.",
    description: [
      "TrailMark begleitet dich von der Planung bis zum Gipfelfoto. Lade Karten vorab herunter, navigiere ohne Empfang und behalte Höhenmeter, Tempo und Pausen im Blick.",
      "Geplante Routen lassen sich teilen, und nach der Tour fasst TrailMark deine Statistiken in einem klaren Rückblick zusammen.",
    ],
    platform: "flutter",
    category: "Outdoor",
    status: "live",
    accent: "#22A463",
    features: [
      { title: "Offline-Karten", text: "Ganze Regionen vorab laden und ohne Netz navigieren." },
      { title: "Höhenprofil", text: "Live-Höhenmeter, Steigung und Restdistanz auf einen Blick." },
      { title: "Touren teilen", text: "Routen als Link senden – direkt in der App öffnen." },
      { title: "Wetter-Layer", text: "Niederschlag und Wind für die nächsten Stunden." },
    ],
    hero: "/images/apps/trailmark/hero.jpg",
    shots: [
      { src: "/images/apps/trailmark/shot-1.jpg", alt: "Kartenansicht" },
      { src: "/images/apps/trailmark/shot-2.jpg", alt: "Höhenprofil" },
      { src: "/images/apps/trailmark/shot-3.jpg", alt: "Statistik" },
    ],
    links: [
      { type: "appstore", url: "#" },
      { type: "playstore", url: "#" },
    ],
    since: "2024",
  },
  {
    slug: "ledgerlane",
    name: "LedgerLane",
    tagline: "Haushaltsbuch, das mitdenkt.",
    summary: "Persönliche Finanzen mit automatischer Kategorisierung und klaren Budgets.",
    description: [
      "LedgerLane macht aus Kontobewegungen verständliche Einblicke. Ausgaben werden automatisch sortiert, Budgets warnen rechtzeitig, und du siehst, wohin dein Geld fließt.",
      "Alle Daten bleiben auf deinem Gerät – LedgerLane funktioniert vollständig ohne Account.",
    ],
    platform: "expo",
    category: "Finanzen",
    status: "live",
    accent: "#3B5BFF",
    features: [
      { title: "Auto-Kategorien", text: "Buchungen werden automatisch zugeordnet." },
      { title: "Budgets", text: "Limits setzen, sanfte Hinweise vor dem Überschreiten." },
      { title: "Lokal & privat", text: "Daten bleiben auf dem Gerät – keine Cloud nötig." },
      { title: "Export", text: "Auswertungen als CSV oder PDF exportieren." },
    ],
    hero: "/images/apps/ledgerlane/hero.jpg",
    shots: [
      { src: "/images/apps/ledgerlane/shot-1.jpg", alt: "Dashboard" },
      { src: "/images/apps/ledgerlane/shot-2.jpg", alt: "Budgets" },
      { src: "/images/apps/ledgerlane/shot-3.jpg", alt: "Buchungen" },
    ],
    links: [
      { type: "appstore", url: "#" },
      { type: "playstore", url: "#" },
    ],
    since: "2024",
  },
  {
    slug: "focusloop",
    name: "FocusLoop",
    tagline: "Tiefer arbeiten, ruhiger fühlen.",
    summary: "Pomodoro-Timer mit Ambient-Klängen, Statistiken und sanften Pausen.",
    description: [
      "FocusLoop strukturiert deinen Tag in fokussierte Intervalle. Wähle eine Klangkulisse, starte den Loop und lass dich durch Arbeit und Pause führen.",
      "Über die Wochen zeigt dir FocusLoop, wann du am produktivsten bist – ganz ohne Druck.",
    ],
    platform: "expo",
    category: "Produktivität",
    status: "beta",
    accent: "#8A6FE8",
    features: [
      { title: "Fokus-Loops", text: "Anpassbare Intervalle für Arbeit und Pausen." },
      { title: "Ambient-Sounds", text: "Regen, Café oder Stille – kuratierte Klänge." },
      { title: "Streaks", text: "Sichtbare Fortschritte über Tage und Wochen." },
      { title: "Ruhemodus", text: "Sperrt Ablenkungen während aktiver Loops." },
    ],
    hero: "/images/apps/focusloop/hero.jpg",
    shots: [
      { src: "/images/apps/focusloop/shot-1.jpg", alt: "Timer" },
      { src: "/images/apps/focusloop/shot-2.jpg", alt: "Statistik" },
      { src: "/images/apps/focusloop/shot-3.jpg", alt: "Klänge" },
    ],
    links: [{ type: "appstore", url: "#" }],
    since: "2025",
  },
  {
    slug: "platehub",
    name: "PlateHub",
    tagline: "Was koche ich heute? Gelöst.",
    summary: "Wochenplaner für Mahlzeiten mit Einkaufsliste und Vorratsverwaltung.",
    description: [
      "PlateHub plant deine Woche kulinarisch. Ziehe Rezepte in den Wochenplan, und die Einkaufsliste entsteht von selbst – zusammengeführt und sortiert.",
      "Was du schon zuhause hast, erkennt PlateHub und lässt es aus der Liste verschwinden.",
    ],
    platform: "flutter",
    category: "Food",
    status: "coming-soon",
    accent: "#E0843C",
    features: [
      { title: "Wochenplan", text: "Rezepte per Drag-and-drop auf Tage verteilen." },
      { title: "Smarte Liste", text: "Zutaten werden zusammengefasst und sortiert." },
      { title: "Vorrat", text: "Vorhandenes erkennen und automatisch abziehen." },
      { title: "Teilen", text: "Plan und Liste mit dem Haushalt synchronisieren." },
    ],
    hero: "/images/apps/platehub/hero.jpg",
    shots: [
      { src: "/images/apps/platehub/shot-1.jpg", alt: "Wochenplan" },
      { src: "/images/apps/platehub/shot-2.jpg", alt: "Einkaufsliste" },
      { src: "/images/apps/platehub/shot-3.jpg", alt: "Vorrat" },
    ],
    links: [{ type: "web", url: "#" }],
    since: "2025",
  },
];

export function getApp(slug: string) {
  return apps.find((a) => a.slug === slug);
}

export const platformLabel: Record<AppPlatform, string> = {
  flutter: "Flutter",
  expo: "Expo · React Native",
};
export const statusLabel: Record<AppStatus, string> = {
  live: "Verfügbar",
  beta: "Beta",
  "coming-soon": "Bald",
};
