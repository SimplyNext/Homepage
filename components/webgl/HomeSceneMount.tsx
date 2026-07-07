"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/**
 * Client-Einstiegspunkt für die Homepage-WebGL-Ebene.
 * – lädt HomeScene nur im Browser (ssr:false ist nur in Client-Komponenten
 *   erlaubt, daher dieser Wrapper statt direkt in page.tsx)
 * – prüft vorab, ob WebGL überhaupt verfügbar ist; sonst (und während des
 *   Ladens) liegt der statische .aurora-fallback-Gradient darunter → kein
 *   schwarzer/weißer Blitz, Seite funktioniert komplett ohne GPU
 * – webglcontextlost → dauerhaft zurück zum CSS-Fallback
 *
 * WICHTIG: Dieser Wrapper ist position:fixed. template.tsx animiert die
 * Seite bewusst NUR mit Opacity (+ clearProps) – niemals Transforms dort
 * ergänzen, sonst bricht der Containing-Block das fixed-Verhalten.
 */
const HomeScene = dynamic(() => import("./HomeScene"), { ssr: false });

function webglAvailable(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") ?? c.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function HomeSceneMount() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(webglAvailable());
  }, []);

  return (
    <div
      data-home-scene
      aria-hidden
      role="presentation"
      className="pointer-events-none fixed inset-0 z-0"
    >
      <div className="aurora-fallback absolute inset-0" />
      {enabled && <HomeScene onContextLost={() => setEnabled(false)} />}
    </div>
  );
}
