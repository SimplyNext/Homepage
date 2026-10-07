import type { AccountDeletionSlug } from "./account-deletion-apps";
import type { LegalSection } from "./legal";

/**
 * „Konto löschen“-Seiten für Apps mit Nutzerkonto – Google Play verlangt dafür
 * einen Link, über den Nutzer ihr Konto auch ohne die App löschen können.
 *
 * Die Seite kombiniert drei Wege: Anleitung für die App, Selbstlöschung per
 * Anmeldung direkt auf der Seite und Antrag per E-Mail.
 *
 * Supabase-Adresse und Anon-Key sind öffentliche Werte (sie stecken auch in
 * der App) und dürfen im Browser stehen. Der Service-Key bleibt in der
 * Edge-Function `delete-account`, die die eigentliche Löschung ausführt.
 *
 * Weitere Apps (z. B. NOOK, Fabula) bekommen hier einen eigenen Eintrag und
 * werden in lib/account-deletion-apps.ts eingetragen.
 */
export type AccountDeletionConfig = {
  supabaseUrl: string;
  anonKey: string;
  mailSubject: string;
  sections: Record<"de" | "en", LegalSection[]>;
  /** Text der Pflicht-Checkbox, falls er vom Standard (Belege gesichert)
   *  abweicht – z. B. für Apps ohne Angebote und Rechnungen. */
  confirm?: Record<"de" | "en", string>;
  /** Text nach erfolgreicher Löschung, falls er vom Standard (Abo bei Google
   *  Play kündigen) abweicht. */
  success?: Record<"de" | "en", string>;
};

export const accountDeletion: Record<AccountDeletionSlug, AccountDeletionConfig> = {
  wefixit: {
    supabaseUrl: "https://zbrlhswafnlpfwqikapu.supabase.co",
    anonKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpicmxoc3dhZm5scGZ3cWlrYXB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2MDkyMjEsImV4cCI6MjA3NDE4NTIyMX0.UZVKgCtV0j5MCpPymNnL1RkV_JQLQKwidOUud6Asn7M",
    mailSubject: "Kontolöschung WeFixIt",
    // Quelle: wefixit/legal-pages/account-deletion.md, ergänzt um die
    // Selbstlöschung auf dieser Seite. Anrede wie in der Datenschutzerklärung
    // der App („Sie“); die Vorlage duzt.
    sections: {
      de: [
        {
          paragraphs: [
            "Diese Seite erklärt, wie Sie Ihr Konto in der App WeFixIt von SimplyNext und alle zugehörigen Daten löschen. Sie können die Löschung direkt in der App oder hier auf dieser Seite vornehmen.",
          ],
        },
        {
          heading: "Wichtig vor der Löschung",
          list: [
            "Credits und Abo: Mit dem Konto verfallen gekaufte Credits und der Zugang zu kostenpflichtigen Funktionen. Eine Erstattung ist nicht möglich.",
            "Abo kündigen: Das Löschen des Kontos beendet kein laufendes Abo. Abos werden über Google Play abgerechnet und müssen dort gekündigt werden: Google Play Store öffnen → Profilbild → Zahlungen und Abos → Abos → WeFixIt → Abo kündigen.",
          ],
          slot: "subscriptions",
        },
        {
          heading: "Möglichkeit 1: In der App löschen",
          ordered: true,
          list: [
            "Öffnen Sie WeFixIt und melden Sie sich an.",
            "Öffnen Sie die Einstellungen.",
            "Tippen Sie auf „Konto & Daten löschen“.",
            "Bestätigen Sie die Löschung.",
          ],
          afterList: ["Die Löschung erfolgt sofort."],
        },
        {
          heading: "Möglichkeit 2: Hier auf dieser Seite löschen",
          paragraphs: [
            "Melden Sie sich mit der E-Mail-Adresse und dem Passwort Ihres WeFixIt-Kontos an. Ihre Anmeldedaten gehen verschlüsselt direkt an unseren Anmeldedienst und werden auf dieser Website nicht gespeichert. Die Löschung erfolgt sofort.",
          ],
          slot: "form",
        },
        {
          paragraphs: [
            "Kein Zugang mehr zu Ihrem Konto? Schreiben Sie von Ihrer registrierten E-Mail-Adresse an info@simplynext.de (Betreff: „Kontolöschung WeFixIt“). Wir löschen Ihr Konto innerhalb von 30 Tagen und bestätigen es Ihnen per E-Mail.",
          ],
          slot: "mail",
        },
        {
          heading: "Welche Daten gelöscht werden",
          paragraphs: ["Sofort und endgültig gelöscht werden:"],
          list: [
            "Profil- und Kontodaten (E-Mail-Adresse, Passwort, Anzeigename, Profilbild)",
            "alle gespeicherten Fahrzeuge mit HSN/TSN, Fahrgestellnummer und Kilometerstand",
            "Kosten- und Wartungseinträge einschließlich Ihrer Erinnerungen",
            "Chatverläufe von „Ask Toni“ samt angehängter Fotos",
            "gescannte Fehlercodes und Diagnoseverläufe",
            "hochgeladene Fotos (Fahrzeug- und Profilbilder)",
            "Feedback-Einträge",
            "Credit-Stand, Credit-Verlauf und Ihre erteilten Einwilligungen",
          ],
        },
        {
          heading: "Welche Daten nicht von uns gelöscht werden",
          list: [
            "Kaufbelege bei Google Play: Abos und Credits werden über Google Play verkauft und abgerechnet. Google bewahrt Ihre Bestellungen nach eigenen Bestimmungen und gesetzlichen Aufbewahrungspflichten auf; es gilt die Datenschutzerklärung von Google (policies.google.com/privacy).",
            "Abrechnungsrelevante Belege: Unterlagen zu abgeschlossenen Käufen müssen wir nach § 147 AO und § 257 HGB aufbewahren (regelmäßig 6 bis 10 Jahre). Sie werden nur zu diesem Zweck gesperrt gespeichert und nicht anderweitig verarbeitet.",
            "Anonymer Zwischenspeicher: Diagnoseergebnisse liegen dort nur unter „Fehlercode + Sprache“ und ohne jeden Bezug zu Ihrem Konto; ein Rückschluss auf Sie ist daraus nicht möglich.",
          ],
          slot: "footer",
        },
      ],
      en: [
        {
          paragraphs: [
            "This page explains how to delete your account in the app WeFixIt by SimplyNext and all associated data. You can delete it directly in the app or here on this page.",
          ],
        },
        {
          heading: "Important Before Deleting",
          list: [
            "Credits and subscription: Deleting the account forfeits purchased credits and access to paid features. A refund is not possible.",
            "Cancel your subscription: Deleting the account does not end an active subscription. Subscriptions are billed via Google Play and must be cancelled there: open the Google Play Store → profile picture → Payments & subscriptions → Subscriptions → WeFixIt → Cancel subscription.",
          ],
          slot: "subscriptions",
        },
        {
          heading: "Option 1: Delete in the App",
          ordered: true,
          list: [
            "Open WeFixIt and sign in.",
            "Open the Settings.",
            "Tap “Delete Account & Data”.",
            "Confirm the deletion.",
          ],
          afterList: ["The deletion takes effect immediately."],
        },
        {
          heading: "Option 2: Delete Here on This Page",
          paragraphs: [
            "Sign in with the e-mail address and password of your WeFixIt account. Your sign-in details are sent encrypted directly to our authentication service and are not stored on this website. The deletion takes effect immediately.",
          ],
          slot: "form",
        },
        {
          paragraphs: [
            "No longer have access to your account? Write from your registered e-mail address to info@simplynext.de (subject: “Kontolöschung WeFixIt”). We will delete your account within 30 days and confirm it to you by e-mail.",
          ],
          slot: "mail",
        },
        {
          heading: "Which Data Is Deleted",
          paragraphs: ["The following is deleted immediately and permanently:"],
          list: [
            "profile and account data (e-mail address, password, display name, profile picture)",
            "all saved vehicles including HSN/TSN, vehicle identification number and mileage",
            "cost and maintenance entries including your reminders",
            "chat history of “Ask Toni” including attached photos",
            "scanned error codes and diagnostic history",
            "uploaded photos (vehicle and profile images)",
            "feedback entries",
            "credit balance, credit history and the consents you have given",
          ],
        },
        {
          heading: "Which Data We Do Not Delete",
          list: [
            "Purchase receipts at Google Play: Subscriptions and credits are sold and billed via Google Play. Google retains your orders in accordance with its own terms and statutory retention obligations; Google's privacy policy applies (policies.google.com/privacy).",
            "Records relevant for accounting: Documents relating to completed purchases must be retained under § 147 AO and § 257 HGB (usually 6 to 10 years). They are stored in a restricted manner for this purpose only and are not processed otherwise.",
            "Anonymous cache: Diagnostic results are stored there under “error code + language” only and without any reference to your account; no conclusions about you can be drawn from it.",
          ],
          slot: "footer",
        },
      ],
    },
  },
  werkflow: {
    supabaseUrl: "https://pwswwuuewxmomkosieez.supabase.co",
    anonKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3c3d3dXVld3htb21rb3NpZWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1MDIyMTIsImV4cCI6MjA4NzA3ODIxMn0.TkyEMSSwoMxQJm6tmEAtxQgknDJeMJL03RGiAlbsatg",
    mailSubject: "Konto löschen – WerkFlow",
    // Quelle: werkflow/docs/konto-loeschen.md. Ergänzt um „Möglichkeit 2: Hier
    // auf dieser Seite löschen“; der E-Mail-Antrag steht nur noch als Hinweis
    // für Nutzer ohne Kontozugang darunter (Passwort vergessen, E-Mail nie
    // bestätigt, Störung) – darauf verweisen auch die Fehlermeldungen.
    sections: {
      de: [
        {
          paragraphs: [
            "Diese Seite erklärt, wie Sie Ihr Konto in der App WerkFlow von SimplyNext und alle zugehörigen Daten löschen. Sie können die Löschung direkt in der App oder hier auf dieser Seite vornehmen.",
          ],
        },
        {
          heading: "Wichtig vor der Löschung",
          list: [
            "Belege sichern: Mit dem Konto werden auch alle Angebote und Rechnungen sofort und endgültig gelöscht – auch solche, die Sie gesetzlich noch aufbewahren müssen (Rechnungen 8 Jahre, Angebote ohne Auftrag 6 Jahre, jeweils ab Ende des Kalenderjahres). Die Aufbewahrungspflicht liegt bei Ihnen. Sichern Sie Ihre Belege vorher in der App unter Einstellungen → „Export für Steuerberater“ und alle übrigen Daten unter Einstellungen → „Meine Daten exportieren“.",
            "Abo kündigen: Das Löschen des Kontos beendet kein laufendes Abo. Abos werden über Google Play abgerechnet und müssen dort gekündigt werden: Google Play Store öffnen → Profilbild → Zahlungen und Abos → Abos → WerkFlow → Abo kündigen.",
          ],
          slot: "subscriptions",
        },
        {
          heading: "Möglichkeit 1: In der App löschen",
          ordered: true,
          list: [
            "Öffnen Sie WerkFlow und melden Sie sich an.",
            "Öffnen Sie die Einstellungen.",
            "Tippen Sie auf „Account löschen“.",
            "Bestätigen Sie mit „Endgültig löschen“.",
          ],
          afterList: ["Die Löschung erfolgt sofort."],
        },
        {
          heading: "Möglichkeit 2: Hier auf dieser Seite löschen",
          paragraphs: [
            "Melden Sie sich mit der E-Mail-Adresse und dem Passwort Ihres WerkFlow-Kontos an. Ihre Anmeldedaten gehen verschlüsselt direkt an unseren Anmeldedienst und werden auf dieser Website nicht gespeichert. Die Löschung erfolgt sofort.",
          ],
          slot: "form",
        },
        {
          paragraphs: [
            "Kein Zugang mehr zu Ihrem Konto? Schreiben Sie von Ihrer registrierten E-Mail-Adresse an info@simplynext.de (Betreff: „Konto löschen – WerkFlow“). Wir löschen Ihr Konto innerhalb von 30 Tagen und bestätigen es Ihnen per E-Mail.",
          ],
          slot: "mail",
        },
        {
          heading: "Welche Daten gelöscht werden",
          paragraphs: ["Sofort und endgültig gelöscht werden:"],
          list: [
            "Kontodaten (E-Mail-Adresse, Passwort, Anmeldedaten)",
            "Firmenprofil, Firmenlogo und Unterschrift",
            "Kunden, Materialliste und freie Notizen",
            "Feedback, das Sie uns über die App geschickt haben",
            "Angebote und Rechnungen einschließlich PDF und E-Rechnung (ZUGFeRD/XRechnung) sowie das Änderungsprotokoll der Belege",
            "Sprachaufnahmen und Fotos",
            "Abo-Status und Protokoll der Abo-Ereignisse in WerkFlow",
            "Ihr Kundeneintrag bei unserem Abrechnungsdienstleister RevenueCat",
          ],
        },
        {
          heading: "Welche Daten nicht von uns gelöscht werden",
          list: [
            "Kaufbelege bei Google Play: Abos werden über Google Play verkauft und abgerechnet. Google bewahrt Ihre Bestellungen nach eigenen Bestimmungen und gesetzlichen Aufbewahrungspflichten auf; es gilt die Datenschutzerklärung von Google (policies.google.com/privacy).",
            "Sicherungskopien: Technische Sicherungen unseres Hosting-Anbieters können gelöschte Daten noch bis zu 7 Tage enthalten und werden danach automatisch überschrieben.",
          ],
          slot: "footer",
        },
      ],
      en: [
        {
          paragraphs: [
            "This page explains how to delete your account in the app WerkFlow by SimplyNext and all associated data. You can delete it directly in the app or here on this page.",
          ],
        },
        {
          heading: "Important Before Deleting",
          list: [
            "Back up your documents: Deleting the account also deletes all quotes and invoices immediately and permanently – including those you are still legally required to retain (invoices 8 years, quotes without an order 6 years, each from the end of the calendar year). The retention obligation lies with you. Back up your documents beforehand in the app under Settings → “Export for tax advisor” and all other data under Settings → “Export My Data”.",
            "Cancel your subscription: Deleting the account does not end an active subscription. Subscriptions are billed via Google Play and must be cancelled there: open the Google Play Store → profile picture → Payments & subscriptions → Subscriptions → WerkFlow → Cancel subscription.",
          ],
          slot: "subscriptions",
        },
        {
          heading: "Option 1: Delete in the App",
          ordered: true,
          list: [
            "Open WerkFlow and sign in.",
            "Open the Settings.",
            "Tap “Delete Account”.",
            "Confirm with “Permanently Delete”.",
          ],
          afterList: ["The deletion takes effect immediately."],
        },
        {
          heading: "Option 2: Delete Here on This Page",
          paragraphs: [
            "Sign in with the e-mail address and password of your WerkFlow account. Your sign-in details are sent encrypted directly to our authentication service and are not stored on this website. The deletion takes effect immediately.",
          ],
          slot: "form",
        },
        {
          paragraphs: [
            "No longer have access to your account? Write from your registered e-mail address to info@simplynext.de (subject: “Konto löschen – WerkFlow”). We will delete your account within 30 days and confirm it to you by e-mail.",
          ],
          slot: "mail",
        },
        {
          heading: "Which Data Is Deleted",
          paragraphs: ["The following is deleted immediately and permanently:"],
          list: [
            "Account data (e-mail address, password, sign-in data)",
            "Company profile, company logo and signature",
            "Customers, material list and free-form notes",
            "Feedback you sent us via the app",
            "Quotes and invoices including PDF and e-invoice (ZUGFeRD/XRechnung) as well as the change log of the documents",
            "Voice recordings and photos",
            "Subscription status and subscription event log in WerkFlow",
            "Your customer record at our billing service provider RevenueCat",
          ],
        },
        {
          heading: "Which Data We Do Not Delete",
          list: [
            "Purchase receipts at Google Play: Subscriptions are sold and billed via Google Play. Google retains your orders in accordance with its own terms and statutory retention obligations; Google's privacy policy applies (policies.google.com/privacy).",
            "Backups: Technical backups of our hosting provider may still contain deleted data for up to 7 days and are then overwritten automatically.",
          ],
          slot: "footer",
        },
      ],
    },
  },
  fabula: {
    supabaseUrl: "https://alysmbbnvqeawoktnxit.supabase.co",
    anonKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFseXNtYmJudnFlYXdva3RueGl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2NDYwNjcsImV4cCI6MjA5OTIyMjA2N30.b89vkTMY7gOp3-N1L-VsfoQ0B4szKlk6xQib8g6xHs4",
    mailSubject: "Konto löschen – Fabula",
    // Quelle: vory/supabase/functions/delete-account (was gelöscht wird) und
    // die Fabula-Datenschutzerklärung (Aufbewahrung von Zustimmungen und
    // Widerrufen, Kaufbelege bei Google Play).
    confirm: {
      de: "Mir ist klar, dass alle Geschichten, Figuren und Credits endgültig gelöscht werden.",
      en: "I understand that all stories, characters and credits will be permanently deleted.",
    },
    success: {
      de: "Alle Geschichten, Figuren und Kontodaten wurden entfernt. Auf Ihrem Gerät gespeicherte Geschichten entfernen Sie, indem Sie die App deinstallieren oder ihre Daten löschen.",
      en: "All stories, characters and account data have been removed. To remove stories saved on your device, uninstall the app or clear its data.",
    },
    sections: {
      de: [
        {
          paragraphs: [
            "Diese Seite erklärt, wie Sie Ihr Konto in der App Fabula von SimplyNext und alle zugehörigen Daten löschen. Sie können die Löschung direkt in der App oder hier auf dieser Seite vornehmen.",
          ],
        },
        {
          heading: "Wichtig vor der Löschung",
          list: [
            "Credits verfallen: Gekaufte und noch nicht genutzte Credits gehen mit dem Konto endgültig verloren. Möchten Sie den Kaufpreis nicht genutzter Credits zurück, schreiben Sie uns bitte vor dem Löschen an info@simplynext.de.",
            "Keine Wiederherstellung: Alle Geschichten, Kapitel, Hörbücher und Figuren werden gelöscht und lassen sich nicht wiederherstellen.",
          ],
        },
        {
          heading: "Möglichkeit 1: In der App löschen",
          ordered: true,
          list: [
            "Öffnen Sie Fabula und melden Sie sich an.",
            "Öffnen Sie die Einstellungen und geben Sie den Eltern-PIN ein.",
            "Tippen Sie im Abschnitt „Konto“ auf „Konto löschen“.",
            "Bestätigen Sie die Löschung.",
          ],
          afterList: [
            "Die Löschung erfolgt sofort. Dabei werden auch die auf dem Gerät gespeicherten Geschichten und der Eltern-PIN entfernt.",
          ],
        },
        {
          heading: "Möglichkeit 2: Hier auf dieser Seite löschen",
          paragraphs: [
            "Melden Sie sich mit der E-Mail-Adresse und dem Passwort Ihres Fabula-Kontos an. Ihre Anmeldedaten gehen verschlüsselt direkt an unseren Anmeldedienst und werden auf dieser Website nicht gespeichert. Die Löschung erfolgt sofort.",
          ],
          slot: "form",
        },
        {
          paragraphs: [
            "Kein Zugang mehr zu Ihrem Konto? Schreiben Sie von Ihrer registrierten E-Mail-Adresse an info@simplynext.de (Betreff: „Konto löschen – Fabula“). Wir löschen Ihr Konto innerhalb von 30 Tagen und bestätigen es Ihnen per E-Mail.",
          ],
          slot: "mail",
        },
        {
          heading: "Welche Daten gelöscht werden",
          paragraphs: ["Sofort und endgültig gelöscht werden:"],
          list: [
            "Kontodaten (E-Mail-Adresse, Passwort, Anmeldedaten) und Ihr Profil",
            "Geschichten, Kapitel und Stichwörter",
            "Hörbücher (Audiodateien) auf unserem Server",
            "Figuren",
            "Credits, Kaufnachweise und Guthabenbuchungen bei uns",
            "Inhaltsmeldungen und das Kosten- und Nutzungsprotokoll der KI",
            "Ihr Kundeneintrag bei unserem Abrechnungsdienstleister RevenueCat",
          ],
        },
        {
          heading: "Welche Daten nicht von uns gelöscht werden",
          list: [
            "Zustimmungen und Widerrufe beim Kauf: Ihre Zustimmung zum sofortigen Beginn der Leistung und erklärte Widerrufe bewahren wir als Nachweis auf, ohne Verbindung zu Ihrem gelöschten Konto. Sie werden drei Jahre nach Ende des Jahres, in dem sie erteilt bzw. erklärt wurden, automatisch gelöscht.",
            "Kaufbelege bei Google Play: Credits werden über Google Play verkauft und abgerechnet. Google bewahrt Ihre Bestellungen nach eigenen Bestimmungen und gesetzlichen Aufbewahrungspflichten auf; es gilt die Datenschutzerklärung von Google (policies.google.com/privacy).",
            "Sicherungskopien: Technische Sicherungskopien unseres Hosting-Anbieters werden höchstens 7 Tage aufbewahrt.",
          ],
          slot: "footer",
        },
      ],
      en: [
        {
          paragraphs: [
            "This page explains how to delete your account in the app Fabula by SimplyNext and all associated data. You can delete it directly in the app or here on this page.",
          ],
        },
        {
          heading: "Important Before Deleting",
          list: [
            "Credits are lost: Purchased credits you have not yet used are permanently lost together with the account. If you would like a refund for unused credits, please write to info@simplynext.de before deleting.",
            "No recovery: All stories, chapters, audiobooks and characters are deleted and cannot be recovered.",
          ],
        },
        {
          heading: "Option 1: Delete in the App",
          ordered: true,
          list: [
            "Open Fabula and sign in.",
            "Open the Settings and enter the parental PIN.",
            "In the “Account” section, tap “Delete Account”.",
            "Confirm the deletion.",
          ],
          afterList: [
            "The deletion takes effect immediately. This also removes the stories saved on the device and the parental PIN.",
          ],
        },
        {
          heading: "Option 2: Delete Here on This Page",
          paragraphs: [
            "Sign in with the e-mail address and password of your Fabula account. Your sign-in details are sent encrypted directly to our authentication service and are not stored on this website. The deletion takes effect immediately.",
          ],
          slot: "form",
        },
        {
          paragraphs: [
            "No longer have access to your account? Write from your registered e-mail address to info@simplynext.de (subject: “Konto löschen – Fabula”). We will delete your account within 30 days and confirm it to you by e-mail.",
          ],
          slot: "mail",
        },
        {
          heading: "Which Data Is Deleted",
          paragraphs: ["The following is deleted immediately and permanently:"],
          list: [
            "Account data (e-mail address, password, sign-in data) and your profile",
            "Stories, chapters and keywords",
            "Audiobooks (audio files) on our server",
            "Characters",
            "Credits, purchase records and credit bookings with us",
            "Content reports and the AI cost and usage log",
            "Your customer record at our billing service provider RevenueCat",
          ],
        },
        {
          heading: "Which Data We Do Not Delete",
          list: [
            "Consents and withdrawals for purchases: We keep your consent to the immediate start of the service and any withdrawals you declared as evidence, without any link to your deleted account. They are deleted automatically three years after the end of the year in which they were given or declared.",
            "Purchase receipts at Google Play: Credits are sold and billed via Google Play. Google retains your orders in accordance with its own terms and statutory retention obligations; Google’s privacy policy applies (policies.google.com/privacy).",
            "Backups: Technical backups of our hosting provider are kept for no more than 7 days.",
          ],
          slot: "footer",
        },
      ],
    },
  },
  furly: {
    supabaseUrl: "https://lblveytzwbggzprecjbi.supabase.co",
    anonKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxibHZleXR6d2JnZ3pwcmVjamJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2NDU3NjgsImV4cCI6MjA5OTIyMTc2OH0.DJj7QdOYPIgqcEJIC9WY1lTcd4IM1jEQsEwBzJEz_JE",
    mailSubject: "Konto löschen – Furly",
    // Quelle: furly/supabase/functions/delete-account (was gelöscht wird) und
    // Abschnitt 16 der Furly-Datenschutzerklärung. Anrede „Sie“ wie auf den
    // übrigen Konto-löschen-Seiten (das Formular siezt); die App duzt.
    confirm: {
      de: "Mir ist klar, dass alle Tierprofile, Einträge, Chats und Beiträge endgültig gelöscht werden.",
      en: "I understand that all pet profiles, entries, chats and posts will be permanently deleted.",
    },
    success: {
      de: "Alle Tierprofile, Chats, Beiträge und Kontodaten wurden entfernt. Daten, die nur auf Ihrem Gerät liegen (z. B. Gewicht, Fütterung, Tagesroutine), entfernen Sie, indem Sie die App deinstallieren oder ihre Daten löschen. Denken Sie daran, ein laufendes Furly-Pro-Abo bei Google Play zu kündigen.",
      en: "All pet profiles, chats, posts and account data have been removed. To remove data stored only on your device (e.g. weight, feeding, daily routine), uninstall the app or clear its data. Remember to cancel an active Furly Pro subscription in Google Play.",
    },
    sections: {
      de: [
        {
          paragraphs: [
            "Diese Seite erklärt, wie Sie Ihr Konto in der App Furly von SimplyNext und alle zugehörigen Daten löschen. Sie können die Löschung direkt in der App oder hier auf dieser Seite vornehmen.",
          ],
        },
        {
          heading: "Wichtig vor der Löschung",
          list: [
            "Keine Wiederherstellung: Alle Tierprofile, Krankenakte- und Impfeinträge, Erinnerungen, Chats, Trainingspläne und Beiträge werden gelöscht und lassen sich nicht wiederherstellen.",
            "Abo kündigen: Das Löschen des Kontos beendet kein laufendes Furly-Pro-Abo. Abos werden über Google Play abgerechnet und müssen dort gekündigt werden: Google Play Store öffnen → Profilbild → Zahlungen und Abos → Abos → Furly → Abo kündigen.",
          ],
          slot: "subscriptions",
        },
        {
          heading: "Möglichkeit 1: In der App löschen",
          ordered: true,
          list: [
            "Öffnen Sie Furly und melden Sie sich an.",
            "Öffnen Sie Ihr Profil und dort die Einstellungen.",
            "Tippen Sie im Bereich „Konto“ auf „Konto löschen“.",
            "Bestätigen Sie mit „Ja“.",
          ],
          afterList: ["Die Löschung erfolgt sofort. Die App entfernt dabei auch die nur auf Ihrem Gerät gespeicherten Daten."],
        },
        {
          heading: "Möglichkeit 2: Hier auf dieser Seite löschen",
          paragraphs: [
            "Melden Sie sich mit der E-Mail-Adresse und dem Passwort Ihres Furly-Kontos an. Ihre Anmeldedaten gehen verschlüsselt direkt an unseren Anmeldedienst und werden auf dieser Website nicht gespeichert. Die Löschung erfolgt sofort.",
          ],
          slot: "form",
        },
        {
          paragraphs: [
            "Kein Zugang mehr zu Ihrem Konto oder mit Google angemeldet und kein Passwort? Schreiben Sie von Ihrer registrierten E-Mail-Adresse an info@simplynext.de (Betreff: „Konto löschen – Furly“). Wir löschen Ihr Konto innerhalb von 30 Tagen und bestätigen es Ihnen per E-Mail.",
          ],
          slot: "mail",
        },
        {
          heading: "Welche Daten gelöscht werden",
          paragraphs: ["Sofort und endgültig gelöscht werden:"],
          list: [
            "Ihr Konto einschließlich Anmeldedaten, Ihr Profil und Profilbild",
            "alle Tierprofile, Krankenakte- und Impfeinträge sowie Erinnerungen",
            "Ihre Tierarztliste",
            "alle Chat-Verläufe mit Furly und Ihre Trainingspläne",
            "alle Community-Beiträge, Likes und Lost&Found-Meldungen",
            "alle von Ihnen hochgeladenen Fotos",
            "Ihre gespeicherte Standortangabe und Geräte-Push-Token",
            "Abo-Status und Zähler des Chat-Kontingents sowie Ihr Kundenkonto bei unserem Abo-Dienstleister RevenueCat",
          ],
        },
        {
          heading: "Welche Daten nicht von uns gelöscht werden",
          list: [
            "Daten auf Ihrem Gerät: Gewicht, Fütterung, Aktivität, Kalendernotizen, Tagesroutine und Merkliste speichert Furly nur lokal auf Ihrem Gerät. Bei der Löschung über diese Website erreichen wir sie nicht – entfernen Sie sie, indem Sie die App deinstallieren oder in den Android-Einstellungen ihre Daten löschen.",
            "Kaufbelege bei Google Play: Furly Pro wird über Google Play verkauft und abgerechnet. Google bewahrt Ihre Bestellungen nach eigenen Bestimmungen und gesetzlichen Aufbewahrungspflichten auf; es gilt die Datenschutzerklärung von Google (policies.google.com/privacy).",
            "Gesetzliche Aufbewahrungspflichten: Soweit bei uns abrechnungsrelevante Belege vorliegen, werden sie bis zum Ablauf der gesetzlichen Frist gesperrt statt gelöscht und nicht anderweitig verarbeitet.",
          ],
          slot: "footer",
        },
      ],
      en: [
        {
          paragraphs: [
            "This page explains how to delete your account in the app Furly by SimplyNext and all associated data. You can delete it directly in the app or here on this page.",
          ],
        },
        {
          heading: "Important Before Deleting",
          list: [
            "No recovery: All pet profiles, health record and vaccination entries, reminders, chats, training plans and posts are deleted and cannot be restored.",
            "Cancel your subscription: Deleting the account does not end an active Furly Pro subscription. Subscriptions are billed via Google Play and must be cancelled there: open the Google Play Store → profile picture → Payments & subscriptions → Subscriptions → Furly → Cancel subscription.",
          ],
          slot: "subscriptions",
        },
        {
          heading: "Option 1: Delete in the App",
          ordered: true,
          list: [
            "Open Furly and sign in.",
            "Open your profile and then the Settings.",
            "In the “Account” section, tap “Delete account”.",
            "Confirm with “Yes”.",
          ],
          afterList: ["The deletion takes effect immediately. The app also removes the data stored only on your device."],
        },
        {
          heading: "Option 2: Delete Here on This Page",
          paragraphs: [
            "Sign in with the e-mail address and password of your Furly account. Your sign-in details are sent encrypted directly to our authentication service and are not stored on this website. The deletion takes effect immediately.",
          ],
          slot: "form",
        },
        {
          paragraphs: [
            "No longer have access to your account, or signed in with Google and have no password? Write from your registered e-mail address to info@simplynext.de (subject: “Konto löschen – Furly”). We will delete your account within 30 days and confirm it to you by e-mail.",
          ],
          slot: "mail",
        },
        {
          heading: "Which Data Is Deleted",
          paragraphs: ["The following is deleted immediately and permanently:"],
          list: [
            "your account including sign-in data, your profile and profile picture",
            "all pet profiles, health record and vaccination entries as well as reminders",
            "your list of vets",
            "all chat histories with Furly and your training plans",
            "all community posts, likes and Lost & Found reports",
            "all photos you have uploaded",
            "your stored location and device push token",
            "subscription status and chat quota counters as well as your customer account at our subscription service provider RevenueCat",
          ],
        },
        {
          heading: "Which Data We Do Not Delete",
          list: [
            "Data on your device: Furly stores weight, feeding, activity, calendar notes, daily routine and saved articles only locally on your device. Deleting via this website cannot reach them – remove them by uninstalling the app or clearing its data in the Android settings.",
            "Purchase receipts at Google Play: Furly Pro is sold and billed via Google Play. Google retains your orders in accordance with its own terms and statutory retention obligations; Google’s privacy policy applies (policies.google.com/privacy).",
            "Statutory retention obligations: Where we hold records relevant for accounting, they are restricted rather than deleted until the statutory period expires and are not processed otherwise.",
          ],
          slot: "footer",
        },
      ],
    },
  },
};
