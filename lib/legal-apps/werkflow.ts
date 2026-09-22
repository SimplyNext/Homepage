import type { LegalSection } from "../legal";

/**
 * App-spezifische Rechtstexte für Werkflow – übernommen aus
 * werkflow/docs/{datenschutzerklaerung,agb}.md (Stand: September 2026 –
 * GoBD-Archivierung, gestaffelte Aufbewahrungsfristen, Änderungsprotokoll,
 * Export für Steuerberater, Resend für Konto-E-Mails; KI-Rechnungen ohne
 * Angebot mit eigenem Kontingent).
 *
 * Quelle bleibt das Markdown-Dokument im App-Repository: Änderungen dort
 * müssen hier nachgezogen werden. Der Renderer kennt nur eine Liste pro
 * Abschnitt – mehrere Listen in einer Ziffer werden deshalb auf Unter-
 * abschnitte mit den fett gesetzten Stichworten der Vorlage verteilt.
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
      "WerkFlow ist eine App für Handwerksbetriebe zur Erstellung von Angeboten und Rechnungen (einschließlich E-Rechnungen), zur Kundenverwaltung und zur Verwaltung von Materiallisten. Bei der Nutzung der App werden personenbezogene Daten verarbeitet. Personenbezogene Daten sind alle Daten, die auf Sie persönlich beziehbar sind, z. B. Name, Adresse, E-Mail-Adresse oder Nutzerverhalten.",
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
    afterList: [
      "An Ihre E-Mail-Adresse senden wir ausschließlich Konto-E-Mails: die Bestätigung bei der Registrierung und den Link zum Zurücksetzen des Passworts (Versand über Resend, siehe Ziff. 4.5).",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung – Bereitstellung des Nutzerkontos)",
    ],
  },
  {
    heading: "3.2 Firmenprofildaten",
    level: 3,
    paragraphs: [
      "Zur Erstellung rechtssicherer Angebote, Rechnungen und PDFs erheben und speichern wir die von Ihnen eingegebenen Angaben zu Ihrem Betrieb:",
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
      "Wenn Sie den DATEV-Export nutzen: Kontenrahmen, Berater- und Mandantennummer bei Ihrem Steuerberater, Debitoren- und Erlöskonten",
    ],
    afterList: [
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung, soweit Pflichtangaben für Rechnungen/Angebote nach § 14 UStG erforderlich sind)",
    ],
  },
  {
    heading: "3.3 Bankverbindung (besonders sensible Finanzdaten)",
    level: 3,
    paragraphs: [
      "Zur Angabe auf Ihren Angeboten und Rechnungen können Sie folgende Daten hinterlegen:",
    ],
    list: ["Bankname", "IBAN", "BIC"],
    afterList: [
      "Diese Daten werden ausschließlich zum Zweck der Anzeige auf Ihren eigenen Angeboten und Rechnungen gespeichert. Auf Rechnungen stehen sie zusätzlich als Zahlungsangabe in der eingebetteten E-Rechnung (ZUGFeRD bzw. XRechnung). Sie werden nicht zur Zahlungsabwicklung innerhalb der App genutzt.",
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
      "Anschrift (Straße, Hausnummer, PLZ, Ort, Land)",
      "Telefonnummer (optional)",
      "E-Mail-Adresse (optional)",
      "Kundennummer",
      "Umsatzsteuer-Identifikationsnummer (optional; erforderlich, wenn die Steuerschuldnerschaft des Leistungsempfängers nach § 13b UStG greift)",
      "Kennzeichnung als Privat- oder Geschäftskunde (steuert die gesetzlich vorgeschriebenen Hinweise auf der Rechnung)",
      "Leitweg-ID (optional; nur bei öffentlichen Auftraggebern. Die Behörde teilt sie mit, damit die Rechnung auf ihrer Eingangsplattform der richtigen Stelle zugeordnet wird.)",
    ],
    afterList: [
      "Hinweis: Sie als Nutzer sind hinsichtlich der Daten Ihrer Kunden datenschutzrechtlich selbst Verantwortlicher (Art. 4 Nr. 7 DSGVO). Wir verarbeiten diese Daten in Ihrem Auftrag als Auftragsverarbeiter im Sinne von Art. 28 DSGVO. Ein entsprechender Auftragsverarbeitungsvertrag (AVV) kann auf Anfrage bereitgestellt werden.",
      "Rechtsgrundlage (aus Ihrer Sicht als Nutzer): Art. 6 Abs. 1 lit. b oder f DSGVO, je nach Kundenbeziehung",
    ],
  },
  {
    heading: "3.5 Angebots-, Rechnungs- und Materialdaten",
    level: 3,
    paragraphs: [
      "Rechnungen lassen sich in der App aus einem angenommenen Angebot oder ohne vorheriges Angebot erstellen. Verarbeitet werden dabei:",
    ],
    list: [
      "Angebotsnummer, Datum, Betreff, Gültigkeitsdauer",
      "Positionen, Mengen, Einzelpreise, Gesamtsummen, MwSt.",
      "Zahlungsbedingungen, Liefer-/Leistungszeit",
      "Status (Entwurf, versendet, angenommen, abgelehnt, durch neue Version ersetzt)",
      "Bei versendeten Angeboten: Versandzeitpunkt, das versendete PDF so, wie Ihr Kunde es erhalten hat, und dessen Prüfsumme (SHA-256)",
      "Materialliste mit Bezeichnungen, Preisen, Einheiten",
      "Bei Rechnungen zusätzlich die Angaben nach § 14 UStG: fortlaufende Rechnungsnummer, Rechnungsart (Rechnung, Abschlags-, Schluss- oder Stornorechnung) und Rechnungsdatum",
      "Leistungsdatum bzw. Leistungszeitraum, Fälligkeit und Zahlungsziel",
      "Aufteilung in Lohn- und Materialanteil (§ 35a EStG) sowie die Kennzeichen für § 13b, § 14b und § 19 UStG",
      "Eine eingefrorene Kopie der Kundendaten zum Zeitpunkt der Rechnung. Zieht der Kunde später um, muss die archivierte Rechnung weiterhin die damals gültige Anschrift zeigen.",
      "Das erzeugte PDF mit seiner Prüfsumme (SHA-256) sowie die darin eingebettete E-Rechnung im Format ZUGFeRD 2.3 / Factur-X (Profil EN 16931). Diese XML-Datei enthält dieselben Rechnungsangaben nochmals in maschinenlesbarer Form, damit die Buchhaltung Ihres Kunden sie automatisch einlesen kann.",
      "Bei Rechnungen an öffentliche Auftraggeber entsteht dieselbe Datei stattdessen im Format XRechnung 3.0. Sie enthält zusätzlich die Leitweg-ID sowie einen Ansprechpartner Ihres Betriebs mit Telefonnummer und E-Mail-Adresse, weil die Rechnungseingangsplattform der Behörde diese Angaben verlangt.",
    ],
    afterList: [
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung), für die Pflichtangaben zusätzlich Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung nach § 14 UStG).",
      "Unveränderbarkeit: Eine versendete Rechnung lässt sich in der App weder ändern noch vor Ablauf der Aufbewahrungsfrist löschen (Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von Büchern, Aufzeichnungen und Unterlagen in elektronischer Form, GoBD). Eine Korrektur ist nur über eine Stornorechnung möglich, die auf die ursprüngliche Rechnung verweist. Dasselbe gilt für versendete Angebote: Eine Änderung legt eine neue Version mit neuer Angebotsnummer an, die alte Version bleibt erhalten.",
    ],
  },
  {
    heading: "Aufbewahrungspflichten",
    level: 3,
    paragraphs: [
      "Die gesetzlichen Aufbewahrungspflichten für Ihre Geschäftsunterlagen treffen Sie als Unternehmer. Es gelten insbesondere:",
    ],
    list: [
      "Rechnungen, Abschlags-, Schluss- und Stornorechnungen einschließlich der eingebetteten E-Rechnung (XML) sowie Angebote, aus denen ein Auftrag hervorgegangen ist: 8 Jahre (§ 147 Abs. 1 Nr. 4, Abs. 3 AO, § 257 Abs. 1 Nr. 4, Abs. 4 HGB, § 14b UStG)",
      "Angebote ohne anschließenden Auftrag: 6 Jahre (§ 147 Abs. 1 Nr. 2, 3, Abs. 3 AO, § 257 Abs. 1 Nr. 2, 3, Abs. 4 HGB)",
      "Zur Einordnung, nicht in WerkFlow geführt: Eingangsrechnungen und sonstige Buchungsbelege 8 Jahre (§ 147 Abs. 1 Nr. 4, Abs. 3 AO, § 14b Abs. 1 UStG); Bücher, Inventare und Jahresabschlüsse 10 Jahre (§ 147 Abs. 1 Nr. 1, Abs. 3 AO, § 257 Abs. 1 Nr. 1, Abs. 4 HGB)",
    ],
    afterList: [
      "Die Frist beginnt nicht mit dem Tag der Erstellung, sondern mit dem Ende des Kalenderjahres, in dem das Dokument entstanden ist (§ 147 Abs. 4 AO, § 257 Abs. 5 HGB). Beispiel: Eine Rechnung vom 15.05.2026 ist bis zum 31.12.2034 aufzubewahren, ein Angebot ohne Auftrag vom selben Tag bis zum 31.12.2032. Die Frist verlängert sich, solange die Unterlagen für eine noch nicht abgeschlossene Steuerfestsetzung von Bedeutung sind (§ 147 Abs. 3 Satz 5 AO).",
      "Die 8 Jahre gelten unabhängig davon, ob eine Rechnung auf Papier, als PDF, als ZUGFeRD- oder als XRechnung vorliegt (§ 14b Abs. 1 UStG). Bei E-Rechnungen ist der strukturierte XML-Teil maßgeblich und muss in seiner ursprünglichen Form unverändert erhalten bleiben: bei ZUGFeRD die im PDF eingebettete XML-Datei, bei XRechnung die XML-Datei selbst. Ein daraus erzeugtes PDF ist nur eine Ansicht. WerkFlow speichert deshalb PDF und E-Rechnung zusammen und unverändert.",
    ],
  },
  {
    heading: "Speicherung und Löschung durch uns",
    level: 3,
    paragraphs: [
      "Wir speichern Ihre versendeten Angebote und Rechnungen einschließlich PDF und E-Rechnung bis zum Ende der Aufbewahrungsfrist. Vorher lassen sie sich nicht löschen, auch nicht von Ihnen, damit Ihre Aufbewahrungspflicht erfüllt bleibt. Entwürfe können Sie jederzeit löschen.",
      "Nach Ablauf der Frist löschen wir die Belege automatisch, weil wir personenbezogene Daten nicht länger speichern dürfen, als es erforderlich ist (Art. 5 Abs. 1 lit. e, Art. 17 Abs. 1 lit. a DSGVO):",
    ],
    list: [
      "Ab dem 1. Oktober des letzten Aufbewahrungsjahres zeigen wir Ihnen in der App an, welche Belege betroffen sind, und bieten sie zum Herunterladen an (Ziff. 7). Eine E-Mail senden wir dazu nicht.",
      "Am 31. März des folgenden Jahres löschen wir Datensatz, PDF und E-Rechnung dieser Belege, auch wenn Sie die App in der Zwischenzeit nicht geöffnet haben.",
      "Brauchen Sie Belege länger, etwa weil eine Außenprüfung, ein Einspruch oder ein anderes Verfahren läuft (§ 147 Abs. 3 Satz 5 AO), können Sie die Aufbewahrung in der App um jeweils ein Jahr verlängern.",
      "Zwischen Fristende und Löschtermin können Sie Belege auch selbst in der App löschen.",
    ],
    afterList: [
      "Beispiel: Eine Rechnung vom 15.05.2026 ist bis zum 31.12.2034 aufzubewahren. Ab dem 01.10.2034 weist die App auf die Löschung hin, gelöscht wird am 31.03.2035.",
      "Wenn Sie Ihr Konto löschen, werden alle Daten einschließlich der Angebote und Rechnungen sofort und endgültig gelöscht, auch wenn die Aufbewahrungsfrist noch läuft. Die App bietet Ihnen deshalb vorher an, das Archiv aller Jahre herunterzuladen (Ziff. 7).",
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
      "Primärer KI-Dienst: Google Gemini (kostenpflichtiger Tarif mit aktivierter Abrechnung) verarbeitet standardmäßig Fotos, Sprachaufnahmen und Textbeschreibungen für die Angebotserstellung, Fotos von Materiallisten sowie Leistungsbeschreibungen, aus denen für eine Rechnung ohne Angebot Positionen und ein Leistungstext entstehen.",
      "Damit die KI Ihre eigenen Bezeichnungen und Preise verwenden kann, werden die Einträge Ihrer Materialliste (Bezeichnung, Einheit, Preis) mit übermittelt.",
      "Fallback-Dienst: Ist Google Gemini vorübergehend nicht erreichbar (z. B. bei einer technischen Störung), wird die Anfrage automatisch an OpenAI (GPT-4o, ggf. inkl. Whisper-Transkription bei Sprachaufnahmen) weitergeleitet, damit Ihre Anfrage dennoch bearbeitet werden kann. Der Fallback kommt nur im Ausnahmefall zum Einsatz.",
      "Die Rohdaten (Fotos, Audiodateien) werden nach Abschluss der KI-Analyse nicht dauerhaft auf unseren Servern gespeichert, sondern nur für die Dauer der Verarbeitung übermittelt.",
      "Da wir bei Google Gemini einen kostenpflichtigen Tarif mit aktivierter Abrechnung nutzen, gilt gemäß den Nutzungsbedingungen der Gemini-API ausdrücklich, dass Google Ihre Eingaben (Prompts, Bilder, Audiodateien) und die generierten Antworten nicht zur Verbesserung von Google-Produkten verwendet. Eingaben werden dort ausschließlich zeitlich begrenzt zur Missbrauchserkennung und aus Sicherheitsgründen protokolliert (Quelle: Gemini API – Nutzungsbedingungen für kostenpflichtige Dienste).",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Einwilligung kann jederzeit mit Wirkung für die Zukunft in den App-Einstellungen widerrufen werden (Toggle „KI-Analyse verwenden“).",
      "Wichtiger Hinweis: Achten Sie beim Fotografieren von Baustellen/Kundenwohnungen darauf, dass keine Personen oder sensible private Unterlagen im Bild erkennbar sind, da Sie hierfür als Nutzer selbst verantwortlich sind.",
      "Diktierfunktion (Sprache zu Text): In Angeboten, Rechnungen und Notizen können Sie Texte einsprechen statt zu tippen. Anders als bei der Angebotsanalyse wird der gesprochene Inhalt dabei nicht ausgewertet, sondern ausschließlich in Text umgewandelt. Dazu wird die Aufnahme – nur nach Ihrer Einwilligung nach dieser Ziffer und nur bei bestehender Internetverbindung – an unseren Server übermittelt und dort von Google Gemini bzw. ersatzweise OpenAI Whisper in Text umgewandelt; die Audiodatei wird nach der Umwandlung nicht dauerhaft gespeichert und auf Ihrem Gerät sofort gelöscht. Ohne Einwilligung oder ohne Internetverbindung steht das Diktat nicht zur Verfügung; eine Spracherkennung auf dem Gerät nutzt die App nicht. Ein Diktat verbraucht keines Ihrer Analyse-Kontingente. Ohne Abonnement steht das Diktat in Angeboten nur zur Verfügung, solange kostenlose KI-Angebote übrig sind, in Rechnungen, solange kostenlose KI-Rechnungen übrig sind, und in Notizen, bis beide Kontingente aufgebraucht sind. Mit einem Abonnement bleibt es überall verfügbar, auch nach Erreichen des monatlichen Kontingents.",
    ],
  },
  {
    heading: "3.7 Freie Notizen",
    level: 3,
    paragraphs: [
      "In der App können Sie freie Notizen anlegen (getippt oder diktiert). Ihr Inhalt wird auf unseren Servern (Supabase, siehe Ziff. 4.1) gespeichert und ist ausschließlich Ihrem Konto zugeordnet. Welche Angaben eine Notiz enthält, bestimmen allein Sie; sie lässt sich jederzeit in der App löschen.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)",
    ],
  },
  {
    heading: "3.8 Abonnement- und Zahlungsdaten",
    level: 3,
    paragraphs: [
      "Für die Nutzung kostenpflichtiger Funktionen (Abo-Modelle „Solo“, „Kleiner Betrieb“, „Pro“) verarbeiten wir:",
    ],
    list: [
      "Ihre Nutzer-ID (zur Zuordnung des Abos zu Ihrem Konto)",
      "Abo-Status, gebuchter Tarif, Ablaufdatum",
      "Kaufhistorie (verwaltet über RevenueCat, siehe Ziff. 4.3)",
      "Anzahl der im laufenden Monat genutzten KI-Angebote und KI-Rechnungen (zur Berechnung Ihres Kontingents)",
    ],
    afterList: [
      "Die eigentliche Zahlungsabwicklung erfolgt vollständig über Google Play Billing. Kreditkarten- oder sonstige Zahlungsdaten werden von uns zu keinem Zeitpunkt erhoben, gespeichert oder eingesehen.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)",
    ],
  },
  {
    heading: "3.9 Technische Daten / Nutzungsdaten",
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
    heading: "3.10 Änderungsprotokoll der Belege",
    level: 3,
    paragraphs: [
      "Damit nachvollziehbar bleibt, wann ein Angebot oder eine Rechnung entstanden, versendet oder geändert wurde, führt die App zu jedem Beleg ein Protokoll. Gespeichert werden:",
    ],
    list: [
      "Zeitpunkt und Art des Vorgangs (angelegt, geändert, ausgestellt, Statusänderung, PDF archiviert, geteilt, exportiert, Aufbewahrung verlängert, gelöscht)",
      "Belegart und Belegnummer",
      "die Namen der geänderten Felder, bei bereits versendeten Belegen zusätzlich alter und neuer Wert der geänderten Felder (z. B. Zahlungsstatus und Zahlungsdatum); bei einer Löschung Belegnummer, Datum und Betrag",
      "ob der Vorgang von Ihnen oder automatisch vom System ausgelöst wurde",
      "Prüfsummen (SHA-256), die jeden Eintrag mit dem vorherigen verketten, damit nachträgliche Änderungen am Protokoll erkennbar sind",
    ],
    afterList: [
      "Vollständige Belege oder Kundendaten stehen nicht im Protokoll. Das Protokoll lässt sich in der App nicht bearbeiten; Sie erhalten es mit dem Export für Ihren Steuerberater und mit dem Datenexport (Ziff. 7).",
      "Zweck: Nachweis, dass Buchungen und Aufzeichnungen nicht unbemerkt verändert wurden (§ 146 Abs. 4 AO, GoBD).",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung – GoBD-konforme Belegführung) und Art. 6 Abs. 1 lit. c DSGVO (Ihre Aufzeichnungspflicht nach § 146 Abs. 4 AO)",
      "Speicherdauer: Wie der zugehörige Beleg. Wird ein Beleg nach Fristablauf gelöscht, entfernen wir aus seinen Protokolleinträgen Belegbezug, Belegnummer, Feldnamen und Werte. Übrig bleiben nur Zeitpunkt, Art des Vorgangs und Prüfsummen, damit die Kette prüfbar bleibt. Diese Reste werden mit dem Konto gelöscht.",
    ],
  },
  {
    heading: "3.11 Feedback und Bewertungen",
    level: 3,
    paragraphs: [
      "Über Einstellungen → „Feedback senden“ können Sie uns freiwillig eine Bewertung mit 1 bis 5 Sternen und optional einen Text (höchstens 2.000 Zeichen) schicken. Gespeichert werden:",
    ],
    list: [
      "Ihre Nutzer-ID",
      "Sternebewertung und Text",
      "App-Version",
      "Zeitpunkt des Absendens",
    ],
    afterList: [
      "Zweck: Verbesserung der App. Ihr Feedback lesen nur wir als Anbieter; es wird nicht veröffentlicht und nicht an Dritte weitergegeben. Gespeichert wird es auf unseren Servern (Supabase, siehe Ziff. 4.1). Bitte nennen Sie im Text keine personenbezogenen Daten Ihrer Kunden.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Verbesserung der App). Das Absenden ist freiwillig. Sie können der Verarbeitung jederzeit widersprechen (Art. 21 DSGVO), z. B. per E-Mail an info@simplynext.de; wir löschen Ihr Feedback dann.",
      "Speicherdauer: Bis zur Löschung Ihres Kontos; mit dem Konto wird auch Ihr Feedback gelöscht.",
      "Bewertung bei Google Play: Nach dem zweiten versendeten Angebot blendet die App einmalig das Bewertungsfenster von Google Play ein (Google Play In-App Review API); ob es tatsächlich erscheint, entscheidet Google. Über Einstellungen → „App bewerten“ öffnen Sie außerdem den Eintrag der App im Google Play Store. Eine dort abgegebene Bewertung geht direkt an Google und wird nach den Bestimmungen von Google veröffentlicht. Wir erhalten davon weder Sterne noch Text; ob Sie bewertet haben, erfährt die App nicht. Verantwortlich für diese Verarbeitung ist Google (siehe Ziff. 4.4).",
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
      "Supabase Inc., USA. Die Daten werden auf Servern in der EU gespeichert (Rechenzentrum in Irland).",
      "Übermittelte Daten: sämtliche unter Ziff. 3.1–3.10 genannten Daten (Konto-, Profil-, Kunden-, Angebots-, Rechnungs- und Materialdaten, freie Notizen, erzeugte PDF- und ZUGFeRD-Dateien, Änderungsprotokoll, Firmenlogo, Unterschrift-Bilddatei).",
      "Drittlandtransfer: Da Supabase ein Unternehmen mit Sitz in den USA ist, lässt sich ein Zugriff aus den USA (z. B. im Rahmen von Wartung und Support) nicht ausschließen. Dieser ist über den Auftragsverarbeitungsvertrag mit EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO) abgesichert.",
      "Datenschutzerklärung: supabase.com/privacy",
    ],
  },
  {
    heading: "4.2 KI-Analysedienste (Google Gemini primär, OpenAI GPT-4o als Fallback)",
    level: 3,
    paragraphs: [
      "Zur automatisierten Auswertung von Fotos, Sprachaufnahmen und Textbeschreibungen sowie zur Umwandlung von Diktaten in Text (siehe Ziff. 3.6) nutzen wir:",
    ],
    list: [
      "Google Gemini (Google Ireland Limited / Google LLC, USA) – primärer und regulär genutzter KI-Dienst, kostenpflichtiger Tarif ohne Trainingsnutzung Ihrer Daten. Datenschutzerklärung: policies.google.com/privacy · Nutzungsbedingungen: ai.google.dev/gemini-api/terms#paid-services",
      "OpenAI GPT-4o (Vertragspartner für Kunden im EWR: OpenAI Ireland Ltd., Dublin, Irland; verbunden mit OpenAI, L.L.C., USA) – ausschließlich als technischer Fallback, falls Google Gemini vorübergehend nicht verfügbar ist. Grundlage ist der Auftragsverarbeitungsvertrag (Data Processing Addendum) von OpenAI. Datenschutzerklärung: openai.com/policies/eu-privacy-policy",
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
      "Datenschutzerklärung: www.revenuecat.com/privacy",
      "Drittlandtransfer: USA, abgesichert über EU-Standardvertragsklauseln.",
    ],
  },
  {
    heading: "4.4 Google Play Billing / Google Play Services",
    level: 3,
    paragraphs: [
      "Google Ireland Limited / Google LLC",
      "Die Zahlungsabwicklung für Abonnements erfolgt vollständig über Google Play. Es gilt zusätzlich die Datenschutzerklärung von Google: policies.google.com/privacy",
      "Außerdem stellt Google Play das Bewertungsfenster und den Store-Eintrag der App bereit (Ziff. 3.11). Bewertungen, die Sie dort abgeben, verarbeitet Google in eigener Verantwortung.",
    ],
  },
  {
    heading: "4.5 Resend (Versand von Konto-E-Mails)",
    level: 3,
    paragraphs: [
      "Resend, Inc., San Francisco, USA",
      "Zweck: Versand der Bestätigungs-E-Mail bei der Registrierung und der E-Mail zum Zurücksetzen des Passworts (Ziff. 3.1).",
      "Übermittelte Daten: Ihre E-Mail-Adresse, der Inhalt der jeweiligen Konto-E-Mail, Versandzeitpunkt und Zustellstatus.",
      "Datenschutzerklärung: resend.com/legal/privacy-policy",
      "Drittlandtransfer: USA, abgesichert über EU-Standardvertragsklauseln.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung – Bereitstellung des Nutzerkontos)",
    ],
  },
  {
    heading: "5. Berechtigungen der App",
    paragraphs: ["Die App fordert folgende Systemberechtigungen an:"],
    table: {
      head: ["Berechtigung", "Zweck", "Pflicht"],
      rows: [
        ["Kamera", "Aufnahme von Fotos für die KI-gestützte Angebotserstellung", "Nur bei aktiver Nutzung der Foto-Funktion"],
        ["Mikrofon", "Aufnahme von Sprachnotizen zur Angebotserstellung sowie Diktieren von Texten", "Nur bei aktiver Nutzung der Sprachfunktion"],
        ["Internetzugriff", "Kommunikation mit unseren Servern (Supabase, RevenueCat)", "Erforderlich für Grundfunktionen"],
      ],
    },
    afterList: [
      "Die App fordert keinen Zugriff auf Standort, Kontakte, SMS, Anrufliste oder andere Apps an.",
      "Berechtigungen werden zur Laufzeit angefragt und sind in den Android-Systemeinstellungen jederzeit widerrufbar. Ohne Kamera-/Mikrofonzugriff sind die betroffenen Einzelfunktionen (Foto-Analyse, Sprachaufnahme) nicht nutzbar; die übrige App bleibt voll funktionsfähig.",
    ],
  },
  {
    heading: "6. Speicherdauer",
    table: {
      head: ["Datenkategorie", "Speicherdauer"],
      rows: [
        ["Kontodaten", "Bis zur Löschung des Nutzerkontos"],
        [
          "Angebote und Rechnungen einschließlich PDF und E-Rechnung (ZUGFeRD/XRechnung)",
          "Entwürfe bis zur Löschung durch Sie. Versendete Belege bis zum Ende der Aufbewahrungsfrist (8 bzw. 6 Jahre ab Ende des Kalenderjahres); automatische Löschung am 31. März danach, Hinweis in der App ab 1. Oktober, Verlängerung möglich (Ziff. 3.5). Bei Kontolöschung sofort.",
        ],
        ["Änderungsprotokoll der Belege", "Wie der zugehörige Beleg; danach nur geschwärzte Einträge ohne Belegbezug bis zur Kontolöschung (Ziff. 3.10)"],
        ["Kundendaten", "Bis zur Löschung durch den Nutzer bzw. Account-Löschung. Die Kopie der Kundendaten in einer versendeten Rechnung bleibt so lange erhalten wie die Rechnung."],
        ["Fotos/Sprachaufnahmen zur KI-Analyse und zum Diktat", "Nur temporär während der Verarbeitung, keine dauerhafte Speicherung"],
        ["Feedback (Sterne, Text, App-Version)", "Bis zur Account-Löschung oder bis zu Ihrem Widerspruch (Ziff. 3.11)"],
        ["Freie Notizen", "Bis zur Löschung durch den Nutzer bzw. Account-Löschung"],
        ["Firmenlogo, Unterschrift", "Bis zur Löschung durch den Nutzer bzw. Account-Löschung"],
        ["Abo-/Kaufdaten", "Abo-Status bis zur Account-Löschung. Protokoll der Abo-Ereignisse höchstens 90 Tage, bei Account-Löschung sofort. Kundeneintrag bei RevenueCat bis zur Account-Löschung. Kaufbelege bei Google Play gemäß den Bestimmungen von Google."],
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
      "Datenexport: Unter Einstellungen → „Meine Daten exportieren“ können Sie alle gespeicherten Daten als JSON-Datei herunterladen, einschließlich Ihrer Rechnungen mit den E-Rechnungs-Daten und des Änderungsprotokolls.",
      "Export für Steuerberater: Unter Einstellungen → „Export für Steuerberater“ erhalten Sie Ihre Angebote und Rechnungen eines Zeitraums als ZIP-Archiv (PDF, E-Rechnung, Tabellen, Änderungsprotokoll) und auf Wunsch einen DATEV-Buchungsstapel. Die Datei entsteht auf Ihrem Gerät; Sie entscheiden, wo Sie sie speichern und an wen Sie sie weitergeben.",
      "Account-Löschung: Unter Einstellungen → „Account löschen“ können Sie Ihr Konto und alle zugehörigen Daten unwiderruflich löschen lassen. Dabei werden auch Ihre Angebote und Rechnungen gelöscht; die App bietet Ihnen vorher an, das Archiv aller Jahre herunterzuladen (Ziff. 3.5).",
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
      "Versendete Belege und ihre archivierten PDFs sind auf Datenbank- und Speicherebene gegen Änderung und vorzeitiges Löschen gesperrt; Prüfsummen und ein verkettetes Änderungsprotokoll machen Veränderungen erkennbar",
    ],
  },
  {
    heading: "9. Keine automatisierte Entscheidungsfindung",
    paragraphs: [
      "Es findet keine automatisierte Entscheidungsfindung im Sinne des Art. 22 DSGVO statt, die rechtliche Wirkung gegenüber Ihnen entfaltet. Die KI-gestützte Erkennung von Materialien und Arbeitszeiten dient lediglich als Vorschlag; Sie prüfen alle KI-generierten Angaben, bevor Sie einen Beleg speichern oder versenden (bei Angeboten zusätzlich über die Bestätigung in der App: „Ich habe die KI-generierten Daten geprüft und bestätige deren Richtigkeit“).",
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
      "(2) Die App richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB, insbesondere Handwerksbetriebe und Selbstständige, die die App zur Erstellung von Angeboten und Rechnungen, zur Kundenverwaltung und zur Verwaltung von Materiallisten im Rahmen ihrer gewerblichen oder selbstständigen beruflichen Tätigkeit nutzen (B2B). Eine Nutzung durch Verbraucher im Sinne des § 13 BGB ist nicht vorgesehen.",
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
      "Erstellung von Rechnungen, Abschlags-, Schluss- und Stornorechnungen mit fortlaufender Rechnungsnummer, als PDF mit eingebetteter E-Rechnung (ZUGFeRD / Factur-X, Profil EN 16931) bzw. als XRechnung für öffentliche Auftraggeber",
      "Verwaltung von Kundendaten",
      "Verwaltung einer Material-Preisliste",
      "KI-gestützte Analyse von Fotos, Sprachaufnahmen und Textbeschreibungen zur automatisierten Erstellung von Angebotsvorschlägen sowie von Rechnungspositionen und Leistungstexten für Rechnungen ohne vorheriges Angebot",
      "Digitale Unterschriftenerfassung",
      "Freie Notizen und Diktierfunktion",
      "Export der eigenen Daten",
      "Unterstützung einer GoBD-konformen Arbeitsweise: unveränderbare Archivierung versendeter Angebote und Rechnungen, Änderungsprotokoll, Export für Steuerberater und Betriebsprüfung (ZIP-Archiv nach dem Beschreibungsstandard für die Datenüberlassung, DATEV-Buchungsstapel) sowie eine Vorlage für die Verfahrensdokumentation",
    ],
    afterList: [
      "(2) Die App wird in einer kostenlosen Testversion (3 kostenlose KI-Angebote und 3 kostenlose KI-Rechnungen, keine Kreditkartenangabe erforderlich) sowie in kostenpflichtigen Abonnement-Tarifen („Solo“, „Kleiner Betrieb“, „Pro“) angeboten. Der jeweilige Funktionsumfang der Tarife ergibt sich aus der Darstellung in der App zum Zeitpunkt des Vertragsschlusses. In der Testversion ist die Diktierfunktion (Sprache zu Text) an das jeweilige Kontingent gebunden: In Angeboten steht sie zur Verfügung, solange noch kostenlose KI-Angebote übrig sind, in Rechnungen, solange noch kostenlose KI-Rechnungen übrig sind, und in Notizen, bis beide Kontingente aufgebraucht sind. Danach ist das Diktat im jeweiligen Bereich ohne Abonnement gesperrt. Mit einem Abonnement bleibt das Diktat überall verfügbar, auch nach Erreichen des monatlichen Kontingents.",
      "(3) Die von der App KI-gestützt erstellten Vorschläge (Materialerkennung, Arbeitszeitschätzung, Rechnungspositionen, Leistungstexte) sind unverbindliche Vorschläge. Der Nutzer ist verpflichtet, alle automatisiert generierten Angaben vor deren Verwendung in einem Angebot oder einer Rechnung auf Richtigkeit und Vollständigkeit zu prüfen. Der Anbieter übernimmt keine Gewähr für die Richtigkeit KI-generierter Inhalte. In der Beschreibung genannte Preise werden als Nettopreise übernommen; als brutto bezeichnete Preise rechnet die App mit dem im Profil hinterlegten Steuersatz auf netto um.",
      "(4) Der Anbieter ist berechtigt, den Funktionsumfang der App im Rahmen der technischen Weiterentwicklung anzupassen, zu erweitern oder einzuschränken, sofern dies dem Nutzer zumutbar ist und der vertraglich vereinbarte Kernumfang der jeweils gebuchten Leistung erhalten bleibt.",
      "(5) Die App unterstützt eine GoBD-konforme Arbeitsweise; sie ist kein zertifiziertes Buchführungssystem und ersetzt weder die Buchführung noch die steuerliche Beratung. Die Verantwortung für die Ordnungsmäßigkeit der Aufzeichnungen, für eine vollständige Verfahrensdokumentation und für die mit dem Steuerberater abgestimmte Kontenzuordnung im DATEV-Export liegt beim Nutzer.",
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
      "(1) Der Nutzer ist für sämtliche in der App eingegebenen oder über die App verarbeiteten Daten (insbesondere Kundendaten, Angebots- und Rechnungsdaten, Fotos) selbst verantwortlich.",
      "(2) Der Nutzer verpflichtet sich, bei der Verarbeitung personenbezogener Daten Dritter (insbesondere seiner eigenen Kunden) über die App die geltenden datenschutzrechtlichen Vorschriften, insbesondere die DSGVO, einzuhalten. Der Nutzer ist im Verhältnis zu seinen eigenen Kunden datenschutzrechtlich Verantwortlicher im Sinne von Art. 4 Nr. 7 DSGVO.",
      "(3) Der Nutzer verpflichtet sich, beim Fotografieren im Rahmen der KI-Analyse-Funktion (z. B. auf Baustellen oder in Kundenwohnungen) sicherzustellen, dass keine Personen oder sensiblen privaten Unterlagen erkennbar abgebildet werden, sofern dies nicht zur Leistungserbringung erforderlich und rechtlich zulässig ist.",
      "(4) Der Nutzer verpflichtet sich, seine Zugangsdaten (E-Mail, Passwort) geheim zu halten und vor dem Zugriff Dritter zu schützen. Bei Verdacht auf missbräuchliche Nutzung ist der Anbieter unverzüglich zu informieren.",
      "(5) Es ist untersagt, die App zu nutzen, um rechtswidrige, beleidigende, diskriminierende oder gegen Rechte Dritter verstoßende Inhalte zu erstellen, zu speichern oder zu verbreiten.",
      "(6) Der Nutzer ist für die inhaltliche Richtigkeit der von ihm erstellten und an seine Kunden versendeten Angebote und Rechnungen (einschließlich Preisen, Steuerangaben und der Pflichtangaben nach § 14 UStG) allein verantwortlich. Eine Prüfung der Inhalte durch den Anbieter findet nicht statt. Die App unterstützt die Einhaltung der Pflichtangaben, ersetzt aber keine steuerliche Beratung.",
      "(7) Die gesetzlichen Aufbewahrungspflichten für Rechnungen, Angebote und sonstige Geschäftsunterlagen (insbesondere § 147 AO, § 257 HGB, § 14b UStG) treffen den Nutzer. Rechnungen und Angebote, aus denen ein Auftrag hervorgegangen ist, sind 8 Jahre aufzubewahren, Angebote ohne anschließenden Auftrag 6 Jahre; die Frist beginnt jeweils mit dem Ende des Kalenderjahres, in dem das Dokument entstanden ist. Bis zum Ende der Aufbewahrungsfrist speichert die App versendete Angebote und Rechnungen unveränderbar: Korrekturen sind nur über eine Stornorechnung bzw. eine neue Angebotsversion mit neuer Nummer möglich, gelöscht werden kann ein versendeter Beleg erst nach Fristablauf.",
      "(8) Nach Ablauf der Aufbewahrungsfrist löscht der Anbieter die betroffenen Belege einschließlich PDF und E-Rechnung automatisch am 31. März des folgenden Jahres. Ab dem 1. Oktober des letzten Aufbewahrungsjahres weist die App darauf hin und bietet die Belege zum Herunterladen an. Verlängert sich die Aufbewahrungsfrist im Einzelfall, etwa wegen einer Außenprüfung oder eines Einspruchs (§ 147 Abs. 3 Satz 5 AO), hat der Nutzer die Aufbewahrung in der App rechtzeitig zu verlängern oder die Belege vorher selbst zu sichern. Der Anbieter empfiehlt, die Belege zusätzlich mindestens einmal jährlich über den Export für Steuerberater auf einem eigenen Datenträger zu sichern. Vor einer Kündigung oder Kontolöschung hat der Nutzer seine aufbewahrungspflichtigen Unterlagen selbst zu sichern.",
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
      "(3) Vom Nutzer in die App eingegebene Daten (Angebote, Rechnungen, Kundendaten, Materiallisten, Logos) verbleiben im Eigentum des Nutzers. Der Anbieter verarbeitet diese Daten ausschließlich zur Erbringung der vertraglich geschuldeten Leistung.",
    ],
  },
  {
    heading: "§ 8 Verfügbarkeit, Änderungen, Wartung",
    paragraphs: [
      "(1) Der Anbieter bemüht sich um eine möglichst unterbrechungsfreie Verfügbarkeit der App, kann jedoch keine 100%ige Verfügbarkeit garantieren. Wartungsarbeiten, technische Störungen oder Ausfälle bei eingesetzten Drittanbietern (insbesondere Supabase, Google, OpenAI, RevenueCat, Resend) können zu vorübergehenden Einschränkungen führen.",
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
      "(6) Für Schäden, die durch Störungen, Ausfälle oder Datenverluste bei eingesetzten Drittanbietern (Supabase, Google, OpenAI, RevenueCat, Resend, Google Play) entstehen, haftet der Anbieter nur, soweit ihn ein eigenes Verschulden bei der Auswahl oder Überwachung dieser Dienstleister trifft.",
    ],
  },
  {
    heading: "§ 10 Datenschutz",
    paragraphs: [
      "Informationen zur Verarbeitung personenbezogener Daten im Rahmen der Nutzung der App ergeben sich aus der gesonderten Datenschutzerklärung, die in der App unter „Einstellungen → Datenschutzerklärung“ sowie online abrufbar ist.",
    ],
  },
  {
    heading: "§ 11 Vertragslaufzeit, Kündigung des Nutzungsvertrags, Account-Löschung",
    paragraphs: [
      "(1) Der Nutzungsvertrag über die kostenlose Testversion wird auf unbestimmte Zeit geschlossen und kann von beiden Seiten jederzeit ohne Einhaltung einer Frist gekündigt werden.",
      "(2) Kostenpflichtige Abonnements laufen für die gewählte Vertragslaufzeit (monatlich) und verlängern sich automatisch gemäß § 4 Abs. 2.",
      "(3) Der Nutzer kann sein Nutzerkonto jederzeit über die Funktion „Account löschen“ in den App-Einstellungen unwiderruflich löschen lassen. Mit der Löschung werden sämtliche zugehörigen Daten endgültig entfernt, auch Angebote und Rechnungen. Aufbewahrungspflichtige Unterlagen hat der Nutzer vorher selbst zu sichern (§ 5 Abs. 7 und 8); die App bietet dazu vor der Löschung den Export aller Jahre an.",
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
