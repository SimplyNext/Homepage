import { useEffect, useLayoutEffect } from "react";

/**
 * useLayoutEffect auf dem Client, useEffect auf dem Server – verhindert
 * SSR-Warnungen bei GSAP-Setups.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
