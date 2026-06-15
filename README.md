# SimplyNext — Premium App-Studio Website

Cinematic, developer-centric Portfolio-Website. **Next.js (App Router) · TypeScript ·
Tailwind · GSAP (ScrollTrigger + Flip) · Lenis**. Custom magnetic cursor, scroll-driven
Animationen, kinetische Typografie und nahtlose Page-Transitions.

> **Status: Schritt 1 — Foundation & Core-Layout.** Die Engine läuft (Lenis + GSAP,
> Cursor, Transitions, kinetischer Hero, eine gepinnte Scrollytelling-Sektion,
> Apps-Teaser, alle App- und Rechtsseiten). Die weiteren Homepage-Sektionen bauen
> wir Schritt für Schritt darauf auf.

## Schnellstart

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build (verifiziert)
```

## Deploy (Vercel)

Repo zu GitHub pushen → auf vercel.com importieren → Deploy. Next.js wird automatisch
erkannt. Danach Domain in `lib/site.ts` (`url`) eintragen.

---

## Architektur

```
app/
  layout.tsx            Provider-Kette: SmoothScroll → Transition → Cursor + Header/Footer
  template.tsx          ENTER-Animation bei jeder Navigation (Overlay-Reveal)
  page.tsx              Homepage (Hero · PinnedStatement · AppsTeaser · Contact)
  globals.css           Tokens, Lenis-Styles, Cursor-Hide, reduced-motion
  apps/[slug]/          App-Landingpage + /datenschutz /agb /impressum (datengetrieben)
  (legal)/              Firmenweite Rechtsseiten (Route-Group, keine URL-Ebene)
components/
  providers/  SmoothScrollProvider (Lenis↔GSAP)  ·  TransitionProvider (Cover/Reveal)
  cursor/     CustomCursor (magnetisch, nur Desktop)
  ui/         TransitionLink · Magnetic · SplitText · Reveal
  layout/     Header · Footer · LegalDoc
  sections/   Hero · PinnedStatement · AppsTeaser · Contact · AppShowcase
lib/
  gsap.ts         zentrale Plugin-Registrierung + Defaults
  apps.ts         App-Verzeichnis (eine Quelle für alle App- & Rechtsseiten)
  site.ts         Firmen-/Rechtsdaten
  legal.ts        Vorlagen für Impressum/Datenschutz/AGB
  pollinations.ts Platzhalter-Bild-URLs
hooks/  useIsomorphicLayoutEffect
```

### Wie die Animation-Engine zusammenspielt

- **`lib/gsap.ts`** registriert ScrollTrigger + Flip genau einmal und setzt globale
  Defaults. Alle Komponenten importieren `gsap` nur von hier.
- **`SmoothScrollProvider`** startet Lenis, treibt es über den **GSAP-Ticker** an
  (eine einzige RAF-Schleife → kein Scroll-Lag) und synchronisiert
  `lenis.on('scroll', ScrollTrigger.update)`.
- **`useGSAP()`** (von `@gsap/react`) kapselt jede Animation in einen Context und
  räumt sie bei Unmount automatisch auf — keine Memory-Leaks beim Routenwechsel.
- **Page-Transitions:** `TransitionLink` spielt die Cover-Animation, navigiert,
  danach übernimmt `template.tsx` das Reveal. Kein harter Schnitt.
- **Performance/Mobile:** Komplexe Pins laufen über `gsap.matchMedia()` nur ab
  768px; mobil gibt es leichtere Varianten. Alles respektiert
  `prefers-reduced-motion`.

---

## Inhalte pflegen

| Was | Datei |
| --- | --- |
| Apps (Landingpages + Rechtsseiten) | `lib/apps.ts` |
| Firmenname, Kontakt, Domain | `lib/site.ts` |
| Rechtstext-Vorlagen | `lib/legal.ts` |
| Farben / Typo / Spacing | `tailwind.config.ts`, `app/globals.css` |
| Logo | `public/logo.png` |

**Echte Bilder:** Standardmäßig kommen Platzhalter von `image.pollinations.ai`
(Domain ist in `next.config.ts` für `next/image` freigegeben). Für echte Screenshots
die `hero`/`shots`-URLs in `lib/apps.ts` auf eigene Dateien unter `/public` umstellen.

**Rechtstexte (WICHTIG):** Vorlagen, keine Rechtsberatung. Platzhalter in `site.ts`
und `legal.ts` ausfüllen, genutzte Dienste ergänzen, vor Livegang fachkundig prüfen.

---

## Nächste Schritte (Vorschlag)

1. Homepage erweitern: „Studio/Approach"-Sektion, Leistungen, ein **horizontaler
   Flip-/Scrub-Showcase** der App-Mockups, Footer-Reveal.
2. App-Landingpage: Screenshot-Galerie mit Scrub-Parallax, Feature-Pinning.
3. Feinschliff Transitions (Slug-spezifische Farbe im Overlay), Preloader.
4. Echte Inhalte & Bilder einsetzen, Lighthouse/Performance-Pass.
```
