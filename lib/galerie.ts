import { apps, getApp, type AppData } from "@/lib/apps";

/**
 * Farbwelt der „Galerie“-Startseite (Prototyp): heller Grund, dunkle Tinte,
 * dazu je App eine Bühnenfarbe. Die Bühnenfarben sind aufgehellte Varianten
 * der App-Akzente, damit dunkler Text darauf überall ≥ 4.5:1 erreicht.
 */
export const galerie = {
  ground: "#F5F6F8",
  card: "#FFFFFF",
  ink: "#14161C",
  inkSoft: "#3A3F4D",
} as const;

const stageColors: Record<string, string> = {
  eatsafety: "#9DBFA4",
  wefixit: "#FCAE27",
  nook: "#9CC4EA",
  "cocos-world": "#A5D38F",
  werkflow: "#A9B8FF",
  shrinkit: "#8FD0D6",
  fabula: "#F2C25A",
  furly: "#E3B23C",
};

export function stageColor(app: AppData) {
  return stageColors[app.slug] ?? app.accent;
}

/**
 * Tausch auf der Bühne: CoCo's World tritt dort nicht auf, an seiner Stelle
 * steht Furly. In der Kachel-Übersicht bleiben alle Apps.
 */
const STAGE_SWAP: Record<string, string> = { "cocos-world": "furly" };

/** Apps auf der Bühne – nur mit echten Screenshots, Reihenfolge wie in lib/apps.ts. */
export const stageApps = apps
  .filter((a) => !Object.values(STAGE_SWAP).includes(a.slug))
  .map((a) => (STAGE_SWAP[a.slug] ? getApp(STAGE_SWAP[a.slug]) ?? a : a))
  .filter((a) => !a.placeholder);
