/**
 * Zentrale Firmen- und Rechtsdaten.
 * Impressum (§5 DDG) und Datenschutz (DSGVO) sind in DE Pflicht – im Zweifel
 * anwaltlich prüfen lassen.
 */
export const site = {
  name: "SimplyNext",
  tagline: "Premium-Apps. Plattformübergreifend gebaut.",
  description:
    "SimplyNext ist ein App-Studio für premium plattformübergreifende Anwendungen mit Flutter und Expo.",
  // Kanonische Domain = www (die apex-Domain simplynext.de leitet per 308 auf
  // www um). Wird für metadataBase, Sitemap und robots.txt genutzt → alle
  // ausgegebenen URLs sind direkt die endgültigen www-URLs (keine Redirect-Kette).
  url: "https://www.simplynext.de",
  email: "info@simplynext.de",
  legal: {
    companyName: "SimplyNext",
    responsible: "Nuri Toker",
    street: "Mechenseerstr. 12",
    zip: "88316",
    city: "Isny im Allgäu",
    country: "Deutschland",
    phone: "01743389049",
    email: "info@simplynext.de",
    vatId: "",
    register: "",
    profession: "App Entwickler",
    professionCountry: "Deutschland",
  },
} as const;

export type Site = typeof site;
