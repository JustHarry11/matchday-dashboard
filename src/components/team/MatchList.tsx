"use client";

import { useState } from "react";
import { Match } from "@/lib/types";
import MatchCard from "./MatchCard";

interface MatchListProps {
  matches: Match[];
}

export default function MatchList({ matches }: MatchListProps) {
  const [filter, setFilter] = useState<"all" | "finished" | "upcoming">("all");

  const filtered = matches.filter((m) => {
    if (filter === "all") return true;
    if (filter === "finished") return m.status === "FINISHED";
    if (filter === "upcoming") return m.status !== "FINISHED";
    return true;
  });

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Recent Matches</h2>
      <div className="flex gap-2 mb-2">
        <button
          className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-3 py-1 rounded ${filter === "finished" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setFilter("finished")}
        >
          Finished
        </button>
        <button
          className={`px-3 py-1 rounded ${filter === "upcoming" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setFilter("upcoming")}
        >
          Upcoming
        </button>
      </div>
      <ul className="space-y-2">
        {filtered.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </ul>
    </div>
  );
}
