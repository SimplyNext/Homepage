"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Sternenhimmel NUR für den Hero: ein eigenständiger, OPAKER Canvas, der den
 * Hero füllt und die dahinterliegende fixe Aurora genau in diesem Bereich
 * abdeckt (der Rest der Seite behält die Aurora).
 *
 * – Dichtes Sternenfeld (THREE.Points) mit weichen runden Punkten.
 * – Kamera folgt der Maus (Parallaxe): exakt wie die 21st.dev-Vorlage,
 *   camera.position lerpt Richtung Pointer, lookAt(0,0,0).
 * – Theme-abhängig: dunkler Grund + weiße Sterne (Dark), heller Grund +
 *   dunkle Sterne (Light). Grund via gl.clearColor (alpha:false) → opak.
 * – prefers-reduced-motion: Kamera fix (Standbild).
 */

type Theme = "light" | "dark";

const PALETTE: Record<Theme, { bg: string; star: string; size: number }> = {
  dark: { bg: "#0b0b0c", star: "#edeae3", size: 6 },
  light: { bg: "#f6f4ef", star: "#20202a", size: 5 },
};

const COUNT = 6000;

// Weiche, runde Punkt-Textur (Radial-Gradient) einmalig im Code erzeugen –
// kein externes Asset nötig.
function makeSprite(): THREE.Texture {
  const s = 64;
  const c = document.createElement("canvas");
  c.width = c.height = s;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.35, "rgba(255,255,255,0.85)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function Stars({ theme, reduced }: { theme: Theme; reduced: boolean }) {
  const pts = useRef<THREE.Points>(null);
  const mat = useRef<THREE.PointsMaterial>(null);
  const { camera, scene, gl } = useThree();
  const mouse = useRef(new THREE.Vector2(0, 0));
  const target = useRef(new THREE.Vector2(0, 0));

  const sprite = useMemo(() => makeSprite(), []);

  const geometry = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3 + 0] = 2000 * Math.random() - 1000;
      positions[i * 3 + 1] = 2000 * Math.random() - 1000;
      positions[i * 3 + 2] = 2000 * Math.random() - 1000;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);

  // Grund (opak) + Fog + Sternfarbe theme-abhängig setzen/aktualisieren
  useEffect(() => {
    const pal = PALETTE[theme];
    const bg = new THREE.Color(pal.bg);
    gl.setClearColor(bg, 1);
    scene.fog = new THREE.FogExp2(bg.getHex(), 0.0009);
    if (mat.current) {
      mat.current.color.set(pal.star);
      mat.current.size = pal.size;
      mat.current.needsUpdate = true;
    }
  }, [theme, gl, scene]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.set(
        e.clientX - window.innerWidth / 2,
        e.clientY - window.innerHeight / 2
      );
    };
    if (!reduced) window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  useFrame(() => {
    if (reduced) {
      camera.lookAt(scene.position);
      return;
    }
    // Sanftes Nachziehen der Maus, dann Kamera folgt (Parallaxe wie Vorlage)
    mouse.current.lerp(target.current, 0.08);
    camera.position.x += (mouse.current.x - camera.position.x) * 0.05;
    camera.position.y += (-mouse.current.y - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
  });

  return (
    <points ref={pts} geometry={geometry}>
      <pointsMaterial
        ref={mat}
        color={PALETTE[theme].star}
        size={PALETTE[theme].size}
        map={sprite}
        sizeAttenuation={false}
        transparent
        alphaTest={0.02}
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroStarfield({
  theme,
  reduced,
  frameloop,
  onContextLost,
}: {
  theme: Theme;
  reduced: boolean;
  frameloop: "always" | "never" | "demand";
  onContextLost?: () => void;
}) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      frameloop={reduced ? "demand" : frameloop}
      camera={{ fov: 55, near: 2, far: 2000, position: [0, 0, 1000] }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          onContextLost?.();
        });
      }}
      className="!absolute !inset-0"
    >
      <Stars theme={theme} reduced={reduced} />
    </Canvas>
  );
}
