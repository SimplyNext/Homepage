import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    // Bewusst zurückhaltende, „cinematische" Palette – kein SaaS-Buntspektrum.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      // Grundwerte: tiefes Off-Black bis warmes Off-White
      base: {
        DEFAULT: "#0B0B0C", // Hintergrund
        900: "#0B0B0C",
        800: "#111113",
        700: "#17171A",
        600: "#1F1F23",
      },
      paper: "#EDEAE3", // warmes Off-White für Text/Invertierungen
      ink: {
        DEFAULT: "#EDEAE3",
        muted: "#8C8A85",
        faint: "#5A5955",
      },
      line: "rgba(237,234,227,0.10)",
      // EINE zurückhaltende Akzentfamilie, aus dem Logo abgeleitet
      accent: {
        DEFAULT: "#3B5BFF", // Blau (sparsam einsetzen)
        soft: "#6F86FF",
        alt: "#22A463", // Grün als Sekundärsignal
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
