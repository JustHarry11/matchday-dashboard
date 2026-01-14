"use client";

import { useState } from "react";

export function useLastViewedTeam() {
  const [lastTeam] = useState<number | null>(() => {
    if (typeof window === "undefined") return null;

    const stored = localStorage.getItem("lastViewedTeam");
    return stored ? Number(stored) : null;
  });

  return lastTeam;
}
