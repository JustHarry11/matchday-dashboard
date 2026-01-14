"use client";

import { useEffect, useState } from "react";
import { Team } from "@/lib/types";

export function useTeams() {
  const [teams, setTeams] = useState<Team[] | null>(null);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const res = await fetch("/api/teams");
        if (!res.ok) throw new Error("Failed to fetch teams");
        const data = await res.json();
        setTeams(data.teams);
      } catch (err) {
        console.error("Failed to fetch teams:", err);
      }
    }

    fetchTeams();
  }, []);

  return teams;
}
