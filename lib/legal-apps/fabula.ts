import type { LegalSection } from "../legal";

/**
 * App-spezifische Rechtstexte für Fabula – übernommen aus
 * vory/docs/{datenschutzerklaerung,agb}.md (Stand: 15.09.2026, zuletzt
 * geändert mit vory-Commit 0065f05).
 *
 * Quelle bleibt das Markdown-Dokument im App-Repository: Änderungen dort
 * müssen hier nachgezogen werden. Erzeugt mit einem Konverter, der
 * Überschriften, Absätze, Listen und Tabellen auf LegalSection abbildet.
 * HTML-Kommentare der Vorlage (interne Merker) entfallen.
 */

export const fabulaDatenschutz: LegalSection[] = [
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
    ],
  },
  {
    list: [
      "E-Mail: info@simplynext.de",
      "Telefon: 01743389049",
      "USt-IdNr.: DE463824630",
    ],
    afterList: [
      "(Angaben identisch mit dem Impressum)",
      "Ein betrieblicher Datenschutzbeauftragter ist nicht bestellt, da die Voraussetzungen nach Art. 37 DSGVO / § 38 BDSG nicht vorliegen (Einzelunternehmen ohne mindestens 20 ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigte Personen; keine umfangreiche Verarbeitung besonderer Kategorien personenbezogener Daten als Kerntätigkeit).",
    ],
  },
  {
    heading: "2. Das Wichtigste in Kurzform",
    paragraphs: [
      "Fabula erfindet Hörgeschichten für Kinder. Sie als Elternteil legen Figuren an (etwa Ihr Kind unter seinem Vornamen oder einem Spitznamen), wählen ein Genre und auf Wunsch ein paar Stichwörter. Daraus erzeugt eine künstliche Intelligenz von OpenAI eine Geschichte in fünf Kapiteln und liest sie mit einer synthetischen Stimme vor. Neue Geschichten, Figuren und Käufe sind durch einen Eltern-PIN geschützt; Kinder hören nur zu und geben nichts ein.",
      "Dafür müssen personenbezogene Daten Ihr Gerät verlassen – anders als bei einer reinen Offline-App:",
    ],
    list: [
      "Ihr Nutzerkonto (E-Mail-Adresse, Passwort) liegt bei unserem Hosting-Dienstleister Supabase auf Servern in Frankfurt am Main.",
      "Figuren, Stichwörter, Geschichten und Hörfassungen liegen ebenfalls dort, damit Sie sie auf jedem Gerät wiederfinden.",
      "Zum Schreiben einer Geschichte übermitteln unsere Server Alter, Geschlechtsangabe und Rolle der Figuren, Genre, Stichwörter und Sprache an OpenAI – die Namen der Figuren ersetzen wir dabei durch Platzhalter und setzen sie erst auf unserem Server wieder ein. Nur zum Vorlesen erhält OpenAI den fertigen Kapiteltext mit den Namen. E-Mail-Adresse und Nutzer-ID werden nie übermittelt. OpenAI verwendet die Daten nicht zum Training seiner Modelle.",
      "Käufe von Credits laufen über Google Play; den Kaufstatus verwalten wir mit RevenueCat. Zahlungsdaten sehen wir nie.",
      "E-Mails (Bestätigung der Registrierung, Kaufbestätigung, Bestätigung eines Widerrufs) versenden wir über Resend.",
    ],
    ordered: true,
    afterList: [
      "Was Fabula nicht tut: keine Werbung, keine Werbe-ID, keine Analyse- oder Tracking-Werkzeuge, keine Standortdaten, keine Fotos, keine Mikrofonaufnahmen, kein Teilen von Geschichten mit anderen Nutzern, kein Verkauf von Daten.",
    ],
  },
  {
    heading: "3. Nutzerkonto",
  },
  {
    heading: "3.1 Registrierung und Anmeldung",
    level: 3,
    paragraphs: [
      "Fabula benötigt ein Nutzerkonto, weil Geschichten auf unseren Servern erzeugt, gespeichert und mit Ihrem Guthaben verrechnet werden. Das Konto ist für Erwachsene bestimmt – in der Regel für einen Elternteil; Kinder hören die Geschichten über das Konto der Eltern (siehe Ziff. 13).",
      "Bei der Registrierung verarbeiten wir:",
    ],
    list: [
      "Ihre E-Mail-Adresse,",
      "Ihr Passwort – ausschließlich als kryptografischer Hashwert; das Passwort im Klartext ist für uns nicht einsehbar,",
      "eine zufällig erzeugte Nutzer-ID (UUID), mit der Ihre Figuren, Geschichten und Ihr Guthaben verknüpft sind,",
      "Zeitpunkte von Registrierung, E-Mail-Bestätigung und letzter Anmeldung,",
      "die Version der AGB, die Sie bei der Registrierung akzeptiert haben, und den Zeitpunkt der Annahme,",
      "Ihre Einstellung für die Vorlesestimme (sofern Sie eine wählen).",
    ],
    afterList: [
      "Die Angabe von E-Mail-Adresse und Passwort ist für den Vertragsschluss erforderlich. Ohne sie kann Fabula nicht genutzt werden.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Durchführung des Nutzungsvertrags); für den Nachweis der AGB-Annahme Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse, den Vertragsinhalt belegen zu können).",
    ],
  },
  {
    heading: "3.2 E-Mails",
    level: 3,
    paragraphs: [
      "An Ihre E-Mail-Adresse senden wir ausschließlich E-Mails, die für das Konto oder den Vertrag nötig sind:",
    ],
    list: [
      "die Bestätigung der Registrierung und – auf Ihre Anforderung – einen Link zum Zurücksetzen des Passworts,",
      "nach jedem Kauf eine Vertragsbestätigung mit Produkt, Preis, Zeitpunkt, Bestellnummer und dem Wortlaut Ihrer Zustimmung (Ziff. 5.4) – dazu sind wir gesetzlich verpflichtet (§ 312f Abs. 3 BGB),",
      "nach einem Widerruf eine Eingangsbestätigung mit Inhalt, Datum und Uhrzeit (§ 356a BGB).",
    ],
    afterList: [
      "Der Versand erfolgt über Resend (Ziff. 9.3). Werbe-E-Mails oder Newsletter versenden wir nicht.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO; für Vertrags- und Widerrufsbestätigung Art. 6 Abs. 1 lit. c DSGVO (gesetzliche Pflicht).",
    ],
  },
  {
    heading: "3.3 Sicherheitsprotokolle der Anmeldung",
    level: 3,
    paragraphs: [
      "Bei Anmeldung, Registrierung, Passwortänderung und Abmeldung protokolliert der Authentifizierungsdienst das Ereignis mit Zeitpunkt, Art des Vorgangs und der dabei verwendeten IP-Adresse. Diese Einträge dienen dazu, Angriffe auf Konten (z. B. massenhafte Anmeldeversuche) zu erkennen und abzuwehren. Wir löschen sie spätestens 30 Tage nach ihrer Entstehung.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Sicherheit der Nutzerkonten) sowie Art. 32 DSGVO.",
    ],
  },
  {
    heading: "4. Figuren, Geschichten und Hörfassungen",
  },
  {
    heading: "4.1 Figuren",
    level: 3,
    paragraphs: [
      "Sie können Figuren anlegen, die in Geschichten mitspielen. Gespeichert werden:",
    ],
    list: [
      "der Name der Figur (frei eingegeben, 1–60 Zeichen),",
      "das Alter der Figur,",
      "eine Geschlechtsangabe (weiblich, männlich oder neutral) – sie dient allein dazu, dass die Geschichte die richtigen Pronomen verwendet,",
      "die gewählte Illustration (aus vorgegebenen Zeichnungen; Fotos können nicht hochgeladen werden),",
      "die Rolle (Haupt- oder Nebenfigur).",
    ],
    afterList: [
      "Wenn Sie eine Figur nach Ihrem Kind oder einer anderen realen Person benennen, sind diese Angaben personenbezogene Daten dieser Person. Wir erhalten sie von Ihnen, nicht von der betroffenen Person selbst (Art. 14 DSGVO). Fabula braucht dafür keinen echten Namen: Ein Vorname oder Spitzname genügt, und wir bitten Sie, keinen Nachnamen einzugeben (die App weist am Namensfeld darauf hin).",
      "Figuren anlegen und bearbeiten ist nur nach Eingabe des Eltern-PIN möglich (Ziff. 13).",
      "Die Figuren-Angaben sind freiwillig. Geschichten lassen sich auch ohne eigene Figuren erzeugen; die KI erfindet dann die Hauptfiguren.",
      "Rechtsgrundlage: für Ihre eigenen Angaben Art. 6 Abs. 1 lit. b DSGVO; soweit Figuren reale Dritte – insbesondere Ihr Kind – betreffen, Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt darin, die von Ihnen als Elternteil gewünschte, persönliche Geschichte für Ihr Kind zu erzeugen. Die Interessen des Kindes überwiegen nicht, weil nur wenige, von Ihnen selbst gewählte Angaben verarbeitet werden, diese niemandem außer Ihnen angezeigt, nicht ausgewertet und nicht zu Werbezwecken genutzt werden.",
    ],
  },
  {
    heading: "4.2 Geschichten und Stichwörter",
    level: 3,
    paragraphs: [
      "Wenn Sie eine Geschichte erstellen, speichern wir:",
    ],
    list: [
      "das gewählte Genre und die Sprache,",
      "Ihre Stichwörter (freie Texteingabe, optional),",
      "welche Figuren mitspielen,",
      "den von der KI erzeugten Titel und Text der fünf Kapitel,",
      "technische Angaben zur Geschichte (Status der Erzeugung, gewählte Vorlesestimme, Erzeugungszeitpunkt, bei Fortsetzungen die Verknüpfung zu den vorherigen Teilen und die zuletzt verwendete Handlungsform, damit zwei Geschichten hintereinander nicht gleich aufgebaut sind).",
    ],
    afterList: [
      "Bitte geben Sie in Stichwörtern keine sensiblen Angaben ein – etwa Krankheiten, Religion, Herkunft oder vollständige Namen und Adressen realer Personen. Die Stichwörter werden an die KI übermittelt (Ziff. 4.4); kommen darin die Namen Ihrer Figuren vor, ersetzen wir sie vorher durch Platzhalter. Vor dem Erzeugen prüft ein automatischer Inhaltsfilter, ob die Stichwörter zu einer Kindergeschichte passen (Ziff. 4.4). Wir werten die Stichwörter nicht auf sensible Inhalte aus und benötigen solche Angaben nicht; für eine gute Geschichte genügt „der erste Schultag\" statt einer genauen Beschreibung.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO; soweit Dritte betroffen sind, Art. 6 Abs. 1 lit. f DSGVO (wie Ziff. 4.1).",
    ],
  },
  {
    heading: "4.3 Hörfassungen und Offline-Speicherung",
    level: 3,
    paragraphs: [
      "Jedes Kapitel wird mit einer synthetischen Stimme von OpenAI vertont (Ziff. 4.4). In der App ist jede Geschichte als „Geschrieben und vorgelesen von KI\" gekennzeichnet. Die Audiodateien liegen in einem nicht öffentlichen Speicherbereich bei Supabase in Frankfurt. Zum Abspielen erzeugt die App einen Link, der nach einer Stunde ungültig wird; ohne Anmeldung als Eigentümer des Kontos ist kein Zugriff möglich.",
      "Wenn Sie „Für offline speichern\" wählen, lädt die App die Audiodateien in den app-eigenen Speicherbereich Ihres Geräts. Dieser ist für andere Apps nicht zugänglich. Die Dateien bleiben dort, bis Sie sie unter „Einstellungen → Downloads löschen\" entfernen, die App-Daten löschen oder die App deinstallieren.",
      "Damit die App auch ohne Internetverbindung benutzbar ist, legt sie außerdem eine Kopie Ihrer Geschichtenliste und des Textes jeder geöffneten Geschichte in demselben app-eigenen Speicherbereich ab. Diese Kopie verlässt Ihr Gerät nicht. Sie wird beim Abmelden, über „Downloads löschen\", mit der Löschung des Kontos, beim Löschen der App-Daten und bei der Deinstallation entfernt.",
      "Hörproben der Stimmen („Stimme anhören\") sind für alle Nutzer gleich und enthalten keine personenbezogenen Daten.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.",
    ],
  },
  {
    heading: "4.4 Erzeugung durch künstliche Intelligenz (OpenAI)",
    level: 3,
    paragraphs: [
      "Text und Vertonung der Geschichten erzeugen KI-Modelle von OpenAI. Die App selbst verbindet sich dafür nicht mit OpenAI; die Anfrage stellt ausschließlich unser Server (Supabase Edge Functions).",
      "Namen bleiben bei uns (Pseudonymisierung). Bevor wir eine Anfrage zum Schreiben stellen, ersetzt unser Server die Namen Ihrer Figuren durch neutrale Platzhalter wie „[[F1]]\". Die KI schreibt die Geschichte mit diesen Platzhaltern; die echten Namen setzt unser Server erst nach der Antwort ein. Das gilt auch für Stichwörter und – bei Fortsetzungen – für Titel und Text des vorherigen Teils.",
      "An OpenAI übermittelt werden:",
    ],
    list: [
      "zum Schreiben: Genre, Sprache, Stichwörter, Alter, Geschlechtsangabe und Rolle der mitspielenden Figuren (ohne Namen); bei einer Fortsetzung zusätzlich Titel und Text des vorherigen Teils (ohne Namen);",
      "zur Inhaltsprüfung: die Stichwörter sowie Titel und Text der fertigen Geschichte (jeweils ohne Namen) an den Moderationsdienst von OpenAI; er bewertet, ob die Inhalte für Kinder geeignet sind;",
      "zum Vorlesen: der Text des jeweiligen Kapitels – hier einschließlich der Figurennamen, weil die Stimme sie aussprechen muss – und die gewählte Stimme.",
    ],
    afterList: [
      "Nicht übermittelt werden: Ihre E-Mail-Adresse, Ihre Nutzer-ID, Ihre IP-Adresse oder Gerätedaten. OpenAI erkennt als Absender nur unseren Server.",
      "Wir nutzen die kostenpflichtige OpenAI API (keine Verbraucherdienste wie ChatGPT). Eingaben und Ergebnisse werden dort nicht verwendet, um KI-Modelle zu trainieren. Wir weisen OpenAI an, Antworten nicht für einen späteren Abruf zu speichern. OpenAI speichert Anfragen und Antworten für höchstens 30 Tage ausschließlich, um Missbrauch und Verstöße gegen die Nutzungsrichtlinien zu erkennen, und löscht sie danach.",
      "OpenAI verarbeitet die Daten als Auftragsverarbeiter in unserem Auftrag auf Grundlage des Data Processing Addendum von OpenAI (Art. 28 DSGVO). Die Verarbeitung kann auf Servern außerhalb der EU, insbesondere in den USA, stattfinden (Ziff. 9.6).",
      "Für Kindergeschichten gelten eigene inhaltliche Vorgaben (keine beängstigenden Inhalte, gutes Ende) und die Inhaltsprüfung: Stichwörter, die nicht zu einer Kindergeschichte passen, werden abgelehnt, bevor ein Credit verbraucht wird; eine Geschichte, die die Prüfung nicht besteht, wird neu geschrieben und andernfalls nicht ausgeliefert – der Credit wird dann zurückgebucht. Eine vollständige Garantie, dass jede Geschichte passt, kann es bei KI-erzeugten Inhalten nicht geben; deshalb können Sie jede Geschichte melden (Ziff. 6).",
      "Es findet keine Entscheidung über Sie statt; die KI schreibt ausschließlich die von Ihnen angeforderte Geschichte (Ziff. 17).",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Erzeugung der bestellten Geschichte); soweit Dritte betroffen sind, Art. 6 Abs. 1 lit. f DSGVO (wie Ziff. 4.1).",
    ],
  },
  {
    heading: "4.5 Löschen einzelner Inhalte",
    level: 3,
    paragraphs: [
      "Figuren und Geschichten können Sie in der App jederzeit einzeln löschen. Beim Löschen einer Geschichte werden auch deren Kapitel und Audiodateien auf dem Server gelöscht. Die auf Ihrem Gerät gespeicherte Textkopie der Geschichte wird dabei mit entfernt; offline gespeicherte Audiodateien entfernen Sie über „Downloads löschen\".",
    ],
  },
  {
    heading: "5. Credits und Käufe",
  },
  {
    heading: "5.1 Google Play (Kauf und Zahlung)",
    level: 3,
    paragraphs: [
      "Credits kaufen Sie über das Abrechnungssystem von Google Play. Kaufvertrag, Zahlung, Rechnung und Erstattungen wickelt Google nach den Nutzungsbedingungen von Google Play ab. Zahlungsmitteldaten (Kreditkarte, Bankverbindung, PayPal usw.) erhalten und speichern wir zu keinem Zeitpunkt. Google ist für diese Verarbeitung eigenständig verantwortlich; es gilt die Datenschutzerklärung von Google (https://policies.google.com/privacy).",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.",
    ],
  },
  {
    heading: "5.2 RevenueCat (Kaufprüfung)",
    level: 3,
    paragraphs: [
      "Um festzustellen, welches Paket Sie gekauft haben, und die Credits Ihrem Konto gutzuschreiben, nutzen wir RevenueCat.",
      "Anbieter: RevenueCat, Inc., 1032 E Brandon Blvd #3003, Brandon, FL 33511, USA.",
      "Verarbeitete Daten:",
    ],
    list: [
      "Ihre Nutzer-ID von Fabula (die zufällige UUID aus Ziff. 3.1 – nicht Ihre E-Mail-Adresse); vor der ersten Anmeldung eine zufällige, von RevenueCat erzeugte Kennung,",
      "Produkt, Kaufzeitpunkt, Kauf-Token und Transaktionskennung von Google Play,",
      "Store-Land, Währung und Preis des Kaufs,",
      "technische Angaben wie Gerätemodell, Betriebssystem- und App-Version, Sprache sowie die IP-Adresse der Verbindung.",
    ],
    afterList: [
      "RevenueCat arbeitet als Auftragsverarbeiter nach unserer Weisung; Grundlage ist das Data Processing Addendum von RevenueCat (Art. 28 DSGVO), das die EU-Standardvertragsklauseln einbezieht. Die Daten werden in den USA verarbeitet (Ziff. 9.6). Datenschutzerklärung: https://www.revenuecat.com/privacy.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Gutschrift der gekauften Credits).",
    ],
  },
  {
    heading: "5.3 Guthabenkonto",
    level: 3,
    paragraphs: [
      "Bei uns gespeichert werden der Kaufnachweis (Produkt, Anzahl Credits, Preis und Währung, Bestellnummer von Google Play, Transaktionskennung, Plattform, Zeitpunkt) und jede Buchung auf Ihrem Guthabenkonto (Gutschrift aus Kauf, Verbrauch für eine Geschichte, automatische Rückbuchung bei technischem Fehler, manuelle Gutschrift durch uns, Ausbuchung nach einer Erstattung durch Google Play). Daraus ergibt sich Ihr Guthaben.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.",
    ],
  },
  {
    heading: "5.4 Zustimmung vor dem Kauf",
    level: 3,
    paragraphs: [
      "Credits stellen wir sofort nach dem Kauf bereit. Damit das möglich ist, bitten wir Sie vor jedem Kauf um Ihre ausdrückliche Zustimmung und die Bestätigung, dass Ihr Widerrufsrecht damit erlischt (§ 356 Abs. 5 BGB). Wir speichern dazu Ihre Nutzer-ID, das gewählte Produkt, die Fassung des angezeigten Textes und den Zeitpunkt. Der Wortlaut Ihrer Zustimmung steht in der Kaufbestätigung, die wir Ihnen per E-Mail schicken.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. c DSGVO (Nachweis- und Bestätigungspflichten nach § 312f Abs. 3, § 356 Abs. 5 BGB) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse, im Streitfall belegen zu können, dass die Zustimmung erteilt wurde).",
    ],
  },
  {
    heading: "5.5 Widerruf",
    level: 3,
    paragraphs: [
      "Über „Vertrag widerrufen\" (in den Einstellungen unter „Rechtliches\" sowie im Dialog zur Eingabe des Eltern-PIN) können Sie einen Kauf der letzten 14 Tage widerrufen. Wir speichern dazu Ihre Nutzer-ID, den betroffenen Kauf (Produkt, Bestellnummer, Kaufzeitpunkt), den Zeitpunkt des Widerrufs, eine optionale Anmerkung und den Bearbeitungsstand, und wir schicken Ihnen sofort eine Eingangsbestätigung per E-Mail. Die Erstattung erfolgt über Google Play.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. c DSGVO (§ 356a BGB) und Art. 6 Abs. 1 lit. b DSGVO.",
      "Aufbewahrung von Zustimmungen und Widerrufen: drei Jahre ab Ende des Jahres, in dem sie erteilt bzw. erklärt wurden (regelmäßige Verjährungsfrist, § 195 BGB); danach löschen wir sie automatisch. Löschen Sie Ihr Konto früher, entfernen wir daraus den Bezug zu Ihrem Konto: Es bleiben nur Produkt, Bestellnummer von Google Play und Zeitpunkte.",
    ],
  },
  {
    heading: "6. Inhalte melden",
    paragraphs: [
      "In jeder Geschichte können Sie (nach Eingabe des Eltern-PIN) über „Inhalt melden\" mitteilen, dass etwas nicht in Ordnung ist. Gespeichert werden: die betroffene Geschichte und ihr Titel, der gewählte Grund, Ihre optionale Beschreibung (höchstens 2000 Zeichen), Ihre Nutzer-ID, der Zeitpunkt und der Bearbeitungsstand. Über jede neue Meldung werden wir per E-Mail (über Resend, Ziff. 9.3) benachrichtigt; die Nachricht geht nur an uns. Wir sehen uns die gemeldete Geschichte an, um unsere Vorgaben und Filter zu verbessern und – falls die Geschichte unbrauchbar war – den Credit gutzuschreiben.",
      "Bitte schreiben Sie in die Beschreibung keine Angaben über Ihr Kind, die über den Anlass der Meldung hinausgehen.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an kindgerechten Inhalten und an der Einhaltung der Richtlinien von Google Play für KI-generierte Inhalte) sowie Art. 6 Abs. 1 lit. b DSGVO, soweit es um eine Gutschrift geht.",
    ],
  },
  {
    heading: "7. Betrieb, Sicherheit und Missbrauchsschutz",
  },
  {
    heading: "7.1 Verbindungsdaten",
    level: 3,
    paragraphs: [
      "Bei jeder Verbindung der App mit unserem Server verarbeitet Supabase technisch notwendige Verbindungsdaten: IP-Adresse, Zeitpunkt, aufgerufene Schnittstelle, Statuscode, App- bzw. Softwareversion. Diese Protokolle dienen dem Betrieb, der Fehlersuche und der Abwehr von Angriffen und werden von Supabase nach spätestens 7 Tagen automatisch gelöscht.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb).",
    ],
  },
  {
    heading: "7.2 Begrenzung der Anfragen",
    level: 3,
    paragraphs: [
      "Damit ein einzelnes Konto den Dienst nicht überlastet, ist die Zahl der Geschichten pro Konto und Zeitraum begrenzt (derzeit 20 Anfragen je 10 Minuten). Dafür speichern wir zu jeder Anfrage Nutzer-ID, Art der Anfrage und Zeitpunkt. Einträge, die älter als 100 Minuten sind, werden bei der nächsten Anfrage gelöscht, alle übrigen spätestens mit dem Konto.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Schutz vor Missbrauch und Überlastung).",
    ],
  },
  {
    heading: "7.3 Kosten- und Nutzungsprotokoll der KI",
    level: 3,
    paragraphs: [
      "Zu jeder Erzeugung speichern wir Nutzer-ID, Geschichte, verwendetes KI-Modell, Anzahl verarbeiteter Einheiten („Tokens\") und die geschätzten Kosten. Wir verwenden diese Angaben, um die Kosten des Dienstes zu überwachen, Preise zu kalkulieren und Missbrauch zu erkennen. Inhalte der Geschichte enthält dieses Protokoll nicht.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem wirtschaftlich tragfähigen und missbrauchssicheren Betrieb).",
    ],
  },
  {
    heading: "7.4 Kontakt per E-Mail",
    level: 3,
    paragraphs: [
      "Wenn Sie uns schreiben, verarbeiten wir Ihre E-Mail-Adresse, Ihren Namen (sofern angegeben) und den Inhalt Ihrer Nachricht, um Ihre Anfrage zu beantworten. Wir löschen die Korrespondenz, wenn die Anfrage erledigt ist, es sei denn, gesetzliche Aufbewahrungspflichten (z. B. für Handelsbriefe, sechs Jahre nach § 257 HGB) stehen entgegen.",
      "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage den Vertrag betrifft, im Übrigen Art. 6 Abs. 1 lit. f DSGVO.",
    ],
  },
  {
    heading: "8. Auf Ihrem Gerät gespeicherte Daten",
    paragraphs: [
      "Die App speichert auf Ihrem Gerät:",
    ],
    table: {
      head: ["Angabe", "Zweck"],
      rows: [
        ["Anmeldesitzung (Zugangs- und Aktualisierungstoken)", "angemeldet bleiben, ohne jedes Mal das Passwort einzugeben"],
        ["Eltern-PIN", "Schutz von neuen Geschichten, Figuren, Käufen und Einstellungen; verschlüsselt im Android-Schlüsselspeicher (Keystore), nie an unseren Server übertragen"],
        ["Kennzeichen, dass Sie den Hinweis auf Datenschutzhinweise und AGB beim ersten Start gesehen haben", "den Hinweis nicht bei jedem Start erneut anzeigen"],
        ["App-Sprache, Farbschema, Schriftgröße", "Darstellung"],
        ["Vorlesetempo, automatisches Weiterspielen, Einschlaf-Timer", "Wiedergabe"],
        ["„Nur über WLAN herunterladen\"", "Downloads"],
        ["Offline gespeicherte Audiodateien, Kopie der Geschichtenliste und der Texte geöffneter Geschichten", "Nutzung ohne Internet (Ziff. 4.3)"],
      ],
    },
    afterList: [
      "Diese Angaben verlassen Ihr Gerät nicht – mit Ausnahme der Anmeldesitzung, die bei jeder Anfrage an unseren Server mitgeschickt wird, um Sie als Kontoinhaber auszuweisen. Sie werden entfernt, wenn Sie Ihr Konto in der App löschen (Ziff. 15), die App-Daten löschen oder die App deinstallieren.",
      "Das Speichern dieser Informationen auf Ihrem Endgerät ist unbedingt erforderlich, um die von Ihnen ausdrücklich gewünschte App bereitzustellen; eine Einwilligung ist dafür nicht nötig (§ 25 Abs. 2 Nr. 2 TDDDG). Rechtsgrundlage der anschließenden Verarbeitung: Art. 6 Abs. 1 lit. b DSGVO.",
    ],
  },
  {
    heading: "9. Empfänger und Auftragsverarbeiter",
    paragraphs: [
      "Wir geben personenbezogene Daten nur an die folgenden Dienstleister weiter, die sie in unserem Auftrag und nach unserer Weisung verarbeiten (Art. 28 DSGVO), sowie an Google Play als eigenständig Verantwortlichen für den Kauf.",
    ],
  },
  {
    heading: "9.1 Supabase (Hosting, Datenbank, Anmeldung, Dateispeicher, Serverfunktionen)",
    level: 3,
    list: [
      "Vertragspartner: Supabase Pte. Ltd., 65 Chulia Street #38-02/03, OCBC Centre, Singapur 049513.",
      "Serverstandort: Frankfurt am Main, Deutschland (Rechenzentrum von Amazon Web Services, Region eu-central-1).",
      "Unterauftragsverarbeiter u. a.: Amazon Web Services (Rechenzentrum Frankfurt), Supabase, Inc. (USA; Support und Wartung).",
      "Verarbeitete Daten: alle in Ziff. 3 bis 7 genannten Daten.",
      "Grundlage: Auftragsverarbeitungsvertrag (Data Processing Addendum) mit Supabase nach Art. 28 DSGVO.",
      "Datenschutzerklärung: https://supabase.com/privacy.",
    ],
    afterList: [
      "Die Daten werden in Frankfurt gespeichert. Ein Zugriff durch Supabase aus Drittländern (insbesondere zu Wartungs- und Supportzwecken) ist nicht ausgeschlossen; er ist durch EU-Standardvertragsklauseln abgesichert (Ziff. 9.6).",
    ],
  },
  {
    heading: "9.2 OpenAI (Text, Vorlesestimme, Inhaltsprüfung)",
    level: 3,
    list: [
      "Vertragspartner im EWR: OpenAI Ireland Ltd., 1st Floor, The Liffey Trust Centre, 117–126 Sheriff Street Upper, Dublin 1, D01 YC43, Irland; Unterauftragsverarbeiter u. a. OpenAI, L.L.C. und verbundene Unternehmen in den USA sowie deren Rechenzentrumsbetreiber.",
      "Verarbeitete Daten: siehe Ziff. 4.4.",
      "Grundlage: Data Processing Addendum von OpenAI (Art. 28 DSGVO).",
      "Datenschutzerklärung: https://openai.com/policies/privacy-policy.",
    ],
  },
  {
    heading: "9.3 Resend (E-Mail-Versand)",
    level: 3,
    list: [
      "Anbieter: Plus Five Five, Inc. („Resend\"), 2261 Market Street #5039, San Francisco, CA 94114, USA.",
      "Verarbeitete Daten: Ihre E-Mail-Adresse, Inhalt der E-Mail (Ziff. 3.2, bei Meldungen die Angaben aus Ziff. 6), Zeitpunkt und Zustellstatus.",
      "Grundlage: Data Processing Addendum von Resend (Art. 28 DSGVO).",
      "Datenschutzerklärung: https://resend.com/legal/privacy-policy.",
    ],
  },
  {
    heading: "9.4 RevenueCat (Kaufprüfung)",
    level: 3,
    paragraphs: [
      "Siehe Ziff. 5.2. Löschen Sie Ihr Konto, löschen wir auch die bei RevenueCat unter Ihrer Nutzer-ID gespeicherten Kaufdaten.",
    ],
  },
  {
    heading: "9.5 Google Play (Vertrieb, Kauf, Zahlung)",
    level: 3,
    paragraphs: [
      "Google Play ist für Bereitstellung der App, Kaufabwicklung und Zahlung eigenständig verantwortlich. Anbieter im EWR: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; für Käufe Google Commerce Limited, ebenda. Datenschutzerklärung: https://policies.google.com/privacy.",
      "Stürzt die App ab, kann Ihr Android-Gerät – je nach Ihren Einstellungen unter „Google → Nutzungs- und Diagnosedaten\" – einen technischen Bericht an Google senden. Wir sehen daraus in der Google Play Console nur zusammengefasste Auswertungen ohne Bezug zu Ihrer Person. Rechtsgrundlage für unsere Nutzung dieser Auswertungen: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer stabilen App).",
    ],
  },
  {
    heading: "9.6 Übermittlung in Drittländer",
    level: 3,
    table: {
      head: ["Empfänger", "Land", "Absicherung"],
      rows: [
        ["OpenAI, L.L.C. und verbundene Unternehmen", "USA", "EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO), im Data Processing Addendum von OpenAI vereinbart"],
        ["Plus Five Five, Inc. (Resend)", "USA", "Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023 (EU-US Data Privacy Framework), Resend ist zertifiziert; ergänzend EU-Standardvertragsklauseln"],
        ["RevenueCat, Inc.", "USA", "EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO)"],
        ["Supabase Pte. Ltd. / Supabase, Inc. (nur Zugriffe, Speicherung in Frankfurt)", "Singapur, USA", "EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO)"],
      ],
    },
    afterList: [
      "In den USA kann ein Zugriff durch Behörden trotz dieser Maßnahmen nicht vollständig ausgeschlossen werden. Wir haben die Übermittlungen bewertet und zusätzliche Maßnahmen getroffen; die wichtigste ist, dass die Text-KI die Namen Ihrer Figuren nicht erhält (Ziff. 4.4). Eine Kopie der Standardvertragsklauseln können Sie bei uns unter info@simplynext.de anfordern.",
    ],
  },
  {
    heading: "9.7 Aufrufen externer Seiten",
    level: 3,
    paragraphs: [
      "Die Links „Datenschutzerklärung\", „AGB\" und „Impressum\" öffnen Ihren Browser. Beim Aufruf verarbeitet der Betreiber der Website die üblichen Verbindungsdaten; es gilt die Datenschutzerklärung der aufgerufenen Website.",
    ],
  },
  {
    heading: "10. Was wir nicht tun",
    list: [
      "Keine Werbung und keine Werbe-SDKs; die App fragt die Werbe-ID des Geräts nicht ab.",
      "Keine Analyse- oder Tracking-Werkzeuge (kein Google Analytics, kein Firebase, kein Facebook-SDK). Ein Werkzeug für Absturzberichte (Sentry) ist im Programmcode enthalten, aber nicht aktiviert; es überträgt keine Daten. Sollten wir es aktivieren, passen wir diese Erklärung vorher an.",
      "Kein Zugriff auf Standort, Kontakte, Kamera, Mikrofon, Fotos oder Dateien außerhalb der App.",
      "Keine Weitergabe von Geschichten an andere Nutzer, keine öffentlichen Profile, keine Chat- oder Kommentarfunktion.",
      "Keine Profilbildung, keine automatisierten Entscheidungen über Sie.",
      "Kein Verkauf und keine Vermietung von Daten.",
      "Keine Nutzung Ihrer Eingaben oder Geschichten zum Training von KI-Modellen – weder durch uns noch durch OpenAI.",
    ],
  },
  {
    heading: "11. Berechtigungen der App",
    table: {
      head: ["Berechtigung", "Zweck", "Erforderlich"],
      rows: [
        ["Internetzugriff (INTERNET)", "Anmeldung, Erzeugen und Laden von Geschichten, Käufe", "Ja"],
        ["Netzwerkstatus (ACCESS_NETWORK_STATE)", "erkennen, ob eine Verbindung besteht und ob es WLAN ist (Einstellung „Nur über WLAN herunterladen\")", "Ja"],
        ["Abrechnung über Google Play (com.android.vending.BILLING)", "Kauf von Credits", "Nur für Käufe"],
      ],
    },
    afterList: [
      "Weitere Berechtigungen – etwa für Kamera, Mikrofon, Standort, Kontakte oder Mediendateien – fordert Fabula nicht an.",
    ],
  },
  {
    heading: "12. Speicherdauer",
    table: {
      head: ["Datenkategorie", "Speicherdauer"],
      rows: [
        ["Konto (E-Mail-Adresse, Passwort-Hash, Nutzer-ID, Einstellungen)", "Bis zur Löschung des Kontos"],
        ["Figuren", "Bis Sie die Figur oder das Konto löschen"],
        ["Geschichten, Stichwörter, Audiodateien auf dem Server", "Bis Sie die Geschichte oder das Konto löschen"],
        ["Offline gespeicherte Audiodateien und Textkopien auf dem Gerät", "Bis „Downloads löschen\", Abmeldung (nur Textkopien), Löschung des Kontos in der App, Löschen der App-Daten oder Deinstallation"],
        ["Kaufnachweise und Guthabenbuchungen bei uns", "Bis zur Löschung des Kontos. Steuerlich relevante Belege über Ihren Kauf führt Google Play als Verkäufer"],
        ["Inhaltsmeldungen", "Bis Sie die gemeldete Geschichte oder das Konto löschen"],
        ["Kosten- und Nutzungsprotokoll der KI", "Bis zur Löschung des Kontos; beim Löschen einer Geschichte entfällt der Bezug zu ihr"],
        ["Einträge zur Begrenzung der Anfragen", "100 Minuten, spätestens bis zur Löschung des Kontos"],
        ["Sicherheitsprotokolle der Anmeldung", "30 Tage"],
        ["Verbindungsprotokolle bei Supabase", "Höchstens 7 Tage"],
        ["Anfragen und Antworten bei OpenAI", "Höchstens 30 Tage, danach Löschung durch OpenAI"],
        ["Zustimmungen vor dem Kauf, Widerrufe", "3 Jahre ab Jahresende; bei früherer Kontolöschung ohne Bezug zum Konto (Ziff. 5.5)"],
        ["E-Mails bei Resend (Versandprotokoll)", "Nach den Löschfristen von Resend für Versandprotokolle"],
        ["Kaufdaten bei RevenueCat", "Bis zur Löschung Ihres Kontos; dabei löschen wir auch den Kundendatensatz bei RevenueCat"],
        ["Kaufdaten bei Google Play", "Nach den Fristen von Google, einschließlich gesetzlicher Aufbewahrungspflichten"],
        ["E-Mail-Korrespondenz mit uns", "Bis zur Erledigung, bei Handelsbriefen sechs Jahre (§ 257 HGB)"],
        ["Daten auf dem Gerät (Ziff. 8)", "Bis zur Löschung des Kontos in der App, zum Löschen der App-Daten oder zur Deinstallation"],
      ],
    },
  },
  {
    heading: "13. Kinder",
    paragraphs: [
      "Fabula ist für Kinder im Alter von etwa 6 bis 8 Jahren gemacht und nimmt am Programm „Für Familien\" von Google Play teil. Die App ist aber so gebaut, dass Erwachsene das Konto führen:",
    ],
    list: [
      "Konto nur für Erwachsene. Registrieren darf sich nur, wer volljährig ist. Die E-Mail-Adresse ist die eines Elternteils oder einer anderen erziehungsberechtigten Person, nicht die des Kindes. Vertragspartner und datenschutzrechtlich „Nutzer\" ist der Erwachsene.",
      "Wenige Angaben über das Kind. Über Ihr Kind verarbeiten wir nur, was Sie in eine Figur eintragen: einen Namen (ein Spitzname genügt), das Alter, eine Geschlechtsangabe und eine gezeichnete Illustration. Wir erheben keine Fotos, keine Stimme, keinen Standort und keine Kontaktdaten des Kindes.",
      "Keine Werbung, kein Tracking. Kinder sehen in Fabula keine Werbung; es werden keine Werbe-IDs oder Nutzungsprofile erhoben.",
      "Kein Kontakt nach außen. Kinder können in Fabula mit niemandem kommunizieren und nichts veröffentlichen.",
      "Elternmodus: Kinder hören nur zu. Alles, was Eingaben erfordert oder Guthaben verbraucht – neue Geschichten und Fortsetzungen, Figuren anlegen und bearbeiten, Stichwörter, Käufe, Meldungen, Einstellungen –, ist durch einen Eltern-PIN geschützt, der nur auf dem Gerät gespeichert ist. Ein Kind kann in Fabula also keine Daten eingeben; es hört die Geschichten, die Sie erstellt haben.",
      "Käufe. Käufe sind durch den Eltern-PIN geschützt und laufen über Google Play und das dort hinterlegte Google-Konto. Wir empfehlen zusätzlich, in Google Play die Authentifizierung für jeden Kauf einzuschalten (Google Play → Einstellungen → Authentifizierung).",
      "Kindgerechte Inhalte. Stichwörter und fertige Geschichten durchlaufen eine automatische Inhaltsprüfung (Ziff. 4.4); jede Geschichte ist als KI-erzeugt gekennzeichnet und kann gemeldet werden (Ziff. 6).",
    ],
    afterList: [
      "Die Verarbeitung beruht nicht auf einer Einwilligung des Kindes; Art. 8 DSGVO ist daher nicht einschlägig. Rechtsgrundlagen sind der Vertrag mit Ihnen und Ihr bzw. unser berechtigtes Interesse, die von Ihnen gewünschte Geschichte für Ihr Kind zu erzeugen (Ziff. 4.1).",
      "Als Eltern können Sie die Rechte Ihres Kindes aus Ziff. 14 für dieses geltend machen – am einfachsten, indem Sie die betreffende Figur oder Geschichte löschen.",
    ],
  },
  {
    heading: "14. Ihre Rechte",
    paragraphs: [
      "Sie haben das Recht auf:",
    ],
    list: [
      "Auskunft über die verarbeiteten personenbezogenen Daten (Art. 15 DSGVO)",
      "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
      "Löschung (Art. 17 DSGVO)",
      "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
      "Datenübertragbarkeit (Art. 20 DSGVO)",
      "Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO, siehe unten)",
      "Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)",
    ],
    afterList: [
      "Widerspruchsrecht nach Art. 21 DSGVO",
      "Soweit wir Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten (Ziff. 3.1 für den Nachweis der AGB-Annahme, 3.3, 4.1, 4.2, 4.4 für Daten Dritter, 5.4, 6, 7 und 9.5), können Sie dieser Verarbeitung aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen. Wir verarbeiten die Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. Der Widerspruch ist formlos möglich, z. B. per E-Mail an info@simplynext.de.",
    ],
  },
  {
    list: [
      "Zuständige Aufsichtsbehörde für uns:",
      "Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart, https://www.baden-wuerttemberg.datenschutz.de",
    ],
    afterList: [
      "Sie können sich auch an die Aufsichtsbehörde Ihres Wohnorts wenden.",
      "So üben Sie Ihre Rechte unmittelbar in der App aus:",
    ],
  },
  {
    list: [
      "Figuren und Geschichten berichtigen oder löschen: in der App an der jeweiligen Figur bzw. Geschichte",
      "Offline-Dateien löschen: Einstellungen → Downloads löschen",
      "Konto und alle Daten löschen: Einstellungen → Konto löschen (Ziff. 15)",
    ],
    afterList: [
      "Für alle anderen Anliegen – insbesondere Auskunft und Datenübertragbarkeit – schreiben Sie bitte von der E-Mail-Adresse Ihres Kontos an info@simplynext.de. Damit wir keine Daten an Unbefugte herausgeben, beantworten wir Anfragen zu einem Konto nur gegenüber dieser Adresse. Wir antworten innerhalb eines Monats (Art. 12 Abs. 3 DSGVO).",
    ],
  },
  {
    heading: "15. Konto löschen",
    paragraphs: [
      "In der App: Einstellungen → Konto löschen. Die Einstellungen sind durch den Eltern-PIN geschützt.",
      "Ohne App (z. B. wenn die App bereits deinstalliert ist): Schreiben Sie von der E-Mail-Adresse Ihres Kontos an info@simplynext.de mit dem Betreff „Konto löschen\". Wir löschen das Konto innerhalb eines Monats und bestätigen Ihnen die Löschung.",
      "Was gelöscht wird: Ihr Konto mit E-Mail-Adresse und Passwort-Hash, alle Figuren, Geschichten, Kapitel und Audiodateien auf dem Server, Kaufnachweise und Guthabenbuchungen bei uns, das Kosten- und Nutzungsprotokoll, Inhaltsmeldungen, Einträge zur Begrenzung der Anfragen und der Kundendatensatz bei RevenueCat. Auf dem Gerät, auf dem Sie die Löschung auslösen, entfernt die App außerdem die offline gespeicherten Geschichten, den Eltern-PIN und die Einstellungen. Die Löschung ist endgültig und kann nicht rückgängig gemacht werden.",
      "Was nicht automatisch gelöscht wird:",
    ],
    list: [
      "Zustimmungen vor dem Kauf und Widerrufe: Sie bleiben ohne Bezug zu Ihrem Konto bis zum Ablauf der Frist aus Ziff. 5.5 erhalten.",
      "Offline gespeicherte Audiodateien und Einstellungen auf anderen Geräten, auf denen Sie angemeldet waren – entfernen Sie diese durch Deinstallieren der App oder über Android-Einstellungen → Apps → Fabula → Speicher → Daten löschen.",
      "Daten, die Google Play als eigenständig Verantwortlicher über Ihren Kauf gespeichert hat (Ziff. 9.5).",
      "Protokolle, die nach Ziff. 12 ohnehin kurzfristig gelöscht werden.",
    ],
    afterList: [
      "Nicht verbrauchte Credits verfallen mit der Löschung, weil sie danach keinem Konto mehr zugeordnet werden können. Bitte wenden Sie sich vor der Löschung an uns, wenn Sie für gekaufte, nicht verbrauchte Credits eine Erstattung wünschen (§ 14 Abs. 3 der AGB).",
    ],
  },
  {
    heading: "16. Datensicherheit",
    list: [
      "Alle Verbindungen zwischen App, unseren Servern und unseren Dienstleistern sind über TLS (HTTPS) verschlüsselt.",
      "Die Datenbank ist so eingerichtet, dass jedes Konto nur die eigenen Figuren, Geschichten und Buchungen lesen kann (Row Level Security). Guthaben und Käufe kann die App nicht selbst verändern; das dürfen nur unsere Serverfunktionen.",
      "Audiodateien liegen in einem nicht öffentlichen Speicherbereich und sind nur über zeitlich begrenzte Links (eine Stunde) abrufbar.",
      "Passwörter werden ausschließlich als Hashwert gespeichert.",
      "Der Zugangsschlüssel zur OpenAI API und alle anderen geheimen Schlüssel liegen nur auf dem Server, nicht in der App.",
      "Namen von Figuren erhält die Text-KI nicht (Pseudonymisierung, Ziff. 4.4).",
      "Der Eltern-PIN wird verschlüsselt im Android-Schlüsselspeicher abgelegt und nicht übertragen.",
      "Die Sicherheit der Daten auf Ihrem Gerät hängt auch vom Schutz des Geräts ab (Bildschirmsperre, aktuelle Systemupdates).",
    ],
  },
  {
    heading: "17. Keine automatisierte Entscheidungsfindung",
    paragraphs: [
      "Es findet keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne des Art. 22 DSGVO statt. Die KI erzeugt ausschließlich die von Ihnen angeforderte Geschichte; sie trifft keine Entscheidungen über Sie oder Ihr Kind.",
    ],
  },
  {
    heading: "18. Änderungen dieser Datenschutzerklärung",
    paragraphs: [
      "Wir passen diese Erklärung an, wenn sich die Rechtslage, die App oder die eingesetzten Dienste ändern. Es gilt jeweils die bei Ihrer Nutzung abrufbare Fassung. Bei wesentlichen Änderungen – insbesondere bei neuen Empfängern oder neuen Zwecken – informieren wir Sie vorab in der App und holen, wo erforderlich, Ihre Einwilligung ein.",
      "Maßgeblich ist die deutsche Fassung dieser Erklärung.",
    ],
  },
  {
    heading: "19. Kontakt",
    paragraphs: [
      "SimplyNext",
    ],
    list: [
      "E-Mail: info@simplynext.de",
      "Telefon: 01743389049",
    ],
  },
];

export const fabulaAgb: LegalSection[] = [
  {
    heading: "§ 1 Geltungsbereich, Anbieter, Vertragspartner",
    paragraphs: [
      "(1) Diese Allgemeinen Geschäftsbedingungen („AGB\") gelten für die Nutzung der mobilen Anwendung Fabula („App\") und der damit verbundenen Serverdienste, insbesondere für das Erzeugen von Hörgeschichten mit Credits. Anbieter ist",
    ],
    list: [
      "SimplyNext",
      "Vollständige Anbieterangaben: siehe Impressum",
      "E-Mail: info@simplynext.de",
      "Telefon: 01743389049",
      "USt-IdNr.: DE463824630",
    ],
    afterList: [
      "(„Anbieter\", „wir\").",
      "(2) Die App ist für die private Nutzung durch Verbraucher (§ 13 BGB) bestimmt.",
      "(3) Zwei getrennte Vertragsverhältnisse: Der Vertrag über die Nutzung der App und das Erzeugen von Geschichten („Nutzungsvertrag\") kommt zwischen Ihnen und uns zustande. Bezug der App und Kauf von Credits erfolgen über den Google Play Store; für den Kauf- und Zahlungsvorgang tritt Google nach den Bestimmungen von Google Play als Verkäufer auf. Insoweit gelten zusätzlich die Nutzungsbedingungen von Google Play (https://play.google.com/intl/de_de/about/play-terms/). Die Leistungen, die Sie mit den Credits in der App erhalten, schulden wir aus dem Nutzungsvertrag. Diese AGB regeln nicht das Verhältnis zwischen Ihnen und Google.",
      "(4) Abweichenden Bedingungen des Nutzers wird widersprochen, es sei denn, wir stimmen ihrer Geltung ausdrücklich in Textform zu.",
    ],
  },
  {
    heading: "§ 2 Wer ein Konto führen darf; Nutzung durch Kinder",
    paragraphs: [
      "(1) Ein Nutzerkonto dürfen nur volljährige, unbeschränkt geschäftsfähige Personen anlegen. Vertragspartner ist stets der Erwachsene, der das Konto angelegt hat.",
      "(2) Die Geschichten sind für Kinder gemacht. Kinder nutzen Fabula über das Konto eines Elternteils oder einer anderen erziehungsberechtigten bzw. aufsichtführenden Person und unter deren Verantwortung. Diese Person entscheidet, welche Geschichten ein Kind hört, und begleitet die Nutzung in einer dem Alter des Kindes angemessenen Weise.",
      "(3) Elternmodus. Alles, was Eingaben erfordert oder Credits verbraucht – neue Geschichten und Fortsetzungen, Figuren anlegen und bearbeiten, Stichwörter, Käufe, Meldungen und Einstellungen –, ist durch einen Eltern-PIN geschützt, den Sie beim ersten Aufruf festlegen. Kinder können ohne den PIN nur bereits erstellte Geschichten anhören. Für die Wahl eines PIN, den Kinder nicht kennen, und für die zusätzliche Absicherung von Käufen im Google-Konto (Kaufauthentifizierung in Google Play) sind Sie verantwortlich. Die Widerrufsfunktion (§ 7) ist bewusst auch ohne PIN erreichbar.",
    ],
  },
  {
    heading: "§ 3 Leistungsbeschreibung",
    paragraphs: [
      "(1) Fabula erzeugt mithilfe künstlicher Intelligenz personalisierte Hörgeschichten. Der Funktionsumfang umfasst insbesondere:",
    ],
    list: [
      "Anlegen von Figuren mit Name, Alter, Geschlechtsangabe, Rolle (Haupt- oder Nebenfigur) und einer vorgegebenen Illustration,",
      "Auswahl aus zehn Genres für Kindergeschichten und Eingabe optionaler Stichwörter,",
      "Erzeugen einer Geschichte in fünf Kapiteln mit Titel, in der in der App eingestellten Sprache (Deutsch, Englisch, Spanisch, Französisch, Italienisch oder Portugiesisch),",
      "Vertonung der Kapitel mit einer synthetischen Stimme; Auswahl aus mehreren Stimmen mit Hörprobe,",
      "Wiedergabe mit Text zum Mitlesen, einstellbarem Tempo, automatischem Weiterspielen und Einschlaf-Timer,",
      "Speichern von Geschichten auf dem Gerät für die Wiedergabe ohne Internetverbindung,",
      "Fortsetzungen einer bestehenden Geschichte („Teil 2\", „Teil 3\" usw.),",
      "Melden von Geschichten, die nicht in Ordnung sind,",
      "Elternmodus mit Eltern-PIN für neue Geschichten, Figuren, Käufe, Meldungen und Einstellungen (§ 2 Abs. 3),",
      "Kennzeichnung jeder Geschichte als KI-erzeugt.",
    ],
    afterList: [
      "(2) Eine Geschichte ist auf eine Vorlesezeit von in der Regel etwa 7 bis 10 Minuten ausgelegt. Jede Geschichte wird für jede Anfrage neu erzeugt. Handlung, Länge, Wortwahl und Stil ergeben sich aus Ihren Vorgaben und aus der Arbeitsweise der KI; sie sind nicht vorhersehbar und nicht wiederholbar. Einen bestimmten Inhalt schulden wir nicht. Einzelheiten zur Beschaffenheit KI-erzeugter Inhalte regelt § 8.",
      "(3) Das Erzeugen von Geschichten, die Hörproben der Stimmen und das Laden von Geschichten erfordern eine Internetverbindung. Auf dem Gerät gespeicherte Geschichten lassen sich ohne Verbindung abspielen.",
      "(4) Die Installation der App und das Anlegen eines Kontos sind kostenlos. Das Erzeugen einer Geschichte kostet einen Credit (§ 5). Hörproben, das erneute Abspielen und das Speichern bereits erzeugter Geschichten sind kostenlos.",
      "(5) Wir dürfen die App ändern, soweit dies aus einem triftigen Grund erforderlich ist – etwa zur Anpassung an neue Android-Versionen, an geänderte Schnittstellen unserer Dienstleister, an neue Rechtsvorschriften, aus Gründen der Sicherheit oder zur Weiterentwicklung. Dabei entstehen Ihnen keine zusätzlichen Kosten, und wir informieren Sie klar und verständlich über die Änderung. Beeinträchtigt eine Änderung Ihren Zugang zur App oder deren Nutzbarkeit mehr als nur unerheblich, informieren wir Sie rechtzeitig vorher auf einem dauerhaften Datenträger (z. B. per E-Mail) über Merkmale und Zeitpunkt der Änderung sowie über Ihr Recht, den Vertrag innerhalb von 30 Tagen unentgeltlich zu beenden; nicht verbrauchte, gekaufte Credits erstatten wir in diesem Fall nach § 14 Abs. 3 (§ 327r BGB).",
    ],
  },
  {
    heading: "§ 4 Registrierung und Vertragsschluss",
    paragraphs: [
      "(1) Diese AGB und die Datenschutzerklärung sind in der App beim ersten Start, im Registrierungsformular und unter „Einstellungen → Rechtliches\" verlinkt. Im Registrierungsformular bestätigen Sie durch Setzen eines Hakens, dass Sie volljährig sind und diese AGB akzeptieren; ohne diesen Haken ist keine Registrierung möglich.",
      "(2) Der Nutzungsvertrag kommt zustande, wenn Sie sich mit E-Mail-Adresse und Passwort registrieren und Ihre E-Mail-Adresse über den zugesandten Link bestätigen.",
      "(3) Ihre Angaben bei der Registrierung müssen zutreffen. Ihre E-Mail-Adresse muss erreichbar sein, weil wir über sie Passwort-Links und Informationen zu Vertragsänderungen versenden.",
      "(4) Halten Sie Ihr Passwort geheim. Besteht der Verdacht, dass ein Dritter es kennt, ändern Sie es über „Passwort vergessen\" und informieren Sie uns.",
      "(5) Wir speichern, welche Fassung dieser AGB Sie bei der Registrierung akzeptiert haben und wann. Den Vertragstext selbst halten wir nicht für Sie zum Abruf bereit; die jeweils gültigen AGB können Sie jederzeit in der App unter „Einstellungen → Rechtliches\" sowie online abrufen, speichern und ausdrucken. Die Vertragssprache ist Deutsch.",
    ],
  },
  {
    heading: "§ 5 Credits",
    paragraphs: [
      "(1) Was ein Credit ist. Credits sind ein Guthaben in Ihrem Konto, mit dem Sie Geschichten erzeugen. Für eine Geschichte (fünf Kapitel mit Vertonung) oder eine Fortsetzung wird ein Credit verbraucht. Credits sind keine Währung, kein E-Geld und kein Zahlungsmittel.",
      "(2) Kauf. Credits werden in Paketen über Google Play gekauft. Welche Pakete es gibt und was sie kosten, zeigt die App vor dem Kauf an. Vor dem Kauf bitten wir Sie um Ihre ausdrückliche Zustimmung, dass wir die Credits sofort bereitstellen, und um die Bestätigung, dass Ihr Widerrufsrecht damit erlischt (§ 7 Abs. 3); ohne diese Zustimmung ist ein Kauf in der App nicht möglich. Nach Bestätigung des Kaufs durch Google werden die Credits Ihrem Konto gutgeschrieben; das kann einige Sekunden dauern. Anschließend erhalten Sie eine Vertragsbestätigung per E-Mail mit Produkt, Preis, Zeitpunkt, Bestellnummer und dem Wortlaut Ihrer Zustimmung. Es handelt sich um einmalige Käufe, nicht um ein Abonnement; es entstehen keine wiederkehrenden Kosten.",
      "(3) Verbrauch. Der Credit wird verbraucht, wenn Sie das Erzeugen einer Geschichte starten. Scheitert die Erzeugung aus technischen Gründen, die Sie nicht zu vertreten haben, wird der Credit automatisch zurückgebucht. Kann die Vertonung einzelner Kapitel nicht erstellt werden, wird sie beim erneuten Abspielen ohne weitere Kosten erneut versucht.",
      "(4) Keine Verfallsfrist. Credits verfallen nicht, solange der Nutzungsvertrag besteht. Was bei Vertragsende gilt, regelt § 14.",
      "(5) Bindung an das Konto. Credits sind an das Konto gebunden, dem sie gutgeschrieben wurden. Sie können nicht auf andere Konten übertragen, verkauft oder in Geld umgetauscht werden; die Erstattung nach § 14 Abs. 3 bleibt unberührt.",
      "(6) Unentgeltliche Credits. Credits, die wir ohne Kauf gutschreiben – etwa als Ausgleich für eine gemeldete, unbrauchbare Geschichte oder im Rahmen einer Aktion –, werden nicht in Geld erstattet.",
      "(7) Rückabwicklung eines Kaufs. Wird ein Kauf rückgängig gemacht – etwa durch Widerruf, Erstattung durch Google oder Rückbelastung der Zahlung –, dürfen wir die daraus gutgeschriebenen Credits wieder ausbuchen, soweit sie noch nicht verbraucht sind.",
    ],
  },
  {
    heading: "§ 6 Preise und Zahlung",
    paragraphs: [
      "(1) Es gilt der zum Zeitpunkt des Kaufs im Bezahldialog von Google Play angezeigte Preis. Alle Preise sind Endpreise einschließlich der gesetzlichen Umsatzsteuer.",
      "(2) Die Zahlung erfolgt ausschließlich über Google Play mit dem in Ihrem Google-Konto hinterlegten Zahlungsmittel. Wir erhalten und speichern keine Zahlungsmitteldaten. Den Kaufbeleg stellt Ihnen Google Play bereit.",
      "(3) Erstattungen durch Google richten sich nach den Bestimmungen von Google Play und werden bei Google beantragt. Ihre gesetzlichen Rechte nach § 7 und § 12 sowie Erstattungen nach § 14 Abs. 3 bleiben unberührt.",
    ],
  },
  {
    heading: "§ 7 Widerrufsrecht für Verbraucher",
    paragraphs: [
      "(1) Verbrauchern steht bei Fernabsatzverträgen grundsätzlich ein Widerrufsrecht zu. Da der Kauf von Credits nach § 1 Abs. 3 über Google Play abgewickelt wird, kann ein Widerruf des Kaufs auch gegenüber Google erklärt werden; Google stellt hierfür ein Verfahren im Google Play Store bereit.",
      "(2) Soweit ein widerrufbarer Vertrag mit uns zustande kommt, gilt folgende",
    ],
  },
  {
    heading: "Widerrufsbelehrung",
    level: 3,
    paragraphs: [
      "Widerrufsrecht",
      "Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.",
      "Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.",
      "Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (SimplyNext, Nuri Toker, Mechenseerstr. 12, 88316 Isny im Allgäu, Deutschland, Telefon: 01743389049, E-Mail: info@simplynext.de) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.",
      "Sie können Ihr Widerrufsrecht auch über die Widerrufsfunktion in der App ausüben: „Vertrag widerrufen\" unter „Einstellungen → Rechtliches\" sowie im Dialog zur Eingabe des Eltern-PIN (dort ohne PIN). Den Eingang Ihres Widerrufs bestätigen wir Ihnen unverzüglich per E-Mail mit Inhalt, Datum und Uhrzeit.",
      "Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.",
      "Folgen des Widerrufs",
      "Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.",
      "Ende der Widerrufsbelehrung",
      "(3) Vorzeitiges Erlöschen. Bei einem Vertrag über die Bereitstellung digitaler Inhalte, die nicht auf einem körperlichen Datenträger geliefert werden, erlischt das Widerrufsrecht, wenn wir mit der Vertragserfüllung begonnen haben, nachdem Sie",
    ],
    list: [
      "ausdrücklich zugestimmt haben, dass wir mit der Vertragserfüllung vor Ablauf der Widerrufsfrist beginnen,",
      "Ihre Kenntnis davon bestätigt haben, dass Sie durch Ihre Zustimmung mit Beginn der Vertragserfüllung Ihr Widerrufsrecht verlieren, und",
      "wir Ihnen eine Bestätigung des Vertrags zur Verfügung gestellt haben, in der Ihre Zustimmung und Kenntnisnahme festgehalten sind (§ 356 Abs. 5 BGB).",
    ],
    ordered: true,
    afterList: [
      "In der App holen wir Zustimmung und Bestätigung vor jedem Kauf durch ein Kästchen ein, das Sie selbst anhaken müssen; die Bestätigung nach Nr. 3 erhalten Sie per E-Mail (§ 5 Abs. 2). Liegen diese Voraussetzungen nicht vor, bleibt das Widerrufsrecht während der gesamten Frist bestehen.",
    ],
  },
  {
    heading: "§ 8 KI-erzeugte Inhalte",
    paragraphs: [
      "(1) Wie die Geschichten entstehen. Text und Vertonung der Geschichten erzeugt die KI eines Drittanbieters (derzeit OpenAI) automatisch aus Ihren Vorgaben. Die Namen Ihrer Figuren erhält die Text-KI nicht; wir setzen sie erst nachträglich ein (siehe Datenschutzerklärung). Wir lesen die Geschichten vor der Wiedergabe nicht und wählen sie nicht aus.",
      "(2) Was wir tun. Stichwörter und fertige Geschichten durchlaufen eine automatische Inhaltsprüfung. Stichwörter, die nicht zu einer Kindergeschichte passen, lehnen wir ab, bevor ein Credit verbraucht wird; eine Geschichte, die die Prüfung nicht besteht, wird neu geschrieben oder – wenn das nicht gelingt – nicht ausgeliefert und der Credit zurückgebucht. Außerdem geben wir der KI verbindliche inhaltliche Regeln vor: für Kinder im Alter von etwa 6 bis 8 Jahren geeignet, nichts, was Angst macht, keine Gewalt, keine Gefahr für die Figuren, ein gutes Ende. Wir überprüfen und verbessern diese Vorgaben laufend, insbesondere anhand von Meldungen.",
      "(3) Was wir nicht zusagen können. KI-Systeme arbeiten mit Wahrscheinlichkeiten. Wir sichern deshalb nicht zu, dass jede Geschichte",
    ],
    list: [
      "inhaltlich stimmig, vollständig oder frei von Wiederholungen ist,",
      "sachlich richtig ist – das gilt auch für Geschichten im Genre „Lernen\", die kein Lehrmaterial ersetzen,",
      "Ihre Stichwörter so aufgreift, wie Sie es sich vorgestellt haben,",
      "in jeder Sprache dieselbe Qualität hat.",
    ],
    afterList: [
      "(4) Begleitung durch Erwachsene. Wir empfehlen, neue Geschichten vor allem bei empfindlichen Kindern zunächst selbst anzuhören oder mitzuhören.",
      "(5) Melden. Ist eine Geschichte nicht in Ordnung – etwa beängstigend, nicht altersgerecht, verletzend oder sachlich falsch –, melden Sie sie bitte über „Inhalt melden\" in der Geschichte. Wir sehen uns jede Meldung an. Ist die Geschichte unbrauchbar, schreiben wir Ihnen den verbrauchten Credit wieder gut; weitergehende gesetzliche Rechte (§ 12) bleiben unberührt.",
      "(6) Kennzeichnung. Die Vorlesestimmen sind synthetisch erzeugt und keine Aufnahmen realer Sprecher. Geschichten und Stimmen sind KI-erzeugte Inhalte; die App kennzeichnet jede Geschichte als „Geschrieben und vorgelesen von KI\".",
    ],
  },
  {
    heading: "§ 9 Rechte an Inhalten",
    paragraphs: [
      "(1) Ihre Eingaben. An Ihren Eingaben – Figurennamen, Stichwörtern, Meldetexten – erwerben wir keine Rechte. Sie räumen uns lediglich das Recht ein, diese Eingaben zu speichern und an unsere Dienstleister zu übermitteln, soweit dies zum Erbringen der Leistung erforderlich ist. Eine Nutzung zum Training von KI-Modellen findet nicht statt.",
      "(2) Erzeugte Geschichten. Wir beanspruchen keine Rechte an den für Sie erzeugten Geschichten und Hörfassungen. Soweit an ihnen dennoch Rechte bei uns entstehen, räumen wir Ihnen daran ein einfaches, zeitlich und räumlich unbeschränktes, unentgeltliches Recht zur privaten Nutzung ein – einschließlich des Vorlesens und Vorspielens im Familien- und Freundeskreis.",
      "(3) Veröffentlichung. Eine Veröffentlichung oder gewerbliche Verwertung der Geschichten ist nicht Gegenstand dieses Vertrags. Tun Sie es dennoch, geschieht dies in eigener Verantwortung: KI-erzeugte Inhalte genießen möglicherweise keinen urheberrechtlichen Schutz, und wir können nicht zusichern, dass sie frei von Rechten Dritter sind.",
      "(4) Die App selbst. Wir räumen Ihnen für die Dauer des Nutzungsvertrags ein einfaches, nicht übertragbares Recht ein, die App auf Ihren Geräten bestimmungsgemäß zu nutzen. Alle Rechte an der App – Software, Gestaltung, Illustrationen, Bezeichnung und Logo – verbleiben bei uns bzw. den jeweiligen Rechteinhabern.",
    ],
  },
  {
    heading: "§ 10 Pflichten des Nutzers",
    paragraphs: [
      "(1) Angaben über Dritte. Wenn Sie Figuren nach realen Personen benennen, verwenden Sie nur Angaben, zu deren Verwendung Sie berechtigt sind – etwa über Ihr eigenes Kind. Ein Vorname oder Spitzname genügt; geben Sie keine Nachnamen, Adressen oder sonstigen identifizierenden Angaben ein.",
      "(2) Keine sensiblen Angaben. Geben Sie in Stichwörtern und Meldungen keine Gesundheitsdaten, Angaben zu Religion, Herkunft oder vergleichbar sensiblen Informationen über sich oder andere ein. Die Eingaben werden an den KI-Anbieter übermittelt (siehe Datenschutzerklärung).",
      "(3) Untersagte Nutzung. Untersagt ist insbesondere,",
    ],
    list: [
      "Eingaben zu machen, die auf rechtswidrige, gewaltverherrlichende, diskriminierende, sexuelle oder sonst für Kinder ungeeignete Inhalte abzielen,",
      "Inhaltsfilter, Nutzungsgrenzen, den Eltern-PIN oder andere Schutzmechanismen zu umgehen,",
      "die App oder unsere Serverschnittstellen automatisiert (z. B. durch Skripte oder Bots) zu nutzen,",
      "Konten oder Credits zu verkaufen oder Dritten gegen Entgelt zu überlassen,",
      "die App zu dekompilieren oder zu verändern; gesetzlich zwingend erlaubte Handlungen (z. B. § 69e UrhG) bleiben unberührt.",
    ],
    afterList: [
      "(4) Zugangsdaten und PIN. Sie halten Passwort und Eltern-PIN geheim und sorgen dafür, dass Kinder Einstellungen und Käufe nicht ohne Sie vornehmen können.",
    ],
  },
  {
    heading: "§ 11 Verfügbarkeit und Aktualisierungen",
    paragraphs: [
      "(1) Wir bemühen uns um eine möglichst unterbrechungsfreie Verfügbarkeit. Wartungsarbeiten, Störungen bei Dienstleistern (Supabase, OpenAI, RevenueCat, Google Play) und Überlastungen können das Erzeugen und Laden von Geschichten vorübergehend verhindern. Eine bestimmte Verfügbarkeit sichern wir nicht zu. Gespeicherte Geschichten bleiben davon unberührt abspielbar.",
      "(2) Zum Schutz vor Missbrauch und Überlastung ist die Zahl der Anfragen je Konto und Zeitraum begrenzt. Die Grenze liegt weit über einer üblichen privaten Nutzung.",
      "(3) Aktualisierungen (§ 327f BGB). Wir stellen während der Vertragslaufzeit Aktualisierungen bereit, die für den Erhalt der Vertragsmäßigkeit erforderlich sind – insbesondere Sicherheitsaktualisierungen und Anpassungen an neue Android-Versionen. Über verfügbare Aktualisierungen informiert der Google Play Store.",
      "(4) Installieren Sie eine bereitgestellte Aktualisierung nicht innerhalb einer angemessenen Frist, haften wir nicht für Mängel, die allein auf dem Fehlen dieser Aktualisierung beruhen, sofern wir Sie über die Aktualisierung und die Folgen einer unterlassenen Installation informiert haben und die unterlassene Installation nicht auf einer mangelhaften Installationsanleitung beruht (§ 327f Abs. 2 BGB).",
    ],
  },
  {
    heading: "§ 12 Mängelhaftung",
    paragraphs: [
      "(1) Es gelten die gesetzlichen Vorschriften über die Bereitstellung digitaler Produkte (§§ 327 ff. BGB), insbesondere die Ansprüche auf Nacherfüllung, Preisminderung, Beendigung des Vertrags und Schadensersatz nach Maßgabe des § 13.",
      "(2) Die Beschaffenheit KI-erzeugter Inhalte richtet sich nach § 3 Abs. 2 und § 8. Dass eine Geschichte anders ausfällt als erwartet, sich in Einzelheiten wiederholt oder vereinzelt kleinere sprachliche Fehler enthält, ist für sich genommen kein Mangel. Kein Mangel sind außerdem Einschränkungen, die allein auf Alter, Konfiguration oder Betriebssystem Ihres Geräts beruhen, sofern das Gerät die im Google Play Store angegebenen Mindestanforderungen nicht erfüllt.",
      "(3) Ist eine Geschichte mangelhaft, können wir zur Nacherfüllung wahlweise eine neue Geschichte ohne Credit-Verbrauch ermöglichen oder den Credit gutschreiben.",
      "(4) Bitte melden Sie Mängel über „Inhalt melden\" oder an info@simplynext.de – bei technischen Fehlern mit Gerätemodell, Android-Version, App-Version und einer Beschreibung, wie der Fehler auftritt.",
    ],
  },
  {
    heading: "§ 13 Haftung",
    paragraphs: [
      "(1) Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei Verletzung von Leben, Körper oder Gesundheit, bei Übernahme einer Garantie, bei arglistigem Verschweigen eines Mangels sowie nach dem Produkthaftungsgesetz.",
      "(2) Bei leicht fahrlässiger Verletzung einer wesentlichen Vertragspflicht – einer Pflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung Sie regelmäßig vertrauen dürfen – ist unsere Haftung auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.",
      "(3) Im Übrigen ist unsere Haftung für leichte Fahrlässigkeit ausgeschlossen.",
      "(4) Die vorstehenden Beschränkungen gelten auch zugunsten unserer gesetzlichen Vertreter und Erfüllungsgehilfen. Sie gelten nicht für Ansprüche aus der Verletzung datenschutzrechtlicher Vorschriften, soweit die DSGVO eine Beschränkung nicht zulässt, und berühren nicht Ihre Rechte nach § 12.",
      "(5) Eine Änderung der Beweislast zu Ihrem Nachteil ist mit den vorstehenden Regelungen nicht verbunden.",
    ],
  },
  {
    heading: "§ 14 Laufzeit, Kündigung, Kontolöschung",
    paragraphs: [
      "(1) Der Nutzungsvertrag läuft auf unbestimmte Zeit.",
      "(2) Kündigung durch Sie. Sie können den Vertrag jederzeit ohne Frist beenden, indem Sie Ihr Konto in der App unter „Einstellungen → Konto löschen\" löschen oder uns die Kündigung von der E-Mail-Adresse Ihres Kontos an info@simplynext.de mitteilen. Das bloße Deinstallieren der App beendet den Vertrag nicht; Ihr Konto und Ihr Guthaben bleiben dann bestehen.",
      "(3) Nicht verbrauchte Credits bei Vertragsende. Endet der Vertrag, erstatten wir Ihnen auf Anfrage den anteiligen Kaufpreis der gekauften, noch nicht verbrauchten Credits; maßgeblich ist der von Ihnen gezahlte Preis je Credit des jeweiligen Pakets. Unentgeltlich gutgeschriebene Credits (§ 5 Abs. 6) gelten dabei als zuerst verbraucht. Bitte stellen Sie die Anfrage vor der Löschung Ihres Kontos, da wir die Credits danach keinem Kauf mehr zuordnen können. Beenden wir den Vertrag nach Absatz 4 oder stellen wir den Dienst ein, erstatten wir von uns aus. Beenden wir den Vertrag aus wichtigem Grund nach Absatz 5 wegen eines von Ihnen zu vertretenden Verstoßes, bleiben gegenseitige gesetzliche Ansprüche unberührt.",
      "(4) Ordentliche Kündigung durch uns. Wir können den Vertrag mit einer Frist von zwei Monaten in Textform (E-Mail genügt) kündigen, etwa wenn wir den Dienst einstellen. Bis zum Wirksamwerden der Kündigung können Sie Ihre Credits weiter verwenden und Geschichten auf Ihrem Gerät speichern.",
      "(5) Kündigung aus wichtigem Grund. Das Recht beider Seiten zur Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt für uns insbesondere bei schwerwiegenden oder trotz Abmahnung wiederholten Verstößen gegen § 10 Abs. 3 vor, oder wenn ein Konto entgegen § 2 Abs. 1 von einer minderjährigen Person angelegt wurde.",
      "(6) Folgen. Mit Vertragsende werden Ihr Konto und die damit verbundenen Daten nach Maßgabe der Datenschutzerklärung gelöscht. Löschen Sie Ihr Konto in der App, entfernt die App auf diesem Gerät zugleich die gespeicherten Geschichten, den Eltern-PIN und die Einstellungen; vor der Löschung zeigt sie Ihnen Ihr verbleibendes Guthaben an. Auf anderen Geräten gespeicherte Audiodateien bleiben bis zur Deinstallation der App dort; Sie dürfen sie im Rahmen von § 9 Abs. 2 weiter privat nutzen.",
    ],
  },
  {
    heading: "§ 15 Änderungen dieser AGB",
    paragraphs: [
      "(1) Wir können diese AGB mit Wirkung für die Zukunft ändern, wenn dies wegen einer geänderten Rechtslage oder Rechtsprechung, wegen neuer oder geänderter Funktionen der App oder aus vergleichbaren sachlichen Gründen erforderlich ist.",
      "(2) Wir teilen Ihnen die geänderten AGB mindestens sechs Wochen vor ihrem Inkrafttreten in der App und per E-Mail mit und heben die Änderungen hervor. Die geänderten AGB werden nur mit Ihrer ausdrücklichen Zustimmung Vertragsbestandteil, die Sie in der App erteilen können. Ihr Schweigen oder die bloße Weiternutzung gilt nicht als Zustimmung.",
      "(3) Stimmen Sie nicht zu, gelten die bisherigen AGB weiter. Wir können den Vertrag in diesem Fall nach § 14 Abs. 4 kündigen; nicht verbrauchte, gekaufte Credits erstatten wir dann nach § 14 Abs. 3.",
      "(4) Änderungen der Preise für künftige Käufe von Credits sind keine Änderung dieser AGB; es gilt jeweils der beim Kauf angezeigte Preis (§ 6 Abs. 1). Bereits gekaufte Credits behalten ihren Wert von einem Credit je Geschichte.",
    ],
  },
  {
    heading: "§ 16 Datenschutz",
    paragraphs: [
      "Informationen zur Verarbeitung personenbezogener Daten finden Sie in der Datenschutzerklärung, abrufbar in der App unter „Einstellungen → Rechtliches → Datenschutzerklärung\" sowie online.",
    ],
  },
  {
    heading: "§ 17 Verbraucherstreitbeilegung",
    paragraphs: [
      "Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit (§ 36 Abs. 1 Nr. 1 VSBG). Sie können sich jederzeit unmittelbar an uns wenden: info@simplynext.de",
    ],
  },
  {
    heading: "§ 18 Schlussbestimmungen",
    paragraphs: [
      "(1) Es gilt das Recht der Bundesrepublik Deutschland. Haben Sie als Verbraucher Ihren gewöhnlichen Aufenthalt in einem anderen Staat, bleibt Ihnen der Schutz der zwingenden Verbraucherschutzvorschriften dieses Staates erhalten (Art. 6 Abs. 2 Rom-I-VO).",
      "(2) Für Verbraucher gelten die gesetzlichen Gerichtsstände.",
      "(3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung treten die gesetzlichen Vorschriften (§ 306 Abs. 2 BGB).",
      "(4) Maßgeblich ist die deutsche Fassung dieser AGB. Übersetzungen dienen nur der Information.",
    ],
  },
  {
    heading: "Anlage: Muster-Widerrufsformular",
    paragraphs: [
      "(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)",
      "An SimplyNext, Nuri Toker, Mechenseerstr. 12, 88316 Isny im Allgäu, Deutschland, E-Mail: info@simplynext.de:",
      "Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)",
      "– Bestellt am (*)/erhalten am (*)",
      "– Name des/der Verbraucher(s)",
      "– Anschrift des/der Verbraucher(s)",
      "– Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)",
      "– Datum",
      "(*) Unzutreffendes streichen.",
    ],
  },
  {
    heading: "Kontakt",
    paragraphs: [
      "SimplyNext",
    ],
    list: [
      "E-Mail: info@simplynext.de",
      "Telefon: 01743389049",
    ],
  },
];
