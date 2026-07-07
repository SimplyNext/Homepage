/**
 * Zentrale Firmen- und Rechtsdaten.
 * Alle [PLATZHALTER ...] vor dem Livegang durch echte Angaben ersetzen.
 * Impressum (§5 DDG) und Datenschutz (DSGVO) sind in DE Pflicht – im Zweifel
 * anwaltlich prüfen lassen.
 */
export const site = {
  name: "SimplyNext",
  tagline: "Premium-Apps. Plattformübergreifend gebaut.",
  description:
    "SimplyNext ist ein App-Studio für premium plattformübergreifende Anwendungen mit Flutter und Expo.",
  url: "https://simplynext.de", // [PLATZHALTER]
  email: "info@simplynext.de", // [PLATZHALTER]
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
