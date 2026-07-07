/**
 * Geteilter, mutabler Zustand zwischen den DOM-Sektionen der Homepage
 * (GSAP/ScrollTrigger schreibt) und der WebGL-Aurora (R3F liest in useFrame).
 *
 * Bewusst KEIN React-State und keine Store-Bibliothek: Werte ändern sich
 * pro Scroll-/Pointer-Event; ein Re-Render pro Frame wäre Gift für die
 * Performance. Die Szene glättet die Rohwerte selbst (Lerp), dadurch bleibt
 * die Bewegung auch gegen Lenis-Scrub ruckelfrei.
 *
 * (Das frühere WebGL-Phone las hier phoneSlot/slotToWorld; es ist durch das
 * DOM-basierte JourneyPhone ersetzt, daher nur noch Aurora-Dramaturgie.)
 */
export const sceneState = {
  /** 0..1 – Hero scrollt aus dem Bild */
  heroProgress: 0,
  /** 0..1 – Kontakt-Sektion im Bild: Shader beruhigt sich */
  contactProgress: 0,
  /** -1..1, fensterweiter Pointer (Canvas ist pointer-events-none) */
  pointer: { x: 0, y: 0 },
  reduced: false,
};
