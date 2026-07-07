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
    companyName: "SimplyNext", // [PLATZHALTER] z.B. "SimplyNext GmbH"
    responsible: "[PLATZHALTER: Vor- und Nachname]",
    street: "[PLATZHALTER: Straße und Hausnummer]",
    zip: "[PLATZHALTER: PLZ]",
    city: "[PLATZHALTER: Ort]",
    country: "Deutschland",
    phone: "[PLATZHALTER: Telefon]",
    email: "[PLATZHALTER: kontakt@deine-domain.de]",
    vatId: "[PLATZHALTER: USt-IdNr. – falls vorhanden]",
    register: "[PLATZHALTER: Handelsregister & Nr. – falls vorhanden]",
  },
} as const;

export type Site = typeof site;
