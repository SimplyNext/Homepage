"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { apps as staticApps, withStatuses, type AppData, type StatusMap } from "@/lib/apps";

const AppsContext = createContext<AppData[]>(staticApps);

/** Alle Apps mit dem aus AppControl abgeglichenen Status. */
export const useApps = () => useContext(AppsContext);

export const useApp = (slug: string) => useApps().find((a) => a.slug === slug);

export default function AppsProvider({
  statuses,
  children,
}: {
  statuses: StatusMap;
  children: ReactNode;
}) {
  const value = useMemo(() => withStatuses(statuses), [statuses]);
  return <AppsContext.Provider value={value}>{children}</AppsContext.Provider>;
}
