import type { LegalSection } from "../legal";

/**
 * App-spezifische Rechtstexte für Furly – übernommen aus
 * furly/legal-site/{datenschutzerklaerung,nutzungsbedingungen}.md
 * (Branch release/furly-1.0-vorbereitung, Stand: Oktober 2026).
 *
 * Quelle bleibt das Markdown im App-Repository: Änderungen dort müssen hier
 * nachgezogen werden. Beim Übernehmen entfallen das Inhaltsverzeichnis, die
 * internen Vermerke „[Anwaltlich prüfen: …]“ und in der Datenschutzerklärung
 * der veraltete Satz „keine Zahlungsabwicklung … weder Abonnements noch
 * In-App-Käufe“ (widerspricht Abschnitt 4a zu Furly Pro).
 */

export const furlyDatenschutz: LegalSection[] = [
  {
    heading: "Verantwortlicher & Impressum",
    list: [
      "SimplyNext",
      "Inhaber: Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Deutschland",
    ],
  },
  {
    heading: "Kontakt",
    level: 3,
    list: [
      "Telefon: 0174 3389049",
      "E-Mail: info@simplynext.de",
    ],
  },
  {
    heading: "Umsatzsteuer-Identifikationsnummer",
    level: 3,
    paragraphs: [
      "Gemäß § 27a Umsatzsteuergesetz: DE463824630",
    ],
  },
  {
    heading: "Berufsbezeichnung und berufsrechtliche Regelungen",
    level: 3,
    list: [
      "Berufsbezeichnung: App-Entwickler",
      "Verliehen in: Deutschland",
    ],
  },
  {
    heading: "Datenschutzbeauftragter",
    level: 3,
    paragraphs: [
      "Ein Datenschutzbeauftragter ist nicht bestellt, da die gesetzlichen Voraussetzungen hierfür nicht vorliegen. Für alle Datenschutzanliegen erreichst du uns unter der oben genannten E-Mail-Adresse.",
    ],
  },
  {
    heading: "1. Grundsätze und Überblick",
    paragraphs: [
      "Furly ist eine App für Haustierbesitzer: Tierprofile, Gesundheitsakte, Erinnerungen, Tagesroutine, ein Orte-Finder, Notfallkarte und Ratgeber, ein KI-Assistent, Lost&Found-Funktionen sowie das optionale Abo Furly Pro. Wir verarbeiten personenbezogene Daten ausschließlich, um diese Funktionen bereitzustellen.",
      "Nachfolgend findest du eine Übersicht. Die Details zu jeder Verarbeitung stehen in den jeweiligen Abschnitten.",
    ],
    table: {
      head: ["Datenart", "Zweck", "Rechtsgrundlage", "Empfänger"],
      rows: [
        ["E-Mail-Adresse, Passwort-Hash, Konto-ID", "Registrierung, Anmeldung, Kontoverwaltung", "Art. 6 Abs. 1 lit. b DSGVO (Vertrag)", "Supabase"],
        ["Anzeigename, Profilbild", "Profil, Anzeige in der Community", "Art. 6 Abs. 1 lit. b DSGVO", "Supabase"],
        ["Tierprofile (Name, Tierart, Rasse, Geburtsdatum, Gewicht, Foto, Beschreibung)", "Kernfunktion der App", "Art. 6 Abs. 1 lit. b DSGVO", "Supabase"],
        ["Krankenakte (Behandlungen, Impfungen, Tierarzt- und Klinikname, Kosten, Notizen)", "Gesundheitsdokumentation deines Tieres", "Art. 6 Abs. 1 lit. b DSGVO", "Supabase"],
        ["Erinnerungen", "Termin- und Aufgabenerinnerungen", "Art. 6 Abs. 1 lit. b DSGVO", "Supabase"],
        ["Selbst eingetragene Tierarztdaten", "Persönliche Tierarztliste", "Art. 6 Abs. 1 lit. b DSGVO", "Supabase"],
        ["Community-Beiträge, Likes", "Freiwillig geteilte Inhalte", "Art. 6 Abs. 1 lit. b DSGVO", "Supabase"],
        ["Lost&Found-Beiträge inkl. Kontaktangaben, Fundort, Foto", "Suchmeldungen für vermisste/gefundene Tiere", "Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktives Veröffentlichen)", "Supabase, andere Nutzer"],
        ["Furly-Chat-Nachrichten, Chat-Verlauf", "KI-Assistent, Verlauf über Geräte hinweg", "Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)", "Supabase, Google (Gemini API, USA)"],
        ["KI-Trainingspläne (Ziel, Tierprofil, generierter Plan)", "Individuelle Trainingspläne", "Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)", "Supabase, Google (Gemini API, USA)"],
        ["Standortdaten (letzte bekannte Position, Benachrichtigungsradius)", "Orte-Finder, Lost&Found-Umkreis, Umkreis-Benachrichtigungen", "Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über Systemdialog)", "Supabase, Google Maps"],
        ["Abo-Daten (Konto-ID, Produkt, Laufzeit, Ablaufdatum, Kaufbeleg der Store-Transaktion)", "Furly Pro: Kauf, Freischaltung, Wiederherstellung", "Art. 6 Abs. 1 lit. b DSGVO", "RevenueCat, Google Play, Supabase"],
        ["Zähler der Chat-Nachrichten pro Tag", "Tageskontingent der kostenlosen Version", "Art. 6 Abs. 1 lit. b DSGVO", "Supabase"],
        ["Geräte-Push-Token (FCM)", "Push-Benachrichtigungen", "Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)", "Supabase, Google (Firebase)"],
        ["Meldungen von Inhalten (Grund, gemeldeter Inhalt, Melder-ID)", "Moderation, Missbrauchsbekämpfung", "Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)", "Supabase"],
        ["Server-Logdaten (IP-Adresse, Zeitstempel, technische Metadaten)", "Betrieb, Sicherheit, Fehlersuche", "Art. 6 Abs. 1 lit. f DSGVO", "Supabase"],
      ],
    },
  },
  {
    heading: "2. Konto und Anmeldung",
    paragraphs: [
      "Für die Nutzung von Furly ist ein Konto erforderlich. Du kannst dich auf drei Wegen registrieren bzw. anmelden:",
    ],
    list: [
      "E-Mail und Passwort: Wir speichern deine E-Mail-Adresse und einen kryptografischen Hash deines Passworts (das Passwort selbst wird nie im Klartext gespeichert). Zur Bestätigung deiner E-Mail-Adresse und für „Passwort vergessen\" versenden wir E-Mails über unseren Backend-Anbieter Supabase.",
      "Anmeldung mit Google: Wenn du diese Option wählst, wirst du zu Google weitergeleitet. Google übermittelt uns anschließend deine E-Mail-Adresse, deinen Namen und ggf. dein Profilbild. Google erfährt dabei, dass du dich bei Furly anmeldest.",
      "Anmeldung mit Apple: Analog zu Google. Apple bietet dir die Möglichkeit, deine echte E-Mail-Adresse zu verbergen und stattdessen eine anonyme Weiterleitungsadresse zu verwenden.",
    ],
    afterList: [
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Erfüllung des Nutzungsvertrags). Für die Datenverarbeitung durch Google bzw. Apple im Rahmen des Logins sind diese Anbieter jeweils eigenständig verantwortlich; es gelten deren Datenschutzbestimmungen.",
    ],
  },
  {
    heading: "3. Tierprofile, Krankenakte und Erinnerungen",
    paragraphs: [
      "Du kannst Profile deiner Haustiere anlegen (Name, Rasse, Geburtsdatum, Gewicht, Foto, freie Beschreibung), Gesundheitseinträge dokumentieren und Erinnerungen setzen.",
      "Wichtiger Hinweis zu Daten Dritter",
      "In der Krankenakte kannst du optional Namen von Tierärztinnen/Tierärzten und Kliniken eintragen, ebenso in deiner persönlichen Tierarztliste. Dabei handelt es sich um personenbezogene Daten Dritter. Trage solche Daten bitte nur ein, soweit dies für deine eigene Dokumentation erforderlich ist, und veröffentliche sie nicht in der Community.",
      "Diese Daten werden in unserer Datenbank gespeichert und sind ausschließlich deinem Konto zugeordnet. Andere Nutzer haben keinen Zugriff darauf (technisch durch zeilenbasierte Zugriffsregeln, „Row Level Security\", abgesichert).",
      "Tierarzt-Mappe (PDF): Auf deinen Wunsch erstellt die App aus Tierprofil, Krankenakte, Impfungen und Gewichtsverlauf ein PDF. Es entsteht ausschließlich auf deinem Gerät; an wen du es weitergibst, entscheidest du über den Teilen-Dialog deines Geräts. Wir erhalten das PDF nicht.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.",
    ],
  },
  {
    heading: "4. Furly Chat (KI-Assistent) und KI-Trainingspläne",
    paragraphs: [
      "Furly Chat beantwortet Fragen rund um Haltung, Ernährung, Pflege und Gesundheit deines Tieres. Die Funktion ist optional.",
    ],
  },
  {
    heading: "Welche Daten übermittelt werden",
    level: 3,
    paragraphs: [
      "Zur Erzeugung einer Antwort übermitteln wir folgende Daten an Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (Gemini API; Verarbeitung auch in den USA):",
    ],
    list: [
      "deine aktuelle Nachricht sowie bis zu 20 vorangegangene Nachrichten desselben Gesprächs,",
      "die Profildaten des ausgewählten Haustiers (Name, Rasse, Alter, Gewicht),",
      "bei Trainingsplänen zusätzlich das von dir gewählte Trainingsziel.",
    ],
    afterList: [
      "Der Zugriff auf die KI erfolgt ausschließlich über unseren eigenen Server; es wird kein API-Schlüssel in der App gespeichert und deine Nachrichten werden nicht direkt von deinem Gerät an Google gesendet.",
    ],
  },
  {
    heading: "Einwilligung",
    level: 3,
    paragraphs: [
      "Vor der ersten Nutzung wird dir in der App ein Hinweis angezeigt, in dem die Übermittlung an Google erläutert wird. Erst nach deiner Bestätigung findet eine Übermittlung statt. Du kannst diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem du die Funktion nicht weiter nutzt und deinen Chat-Verlauf löschst.",
    ],
  },
  {
    heading: "Kein KI-Training mit deinen Daten",
    level: 3,
    paragraphs: [
      "Google verwendet über die API übermittelte Inhalte nach den geltenden Geschäftsbedingungen nicht zum Training seiner KI-Modelle.",
    ],
  },
  {
    heading: "Speicherung und Löschung",
    level: 3,
    paragraphs: [
      "Dein Chat-Verlauf wird in unserer Datenbank gespeichert, damit du ihn geräteübergreifend weiterführen kannst. Du kannst einzelne Gespräche oder den gesamten Verlauf jederzeit in der App endgültig löschen; die Löschung erfolgt unmittelbar in der Datenbank, es gibt keine Wiederherstellungsfunktion.",
    ],
  },
  {
    heading: "Grenzen der Funktion",
    level: 3,
    paragraphs: [
      "Furly Chat stellt keine Diagnosen und ersetzt keine tierärztliche Beratung, Untersuchung oder Behandlung. Werden in deiner Nachricht Hinweise auf einen Notfall erkannt, wird keine KI-Antwort erzeugt, sondern unmittelbar auf tierärztliche Hilfe verwiesen. KI-generierte Antworten kannst du über die Melden-Funktion beanstanden.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung); für die Speicherung des Verlaufs zusätzlich Art. 6 Abs. 1 lit. b DSGVO.",
    ],
  },
  {
    heading: "4a. Furly Pro (Abo) und Zahlungsabwicklung",
    paragraphs: [
      "Furly Pro ist ein optionales Abo (siehe Ziffer 3 der Nutzungsbedingungen). Wenn du es nicht abschließt, findet die folgende Verarbeitung nur in dem Umfang statt, der zum Anzeigen der Angebote nötig ist.",
    ],
    list: [
      "Google Play (Zahlung): Der Kauf läuft über das Abrechnungssystem von Google Play. Google verarbeitet dabei deine Zahlungsdaten in eigener Verantwortung; wir erhalten keine Zahlungsdaten wie Kartennummern, sondern nur die Bestätigung des Kaufs (Produkt, Zeitpunkt, Laufzeit, Bestellkennung).",
      "RevenueCat (Abo-Verwaltung): Für Kauf, Verlängerung, Kündigung und Wiederherstellung nutzen wir den Dienst RevenueCat. Die App übermittelt dabei deine Furly-Konto-ID (eine zufällige Kennung, nicht deine E-Mail-Adresse), die Kaufbelege von Google Play sowie technische Angaben zum Gerät und zur App (z. B. Betriebssystem, App-Version, Sprache, Land des Stores, IP-Adresse). RevenueCat prüft die Belege bei Google und meldet uns den Abo-Status.",
      "Unser Server: Den Abo-Status (aktiv ja/nein, Produkt, Laufzeit, Ablaufdatum) speichern wir zu deinem Konto, damit die Pro-Funktionen auf allen deinen Geräten freigeschaltet sind. Für das Tageskontingent im Furly Chat zählen wir die Anzahl deiner Nachrichten je Kalendertag; die Inhalte der Nachrichten werden dafür nicht ausgewertet. Notfall-Nachrichten zählen nicht mit.",
    ],
    afterList: [
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Erfüllung des Abo-Vertrags). Steuer- und handelsrechtliche Aufbewahrungspflichten (Art. 6 Abs. 1 lit. c DSGVO) betreffen die Abrechnung bei Google; soweit Belege bei uns vorliegen, gilt Abschnitt 15.",
    ],
  },
  {
    heading: "5. Community und Lost & Found",
    paragraphs: [
      "In der Community kannst du Beiträge veröffentlichen und Beiträge anderer mit „Gefällt mir\" markieren. Angezeigt werden dabei dein Anzeigename und der Inhalt deines Beitrags.",
      "Lost & Found – bitte bewusst entscheiden",
      "Wenn du eine Such- oder Fundmeldung erstellst, veröffentlichst du aktiv die von dir eingegebenen Kontaktangaben (z. B. Telefonnummer oder E-Mail-Adresse), eine Ortsangabe, das Datum sowie optional ein Foto und Standortkoordinaten. Diese Angaben sind für alle angemeldeten Nutzerinnen und Nutzer sichtbar und können von diesen kopiert oder weitergegeben werden. Gib daher nur Kontaktdaten an, deren Veröffentlichung du bewusst in Kauf nimmst.",
      "Du kannst deine eigenen Beiträge jederzeit löschen oder eine Suchmeldung als „erledigt\" markieren. Mit der Löschung deines Kontos werden auch alle deine Beiträge entfernt.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO — die Veröffentlichung erfolgt durch dein aktives Absenden des Beitrags.",
    ],
  },
  {
    heading: "6. Standortdaten",
    paragraphs: [
      "Furly verarbeitet Standortdaten für drei unterschiedliche Zwecke:",
    ],
  },
  {
    heading: "a) Aktive Nutzung",
    level: 3,
    paragraphs: [
      "Wenn du die Karte oder die Umkreissuche in Lost&Found öffnest, wird dein aktueller Standort ermittelt, um Ergebnisse in deiner Nähe anzuzeigen und die Karte zu zentrieren. Für die Kartendarstellung wird der Dienst Google Maps eingebunden.",
    ],
  },
  {
    heading: "b) Umkreis-Benachrichtigungen",
    level: 3,
    paragraphs: [
      "Sofern du die Standortberechtigung erteilt hast, wird deine zuletzt bekannte Position bei jeder Anmeldung und bei Erneuerung der Sitzung an unseren Server übermittelt und dort gespeichert (jeweils überschrieben, es entsteht kein Bewegungsprofil). Wir benötigen diese Angabe, um dich benachrichtigen zu können, wenn in deinem Umkreis ein vermisstes oder gefundenes Tier gemeldet wird. Der Benachrichtigungsradius beträgt standardmäßig 25 km.",
    ],
  },
  {
    heading: "c) Orte-Finder",
    level: 3,
    paragraphs: [
      "Wenn du im Orte-Finder suchst, sendet die App deinen aktuellen Standort und die gewählten Kategorien an unseren Server. Der Server ermittelt daraus die passenden Kartenausschnitte (Raster von etwa 25 km) und liefert die Orte mit Entfernung zurück. Deine genaue Position wird dabei nicht gespeichert; zwischengespeichert werden nur die öffentlichen Ortsdaten je Kartenausschnitt.",
      "Die Ortsdaten stammen aus OpenStreetMap (© OpenStreetMap-Mitwirkende, Lizenz ODbL). Fehlen sie im Zwischenspeicher, fragt unser Server sie beim Dienst Overpass ab, und zwar nur mit den Grenzen des Kartenausschnitts – weder deine Position noch deine Konto-ID werden an Overpass übermittelt. Orte, die du dir merkst, speichert die App nur auf deinem Gerät.",
      "Vor der Systemabfrage erklären wir dir in der App, wofür der Standort verwendet wird. Du kannst die Berechtigung jederzeit in den Einstellungen deines Geräts widerrufen; Furly funktioniert dann weiter, lediglich die Karten- und Umkreisfunktionen sowie Umkreis-Benachrichtigungen stehen nicht mehr zur Verfügung.",
      "Kein Hintergrund-Tracking: Furly erfasst den Standort nicht dauerhaft im Hintergrund. Die App fordert keine Berechtigung für Hintergrundstandort an.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über die Berechtigungsabfrage).",
    ],
  },
  {
    heading: "7. Push- und lokale Benachrichtigungen",
    paragraphs: [
      "Für Push-Benachrichtigungen (z. B. Lost&Found-Meldungen in deiner Nähe) wird über Firebase Cloud Messaging ein geräteindividuelles Token erzeugt, das wir deinem Konto zuordnen und speichern. Dieses Token ermöglicht die Zustellung von Benachrichtigungen an dein Gerät; Google erhält dabei technische Zustellinformationen.",
      "Erinnerungen an Termine und Aufgaben werden zusätzlich als lokale Benachrichtigungen direkt auf deinem Gerät geplant. Hierfür verlassen keine Daten dein Gerät. Damit geplante Erinnerungen einen Neustart des Geräts überdauern, verwendet die App die Berechtigung RECEIVE_BOOT_COMPLETED.",
      "Du kannst Benachrichtigungen jederzeit in den App- oder Systemeinstellungen deaktivieren.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über die Benachrichtigungsberechtigung).",
    ],
  },
  {
    heading: "8. Fotos, Kamera und Fotomediathek",
    paragraphs: [
      "Du kannst ein Profilbild, Fotos deiner Tiere sowie Fotos zu Lost&Found-Meldungen hochladen. Die Auswahl erfolgt entweder aus deiner Fotomediathek oder über die Kamera deines Geräts. Die App greift dabei nicht eigenständig auf die Kamera zu, sondern startet die System-Kamera-App; ausgewählte Bilder werden ausschließlich nach deiner Auswahl verarbeitet.",
      "Die Bilder werden in getrennten, nicht öffentlich zugänglichen Speicherbereichen abgelegt:",
    ],
    table: {
      head: ["Bereich", "Inhalt", "Sichtbarkeit", "Max. Größe"],
      rows: [
        ["avatars", "Profilbilder", "nur du bzw. Anzeige deines Profils", "2 MB"],
        ["pet-images", "Tierfotos", "nur du", "5 MB"],
        ["lost-found-images", "Fotos in Suchmeldungen", "alle angemeldeten Nutzer", "5 MB"],
      ],
    },
    afterList: [
      "Bitte beachte, dass Fotos technische Zusatzinformationen (z. B. Aufnahmeort in den EXIF-Daten) enthalten können. Prüfe dies, bevor du Fotos in Lost&Found veröffentlichst.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO; bei Veröffentlichung in Lost&Found Art. 6 Abs. 1 lit. a DSGVO.",
    ],
  },
  {
    heading: "9. Lokal auf deinem Gerät gespeicherte Daten",
    paragraphs: [
      "Einträge zu Gewicht, Fütterung und Aktivität, die Tagesroutine (Aufgaben und Haken), die Merkliste im Ratgeber, gemerkte Orte sowie App-Einstellungen (z. B. Sprache, Design) werden ausschließlich lokal auf deinem Gerät gespeichert. Diese Daten werden nicht an unsere Server übertragen.",
      "Notfallkarte, Giftnotruf-Nummern und Ratgeber-Artikel sind fest in der App enthalten und funktionieren ohne Internetverbindung; beim Lesen werden keine Daten übertragen. Auch die Schriftarten sind in der App enthalten, es werden keine Schriften von Google Fonts oder anderen Servern nachgeladen.",
      "Über die Funktion „Backup & Wiederherstellung\" in den Einstellungen kannst du diese Daten selbst exportieren. Der Export erfolgt nur auf deine ausdrückliche Aktion hin; wohin du die exportierte Datei speicherst oder weitergibst, entscheidest ausschließlich du.",
      "Wenn du dein Konto löschst, entfernt die App diese lokalen Daten mit. Beim Deinstallieren der App werden sie ebenfalls vom Gerät entfernt.",
    ],
  },
  {
    heading: "10. Server-Logdaten",
    paragraphs: [
      "Beim Zugriff auf unsere Server-Infrastruktur werden technisch bedingt Verbindungsdaten verarbeitet, insbesondere IP-Adresse, Zeitpunkt der Anfrage, aufgerufener Endpunkt und Statuscode. Diese Daten dienen dem sicheren Betrieb, der Erkennung von Missbrauch und der Fehleranalyse und werden nur kurzzeitig vorgehalten.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und funktionsfähigen Betrieb).",
    ],
  },
  {
    heading: "11. Meldungen von Inhalten (Moderation)",
    paragraphs: [
      "Community-Beiträge, Lost&Found-Meldungen und KI-Antworten kannst du über die Melden-Funktion beanstanden. Wir speichern dabei den gemeldeten Inhalt, den angegebenen Grund, den Zeitpunkt sowie deine Konto-ID, um Mehrfachmeldungen und Missbrauch der Meldefunktion zu erkennen. Meldungen sind für andere Nutzer nicht einsehbar.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren Plattform).",
    ],
  },
  {
    heading: "12. Berechtigungen der App im Überblick",
    table: {
      head: ["Berechtigung", "Wofür", "Erforderlich?"],
      rows: [
        ["Standort (genau/ungefähr)", "Tierarzt-Karte, Lost&Found-Umkreis, Umkreis-Benachrichtigungen", "optional"],
        ["Benachrichtigungen", "Erinnerungen, Lost&Found-Meldungen", "optional"],
        ["Kamera (über System-App)", "Aufnahme von Tier- und Profilfotos", "optional"],
        ["Fotomediathek (über System-Auswahl)", "Hochladen vorhandener Fotos", "optional"],
        ["Start nach Geräteneustart", "geplante Erinnerungen überdauern einen Neustart", "technisch notwendig"],
      ],
    },
    afterList: [
      "Furly fordert kein Mikrofon, keine Kontakte, keinen Kalender, keine Telefon- oder SMS-Berechtigung und keinen Zugriff auf Anrufprotokolle an.",
    ],
  },
  {
    heading: "13. Empfänger und Auftragsverarbeiter",
    table: {
      head: ["Dienst", "Zweck", "Anbieter", "Ort der Verarbeitung"],
      rows: [
        ["Supabase (Datenbank, Authentifizierung, Datei-Speicher, Serverfunktionen)", "Betrieb sämtlicher Kontodaten und App-Inhalte", "Supabase Inc., USA", "Rechenzentrum in der EU (Frankfurt am Main)"],
        ["Google Gemini API", "Erzeugung der KI-Antworten in Furly Chat und bei Trainingsplänen — nur nach Einwilligung", "Google Ireland Limited, Irland / Google LLC, USA", "USA"],
        ["Firebase Cloud Messaging", "Zustellung von Push-Benachrichtigungen", "Google Ireland Ltd. / Google LLC", "EU / USA"],
        ["Google Maps Platform", "Kartendarstellung für Tierarzt-Suche und Lost&Found", "Google Ireland Ltd. / Google LLC", "EU / USA"],
        ["Google Sign-In (optional)", "Anmeldung mit Google-Konto", "Google Ireland Ltd. / Google LLC", "EU / USA"],
        ["Sign in with Apple (optional)", "Anmeldung mit Apple-Konto", "Apple Inc. / Apple Distribution International Ltd.", "EU / USA"],
        ["Google Play", "Vertrieb und Aktualisierung der App; Zahlungsabwicklung für Furly Pro (eigene Verantwortung von Google)", "Google Ireland Ltd. / Google LLC", "EU / USA"],
        ["RevenueCat", "Abo-Verwaltung für Furly Pro (Kaufprüfung, Status, Wiederherstellung)", "RevenueCat, Inc., USA", "USA"],
        ["OpenStreetMap / Overpass API", "Quelle der Ortsdaten im Orte-Finder; Abfrage nur durch unseren Server mit Kartenausschnitten, ohne personenbezogene Daten", "OpenStreetMap Foundation bzw. Betreiber der Overpass-Instanz", "EU"],
      ],
    },
    afterList: [
      "Mit den als Auftragsverarbeiter tätigen Anbietern bestehen Verträge zur Auftragsverarbeitung gemäß Art. 28 DSGVO.",
    ],
  },
  {
    heading: "14. Datenübermittlung in Drittländer",
    paragraphs: [
      "Soweit Daten in die USA übermittelt werden, erfolgt dies auf Grundlage geeigneter Garantien nach Kapitel V der DSGVO:",
    ],
    list: [
      "Google Ireland Limited (Irland/USA): Übermittlung der Chat-Inhalte und Tierprofildaten auf Grundlage deiner ausdrücklichen Einwilligung (Art. 49 Abs. 1 lit. a DSGVO) sowie ergänzend auf Grundlage der Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO).",
      "Google LLC (USA): Übermittlung auf Grundlage des EU-US Data Privacy Framework, unter dem Google zertifiziert ist, sowie ergänzend der Standardvertragsklauseln.",
      "RevenueCat, Inc. (USA): Übermittlung der Abo-Daten (Abschnitt 4a) auf Grundlage der Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO).",
      "Supabase Inc. (USA): Die Speicherung deiner Daten erfolgt in einem Rechenzentrum innerhalb der EU. Ein Zugriff aus den USA (z. B. im Rahmen von Support und Wartung) ist nicht ausgeschlossen und erfolgt auf Grundlage der Standardvertragsklauseln.",
    ],
    afterList: [
      "Trotz dieser Garantien kann nicht vollständig ausgeschlossen werden, dass US-Behörden auf Grundlage US-amerikanischer Gesetze Zugriff auf Daten nehmen und dass hiergegen kein Rechtsschutz besteht, der dem europäischen Niveau entspricht. Wenn du dies vermeiden möchtest, nutze die Furly-Chat- und Trainingsplan-Funktionen bitte nicht.",
    ],
  },
  {
    heading: "15. Speicherdauer",
    table: {
      head: ["Daten", "Speicherdauer"],
      rows: [
        ["Konto- und Profildaten", "bis zur Löschung deines Kontos"],
        ["Tierprofile, Krankenakte, Erinnerungen, Tierarztliste", "bis zu deiner Löschung des jeweiligen Eintrags bzw. bis zur Kontolöschung"],
        ["Chat-Verläufe und Trainingspläne", "bis zu deiner Löschung bzw. bis zur Kontolöschung"],
        ["Abo-Status (Furly Pro)", "bis zur Kontolöschung; bei RevenueCat bis zur Löschung des Kundenkontos, die wir bei deiner Kontolöschung veranlassen"],
        ["Zähler der Chat-Nachrichten pro Tag", "bis zur Kontolöschung; nur Anzahl je Tag, keine Inhalte"],
        ["Community- und Lost&Found-Beiträge inkl. Fotos", "bis zu deiner Löschung bzw. bis zur Kontolöschung"],
        ["Standortangabe", "es wird nur die jeweils letzte Position gespeichert (Überschreibung); Löschung mit dem Konto"],
        ["Geräte-Push-Token", "bis zum Widerruf der Benachrichtigungen, zur Deinstallation oder zur Kontolöschung"],
        ["Meldungen von Inhalten", "bis zum Abschluss der Prüfung, längstens 12 Monate"],
        ["Server-Logdaten", "kurzfristig, in der Regel wenige Tage"],
      ],
    },
    afterList: [
      "Bestehen gesetzliche Aufbewahrungspflichten, werden die betroffenen Daten bis zum Ablauf der jeweiligen Frist gesperrt statt gelöscht.",
    ],
  },
  {
    heading: "16. Konto und Daten löschen",
    list: [
      "Du kannst dein Konto jederzeit selbst und vollständig löschen:",
      "App → Profil → Einstellungen → Konto löschen",
    ],
    afterList: [
      "Dabei werden unwiderruflich gelöscht:",
    ],
  },
  {
    list: [
      "dein Konto einschließlich Anmeldedaten,",
      "Profil und Profilbild,",
      "alle Tierprofile, Krankenakte- und Impfeinträge sowie Erinnerungen,",
      "deine Tierarztliste,",
      "alle Chat-Verläufe und Trainingspläne,",
      "alle Community-Beiträge, Likes und Lost&Found-Meldungen,",
      "gespeicherte Standortangabe und Geräte-Push-Token,",
      "der Abo-Status und die Zähler des Chat-Kontingents; bei RevenueCat veranlassen wir die Löschung deines Kundenkontos,",
      "alle von dir hochgeladenen Fotos in sämtlichen Speicherbereichen.",
    ],
    afterList: [
      "Die Löschung erfolgt unmittelbar und kann nicht rückgängig gemacht werden. Die lokal auf deinem Gerät gespeicherten Daten (Gewicht, Fütterung, Aktivität, Kalendernotizen, Tagesroutine, Merkliste) löscht die App dabei ebenfalls. Ein laufendes Abo kündigt die Kontolöschung nicht: Kündige Furly Pro bitte vorher in Google Play, sonst verlängert Google es weiter. Unabhängig davon kannst du sie jederzeit durch Deinstallation der App entfernen.",
      "Falls du keinen Zugriff mehr auf die App hast, kannst du die Löschung formlos per E-Mail an info@simplynext.de verlangen. Wir bestätigen den Eingang und führen die Löschung ohne schuldhaftes Zögern, spätestens innerhalb von 30 Tagen, durch.",
    ],
  },
  {
    heading: "17. Deine Rechte nach der DSGVO",
    paragraphs: [
      "Dir stehen folgende Rechte zu:",
    ],
    list: [
      "Auskunft über die zu dir gespeicherten Daten (Art. 15 DSGVO)",
      "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
      "Löschung (Art. 17 DSGVO) — siehe Abschnitt 16",
      "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
      "Datenübertragbarkeit in einem gängigen Format (Art. 20 DSGVO)",
      "Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO)",
      "Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO) — etwa für Furly Chat, Standort oder Benachrichtigungen",
    ],
    afterList: [
      "Zur Ausübung genügt eine formlose E-Mail an info@simplynext.de.",
      "Unabhängig davon steht dir ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO), insbesondere in dem Mitgliedstaat deines Aufenthaltsorts, deines Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.",
      "Die für uns zuständige Aufsichtsbehörde ist:",
      "Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg",
      "Lautenschlagerstraße 20, 70173 Stuttgart",
      "https://www.baden-wuerttemberg.datenschutz.de",
    ],
  },
  {
    heading: "18. Was Furly nicht tut",
    list: [
      "Wir verkaufen deine Daten nicht und geben sie nicht zu Werbezwecken weiter.",
      "Furly enthält keine Werbung und keine Werbe-SDKs.",
      "Furly enthält keine Analyse- oder Tracking-Werkzeuge (kein Analytics, kein Crash-Reporting-SDK, keine Nutzungsprofile).",
      "Es werden keine automatisierten Entscheidungen mit rechtlicher Wirkung oder ähnlich erheblicher Beeinträchtigung im Sinne von Art. 22 DSGVO getroffen.",
      "Schriftarten sind fest in der App enthalten; es werden keine Schriftarten von externen Servern (z. B. Google Fonts) nachgeladen.",
      "Es werden keine Werbe-IDs oder geräteübergreifenden Kennungen zu Marketingzwecken erhoben.",
    ],
  },
  {
    heading: "19. Kinder und Jugendliche",
    paragraphs: [
      "Furly richtet sich an Erwachsene und ist nicht für Kinder bestimmt. Insbesondere der KI-Assistent sowie Lost&Found mit öffentlich sichtbaren Kontaktangaben setzen ein erwachsenes Verständnis voraus. Wir erheben nicht wissentlich Daten von Kindern unter 16 Jahren. Sollten wir Kenntnis davon erlangen, dass ein Konto ohne die erforderliche Einwilligung der Sorgeberechtigten angelegt wurde, löschen wir es.",
    ],
  },
  {
    heading: "20. Datensicherheit",
    paragraphs: [
      "Die Übertragung zwischen App und Server erfolgt ausschließlich verschlüsselt (TLS/HTTPS). Der Zugriff auf Datenbankinhalte ist durch zeilenbasierte Zugriffsregeln abgesichert, sodass jedes Konto ausschließlich auf die eigenen Daten zugreifen kann. Datei-Speicherbereiche sind nicht öffentlich zugänglich. Passwörter werden ausschließlich als kryptografischer Hash gespeichert. Der Zugangsschlüssel zur KI-Schnittstelle liegt ausschließlich serverseitig und ist nicht in der App enthalten.",
    ],
  },
  {
    heading: "21. Änderungen dieser Erklärung",
    paragraphs: [
      "Wir passen diese Erklärung an, wenn sich unsere Datenverarbeitung ändert. Die jeweils aktuelle Fassung ist stets unter der in der App verlinkten Adresse abrufbar. Bei wesentlichen Änderungen informieren wir dich zusätzlich in der App.",
    ],
  },
];

export const furlyAgb: LegalSection[] = [
  {
    heading: "Anbieter",
    list: [
      "SimplyNext",
      "Vollständige Anbieterangaben: siehe Impressum (https://www.simplynext.de/de/apps/furly/impressum)",
    ],
  },
  {
    list: [
      "Telefon: 0174 3389049",
      "E-Mail: info@simplynext.de",
      "USt-IdNr. gemäß § 27a UStG: DE463824630",
    ],
    afterList: [
      "(nachfolgend „Anbieter\", „wir\" oder „uns\")",
    ],
  },
  {
    heading: "1. Geltungsbereich",
    paragraphs: [
      "1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB\") regeln das Vertragsverhältnis zwischen dem Anbieter und den Nutzerinnen und Nutzern (nachfolgend „du\" oder „Nutzer\") der mobilen Anwendung Furly (nachfolgend „App\").",
      "1.2 Mit der Registrierung eines Nutzerkontos erkennst du diese AGB als verbindlich an.",
      "1.3 Abweichende oder ergänzende Bedingungen der Nutzer werden nicht Vertragsbestandteil, es sei denn, wir stimmen ihrer Geltung ausdrücklich in Textform zu.",
      "1.4 Ergänzend gilt unsere Datenschutzerklärung, die den Umgang mit personenbezogenen Daten regelt.",
      "1.5 Die Bereitstellung der App erfolgt über den Vertriebsweg Google Play. Für den Bezug der App über diesen Store gelten zusätzlich die Bedingungen des jeweiligen Store-Betreibers; diese AGB regeln ausschließlich das Verhältnis zwischen dir und uns.",
    ],
  },
  {
    heading: "2. Vertragsgegenstand und Leistungsbeschreibung",
    paragraphs: [
      "2.1 Furly ist eine Anwendung für Haustierbesitzerinnen und Haustierbesitzer. Sie umfasst insbesondere:",
    ],
    list: [
      "Anlegen und Verwalten von Tierprofilen für Hunde, Katzen, Kleintiere, Vögel und andere Tiere,",
      "Dokumentation von Gesundheits- und Impfeinträgen (digitale Krankenakte) und deren Export als PDF („Tierarzt-Mappe\"),",
      "Erinnerungen an Termine und wiederkehrende Aufgaben sowie eine Tagesroutine zum Abhaken,",
      "Erfassung von Gewicht, Fütterung und Aktivität,",
      "einen Orte-Finder für Tierärzte, Hundewiesen, Tierbedarf und weitere Orte auf Grundlage von OpenStreetMap,",
      "eine Notfallkarte mit Erste-Hilfe-Hinweisen und Giftnotruf-Nummern sowie einen Ratgeber mit Giftcheck (redaktionelle Inhalte, auch ohne Internetverbindung),",
      "einen KI-gestützten Assistenten („Furly Chat\") sowie KI-generierte Trainingspläne,",
      "Trainings-Ratgeber (redaktionelle Inhalte),",
      "eine Community-Funktion zum Austausch mit anderen Nutzern (derzeit nicht freigeschaltet),",
      "eine Lost & Found-Funktion für Such- und Fundmeldungen zu Tieren einschließlich Suchplakat.",
    ],
    afterList: [
      "2.2 Die App dient der privaten Nutzung und der persönlichen Organisation. Sie ist kein Medizinprodukt und kein tierärztliches Beratungs-, Diagnose- oder Behandlungsangebot.",
      "2.3 Ein Anspruch auf Bereitstellung einzelner Funktionen in unveränderter Form besteht nicht. Der Funktionsumfang kann sich im Rahmen der Weiterentwicklung ändern (siehe Ziffer 11).",
    ],
  },
  {
    heading: "3. Kostenlose Nutzung und Furly Pro",
    paragraphs: [
      "3.1 Kostenlose Nutzung. Die Grundfunktionen der App sind unentgeltlich. Dauerhaft kostenlos sind insbesondere: Krankenakte und Impfausweis, Vermisst & Gefunden einschließlich Suchplakat, Notfallkarte, Giftcheck, das Lesen des Ratgebers, der Orte-Finder mit allen Kategorien, ein Tierprofil, Erinnerungen, die Tagesroutine und die Trainingsübungen.",
      "3.2 Furly Pro. Gegen Entgelt kannst du das Abonnement „Furly Pro\" abschließen. Es erweitert die App um:",
    ],
    list: [
      "beliebig viele Tierprofile (kostenlos: eines),",
      "Furly Chat ohne Tageskontingent (kostenlos: fünf Nachrichten pro Tag),",
      "beliebig viele KI-Trainingspläne (kostenlos: einer zum Ausprobieren),",
      "die Tierarzt-Mappe als PDF,",
      "Statistiken und Gewichtsverlauf über den gesamten Zeitraum (kostenlos: die letzten 30 Tage),",
      "eine Merkliste im Ratgeber.",
    ],
    afterList: [
      "Notfall-Funktionen (Notfallkarte, Giftnotruf, Notfallhinweise im Chat) sind nie eingeschränkt.",
      "3.3 Laufzeit und Preis. Furly Pro ist als Monatsabo und als Jahresabo erhältlich. Der jeweils gültige Preis einschließlich Umsatzsteuer wird dir vor dem Kauf in der App und im Kaufdialog von Google Play angezeigt. Für das Jahresabo kann ein kostenloser Testzeitraum angeboten werden; dessen Dauer wird vor dem Kauf angezeigt.",
      "3.4 Vertragsschluss und Zahlung. Der Kauf erfolgt ausschließlich über das Abrechnungssystem von Google Play. Die Zahlung wickelt Google ab; es gelten ergänzend die Bedingungen von Google Play. Den Vertrag über die Pro-Leistungen schließt du mit uns, sobald du den Kauf im Kaufdialog von Google Play bestätigst.",
      "3.5 Automatische Verlängerung. Das Abo verlängert sich automatisch um die gewählte Laufzeit (einen Monat bzw. ein Jahr), wenn du es nicht spätestens 24 Stunden vor Ablauf der laufenden Periode kündigst. Ein kostenloser Testzeitraum geht automatisch in das bezahlte Abo über, wenn du nicht vor seinem Ende kündigst; abgebucht wird erst danach.",
      "3.6 Kündigung. Du kannst das Abo jederzeit in Google Play kündigen (Google Play → Profil → Zahlungen und Abos → Abos → Furly), auch über den Link „Abo in Google Play verwalten\" in der App. Die Kündigung wirkt zum Ende der laufenden Periode; bis dahin bleibt Furly Pro aktiv. Eine anteilige Erstattung für angebrochene Perioden erfolgt nicht, soweit gesetzlich nichts anderes vorgeschrieben ist.",
      "3.7 Wiederherstellen. Nach einem Gerätewechsel oder einer Neuinstallation kannst du ein bestehendes Abo über „Käufe wiederherstellen\" in der App deinem Konto wieder zuordnen. Furly Pro ist an dein Furly-Konto gebunden.",
      "3.8 Preisänderungen. Preisänderungen für bestehende Abos werden dir rechtzeitig vor ihrem Wirksamwerden über Google Play angekündigt. Soweit Google Play dafür deine Zustimmung verlangt, gilt der neue Preis erst nach deiner Zustimmung; ohne Zustimmung endet das Abo zum Ende der laufenden Periode.",
      "3.9 Kosten für die Datenübertragung durch deinen Mobilfunk- oder Internetanbieter trägst du selbst.",
    ],
  },
  {
    heading: "4. Registrierung, Nutzerkonto und Mindestalter",
    paragraphs: [
      "4.1 Die Nutzung setzt die Anlage eines Nutzerkontos voraus. Die Registrierung ist per E-Mail-Adresse und Passwort oder über die Anmeldedienste von Google bzw. Apple möglich.",
      "4.2 Bei der Registrierung sind wahrheitsgemäße Angaben zu machen. Änderungen sind im Profil zu aktualisieren.",
      "4.3 Mindestalter: Die App richtet sich an Personen ab 16 Jahren. Personen unter 16 Jahren dürfen die App nur mit Einwilligung der Sorgeberechtigten nutzen.",
      "4.4 Du bist verpflichtet, deine Zugangsdaten geheim zu halten und vor dem Zugriff Dritter zu schützen. Besteht der Verdacht eines Missbrauchs, informiere uns bitte unverzüglich unter info@simplynext.de.",
      "4.5 Pro Person ist grundsätzlich ein Konto anzulegen. Die Weitergabe des Kontos an Dritte ist unzulässig.",
    ],
  },
  {
    heading: "5. Nutzungsrechte an der App",
    paragraphs: [
      "5.1 Wir räumen dir für die Dauer des Vertragsverhältnisses ein einfaches, nicht übertragbares, nicht unterlizenzierbares und widerrufliches Recht ein, die App auf den von dir genutzten Endgeräten bestimmungsgemäß zu nutzen.",
      "5.2 Nicht gestattet sind insbesondere:",
    ],
    list: [
      "die Vervielfältigung, Bearbeitung, Dekompilierung oder das Reverse Engineering der App, soweit dies nicht gesetzlich zwingend erlaubt ist (§ 69e UrhG),",
      "das Umgehen technischer Schutzmaßnahmen oder Zugangsbeschränkungen,",
      "das automatisierte Auslesen von Inhalten (Scraping, Crawling) oder der Einsatz von Bots,",
      "die Nutzung der App oder ihrer Inhalte zum Training eigener oder fremder KI-Modelle,",
      "jede über den vertragsgemäßen Gebrauch hinausgehende Belastung unserer Server.",
    ],
    afterList: [
      "5.3 Sämtliche Rechte an der App, ihren redaktionellen Inhalten, Marken, Logos und Gestaltungselementen verbleiben bei uns bzw. den jeweiligen Rechteinhabern.",
    ],
  },
  {
    heading: "6. Pflichten der Nutzerinnen und Nutzer",
    paragraphs: [
      "6.1 Du verpflichtest dich, bei der Nutzung der App geltendes Recht zu beachten und keine Inhalte einzustellen oder zu übermitteln, die",
    ],
    list: [
      "gegen Strafgesetze verstoßen,",
      "beleidigend, verleumderisch, bedrohend, diskriminierend, hetzerisch oder gewaltverherrlichend sind,",
      "pornografisch sind oder gegen den Jugendschutz verstoßen,",
      "Rechte Dritter verletzen (insbesondere Urheber-, Marken-, Persönlichkeits- oder Datenschutzrechte),",
      "Tierquälerei zeigen, verharmlosen oder dazu anleiten,",
      "irreführend sind oder der Täuschung dienen (z. B. falsche Fund- oder Suchmeldungen),",
      "Werbung, Spam, Kettenbriefe oder Schneeballsysteme enthalten,",
      "Schadsoftware oder Schadcode enthalten.",
    ],
    afterList: [
      "6.2 Du stellst sicher, dass du an allen von dir hochgeladenen Inhalten — insbesondere Fotos — die erforderlichen Rechte besitzt. Zeigt ein Foto identifizierbare Personen, benötigst du deren Einwilligung.",
      "6.3 Personenbezogene Daten Dritter (z. B. Namen von Tierärztinnen und Tierärzten) darfst du nur eintragen, soweit dies für deine eigene Dokumentation erforderlich ist. Eine Veröffentlichung solcher Daten in der Community ist unzulässig.",
      "6.4 Du bist für die Richtigkeit deiner eigenen Angaben und Beiträge verantwortlich.",
      "6.5 Du stellst uns von sämtlichen Ansprüchen Dritter frei, die aufgrund einer schuldhaften Verletzung dieser Pflichten gegen uns geltend gemacht werden, einschließlich angemessener Kosten der Rechtsverteidigung.",
    ],
  },
  {
    heading: "7. Nutzergenerierte Inhalte und Rechteeinräumung",
    paragraphs: [
      "7.1 Inhalte, die du in der App einstellst (Beiträge, Fotos, Kommentare, Suchmeldungen), bleiben deine Inhalte. Wir erheben daran keinen Eigentumsanspruch.",
      "7.2 Für die technische Bereitstellung räumst du uns ein einfaches, unentgeltliches, räumlich unbeschränktes Nutzungsrecht ein, diese Inhalte zu speichern, zu vervielfältigen und im Rahmen der App den dafür vorgesehenen Nutzergruppen anzuzeigen. Dieses Recht ist auf den Betrieb der App beschränkt und endet mit der Löschung des jeweiligen Inhalts, soweit keine gesetzliche Aufbewahrungspflicht entgegensteht.",
      "7.3 Eine Nutzung deiner Inhalte für Werbezwecke, eine Weitergabe an Dritte zu deren eigenen Zwecken oder eine Verwendung zum Training von KI-Modellen findet nicht statt.",
      "7.4 Du kannst deine Inhalte jederzeit selbst löschen. Mit der Löschung deines Kontos werden alle von dir eingestellten Inhalte entfernt.",
    ],
  },
  {
    heading: "8. Furly Chat und KI-Trainingspläne",
    paragraphs: [
      "8.1 Furly Chat ist ein KI-gestützter Assistent. Die Antworten werden automatisiert erzeugt und können unvollständig, veraltet oder inhaltlich unzutreffend sein.",
      "Wichtig",
      "Furly Chat ersetzt keine tierärztliche Beratung, Untersuchung, Diagnose oder Behandlung. Bei gesundheitlichen Problemen deines Tieres wende dich bitte an eine Tierärztin oder einen Tierarzt; in Notfällen unverzüglich an eine tierärztliche Notaufnahme oder den tierärztlichen Notdienst.",
      "8.2 Die Nutzung ist optional und setzt eine gesonderte Einwilligung in die Übermittlung deiner Eingaben an unseren KI-Dienstleister voraus (Einzelheiten in der Datenschutzerklärung, Abschnitt 4).",
      "8.3 Werden in einer Anfrage Hinweise auf einen Notfall erkannt, wird keine inhaltliche KI-Antwort erzeugt, sondern auf tierärztliche Hilfe verwiesen. Diese Erkennung erfolgt automatisiert und kann fehlerhaft sein; sie ersetzt keine eigene Einschätzung der Situation.",
      "8.4 KI-generierte Trainingspläne sind unverbindliche Vorschläge. Ihre Umsetzung erfolgt in eigener Verantwortung und unter Berücksichtigung des individuellen Gesundheitszustands und Temperaments deines Tieres.",
      "8.5 Es ist untersagt, den Assistenten für rechtswidrige Zwecke zu nutzen, Sicherheitsmechanismen zu umgehen oder die Schnittstelle automatisiert bzw. missbräuchlich zu belasten.",
      "8.6 KI-generierte Antworten kannst du über die Melden-Funktion beanstanden.",
    ],
  },
  {
    heading: "9. Lost & Found — besondere Hinweise",
    paragraphs: [
      "9.1 In Such- und Fundmeldungen veröffentlichst du selbst die von dir eingegebenen Angaben, insbesondere Kontaktdaten, Ortsangabe, Datum sowie optional ein Foto und Standortkoordinaten.",
      "Wichtig",
      "Diese Angaben sind für alle angemeldeten Nutzerinnen und Nutzer sichtbar und können von diesen kopiert, gespeichert oder weitergegeben werden. Gib daher nur Kontaktdaten an, deren Veröffentlichung du bewusst in Kauf nimmst.",
      "9.2 Wir prüfen Meldungen nicht auf Richtigkeit und übernehmen keine Gewähr für ihre Vollständigkeit, Aktualität oder Wahrheitsgehalt.",
      "9.3 Die Kontaktaufnahme und jede weitere Kommunikation zwischen Nutzern erfolgt außerhalb der App und in eigener Verantwortung. Wir sind an einem etwaigen Zustandekommen von Vereinbarungen zwischen Nutzern nicht beteiligt und werden nicht Vertragspartei.",
      "9.4 Bitte sei bei der Übergabe von Tieren und beim Umgang mit Fremden umsichtig. Vereinbare Treffen möglichst an öffentlichen Orten.",
      "9.5 Missbräuchliche Meldungen — insbesondere erfundene Fundmeldungen oder solche mit betrügerischer Absicht — führen zur sofortigen Entfernung und können eine Kontosperrung nach sich ziehen.",
    ],
  },
  {
    heading: "10. Melde- und Moderationsverfahren",
    paragraphs: [
      "10.1 Inhalte in der Community, in Lost & Found sowie Antworten des KI-Assistenten kannst du über die integrierte Melden-Funktion beanstanden.",
      "10.2 Eingehende Meldungen prüfen wir in angemessener Frist. Bei Verstößen gegen diese AGB oder geltendes Recht können wir Inhalte entfernen oder sperren.",
      "10.3 Unabhängig von der Melden-Funktion kannst du Verstöße jederzeit per E-Mail an info@simplynext.de melden.",
      "10.4 Wir behalten uns vor, bei wiederholtem oder schwerwiegendem Verstoß das betroffene Konto vorübergehend oder dauerhaft zu sperren (siehe Ziffer 13).",
      "10.5 Über die Entfernung eigener Inhalte informieren wir dich, soweit dies möglich und rechtlich zulässig ist. Du hast die Möglichkeit, der Entscheidung per E-Mail zu widersprechen; wir prüfen den Widerspruch erneut.",
    ],
  },
  {
    heading: "11. Verfügbarkeit und Änderungen der App",
    paragraphs: [
      "11.1 Wir bemühen uns um eine möglichst unterbrechungsfreie Verfügbarkeit, schulden jedoch keine bestimmte Verfügbarkeitsquote. Insbesondere Wartungsarbeiten, Störungen bei eingesetzten Dienstleistern sowie Umstände außerhalb unseres Einflussbereichs können zu vorübergehenden Einschränkungen führen.",
      "11.2 Einzelne Funktionen setzen eine bestehende Internetverbindung, aktivierte Systemberechtigungen und Dienste Dritter (z. B. Kartendarstellung, Push-Zustellung) voraus. Deren Ausfall kann die Nutzbarkeit einschränken.",
      "11.3 Wir dürfen die App weiterentwickeln, Funktionen ändern, ergänzen oder einstellen, soweit dies für dich zumutbar ist. Über wesentliche Einschränkungen des Funktionsumfangs informieren wir in angemessener Frist in der App oder per E-Mail.",
      "11.4 Wir empfehlen, regelmäßig eigene Sicherungen deiner Daten anzulegen (Funktion „Backup & Wiederherstellung\" in den Einstellungen).",
    ],
  },
  {
    heading: "12. Haftung",
    paragraphs: [
      "12.1 Wir haften unbeschränkt",
    ],
    list: [
      "bei Vorsatz und grober Fahrlässigkeit,",
      "bei Verletzung von Leben, Körper oder Gesundheit,",
      "nach den Vorschriften des Produkthaftungsgesetzes,",
      "im Umfang einer von uns übernommenen Garantie.",
    ],
    afterList: [
      "12.2 Bei einfacher Fahrlässigkeit haften wir nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht) — also einer Pflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung du regelmäßig vertrauen darfst. In diesem Fall ist die Haftung auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.",
      "12.3 Im Übrigen ist die Haftung ausgeschlossen.",
      "12.4 Wir haften nicht für",
    ],
  },
  {
    list: [
      "die Richtigkeit, Vollständigkeit oder Aktualität von Inhalten des KI-Assistenten und der KI-Trainingspläne,",
      "Inhalte, die von anderen Nutzern eingestellt wurden,",
      "Schäden, die aus der Kontaktaufnahme oder Vereinbarungen zwischen Nutzern entstehen,",
      "den Verlust von Daten, soweit dieser bei ordnungsgemäßer und regelmäßiger Datensicherung durch dich vermeidbar gewesen wäre.",
    ],
    afterList: [
      "12.5 Die vorstehenden Haftungsbeschränkungen gelten auch zugunsten unserer gesetzlichen Vertreter und Erfüllungsgehilfen.",
      "12.6 Eine Änderung der Beweislast zu deinem Nachteil ist mit den vorstehenden Regelungen nicht verbunden.",
    ],
  },
  {
    heading: "13. Vertragsdauer, Kündigung und Sperrung",
    paragraphs: [
      "13.1 Der Nutzungsvertrag wird auf unbestimmte Zeit geschlossen.",
    ],
    list: [
      "13.2 Du kannst den Vertrag jederzeit und ohne Angabe von Gründen beenden, indem du dein Konto in der App löschst:",
      "Profil → Einstellungen → Konto löschen",
    ],
    afterList: [
      "Mit der Löschung werden deine Daten entsprechend Abschnitt 16 der Datenschutzerklärung unwiderruflich entfernt.",
      "13.3 Hast du keinen Zugriff mehr auf die App, genügt eine formlose E-Mail an info@simplynext.de.",
      "13.4 Wir können den Vertrag mit einer Frist von 14 Tagen zum Monatsende in Textform kündigen. Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.",
      "13.5 Bei erheblichen oder wiederholten Verstößen gegen diese AGB können wir dein Konto vorübergehend sperren oder außerordentlich kündigen. Vor einer dauerhaften Sperrung berücksichtigen wir deine Interessen angemessen; bei schwerwiegenden Verstößen (z. B. Straftaten, Betrugsversuchen) ist eine sofortige Sperrung ohne vorherige Ankündigung möglich.",
      "13.6 Das Löschen deines Kontos beendet ein laufendes Abo bei Google Play nicht automatisch. Kündige Furly Pro bitte vorher in Google Play (Ziffer 3.6), damit keine weiteren Zahlungen anfallen.",
    ],
  },
  {
    heading: "14. Widerrufsrecht",
    paragraphs: [
      "14.1 Kostenlose Nutzung. Soweit dir als Verbraucher im Zusammenhang mit der Bereitstellung digitaler Inhalte gegen die Überlassung personenbezogener Daten ein gesetzliches Widerrufsrecht zusteht, kannst du dieses innerhalb von 14 Tagen ab Vertragsschluss (Registrierung) ohne Angabe von Gründen ausüben. Es genügt eine eindeutige Erklärung per E-Mail an info@simplynext.de oder die Löschung deines Kontos in der App.",
      "14.2 Furly Pro. Beim Abschluss von Furly Pro steht dir als Verbraucher ein gesetzliches Widerrufsrecht von 14 Tagen zu. Das Widerrufsrecht erlischt vorzeitig, wenn wir mit der Bereitstellung der Pro-Funktionen begonnen haben, nachdem du ausdrücklich zugestimmt hast, dass wir vor Ablauf der Widerrufsfrist beginnen, und du deine Kenntnis davon bestätigt hast, dass du dadurch dein Widerrufsrecht verlierst.",
      "14.3 Erstattungen für Käufe über Google Play kannst du außerdem nach den Erstattungsrichtlinien von Google Play bei Google beantragen.",
      "14.4 Unabhängig von einem Widerrufsrecht kannst du dein Konto jederzeit ohne Frist selbst löschen (Ziffer 13.2) und dein Abo jederzeit zum Ende der Laufzeit kündigen (Ziffer 3.6).",
    ],
  },
  {
    heading: "15. Änderungen dieser Bedingungen",
    paragraphs: [
      "15.1 Wir können diese AGB ändern, wenn dies aufgrund von Änderungen der Rechtslage, höchstrichterlicher Rechtsprechung, technischer Weiterentwicklung oder einer Erweiterung des Funktionsumfangs erforderlich wird und dich dies nicht unangemessen benachteiligt.",
      "15.2 Über beabsichtigte Änderungen informieren wir dich mindestens 30 Tage vor Inkrafttreten in der App oder per E-Mail.",
      "15.3 Widersprichst du nicht innerhalb dieser Frist und nutzt die App weiter, gelten die Änderungen als angenommen. Auf die Bedeutung deines Schweigens weisen wir dich in der Änderungsmitteilung gesondert hin.",
      "15.4 Widersprichst du, kannst du den Vertrag jederzeit durch Löschung deines Kontos beenden; wir können in diesem Fall ordentlich kündigen.",
    ],
  },
  {
    heading: "16. Streitbeilegung",
    paragraphs: [
      "16.1 Die Europäische Kommission hat ihre Plattform zur Online-Streitbeilegung (OS-Plattform) eingestellt; eine Verlinkung erfolgt daher nicht mehr.",
      "16.2 Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 Abs. 1 Nr. 1 VSBG).",
      "16.3 Bei Beschwerden oder Problemen wende dich bitte zunächst direkt an uns unter info@simplynext.de. Wir bemühen uns um eine schnelle und einvernehmliche Lösung.",
    ],
  },
  {
    heading: "17. Schlussbestimmungen",
    paragraphs: [
      "17.1 Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Hast du deinen gewöhnlichen Aufenthalt in einem anderen Staat, bleiben die zwingenden Verbraucherschutzvorschriften dieses Staates unberührt.",
      "17.2 Ist der Nutzer Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist Gerichtsstand für alle Streitigkeiten aus diesem Vertragsverhältnis unser Geschäftssitz. Für Verbraucher gelten die gesetzlichen Gerichtsstände.",
      "17.3 Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung.",
      "17.4 Änderungen und Ergänzungen bedürfen der Textform. Dies gilt auch für die Abbedingung dieses Formerfordernisses.",
    ],
  },
];
