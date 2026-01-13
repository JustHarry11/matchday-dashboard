import { Team, Match } from "./types";

const API_BASE_URL = "https://api.football-data.org/v4";

const headers = {
  "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY!,
  "User-Agent": "matchday-dashboard",
};

async function fetchFromAPI<T>(
  endpoint: string,
  revalidate = 60
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers,
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error(`API Error ${res.status}`);
  }

  return res.json();
}


export function getTeam(teamId: number): Promise<Team> {
  return fetchFromAPI<Team>(`/teams/${teamId}`, 3600);
}

export function getTeamMatches(teamId: number) {
  return fetchFromAPI<{ matches: Match[] }>(
    `/teams/${teamId}/matches?status=SCHEDULED&limit=5`,
    300
  );
}

export function getRecentMatches(teamId: number) {
  return fetchFromAPI<{ matches: Match[] }>(
    `/teams/${teamId}/matches?status=FINISHED&limit=5`,
    300
  );
}

export function getNextMatch(teamId: number) {
  return fetchFromAPI<{ matches: Match[] }>(
    `/teams/${teamId}/matches?status=SCHEDULED&limit=1`,
    120
  );
}

export async function getTeams(): Promise<Team[]> {
  const data = await fetchFromAPI<{ teams: Team[] }>("/teams", 3600);
  return data.teams;
}
