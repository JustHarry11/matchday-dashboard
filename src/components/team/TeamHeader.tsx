"use client";

import { Team } from "@/lib/types";
import { useFavourites } from "@/hooks/useFavourites";

export default function TeamHeader({ team }: { team: Team }) {
  const { favourites, toggleFavourite } = useFavourites();
  const isFavourite = favourites.includes(team.id);

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">{team.name}</h1>
      <button
        onClick={() => toggleFavourite(team.id)}
        className="text-2xl"
        aria-label="Toggle favorite"
      >
        {isFavourite ? "⭐" : "☆"}
      </button>
    </div>
  );
}
