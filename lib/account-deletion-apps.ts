/**
 * Apps mit „Konto löschen“-Seite. Eigene Datei, damit Client-Komponenten (der
 * Link auf der App-Seite) die Liste nutzen können, ohne alle Seitentexte aus
 * lib/account-deletion.ts ins Browser-Bundle zu ziehen. Der Typ dort erzwingt,
 * dass jede App hier auch eine Konfiguration hat.
 */
export const ACCOUNT_DELETION_SLUGS = ["werkflow", "wefixit"] as const;

export type AccountDeletionSlug = (typeof ACCOUNT_DELETION_SLUGS)[number];

export function hasAccountDeletion(slug: string): slug is AccountDeletionSlug {
  return (ACCOUNT_DELETION_SLUGS as readonly string[]).includes(slug);
}
