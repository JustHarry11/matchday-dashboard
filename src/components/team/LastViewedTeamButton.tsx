"use client";

import Link from "next/link";
import { useState } from "react";

interface LastViewedTeamButtonProps {
  label?: string;
}

export default function LastViewedTeamButton({ label }: LastViewedTeamButtonProps) {
  // Lazy initializer avoids calling setState in effect
  const [lastTeam] = useState<number | null>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lastViewedTeam");
      return stored ? Number(stored) : null;
    }
    return null;
  });

  if (!lastTeam) return null;

  return (
    <div className="mb-6">
      <Link
        href={`/team/${lastTeam}`}
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {label ?? `Continue watching team #${lastTeam}`}
      </Link>
    </div>
  );
}
