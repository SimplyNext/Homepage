import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Alles außer Next.js-internen Pfaden, API-Routen und Dateien mit Endung
  // (Assets in /public) durch die Locale-Middleware laufen lassen.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
