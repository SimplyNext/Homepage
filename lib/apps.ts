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
  links: { type: "appstore" | "playstore" | "web"; url: string }[];
  since: string;
};

export const apps: AppData[] = [
  {
    slug: "eatsafety",
    name: "EatSafety",
    os: ["Android"],
    iosSoon: true,
    status: "live",
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
    status: "live",
    accent: "#FCAE27",
    accentLight: "#8F4C12",
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
    name: "Werkflow",
    os: ["Android"],
    iosSoon: true,
    status: "coming-soon",
    accent: "#F28C28",
    accentLight: "#8F4C12",
    hero: "/images/apps/werkflow/hero.png",
    heroFit: "contain",
    shots: [
      { src: "/images/apps/werkflow/werkflow_1.png" },
      { src: "/images/apps/werkflow/werkflow_2.png" },
      { src: "/images/apps/werkflow/werkflow_3.png" },
      { src: "/images/apps/werkflow/werkflow_4.png" },
      { src: "/images/apps/werkflow/werkflow_5.png" },
      { src: "/images/apps/werkflow/werkflow_6.png" },
    ],
    links: [{ type: "playstore", url: "#" }],
    since: "2026",
  },
  // --- Platzhalter-Apps -----------------------------------------------------
  // Bilder sind generierte SVG-Platzhalter unter /public/images/apps/<slug>/.
  // Zum Ersetzen: echte PNGs dort ablegen und die Endung hier auf .png ändern.
  // Datenschutz/AGB nutzen weiter die Vorlage aus lib/legal.ts, bis eigene
  // Fassungen in lib/legal-apps/ hinterlegt sind. Das Impressum ist ohnehin
  // für alle Apps identisch (impressumWebsiteSections).
  {
    slug: "shrinkit",
    name: "ShrinkIt",
    os: ["Android"],
    iosSoon: true,
    status: "coming-soon",
    accent: "#5FB0B7",
    accentLight: "#2C6B70",
    hero: "/images/apps/shrinkit/hero.svg",
    heroFit: "contain",
    syntheticChrome: true,
    placeholder: true,
    shots: [
      { src: "/images/apps/shrinkit/shrinkit_1.svg" },
      { src: "/images/apps/shrinkit/shrinkit_2.svg" },
      { src: "/images/apps/shrinkit/shrinkit_3.svg" },
    ],
    links: [{ type: "playstore", url: "#" }],
    since: "2026",
  },
  {
    slug: "fabula",
    name: "Fabula",
    os: ["Android"],
    iosSoon: true,
    status: "coming-soon",
    accent: "#A78BC8",
    accentLight: "#5C4380",
    hero: "/images/apps/fabula/hero.svg",
    heroFit: "contain",
    syntheticChrome: true,
    placeholder: true,
    shots: [
      { src: "/images/apps/fabula/fabula_1.svg" },
      { src: "/images/apps/fabula/fabula_2.svg" },
      { src: "/images/apps/fabula/fabula_3.svg" },
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
    accent: "#E08A7A",
    accentLight: "#8A4436",
    hero: "/images/apps/furly/hero.svg",
    heroFit: "contain",
    syntheticChrome: true,
    placeholder: true,
    shots: [
      { src: "/images/apps/furly/furly_1.svg" },
      { src: "/images/apps/furly/furly_2.svg" },
      { src: "/images/apps/furly/furly_3.svg" },
    ],
    links: [{ type: "playstore", url: "#" }],
    since: "2026",
  },
];

export function getApp(slug: string) {
  return apps.find((a) => a.slug === slug);
}
