"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { sceneState } from "@/lib/homeScene";

/**
 * Bildschirmfüllende Aurora-Ebene (fBm-Noise-Fragment-Shader): langsam
 * fließende Farbschleier in den Markenfarben über dem Seiten-Hintergrund.
 * – Theme-fähig: Palette wird pro Frame weich zum Ziel gelerpt.
 * – Scroll-dramaturgisch: uEnergy (Hero lebendig) und uCalm (Kontakt ruhig)
 *   kommen aus sceneState und skalieren Intensität + Zeitgeschwindigkeit.
 * – Pointer kommt aus sceneState (fensterweiter Listener), NICHT aus
 *   state.pointer – der Canvas ist pointer-events-none und bekäme nie Events.
 * – prefers-reduced-motion: Zeit eingefroren (statisches Standbild).
 */

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;      // -1..1
  uniform float uAspect;
  uniform vec3 uBase;       // Seiten-Hintergrund
  uniform vec3 uColorA;     // Akzent 1 (Blau)
  uniform vec3 uColorB;     // Akzent 2 (Grün)
  uniform vec3 uColorC;     // Zart-Ton
  uniform float uAmount;    // Gesamt-Intensität (Light-Mode dezenter)

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = p * 2.03 + vec2(11.3, 7.7);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = vec2(uv.x * uAspect, uv.y);
    float t = uTime * 0.045;

    vec2 drift = uMouse * 0.18;

    float n1 = fbm(p * 1.35 + vec2(t * 0.8, -t * 0.55) + drift);
    float n2 = fbm(p * 2.1 - vec2(t * 0.5, t * 0.7) - drift * 0.6);
    float veil = fbm(p * 1.1 + vec2(n1, n2) * 1.4);

    float band = smoothstep(0.35, 0.85, veil);
    float band2 = smoothstep(0.55, 0.95, n2);

    // Vignette hält Ränder ruhig (Text an den Kanten bleibt ungestört)
    vec2 c = uv - 0.5;
    float vig = smoothstep(0.95, 0.25, dot(c, c) * 2.6);

    vec3 col = uBase;
    col = mix(col, uColorC, band2 * 0.35 * uAmount * vig);
    col = mix(col, uColorA, band * 0.55 * uAmount * vig);
    col = mix(col, uColorB, smoothstep(0.6, 1.0, n1 * veil) * 0.4 * uAmount * vig);

    // Feines Dithering gegen Banding
    col += (hash(uv * 913.7 + uTime) - 0.5) * 0.012;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export type AuroraPalette = {
  base: string;
  a: string;
  b: string;
  c: string;
  amount: number;
};

export const AURORA_DARK: AuroraPalette = {
  base: "#0b0b0c",
  a: "#1d2f8f", // tiefes Blau
  b: "#0f5138", // tiefes Grün
  c: "#232438", // Zwielicht
  amount: 1.0,
};

export const AURORA_LIGHT: AuroraPalette = {
  base: "#f6f4ef",
  a: "#c9d2f4", // Pastellblau
  b: "#cfe4d6", // Pastellgrün
  c: "#eae6dc", // warmes Papier
  amount: 0.85,
};

export default function AuroraPlane({
  palette,
  reduced,
}: {
  palette: AuroraPalette;
  reduced: boolean;
}) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: reduced ? 40 : 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uAspect: { value: 1 },
      uBase: { value: new THREE.Color(palette.base) },
      uColorA: { value: new THREE.Color(palette.a) },
      uColorB: { value: new THREE.Color(palette.b) },
      uColorC: { value: new THREE.Color(palette.c) },
      uAmount: { value: palette.amount },
    }),
    // Uniform-Objekte nur einmal erzeugen; Werte werden unten nachgeführt.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useFrame((_, delta) => {
    const m = mat.current;
    if (!m) return;

    m.uniforms.uAspect.value = size.width / Math.max(size.height, 1);

    // Dramaturgie: Hero → volle Energie; Richtung Kontakt beruhigt sich alles.
    const calm = sceneState.contactProgress;
    const energy = 1 - sceneState.heroProgress * 0.35;
    const targetAmount = palette.amount * (1 - calm * 0.6) * energy;

    const u = m.uniforms;
    (u.uBase.value as THREE.Color).lerp(new THREE.Color(palette.base), 0.06);
    (u.uColorA.value as THREE.Color).lerp(new THREE.Color(palette.a), 0.06);
    (u.uColorB.value as THREE.Color).lerp(new THREE.Color(palette.b), 0.06);
    (u.uColorC.value as THREE.Color).lerp(new THREE.Color(palette.c), 0.06);
    u.uAmount.value += (targetAmount - u.uAmount.value) * 0.06;

    if (!reduced) {
      // Zeit läuft Richtung Kontakt langsamer → der Schleier "atmet aus"
      u.uTime.value += delta * (1 - calm * 0.7);
      const t = sceneState.pointer;
      mouse.current.lerp(new THREE.Vector2(t.x, t.y), 0.04);
      (u.uMouse.value as THREE.Vector2).copy(mouse.current);
    }
  });

  return (
    <mesh frustumCulled={false} renderOrder={0}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={mat}
        vertexShader={VERT}
        fragmentShader={FRAG}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}
