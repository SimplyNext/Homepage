import type { LegalSection } from "../legal";

/**
 * App-spezifische Rechtstexte für WeFixIt – übernommen aus
 * wefixit/legal-pages/{privacy,terms}.md (Stand: September 2026).
 *
 * Quelle bleibt das Markdown-Dokument im App-Repository: Änderungen dort
 * müssen hier nachgezogen werden. Erzeugt mit einem Konverter, der
 * Überschriften, Absätze, Listen und Tabellen auf LegalSection abbildet;
 * das Inhaltsverzeichnis der Vorlage entfällt.
 */

export const wefixitDatenschutz: LegalSection[] = [
  {
    heading: "1. Verantwortlicher",
    paragraphs: [
      "SimplyNext",
      "Inhaber: Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Deutschland",
      "Telefon: 01743389049",
      "E-Mail: info@simplynext.de",
      "Ein betrieblicher Datenschutzbeauftragter ist aufgrund der Betriebsgröße nicht gesetzlich vorgeschrieben und wurde nicht bestellt. Für alle Datenschutzanfragen ist der oben genannte Verantwortliche direkt zuständig.",
    ],
  },
  {
    heading: "2. Ihre Rechte auf einen Blick",
    paragraphs: [
      "Ihnen stehen nach der Datenschutz-Grundverordnung (DSGVO) gegenüber uns folgende Rechte bezüglich der Sie betreffenden personenbezogenen Daten zu:",
    ],
    list: [
      "Auskunftsrecht (Art. 15 DSGVO) über die von uns verarbeiteten Daten",
      "Recht auf Berichtigung (Art. 16 DSGVO) unrichtiger Daten",
      "Recht auf Löschung (Art. 17 DSGVO)",
      "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
      "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
      "Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)",
      "Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO) mit Wirkung für die Zukunft",
      "Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO) — zuständig ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg",
    ],
    afterList: [
      "Zur Ausübung dieser Rechte genügt eine E-Mail an info@simplynext.de. Für die Löschung Ihres Kontos steht Ihnen zusätzlich ein direkter In-App-Weg zur Verfügung (siehe Abschnitt 18).",
    ],
  },
  {
    heading: "3. Allgemeines zur Datenverarbeitung",
    paragraphs: [
      "Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen App sowie unserer Inhalte und Leistungen erforderlich ist. Rechtsgrundlage hierfür ist regelmäßig Art. 6 Abs. 1 lit. b DSGVO (Erfüllung eines Vertrags bzw. vorvertragliche Maßnahmen), für optionale KI-Funktionen zusätzlich Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), die Sie vor der ersten Nutzung einer KI-Funktion in einem gesonderten Einwilligungsdialog erteilen und jederzeit mit Wirkung für die Zukunft widerrufen können (siehe Abschnitt 7).",
    ],
  },
  {
    heading: "4. Registrierung und Konto",
    paragraphs: [
      "Zur Nutzung der App ist die Erstellung eines Kontos erforderlich. Dabei erheben wir:",
    ],
    list: [
      "E-Mail-Adresse",
      "Passwort (wird ausschließlich verschlüsselt/gehasht gespeichert, niemals im Klartext)",
    ],
    afterList: [
      "Die Authentifizierung erfolgt über unseren Backend-Dienstleister Supabase (siehe Abschnitt 14). Optional können Sie zusätzlich einen Anzeigenamen und ein Profilbild hinterlegen. Bestätigungs-E-Mails, E-Mails zum Zurücksetzen des Passworts und sonstige kontobezogene System-E-Mails versenden wir über den E-Mail-Versanddienst Resend (Resend, Inc., USA) als Auftragsverarbeiter; dabei werden Ihre E-Mail-Adresse und der Inhalt der jeweiligen E-Mail verarbeitet.",
    ],
  },
  {
    heading: "5. Von Ihnen eingegebene Fahrzeug-, Kosten- und Wartungsdaten",
    paragraphs: [
      "Zur Kernfunktion der App gehört die freiwillige Eingabe folgender Daten durch Sie:",
    ],
    list: [
      "Fahrzeugdaten: Herstellerschlüsselnummer (HSN), Typschlüsselnummer (TSN), Fahrgestellnummer (FIN/VIN), Kilometerstand",
      "Diagnosedaten: ausgelesene OBD2-Fehlercodes und deren Verlauf",
      "Kostendaten: von Ihnen erfasste Wartungs- und Reparaturkosten samt Kategorie",
      "Wartungserinnerungen: von Ihnen angelegte Termine (z. B. nächster Ölwechsel)",
      "Feedback-Daten: freiwillige Rückmeldungen zu Reparaturanleitungen oder Fehlercode-Analysen",
    ],
    afterList: [
      "Diese Daten sind ausschließlich für Sie selbst einsehbar (technisch abgesichert durch Row-Level-Security in unserer Datenbank) und werden nicht an andere Nutzer weitergegeben oder öffentlich angezeigt.",
    ],
  },
  {
    heading: "6. Fotos und Datei-Uploads",
    paragraphs: [
      "Sie können optional Fahrzeugfotos und ein Profilbild hochladen sowie in Ask Toni ein Foto anhängen. Fahrzeug- und Profilbilder wählen Sie aus Ihrer Foto-Galerie aus. In Ask Toni können Sie ein Foto zusätzlich direkt mit der Kamera aufnehmen; die Kamera wird nur geöffnet, wenn Sie „Foto aufnehmen“ aktiv auswählen, und nur mit der Kamera-Berechtigung, die Sie im Betriebssystem erteilen. Fahrzeug- und Profilbilder werden verschlüsselt in einem privaten Cloud-Speicher (Supabase Storage) abgelegt, der nur für Ihr eigenes Konto zugänglich ist. Fotos in Ask Toni werden zur Beantwortung Ihrer Frage an die KI-Dienste übermittelt (siehe Abschnitt 7) und zusammen mit dem Chatverlauf in Ihrem Konto gespeichert, bis Sie den Chat löschen, spätestens jedoch nach sechs Monaten.",
    ],
  },
  {
    heading: "7. KI-Funktionen (Ask Toni, KI-Diagnose, Teilenummern-Suche)",
    paragraphs: [
      "Die App bietet KI-gestützte Funktionen zur Fehlerdiagnose und einen Chat-Assistenten („Ask Toni\"). Bei Nutzung dieser Funktionen werden folgende Daten zur Analyse an externe KI-Anbieter übermittelt: Fehlercodes, Ihr Chat-Text, technische Fahrzeugdaten (z. B. Marke, Modell, Motor, Kilometerstand und Fahrzeug-Identifizierungsnummer/FIN — soweit Sie die Weitergabe für Ihr Fahrzeug erlaubt haben) sowie — falls Sie ein Foto anhängen oder aufnehmen — das Foto.",
    ],
    table: {
      head: ["Anbieter", "Funktion", "Übermittelte Daten"],
      rows: [
        ["Google Gemini API", "Primäre KI für Diagnose & Chat (inkl. Bildanalyse)", "Fehlercodes, Fahrzeugdaten, Chat-Text, optional Bilder"],
        ["OpenAI (GPT-Modelle)", "Fallback-KI, falls Gemini nicht antwortet", "Fehlercodes, Fahrzeugdaten, Chat-Text, optional Bilder"],
        ["Perplexity AI", "Recherche zu Ersatzteilnummern auf Ihre Anfrage in Ask Toni", "Bauteil-/Fahrzeugkontext der Anfrage"],
      ],
    },
    afterList: [
      "Für die Ersatzteil-Recherche nutzt Gemini zusätzlich die Google-Suche („Grounding with Google Search\"). Dabei wird eine aus Ihrer Anfrage abgeleitete Suchanfrage (z. B. Fahrzeugmodell und Bauteil) an Google übermittelt.",
      "Es werden dabei keine direkt identifizierenden Daten wie Name, Anschrift oder E-Mail-Adresse an diese KI-Dienste übermittelt. Die Fahrzeug-Identifizierungsnummer (FIN) kann jedoch einen Personenbezug ermöglichen; sie wird nur übermittelt, wenn Sie die Weitergabe von Fahrzeugdaten für Ihr Fahrzeug erlaubt haben. Nach Angaben der Anbieter werden über deren kostenpflichtige Programmierschnittstellen (APIs) übermittelte Daten nicht zum Training ihrer KI-Modelle verwendet.",
      "Einwilligung und Widerruf: Die KI-Funktionen nutzen wir nur auf Grundlage Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie vor der ersten Nutzung einer KI-Funktion in einem gesonderten Dialog erteilen. Zeitpunkt und Version Ihrer Einwilligung speichern wir in Ihrem Konto, um sie nachweisen zu können (Art. 7 Abs. 1 DSGVO). Sie können die Einwilligung jederzeit unter Einstellungen → Datenschutz & Einwilligungen → KI-Verarbeitung widerrufen. Danach stehen Ask Toni, die KI-Diagnose und KI-Reparaturanleitungen nicht mehr zur Verfügung, bis Sie sie wieder aktivieren; alle übrigen Funktionen der App bleiben nutzbar. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.",
      "Hinweis: Antworten der KI-Funktionen werden automatisiert generiert und können Fehler enthalten (in der App entsprechend gekennzeichnet). Für sicherheitsrelevante Reparaturen empfehlen wir, zusätzlich einen Fachbetrieb zu konsultieren. Teilenummern werden ohne Gewähr angezeigt.",
    ],
  },
  {
    heading: "8. Caching-Infrastruktur",
    paragraphs: [
      "Zur Beschleunigung wiederkehrender Diagnoseanfragen setzen wir einen Zwischenspeicher (Upstash Redis) ein. Dort werden Diagnoseergebnisse ausschließlich unter dem Schlüssel „Fehlercode + Sprache\" zwischengespeichert — ohne jeglichen Bezug zu Ihrem Konto oder Ihrer Person. Ein Rückschluss auf einzelne Nutzer ist über diesen Cache nicht möglich.",
    ],
  },
  {
    heading: "9. Zahlungen, Abonnements und Credits",
    paragraphs: [
      "Für kostenpflichtige Abonnements und Credit-Käufe nutzen wir den Dienstleister RevenueCat zur Verwaltung von Kaufvorgängen sowie Google Play Billing zur eigentlichen Zahlungsabwicklung. An RevenueCat wird ausschließlich eine pseudonyme, zufällig generierte Konto-ID übermittelt — keine E-Mail-Adresse und keine Zahlungsdaten. Ihre tatsächlichen Zahlungsdaten (Kreditkarte, Google-Konto etc.) verbleiben vollständig bei Google und werden von uns zu keinem Zeitpunkt eingesehen oder gespeichert.",
    ],
  },
  {
    heading: "10. Werbung (Google AdMob)",
    paragraphs: [
      "Die App bietet optionale, freiwillige Werbevideos („Rewarded Ads“) über Google AdMob (Google Ireland Limited) an, mit denen Sie zusätzliche Credits erhalten können. Werbung wird nur geladen, wenn Sie aktiv ein Werbevideo ansehen möchten. Soweit gesetzlich erforderlich (z. B. im Europäischen Wirtschaftsraum), holen wir vorher über die Einwilligungsplattform von Google (User Messaging Platform nach dem IAB Transparency & Consent Framework) Ihre Einwilligung ein; dort entscheiden Sie auch, ob Werbung personalisiert werden darf. AdMob kann dabei eine geräteseitige Werbekennung (Android Advertising ID bzw. Apple IDFA) sowie Interaktionsdaten mit der Anzeige verarbeiten, um Werbung auszuspielen, zu messen und abzurechnen. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Ihre Auswahl können Sie jederzeit unter Einstellungen → Datenschutz & Einwilligungen → Datenschutzoptionen für Werbung ändern oder widerrufen. Die Nutzung der Werbefunktion ist freiwillig.",
    ],
  },
  {
    heading: "11. Push-Benachrichtigungen und Erinnerungen",
    paragraphs: [
      "Wartungserinnerungen werden ausschließlich lokal auf Ihrem Gerät geplant und angezeigt (über die Android-/iOS-Systemfunktionen für Termin-Benachrichtigungen). Es kommt kein externer Push-Dienst wie Firebase Cloud Messaging zum Einsatz; Ihre Erinnerungsdaten verlassen hierfür Ihr Gerät nicht. Die Berechtigung für Benachrichtigungen fragen wir erst an, wenn Sie eine Erinnerung anlegen oder Benachrichtigungen in den Einstellungen einschalten; Sie können sie jederzeit in den Systemeinstellungen Ihres Geräts entziehen.",
    ],
  },
  {
    heading: "12. Bluetooth- und Standortberechtigung",
    paragraphs: [
      "Zur Verbindung mit Ihrem OBD2-Diagnoseadapter benötigt die App Bluetooth-Berechtigungen. Ältere Android-Versionen verlangen aus systemtechnischen Gründen zusätzlich die Berechtigung „Standort\", damit eine Bluetooth-Gerätesuche überhaupt durchgeführt werden kann. Ihr tatsächlicher Standort wird dabei zu keinem Zeitpunkt ausgelesen, gespeichert oder übertragen — die Berechtigung dient rein der technischen Freischaltung der Bluetooth-Suche durch das Betriebssystem. Die Berechtigungen werden erst angefragt, wenn Sie die Suche nach einem Adapter starten.",
    ],
  },
  {
    heading: "13. Kamera, Mikrofon, Tracking und Analyse-Tools",
    list: [
      "Kamera: wird nur genutzt, wenn Sie in Ask Toni aktiv „Foto aufnehmen“ wählen (siehe Abschnitt 6); die Berechtigung fragt das Betriebssystem bei der ersten Nutzung ab",
      "Mikrofon: wird von der App nicht genutzt und nicht angefragt",
      "Tracking/Analyse-Tools: Wir setzen keine Analyse- oder Tracking-Dienste wie Firebase Analytics, Firebase Crashlytics, Google Analytics, Meta/Facebook SDK, Mixpanel oder Amplitude ein",
      "Cookies: Als native mobile Anwendung verwendet die App keine Cookies",
    ],
  },
  {
    heading: "14. Alle eingesetzten Dienstleister im Überblick",
    table: {
      head: ["Dienstleister", "Zweck", "Kategorie", "Sitz / Region"],
      rows: [
        ["Supabase (Supabase Pte. Ltd., Singapur)", "Datenbank, Authentifizierung, Datei-Speicher, Server-Funktionen (Backend-Infrastruktur der gesamten App)", "Auftragsverarbeiter (Art. 28 DSGVO), Auftragsverarbeitungsvertrag geschlossen", "Datenhaltung EU (Frankfurt); Unterauftragsverarbeiter u. a. in den USA"],
        ["Google Gemini API", "KI-gestützte Diagnose & Chat", "Auftragsverarbeiter", "USA"],
        ["OpenAI", "KI-Fallback für Diagnose & Chat", "Auftragsverarbeiter", "USA"],
        ["Perplexity AI", "Ersatzteilnummern-Recherche", "Auftragsverarbeiter", "USA"],
        ["Upstash (Redis)", "Anonymer Zwischenspeicher für Diagnoseergebnisse", "Auftragsverarbeiter", "USA/EU (Edge-Infrastruktur)"],
        ["RevenueCat", "Verwaltung von Abonnements & Käufen (pseudonyme Konto-ID)", "Auftragsverarbeiter", "USA"],
        ["Resend (Resend, Inc.)", "Versand von System-E-Mails (Bestätigung, Passwort zurücksetzen)", "Auftragsverarbeiter", "USA"],
        ["Google Play Billing", "Zahlungsabwicklung für Abos/Credits", "Eigenständig Verantwortlicher (Google)", "USA/global"],
        ["Google AdMob (Google Ireland Limited)", "Freiwillige Rewarded-Video-Werbung inkl. Einwilligungsverwaltung (User Messaging Platform)", "Eigenständig Verantwortlicher (Google) bzw. Auftragsverarbeiter je nach Konfiguration", "EU/USA"],
      ],
    },
  },
  {
    heading: "15. Datenübermittlung in Drittländer",
    paragraphs: [
      "Ein Teil der oben genannten Dienstleister (Google, OpenAI, Perplexity, RevenueCat, Resend) hat seinen Sitz bzw. Serverstandorte in den USA, einem Drittland im Sinne der DSGVO. Unser Backend-Dienstleister Supabase hat seinen Sitz in Singapur und setzt Unterauftragsverarbeiter u. a. in den USA ein; Ihre Daten werden dabei in der EU (Frankfurt) gespeichert. Die Übermittlung personenbezogener Daten dorthin erfolgt auf Grundlage von EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO) und/oder — soweit vom jeweiligen Anbieter zertifiziert — auf Grundlage eines Angemessenheitsbeschlusses im Rahmen des EU-US Data Privacy Framework. Den aktuellen Zertifizierungsstatus des jeweiligen Anbieters können Sie auf dessen Website einsehen.",
    ],
  },
  {
    heading: "16. Speicherdauer und gesetzliche Aufbewahrungspflichten",
    paragraphs: [
      "Ihre Daten werden grundsätzlich gespeichert, solange Ihr Konto besteht. Nach Löschung Ihres Kontos werden alle personenbezogenen Daten unverzüglich und unwiderruflich entfernt (siehe Abschnitt 18).",
      "Hiervon ausgenommen sind Daten, die wir aufgrund gesetzlicher Aufbewahrungspflichten (z. B. steuer- und handelsrechtliche Vorgaben nach § 147 AO, § 257 HGB für abrechnungsrelevante Kaufbelege, regelmäßig 6–10 Jahre) über die Kontolöschung hinaus vorhalten müssen. Diese Daten werden ausschließlich zu diesem Zweck gesperrt gespeichert und nicht anderweitig verarbeitet.",
    ],
  },
  {
    heading: "17. Datensicherheit",
    paragraphs: [
      "Alle Datenübertragungen zwischen der App und unseren Servern erfolgen verschlüsselt (TLS). Der Zugriff auf Ihre Daten in unserer Datenbank ist durch zeilenbasierte Zugriffskontrollen (Row-Level-Security) technisch auf Ihr eigenes Konto beschränkt.",
    ],
  },
  {
    heading: "18. Konto und Daten löschen",
    paragraphs: [
      "Sie können Ihr Konto jederzeit direkt in der App unter Einstellungen → Konto & Daten löschen vollständig und unwiderruflich löschen. Dabei werden sämtliche mit Ihrem Konto verknüpften Daten entfernt: Fahrzeuge, Kostendaten, Wartungstermine, Chatverläufe, Fehlercode-Historie, Fotos und Profildaten.",
      "Falls Sie die App bereits deinstalliert haben, können Sie die Löschung auch hier anfordern: Kontolöschung online beantragen (www.simplynext.de/de/apps/wefixit/konto-loeschen)",
    ],
  },
  {
    heading: "19. Minderjährige",
    paragraphs: [
      "Die App richtet sich inhaltlich und funktional nicht gezielt an Kinder. Personen unter 16 Jahren sollten die App nur mit Zustimmung eines Erziehungsberechtigten nutzen.",
    ],
  },
  {
    heading: "20. Änderungen dieser Erklärung",
    paragraphs: [
      "Wir passen diese Datenschutzerklärung an, sobald sich unsere Datenverarbeitung, die eingesetzten Dienstleister oder die Rechtslage ändern. Die jeweils aktuelle Version ist stets unter dieser URL sowie in der App abrufbar.",
    ],
  },
  {
    heading: "21. Kontakt",
    paragraphs: [
      "Bei Fragen zum Datenschutz erreichen Sie uns unter info@simplynext.de oder telefonisch unter 01743389049.",
    ],
  },
];

export const wefixitAgb: LegalSection[] = [
  {
    heading: "1. Anbieter und Geltungsbereich",
    paragraphs: [
      "SimplyNext",
      "Inhaber: Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Deutschland",
      "Telefon: 01743389049",
      "E-Mail: info@simplynext.de",
      "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der mobilen Anwendung „WeFixIt\" (im Folgenden „App\") durch Verbraucher im Sinne des § 13 BGB. Mit der Registrierung eines Nutzerkontos und/oder der Nutzung kostenpflichtiger Zusatzfunktionen erkennen Sie diese AGB an.",
    ],
  },
  {
    heading: "2. Leistungsbeschreibung",
    paragraphs: [
      "Die App bietet folgende Funktionen:",
    ],
    list: [
      "Auslesen und Verwalten von OBD2-Fehlercodes über einen Bluetooth-Adapter",
      "KI-gestützte Fehlerdiagnose und Chat-Assistent („Ask Toni\")",
      "Verwaltung von Fahrzeug-, Kosten- und Wartungsdaten",
      "Erstellung lokaler Wartungserinnerungen",
    ],
    afterList: [
      "Ein Basisumfang der App ist kostenlos nutzbar. Erweiterte Funktionen und zusätzliche KI-Anfragen (Credits) sind kostenpflichtig und werden über Abonnements bzw. Einmalkäufe freigeschaltet (siehe Abschnitt 4).",
    ],
  },
  {
    heading: "3. Registrierung und Nutzerkonto",
    paragraphs: [
      "Zur Nutzung der App ist die Erstellung eines Nutzerkontos mit E-Mail-Adresse und Passwort erforderlich. Sie sind verpflichtet, bei der Registrierung wahrheitsgemäße Angaben zu machen und Ihre Zugangsdaten geheim zu halten. Die Nutzung der App ist Personen ab 16 Jahren gestattet; jüngere Nutzer benötigen die Zustimmung eines Erziehungsberechtigten.",
    ],
  },
  {
    heading: "4. Kostenpflichtige Leistungen (Abonnements & Credits)",
    paragraphs: [
      "Folgende kostenpflichtige Leistungen werden angeboten:",
    ],
    table: {
      head: ["Leistung", "Art", "Laufzeit / Umfang"],
      rows: [
        ["WeFixIt Pro (monatlich)", "Abonnement, automatische Verlängerung", "1 Monat, danach automatische Verlängerung bis Kündigung"],
        ["WeFixIt Pro (jährlich)", "Abonnement, automatische Verlängerung", "12 Monate, danach automatische Verlängerung bis Kündigung"],
        ["WeFixIt Lifetime", "Einmalkauf, unbefristet", "Einmalig, keine automatische Verlängerung"],
        ["Credit-Pakete (5 / 10 / 25 Credits)", "Einmalkauf", "Verbrauchsabhängig, kein Ablaufdatum der bereits gutgeschriebenen Credits"],
      ],
    },
    afterList: [
      "Die jeweils aktuellen Preise werden Ihnen vor Kaufabschluss transparent über die Google-Play-Kaufoberfläche angezeigt. Abonnements verlängern sich automatisch um den jeweiligen Zeitraum, sofern sie nicht rechtzeitig vor Ablauf gekündigt werden. Die Kündigung erfolgt direkt über die Google-Play-Kontoeinstellungen Ihres Geräts, nicht über die App selbst.",
    ],
  },
  {
    heading: "5. Zahlungsabwicklung über Google Play",
    paragraphs: [
      "Sämtliche Zahlungen werden ausschließlich über Google Play Billing abgewickelt. Wir selbst erhalten und speichern zu keinem Zeitpunkt Ihre Zahlungsdaten (Kreditkarte, Kontodaten etc.). Für die Zahlungsabwicklung gelten zusätzlich die Nutzungsbedingungen von Google Play. Zur Verwaltung von Abonnement- und Kaufstatus setzen wir den Dienstleister RevenueCat ein, dem hierfür ausschließlich eine pseudonyme Konto-ID übermittelt wird (siehe Datenschutzerklärung).",
    ],
  },
  {
    heading: "6. Widerrufsrecht bei digitalen Inhalten",
    paragraphs: [
      "Verbrauchern steht grundsätzlich ein 14-tägiges Widerrufsrecht nach § 355 BGB zu. Bei digitalen Inhalten, die nicht auf einem körperlichen Datenträger geliefert werden (wie Abonnements und Credits), erlischt das Widerrufsrecht vorzeitig, sobald Sie ausdrücklich zugestimmt haben, dass wir mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist beginnen, und Sie gleichzeitig bestätigt haben, dass Sie dadurch Ihr Widerrufsrecht verlieren (§ 356 Abs. 5 BGB). Diese Bestätigung erfolgt im Rahmen des Kaufvorgangs über Google Play. Unabhängig davon gelten die eigenen Rückerstattungsrichtlinien von Google Play, die Sie über Ihr Google-Konto einsehen können.",
    ],
  },
  {
    heading: "7. Freiwillige Werbefunktion (Rewarded Ads)",
    paragraphs: [
      "Die App bietet die freiwillige Möglichkeit, durch das Ansehen von Werbevideos (Google AdMob) zusätzliche Credits zu erhalten. Die Nutzung dieser Funktion ist optional und begründet kein Vertragsverhältnis über die reguläre Kontonutzung hinaus.",
    ],
  },
  {
    heading: "8. Wichtiger Haftungshinweis zu KI-Funktionen",
    paragraphs: [
      "Die KI-gestützten Funktionen der App („Ask Toni\", „KI-Diagnose\", Ersatzteilnummern-Vorschläge) ersetzen keine Diagnose oder Beratung durch eine Kfz-Fachwerkstatt. Antworten werden automatisiert durch Sprachmodelle generiert und können unvollständig, veraltet oder fehlerhaft sein. Vorgeschlagene Ersatzteilnummern werden ohne Gewähr angezeigt und sind vor einem Kauf oder Einbau zwingend mit den Fahrzeugdaten und/oder einer Fachwerkstatt abzugleichen. Für sicherheitsrelevante Reparaturen (z. B. Bremsen, Lenkung, Airbag) ist stets eine qualifizierte Fachwerkstatt zu konsultieren. Eine Haftung für Schäden, die aus der ungeprüften Umsetzung von KI-generierten Vorschlägen entstehen, ist im gesetzlich zulässigen Umfang ausgeschlossen (siehe Abschnitt 12).",
    ],
  },
  {
    heading: "9. Pflichten der Nutzer",
    paragraphs: [
      "Sie verpflichten sich,",
    ],
    list: [
      "die App nicht missbräuchlich oder zu rechtswidrigen Zwecken zu nutzen,",
      "keine automatisierten Verfahren (Bots, Scraping) zur Nutzung der App einzusetzen,",
      "die App und ihre Inhalte nicht zurückzuentwickeln (Reverse Engineering), zu dekompilieren oder unbefugt zu vervielfältigen, soweit dies nicht gesetzlich zulässig ist,",
      "keine Inhalte einzustellen, die gegen geltendes Recht oder Rechte Dritter verstoßen.",
    ],
  },
  {
    heading: "10. Nutzungsrechte",
    paragraphs: [
      "Wir räumen Ihnen ein einfaches, nicht übertragbares, persönliches Nutzungsrecht an der App für die Dauer Ihres Nutzerkontos ein, beschränkt auf den privaten, nicht-kommerziellen Gebrauch. Alle Rechte an der App, ihrer Software und ihren Inhalten (mit Ausnahme Ihrer eigenen eingegebenen Daten) verbleiben bei SimplyNext bzw. den jeweiligen Rechteinhabern.",
    ],
  },
  {
    heading: "11. Verfügbarkeit und Änderungen des Dienstes",
    paragraphs: [
      "Wir sind bemüht, die App möglichst durchgehend verfügbar zu halten, übernehmen jedoch keine Gewähr für eine ununterbrochene Verfügbarkeit. Wartungsarbeiten, Störungen bei eingesetzten Drittanbietern (z. B. Supabase, Google, OpenAI) oder höhere Gewalt können zu vorübergehenden Einschränkungen führen. Wir behalten uns vor, einzelne Funktionen der App im Rahmen zumutbarer Änderungen anzupassen, zu erweitern oder einzustellen.",
    ],
  },
  {
    heading: "12. Haftung",
    paragraphs: [
      "Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach Maßgabe des Produkthaftungsgesetzes. Bei leichter Fahrlässigkeit haften wir nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht), deren Erfüllung die ordnungsgemäße Nutzung der App überhaupt erst ermöglicht und auf deren Einhaltung Sie regelmäßig vertrauen dürfen; in diesem Fall ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt. Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit bleibt hiervon unberührt. Im Übrigen wird eine Haftung, insbesondere für Schäden, die aus der Umsetzung KI-generierter Vorschläge ohne fachliche Prüfung entstehen, ausgeschlossen (siehe Abschnitt 8).",
    ],
  },
  {
    heading: "13. Kündigung und Kontosperrung",
    paragraphs: [
      "Sie können Ihr Nutzerkonto jederzeit ohne Angabe von Gründen direkt in der App löschen (Einstellungen → Konto & Daten löschen) oder online beantragen. Wir behalten uns vor, Nutzerkonten bei begründetem Verdacht auf Missbrauch, Verstoß gegen diese AGB oder geltendes Recht zu sperren oder zu kündigen.",
    ],
  },
  {
    heading: "14. Datenschutz",
    paragraphs: [
      "Informationen zur Verarbeitung Ihrer personenbezogenen Daten finden Sie in unserer separaten Datenschutzerklärung (www.simplynext.de/de/apps/wefixit/datenschutz).",
    ],
  },
  {
    heading: "15. Verbraucherstreitbeilegung",
    paragraphs: [
      "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    ],
  },
  {
    heading: "16. Änderungen dieser AGB",
    paragraphs: [
      "Wir behalten uns vor, diese AGB mit Wirkung für die Zukunft zu ändern, soweit dies aufgrund geänderter rechtlicher Rahmenbedingungen, neuer Funktionen oder aus sonstigen sachlichen Gründen erforderlich ist. Über wesentliche Änderungen werden Sie in der App informiert.",
    ],
  },
  {
    heading: "17. Anwendbares Recht und Schlussbestimmungen",
    paragraphs: [
      "Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Zwingende verbraucherschutzrechtliche Bestimmungen des Staates, in dem Sie Ihren gewöhnlichen Aufenthalt haben, bleiben hiervon unberührt, sofern Sie als Verbraucher innerhalb der EU handeln. Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt.",
    ],
  },
  {
    heading: "18. Kontakt",
    paragraphs: [
      "Bei Fragen zu diesen AGB erreichen Sie uns unter info@simplynext.de oder telefonisch unter 01743389049.",
    ],
  },
];
