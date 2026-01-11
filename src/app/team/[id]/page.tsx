import { getTeam, getTeamMatches, getNextMatch } from "@/lib/api";
import { Team, Match } from "@/lib/types";
import Image from "next/image";

interface TeamPageProps {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function TeamPage(props: TeamPageProps) {
  // Await params in case it's a Promise
  const params = await props.params;

  console.log("params.id:", params.id, typeof params.id);

  if (!params.id) {
    throw new Error("Invalid team id");
  }

  const teamId = parseInt(params.id, 10);
  if (isNaN(teamId)) {
    throw new Error("Invalid team id");
  }

  const [team, matches, nextMatch] = await Promise.all([
    getTeam(teamId),
    getTeamMatches(teamId),
    getNextMatch(teamId),
  ]);

  return (
    <section className="py-10 space-y-6">
      <header className="flex items-center gap-4">
        <Image
          src={team.crest}
          alt={team.name}
          width={64}
          height={64}
          className="object-contain"
        />
        <h1 className="text-3xl font-bold">{team.name}</h1>
      </header>

      <div>
        <h2 className="text-xl font-semibold mb-2">Next Match</h2>
        {nextMatch.matches?.length ? (
          <p>
            {nextMatch.matches[0].homeTeam.name} vs{" "}
            {nextMatch.matches[0].awayTeam.name}
          </p>
        ) : (
          <p>No upcoming matches</p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Recent Matches</h2>
        <ul className="space-y-2">
          {matches.matches.map((match: Match) => (
            <li key={match.id} className="border p-3 rounded">
              {match.homeTeam.name} vs {match.awayTeam.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
