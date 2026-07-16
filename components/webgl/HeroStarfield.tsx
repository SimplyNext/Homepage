"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Sternenhimmel NUR für den Hero: ein eigenständiger, OPAKER Canvas, der den
 * Hero füllt und die dahinterliegende fixe Aurora genau in diesem Bereich
 * abdeckt (der Rest der Seite behält die Aurora).
 *
 * – Dichtes Sternenfeld (THREE.Points) mit eigenem ShaderMaterial:
 *   scharfe, runde Punkte in UNTERSCHIEDLICHEN Größen und Helligkeiten.
 * – Kein Tiefen-Fog (der erzeugte konzentrische Helligkeitsringe = „Sonnensystem"),
 *   stattdessen zufällige Helligkeit pro Stern.
 * – Kamera folgt der Maus (dezente Parallaxe), lookAt(0,0,0). Die Parallaxe ist
 *   bewusst klein gehalten und das Feld breit gestreut, damit die Kamera nie
 *   über den bevölkerten Bereich hinausschaut (keine schwarzen Ränder).
 * – Theme-abhängig: dunkler Grund + cremefarbene Sterne (Dark), heller Grund +
 *   anthrazitfarbene Sterne (Light). Grund via gl.clearColor (alpha:false) → opak.
 * – prefers-reduced-motion: Kamera fix (Standbild).
 */

type Theme = "light" | "dark";

const PALETTE: Record<Theme, { bg: string; star: string; size: number }> = {
  // size = Basis-Punktgröße in Gerätepixeln (wird pro Stern zufällig skaliert).
  // star bewusst neutral-kühl (nicht cremig) → Cluster wirken nicht bräunlich.
  dark: { bg: "#0b0b0c", star: "#eaecf0", size: 2.4 },
  light: { bg: "#f6f4ef", star: "#20202a", size: 2.2 },
};

// Flaches Feld verteilt die Punkte gleichmäßig über die Fläche (statt sie per
// Tiefe zur Mitte zu häufen) → für dieselbe sichtbare Dichte braucht es mehr.
const COUNT = 16000;
// Streuung deutlich breiter als der sichtbare Frustum, damit auch bei kräftiger
// Parallaxe rundum Sterne stehen (keine leeren schwarzen Ränder).
const SPREAD_XY = 4200; // Gesamtbreite/-höhe der Punktwolke (±2100)
// FLACHES Feld: kaum Tiefe. Ein tiefer 3D-Würfel führt in der Perspektive dazu,
// dass sich entfernte Punkte zur Bildmitte häufen → zentraler Helligkeits-/
// Dichteverlauf, der als konzentrische „Sonnensystem"-Kreise wahrnehmbar ist.
// Nahezu flach = gleichmäßige Dichte über den ganzen Bildschirm, keine Ringe.
const SPREAD_Z = 120; // Tiefe (±60) – nur minimale Staffelung, kein Dichte-Gradient
const PARALLAX = 0.32; // Bruchteil des Maus-Offsets → deutlich spürbare, randsichere Parallaxe

const VERT = /* glsl */ `
  attribute float aSize;
  attribute float aBright;
  uniform float uPixelRatio;
  varying float vBright;
  void main() {
    vBright = aBright;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    // Bildschirm-konstante Größe (keine Distanz-Skalierung → keine Riesen-Kreise,
    // keine distanzabhängigen Ringe). Größe variiert nur über aSize pro Stern.
    gl_PointSize = aSize * uPixelRatio;
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uColor;
  varying float vBright;
  void main() {
    // Runder Stern: definierter Kern + weicher Rand (nicht rasiermesserscharf,
    // aber auch kein verwaschener Blob). → sieht nach Stern aus, nicht nach Punkt.
    float d = length(gl_PointCoord - vec2(0.5));
    float alpha = smoothstep(0.5, 0.28, d);
    if (alpha <= 0.01) discard;
    gl_FragColor = vec4(uColor, alpha * vBright);
  }
`;

function Stars({ theme, reduced }: { theme: Theme; reduced: boolean }) {
  const { camera, scene, gl } = useThree();
  const mat = useRef<THREE.ShaderMaterial>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const target = useRef(new THREE.Vector2(0, 0));

  const geometry = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);
    const bright = new Float32Array(COUNT);
    const base = PALETTE[theme].size;
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * SPREAD_XY;
      positions[i * 3 + 1] = (Math.random() - 0.5) * SPREAD_XY;
      positions[i * 3 + 2] = (Math.random() - 0.5) * SPREAD_Z;
      // Größe stark klein-lastig: pow⁴ macht große Sterne SELTEN → viele feine
      // Punkte, nur vereinzelt größere (nicht so viele große wie zuvor).
      const r = Math.random();
      sizes[i] = base * (0.45 + Math.pow(r, 4) * 2.2);
      // Helligkeit variiert pro Stern (ersetzt die Fog-Tiefenoptik ohne Ringe).
      // Untergrenze bewusst hoch → knackige Sterne statt ausgeblichener Punkte.
      bright[i] = 0.6 + Math.random() * 0.4;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    g.setAttribute("aBright", new THREE.BufferAttribute(bright, 1));
    return g;
    // theme steckt nur in der Basisgröße; Neuaufbau bei Theme-Wechsel ist ok.
  }, [theme]);

  const uniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color(PALETTE[theme].star) },
      uPixelRatio: { value: 1 },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // Opaker Grund + Sternfarbe theme-abhängig setzen/aktualisieren. KEIN Fog.
  // scene.background erzwingt einen OPAKEN Hintergrund direkt im Canvas –
  // unabhängig davon, ob der WebGL-Context alpha:false respektiert. Damit kann
  // die dahinterliegende Aurora unter keinen Umständen durchscheinen.
  useEffect(() => {
    const pal = PALETTE[theme];
    const bg = new THREE.Color(pal.bg);
    gl.setClearColor(bg, 1);
    scene.background = bg;
    scene.fog = null;
    uniforms.uColor.value.set(pal.star);
    uniforms.uPixelRatio.value = Math.min(gl.getPixelRatio(), 2);
  }, [theme, gl, scene, uniforms]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      // Spürbare Parallaxe (PARALLAX), aber das Feld (±2100) ist breit genug,
      // dass die Kamera nie über den bevölkerten Bereich hinausschaut.
      target.current.set(
        (e.clientX - window.innerWidth / 2) * PARALLAX,
        (e.clientY - window.innerHeight / 2) * PARALLAX
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
    mouse.current.lerp(target.current, 0.08);
    camera.position.x += (mouse.current.x - camera.position.x) * 0.05;
    camera.position.y += (-mouse.current.y - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
  });

  return (
    <points geometry={geometry}>
      <shaderMaterial
        ref={mat}
        vertexShader={VERT}
        fragmentShader={FRAG}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        depthTest={false}
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
