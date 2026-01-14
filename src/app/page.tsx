import { Team } from "@/lib/types";
import { getPremierLeagueTeams } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import LastViewedTeamButton from "@/components/team/LastViewedTeamButton";

export default async function HomePage() {
  let teams: Team[] = [];

  try {
    teams = await getPremierLeagueTeams();
  } catch (err) {
    console.error("Failed to fetch Premier League teams:", err);
  }

  return (
    <section className="py-10 space-y-6">
      <h1 className="text-3xl font-bold">Premier League Teams</h1>

      {/* Client-only button for last viewed team */}
      <LastViewedTeamButton />

      {/* Teams grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {teams.map((team) => (
          <Link
            key={team.id}
            href={`/team/${team.id}`}
            className="flex flex-col items-center bg-gray-100 p-4 rounded hover:bg-blue-100 transition"
          >
            <Image
              src={team.crest}
              alt={team.name}
              width={64}
              height={64}
              className="mb-2"
            />
            <span className="text-center">{team.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
