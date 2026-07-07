// Erzeugt lokale SVG-Platzhalterbilder (Gradient in Akzentfarbe) für die
// App-Showcases und den Hero-Hintergrund. Keine externen Abhängigkeiten,
// kein Netzwerk – Ersatz für die nicht mehr kostenlos nutzbare
// pollinations.ai-API.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

function svg(width, height, accent) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#0B0B0C" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="#0B0B0C"/>
  <rect width="${width}" height="${height}" fill="url(#g)"/>
</svg>`;
}

function write(out, width, height, accent) {
  const dest = join(OUT_ROOT, out);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, svg(width, height, accent));
  console.log("ok:", out);
}

const NEUTRAL = "#EDEAE3";

write("hero.svg", 1600, 1200, NEUTRAL);

const apps = [
  { slug: "eatsafely", accent: "#759578" },
  { slug: "wefixit", accent: "#E8923C" },
];

for (const { slug, accent } of apps) {
  write(`apps/${slug}/hero.svg`, 1200, 1500, accent);
  write(`apps/${slug}/shot-1.svg`, 600, 1300, accent);
  write(`apps/${slug}/shot-2.svg`, 600, 1300, accent);
  write(`apps/${slug}/shot-3.svg`, 600, 1300, accent);
}

console.log("done");
