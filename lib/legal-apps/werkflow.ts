import type { LegalSection } from "../legal";

/**
 * App-spezifische Rechtstexte für Werkflow – übernommen aus
 * werkflow-{datenschutz,agb}.md (Stand: 28.07.2026).
 *
 * Quelle bleibt das Markdown-Dokument im Repository-Root: Änderungen dort
 * müssen hier nachgezogen werden.
 */

export const werkflowDatenschutz: LegalSection[] = [
  {
    heading: "1. Verantwortlicher",
    paragraphs: [
      "Verantwortlich für die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:",
    ],
    list: [
      "SimplyNext",
      "Inhaber: Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Deutschland",
      "E-Mail: info@simplynext.de",
      "Telefon: 01743389049",
    ],
    afterList: [
      "(Angaben identisch mit Impressum)",
      "Ein betrieblicher Datenschutzbeauftragter ist nicht bestellt, da die gesetzlichen Voraussetzungen nach Art. 37 DSGVO / § 38 BDSG nicht vorliegen (Einzelunternehmen ohne die Anzahl von mindestens 20 ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigten Personen).",
    ],
  },
  {
    heading: "2. Allgemeines zur Datenverarbeitung",
    paragraphs: [
      "WerkFlow ist eine App für Handwerksbetriebe zur Erstellung von Angeboten, Kundenverwaltung und Materiallisten. Bei der Nutzung der App werden personenbezogene Daten verarbeitet. Personenbezogene Daten sind alle Daten, die auf Sie persönlich beziehbar sind, z. B. Name, Adresse, E-Mail-Adresse oder Nutzerverhalten.",
      "Wir verarbeiten Ihre Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen App sowie unserer Inhalte und Leistungen erforderlich ist, oder soweit Sie eingewilligt haben.",
    ],
  },
  { heading: "3. Welche Daten wir verarbeiten" },
  {
    heading: "3.1 Konto- und Authentifizierungsdaten",
    level: 3,
    paragraphs: ["Bei der Registrierung erheben wir:"],
    list: [
      "E-Mail-Adresse",
      "Passwort (verschlüsselt gespeichert, für uns nicht einsehbar)",
      "Zeitpunkt der Registrierung, Login-Historie, Session-Token",
    ],
    afterList: ["Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung – Bereitstellung des Nutzerkontos)"],
  },
  {
    heading: "3.2 Firmenprofildaten",
    level: 3,
    paragraphs: [
      "Zur Erstellung rechtssicherer Angebote und PDFs erheben und speichern wir die von Ihnen eingegebenen Angaben zu Ihrem Betrieb:",
    ],
    list: [
      "Firmenname, Rechtsform",
      "Anschrift (Straße, PLZ, Ort)",
      "Steuernummer / Umsatzsteuer-ID",
      "Telefonnummer, Firmen-E-Mail, Website",
      "Ansprechpartner, Geschäftsführer",
      "Sitz der Gesellschaft, Registergericht, Handelsregisternummer",
      "Firmenlogo (Bilddatei)",
      "Name und Position der unterschriftsberechtigten Person",
      "Digitale Unterschrift (als Bilddatei)",
    ],
    afterList: [
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung, soweit Pflichtangaben für Rechnungen/Angebote nach § 14 UStG erforderlich sind)",
    ],
  },
  {
    heading: "3.3 Bankverbindung (besonders sensible Finanzdaten)",
    level: 3,
    paragraphs: [
      "Zur Angabe auf erstellten Angeboten/PDF-Dokumenten können Sie folgende Daten hinterlegen:",
    ],
    list: ["Bankname", "IBAN", "BIC"],
    afterList: [
      "Diese Daten werden ausschließlich zum Zweck der Anzeige auf Ihren eigenen Angebotsdokumenten gespeichert und nicht zur Zahlungsabwicklung innerhalb der App genutzt.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)",
    ],
  },
  {
    heading: "3.4 Kundendaten",
    level: 3,
    paragraphs: [
      "Wenn Sie Kunden in der App anlegen, verarbeiten wir die von Ihnen eingegebenen Daten Ihrer Endkunden:",
    ],
    list: [
      "Vor- und Nachname, ggf. Firma",
      "Anschrift (Straße, Hausnummer, PLZ, Ort)",
      "Telefonnummer (optional)",
      "E-Mail-Adresse (optional)",
      "Kundennummer",
    ],
    afterList: [
      "Hinweis: Sie als Nutzer sind hinsichtlich der Daten Ihrer Kunden datenschutzrechtlich selbst Verantwortlicher (Art. 4 Nr. 7 DSGVO). Wir verarbeiten diese Daten in Ihrem Auftrag als Auftragsverarbeiter im Sinne von Art. 28 DSGVO. Ein entsprechender Auftragsverarbeitungsvertrag (AVV) kann auf Anfrage bereitgestellt werden.",
      "Rechtsgrundlage (aus Ihrer Sicht als Nutzer): Art. 6 Abs. 1 lit. b oder f DSGVO, je nach Kundenbeziehung",
    ],
  },
  {
    heading: "3.5 Angebots- und Materialdaten",
    level: 3,
    list: [
      "Angebotsnummer, Datum, Betreff, Gültigkeitsdauer",
      "Positionen, Mengen, Einzelpreise, Gesamtsummen, MwSt.",
      "Zahlungsbedingungen, Liefer-/Leistungszeit",
      "Status (Entwurf, versendet, angenommen, abgelehnt)",
      "Materialliste mit Bezeichnungen, Preisen, Einheiten",
    ],
    afterList: [
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO",
      "Aufbewahrungsfrist: Angebots- und Rechnungsdaten werden aus steuerrechtlichen Gründen 10 Jahre aufbewahrt (§ 147 Abgabenordnung, § 257 HGB).",
    ],
  },
  {
    heading: "3.6 Fotos und Sprachaufnahmen (KI-Analyse)",
    level: 3,
    paragraphs: [
      "Um Ihnen die automatische Angebotserstellung per KI zu ermöglichen, können Sie:",
    ],
    list: [
      "Fotos von Baustellen/Schäden über die Gerätekamera aufnehmen",
      "Sprachnotizen über das Mikrofon aufzeichnen",
      "Fotos von handschriftlichen oder gedruckten Materiallisten hochladen",
    ],
    afterList: [
      "Diese Inhalte werden nur nach Ihrer ausdrücklichen Einwilligung (Zustimmungsdialog in der App) über eine gesicherte Verbindung an unsere Server (Supabase, siehe Ziff. 4.1) übermittelt und von dort zur automatisierten Analyse an einen KI-Dienst weitergeleitet.",
      "Primärer KI-Dienst: Google Gemini (kostenpflichtiger Tarif mit aktivierter Abrechnung) verarbeitet standardmäßig Fotos, Sprachaufnahmen und Textbeschreibungen für die Angebotserstellung sowie Fotos von Materiallisten.",
      "Fallback-Dienst: Ist Google Gemini vorübergehend nicht erreichbar (z. B. bei einer technischen Störung), wird die Anfrage automatisch an OpenAI (GPT-4o, ggf. inkl. Whisper-Transkription bei Sprachaufnahmen) weitergeleitet, damit Ihre Anfrage dennoch bearbeitet werden kann. Der Fallback kommt nur im Ausnahmefall zum Einsatz.",
      "Die Rohdaten (Fotos, Audiodateien) werden nach Abschluss der KI-Analyse nicht dauerhaft auf unseren Servern gespeichert, sondern nur für die Dauer der Verarbeitung übermittelt.",
      "Da wir bei Google Gemini einen kostenpflichtigen Tarif mit aktivierter Abrechnung nutzen, gilt gemäß den Nutzungsbedingungen der Gemini-API ausdrücklich, dass Google Ihre Eingaben (Prompts, Bilder, Audiodateien) und die generierten Antworten nicht zur Verbesserung von Google-Produkten verwendet. Eingaben werden dort ausschließlich zeitlich begrenzt zur Missbrauchserkennung und aus Sicherheitsgründen protokolliert (Quelle: Gemini API – Nutzungsbedingungen für kostenpflichtige Dienste).",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Einwilligung kann jederzeit mit Wirkung für die Zukunft in den App-Einstellungen widerrufen werden (Toggle „KI-Analyse verwenden“).",
      "Wichtiger Hinweis: Achten Sie beim Fotografieren von Baustellen/Kundenwohnungen darauf, dass keine Personen oder sensible private Unterlagen im Bild erkennbar sind, da Sie hierfür als Nutzer selbst verantwortlich sind.",
    ],
  },
  {
    heading: "3.7 Abonnement- und Zahlungsdaten",
    level: 3,
    paragraphs: [
      "Für die Nutzung kostenpflichtiger Funktionen (Abo-Modelle „Solo“, „Kleiner Betrieb“, „Pro“) verarbeiten wir:",
    ],
    list: [
      "Ihre Nutzer-ID (zur Zuordnung des Abos zu Ihrem Konto)",
      "Abo-Status, gebuchter Tarif, Ablaufdatum",
      "Kaufhistorie (verwaltet über RevenueCat, siehe Ziff. 4.3)",
    ],
    afterList: [
      "Die eigentliche Zahlungsabwicklung erfolgt vollständig über Google Play Billing. Kreditkarten- oder sonstige Zahlungsdaten werden von uns zu keinem Zeitpunkt erhoben, gespeichert oder eingesehen.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)",
    ],
  },
  {
    heading: "3.8 Technische Daten / Nutzungsdaten",
    level: 3,
    paragraphs: ["Bei Nutzung der App werden aus technischen Gründen automatisch verarbeitet:"],
    list: [
      "Geräteinformationen (Betriebssystem, App-Version)",
      "Fehlerprotokolle (zur Fehlerbehebung)",
      "Lokale Einstellungen (Theme, Spracheinstellung – nur lokal auf dem Gerät gespeichert)",
    ],
    afterList: [
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Funktionsfähigkeit und Sicherheit der App)",
    ],
  },
  {
    heading: "4. Empfänger der Daten / Auftragsverarbeiter",
    paragraphs: [
      "Wir setzen sorgfältig ausgewählte Dienstleister ein, die Ihre Daten ausschließlich nach unserer Weisung verarbeiten. Mit allen Anbietern bestehen, soweit erforderlich, Verträge zur Auftragsverarbeitung (Art. 28 DSGVO).",
    ],
  },
  {
    heading: "4.1 Supabase (Backend, Datenbank, Authentifizierung, Dateispeicher)",
    level: 3,
    paragraphs: [
      "Supabase Inc., verarbeitet Daten auf Servern innerhalb der EU.",
      "Übermittelte Daten: sämtliche unter Ziff. 3.1–3.7 genannten Daten (Konto-, Profil-, Kunden-, Angebots- und Materialdaten, Firmenlogo, Unterschrift-Bilddatei).",
      "Datenschutzerklärung: supabase.com/privacy",
    ],
  },
  {
    heading: "4.2 KI-Analysedienste (Google Gemini primär, OpenAI GPT-4o als Fallback)",
    level: 3,
    paragraphs: [
      "Zur automatisierten Auswertung von Fotos, Sprachaufnahmen und Textbeschreibungen (siehe Ziff. 3.6) nutzen wir:",
    ],
    list: [
      "Google Gemini (Google Ireland Limited / Google LLC, USA) – primärer und regulär genutzter KI-Dienst, kostenpflichtiger Tarif ohne Trainingsnutzung Ihrer Daten. Datenschutzerklärung: policies.google.com/privacy · Nutzungsbedingungen: ai.google.dev/gemini-api/terms#paid-services",
      "OpenAI GPT-4o (OpenAI, L.L.C., USA) – ausschließlich als technischer Fallback, falls Google Gemini vorübergehend nicht verfügbar ist. Datenschutzerklärung: openai.com/privacy",
    ],
    afterList: [
      "Drittlandtransfer: Da diese Anbieter auch Server in den USA betreiben, kann es zu einer Übermittlung personenbezogener Daten in ein Land außerhalb der EU/des EWR kommen. Wir stellen ein angemessenes Datenschutzniveau durch den Abschluss von EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO) mit den jeweiligen Anbietern sicher.",
      "Die Übermittlung erfolgt ausschließlich nach Ihrer aktiven Einwilligung (Ziff. 3.6) und ist zeitlich auf die Dauer der Analyse begrenzt.",
    ],
  },
  {
    heading: "4.3 RevenueCat (Abonnementverwaltung)",
    level: 3,
    paragraphs: [
      "RevenueCat, Inc., San Francisco, USA",
      "Übermittelte Daten: Nutzer-ID, Kauf- und Abo-Status, geräteseitige Kaufbestätigungen.",
      "Datenschutzerklärung: revenuecat.com/privacy",
      "Drittlandtransfer: USA, abgesichert über EU-Standardvertragsklauseln.",
    ],
  },
  {
    heading: "4.4 Google Play Billing / Google Play Services",
    level: 3,
    paragraphs: [
      "Google Ireland Limited / Google LLC",
      "Die Zahlungsabwicklung für Abonnements erfolgt vollständig über Google Play. Es gilt zusätzlich die Datenschutzerklärung von Google: policies.google.com/privacy",
    ],
  },
  {
    heading: "4.5 Google ARCore (optional, geräteinterne Verarbeitung)",
    level: 3,
    paragraphs: [
      "Für die optionale Aufmaß-Funktion (Kamera-basierte Vermessung von Längen, Flächen, Winkeln) wird die Google-ARCore-Bibliothek genutzt. Die Bildverarbeitung erfolgt vollständig lokal auf Ihrem Gerät; es findet keine Übermittlung von Kamerabildern an Google oder an uns statt.",
    ],
  },
  {
    heading: "5. Berechtigungen der App",
    paragraphs: ["Die App fordert folgende Systemberechtigungen an:"],
    table: {
      head: ["Berechtigung", "Zweck", "Pflicht"],
      rows: [
        ["Kamera", "Aufnahme von Fotos für die KI-gestützte Angebotserstellung; optionale AR-Vermessungsfunktion", "Nur bei aktiver Nutzung der Foto-/AR-Funktion"],
        ["Mikrofon", "Aufnahme von Sprachnotizen zur Angebotserstellung", "Nur bei aktiver Nutzung der Sprachfunktion"],
        ["Internetzugriff", "Kommunikation mit unseren Servern (Supabase, RevenueCat)", "Erforderlich für Grundfunktionen"],
      ],
    },
    afterList: [
      "Die App fordert keinen Zugriff auf Standort, Kontakte, SMS, Anrufliste oder andere Apps an.",
      "Berechtigungen werden zur Laufzeit angefragt und sind in den Android-Systemeinstellungen jederzeit widerrufbar. Ohne Kamera-/Mikrofonzugriff sind die betroffenen Einzelfunktionen (Foto-Analyse, Sprachaufnahme, AR-Aufmaß) nicht nutzbar; die übrige App bleibt voll funktionsfähig.",
    ],
  },
  {
    heading: "6. Speicherdauer",
    table: {
      head: ["Datenkategorie", "Speicherdauer"],
      rows: [
        ["Kontodaten", "Bis zur Löschung des Nutzerkontos"],
        ["Angebots-/Rechnungsdaten", "10 Jahre (steuerrechtliche Aufbewahrungspflicht)"],
        ["Kundendaten", "Bis zur Löschung durch den Nutzer bzw. bis zum Ende der Geschäftsbeziehung"],
        ["Fotos/Sprachaufnahmen zur KI-Analyse", "Nur temporär während der Verarbeitung, keine dauerhafte Speicherung"],
        ["Firmenlogo, Unterschrift", "Bis zur Löschung durch den Nutzer bzw. Account-Löschung"],
        ["Abo-/Kaufdaten", "Gemäß gesetzlichen Aufbewahrungspflichten sowie den Bestimmungen von RevenueCat/Google Play"],
      ],
    },
  },
  {
    heading: "7. Ihre Rechte als betroffene Person",
    paragraphs: ["Sie haben jederzeit das Recht auf:"],
    list: [
      "Auskunft über die von uns verarbeiteten personenbezogenen Daten (Art. 15 DSGVO)",
      "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
      "Löschung Ihrer Daten (Art. 17 DSGVO)",
      "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
      "Datenübertragbarkeit (Art. 20 DSGVO)",
      "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
      "Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)",
      "Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)",
    ],
  },
  {
    heading: "In der App direkt nutzbare Funktionen",
    level: 3,
    list: [
      "Datenexport: Unter Einstellungen → „Meine Daten exportieren“ können Sie alle gespeicherten Daten als JSON-Datei herunterladen.",
      "Account-Löschung: Unter Einstellungen → „Account löschen“ können Sie Ihr Konto und alle zugehörigen Daten unwiderruflich löschen lassen.",
      "Widerruf KI-Einwilligung: Unter Einstellungen können Sie die KI-gestützte Analyse jederzeit deaktivieren.",
    ],
    afterList: ["Für alle weiteren Anfragen wenden Sie sich an: info@simplynext.de"],
  },
  {
    heading: "8. Datensicherheit",
    paragraphs: [
      "Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor Verlust, Missbrauch und unberechtigtem Zugriff zu schützen:",
    ],
    list: [
      "Verschlüsselte Übertragung sämtlicher Daten via TLS/HTTPS",
      "Zugriffskontrolle auf Datenbankebene (Row Level Security) – jeder Nutzer kann ausschließlich auf seine eigenen Daten zugreifen",
      "Sichere, PKCE-basierte Authentifizierung mit automatischem Token-Ablauf und -Erneuerung",
      "API-Schlüssel Dritter (z. B. RevenueCat) werden nicht im App-Code hinterlegt, sondern serverseitig gesichert bereitgestellt",
      "Passwörter werden ausschließlich verschlüsselt (gehasht) gespeichert",
    ],
  },
  {
    heading: "9. Keine automatisierte Entscheidungsfindung",
    paragraphs: [
      "Es findet keine automatisierte Entscheidungsfindung im Sinne des Art. 22 DSGVO statt, die rechtliche Wirkung gegenüber Ihnen entfaltet. Die KI-gestützte Erkennung von Materialien und Arbeitszeiten dient lediglich als Vorschlag; Sie prüfen und bestätigen alle KI-generierten Angaben vor der Übernahme in ein Angebot selbst (siehe Bestätigungspflicht in der App: „Ich habe die KI-generierten Daten geprüft und bestätige deren Richtigkeit“).",
    ],
  },
  {
    heading: "10. Änderungen dieser Datenschutzerklärung",
    paragraphs: [
      "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen der App bzw. der Datenverarbeitung anzupassen. Für Ihren erneuten Besuch bzw. bei der nächsten Nutzung der App gilt dann die neue Datenschutzerklärung. Bei wesentlichen Änderungen werden wir Sie in der App gesondert informieren.",
    ],
  },
  {
    heading: "11. Kontakt",
    paragraphs: ["Bei Fragen zum Datenschutz wenden Sie sich bitte an:"],
    list: [
      "SimplyNext",
      "Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "E-Mail: info@simplynext.de",
      "Telefon: 01743389049",
    ],
  },
];

export const werkflowAgb: LegalSection[] = [
  {
    heading: "§ 1 Geltungsbereich, Anbieter",
    paragraphs: [
      "(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) gelten für die Nutzung der mobilen Anwendung „WerkFlow“ (nachfolgend „App“) sowie der damit verbundenen Dienste, die von",
    ],
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
    afterList: [
      "(nachfolgend „Anbieter“) betrieben werden.",
      "(2) Die App richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB, insbesondere Handwerksbetriebe und Selbstständige, die die App zur Erstellung von Angeboten, zur Kundenverwaltung und zur Verwaltung von Materiallisten im Rahmen ihrer gewerblichen oder selbstständigen beruflichen Tätigkeit nutzen (B2B). Eine Nutzung durch Verbraucher im Sinne des § 13 BGB ist nicht vorgesehen.",
      "(3) Abweichenden, entgegenstehenden oder ergänzenden Allgemeinen Geschäftsbedingungen des Nutzers wird widersprochen; sie werden nicht Vertragsbestandteil, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.",
    ],
  },
  {
    heading: "§ 2 Vertragsgegenstand und Leistungsbeschreibung",
    paragraphs: [
      "(1) Der Anbieter stellt dem Nutzer die App über den Google Play Store zur Verfügung. Die App bietet insbesondere folgende Funktionen:",
    ],
    list: [
      "Erstellung, Verwaltung und Export (PDF) von Angeboten",
      "Verwaltung von Kundendaten",
      "Verwaltung einer Material-Preisliste",
      "KI-gestützte Analyse von Fotos, Sprachaufnahmen und Textbeschreibungen zur automatisierten Erstellung von Angebotsvorschlägen",
      "Optionale, kamerabasierte Vermessungsfunktion (AR-Aufmaß) mittels Google ARCore",
      "Digitale Unterschriftenerfassung",
    ],
    afterList: [
      "(2) Die App wird in einer kostenlosen Testversion (3 kostenlose Angebote, keine Kreditkartenangabe erforderlich) sowie in kostenpflichtigen Abonnement-Tarifen („Solo“, „Kleiner Betrieb“, „Pro“) angeboten. Der jeweilige Funktionsumfang der Tarife ergibt sich aus der Darstellung in der App zum Zeitpunkt des Vertragsschlusses.",
      "(3) Die von der App KI-gestützt erstellten Vorschläge (Materialerkennung, Arbeitszeitschätzung) sind unverbindliche Vorschläge. Der Nutzer ist verpflichtet, alle automatisiert generierten Angaben vor deren Verwendung in einem Angebot auf Richtigkeit und Vollständigkeit zu prüfen. Der Anbieter übernimmt keine Gewähr für die Richtigkeit KI-generierter Inhalte.",
      "(4) Der Anbieter ist berechtigt, den Funktionsumfang der App im Rahmen der technischen Weiterentwicklung anzupassen, zu erweitern oder einzuschränken, sofern dies dem Nutzer zumutbar ist und der vertraglich vereinbarte Kernumfang der jeweils gebuchten Leistung erhalten bleibt.",
    ],
  },
  {
    heading: "§ 3 Vertragsschluss, Registrierung",
    paragraphs: [
      "(1) Zur Nutzung der App ist eine Registrierung mit gültiger E-Mail-Adresse und selbst gewähltem Passwort erforderlich.",
      "(2) Mit Abschluss der Registrierung kommt zwischen dem Nutzer und dem Anbieter ein Nutzungsvertrag über die kostenlose Testversion zustande.",
      "(3) Der Abschluss eines kostenpflichtigen Abonnements erfolgt durch Auswahl eines Tarifs innerhalb der App und Bestätigung des Kaufvorgangs über Google Play Billing. Mit Abschluss des Kaufvorgangs über Google Play kommt der Abonnementvertrag zwischen dem Nutzer und dem Anbieter zustande. Es gelten ergänzend die Nutzungsbedingungen von Google Play.",
      "(4) Der Nutzer ist verpflichtet, bei der Registrierung wahrheitsgemäße Angaben zu machen und diese im Falle einer Änderung unverzüglich zu aktualisieren.",
    ],
  },
  {
    heading: "§ 4 Preise, Zahlung, Abonnement, Kündigung",
    paragraphs: [
      "(1) Es gelten die zum Zeitpunkt des Vertragsschlusses in der App angezeigten Preise. Alle Preise verstehen sich inklusive der gesetzlichen Umsatzsteuer, soweit anwendbar.",
      "(2) Automatische Verlängerung: Kostenpflichtige Abonnements verlängern sich automatisch um den jeweils gewählten Abrechnungszeitraum (monatlich), sofern sie nicht spätestens 24 Stunden vor Ablauf des laufenden Zeitraums über die Google Play-Kontoeinstellungen gekündigt werden.",
      "(3) Kündigung: Die Kündigung eines Abonnements erfolgt ausschließlich über die Abonnementverwaltung von Google Play (Google Play Store → Abonnements). Der Anbieter selbst hat keinen direkten Zugriff auf die Kündigung des Google-Play-Abonnements.",
      "(4) Zahlungsabwicklung: Die gesamte Zahlungsabwicklung erfolgt über Google Play Billing. Der Anbieter erhält zu keinem Zeitpunkt Kenntnis von Zahlungsmitteldaten (z. B. Kreditkartennummern) des Nutzers.",
      "(5) Bei Nichtzahlung oder Rückbuchung eines fälligen Abonnementbetrags ist der Anbieter berechtigt, den Zugang zu den kostenpflichtigen Funktionen zu sperren, bis die offene Forderung beglichen ist.",
      "(6) Ein gesetzliches Widerrufsrecht nach § 355 BGB besteht mangels Verbrauchereigenschaft des Nutzers (§ 1 Abs. 2) grundsätzlich nicht. Etwaige Widerrufs- oder Rückerstattungsansprüche gegenüber Google Play richten sich ausschließlich nach den Bedingungen von Google Play.",
    ],
  },
  {
    heading: "§ 5 Pflichten des Nutzers",
    paragraphs: [
      "(1) Der Nutzer ist für sämtliche in der App eingegebenen oder über die App verarbeiteten Daten (insbesondere Kundendaten, Angebotsdaten, Fotos) selbst verantwortlich.",
      "(2) Der Nutzer verpflichtet sich, bei der Verarbeitung personenbezogener Daten Dritter (insbesondere seiner eigenen Kunden) über die App die geltenden datenschutzrechtlichen Vorschriften, insbesondere die DSGVO, einzuhalten. Der Nutzer ist im Verhältnis zu seinen eigenen Kunden datenschutzrechtlich Verantwortlicher im Sinne von Art. 4 Nr. 7 DSGVO.",
      "(3) Der Nutzer verpflichtet sich, beim Fotografieren im Rahmen der KI-Analyse-Funktion (z. B. auf Baustellen oder in Kundenwohnungen) sicherzustellen, dass keine Personen oder sensiblen privaten Unterlagen erkennbar abgebildet werden, sofern dies nicht zur Leistungserbringung erforderlich und rechtlich zulässig ist.",
      "(4) Der Nutzer verpflichtet sich, seine Zugangsdaten (E-Mail, Passwort) geheim zu halten und vor dem Zugriff Dritter zu schützen. Bei Verdacht auf missbräuchliche Nutzung ist der Anbieter unverzüglich zu informieren.",
      "(5) Es ist untersagt, die App zu nutzen, um rechtswidrige, beleidigende, diskriminierende oder gegen Rechte Dritter verstoßende Inhalte zu erstellen, zu speichern oder zu verbreiten.",
      "(6) Der Nutzer ist für die inhaltliche Richtigkeit der von ihm erstellten und an seine Kunden versendeten Angebote (einschließlich Preisen, Steuerangaben und Pflichtangaben nach § 14 UStG) allein verantwortlich. Eine Prüfung der Angebotsinhalte durch den Anbieter findet nicht statt.",
    ],
  },
  {
    heading: "§ 6 KI-gestützte Funktionen",
    paragraphs: [
      "(1) Die KI-gestützte Analyse von Fotos, Sprachaufnahmen und Textbeschreibungen wird primär über Google Gemini (kostenpflichtiger Tarif) bereitgestellt. Ist Google Gemini vorübergehend nicht verfügbar, wird die Anfrage automatisch als technischer Fallback an OpenAI (GPT-4o) weitergeleitet, damit die Funktion weiterhin genutzt werden kann. Die Nutzung dieser Funktion setzt eine gesonderte Einwilligung des Nutzers gemäß Art. 6 Abs. 1 lit. a DSGVO voraus, die jederzeit in den App-Einstellungen widerrufen werden kann.",
      "(2) Die Ergebnisse der KI-Analyse stellen unverbindliche Vorschläge dar. Der Anbieter übernimmt keine Haftung für die Richtigkeit, Vollständigkeit oder Eignung der KI-generierten Vorschläge für den jeweiligen Einzelfall.",
      "(3) Nähere Informationen zur Datenübermittlung im Rahmen der KI-Analyse ergeben sich aus der Datenschutzerklärung der App.",
    ],
  },
  {
    heading: "§ 7 Nutzungsrechte",
    paragraphs: [
      "(1) Der Anbieter räumt dem Nutzer für die Dauer des Nutzungsvertrags ein einfaches, nicht übertragbares und nicht unterlizenzierbares Recht zur Nutzung der App entsprechend ihrer bestimmungsgemäßen Funktion ein.",
      "(2) Sämtliche Rechte an der App selbst (Software, Quellcode, Design, Marken) verbleiben beim Anbieter bzw. den jeweiligen Rechteinhabern. Eine Vervielfältigung, Dekompilierung, Bearbeitung oder sonstige Nutzung über den vertraglich vereinbarten Zweck hinaus ist nicht gestattet, soweit dies nicht gesetzlich zwingend erlaubt ist (z. B. § 69e UrhG).",
      "(3) Vom Nutzer in die App eingegebene Daten (Angebote, Kundendaten, Materiallisten, Logos) verbleiben im Eigentum des Nutzers. Der Anbieter verarbeitet diese Daten ausschließlich zur Erbringung der vertraglich geschuldeten Leistung.",
    ],
  },
  {
    heading: "§ 8 Verfügbarkeit, Änderungen, Wartung",
    paragraphs: [
      "(1) Der Anbieter bemüht sich um eine möglichst unterbrechungsfreie Verfügbarkeit der App, kann jedoch keine 100%ige Verfügbarkeit garantieren. Wartungsarbeiten, technische Störungen oder Ausfälle bei eingesetzten Drittanbietern (insbesondere Supabase, Google, OpenAI, RevenueCat) können zu vorübergehenden Einschränkungen führen.",
      "(2) Der Anbieter behält sich vor, die App im Rahmen der Weiterentwicklung technisch anzupassen, sofern dies dem Nutzer zumutbar ist.",
      "(3) Bei wesentlichen Änderungen dieser AGB wird der Anbieter den Nutzer in angemessener Frist vor Inkrafttreten in Textform (z. B. per E-Mail oder In-App-Hinweis) informieren. Widerspricht der Nutzer nicht innerhalb von 6 Wochen nach Zugang der Änderungsmitteilung, gelten die geänderten AGB als angenommen. Auf diese Wirkung wird der Nutzer in der Änderungsmitteilung gesondert hingewiesen.",
    ],
  },
  {
    heading: "§ 9 Haftung",
    paragraphs: [
      "(1) Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach den Vorschriften des Produkthaftungsgesetzes sowie bei Verletzung von Leben, Körper oder Gesundheit.",
      "(2) Bei leicht fahrlässiger Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht), deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Nutzer regelmäßig vertrauen darf, ist die Haftung des Anbieters der Höhe nach auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.",
      "(3) Im Übrigen ist die Haftung des Anbieters für leichte Fahrlässigkeit ausgeschlossen.",
      "(4) Die vorstehenden Haftungsbeschränkungen gelten nicht für Ansprüche aus der Verletzung von Datenschutzvorschriften, soweit diese nach der DSGVO zwingend sind.",
      "(5) Der Anbieter übernimmt keine Haftung für die Richtigkeit KI-generierter Inhalte (§ 6 Abs. 2) sowie für Inhalte, die der Nutzer selbst in die App eingibt oder über die App an Dritte versendet.",
      "(6) Für Schäden, die durch Störungen, Ausfälle oder Datenverluste bei eingesetzten Drittanbietern (Supabase, Google, OpenAI, RevenueCat, Google Play) entstehen, haftet der Anbieter nur, soweit ihn ein eigenes Verschulden bei der Auswahl oder Überwachung dieser Dienstleister trifft.",
    ],
  },
  {
    heading: "§ 10 Datenschutz",
    paragraphs: [
      "Informationen zur Verarbeitung personenbezogener Daten im Rahmen der Nutzung der App ergeben sich aus der gesonderten Datenschutzerklärung, die in der App unter „Einstellungen → Datenschutzerklärung“ sowie online abrufbar ist.",
    ],
  },
  {
    heading: "§ 11 Vertragslaufzeit, Kündigung, Account-Löschung",
    paragraphs: [
      "(1) Der Nutzungsvertrag über die kostenlose Testversion wird auf unbestimmte Zeit geschlossen und kann von beiden Seiten jederzeit ohne Einhaltung einer Frist gekündigt werden.",
      "(2) Kostenpflichtige Abonnements laufen für die gewählte Vertragslaufzeit (monatlich) und verlängern sich automatisch gemäß § 4 Abs. 2.",
      "(3) Der Nutzer kann sein Nutzerkonto jederzeit über die Funktion „Account löschen“ in den App-Einstellungen unwiderruflich löschen lassen. Mit der Löschung werden sämtliche zugehörigen Daten entfernt, soweit dem keine gesetzlichen Aufbewahrungspflichten (z. B. steuerrechtliche Aufbewahrungsfristen für Angebots-/Rechnungsdaten) entgegenstehen.",
      "(4) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt für beide Parteien unberührt. Ein wichtiger Grund liegt für den Anbieter insbesondere vor bei schwerwiegenden oder wiederholten Verstößen des Nutzers gegen diese AGB, insbesondere gegen § 5.",
    ],
  },
  {
    heading: "§ 12 Schlussbestimmungen",
    paragraphs: [
      "(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).",
      "(2) Ist der Nutzer Kaufmann im Sinne des HGB, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag der Sitz des Anbieters (Isny im Allgäu).",
      "(3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung.",
      "(4) Änderungen oder Ergänzungen dieser AGB bedürfen der Textform, soweit nicht das Verfahren nach § 8 Abs. 3 zur Anwendung kommt.",
    ],
  },
  {
    heading: "Kontakt",
    paragraphs: ["Bei Fragen zu diesen AGB wenden Sie sich bitte an:"],
    list: [
      "SimplyNext",
      "Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "E-Mail: info@simplynext.de",
      "Telefon: 01743389049",
    ],
  },
];
