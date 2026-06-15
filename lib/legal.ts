/**
 * Vorlagen für die Rechtstexte – KEINE Rechtsberatung.
 * Vor Livegang: Platzhalter in site.ts und hier ausfüllen, genutzte Dienste
 * ergänzen und fachkundig prüfen lassen.
 */
import { site } from "./site";
import type { AppData } from "./apps";

export type LegalSection = { heading: string; paragraphs?: string[]; list?: string[] };

const address = [
  site.legal.companyName,
  site.legal.responsible,
  site.legal.street,
  `${site.legal.zip} ${site.legal.city}`,
  site.legal.country,
];

export function impressumSections(appName?: string): LegalSection[] {
  return [
    { heading: "Angaben gemäß § 5 DDG", list: address },
    { heading: "Kontakt", list: [`Telefon: ${site.legal.phone}`, `E-Mail: ${site.legal.email}`] },
    {
      heading: "Umsatzsteuer-ID",
      paragraphs: [`Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: ${site.legal.vatId}`],
    },
    { heading: "Handelsregister", paragraphs: [site.legal.register] },
    {
      heading: "Verantwortlich nach § 18 Abs. 2 MStV",
      list: [site.legal.responsible, site.legal.street, `${site.legal.zip} ${site.legal.city}`],
    },
    {
      heading: "Haftung für Inhalte",
      paragraphs: [
        "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.",
        "Bei Bekanntwerden konkreter Rechtsverletzungen entfernen wir entsprechende Inhalte umgehend.",
      ],
    },
    {
      heading: "Urheberrecht",
      paragraphs: [
        `Die durch ${site.legal.companyName} erstellten Inhalte${appName ? ` der App ${appName}` : ""} unterliegen dem deutschen Urheberrecht. Vervielfältigung und Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung.`,
      ],
    },
  ];
}

export function datenschutzSections(app?: AppData): LegalSection[] {
  const subject = app ? `der App „${app.name}“` : "dieser Website";
  return [
    {
      heading: "1. Verantwortlicher",
      paragraphs: [`Verantwortlich für die Datenverarbeitung im Zusammenhang mit ${subject}:`],
      list: [site.legal.companyName, site.legal.responsible, site.legal.street, `${site.legal.zip} ${site.legal.city}`, `E-Mail: ${site.legal.email}`],
    },
    {
      heading: "2. Überblick",
      paragraphs: [
        `Der Schutz deiner Daten ist uns wichtig. Wir verarbeiten Daten ausschließlich nach den gesetzlichen Bestimmungen (DSGVO, BDSG, DDG). Diese Erklärung informiert über Art, Umfang und Zweck im Zusammenhang mit ${subject}.`,
      ],
    },
    app
      ? {
          heading: "3. Verarbeitung in der App",
          paragraphs: [
            "Soweit die App ohne Konto funktioniert, verbleiben deine Inhalte grundsätzlich lokal auf dem Gerät. Eine Übertragung erfolgt nur, soweit für eine Funktion erforderlich.",
            "[PLATZHALTER: konkret beschreiben, welche Daten die App verarbeitet – z. B. Standort, Kamera, Push-Token, anonyme Statistiken.]",
          ],
        }
      : {
          heading: "3. Server-Logs",
          paragraphs: [
            "Beim Aufruf werden durch den Hosting-Provider automatisch Daten in Logfiles gespeichert (z. B. IP-Adresse, Zeitpunkt, abgerufene Seite). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
          ],
        },
    app
      ? {
          heading: "4. Drittanbieter & App-Stores",
          paragraphs: [
            "Der Bezug erfolgt über Apple App Store bzw. Google Play; diese verarbeiten eigenverantwortlich Daten nach ihren Bestimmungen.",
            "[PLATZHALTER: eingesetzte SDKs/Dienste nennen, z. B. Firebase, Sentry, RevenueCat – mit Zweck und Rechtsgrundlage.]",
          ],
        }
      : {
          heading: "4. Hosting & Cookies",
          paragraphs: [
            "Diese Website wird bei Vercel gehostet und bindet keine externen Schriftarten oder Tracker ein. Es werden keine Marketing-Cookies gesetzt.",
          ],
        },
    {
      heading: "5. Deine Rechte",
      paragraphs: [
        "Dir stehen nach DSGVO zu: Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Eine Einwilligung kannst du jederzeit widerrufen.",
      ],
    },
    {
      heading: "6. Beschwerderecht & Kontakt",
      paragraphs: [
        `Du kannst dich bei einer Datenschutz-Aufsichtsbehörde beschweren. Bei Fragen erreichst du uns unter ${site.legal.email}.`,
      ],
    },
  ];
}

export function agbSections(app?: AppData): LegalSection[] {
  const product = app ? `die App „${app.name}“` : "die angebotenen Apps und Leistungen";
  return [
    {
      heading: "§ 1 Geltungsbereich",
      paragraphs: [`Diese AGB gelten für die Nutzung von ${product}, bereitgestellt durch ${site.legal.companyName} („Anbieter“).`],
    },
    {
      heading: "§ 2 Leistungsbeschreibung",
      paragraphs: [
        "Der Anbieter stellt die App in der jeweils aktuellen Version bereit. Funktionsumfang und Verfügbarkeit ergeben sich aus der Produktbeschreibung. Ein Anspruch auf ununterbrochene Verfügbarkeit besteht nicht.",
      ],
    },
    {
      heading: "§ 3 Nutzungsrechte",
      paragraphs: [
        "Der Anbieter räumt ein einfaches, nicht übertragbares Nutzungsrecht ein. Bearbeitung, Dekompilierung oder Weiterverbreitung über den gesetzlich zulässigen Rahmen hinaus sind nicht gestattet.",
      ],
    },
    {
      heading: "§ 4 Pflichten des Nutzers",
      paragraphs: ["Die App darf nicht missbräuchlich oder rechtswidrig verwendet werden; Sicherheitsmechanismen dürfen nicht umgangen werden."],
    },
    {
      heading: "§ 5 Haftung",
      paragraphs: [
        "Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von Leben, Körper oder Gesundheit. Bei einfacher Fahrlässigkeit nur bei Verletzung wesentlicher Vertragspflichten, begrenzt auf den vorhersehbaren, vertragstypischen Schaden.",
      ],
    },
    {
      heading: "§ 6 Preise & Käufe",
      paragraphs: ["[PLATZHALTER: Falls kostenpflichtig oder mit In-App-Käufen/Abos – Preise, Abrechnung über den App-Store, Laufzeiten und Kündigung beschreiben. Sonst entfernen.]"],
    },
    {
      heading: "§ 7 Schlussbestimmungen",
      paragraphs: ["Es gilt deutsches Recht. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen unberührt."],
    },
  ];
}
