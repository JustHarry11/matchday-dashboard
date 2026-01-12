import { getTeam, getTeamMatches, getNextMatch } from "@/lib/api";
import NextMatch from "@/components/team/NextMatch";
import MatchList from "@/components/team/MatchList";
import TeamHeader from "@/components/team/TeamHeader";

interface TeamPageProps {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function TeamPage(props: TeamPageProps) {
  const params = await props.params;

  if (!params.id) {
    throw new Error("Invalid team id");
  }

  const teamId = Number(params.id);
  if (Number.isNaN(teamId)) {
    throw new Error("Invalid team id");
  }

  const [team, matches, nextMatch] = await Promise.all([
    getTeam(teamId),
    getTeamMatches(teamId),
    getNextMatch(teamId),
  ]);

  return (
    <section className="py-10 space-y-8">
      <TeamHeader team={team} />

      <NextMatch match={nextMatch.matches?.[0]} />

      <MatchList matches={matches.matches} />
    </section>
  );
}
