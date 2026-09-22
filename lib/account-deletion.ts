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
};

export const accountDeletion: Record<AccountDeletionSlug, AccountDeletionConfig> = {
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
};
