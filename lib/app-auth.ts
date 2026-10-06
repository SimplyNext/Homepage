import { accountDeletion } from "./account-deletion";

/**
 * Seiten für Links aus den Konto-Mails einer App: E-Mail bestätigen und
 * Passwort zurücksetzen (/apps/<slug>/bestaetigen, /apps/<slug>/passwort, auf
 * Englisch auch /confirm und /password).
 *
 * Die Supabase-Mailvorlagen verlinken mit ?token_hash=…&type=… hierher. Das
 * Einmal-Token wird erst auf Knopfdruck eingelöst, nie beim Laden: Mail-Scanner
 * (web.de, GMX, Outlook) rufen Links vorab auf und würden es sonst verbrauchen.
 * Nach dem Einlösen meldet die Seite sofort wieder ab – im Browser bleibt keine
 * Sitzung.
 */
export type AppAuthTexts = {
  confirm: {
    title: string;
    intro: string;
    button: string;
    working: string;
    successTitle: string;
    successText: string;
    pcHint: string;
    missing: string;
  };
  recovery: {
    title: string;
    intro: string;
    button: string;
    working: string;
    formIntro: string;
    password: string;
    repeat: string;
    save: string;
    saving: string;
    tooShort: string;
    mismatch: string;
    samePassword: string;
    weakPassword: string;
    sessionLost: string;
    successTitle: string;
    successText: string;
    missing: string;
  };
  openApp: string;
  expired: string;
  rateLimit: string;
  generic: string;
};

export type AppAuthConfig = {
  supabaseUrl: string;
  anonKey: string;
  /** Deep Link in die App (Anmeldebildschirm). */
  appLink: string;
  texts: Record<"de" | "en", AppAuthTexts>;
};

export const APP_AUTH_SLUGS = ["fabula"] as const;
export type AppAuthSlug = (typeof APP_AUTH_SLUGS)[number];

export function hasAppAuth(slug: string): slug is AppAuthSlug {
  return (APP_AUTH_SLUGS as readonly string[]).includes(slug);
}

export const appAuth: Record<AppAuthSlug, AppAuthConfig> = {
  fabula: {
    supabaseUrl: accountDeletion.fabula.supabaseUrl,
    anonKey: accountDeletion.fabula.anonKey,
    appLink: "de.simplynext.fabula://login-callback",
    // Anrede „du“ wie in der App.
    texts: {
      de: {
        confirm: {
          title: "E-Mail-Adresse bestätigen",
          intro: "Tippe auf den Knopf, um die E-Mail-Adresse für dein Fabula-Konto zu bestätigen.",
          button: "E-Mail-Adresse bestätigen",
          working: "Wird bestätigt …",
          successTitle: "Deine E-Mail-Adresse ist bestätigt.",
          successText: "Du kannst dich jetzt in Fabula anmelden.",
          pcHint: "Bist du am Computer? Dann öffne Fabula einfach auf deinem Handy und melde dich dort mit deiner E-Mail-Adresse und deinem Passwort an.",
          missing: "Dieser Link ist unvollständig. Öffne bitte den Link aus der E-Mail noch einmal vollständig oder melde dich in der App an.",
        },
        recovery: {
          title: "Neues Passwort festlegen",
          intro: "Tippe auf „Weiter“, um ein neues Passwort für dein Fabula-Konto festzulegen.",
          button: "Weiter",
          working: "Einen Moment …",
          formIntro: "Gib dein neues Passwort zweimal ein. Es muss mindestens 8 Zeichen lang sein.",
          password: "Neues Passwort",
          repeat: "Neues Passwort wiederholen",
          save: "Passwort speichern",
          saving: "Wird gespeichert …",
          tooShort: "Das Passwort muss mindestens 8 Zeichen lang sein.",
          mismatch: "Die beiden Passwörter stimmen nicht überein.",
          samePassword: "Das neue Passwort muss sich von deinem bisherigen unterscheiden.",
          weakPassword: "Dieses Passwort ist zu unsicher, zum Beispiel weil es schon in Datenlecks aufgetaucht ist. Bitte wähle ein anderes.",
          sessionLost: "Die Sitzung ist abgelaufen. Fordere in der App bitte einen neuen Link zum Zurücksetzen an.",
          successTitle: "Dein Passwort ist geändert.",
          successText: "Melde dich in der App mit dem neuen Passwort an.",
          missing: "Dieser Link ist unvollständig. Öffne bitte den Link aus der E-Mail noch einmal vollständig oder fordere in der App einen neuen an.",
        },
        openApp: "Fabula öffnen",
        expired:
          "Der Link ist abgelaufen oder wurde schon benutzt. Versuche zuerst, dich in der App anzumelden – oft ist alles schon erledigt. Klappt das nicht, fordere in der App einen neuen Link an, registriere dich erneut oder schreib an info@simplynext.de.",
        rateLimit: "Zu viele Versuche. Bitte warte einige Minuten und versuche es dann erneut.",
        generic: "Das hat leider nicht geklappt. Bitte versuche es später noch einmal oder schreib an info@simplynext.de.",
      },
      en: {
        confirm: {
          title: "Confirm your e-mail address",
          intro: "Tap the button to confirm the e-mail address for your Fabula account.",
          button: "Confirm e-mail address",
          working: "Confirming …",
          successTitle: "Your e-mail address is confirmed.",
          successText: "You can now sign in to Fabula.",
          pcHint: "On a computer? Just open Fabula on your phone and sign in there with your e-mail address and password.",
          missing: "This link is incomplete. Please open the full link from the e-mail again or sign in in the app.",
        },
        recovery: {
          title: "Set a new password",
          intro: "Tap “Continue” to set a new password for your Fabula account.",
          button: "Continue",
          working: "One moment …",
          formIntro: "Enter your new password twice. It must be at least 8 characters long.",
          password: "New password",
          repeat: "Repeat new password",
          save: "Save password",
          saving: "Saving …",
          tooShort: "The password must be at least 8 characters long.",
          mismatch: "The two passwords do not match.",
          samePassword: "Your new password must be different from your current one.",
          weakPassword: "This password is too weak, for example because it has appeared in data leaks. Please choose another one.",
          sessionLost: "The session has expired. Please request a new reset link in the app.",
          successTitle: "Your password has been changed.",
          successText: "Sign in to the app with your new password.",
          missing: "This link is incomplete. Please open the full link from the e-mail again or request a new one in the app.",
        },
        openApp: "Open Fabula",
        expired:
          "The link has expired or has already been used. First try signing in to the app – often everything is already done. If that does not work, request a new link in the app, register again or write to info@simplynext.de.",
        rateLimit: "Too many attempts. Please wait a few minutes and try again.",
        generic: "Sorry, that did not work. Please try again later or write to info@simplynext.de.",
      },
    },
  },
};
