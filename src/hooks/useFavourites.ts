"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "favouriteTeams";

export function useFavourites() {
  const [favourites, setFavourites] = useState<number[]>(() => {
    if (typeof window === "undefined") return [];

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Persist favourites
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (teamId: number) => {
    setFavourites((prev) =>
      prev.includes(teamId)
        ? prev.filter((id) => id !== teamId)
        : [...prev, teamId]
    );
  };

  return { favourites, toggleFavourite };
}
