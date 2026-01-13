import { Team, Match } from "./types";

const API_BASE_URL = "https://api.football-data.org/v4";

const headers = {
  "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY!,
  "User-Agent": "matchday-dashboard",
};

async function fetchFromAPI<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers,
    next: { revalidate: 60 },
    
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("API error:", res.status, text);
    throw new Error(`API Error ${res.status}`);
    
  }

  return res.json();
}

// ✅ Explicit return types
export function getTeam(teamId: number): Promise<Team> {
  return fetchFromAPI<Team>(`/teams/${teamId}`);
}

export function getTeamMatches(
  teamId: number
): Promise<{ matches: Match[] }> {
  return fetchFromAPI<{ matches: Match[] }>(
    `/teams/${teamId}/matches?status=SCHEDULED&limit=5`
  );
}

export function getRecentMatches(
  teamId: number
): Promise<{ matches: Match[] }> {
  return fetchFromAPI<{ matches: Match[] }>(
    `/teams/${teamId}/matches?status=FINISHED&limit=5`
  );
}


export function getNextMatch(
  teamId: number
): Promise<{ matches: Match[] }> {
  return fetchFromAPI<{ matches: Match[] }>(
    `/teams/${teamId}/matches?status=SCHEDULED&limit=1`
  );
}

export async function getTeams(): Promise<Team[]> {
  const data = await fetchFromAPI<{ teams: Team[] }>("/teams");
  return data.teams;
}

