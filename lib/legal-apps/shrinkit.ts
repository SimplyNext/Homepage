import type { LegalSection } from "../legal";

/**
 * App-spezifische Rechtstexte für ShrinkIt – übernommen aus
 * shrinkit-{datenschutz,agb}.md (Stand: 30.07.2026).
 *
 * Quelle bleibt das Markdown-Dokument im Repository-Root: Änderungen dort
 * müssen hier nachgezogen werden.
 */

export const shrinkitDatenschutz: LegalSection[] = [
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
      "USt-IdNr.: DE463824630",
    ],
    afterList: [
      "(Angaben identisch mit dem Impressum)",
      "Ein betrieblicher Datenschutzbeauftragter ist nicht bestellt, da die Voraussetzungen nach Art. 37 DSGVO / § 38 BDSG nicht vorliegen (Einzelunternehmen ohne mindestens 20 ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigte Personen).",
    ],
  },
  {
    heading: "2. Das Wichtigste in Kurzform",
    paragraphs: [
      "ShrinkIt verkleinert Fotos und Videos vollständig auf Ihrem Gerät. Ihre Bilder und Videos werden nicht auf Server übertragen – weder an uns noch an Dritte. Wir betreiben für ShrinkIt keinen eigenen Server, keine Nutzerkonten und keine Datenbank. Wir haben deshalb technisch keinen Zugriff auf Ihre Mediendateien.",
      "Personenbezogene Daten entstehen dennoch an drei Stellen, über die diese Erklärung informiert:",
    ],
    ordered: true,
    list: [
      "Werbung in der kostenlosen Version (nur mit Ihrer Einwilligung),",
      "Kaufabwicklung beim einmaligen Kauf der Pro-Version,",
      "technische Verbindungen der App (Schriftart-Download, Absturzberichte über Google Play).",
    ],
  },
  { heading: "3. Verarbeitung auf Ihrem Gerät (keine Übermittlung)" },
  {
    heading: "3.1 Fotos, Videos und deren Metadaten",
    level: 3,
    paragraphs: ["Wenn Sie Dateien zum Verkleinern auswählen, liest die App:"],
    list: [
      "die ausgewählten Bild- und Videodateien,",
      "deren Dateigröße, Pixelmaße und Änderungsdatum,",
      "die geräteinterne Medien-Kennung (Asset-ID), um eine Datei auf Ihren Wunsch aus der Galerie löschen zu können.",
    ],
    afterList: [
      "Die Komprimierung erfolgt ausschließlich lokal über die Bild- und Video-Codecs Ihres Betriebssystems. Es findet kein Upload, keine Cloud-Verarbeitung und keine Auswertung durch uns oder Dritte statt.",
      "Die Ergebnisdateien werden im app-eigenen, für andere Apps nicht zugänglichen Speicherbereich Ihres Geräts abgelegt und in der App unter „Chronologie“ aufgelistet. Auf Ihren Wunsch speichert die App eine Kopie in Ihre Galerie.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Erfüllung des Nutzungsvertrags). Eine Übermittlung an uns findet nicht statt; insoweit liegt keine Verarbeitung durch uns vor.",
      "Hinweis zur Funktion „Alle ersetzen“: Diese Funktion speichert die verkleinerten Dateien in Ihrer Galerie und löscht danach die Originale. Dieser Vorgang ist nicht umkehrbar und wird vor der Ausführung ausdrücklich bestätigt. Bitte legen Sie vorher Sicherungskopien an.",
    ],
  },
  {
    heading: "3.2 App-Einstellungen",
    level: 3,
    paragraphs: [
      "Lokal auf dem Gerät (in den App-Einstellungen von Android, „SharedPreferences“) speichern wir:",
    ],
    list: [
      "gewählte Sprache und Farbschema (hell/dunkel),",
      "ob das Onboarding bereits angezeigt wurde,",
      "den zwischengespeicherten Pro-Status,",
      "einen Zähler erfolgreicher Komprimierungen sowie ein Kennzeichen, ob die Bewertungsanfrage bereits erschienen ist.",
    ],
    afterList: [
      "Diese Angaben verlassen Ihr Gerät nicht und werden beim Deinstallieren der App entfernt.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.",
    ],
  },
  { heading: "4. Werbung (nur in der kostenlosen Version)" },
  {
    heading: "4.1 Google AdMob",
    level: 3,
    paragraphs: [
      "In der kostenlosen Version zeigt ShrinkIt gelegentlich Vollbildanzeigen über Google AdMob.",
      "Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; für die Verarbeitung in den USA: Google LLC.",
      "Dabei können folgende Daten verarbeitet werden:",
    ],
    list: [
      "die Werbe-ID Ihres Geräts (Advertising ID, AAID),",
      "IP-Adresse und daraus abgeleitete ungefähre Standortangabe (Land/Region),",
      "Geräte- und Softwaremerkmale (Modell, Betriebssystemversion, Spracheinstellung, App-Version),",
      "Interaktionen mit Anzeigen (Einblendungen, Klicks, Ausblenden).",
    ],
    afterList: [
      "Google verarbeitet diese Daten auch zu eigenen Zwecken und ist dafür eigenständig verantwortlich. Nähere Informationen: policies.google.com/technologies/partner-sites und die Liste der Werbepartner unter support.google.com/admob/answer/9012903.",
    ],
  },
  {
    heading: "4.2 Einwilligung und Widerruf",
    level: 3,
    paragraphs: [
      "Vor der ersten Anzeigenauslieferung erscheint ein Einwilligungsdialog über Googles User Messaging Platform (UMP).",
    ],
    list: [
      "Ohne Ihre Einwilligung werden keine personalisierten Anzeigen ausgeliefert und keine Anzeigen geladen, solange die Einwilligung nicht vorliegt bzw. abgelehnt wurde; im letzteren Fall können ausschließlich nicht personalisierte Anzeigen erscheinen.",
      "Ihre Entscheidung können Sie jederzeit ändern: Einstellungen → Rechtliches → Werbeeinstellungen.",
    ],
    afterList: [
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) sowie § 25 Abs. 1 TDDDG für den Zugriff auf Informationen in Ihrem Endgerät. Der Widerruf ist jederzeit mit Wirkung für die Zukunft möglich (Art. 7 Abs. 3 DSGVO).",
      "Drittlandübermittlung: Google LLC verarbeitet Daten auch in den USA. Google ist unter dem EU-US Data Privacy Framework zertifiziert (Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023); ergänzend gelten EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Ein Zugriff durch US-Behörden kann trotz dieser Maßnahmen nicht vollständig ausgeschlossen werden.",
    ],
  },
  {
    heading: "4.3 Werbefreiheit",
    level: 3,
    paragraphs: [
      "Mit dem einmaligen Kauf der Pro-Version wird die Werbung dauerhaft deaktiviert. Für Pro-Nutzer wird das Werbe-SDK nicht initialisiert und es erscheint kein Einwilligungsdialog.",
    ],
  },
  { heading: "5. Kauf der Pro-Version" },
  {
    heading: "5.1 Google Play Billing",
    level: 3,
    paragraphs: [
      "Die Zahlungsabwicklung erfolgt vollständig über Google Play. Wir erheben, speichern und sehen zu keinem Zeitpunkt Zahlungsmitteldaten (Kreditkarten-, Bank- oder PayPal-Daten). Google ist für die Zahlungsabwicklung eigenständig verantwortlich; es gilt die Datenschutzerklärung von Google (policies.google.com/privacy).",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.",
    ],
  },
  {
    heading: "5.2 RevenueCat (Verwaltung des Kaufstatus)",
    level: 3,
    paragraphs: [
      "Zur Prüfung, ob die Pro-Version freigeschaltet ist, nutzen wir RevenueCat.",
      "Anbieter: RevenueCat, Inc., 748 Market St, San Francisco, CA 94102, USA.",
      "Verarbeitete Daten:",
    ],
    list: [
      "eine von RevenueCat erzeugte anonyme App-Nutzer-ID (kein Name, keine E-Mail-Adresse),",
      "Kauf-Token und Kaufstatus von Google Play,",
      "Store-Land, Gerätemodell, Betriebssystemversion, App-Version.",
    ],
    afterList: [
      "RevenueCat verarbeitet diese Daten als Auftragsverarbeiter nach unserer Weisung; ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO liegt vor. Datenschutzerklärung: revenuecat.com/privacy.",
      "Drittlandübermittlung: USA, abgesichert über EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Erfüllung des Kaufvertrags und Bereitstellung der gekauften Funktionen).",
    ],
  },
  {
    heading: "5.3 Kauf wiederherstellen",
    level: 3,
    paragraphs: [
      "Die Funktion „Käufe wiederherstellen“ fragt Ihren Kaufstatus erneut bei Google Play und RevenueCat ab. Es werden dabei keine zusätzlichen Datenkategorien verarbeitet.",
    ],
  },
  { heading: "6. Weitere Verarbeitungen" },
  {
    heading: "6.1 Bewertungsanfrage über Google Play",
    level: 3,
    paragraphs: [
      "Nach mehreren erfolgreichen Komprimierungen kann einmalig der systemeigene Bewertungsdialog von Google Play erscheinen. Dieser wird vollständig von Google bereitgestellt; wir erfahren nicht, ob und wie Sie bewerten. Ob eine Bewertung abgegeben wird, entscheiden Sie allein.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Rückmeldungen zur App).",
    ],
  },
  {
    heading: "6.2 Teilen von Dateien",
    level: 3,
    paragraphs: [
      "Wenn Sie eine verkleinerte Datei teilen, übergibt ShrinkIt sie an die von Ihnen ausgewählte App (z. B. Messenger, E-Mail). Ab diesem Zeitpunkt gilt die Datenschutzerklärung des jeweiligen Anbieters. Wir haben auf diese Weitergabe keinen Einfluss.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Ihre aktive Auswahl des Ziels).",
    ],
  },
  {
    heading: "6.3 Schriftart-Download (Google Fonts)",
    level: 3,
    paragraphs: [
      "Die App verwendet die Schriftart „Inter“. Diese wird beim ersten Start von den Servern von Google (fonts.gstatic.com) geladen und danach lokal zwischengespeichert. Dabei wird Ihre IP-Adresse an Google übermittelt.",
      "Anbieter: Google Ireland Limited / Google LLC, USA. Datenschutzerklärung: policies.google.com/privacy.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer einheitlichen, barrierearmen Darstellung der App).",
    ],
  },
  {
    heading: "6.4 Absturz- und Leistungsberichte über Google Play",
    level: 3,
    paragraphs: [
      "Stürzt die App ab oder reagiert sie nicht, kann Ihr Android-Gerät einen technischen Bericht an Google Play übermitteln (u. a. Gerätemodell, Betriebssystemversion, Absturzverlauf/Stacktrace). Wir erhalten daraus in der Google Play Console ausschließlich zusammengefasste, nicht auf Sie beziehbare Auswertungen („Android Vitals“).",
      "Ob solche Berichte gesendet werden, steuern Sie in den Android-Einstellungen unter „Google → Nutzungs- und Diagnosedaten“.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Stabilität und Fehlerbehebung).",
    ],
  },
  {
    heading: "6.5 Aufrufen externer Seiten",
    level: 3,
    paragraphs: [
      "Die Links „Datenschutzerklärung“ und „Impressum“ in den Einstellungen öffnen Ihren Browser. Beim Aufruf verarbeitet der Betreiber der Website (Hosting-Anbieter) die üblichen Verbindungsdaten. Es gilt die Datenschutzerklärung der aufgerufenen Website.",
    ],
  },
  {
    heading: "6.6 Was wir nicht tun",
    level: 3,
    list: [
      "Keine Analyse- oder Tracking-Werkzeuge (kein Firebase Analytics, kein Crashlytics, kein Sentry, kein Facebook-SDK).",
      "Kein Nutzerkonto, keine Registrierung, keine Anmeldung.",
      "Keine eigenen Server und keine eigene Datenbank für ShrinkIt.",
      "Keine Auswertung, Weitergabe oder Speicherung Ihrer Fotos und Videos durch uns.",
      "Kein Verkauf von Daten an Dritte.",
      "Kein Zugriff auf Standort, Kontakte, SMS, Anrufliste oder andere Apps.",
    ],
  },
  {
    heading: "7. Berechtigungen der App",
    paragraphs: ["Die App fordert folgende Systemberechtigungen an:"],
    table: {
      head: ["Berechtigung", "Zweck", "Erforderlich"],
      rows: [
        ["Zugriff auf Fotos und Videos (READ_MEDIA_IMAGES, READ_MEDIA_VIDEO, ab Android 14 zusätzlich READ_MEDIA_VISUAL_USER_SELECTED; bis Android 12 READ_EXTERNAL_STORAGE)", "Auswahl der zu verkleinernden Dateien; optionales Löschen des Originals auf Ihren Wunsch", "Ja, für die Kernfunktion"],
        ["Speichern in der Galerie (WRITE_EXTERNAL_STORAGE, nur bis Android 9)", "Ablegen der Ergebnisdatei in Ihrer Galerie", "Nur beim Speichern"],
        ["Internetzugriff (INTERNET, ACCESS_NETWORK_STATE)", "Werbung, Kaufprüfung, Schriftart-Download", "Für die Komprimierung selbst nicht erforderlich"],
        ["Werbe-ID (com.google.android.gms.permission.AD_ID)", "Auslieferung von Werbung in der kostenlosen Version", "Nur bei erteilter Einwilligung"],
      ],
    },
    afterList: [
      "Die Medienberechtigung wird erst angefragt, wenn Sie „Bild auswählen“ oder „Video auswählen“ antippen – nicht beim Start der App. Ab Android 14 können Sie auch nur einzelne Dateien freigeben; die App funktioniert dann ausschließlich mit den freigegebenen Dateien.",
      "Alle Berechtigungen können Sie in den Android-Systemeinstellungen jederzeit widerrufen. Ohne Medienzugriff ist die Komprimierung nicht nutzbar; die App weist darauf hin und bietet den Weg in die Einstellungen an.",
    ],
  },
  {
    heading: "8. Speicherdauer",
    table: {
      head: ["Datenkategorie", "Speicherdauer"],
      rows: [
        ["Verkleinerte Ergebnisdateien", "Unbegrenzt im app-eigenen Speicher, bis Sie sie in der „Chronologie“ einzeln oder gesammelt löschen; spätestens beim Deinstallieren der App"],
        ["Zwischendateien der Zielgrößen-Suche", "Werden unmittelbar nach dem Vorgang und zusätzlich bei jedem App-Start gelöscht"],
        ["Lokale Einstellungen", "Bis zum Löschen der App-Daten oder Deinstallation"],
        ["Werbedaten (AdMob)", "Nach den Fristen von Google, siehe policies.google.com/technologies/ads"],
        ["Kauf- und Abo-Daten (RevenueCat, Google Play)", "Nach den Fristen der Anbieter sowie gesetzlichen Aufbewahrungspflichten (i. d. R. 10 Jahre für steuerlich relevante Belege, § 147 AO, § 257 HGB – diese liegen bei Google)"],
        ["Absturzberichte (Android Vitals)", "Nach den Fristen von Google"],
      ],
    },
  },
  {
    heading: "9. Ihre Rechte",
    paragraphs: ["Sie haben jederzeit das Recht auf:"],
    list: [
      "Auskunft über die verarbeiteten personenbezogenen Daten (Art. 15 DSGVO)",
      "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
      "Löschung (Art. 17 DSGVO)",
      "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
      "Datenübertragbarkeit (Art. 20 DSGVO)",
      "Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO)",
      "Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)",
      "Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)",
    ],
    afterList: [
      "Zuständige Aufsichtsbehörde für uns: Landesbeauftragter für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart, baden-wuerttemberg.datenschutz.de",
      "Wichtiger, praktischer Hinweis: Da ShrinkIt ohne Nutzerkonto arbeitet und wir keine eigene Datenbank betreiben, liegen uns in der Regel keine Daten vor, die einer bestimmten Person zugeordnet werden können. Ein Auskunftsersuchen an uns wird daher meist ergebnislos bleiben. Für Daten, die bei den in Ziff. 4–6 genannten Anbietern liegen, wenden Sie sich bitte direkt an diese: Google (Werbung, Play, Fonts, Absturzberichte) unter policies.google.com/privacy, RevenueCat (Kaufstatus) unter revenuecat.com/privacy.",
      "Wir unterstützen Sie auf Anfrage bei der Weiterleitung. So üben Sie Ihre Rechte unmittelbar in der App aus: Ergebnisdateien löschen über Chronologie → Einzeln löschen oder „Alle löschen“; Werbe-Einwilligung ändern oder widerrufen über Einstellungen → Rechtliches → Werbeeinstellungen; alle lokalen Daten entfernen durch Deinstallation oder Android-Einstellungen → Apps → ShrinkIt → Speicher → Daten löschen.",
      "Kontakt für datenschutzrechtliche Anfragen: info@simplynext.de",
    ],
  },
  {
    heading: "10. Datensicherheit",
    list: [
      "Ihre Mediendateien verlassen das Gerät nicht; das Sicherheitsniveau ergibt sich aus dem Schutz Ihres Geräts (Bildschirmsperre, Verschlüsselung, aktuelle Systemupdates).",
      "Ergebnisdateien liegen im app-privaten Speicherbereich, auf den andere Apps nach dem Android-Berechtigungsmodell keinen Zugriff haben.",
      "Alle Netzwerkverbindungen (Werbung, Kaufprüfung, Schriftart) erfolgen ausschließlich verschlüsselt über TLS/HTTPS.",
      "Die App enthält keine Zugangsdaten zu fremden Systemen außer den vom jeweiligen Anbieter dafür vorgesehenen öffentlichen SDK-Schlüsseln.",
      "Für die Veröffentlichung wird der Programmcode verschleiert und um ungenutzte Bestandteile reduziert (R8).",
    ],
  },
  {
    heading: "11. Kinder und Jugendliche",
    paragraphs: [
      "ShrinkIt richtet sich nicht an Kinder. Die App ist nicht Teil des Google-Play-Programms „Für Familien geeignet“. Nutzer unter 16 Jahren sollten die App nur mit Zustimmung der Erziehungsberechtigten nutzen; eine Einwilligung in die Werbeverarbeitung (Ziff. 4) ist in diesem Fall durch die Erziehungsberechtigten zu erteilen (Art. 8 DSGVO).",
    ],
  },
  {
    heading: "12. Keine automatisierte Entscheidungsfindung",
    paragraphs: [
      "Es findet keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne des Art. 22 DSGVO statt, die Ihnen gegenüber rechtliche Wirkung entfaltet.",
    ],
  },
  {
    heading: "13. Änderungen dieser Datenschutzerklärung",
    paragraphs: [
      "Wir passen diese Erklärung an, wenn sich die Rechtslage, die App oder die eingesetzten Dienste ändern. Es gilt jeweils die bei Ihrer Nutzung abrufbare Fassung. Bei wesentlichen Änderungen – insbesondere bei neuen Datenempfängern – informieren wir in der App gesondert und holen erforderliche Einwilligungen erneut ein.",
      "Maßgeblich ist die deutsche Fassung dieser Erklärung.",
    ],
  },
  {
    heading: "14. Kontakt",
    list: [
      "SimplyNext",
      "Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Deutschland",
      "E-Mail: info@simplynext.de",
      "Telefon: 01743389049",
    ],
  },
];

export const shrinkitAgb: LegalSection[] = [
  {
    heading: "§ 1 Geltungsbereich, Anbieter, Vertragspartner",
    paragraphs: [
      "(1) Diese Allgemeinen Geschäftsbedingungen („AGB“) gelten für die Nutzung der mobilen Anwendung ShrinkIt („App“) sowie der darin angebotenen kostenpflichtigen Zusatzfunktionen („Pro-Version“), die bereitgestellt werden von",
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
      "(„Anbieter“, „wir“).",
      "(2) Die App richtet sich an Verbraucher (§ 13 BGB) und an Unternehmer (§ 14 BGB). Regelungen, die ausdrücklich nur für eine dieser Gruppen gelten, sind entsprechend gekennzeichnet.",
      "(3) Zwei getrennte Vertragsverhältnisse: Der Vertrag über die Nutzung der App (Lizenz- und Nutzungsvertrag) kommt zwischen Ihnen und uns zustande. Der Bezug der App und der Kauf der Pro-Version erfolgen über den Google Play Store; für den Kauf- und Zahlungsvorgang tritt Google nach den Bestimmungen von Google Play als Verkäufer auf. Insoweit gelten zusätzlich die Nutzungsbedingungen von Google Play. Diese AGB regeln nicht das Verhältnis zwischen Ihnen und Google.",
      "(4) Entgegenstehenden oder ergänzenden Bedingungen des Nutzers wird widersprochen, es sei denn, wir stimmen ihrer Geltung ausdrücklich in Textform zu.",
      "(5) Zur Nutzung der App müssen Sie mindestens 16 Jahre alt sein. Jüngere Nutzer benötigen die Zustimmung eines Erziehungsberechtigten; dieser wird in diesem Fall Vertragspartner.",
    ],
  },
  {
    heading: "§ 2 Vertragsgegenstand und Leistungsbeschreibung",
    paragraphs: [
      "(1) ShrinkIt verkleinert Fotos und Videos. Die Komprimierung erfolgt vollständig auf Ihrem Gerät; eine Übertragung Ihrer Mediendateien an uns oder an Dritte findet nicht statt.",
      "(2) Der Funktionsumfang umfasst insbesondere:",
    ],
    list: [
      "Verkleinerung von Bildern über eine wählbare Qualitätsstufe,",
      "Verkleinerung von Bildern auf eine gewünschte Zieldateigröße,",
      "Verkleinerung von Bildern über eine frei wählbare Zielauflösung (Breite/Höhe),",
      "Verkleinerung von Videos über wählbare Qualitätsstufen,",
      "Verarbeitung mehrerer Dateien in einem Durchgang,",
      "Übersicht der erzeugten Dateien („Chronologie“) mit Öffnen, Teilen und Löschen,",
      "Speichern der Ergebnisse in der Galerie sowie optionales Ersetzen der Originale,",
      "Bedienoberfläche in sieben Sprachen, hell/dunkel.",
    ],
    afterList: [
      "(3) Kostenlose Version: Die App ist ohne Registrierung und ohne Nutzerkonto kostenlos nutzbar. Es gelten folgende Beschränkungen: maximal 5 Dateien pro Durchgang; Bilder mit einer Dateigröße über 5 MB erfordern die Pro-Version; es wird Werbung eingeblendet (§ 6).",
      "(4) Pro-Version: Durch einen einmaligen Kauf werden dauerhaft freigeschaltet: Verarbeitung von bis zu 50 Dateien pro Durchgang, keine Größenbeschränkung für Einzelbilder, werbefreie Nutzung. Es handelt sich nicht um ein Abonnement. Es entstehen keine wiederkehrenden Kosten und keine Kündigungspflicht. Der jeweils gültige Preis und Funktionsumfang ergeben sich aus der Darstellung in der App im Zeitpunkt des Kaufs.",
      "(5) Verlustbehaftete Komprimierung: Die Verkleinerung von Bildern und Videos erfolgt verlustbehaftet. Ein Qualitätsverlust ist verfahrensbedingt und kein Mangel. Das Ausmaß der Einsparung hängt vom Ausgangsmaterial, den gewählten Einstellungen und den Codecs Ihres Geräts ab; die in der App angezeigten Werte vor der Verarbeitung sind Schätzwerte und keine zugesagte Eigenschaft.",
      "(6) Der Anbieter darf den Funktionsumfang im Rahmen der technischen Weiterentwicklung anpassen, erweitern oder einschränken, sofern dies für den Nutzer zumutbar ist und der vertraglich vereinbarte Kernumfang – bei Pro-Nutzern der nach Absatz 4 erworbene Umfang – erhalten bleibt.",
    ],
  },
  {
    heading: "§ 3 Vertragsschluss",
    paragraphs: [
      "(1) Der Nutzungsvertrag über die kostenlose Version kommt mit der Installation und erstmaligen Nutzung der App zustande. Eine Registrierung findet nicht statt.",
      "(2) Der Kauf der Pro-Version erfolgt durch Auswahl des Angebots in der App und Bestätigung des Kaufvorgangs im Bezahldialog von Google Play. Vor dem Abschluss werden Ihnen Bezeichnung und Preis der Leistung angezeigt.",
      "(3) Nach dem Kauf wird die Pro-Version unmittelbar freigeschaltet. Ein Kaufbeleg wird Ihnen von Google Play bereitgestellt.",
    ],
  },
  {
    heading: "§ 4 Preise, Zahlung, Wiederherstellung",
    paragraphs: [
      "(1) Es gilt der zum Zeitpunkt des Kaufs in der App angezeigte Preis. Alle Preise sind Endpreise und enthalten die gesetzliche Umsatzsteuer.",
      "(2) Die Zahlungsabwicklung erfolgt ausschließlich über Google Play mit dem in Ihrem Google-Konto hinterlegten Zahlungsmittel. Wir erhalten und speichern keine Zahlungsmitteldaten.",
      "(3) Rückerstattungen richten sich nach den Bestimmungen von Google Play und sind über Google zu beantragen. Gesetzliche Rechte nach § 5 und § 10 bleiben davon unberührt.",
      "(4) Die Pro-Version ist mit Ihrem Google-Konto verknüpft. Nach einer Neuinstallation oder auf einem weiteren Gerät desselben Kontos können Sie sie über „Einstellungen → Käufe wiederherstellen“ erneut freischalten, ohne erneut zu zahlen.",
      "(5) Die Verknüpfung mit dem Google-Konto bedeutet zugleich: Verlieren Sie den Zugang zu diesem Konto, kann die Pro-Version nicht wiederhergestellt werden. Wir haben keine Möglichkeit, Käufe kontounabhängig zuzuordnen, da wir keine Nutzerkonten führen.",
    ],
  },
  {
    heading: "§ 5 Widerrufsrecht (für Verbraucher)",
    paragraphs: [
      "(1) Verbrauchern steht bei Fernabsatzverträgen grundsätzlich ein vierzehntägiges Widerrufsrecht zu. Da der Kauf der Pro-Version nach § 1 Abs. 3 über Google Play abgewickelt wird, ist ein Widerruf gegenüber Google zu erklären; Google stellt hierfür ein Verfahren im Google Play Store bereit.",
      "(2) Soweit ein widerrufbarer Vertrag über digitale Inhalte mit uns zustande kommt, gilt die nachfolgende Widerrufsbelehrung.",
    ],
  },
  {
    heading: "Widerrufsbelehrung",
    level: 3,
    paragraphs: [
      "Widerrufsrecht. Sie haben das Recht, binnen vierzehn Tagen ab dem Tag des Vertragsabschlusses diesen Vertrag ohne Angabe von Gründen zu widerrufen.",
      "Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung (z. B. per Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren: SimplyNext, Nuri Toker, Mechenseerstr. 12, 88316 Isny im Allgäu, E-Mail: info@simplynext.de",
      "Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.",
      "Folgen des Widerrufs. Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist. Für die Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.",
      "Vorzeitiges Erlöschen des Widerrufsrechts. Bei einem Vertrag über die Bereitstellung digitaler Inhalte, die nicht auf einem körperlichen Datenträger geliefert werden, erlischt das Widerrufsrecht, wenn wir mit der Vertragserfüllung begonnen haben, nachdem Sie ausdrücklich zugestimmt haben, dass wir vor Ablauf der Widerrufsfrist beginnen, und Ihre Kenntnis davon bestätigt haben, dass Sie durch Ihre Zustimmung mit Beginn der Vertragserfüllung Ihr Widerrufsrecht verlieren, und wir Ihnen eine Bestätigung hierüber zur Verfügung gestellt haben (§ 356 Abs. 5 BGB).",
      "Da die Pro-Version unmittelbar nach dem Kauf freigeschaltet wird, erlischt das Widerrufsrecht regelmäßig mit dieser Freischaltung.",
      "(3) Für Unternehmer (§ 14 BGB) besteht kein gesetzliches Widerrufsrecht.",
    ],
  },
  {
    heading: "§ 6 Werbung in der kostenlosen Version",
    paragraphs: [
      "(1) Die kostenlose Version wird über Werbung finanziert. Es werden gelegentlich Vollbildanzeigen eingeblendet, frühestens nach mehreren erfolgreichen Komprimierungen.",
      "(2) Die Auslieferung personalisierter Werbung setzt Ihre Einwilligung voraus, die vor der ersten Anzeige über einen Dialog eingeholt wird und jederzeit unter „Einstellungen → Rechtliches → Werbeeinstellungen“ widerrufen oder geändert werden kann. Details in der Datenschutzerklärung.",
      "(3) Mit dem Kauf der Pro-Version entfällt die Werbung dauerhaft.",
      "(4) Für Inhalte, Richtigkeit und Rechtmäßigkeit eingeblendeter Werbung Dritter sind die jeweiligen Werbetreibenden verantwortlich. Wir wählen keine Einzelanzeigen aus.",
    ],
  },
  {
    heading: "§ 7 Pflichten und Verantwortung des Nutzers",
    paragraphs: [
      "(1) Sicherungskopien. Sie sind für die Sicherung Ihrer Daten selbst verantwortlich. Legen Sie vor der Verarbeitung – insbesondere vor Nutzung der Funktion „Alle ersetzen“ – Sicherungskopien Ihrer Originaldateien an.",
      "(2) Löschfunktionen. Die Funktionen „Alle ersetzen“, „Original löschen“ und „Alle löschen“ entfernen Dateien endgültig aus Ihrer Galerie bzw. aus der App. Diese Vorgänge sind nicht umkehrbar und werden vor der Ausführung ausdrücklich bestätigt. Für die Folgen einer von Ihnen bestätigten Löschung übernehmen wir keine Haftung, soweit sich aus § 11 nichts anderes ergibt.",
      "(3) Rechte an den Inhalten. Sie versichern, dass Sie über die zur Verarbeitung erforderlichen Rechte an den von Ihnen ausgewählten Fotos und Videos verfügen und keine Rechte Dritter (Urheberrechte, Persönlichkeitsrechte, Datenschutzrechte abgebildeter Personen) verletzen.",
      "(4) Datenschutzrechtliche Eigenverantwortung. Verarbeiten Sie mit der App personenbezogene Daten Dritter – etwa Fotos, auf denen andere Personen erkennbar sind –, sind Sie dafür datenschutzrechtlich selbst verantwortlich (Art. 4 Nr. 7 DSGVO). Da die Verarbeitung ausschließlich lokal auf Ihrem Gerät erfolgt und wir keinen Zugriff auf Ihre Dateien haben, entsteht insoweit kein Auftragsverarbeitungsverhältnis mit uns.",
      "(5) Untersagte Nutzung. Es ist untersagt, die App zu nutzen, um rechtswidrige Inhalte zu verarbeiten oder zu verbreiten, sowie die App zu dekompilieren, zu verändern oder Schutzmechanismen – insbesondere die Beschränkungen der kostenlosen Version – zu umgehen. Gesetzlich zwingend erlaubte Handlungen (z. B. § 69e UrhG) bleiben unberührt.",
    ],
  },
  {
    heading: "§ 8 Nutzungsrechte",
    paragraphs: [
      "(1) Wir räumen Ihnen ein einfaches, nicht übertragbares, nicht unterlizenzierbares Recht ein, die App auf den Ihnen zuzurechnenden Geräten bestimmungsgemäß zu nutzen. Bei der Pro-Version gilt dieses Recht zeitlich unbefristet.",
      "(2) Alle Rechte an der App selbst (Software, Quellcode, Gestaltung, Bezeichnung, Logo) verbleiben bei uns bzw. den jeweiligen Rechteinhabern.",
      "(3) An Ihren eigenen Inhalten – Originaldateien und den daraus erzeugten verkleinerten Dateien – erwerben wir keinerlei Rechte. Sie bleiben ausschließlich bei Ihnen.",
    ],
  },
  {
    heading: "§ 9 Verfügbarkeit und Aktualisierungen",
    paragraphs: [
      "(1) Die Kernfunktion der App – die Komprimierung – arbeitet ohne Internetverbindung. Für Werbung, Kaufprüfung und das Wiederherstellen von Käufen ist eine Verbindung erforderlich.",
      "(2) Störungen oder Ausfälle bei eingesetzten Drittanbietern (Google Play, Google AdMob, RevenueCat) können einzelne Funktionen vorübergehend beeinträchtigen. Eine bestimmte Verfügbarkeit dieser Drittdienste können wir nicht zusagen.",
      "(3) Aktualisierungspflicht (§ 327f BGB). Wir stellen für die Pro-Version für einen Zeitraum, den Sie aufgrund der Art und des Zwecks des digitalen Produkts erwarten können, Aktualisierungen bereit, die für den Erhalt der Vertragsmäßigkeit erforderlich sind – insbesondere Sicherheitsaktualisierungen und Anpassungen an neue Android-Versionen. Über verfügbare Aktualisierungen informiert der Google Play Store.",
      "(4) Installieren Sie bereitgestellte Aktualisierungen nicht innerhalb einer angemessenen Frist, haften wir nicht für Mängel, die allein auf dem Fehlen dieser Aktualisierung beruhen, sofern wir Sie über die Aktualisierung und die Folgen einer Nichtinstallation informiert haben (§ 327f Abs. 2 BGB).",
    ],
  },
  {
    heading: "§ 10 Mängelhaftung",
    paragraphs: [
      "(1) Für die entgeltlich erworbene Pro-Version gelten die gesetzlichen Vorschriften über die Bereitstellung digitaler Produkte (§§ 327 ff. BGB), insbesondere die Ansprüche auf Nacherfüllung, Preisminderung und Beendigung des Vertrags bei Mängeln. Die Verjährungsfrist beträgt zwei Jahre ab Bereitstellung.",
      "(2) Diese Vorschriften gelten nach § 327 Abs. 3 BGB auch für die kostenlose, werbefinanzierte Version, soweit Sie personenbezogene Daten als Gegenleistung bereitstellen.",
      "(3) Kein Mangel liegt insbesondere vor bei:",
    ],
    list: [
      "verfahrensbedingtem Qualitätsverlust der Komprimierung (§ 2 Abs. 5),",
      "Abweichungen der tatsächlichen von der vorab geschätzten Dateigröße,",
      "Einschränkungen, die auf Eigenheiten, Alter oder Konfiguration Ihres Geräts, seiner Codecs oder seines Betriebssystems beruhen,",
      "Beeinträchtigungen durch Störungen bei Drittanbietern (§ 9 Abs. 2),",
      "fehlenden Funktionen, die ausdrücklich der Pro-Version zugeordnet sind, während die kostenlose Version genutzt wird.",
    ],
    afterList: [
      "(4) Bitte melden Sie Mängel an info@simplynext.de mit Angabe von Gerätemodell, Android-Version, App-Version und einer Beschreibung, wie der Fehler nachvollzogen werden kann.",
    ],
  },
  {
    heading: "§ 11 Haftung",
    paragraphs: [
      "(1) Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei Verletzung von Leben, Körper oder Gesundheit, bei Übernahme einer Garantie sowie nach den Vorschriften des Produkthaftungsgesetzes.",
      "(2) Bei leicht fahrlässiger Verletzung einer wesentlichen Vertragspflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung Sie vertrauen dürfen, ist unsere Haftung auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.",
      "(3) Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen.",
      "(4) Datenverlust. Die Haftung für den Verlust von Daten ist auf den typischen Wiederherstellungsaufwand beschränkt, der bei ordnungsgemäßer und regelmäßiger Sicherung der Daten durch Sie eingetreten wäre (§ 7 Abs. 1). Absätze 1 und 2 bleiben unberührt.",
      "(5) Wir haften nicht für Inhalte, die Sie mit der App verarbeiten oder an Dritte weitergeben, sowie für die Verletzung von Rechten Dritter durch von Ihnen ausgewählte Inhalte (§ 7 Abs. 3).",
      "(6) Die vorstehenden Beschränkungen gelten nicht für Ansprüche wegen Verletzung datenschutzrechtlicher Vorschriften, soweit diese nach der DSGVO zwingend sind, und nicht für gesetzliche Rechte aus § 10.",
      "(7) Eine Änderung der Beweislast zu Ihrem Nachteil ist mit den vorstehenden Regelungen nicht verbunden.",
    ],
  },
  {
    heading: "§ 12 Vertragsdauer und Beendigung",
    paragraphs: [
      "(1) Der Nutzungsvertrag ist unbefristet. Sie können ihn jederzeit ohne Frist beenden, indem Sie die App deinstallieren.",
      "(2) Der einmalige Kauf der Pro-Version wird durch eine Deinstallation nicht rückabgewickelt; die Freischaltung bleibt Ihrem Google-Konto zugeordnet und kann nach § 4 Abs. 4 wiederhergestellt werden.",
      "(3) Wir können den Nutzungsvertrag mit einer Frist von 30 Tagen in Textform kündigen, wenn wir die App dauerhaft einstellen. Bereits erworbene Pro-Funktionen bleiben bis zum Wirksamwerden der Kündigung nutzbar; Sie werden über die Einstellung rechtzeitig in der App informiert.",
      "(4) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt beiderseits unberührt. Ein wichtiger Grund liegt für uns insbesondere bei schwerwiegenden oder wiederholten Verstößen gegen § 7 Abs. 5 vor.",
      "(5) Mit Beendigung entfällt das Nutzungsrecht nach § 8 Abs. 1. Ihre lokal gespeicherten Dateien bleiben davon unberührt; sie werden mit der Deinstallation der App aus dem app-eigenen Speicher entfernt, soweit Sie sie nicht vorher in Ihre Galerie gespeichert haben.",
    ],
  },
  {
    heading: "§ 13 Änderungen dieser AGB",
    paragraphs: [
      "(1) Wir können diese AGB ändern, wenn dies wegen einer geänderten Rechtslage, einer geänderten Rechtsprechung, technischer Weiterentwicklung oder einer Änderung des Leistungsumfangs erforderlich ist und Sie dadurch nicht unangemessen benachteiligt werden.",
      "(2) Über Änderungen informieren wir mindestens sechs Wochen vor deren Inkrafttreten in Textform (In-App-Hinweis genügt). Widersprechen Sie nicht bis zum Inkrafttreten, gelten die Änderungen als angenommen; auf diese Wirkung und auf Ihr Widerspruchsrecht weisen wir in der Mitteilung gesondert hin.",
      "(3) Widersprechen Sie, können Sie den Nutzungsvertrag mit Wirkung zum Inkrafttreten der Änderung beenden; wir sind in diesem Fall ebenfalls zur Kündigung berechtigt. Bereits geleistete Zahlungen für die Pro-Version erstatten wir in diesem Fall anteilig, soweit ein Einmalkauf nach der Verkehrsauffassung noch nicht verbraucht ist.",
    ],
  },
  {
    heading: "§ 14 Datenschutz",
    paragraphs: [
      "Informationen zur Verarbeitung personenbezogener Daten finden Sie in der Datenschutzerklärung, abrufbar in der App unter „Einstellungen → Rechtliches → Datenschutzerklärung“ sowie online.",
    ],
  },
  {
    heading: "§ 15 Verbraucherstreitbeilegung",
    paragraphs: [
      "Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit (§ 36 Abs. 1 Nr. 1 VSBG). Sie können sich jederzeit unmittelbar an uns wenden: info@simplynext.de",
    ],
  },
  {
    heading: "§ 16 Schlussbestimmungen",
    paragraphs: [
      "(1) Es gilt das Recht der Bundesrepublik Deutschland. Sind Sie Verbraucher mit gewöhnlichem Aufenthalt in einem anderen Staat, bleiben zwingende Verbraucherschutzvorschriften dieses Staates unberührt (Art. 6 Abs. 2 Rom-I-VO).",
      "(2) Für Verbraucher gelten die gesetzlichen Gerichtsstände. Sind Sie Kaufmann im Sinne des HGB, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag unser Sitz (Isny im Allgäu).",
      "(3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung.",
      "(4) Änderungen und Ergänzungen dieser AGB bedürfen der Textform, soweit nicht das Verfahren nach § 13 zur Anwendung kommt.",
      "(5) Maßgeblich ist die deutsche Fassung dieser AGB.",
    ],
  },
  {
    heading: "Kontakt",
    list: [
      "SimplyNext",
      "Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Deutschland",
      "E-Mail: info@simplynext.de",
      "Telefon: 01743389049",
    ],
  },
];
