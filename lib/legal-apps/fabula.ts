import type { LegalSection } from "../legal";

/**
 * App-spezifische Rechtstexte für Fabula – übernommen aus
 * fabula-{datenschutz,agb}.md (Stand: Juli 2026).
 *
 * Die Vorlage enthielt Platzhalter ([VORNAME NACHNAME], [STRASSE], [PLZ ORT]);
 * sie sind hier mit den Firmendaten aus lib/site.ts gefüllt. Zusätzlich sind
 * Telefon und USt-IdNr. ergänzt, damit der Verantwortlichen-Block identisch zu
 * den übrigen Apps ist.
 */

export const fabulaDatenschutz: LegalSection[] = [
  {
    heading: "1. Verantwortlicher",
    list: [
      "SimplyNext",
      "Inhaber: Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Deutschland",
      "E-Mail: info@simplynext.de",
      "Telefon: 01743389049",
      "USt-IdNr.: DE463824630",
    ],
  },
  {
    heading: "2. Welche Daten wir erheben",
    paragraphs: ["Fabula erhebt nur die Daten, die für den Betrieb der App notwendig sind:"],
    table: {
      head: ["Datenkategorie", "Beispiele", "Zweck"],
      rows: [
        ["Konto-Daten", "E-Mail-Adresse, Nutzer-ID", "Registrierung & Login"],
        ["App-Aktivität", "erstellte Geschichten, Charaktere, Spracheinstellung", "Funktionsbetrieb"],
        ["Kaufhistorie", "gekaufte Story-Credits, Transaktions-ID", "Rechnungslegung & Betrugsschutz"],
        ["Audio-Dateien", "KI-generierte Audiodateien", "Wiedergabe & Offline-Cache"],
        ["Absturzprotokolle", "Fehlermeldungen, App-Version", "Fehlerbehebung (nur wenn Sentry aktiv)"],
      ],
    },
    afterList: ["Wir erheben keine Standortdaten, Fotos oder biometrischen Daten."],
  },
  {
    heading: "3. Zweck der Verarbeitung",
    list: [
      "Bereitstellung und Verbesserung des App-Dienstleistungsangebots",
      "Authentifizierung und Kontoverwaltung",
      "Verarbeitung von In-App-Käufen und Credit-Verwaltung",
      "KI-gestützte Generierung personalisierter Audio-Geschichten",
      "Fehleranalyse und Stabilitätsverbesserung",
    ],
  },
  {
    heading: "4. Rechtsgrundlage (DSGVO)",
    list: [
      "Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung (Login, Story-Generierung, Käufe)",
      "Art. 6 Abs. 1 lit. f DSGVO – Berechtigte Interessen (Absturz-Logging, Sicherheit)",
      "Art. 6 Abs. 1 lit. a DSGVO – Einwilligung (optionale Dienste, Consent-Gate in der App)",
    ],
  },
  {
    heading: "5. Drittanbieter & Datenübermittlung",
  },
  {
    heading: "Supabase (Backend & Datenbank)",
    level: 3,
    paragraphs: [
      "Speicherung von Nutzerdaten, Geschichten und Audio-Dateien. Alle Daten werden verschlüsselt übertragen (TLS/HTTPS).",
    ],
    table: {
      head: ["Angabe", "Wert"],
      rows: [
        ["Anbieter", "Supabase Inc."],
        ["Serverstandort", "EU (Frankfurt)"],
        ["Datenschutz", "supabase.com/privacy"],
      ],
    },
  },
  {
    heading: "Google (Gemini KI / Play Store)",
    level: 3,
    paragraphs: [
      "KI-gestützte Text- und Audio-Generierung über die Gemini API; In-App-Kauf-Validierung über Google Play.",
    ],
    table: {
      head: ["Angabe", "Wert"],
      rows: [
        ["Anbieter", "Google LLC"],
        ["Datenschutz", "policies.google.com/privacy"],
      ],
    },
  },
  {
    heading: "Sentry (Absturz-Reporting, optional)",
    level: 3,
    paragraphs: [
      "Anonymisierte Absturzprotokolle zur Fehlerbehebung. Wird nur aktiviert, wenn in den App-Einstellungen zugestimmt.",
    ],
    table: {
      head: ["Angabe", "Wert"],
      rows: [
        ["Anbieter", "Functional Software Inc. (Sentry)"],
        ["Datenschutz", "sentry.io/privacy"],
      ],
    },
    afterList: ["Eine Weitergabe an andere Dritte oder ein Verkauf von Daten findet nicht statt."],
  },
  {
    heading: "6. Kinder (unter 16 Jahren)",
    paragraphs: [
      "Fabula richtet sich unter anderem an Kinder ab 6 Jahren. Wir verarbeiten dabei nur die minimal notwendigen Daten (E-Mail-Adresse des Erziehungsberechtigten und Konto-ID). Es werden keine Kinderfotos gespeichert; Charaktere werden ausschließlich über vorgefertigte Avatare dargestellt.",
      "Erziehungsberechtigte können jederzeit die Löschung aller Daten ihres Kindes beantragen (siehe Abschnitt 8).",
    ],
  },
  {
    heading: "7. Speicherdauer",
    paragraphs: [
      "Daten werden gespeichert, solange das Konto aktiv ist. Nach Kontolöschung werden alle personenbezogenen Daten innerhalb von 30 Tagen unwiderruflich gelöscht, sofern keine gesetzliche Aufbewahrungspflicht besteht (z. B. Rechnungsdaten: 10 Jahre gemäß § 147 AO).",
    ],
  },
  {
    heading: "8. Deine Rechte",
    paragraphs: ["Als betroffene Person hast du folgende Rechte gegenüber uns:"],
    list: [
      "Auskunft (Art. 15 DSGVO): Welche Daten wir über dich gespeichert haben",
      "Berichtigung (Art. 16 DSGVO): Korrektur unrichtiger Daten",
      "Löschung (Art. 17 DSGVO): Löschung deines Kontos und aller Daten – direkt in der App unter Einstellungen → Konto löschen oder per E-Mail",
      "Einschränkung (Art. 18 DSGVO): Einschränkung der Verarbeitung",
      "Datenportabilität (Art. 20 DSGVO): Export deiner Daten in maschinenlesbarem Format",
      "Widerspruch (Art. 21 DSGVO): Widerspruch gegen Verarbeitung auf Basis berechtigter Interessen",
      "Beschwerde: Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren",
    ],
    afterList: ["Anfragen bitte per E-Mail an: info@simplynext.de"],
  },
  {
    heading: "9. Datensicherheit",
    paragraphs: [
      "Alle Datenübertragungen erfolgen verschlüsselt via HTTPS/TLS. Zugriff auf Audio-Dateien erfolgt ausschließlich über zeitlich begrenzte, signierte URLs. Passwörter werden nicht im Klartext gespeichert.",
    ],
  },
  {
    heading: "10. Änderungen dieser Datenschutzerklärung",
    paragraphs: [
      "Wir behalten uns vor, diese Datenschutzerklärung bei wesentlichen Änderungen zu aktualisieren. Nutzer werden über die App oder per E-Mail informiert. Das Datum der letzten Änderung ist oben angegeben.",
    ],
  },
];

export const fabulaAgb: LegalSection[] = [
  {
    heading: "1. Geltungsbereich",
    paragraphs: [
      "Diese Nutzungsbedingungen gelten für die Nutzung der mobilen App Fabula (Android/iOS), angeboten von:",
    ],
    list: [
      "SimplyNext",
      "Inhaber: Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Deutschland",
      "E-Mail: info@simplynext.de",
    ],
    afterList: ["Mit der Nutzung der App erklärst du dich mit diesen Bedingungen einverstanden."],
  },
  {
    heading: "2. Leistungsangebot",
    paragraphs: [
      "Fabula ist eine App zur KI-gestützten Generierung personalisierter Audio-Geschichten für Kinder und Erwachsene. Die Inhalte werden auf Basis der Nutzereingaben (Charaktere, Genre, Sprache) durch KI-Dienste von Google (Gemini) automatisch erstellt.",
      "Die App ermöglicht:",
    ],
    list: [
      "Erstellung individueller Audio-Geschichten per KI",
      "Verwaltung von Story-Charakteren",
      "Wiedergabe und Offline-Speicherung von Geschichten",
      "Kauf von Story-Credits als In-App-Käufe",
    ],
  },
  {
    heading: "3. Nutzungsvoraussetzungen",
    list: [
      "Zur Nutzung ist ein Konto mit gültiger E-Mail-Adresse erforderlich.",
      "Die Nutzung durch Kinder unter 16 Jahren setzt die Zustimmung eines Erziehungsberechtigten voraus.",
      "Der Nutzer ist verpflichtet, wahrheitsgemäße Angaben zu machen und sein Konto vor unbefugtem Zugriff zu schützen.",
    ],
  },
  {
    heading: "4. KI-generierte Inhalte",
    paragraphs: [
      "Fabula verwendet KI-Dienste von Google (Gemini) zur Generierung von Text und Audio. Dabei gilt:",
    ],
    list: [
      "Die generierten Geschichten und Audiodateien werden dem Nutzer zur persönlichen, nicht-kommerziellen Nutzung überlassen.",
      "Die erzeugten Inhalte sind automatisch erstellt – wir übernehmen keine Gewähr für inhaltliche Richtigkeit, sprachliche Qualität oder Vollständigkeit.",
      "Eine Weiterverbreitung, Veröffentlichung oder kommerzielle Nutzung der generierten Inhalte ist ohne ausdrückliche Genehmigung nicht gestattet.",
      "Der Nutzer ist verantwortlich für die Eingaben, die er zur Generierung verwendet. Eingaben, die gegen geltendes Recht oder die Rechte Dritter verstoßen, sind untersagt.",
    ],
  },
  {
    heading: "5. In-App-Käufe & Credits",
    list: [
      "Story-Credits sind Verbrauchsgüter (Consumables) und können nicht zurückerstattet werden, sobald eine Geschichte erfolgreich generiert wurde.",
      "Credits verfallen nicht und sind an das Nutzerkonto gebunden.",
      "Bei technischen Fehlern während der Generierung (keine Geschichte erzeugt) werden Credits nicht abgezogen oder auf Antrag erstattet (E-Mail an info@simplynext.de).",
      "Käufe werden über Google Play bzw. den Apple App Store abgewickelt. Es gelten zusätzlich die Nutzungsbedingungen des jeweiligen Store-Betreibers.",
      "Minderjährige dürfen keine In-App-Käufe ohne Zustimmung eines Erziehungsberechtigten tätigen.",
    ],
  },
  {
    heading: "6. Verbotene Nutzung",
    paragraphs: ["Folgendes ist ausdrücklich untersagt:"],
    list: [
      "Verwendung der App für rechtswidrige Zwecke",
      "Generierung von Inhalten, die Gewalt verherrlichen, diskriminierend sind oder Dritte verleumden",
      "Automatisierter Zugriff auf die App oder deren Backend (Scraping, Bots)",
      "Umgehung von Sicherheitsmechanismen oder Zugangsbeschränkungen",
      "Weitergabe von Zugangsdaten an Dritte",
    ],
  },
  {
    heading: "7. Verfügbarkeit & Haftung",
    list: [
      "Wir bemühen uns um eine hohe Verfügbarkeit der App, übernehmen jedoch keine Garantie für ununterbrochenen Betrieb.",
      "Wir haften nicht für Schäden, die durch KI-generierte Inhalte entstehen.",
      "Die Haftung für Datenverlust ist auf den Ersatz des typischen Wiederherstellungsaufwands beschränkt.",
      "Die gesetzliche Haftung für Vorsatz und grobe Fahrlässigkeit bleibt unberührt.",
    ],
  },
  {
    heading: "8. Laufzeit & Kündigung",
    list: [
      "Die Nutzungsvereinbarung gilt auf unbestimmte Zeit und kann jederzeit durch Löschung des Kontos beendet werden.",
      "Die Kontolöschung ist direkt in der App unter Einstellungen → Konto löschen möglich.",
      "Wir behalten uns das Recht vor, Konten bei schwerwiegenden Verstößen gegen diese Nutzungsbedingungen ohne Vorankündigung zu sperren oder zu löschen.",
    ],
  },
  {
    heading: "9. Änderungen der Nutzungsbedingungen",
    paragraphs: [
      "Wir können diese Nutzungsbedingungen bei wesentlichen Änderungen des Angebots anpassen. Nutzer werden mindestens 14 Tage vor Inkrafttreten informiert. Widerspruchsrecht: Wird den geänderten Bedingungen nicht innerhalb dieser Frist widersprochen, gelten sie als akzeptiert.",
    ],
  },
  {
    heading: "10. Anwendbares Recht & Gerichtsstand",
    paragraphs: [
      "Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand für Streitigkeiten mit Gewerbetreibenden ist Isny im Allgäu.",
    ],
  },
  {
    heading: "11. Kontakt",
    paragraphs: ["Bei Fragen zu diesen Nutzungsbedingungen: info@simplynext.de"],
  },
];
