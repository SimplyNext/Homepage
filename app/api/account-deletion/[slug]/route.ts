import { accountDeletion } from "@/lib/account-deletion";
import { hasAccountDeletion } from "@/lib/account-deletion-apps";

/**
 * Leitet die Kontolöschung an die Edge-Function `delete-account` der App
 * weiter.
 *
 * Warum nicht direkt aus dem Browser: Die Edge-Function sendet keine
 * CORS-Header, der Browser würde den Aufruf von simplynext.de blockieren.
 * Server-zu-Server gibt es kein CORS – so bleibt die Funktion unverändert.
 *
 * Die Route hält keine Geheimnisse und prüft nichts selbst: Sie reicht nur das
 * Zugriffstoken des angemeldeten Nutzers durch. Ohne gültiges Token lehnt die
 * Edge-Function ab. Das Passwort erreicht diese Route nie – die Anmeldung
 * läuft im Browser direkt gegen Supabase.
 */
export async function POST(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!hasAccountDeletion(slug)) return Response.json({ ok: false }, { status: 404 });
  const config = accountDeletion[slug];

  const auth = req.headers.get("authorization") ?? "";
  if (!/^Bearer\s+\S+$/.test(auth)) return Response.json({ ok: false }, { status: 401 });

  try {
    const res = await fetch(`${config.supabaseUrl}/functions/v1/delete-account`, {
      method: "POST",
      headers: { Authorization: auth, apikey: config.anonKey, "Content-Type": "application/json" },
      body: "{}",
      cache: "no-store",
    });
    // Details der Funktion bewusst nicht durchreichen – der Browser braucht
    // nur „geklappt“, „nicht angemeldet“ oder „fehlgeschlagen“.
    if (res.ok) return Response.json({ ok: true });
    return Response.json({ ok: false }, { status: res.status === 401 ? 401 : 502 });
  } catch {
    return Response.json({ ok: false }, { status: 502 });
  }
}
