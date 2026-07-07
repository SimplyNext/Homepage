"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useMountedTheme } from "@/hooks/useMountedTheme";

/**
 * Wiederverwendbarer Geräte-Rahmen (Bezel + Dynamic Island + schwarzer
 * Screen-Slot). Wird in der Home-Journey (JourneyPhone) UND der App-Detail-
 * Galerie (AppShowcase) genutzt, damit beide identisch aussehen.
 *
 * Theme-invertiert: im Dark Mode heller/silberner Rahmen, im Light Mode dunkel.
 * Der Screen bleibt immer schwarz (es ist ein Bildschirm), die Island bleibt
 * schwarz. Größe/Position kommen über `className` (Höhe setzen → Breite folgt
 * aus dem Screen-Aspect 1080/2640).
 */
export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { resolvedTheme } = useMountedTheme();
  const light = resolvedTheme === "light";

  // Dark Mode → silberner Metall-Rahmen; Light Mode → dunkles Gerät.
  const frame = light
    ? {
        borderColor: "#17171A",
        background: "#1F1F23",
        boxShadow:
          "0 40px 120px -30px rgba(0,0,0,0.55), 0 10px 30px -10px rgba(0,0,0,0.4)",
      }
    : {
        borderColor: "#c9ccd2",
        background: "linear-gradient(145deg, #e6e8ec 0%, #b9bdc6 100%)",
        boxShadow:
          "0 40px 120px -30px rgba(0,0,0,0.6), 0 10px 30px -10px rgba(0,0,0,0.45)",
      };

  return (
    <div
      className={`relative rounded-[2.6rem] border-[10px] ${className ?? ""}`}
      style={frame}
    >
      {/* Dynamic Island */}
      <div className="absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
      {/* Screen */}
      <div
        className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-black"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * Screen-Inhalt eines Phones.
 * – chrome=false: echter 1080×2640-Screenshot → full-bleed (object-cover).
 * – chrome=true: rohe App-UI ohne OS-Chrome (z. B. NOOK/CoCo) → künstliche
 *   Statusleiste oben + Home-Indikator unten, Bild eingerückt dazwischen.
 *   So wirkt das Bild normal groß statt hochgezoomt.
 */
export function PhoneScreenContent({
  src,
  chrome,
  priority,
  alt = "",
  sizes = "260px",
}: {
  src: string;
  chrome?: boolean;
  priority?: boolean;
  alt?: string;
  sizes?: string;
}) {
  if (!chrome) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    );
  }

  return (
    <div className="absolute inset-0 bg-black">
      {/* Statusleiste (Uhrzeit + minimalistische Signal/WLAN/Akku-Glyphen) */}
      <div className="absolute inset-x-0 top-0 z-10 flex h-[6.5%] items-center justify-between px-[9%] text-white">
        <span className="text-[min(2.6vh,13px)] font-semibold tracking-tight">
          9:41
        </span>
        <span className="flex items-center gap-[0.35em]" aria-hidden>
          {/* Signal */}
          <span className="flex items-end gap-[1.5px]">
            <span className="h-[5px] w-[2px] rounded-[1px] bg-white/90" />
            <span className="h-[7px] w-[2px] rounded-[1px] bg-white/90" />
            <span className="h-[9px] w-[2px] rounded-[1px] bg-white/90" />
            <span className="h-[11px] w-[2px] rounded-[1px] bg-white/50" />
          </span>
          {/* WLAN */}
          <span className="h-[9px] w-[11px] rounded-t-full border-[2px] border-b-0 border-white/90" />
          {/* Akku */}
          <span className="relative ml-[1px] flex h-[11px] w-[22px] items-center rounded-[3px] border-[1.5px] border-white/70 px-[1.5px]">
            <span className="h-[6px] w-[70%] rounded-[1px] bg-white/90" />
            <span className="absolute -right-[3px] top-1/2 h-[4px] w-[2px] -translate-y-1/2 rounded-r-[1px] bg-white/70" />
          </span>
        </span>
      </div>

      {/* App-Bild im eingerückten Mittelbereich (zwischen Status- & Home-Zeile) */}
      <div className="absolute inset-x-0 bottom-[3.5%] top-[6.5%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>

      {/* Home-Indikator */}
      <div className="absolute bottom-[1.2%] left-1/2 z-10 h-[4px] w-[32%] -translate-x-1/2 rounded-full bg-white/85" />
    </div>
  );
}
