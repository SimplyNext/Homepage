/**
 * Zentrales App-Verzeichnis. Ein Eintrag erzeugt automatisch:
 *   /apps/<slug>                → Landingpage (Showcase, Beschreibung, Features)
 *   /apps/<slug>/datenschutz    → App-Datenschutz (für die App-Store-URL)
 *   /apps/<slug>/agb            → Nutzungsbedingungen
 *   /apps/<slug>/impressum      → Impressum
 *
 * Weitere App hinzufügen = einen Eintrag im `apps`-Array ergänzen UND einen
 * passenden `apps.<slug>`-Block in messages/de.json + messages/en.json.
 * Nur STRUKTURELLE Daten leben hier (Slug, Plattformen, Farben, Bildpfade,
 * Links) – alle sichtbaren Marketing-Texte (Tagline, Beschreibung, Features,
 * Preise, Alt-Texte) kommen zweisprachig aus den Message-Katalogen, siehe
 * `useAppContent` in lib/useAppContent.ts.
 *
 * Für echte Screenshots die `hero`/`shots`-Pfade auf eigene Bilder unter
 * /public/images/apps/<slug>/ legen (gleiche Dateinamen genügen).
 */
export type AppStatus = "live" | "beta" | "coming-soon";

export type AppData = {
  slug: string;
  name: string;
  /** Verfügbare Plattformen, z. B. ["Android"] */
  os: string[];
  /** Hinweis „iOS-Version in Kürze“ anzeigen */
  iosSoon: boolean;
  status: AppStatus;
  /** Zurückhaltende Akzentfarbe der App (nur punktuell eingesetzt) */
  accent: string;
  /** Abgedunkelte Variante von `accent` für Light-Mode-Text (AA ≥4.5:1 auf hellem Hintergrund) */
  accentLight: string;
  /** Hero-/Showcase-Bilder */
  hero: string;
  /**
   * Wie das Hero-Bild eingepasst wird: "cover" für flächige Fotos/Renderings,
   * "contain" für Logos (transparent/weiß) – die dann auf einem sanften
   * akzentgetönten Grund zentriert gezeigt werden statt beschnitten.
   */
  heroFit: "cover" | "contain";
  /**
   * true, wenn die Screenshots rohe App-UI OHNE OS-Chrome sind (keine
   * Statusleiste/Uhrzeit oben, keine Navigationsleiste unten). Der Phone-Frame
   * ergänzt dann künstliches Chrome + rückt das Bild ein, damit es nicht
   * hochgezoomt/„zu groß" wirkt. Echte 1080×2640-Screenshots lassen es weg.
   */
  syntheticChrome?: boolean;
  /**
   * true, solange die App nur Platzhalter-Inhalte hat. Solche Seiten werden
   * auf noindex gesetzt und aus der Sitemap gehalten – ihr Text ist über alle
   * Platzhalter-Apps identisch, Google würde sie sonst als Duplikat bzw.
   * „Gecrawlt – zurzeit nicht indexiert" melden. Flag entfernen, sobald echte
   * Texte und Screenshots hinterlegt sind.
   */
  placeholder?: boolean;
  /** Nur Bildpfade – Alt-Texte kommen aus den Messages (apps.<slug>.shots[i]) */
  shots: { src: string }[];
  /**
   * Optional: Startbild je Sprache (rohe App-UI, 1080×2640) für Bühne,
   * Startseite und den Kopf der App-Seite. Ohne Angabe gilt `shots[0]`.
   */
  coverShots?: Record<"de" | "en", string>;
  links: { type: "appstore" | "playstore" | "web"; url: string }[];
  since: string;
};

export const apps: AppData[] = [
  {
    slug: "eatsafety",
    name: "EatSafety",
    os: ["Android"],
    iosSoon: true,
    status: "coming-soon",
    accent: "#78967A",
    accentLight: "#4F6B52",
    hero: "/images/apps/eatsafety/hero.png",
    heroFit: "contain",
    shots: [
      { src: "/images/apps/eatsafety/eatsafety_1.png" },
      { src: "/images/apps/eatsafety/eatsafety_2.png" },
      { src: "/images/apps/eatsafety/eatsafety_3.png" },
      { src: "/images/apps/eatsafety/eatsafety_4.png" },
      { src: "/images/apps/eatsafety/eatsafety_5.png" },
      { src: "/images/apps/eatsafety/eatsafety_6.png" },
      { src: "/images/apps/eatsafety/eatsafety_7.png" },
      { src: "/images/apps/eatsafety/eatsafety_8.png" },
      { src: "/images/apps/eatsafety/eatsafety_9.png" },
    ],
    links: [{ type: "playstore", url: "#" }],
    since: "2026",
  },
  {
    slug: "wefixit",
    name: "WeFixIt",
    os: ["Android"],
    iosSoon: true,
    status: "coming-soon",
    accent: "#F4846A",
    accentLight: "#A3361F",
    hero: "/images/apps/wefixit/hero.png",
    heroFit: "contain",
    shots: [
      { src: "/images/apps/wefixit/WeFixIt_1.png" },
      { src: "/images/apps/wefixit/WeFixIt_2.png" },
      { src: "/images/apps/wefixit/WeFixIt_3.png" },
      { src: "/images/apps/wefixit/WeFixIt_4.png" },
      { src: "/images/apps/wefixit/WeFixIt_5.png" },
      { src: "/images/apps/wefixit/WeFixIt_6.png" },
      { src: "/images/apps/wefixit/WeFixIt_7.png" },
      { src: "/images/apps/wefixit/WeFixIt_8.png" },
      { src: "/images/apps/wefixit/WeFixIt_9.png" },
      { src: "/images/apps/wefixit/WeFixIt_10.png" },
    ],
    links: [{ type: "playstore", url: "#" }],
    since: "2026",
  },
  {
    slug: "nook",
    name: "NOOK",
    os: ["Android"],
    iosSoon: true,
    status: "coming-soon",
    accent: "#6FA8DC",
    accentLight: "#2E5D8A",
    hero: "/images/apps/nook/hero.png",
    heroFit: "contain",
    syntheticChrome: true,
    shots: [
      { src: "/images/apps/nook/nook_1.png" },
      { src: "/images/apps/nook/nook_2.png" },
      { src: "/images/apps/nook/nook_3.png" },
    ],
    links: [{ type: "playstore", url: "#" }],
    since: "2026",
  },
  {
    slug: "cocos-world",
    name: "CoCo's World",
    os: ["Android"],
    iosSoon: true,
    status: "coming-soon",
    accent: "#7BB662",
    accentLight: "#3E6B2E",
    hero: "/images/apps/cocos-world/hero.png",
    heroFit: "contain",
    syntheticChrome: true,
    shots: [
      { src: "/images/apps/cocos-world/cocos-world_1.png" },
      { src: "/images/apps/cocos-world/cocos-world_2.png" },
      { src: "/images/apps/cocos-world/cocos-world_3.png" },
    ],
    links: [{ type: "playstore", url: "#" }],
    since: "2026",
  },
  {
    slug: "werkflow",
    name: "WerkFlow",
    os: ["Android"],
    iosSoon: true,
    status: "live",
    accent: "#F28C28",
    accentLight: "#8F4C12",
    hero: "/images/apps/werkflow/hero.png",
    heroFit: "contain",
    shots: [
      { src: "/images/apps/werkflow/home-de.png" },
      { src: "/images/apps/werkflow/1-diktieren.png" },
      { src: "/images/apps/werkflow/2-ki-vorschlag.png" },
      { src: "/images/apps/werkflow/3-pruefen.png" },
      { src: "/images/apps/werkflow/4-pdf.png" },
      { src: "/images/apps/werkflow/5-auftrag.png" },
      { src: "/images/apps/werkflow/6-unterschrift.png" },
      { src: "/images/apps/werkflow/7-archiv.png" },
      { src: "/images/apps/werkflow/8-abschlag-a.png" },
      { src: "/images/apps/werkflow/9-steuerberater.png" },
    ],
    // Startbild je Sprache (Bühne, Startseite, Kopf der App-Seite).
    coverShots: {
      de: "/images/apps/werkflow/home-de.png",
      en: "/images/apps/werkflow/plus-menue-en.png",
    },
    links: [{ type: "playstore", url: "#" }],
    since: "2026",
  },
  {
    slug: "shrinkit",
    name: "ShrinkIt",
    os: ["Android"],
    iosSoon: true,
    status: "live",
    accent: "#5FB0B7",
    accentLight: "#2C6B70",
    hero: "/images/apps/shrinkit/hero.png",
    heroFit: "contain",
    shots: [
      { src: "/images/apps/shrinkit/shrinkit_1.png" },
      { src: "/images/apps/shrinkit/shrinkit_2.png" },
      { src: "/images/apps/shrinkit/shrinkit_3.png" },
      { src: "/images/apps/shrinkit/shrinkit_4.png" },
      { src: "/images/apps/shrinkit/shrinkit_5.png" },
      { src: "/images/apps/shrinkit/shrinkit_6.png" },
      { src: "/images/apps/shrinkit/shrinkit_7.png" },
    ],
    links: [{ type: "playstore", url: "#" }],
    since: "2026",
  },
  {
    slug: "fabula",
    name: "Fabula",
    os: ["Android"],
    iosSoon: true,
    status: "live",
    accent: "#EAA216",
    accentLight: "#7A5A0C",
    hero: "/images/apps/fabula/hero.png",
    heroFit: "contain",
    shots: [
      { src: "/images/apps/fabula/fabula_1.png" },
      { src: "/images/apps/fabula/fabula_2.png" },
      { src: "/images/apps/fabula/fabula_3.png" },
      { src: "/images/apps/fabula/fabula_4.png" },
      { src: "/images/apps/fabula/fabula_5.png" },
      { src: "/images/apps/fabula/fabula_6.png" },
      { src: "/images/apps/fabula/fabula_7.png" },
      { src: "/images/apps/fabula/fabula_8.png" },
      { src: "/images/apps/fabula/fabula_9.png" },
    ],
    links: [{ type: "playstore", url: "#" }],
    since: "2026",
  },
  {
    slug: "furly",
    name: "Furly",
    os: ["Android"],
    iosSoon: true,
    status: "coming-soon",
    accent: "#E3B23C",
    accentLight: "#7A5A12",
    hero: "/images/apps/furly/hero.png",
    heroFit: "contain",
    shots: [
      { src: "/images/apps/furly/furly_1.png" },
      { src: "/images/apps/furly/furly_2.png" },
      { src: "/images/apps/furly/furly_3.png" },
      { src: "/images/apps/furly/furly_4.png" },
      { src: "/images/apps/furly/furly_5.png" },
      { src: "/images/apps/furly/furly_6.png" },
      { src: "/images/apps/furly/furly_7.png" },
      { src: "/images/apps/furly/furly_8.png" },
      { src: "/images/apps/furly/furly_9.png" },
      { src: "/images/apps/furly/furly_10.png" },
      { src: "/images/apps/furly/furly_11.png" },
      { src: "/images/apps/furly/furly_12.png" },
    ],
    links: [{ type: "playstore", url: "#" }],
    since: "2026",
  },
];

/** Startbild einer App in der jeweiligen Sprache (siehe `coverShots`). */
export function coverShot(app: AppData, locale: string): string {
  return app.coverShots?.[locale as "de" | "en"] ?? app.shots[0].src;
}

export function getApp(slug: string) {
  return apps.find((a) => a.slug === slug);
}

/** Je App der mit AppControl abgeglichene Status, siehe lib/app-status.ts. */
export type StatusMap = Record<string, { status: AppStatus; playUrl?: string }>;

/**
 * Legt die abgeglichenen Status über die Werte oben. Bei Live-Apps ersetzt der
 * echte Store-Link den Platzhalter „#“.
 */
export function withStatuses(map: StatusMap): AppData[] {
  return apps.map((app) => {
    const live = map[app.slug];
    if (!live) return app;
    return {
      ...app,
      status: live.status,
      links: app.links.map((l) =>
        l.type === "playstore" && live.playUrl ? { ...l, url: live.playUrl } : l
      ),
    };
  });
}
