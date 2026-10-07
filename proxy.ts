import { NextResponse, type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intl = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const response = intl(request);
  // Unpräfixierte Unterseiten (/apps/werkflow) leitet next-intl mit 307 auf
  // /de/... bzw. /en/... um. Ein 307 heißt für Google „Ausgangs-URL behalten“ –
  // Google hat deshalb /apps/werkflow statt /de/apps/werkflow als kanonisch
  // gewählt und die echte Seite als Duplikat verworfen. Für Unterseiten daher
  // dauerhaft (308). Die Startseite „/“ bleibt bei 307: Dort entscheidet die
  // Browsersprache, und ein dauerhafter Redirect würde im Browser hängen bleiben.
  if (response.status === 307 && request.nextUrl.pathname !== "/") {
    const location = response.headers.get("location");
    if (location) {
      const permanent = NextResponse.redirect(location, 308);
      response.headers.forEach((value, key) => {
        if (key !== "location") permanent.headers.set(key, value);
      });
      return permanent;
    }
  }
  return response;
}

export const config = {
  // Alles außer Next.js-internen Pfaden, API-Routen und Dateien mit Endung
  // (Assets in /public) durch die Locale-Middleware laufen lassen.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
