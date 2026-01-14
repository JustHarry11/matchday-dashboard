"use client";

import { useEffect } from "react";

interface RememberTeamProps {
  teamId: number;
}

export default function RememberTeam({ teamId }: RememberTeamProps) {
  useEffect(() => {
    localStorage.setItem("lastViewedTeam", teamId.toString());
  }, [teamId]);

  return null; // no UI
}
