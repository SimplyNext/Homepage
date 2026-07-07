import type { Config } from "tailwindcss";

/**
 * Liest eine "R G B"-CSS-Variable (siehe globals.css) und erlaubt dabei
 * Tailwinds Opacity-Modifier (z. B. bg-base-900/60) über <alpha-value>.
 * Rückgabetyp `any`, weil Tailwinds eigene Config-Typen dieses (offiziell
 * unterstützte) Function-Value-Pattern für Farben nicht abbilden.
 */
function rgbVar(variable: string): any {
  return ({ opacityValue }: { opacityValue?: string }) =>
    opacityValue !== undefined
      ? `rgb(var(${variable}) / ${opacityValue})`
      : `rgb(var(${variable}))`;
}

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    // Bewusst zurückhaltende, „cinematische" Palette – kein SaaS-Buntspektrum.
    // base/paper/ink/line/accent sind über CSS-Variablen theme-reaktiv
    // (siehe globals.css :root / html.light) – Dark/Light schaltet allein
    // über die CSS-Klasse am <html>-Element, ohne dass Komponenten-Code
    // Tailwinds dark:-Variante nutzen muss.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      base: {
        DEFAULT: rgbVar("--color-base-900"), // Seiten-Hintergrund (reaktiv)
        900: rgbVar("--color-base-900"),
        800: rgbVar("--color-base-800"), // Card-/Panel-Hintergrund (reaktiv)
        // 700/600: feste, dunkle Neutraltöne für Deko-Chrome (z. B. Phone-Bezel) –
        // bewusst NICHT reaktiv, da ein "Gerät"-Mockup unabhängig vom Seiten-
        // Theme dunkel bleiben soll.
        700: "#17171A",
        600: "#1F1F23",
      },
      // Statisch heller Farbfleck (Invertierte Pill-Buttons, Custom-Cursor via
      // mix-blend-difference) – bewusst NICHT theme-reaktiv.
      paper: rgbVar("--color-paper"),
      // Passendes statisches Dunkel für Text auf `paper`-Flächen.
      paperInk: rgbVar("--color-paper-ink"),
      // Primärer, reaktiver Textfarb-Stack.
      ink: {
        DEFAULT: rgbVar("--color-ink"),
        muted: rgbVar("--color-ink-muted"),
        faint: rgbVar("--color-ink-faint"),
      },
      line: "var(--color-line)",
      // EINE zurückhaltende Akzentfamilie, aus dem Logo abgeleitet – reaktiv,
      // pro Theme auf AA-Textkontrast (≥4.5:1) gegen base-900 abgestimmt.
      accent: {
        DEFAULT: rgbVar("--color-accent"),
        soft: rgbVar("--color-accent-soft"),
        alt: rgbVar("--color-accent-alt"),
      },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Editorial-Skala mit engem Tracking für große Headlines
        "display-xl": ["clamp(3.5rem, 11vw, 11rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.75rem, 7vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 4.5vw, 3.75rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        label: "0.22em",
      },
      maxWidth: {
        shell: "1440px",
        prose: "68ch",
      },
      spacing: {
        gutter: "clamp(1.25rem, 4vw, 4rem)",
        section: "clamp(6rem, 14vw, 12rem)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
        expo: "cubic-bezier(0.7, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
