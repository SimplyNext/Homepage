"use client";

import { useEffect } from "react";
import { captureCampaign } from "@/lib/campaign";

/** Merkt sich beim Einstieg die Herkunft (utm_*), damit sie Seitenwechsel überdauert. */
export default function CampaignCapture() {
  useEffect(() => {
    captureCampaign();
  }, []);
  return null;
}
