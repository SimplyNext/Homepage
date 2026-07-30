# Datenschutzerklärung – WerkFlow

Stand: 28.07.2026

## 1. Verantwortlicher

Verantwortlich für die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:

SimplyNext
Inhaber: Nuri Toker
Mechenseerstr. 12
88316 Isny im Allgäu
Deutschland

E-Mail: info@simplynext.de
Telefon: 01743389049

(Angaben identisch mit Impressum)

Ein betrieblicher Datenschutzbeauftragter ist nicht bestellt, da die gesetzlichen Voraussetzungen nach Art. 37 DSGVO / § 38 BDSG nicht vorliegen (Einzelunternehmen ohne die Anzahl von mindestens 20 ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigten Personen).

---

## 2. Allgemeines zur Datenverarbeitung

WerkFlow ist eine App für Handwerksbetriebe zur Erstellung von Angeboten, Kundenverwaltung und Materiallisten. Bei der Nutzung der App werden personenbezogene Daten verarbeitet. Personenbezogene Daten sind alle Daten, die auf Sie persönlich beziehbar sind, z. B. Name, Adresse, E-Mail-Adresse oder Nutzerverhalten.

Wir verarbeiten Ihre Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen App sowie unserer Inhalte und Leistungen erforderlich ist, oder soweit Sie eingewilligt haben.

---

## 3. Welche Daten wir verarbeiten

### 3.1 Konto- und Authentifizierungsdaten
Bei der Registrierung erheben wir:
- E-Mail-Adresse
- Passwort (verschlüsselt gespeichert, für uns nicht einsehbar)
- Zeitpunkt der Registrierung, Login-Historie, Session-Token

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung – Bereitstellung des Nutzerkontos)

### 3.2 Firmenprofildaten
Zur Erstellung rechtssicherer Angebote und PDFs erheben und speichern wir die von Ihnen eingegebenen Angaben zu Ihrem Betrieb:
- Firmenname, Rechtsform
- Anschrift (Straße, PLZ, Ort)
- Steuernummer / Umsatzsteuer-ID
- Telefonnummer, Firmen-E-Mail, Website
- Ansprechpartner, Geschäftsführer
- Sitz der Gesellschaft, Registergericht, Handelsregisternummer
- Firmenlogo (Bilddatei)
- Name und Position der unterschriftsberechtigten Person
- Digitale Unterschrift (als Bilddatei)

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung, soweit Pflichtangaben für Rechnungen/Angebote nach § 14 UStG erforderlich sind)

### 3.3 Bankverbindung (besonders sensible Finanzdaten)
Zur Angabe auf erstellten Angeboten/PDF-Dokumenten können Sie folgende Daten hinterlegen:
- Bankname
- IBAN
- BIC

Diese Daten werden ausschließlich zum Zweck der Anzeige auf Ihren eigenen Angebotsdokumenten gespeichert und **nicht** zur Zahlungsabwicklung innerhalb der App genutzt.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)

### 3.4 Kundendaten
Wenn Sie Kunden in der App anlegen, verarbeiten wir die von Ihnen eingegebenen Daten Ihrer Endkunden:
- Vor- und Nachname, ggf. Firma
- Anschrift (Straße, Hausnummer, PLZ, Ort)
- Telefonnummer (optional)
- E-Mail-Adresse (optional)
- Kundennummer

**Hinweis:** Sie als Nutzer sind hinsichtlich der Daten Ihrer Kunden datenschutzrechtlich selbst Verantwortlicher (Art. 4 Nr. 7 DSGVO). Wir verarbeiten diese Daten in Ihrem Auftrag als Auftragsverarbeiter im Sinne von Art. 28 DSGVO. Ein entsprechender Auftragsverarbeitungsvertrag (AVV) kann auf Anfrage bereitgestellt werden.

**Rechtsgrundlage (aus Ihrer Sicht als Nutzer):** Art. 6 Abs. 1 lit. b oder f DSGVO, je nach Kundenbeziehung

### 3.5 Angebots- und Materialdaten
- Angebotsnummer, Datum, Betreff, Gültigkeitsdauer
- Positionen, Mengen, Einzelpreise, Gesamtsummen, MwSt.
- Zahlungsbedingungen, Liefer-/Leistungszeit
- Status (Entwurf, versendet, angenommen, abgelehnt)
- Materialliste mit Bezeichnungen, Preisen, Einheiten

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO

**Aufbewahrungsfrist:** Angebots- und Rechnungsdaten werden aus steuerrechtlichen Gründen 10 Jahre aufbewahrt (§ 147 Abgabenordnung, § 257 HGB).

### 3.6 Fotos und Sprachaufnahmen (KI-Analyse)
Um Ihnen die automatische Angebotserstellung per KI zu ermöglichen, können Sie:
- Fotos von Baustellen/Schäden über die Gerätekamera aufnehmen
- Sprachnotizen über das Mikrofon aufzeichnen
- Fotos von handschriftlichen oder gedruckten Materiallisten hochladen

Diese Inhalte werden **nur nach Ihrer ausdrücklichen Einwilligung** (Zustimmungsdialog in der App) über eine gesicherte Verbindung an unsere Server (Supabase, siehe Ziff. 4.1) übermittelt und von dort zur automatisierten Analyse an einen KI-Dienst weitergeleitet.

**Primärer KI-Dienst:** Google Gemini (kostenpflichtiger Tarif mit aktivierter Abrechnung) verarbeitet standardmäßig Fotos, Sprachaufnahmen und Textbeschreibungen für die Angebotserstellung sowie Fotos von Materiallisten.

**Fallback-Dienst:** Ist Google Gemini vorübergehend nicht erreichbar (z. B. bei einer technischen Störung), wird die Anfrage automatisch an OpenAI (GPT-4o, ggf. inkl. Whisper-Transkription bei Sprachaufnahmen) weitergeleitet, damit Ihre Anfrage dennoch bearbeitet werden kann. Der Fallback kommt nur im Ausnahmefall zum Einsatz.

Die Rohdaten (Fotos, Audiodateien) werden nach Abschluss der KI-Analyse **nicht dauerhaft auf unseren Servern gespeichert**, sondern nur für die Dauer der Verarbeitung übermittelt.

Da wir bei Google Gemini einen kostenpflichtigen Tarif mit aktivierter Abrechnung nutzen, gilt gemäß den Nutzungsbedingungen der Gemini-API ausdrücklich, dass Google Ihre Eingaben (Prompts, Bilder, Audiodateien) und die generierten Antworten **nicht zur Verbesserung von Google-Produkten verwendet**. Eingaben werden dort ausschließlich zeitlich begrenzt zur Missbrauchserkennung und aus Sicherheitsgründen protokolliert (Quelle: Gemini API - Nutzungsbedingungen für kostenpflichtige Dienste).

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Einwilligung kann jederzeit mit Wirkung für die Zukunft in den App-Einstellungen widerrufen werden (Toggle „KI-Analyse verwenden").

**Wichtiger Hinweis:** Achten Sie beim Fotografieren von Baustellen/Kundenwohnungen darauf, dass keine Personen oder sensible private Unterlagen im Bild erkennbar sind, da Sie hierfür als Nutzer selbst verantwortlich sind.

### 3.7 Abonnement- und Zahlungsdaten
Für die Nutzung kostenpflichtiger Funktionen (Abo-Modelle „Solo", „Kleiner Betrieb", „Pro") verarbeiten wir:
- Ihre Nutzer-ID (zur Zuordnung des Abos zu Ihrem Konto)
- Abo-Status, gebuchter Tarif, Ablaufdatum
- Kaufhistorie (verwaltet über RevenueCat, siehe Ziff. 4.3)

Die eigentliche Zahlungsabwicklung erfolgt vollständig über **Google Play Billing**. Kreditkarten- oder sonstige Zahlungsdaten werden von uns zu keinem Zeitpunkt erhoben, gespeichert oder eingesehen.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)

### 3.8 Technische Daten / Nutzungsdaten
Bei Nutzung der App werden aus technischen Gründen automatisch verarbeitet:
- Geräteinformationen (Betriebssystem, App-Version)
- Fehlerprotokolle (zur Fehlerbehebung)
- Lokale Einstellungen (Theme, Spracheinstellung – nur lokal auf dem Gerät gespeichert)

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Funktionsfähigkeit und Sicherheit der App)

---

## 4. Empfänger der Daten / Auftragsverarbeiter

Wir setzen sorgfältig ausgewählte Dienstleister ein, die Ihre Daten ausschließlich nach unserer Weisung verarbeiten. Mit allen Anbietern bestehen, soweit erforderlich, Verträge zur Auftragsverarbeitung (Art. 28 DSGVO).

### 4.1 Supabase (Backend, Datenbank, Authentifizierung, Dateispeicher)
Supabase Inc., verarbeitet Daten auf Servern innerhalb der EU.

Übermittelte Daten: sämtliche unter Ziff. 3.1–3.7 genannten Daten (Konto-, Profil-, Kunden-, Angebots- und Materialdaten, Firmenlogo, Unterschrift-Bilddatei).

Datenschutzerklärung: https://supabase.com/privacy

### 4.2 KI-Analysedienste (Google Gemini als primärer Dienst, OpenAI GPT-4o als Fallback)
Zur automatisierten Auswertung von Fotos, Sprachaufnahmen und Textbeschreibungen (siehe Ziff. 3.6) nutzen wir:

- **Google Gemini** (Google Ireland Limited / Google LLC, USA) — primärer und regulär genutzter KI-Dienst, kostenpflichtiger Tarif ohne Trainingsnutzung Ihrer Daten
  Datenschutzerklärung: https://policies.google.com/privacy
  Nutzungsbedingungen (kostenpflichtige Dienste): https://ai.google.dev/gemini-api/terms#paid-services

- **OpenAI GPT-4o** (OpenAI, L.L.C., USA) — ausschließlich als technischer Fallback, falls Google Gemini vorübergehend nicht verfügbar ist
  Datenschutzerklärung: https://openai.com/privacy

**Drittlandtransfer:** Da diese Anbieter auch Server in den USA betreiben, kann es zu einer Übermittlung personenbezogener Daten in ein Land außerhalb der EU/des EWR kommen. Wir stellen ein angemessenes Datenschutzniveau durch den Abschluss von EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO) mit den jeweiligen Anbietern sicher.

Die Übermittlung erfolgt ausschließlich nach Ihrer aktiven Einwilligung (Ziff. 3.6) und ist zeitlich auf die Dauer der Analyse begrenzt.

### 4.3 RevenueCat (Abonnementverwaltung)
RevenueCat, Inc., San Francisco, USA

Übermittelte Daten: Nutzer-ID, Kauf- und Abo-Status, geräteseitige Kaufbestätigungen.

Datenschutzerklärung: https://www.revenuecat.com/privacy

**Drittlandtransfer:** USA, abgesichert über EU-Standardvertragsklauseln.

### 4.4 Google Play Billing / Google Play Services
Google Ireland Limited / Google LLC

Die Zahlungsabwicklung für Abonnements erfolgt vollständig über Google Play. Es gilt zusätzlich die Datenschutzerklärung von Google:
https://policies.google.com/privacy

### 4.5 Google ARCore (optional, geräteinterne Verarbeitung)
Für die optionale Aufmaß-Funktion (Kamera-basierte Vermessung von Längen, Flächen, Winkeln) wird die Google-ARCore-Bibliothek genutzt. Die Bildverarbeitung erfolgt vollständig lokal auf Ihrem Gerät; es findet **keine** Übermittlung von Kamerabildern an Google oder an uns statt.

---

## 5. Berechtigungen der App

Die App fordert folgende Systemberechtigungen an:

| Berechtigung | Zweck | Pflicht |
|---|---|---|
| Kamera | Aufnahme von Fotos für die KI-gestützte Angebotserstellung; optionale AR-Vermessungsfunktion | Nur bei aktiver Nutzung der Foto-/AR-Funktion |
| Mikrofon | Aufnahme von Sprachnotizen zur Angebotserstellung | Nur bei aktiver Nutzung der Sprachfunktion |
| Internetzugriff | Kommunikation mit unseren Servern (Supabase, RevenueCat) | Erforderlich für Grundfunktionen |

Die App fordert **keinen** Zugriff auf Standort, Kontakte, SMS, Anrufliste oder andere Apps an.

Berechtigungen werden zur Laufzeit angefragt und sind in den Android-Systemeinstellungen jederzeit widerrufbar. Ohne Kamera-/Mikrofonzugriff sind die betroffenen Einzelfunktionen (Foto-Analyse, Sprachaufnahme, AR-Aufmaß) nicht nutzbar; die übrige App bleibt voll funktionsfähig.

---

## 6. Speicherdauer

| Datenkategorie | Speicherdauer |
|---|---|
| Kontodaten | Bis zur Löschung des Nutzerkontos |
| Angebots-/Rechnungsdaten | 10 Jahre (steuerrechtliche Aufbewahrungspflicht) |
| Kundendaten | Bis zur Löschung durch den Nutzer bzw. bis zum Ende der Geschäftsbeziehung |
| Fotos/Sprachaufnahmen zur KI-Analyse | Nur temporär während der Verarbeitung, keine dauerhafte Speicherung |
| Firmenlogo, Unterschrift | Bis zur Löschung durch den Nutzer bzw. Account-Löschung |
| Abo-/Kaufdaten | Gemäß gesetzlichen Aufbewahrungspflichten sowie den Bestimmungen von RevenueCat/Google Play |

---

## 7. Ihre Rechte als betroffene Person

Sie haben jederzeit das Recht auf:

- **Auskunft** über die von uns verarbeiteten personenbezogenen Daten (Art. 15 DSGVO)
- **Berichtigung** unrichtiger Daten (Art. 16 DSGVO)
- **Löschung** Ihrer Daten (Art. 17 DSGVO)
- **Einschränkung der Verarbeitung** (Art. 18 DSGVO)
- **Datenübertragbarkeit** (Art. 20 DSGVO)
- **Widerspruch** gegen die Verarbeitung (Art. 21 DSGVO)
- **Widerruf erteilter Einwilligungen** mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)
- **Beschwerde bei einer Aufsichtsbehörde** (Art. 77 DSGVO)

### In der App direkt nutzbare Funktionen:
- **Datenexport:** Unter Einstellungen → „Meine Daten exportieren" können Sie alle gespeicherten Daten als JSON-Datei herunterladen.
- **Account-Löschung:** Unter Einstellungen → „Account löschen" können Sie Ihr Konto und alle zugehörigen Daten unwiderruflich löschen lassen.
- **Widerruf KI-Einwilligung:** Unter Einstellungen können Sie die KI-gestützte Analyse jederzeit deaktivieren.

Für alle weiteren Anfragen wenden Sie sich an: info@simplynext.de

---

## 8. Datensicherheit

Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor Verlust, Missbrauch und unberechtigtem Zugriff zu schützen:

- Verschlüsselte Übertragung sämtlicher Daten via TLS/HTTPS
- Zugriffskontrolle auf Datenbankebene (Row Level Security) – jeder Nutzer kann ausschließlich auf seine eigenen Daten zugreifen
- Sichere, PKCE-basierte Authentifizierung mit automatischem Token-Ablauf und -Erneuerung
- API-Schlüssel Dritter (z. B. RevenueCat) werden nicht im App-Code hinterlegt, sondern serverseitig gesichert bereitgestellt
- Passwörter werden ausschließlich verschlüsselt (gehasht) gespeichert

---

## 9. Keine automatisierte Entscheidungsfindung

Es findet keine automatisierte Entscheidungsfindung im Sinne des Art. 22 DSGVO statt, die rechtliche Wirkung gegenüber Ihnen entfaltet. Die KI-gestützte Erkennung von Materialien und Arbeitszeiten dient lediglich als **Vorschlag**; Sie prüfen und bestätigen alle KI-generierten Angaben vor der Übernahme in ein Angebot selbst (siehe Bestätigungspflicht in der App: „Ich habe die KI-generierten Daten geprüft und bestätige deren Richtigkeit").

---

## 10. Änderungen dieser Datenschutzerklärung

Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen der App bzw. der Datenverarbeitung anzupassen. Für Ihren erneuten Besuch bzw. bei der nächsten Nutzung der App gilt dann die neue Datenschutzerklärung. Bei wesentlichen Änderungen werden wir Sie in der App gesondert informieren.

---

## 11. Kontakt

Bei Fragen zum Datenschutz wenden Sie sich bitte an:

SimplyNext
Nuri Toker
Mechenseerstr. 12
88316 Isny im Allgäu

E-Mail: info@simplynext.de
Telefon: 01743389049
