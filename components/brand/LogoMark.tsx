/**
 * Das SimplyNext-Zeichen „App-Raster“: vier App-Kacheln in den Farben der
 * Homepage – Fabula oben links, WeFixIt oben rechts (fertig, nach oben rechts
 * ausgerückt), WerkFlow unten links, EatSafety unten rechts.
 * Quelle: „SimplyNext Logo/svg/zeichen.svg“ auf dem Desktop.
 *
 * `animated`: läuft einmal beim Laden (CSS in globals.css, .logo-anim) –
 * WerkFlow fliegt von unten ein, die Kacheln ploppen nacheinander kurz auf,
 * WeFixIt rückt nach oben rechts aus. Bei „Bewegung reduzieren“ steht es still.
 */
const R = 9.12; // 24 % der Kachelbreite 38

export default function LogoMark({ className, animated = false }: { className?: string; animated?: boolean }) {
  return (
    <svg
      viewBox="10 2 88 88"
      className={`${animated ? "logo-anim " : ""}${className ?? ""}`}
      aria-hidden="true"
      focusable="false"
      style={{ overflow: "hidden" }}
    >
      <g className="logo-pop" style={{ animationDelay: "0.85s" }}>
        <rect x="10" y="10" width="38" height="38" rx={R} fill="#F2C25A" />
      </g>
      <g className="logo-pop" style={{ animationDelay: "0.95s" }}>
        <g className="logo-out">
          <rect x="60" y="2" width="38" height="38" rx={R} fill="#F4846A" />
        </g>
      </g>
      <g className="logo-in">
        <g className="logo-pop" style={{ animationDelay: "1.05s" }}>
          <rect x="10" y="52" width="38" height="38" rx={R} fill="#A9B8FF" />
        </g>
      </g>
      <g className="logo-pop" style={{ animationDelay: "1.15s" }}>
        <rect x="52" y="52" width="38" height="38" rx={R} fill="#9DBFA4" />
      </g>
    </svg>
  );
}
