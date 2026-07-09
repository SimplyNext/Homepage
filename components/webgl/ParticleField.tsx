"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sceneState } from "@/lib/homeScene";

/**
 * Feiner Partikel-Nebel ("kosmischer Staub") als zweite Ebene ÜBER der Aurora.
 * Liegt im selben Canvas wie AuroraPlane (kein zweiter WebGL-Context).
 * – Theme-fähig: helle Punkte auf Dunkel, dunkle Punkte auf Hell (Farben pro
 *   Theme neu gebaut). Ein paar Partikel tragen Blau/Grün-Akzent.
 * – Parallaxe: die ganze Punktwolke neigt sich sanft zum Pointer (aus
 *   sceneState, fensterweiter Listener – wie die Aurora).
 * – Scroll-Dramaturgie: uOpacity nimmt mit heroProgress/contactProgress ab,
 *   damit der Staub beim Verlassen des Heros "ausatmet".
 * – prefers-reduced-motion: keine Bewegung (statisches Standbild).
 */

const VERT = /* glsl */ `
  attribute vec3 aColor;
  attribute float aScale;
  varying vec3 vColor;
  uniform float uSize;
  void main() {
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = uSize * aScale * (300.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */ `
  precision mediump float;
  varying vec3 vColor;
  uniform float uOpacity;
  void main() {
    // weiche runde Punkte ohne Textur
    float d = distance(gl_PointCoord, vec2(0.5));
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.12, d);
    gl_FragColor = vec4(vColor, a * uOpacity);
  }
`;

const COUNT = 620;

type Theme = "light" | "dark";

// [ink, akzent-blau, akzent-grün] pro Theme (linear-RGB 0..1, wie THREE.Color)
const PALETTE: Record<Theme, [number, number, number][]> = {
  dark: [
    [0.93, 0.918, 0.89], // ink hell
    [0.435, 0.525, 1.0], // accent-soft (blau)
    [0.133, 0.643, 0.388], // accent-alt (grün)
  ],
  light: [
    [0.12, 0.12, 0.14], // ink dunkel (Anthrazit)
    [0.165, 0.247, 0.8], // accent (blau)
    [0.082, 0.478, 0.271], // accent-alt (grün)
  ],
};

const BASE_OPACITY: Record<Theme, number> = { dark: 0.85, light: 0.6 };

export default function ParticleField({
  theme,
  reduced,
}: {
  theme: Theme;
  reduced: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const mat = useRef<THREE.ShaderMaterial>(null);
  const drift = useRef(new THREE.Vector2(0, 0));

  // Geometrie + Farben werden bei Theme-Wechsel neu gebaut (Farbwechsel).
  const geometry = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const scales = new Float32Array(COUNT);
    const pal = PALETTE[theme];

    for (let i = 0; i < COUNT; i++) {
      // Box grob im Sichtkegel der Kamera (z=6, fov 35)
      positions[i * 3 + 0] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;

      // ~82 % ink, ~10 % blau, ~8 % grün
      const r = Math.random();
      const c = r > 0.9 ? pal[1] : r > 0.82 ? pal[2] : pal[0];
      colors[i * 3 + 0] = c[0];
      colors[i * 3 + 1] = c[1];
      colors[i * 3 + 2] = c[2];

      scales[i] = 0.4 + Math.random() * 1.2;
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
    g.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    return g;
  }, [theme]);

  const uniforms = useMemo(
    () => ({
      uSize: { value: 7.0 },
      uOpacity: { value: BASE_OPACITY[theme] },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useFrame((_, delta) => {
    const g = group.current;
    const m = mat.current;
    if (!g || !m) return;

    // Deckkraft folgt der Dramaturgie (Hero voll, Richtung Kontakt ruhig)
    const calm = sceneState.contactProgress;
    const hero = sceneState.heroProgress;
    const target = BASE_OPACITY[theme] * (1 - hero * 0.55) * (1 - calm * 0.85);
    m.uniforms.uOpacity.value += (target - m.uniforms.uOpacity.value) * 0.06;

    if (reduced) return;

    // langsame Eigenrotation + weiche Pointer-Neigung (Parallaxe)
    const p = sceneState.pointer;
    drift.current.lerp(new THREE.Vector2(p.x, p.y), 0.03);
    g.rotation.y += delta * 0.02;
    g.rotation.x = drift.current.y * 0.12;
    g.position.x = drift.current.x * 0.4;
  });

  return (
    <group ref={group} renderOrder={1}>
      <points geometry={geometry} frustumCulled={false}>
        <shaderMaterial
          ref={mat}
          vertexShader={VERT}
          fragmentShader={FRAG}
          uniforms={uniforms}
          transparent
          depthTest={false}
          depthWrite={false}
          blending={THREE.NormalBlending}
        />
      </points>
    </group>
  );
}
