import type { LegalSection } from "../legal";

/**
 * App-spezifische Rechtstexte für NOOK – übernommen aus
 * NOOK/docs/legal/{datenschutz,agb}.md (Stand: Juli 2026).
 *
 * Diese Fassungen ersetzen die generische Vorlage aus lib/legal.ts, die für
 * NOOK nur Platzhalter enthielt. Quelle bleibt das App-Repository: Änderungen
 * dort müssen hier nachgezogen werden.
 */

export const nookDatenschutz: LegalSection[] = [
  {
    heading: "§ 1 Verantwortlicher",
    list: [
      "SimplyNext",
      "Inhaber: Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Deutschland",
      "Telefon: +49 1743 389049",
      "E-Mail: info@simplynext.de",
      "Website: simplynext.de",
      "Umsatzsteuer-ID: DE463824630",
    ],
    afterList: [
      "Ein Datenschutzbeauftragter ist nicht gesetzlich vorgeschrieben, da keine umfangreiche Verarbeitung personenbezogener Daten als Kerntätigkeit stattfindet. Bei datenschutzrechtlichen Fragen wende dich direkt an die oben genannte E-Mail-Adresse.",
      "Zuständige Aufsichtsbehörde: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW), Lautenschlagerstraße 20, 70173 Stuttgart.",
    ],
  },
  {
    heading: "§ 2 Überblick der verarbeiteten Daten",
    table: {
      head: ["Datenkategorie", "Beispiele", "Rechtsgrundlage", "Pflicht"],
      rows: [
        ["Kontodaten", "E-Mail, Anzeigename, Sprache", "Art. 6 Abs. 1 lit. b DSGVO (Vertrag)", "Ja"],
        ["Reisedaten", "Reiseziel, Zeitraum, Interessen, Tagesplan", "Art. 6 Abs. 1 lit. b DSGVO (Vertrag)", "Für KI-Funktion"],
        ["Abonnement-Status", "Abo-Ablauf, freigeschaltete Inhalte", "Art. 6 Abs. 1 lit. b DSGVO (Vertrag)", "Ja"],
        ["Standortdaten", "GPS-Position, anonyme Anwesenheitsmeldung", "Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)", "Nein (opt-in)"],
        ["Kameradaten", "Live-Ansicht für Texterkennung (lokal)", "Art. 6 Abs. 1 lit. b DSGVO (Vertrag)", "Nein (opt-in)"],
        ["Stampbook / Gamification", "Besuchte Orte (Place-ID + Zeitstempel)", "Art. 6 Abs. 1 lit. b DSGVO (Vertrag)", "Nein"],
        ["Gruppenausgaben", "Betrag, Beschreibung, Zahler-ID", "Art. 6 Abs. 1 lit. b DSGVO (Vertrag)", "Nein"],
        ["Absturz-Daten (Sentry)", "Gerätedaten, Stacktrace, App-Version", "Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)", "Nein (deaktivierbar)"],
      ],
    },
    afterList: [
      "Nicht erhoben: Mikrofon-Aufnahmen, gespeicherte Fotos, Kontakte, Kalender, biometrische Daten, Werbe-IDs. Eine Weitergabe an Werbetreibende findet nicht statt.",
    ],
  },
  {
    heading: "§ 3 Registrierung & Konto",
    paragraphs: [
      "Für die Nutzung der NOOK-App ist eine Registrierung erforderlich. Dabei werden folgende Daten erhoben und in der Datenbank unseres Dienstleisters Supabase gespeichert:",
    ],
    list: [
      "E-Mail-Adresse – für Login und Kontokommunikation",
      "Passwort – ausschließlich als kryptografischer Hash (Bcrypt), niemals im Klartext",
      "Anzeigename – von dir frei wählbar",
      "Bevorzugte Sprache – automatisch aus Geräteeinstellungen übernommen, änderbar",
      "Abonnement-Status – Aktivierung, Ablaufdatum und freigeschaltete Inhalte",
    ],
    afterList: [
      "Alternativ ist eine Anmeldung über Google Sign-In oder Apple Sign-In (Sign in with Apple) möglich. In diesem Fall übermittelt der jeweilige Anbieter Name und E-Mail-Adresse. Wir erhalten keinen Zugriff auf dein Google- oder Apple-Passwort.",
    ],
  },
  {
    heading: "Speicherdauer",
    level: 3,
    paragraphs: [
      "Kontodaten werden bis zur Löschung des Accounts gespeichert. Eine Löschung kannst du jederzeit unter Einstellungen → Profil → Konto löschen veranlassen oder per E-Mail an info@simplynext.de beantragen. Nach Löschung werden alle personenbezogenen Daten innerhalb von 30 Tagen unwiderruflich entfernt.",
    ],
  },
  {
    heading: "§ 4 Standortdaten",
    paragraphs: [
      "Die App greift auf deinen Standort ausschließlich nach ausdrücklicher Einwilligung zu (Opt-in beim ersten Starten). Du kannst die Einwilligung jederzeit im Profil oder in den Android-Systemeinstellungen widerrufen.",
      "Dein Standort wird für folgende Zwecke genutzt:",
    ],
    list: [
      "Kartenanzeige: Deine Position wird lokal auf dem Gerät verarbeitet und nicht an unsere Server übermittelt oder gespeichert.",
      "Stampbook (Stempel sammeln): Zum Einlösen eines Stempels wird deine GPS-Position einmalig mit den Koordinaten des Ortes verglichen (Radius: 50 m). Diese Prüfung erfolgt auf dem Gerät; die genaue Position wird nicht dauerhaft gespeichert.",
      "Anonymes Crowd-Reporting: Mit deiner Einwilligung wird übermittelt, dass du dich in der Nähe einer Sehenswürdigkeit befindest – in Form von Orts-ID + Wochentag + Uhrzeit, ohne Nutzer-ID. Diese Meldung ist technisch nicht auf dich zurückführbar und daher anonym im Sinne der DSGVO.",
    ],
    afterList: [
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Widerruf: jederzeit ohne Angabe von Gründen über den Profil-Screen der App oder die Systemeinstellungen.",
    ],
  },
  {
    heading: "§ 5 Kamera & Smart Scanner",
    paragraphs: [
      "Die Kamera wird ausschließlich für den Smart Scanner genutzt, der Speisekarten und Beschilderungen erkennt. Der Zugriff erfolgt als Live-Ansicht; Fotos oder Videos werden weder gespeichert noch hochgeladen.",
      "Die Texterkennung erfolgt vollständig auf dem Gerät (Google ML Kit Text Recognition – kein Server-Call). Nur der erkannte Textinhalt wird anschließend zur inhaltlichen Analyse an unsere serverseitige KI-Schnittstelle (Supabase Edge Function → Google Gemini API) übermittelt. Dabei werden keine personenbezogenen Daten mitgesendet.",
    ],
  },
  {
    heading: "§ 6 Drittanbieter & Auftragsverarbeitung",
  },
  {
    heading: "6.1 Supabase (Datenbank, Auth, Dateispeicher)",
    level: 3,
    paragraphs: [
      "Kerninfrastruktur der App. Alle Kontodaten, Reisepläne, Ausgaben und Stampbook-Einträge werden in der Supabase-Datenbank gespeichert. Audio-Guides werden in Supabase Storage abgelegt.",
    ],
    table: {
      head: ["Angabe", "Wert"],
      rows: [
        ["Anbieter", "Supabase Inc., 970 Trestle Glen Rd, Oakland, CA 94610, USA"],
        ["Serverstandort", "EU (Frankfurt / AWS eu-central-1)"],
        ["Datenschutz", "supabase.com/privacy"],
        ["AVV", "Erforderlich; von Supabase als DPA abrufbar"],
        ["Drittland-Transfer", "Standardvertragsklauseln (SCC) gem. Art. 46 DSGVO"],
      ],
    },
  },
  {
    heading: "6.2 Google LLC (Maps, KI, ML Kit, Directions)",
    level: 3,
    paragraphs: [
      "Google Maps SDK for Android wird für die interaktive Karte im Explorer-Screen verwendet. Dabei können Geräte-Kennungen und Map-Tile-Anfragen an Google übermittelt werden.",
      "Google Gemini API wird ausschließlich serverseitig über Supabase Edge Functions aufgerufen – niemals direkt vom Gerät. Verarbeitete Inhalte: Reiseziel und -zeitraum (Routenplanung), Guide-Skripttexte (Text-to-Speech), erkannter Menütext (Scanner), freigeteilter Social-Post-Text (Zazu-Assistent). Eine Nutzer-ID wird dabei nicht an Google übermittelt.",
      "Google ML Kit Text Recognition läuft vollständig auf dem Gerät; keine Daten verlassen das Gerät.",
      "Google Maps Directions API wird serverseitig für ÖPNV-Verbindungen genutzt; übermittelt werden nur anonyme Start/Ziel-Koordinaten.",
    ],
    table: {
      head: ["Angabe", "Wert"],
      rows: [
        ["Anbieter", "Google LLC, 1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA"],
        ["Datenschutz", "policies.google.com/privacy"],
        ["Drittland-Transfer", "SCC / Google Cloud DPA gem. Art. 46 DSGVO"],
      ],
    },
  },
  {
    heading: "6.3 BestTime API (Besucheraufkommen)",
    level: 3,
    paragraphs: [
      "Zur Anzeige des Live-Besucheraufkommens von Sehenswürdigkeiten nutzen wir serverseitig die BestTime API. Es werden nur anonyme Orts-IDs übermittelt; kein Personenbezug.",
    ],
    table: {
      head: ["Angabe", "Wert"],
      rows: [
        ["Anbieter", "BestTime.app B.V., Niederlande"],
        ["Datenschutz", "besttime.app/privacy"],
      ],
    },
  },
  {
    heading: "6.4 In-App-Käufe (Google Play & Apple App Store)",
    level: 3,
    paragraphs: [
      "Käufe und Abonnements werden vollständig über Google Play Billing bzw. den Apple App Store abgewickelt. NOOK verarbeitet keine Zahlungsdaten direkt. Kaufbelege werden ausschließlich serverseitig (Supabase Edge Function) bei Google bzw. Apple zur Verifizierung eingereicht. Die Datenschutzbestimmungen der jeweiligen Stores gelten.",
    ],
  },
  {
    heading: "6.5 Sentry (Crash-Reporting, optional)",
    level: 3,
    paragraphs: [
      "Zur Verbesserung der App-Stabilität verwenden wir optional Sentry. Sentry ist nur aktiv, wenn ein DSN-Schlüssel über die Build-Konfiguration bereitgestellt wird. Bei einem Absturz werden folgende Daten übermittelt: Gerätehersteller und -modell, Betriebssystem-Version, App-Version und Stacktrace. Keine persönlich identifizierbaren Daten werden bewusst erfasst.",
    ],
    table: {
      head: ["Angabe", "Wert"],
      rows: [
        ["Anbieter", "Functional Software Inc. (Sentry), 132 Hawthorne St, San Francisco, CA 94107, USA"],
        ["Datenschutz", "sentry.io/privacy"],
        ["Speicherdauer", "90 Tage"],
        ["AVV", "Erforderlich; von Sentry abrufbar"],
        ["Drittland-Transfer", "SCC gem. Art. 46 DSGVO"],
      ],
    },
    afterList: [
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Stabilität und Fehlerbehebung).",
    ],
  },
  {
    heading: "§ 7 Datenübermittlung in Drittländer",
    paragraphs: [
      "Einige der genannten Dienstleister (Supabase, Google, Sentry) haben ihren Sitz in den USA. Für Übermittlungen in Drittländer ohne angemessenes Datenschutzniveau stützen wir uns auf Standardvertragsklauseln (SCC) gemäß Art. 46 Abs. 2 lit. c DSGVO. Kopien der Klauseln sind auf Anfrage erhältlich.",
      "Soweit Supabase auf EU-Servern (Frankfurt) betrieben wird, findet für die in der Datenbank gespeicherten Daten keine Drittlandübermittlung statt.",
    ],
  },
  {
    heading: "§ 8 Deine Rechte",
    table: {
      head: ["Recht", "Grundlage", "Beschreibung"],
      rows: [
        ["Auskunft", "Art. 15 DSGVO", "Du kannst jederzeit Auskunft über die zu deiner Person gespeicherten Daten verlangen."],
        ["Berichtigung", "Art. 16 DSGVO", "Unrichtige oder unvollständige Daten werden auf deinen Antrag hin korrigiert."],
        ["Löschung", "Art. 17 DSGVO", "Du kannst die Löschung deiner personenbezogenen Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen."],
        ["Einschränkung", "Art. 18 DSGVO", "Du kannst die Einschränkung der Verarbeitung verlangen, z. B. während du die Richtigkeit der Daten bestreitest."],
        ["Datenportabilität", "Art. 20 DSGVO", "Du hast das Recht, deine Daten in einem maschinenlesbaren Format zu erhalten oder an einen anderen Anbieter übertragen zu lassen."],
        ["Widerspruch", "Art. 21 DSGVO", "Du kannst der Verarbeitung auf Basis berechtigter Interessen (z. B. Sentry) widersprechen."],
        ["Widerruf", "Art. 7 Abs. 3 DSGVO", "Einwilligungen (Standortdaten) können jederzeit für die Zukunft widerrufen werden, ohne dass die bisherige Verarbeitung berührt wird."],
        ["Beschwerde", "Art. 77 DSGVO", "Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, insbesondere in dem EU-Mitgliedstaat deines Wohnsitzes."],
      ],
    },
    afterList: [
      "Zur Ausübung deiner Rechte wende dich bitte an: info@simplynext.de. Wir bearbeiten deine Anfrage innerhalb von 30 Tagen.",
      "Zuständige Aufsichtsbehörde für SimplyNext (Sitz: Baden-Württemberg): Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW), Lautenschlagerstraße 20, 70173 Stuttgart. Eine Liste aller EU-Aufsichtsbehörden findest du unter edpb.europa.eu.",
    ],
  },
  {
    heading: "§ 9 Änderungen dieser Erklärung",
    paragraphs: [
      "Wir behalten uns vor, diese Datenschutzerklärung bei wesentlichen Änderungen der App oder der Rechtslage anzupassen. Wesentliche Änderungen werden dir über die App oder per E-Mail mitgeteilt. Das Datum der letzten Aktualisierung ist oben angegeben.",
    ],
  },
];

export const nookAgb: LegalSection[] = [
  {
    heading: "§ 1 Geltungsbereich",
    ordered: true,
    list: [
      "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der mobilen Applikation NOOK (nachfolgend „App“), die von SimplyNext, Inhaber Nuri Toker, Mechenseerstr. 12, 88316 Isny im Allgäu (nachfolgend „Anbieter“) bereitgestellt wird.",
      "Mit der Registrierung oder der erstmaligen Nutzung der App erklärt sich der Nutzer mit diesen AGB einverstanden.",
      "Abweichende Bedingungen des Nutzers werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.",
    ],
  },
  {
    heading: "§ 2 Leistungsbeschreibung",
    paragraphs: ["NOOK ist ein digitaler Reisebegleiter für europäische Städte. Die App bietet u. a. folgende Funktionen:"],
    list: [
      "KI-gestützte Reiseplanung (Tagesrouten, Sehenswürdigkeiten)",
      "Explorer mit interaktiver Karte und Echtzeit-Besucheraufkommen",
      "Audio-Guides für Sehenswürdigkeiten",
      "Smart Scanner zur Texterkennung von Speisekarten und Beschilderungen",
      "ÖPNV-Assistent für lokale Verkehrsverbindungen",
      "Gruppenbudget-Verwaltung",
      "Stampbook (Gamification/Stempelsammlung)",
      "Zazu-Assistent zur Social-Media-Analyse",
    ],
    afterList: [
      "Der Anbieter behält sich vor, den Funktionsumfang der App jederzeit zu erweitern, einzuschränken oder zu ändern, sofern dies dem Nutzer zumutbar ist.",
      "Für die Nutzung ist eine stabile Internetverbindung erforderlich. Einige Inhalte können offline genutzt werden, sofern sie zuvor heruntergeladen wurden.",
    ],
  },
  {
    heading: "§ 3 Registrierung & Nutzerkonto",
    ordered: true,
    list: [
      "Die Nutzung der App setzt eine Registrierung mit gültiger E-Mail-Adresse und Passwort voraus. Alternativ ist eine Anmeldung über Google Sign-In oder Sign in with Apple möglich.",
      "Der Nutzer ist verpflichtet, bei der Registrierung wahrheitsgemäße Angaben zu machen und seine Zugangsdaten vertraulich zu behandeln.",
      "Pro Person ist nur ein Nutzerkonto zulässig.",
      "Der Nutzer ist für alle Aktivitäten verantwortlich, die unter seinem Konto stattfinden.",
      "Der Nutzer kann sein Konto jederzeit unter Einstellungen → Profil → Konto löschen oder per E-Mail an info@simplynext.de löschen. Nach Löschung werden alle personenbezogenen Daten innerhalb von 30 Tagen entfernt.",
    ],
  },
  {
    heading: "§ 4 Nutzungsrechte & Lizenz",
    paragraphs: [
      "Der Anbieter gewährt dem Nutzer ein nicht ausschließliches, nicht übertragbares, widerrufliches Recht zur Nutzung der App für private, nicht-kommerzielle Zwecke.",
      "Es ist nicht gestattet:",
    ],
    list: [
      "die App zu dekompilieren, zu disassemblieren oder zurückzuentwickeln",
      "Inhalte der App zu vervielfältigen, zu verbreiten oder öffentlich zugänglich zu machen, soweit nicht ausdrücklich erlaubt",
      "die App für kommerzielle Zwecke Dritter einzusetzen",
      "Maßnahmen zu umgehen, die den Zugriff auf kostenpflichtige Inhalte beschränken",
    ],
    afterList: [
      "Alle Rechte an der App, ihren Inhalten und dem zugrunde liegenden Code verbleiben beim Anbieter oder den jeweiligen Lizenzgebern.",
    ],
  },
  {
    heading: "§ 5 In-App-Käufe & Abonnements",
    ordered: true,
    list: [
      "Bestimmte Funktionen der App sind nur mit einem kostenpflichtigen Abonnement zugänglich (NOOK Premium).",
      "Abonnements werden über Google Play Billing (Android) bzw. den Apple App Store (iOS) abgeschlossen und abgerechnet. Es gelten die Zahlungsbedingungen des jeweiligen Store-Betreibers.",
      "Abonnements verlängern sich automatisch um den vereinbarten Zeitraum, sofern sie nicht mindestens 24 Stunden vor Ablauf der Laufzeit im jeweiligen Store-Konto gekündigt werden.",
      "Widerrufsrecht: Für digitale Inhalte, die sofort nach Kauf bereitgestellt werden und deren Bereitstellung der Nutzer ausdrücklich vor Ablauf der Widerrufsfrist bestätigt hat, erlischt das Widerrufsrecht gemäß § 356 Abs. 5 BGB.",
      "Preisänderungen werden dem Nutzer mindestens 30 Tage vor Inkrafttreten per App-Benachrichtigung oder E-Mail mitgeteilt. Die Weiternutzung nach Inkrafttreten gilt als Zustimmung.",
    ],
  },
  {
    heading: "§ 6 Pflichten des Nutzers",
    paragraphs: [
      "Der Nutzer verpflichtet sich, die App nur in Übereinstimmung mit diesen AGB und geltendem Recht zu nutzen.",
      "Insbesondere ist es verboten:",
    ],
    list: [
      "falsche oder irreführende Informationen einzugeben",
      "die App zur Verbreitung illegaler, beleidigender oder schädlicher Inhalte zu nutzen",
      "automatisierte Abfragen (Bots, Scraper) ohne ausdrückliche Genehmigung durchzuführen",
      "die technische Infrastruktur der App zu beeinträchtigen",
    ],
    afterList: [
      "Bei Verstößen ist der Anbieter berechtigt, das Nutzerkonto ohne Vorankündigung zu sperren oder zu löschen.",
    ],
  },
  {
    heading: "§ 7 Verfügbarkeit & Gewährleistung",
    ordered: true,
    list: [
      "Der Anbieter strebt eine hohe Verfügbarkeit der App an, kann jedoch keine ununterbrochene Verfügbarkeit garantieren. Geplante Wartungsarbeiten werden, soweit möglich, vorab angekündigt.",
      "Die App wird in der jeweils aktuellen Version bereitgestellt. Der Nutzer ist für die Installation verfügbarer Updates verantwortlich.",
      "KI-generierte Inhalte (Reisepläne, Audio-Guides, Empfehlungen) sind Vorschläge ohne Gewähr auf Richtigkeit, Vollständigkeit oder Aktualität. Der Nutzer trifft seine Reiseentscheidungen eigenverantwortlich.",
      "Echtzeit-Informationen (Besucheraufkommen, ÖPNV-Verbindungen) werden von Drittanbietern bezogen und können von der tatsächlichen Lage abweichen.",
    ],
  },
  {
    heading: "§ 8 Haftungsbeschränkung",
    ordered: true,
    list: [
      "Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für vorsätzliche oder grob fahrlässige Pflichtverletzungen.",
      "Im Übrigen ist die Haftung des Anbieters auf vorhersehbare, vertragstypische Schäden beschränkt, sofern eine wesentliche Vertragspflicht (Kardinalpflicht) verletzt wurde.",
      "Für leicht fahrlässige Verletzungen von Nebenpflichten haftet der Anbieter nicht.",
      "Der Anbieter haftet nicht für Schäden, die durch unsachgemäße Nutzung der App, fehlerhafte Gerätekonfiguration oder Drittanbieter-Dienste (Google Maps, Supabase etc.) entstehen.",
      "Für Reiseentscheidungen, die der Nutzer auf Basis der App-Empfehlungen trifft, übernimmt der Anbieter keine Haftung.",
    ],
  },
  {
    heading: "§ 9 Laufzeit & Kündigung",
    ordered: true,
    list: [
      "Das Nutzungsverhältnis für die kostenlose Basisnutzung läuft auf unbestimmte Zeit und kann vom Nutzer jederzeit durch Löschung des Kontos beendet werden.",
      "Abonnements laufen für den jeweils gewählten Zeitraum (monatlich/jährlich) und verlängern sich automatisch, sofern sie nicht rechtzeitig gekündigt werden (vgl. § 5).",
      "Der Anbieter kann das Nutzungsverhältnis außerordentlich kündigen, wenn der Nutzer gegen diese AGB verstößt.",
      "Mit Beendigung des Nutzungsverhältnisses erlischt das in § 4 gewährte Nutzungsrecht.",
    ],
  },
  {
    heading: "§ 10 Änderungen der AGB",
    ordered: true,
    list: [
      "Der Anbieter behält sich vor, diese AGB bei sachlichem Grund (z. B. Gesetzesänderungen, neue Funktionen, Preisänderungen) anzupassen.",
      "Wesentliche Änderungen werden dem Nutzer mindestens 30 Tage vor Inkrafttreten per App-Benachrichtigung oder E-Mail mitgeteilt.",
      "Widerspricht der Nutzer den geänderten AGB nicht innerhalb von 30 Tagen nach Mitteilung, gelten die neuen AGB als akzeptiert. Auf dieses Widerspruchsrecht wird der Anbieter in der Mitteilung gesondert hinweisen.",
      "Bei Widerspruch ist der Anbieter berechtigt, das Nutzungsverhältnis zum Zeitpunkt des Inkrafttretens der geänderten AGB zu kündigen.",
    ],
  },
  {
    heading: "§ 11 Datenschutz",
    paragraphs: [
      "Die Verarbeitung personenbezogener Daten erfolgt gemäß der gesonderten Datenschutzerklärung, die auf der Website des Anbieters abrufbar ist. Die Datenschutzerklärung ist Bestandteil dieser AGB.",
    ],
  },
  {
    heading: "§ 12 Anwendbares Recht & Gerichtsstand",
    ordered: true,
    list: [
      "Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).",
      "Ist der Nutzer Verbraucher mit Wohnsitz in der EU, bleiben die zwingenden Verbraucherschutzvorschriften seines Wohnsitzstaates unberührt.",
      "Gerichtsstand für Streitigkeiten mit Kaufleuten oder juristischen Personen des öffentlichen Rechts ist Isny im Allgäu.",
    ],
  },
  {
    heading: "§ 13 Streitbeilegung",
    paragraphs: [
      "Der Anbieter ist nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, sofern dies nicht gesetzlich vorgeschrieben ist.",
    ],
  },
  {
    heading: "§ 14 Schlussbestimmungen",
    ordered: true,
    list: [
      "Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt. Die unwirksame Bestimmung wird durch eine wirksame ersetzt, die dem wirtschaftlichen Zweck der unwirksamen Regelung am nächsten kommt.",
      "Nebenabreden, Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.",
    ],
  },
];
