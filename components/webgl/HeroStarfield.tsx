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
  // size = Basis-Punktgröße in Gerätepixeln (wird pro Stern zufällig skaliert)
  dark: { bg: "#0b0b0c", star: "#edeae3", size: 2.6 },
  light: { bg: "#f6f4ef", star: "#20202a", size: 2.4 },
};

const COUNT = 6500;
// Streuung deutlich breiter als der sichtbare Frustum, damit auch bei voller
// Parallaxe rundum Sterne stehen (keine leeren schwarzen Ränder).
const SPREAD_XY = 3200; // Gesamtbreite/-höhe der Punktwolke (±1600)
const SPREAD_Z = 1400; // Tiefe (±700) – nur für dezente Parallaxe-Staffelung

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
  precision mediump float;
  uniform vec3 uColor;
  varying float vBright;
  void main() {
    // Scharfer runder Punkt: harte Kante mit minimalem Soft-Edge (Antialiasing).
    float d = length(gl_PointCoord - vec2(0.5));
    float alpha = smoothstep(0.5, 0.46, d);
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
      // Größe klein-lastig mit einzelnen deutlich größeren Sternen (pow² skewt
      // Richtung klein). → natürliche, unterschiedliche Sterngrößen.
      const r = Math.random();
      sizes[i] = base * (0.5 + Math.pow(r, 2) * 3.4);
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
  useEffect(() => {
    const pal = PALETTE[theme];
    gl.setClearColor(new THREE.Color(pal.bg), 1);
    scene.fog = null;
    uniforms.uColor.value.set(pal.star);
    uniforms.uPixelRatio.value = Math.min(gl.getPixelRatio(), 2);
  }, [theme, gl, scene, uniforms]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      // Nur ein kleiner Bruchteil des Maus-Offsets → dezente Parallaxe; die
      // Kamera bleibt weit innerhalb der breiten Punktwolke (keine schwarzen Ränder).
      target.current.set(
        (e.clientX - window.innerWidth / 2) * 0.06,
        (e.clientY - window.innerHeight / 2) * 0.06
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
