"use client";

import { useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import AuroraPlane, { AURORA_DARK, AURORA_LIGHT } from "./AuroraPlane";
import ParticleField from "./ParticleField";
import { sceneState } from "@/lib/homeScene";
import { useMountedTheme } from "@/hooks/useMountedTheme";

/**
 * Die eine WebGL-Ebene der Homepage: ein fixer Canvas hinter allen
 * DOM-Sektionen (z-0, pointer-events-none, aria-hidden im Mount-Wrapper).
 * Trägt ausschließlich den Aurora-Hintergrund (unbeleuchteter Vollbild-
 * Shader). Das frühere 3D-Phone ist ein premium CSS-3D-Element (JourneyPhone)
 * im DOM – kein WebGL-Modell mehr.
 *
 * Pointer: ein einziger fensterweiter Listener schreibt nach sceneState (für
 * die Aurora-Drift); der Canvas selbst bekommt nie Events (pointer-events-none).
 */
export default function HomeScene({
  onContextLost,
}: {
  onContextLost?: () => void;
}) {
  const { resolvedTheme } = useMountedTheme();
  const palette = resolvedTheme === "light" ? AURORA_LIGHT : AURORA_DARK;

  const reduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    sceneState.reduced = reduced;
    if (reduced) return;

    const onMove = (e: PointerEvent) => {
      sceneState.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      sceneState.pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      // Reduzierte Bewegung: nur bei Invalidierung rendern (Standbild)
      frameloop={reduced ? "demand" : "always"}
      camera={{ fov: 35, position: [0, 0, 6], near: 0.1, far: 30 }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          onContextLost?.();
        });
      }}
      className="!absolute !inset-0"
    >
      <AuroraPlane palette={palette} reduced={reduced} />
      <ParticleField
        theme={resolvedTheme === "light" ? "light" : "dark"}
        reduced={reduced}
      />
    </Canvas>
  );
}
