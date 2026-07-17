"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Sternenhimmel NUR für den Hero: ein eigenständiger, OPAKER Canvas, der den
 * Hero füllt und die dahinterliegende fixe Aurora genau in diesem Bereich
 * abdeckt (der Rest der Seite behält die Aurora).
 *
 * – Dichtes Sternenfeld (THREE.Points) in einem echten TIEFEN-VOLUMEN: die Punkte
 *   stehen zwischen NEAR und FAR gestaffelt, X/Y proportional zur Distanz gestreut
 *   (frustum-füllend → gleichmäßige Winkeldichte, kein Häufen zur Mitte).
 * – Perspektivische Punktgröße (uFocal/dist): nahe Sterne groß, ferne winzig +
 *   dezente Tiefen-Helligkeit → räumlicher Eindruck. Kein Tiefen-Fog (der erzeugte
 *   früher konzentrische Helligkeitsringe = „Sonnensystem").
 * – Kamera folgt der Maus (Parallaxe). Durch die Tiefe wandern nahe Sterne stärker
 *   als ferne (Bewegungs-Parallaxe = Raumgefühl). Feld breit überfüllt gestreut,
 *   damit die Kamera nie über den bevölkerten Bereich hinausschaut (keine Ränder).
 * – Theme-abhängig: dunkler Grund + cremefarbene Sterne (Dark), heller Grund +
 *   anthrazitfarbene Sterne (Light). Grund via gl.clearColor (alpha:false) → opak.
 * – prefers-reduced-motion: Kamera fix (Standbild).
 */

type Theme = "light" | "dark";

const PALETTE: Record<Theme, { bg: string; star: string; size: number }> = {
  // size = Basis-Punktgröße in Gerätepixeln (wird pro Stern zufällig skaliert).
  // star bewusst neutral-kühl (nicht cremig) → Cluster wirken nicht bräunlich.
  dark: { bg: "#0b0b0c", star: "#eaecf0", size: 2.0 },
  light: { bg: "#f6f4ef", star: "#20202a", size: 1.9 },
};

const COUNT = 22000;
// ECHTES TIEFEN-VOLUMEN statt flacher Fläche: Die Sterne stehen zwischen NEAR
// und FAR (Distanz vor der Kamera). X/Y werden PROPORTIONAL zur Distanz gestreut
// (halfSpan = d * SPAN_PER_DIST) → jede Tiefenschicht füllt denselben Bildaus-
// schnitt → gleichmäßige Winkeldichte über den ganzen Schirm, KEIN Häufen zur
// Mitte. Zusammen mit der perspektivischen Punktgröße (Vertex-Shader) und der
// Kamera-Parallaxe entsteht so ein Raum: nahe Sterne groß & schnell, ferne fein.
const CAM_Z = 1000; // muss mit der <Canvas camera position [0,0,1000]> übereinstimmen
const NEAR = 260; // nächste Sterne (Distanz zur Kamera) – groß & schnell
const FAR = 1650; // fernste Sterne – fein & träge (innerhalb camera.far = 2000)
// halfSpan = d * SPAN_PER_DIST + SPAN_MARGIN. tan(fov/2) bei fov 55° ≈ 0.52; mit
// Breitbild-Faktor ~2.4 großzügig überfüllt. SPAN_MARGIN ist ein KONSTANTER Puffer,
// der garantiert, dass selbst die schmale NAH-Ebene deutlich breiter ist als der
// Parallaxe-Kameraweg → die großen nahen Sterne stehen bis an die Ränder (nicht
// nur in der Mitte) und beim Mausschwenk läuft die Kamera nie aus dem Feld.
const SPAN_PER_DIST = 1.25;
const SPAN_MARGIN = 240;
const PARALLAX = 0.1; // sanfter Kameraweg; die Tiefe macht die Bewegung sichtbar (nah ≫ fern)

const VERT = /* glsl */ `
  attribute float aSize;
  attribute float aBright;
  attribute float aSoft;
  uniform float uPixelRatio;
  uniform float uFocal;
  uniform float uNear;
  uniform float uFar;
  varying float vBright;
  varying float vSoft;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float dist = -mv.z; // Distanz vor der Kamera (positiv)
    // Perspektivische Größe: nahe Sterne groß, ferne winzig – der stärkste
    // statische 3D-Hinweis. Geclampt gegen Riesen-Blobs bzw. Sub-Pixel-Flimmern.
    gl_PointSize = clamp(aSize * uPixelRatio * (uFocal / dist), 0.8, 13.0);
    // Dezente Tiefen-Helligkeit: ferne Sterne etwas dunkler (atmosphärische Tiefe).
    // Räumlich gleichverteilt (jede Schicht füllt den Schirm) → KEIN radialer Ring.
    float depthFade = mix(0.45, 1.0, clamp((uFar - dist) / (uFar - uNear), 0.0, 1.0));
    vBright = aBright * depthFade;
    vSoft = aSoft;
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uColor;
  varying float vBright;
  varying float vSoft;
  void main() {
    // Echter Stern statt „weißer Punkt": heller, kompakter KERN + weicher GLOW-Hof,
    // der weich zum Rand ausläuft. vSoft variiert pro Stern die Schärfe: scharfe,
    // funkelnde Sterne (vSoft≈0) neben leicht unscharfen, diffus glühenden (vSoft≈1).
    float d = length(gl_PointCoord - vec2(0.5)); // 0 = Zentrum … ~0.5 = Rand
    float innerEdge = mix(0.14, 0.34, vSoft);     // weiche Sterne: größerer, unschärferer Kern
    float core = smoothstep(0.5, innerEdge, d);   // heller Kern
    float glow = smoothstep(0.5, 0.0, d);         // weiter, weicher Hof
    float alpha = clamp(core + pow(glow, 1.6) * mix(0.22, 0.45, vSoft), 0.0, 1.0);
    if (alpha <= 0.004) discard;
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
    const soft = new Float32Array(COUNT);
    const base = PALETTE[theme].size;
    for (let i = 0; i < COUNT; i++) {
      // Distanz vor der Kamera; X/Y proportional dazu (+ konstanter Rand) →
      // frustum-füllend, keine zentrale Häufung, und die schmale NAH-Ebene reicht
      // bis über die Ränder hinaus. Kamera blickt von +Z auf 0 → z = CAM_Z - d.
      const d = NEAR + Math.random() * (FAR - NEAR);
      const halfSpan = d * SPAN_PER_DIST + SPAN_MARGIN;
      positions[i * 3 + 0] = (Math.random() - 0.5) * 2 * halfSpan;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2 * halfSpan;
      positions[i * 3 + 2] = CAM_Z - d;
      // Größe stark klein-lastig: pow⁴ macht große Sterne SELTEN → viele feine
      // Punkte, nur vereinzelt größere (nicht so viele große wie zuvor).
      const r = Math.random();
      sizes[i] = base * (0.45 + Math.pow(r, 4) * 2.2);
      // Helligkeit variiert pro Stern (ersetzt die Fog-Tiefenoptik ohne Ringe).
      // Untergrenze bewusst hoch → knackige Sterne statt ausgeblichener Punkte.
      bright[i] = 0.6 + Math.random() * 0.4;
      // Schärfe-Variation: viele scharf/funkelnd (klein), einige diffus glühend.
      // pow³ → weiche, unscharfe Sterne bleiben die Ausnahme.
      soft[i] = Math.pow(Math.random(), 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    g.setAttribute("aBright", new THREE.BufferAttribute(bright, 1));
    g.setAttribute("aSoft", new THREE.BufferAttribute(soft, 1));
    return g;
    // theme steckt nur in der Basisgröße; Neuaufbau bei Theme-Wechsel ist ok.
  }, [theme]);

  const uniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color(PALETTE[theme].star) },
      uPixelRatio: { value: 1 },
      // Fokuslänge der Größen-Perspektive: bei Distanz ≈ uFocal ist die Punktgröße
      // ≈ aSize. Nahe (NEAR≈260) → ~2.3×, ferne (FAR≈1650) → ~0.36× (dann geclampt).
      uFocal: { value: 600 },
      uNear: { value: NEAR },
      uFar: { value: FAR },
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
      // Spürbare Parallaxe (PARALLAX); das Feld ist breit überfüllt gestreut,
      // sodass die Kamera nie über den bevölkerten Bereich hinausschaut.
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
