import { getTeam, getTeamMatches, getNextMatch } from "@/lib/api";
import { Team, Match } from "@/lib/types";
import TeamHeader from "@/components/team/TeamHeader";
import NextMatch from "@/components/team/NextMatch";
import MatchList from "@/components/team/MatchList";
import StatsCard from "@/components/team/StatsCard";

interface TeamPageProps {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function TeamPage(props: TeamPageProps) {
  const params = await props.params;
  const teamId = parseInt(params.id, 10);

  const [team, matchesData, nextMatchData] = await Promise.all([
    getTeam(teamId),
    getTeamMatches(teamId),
    getNextMatch(teamId),
  ]);

  const matches = matchesData.matches;
  const nextMatch = nextMatchData.matches[0];

  return (
    <section className="py-10 space-y-6">
      <TeamHeader team={team} />
      <NextMatch match={nextMatch} />
      <StatsCard matches={matches} />
      <MatchList matches={matches} />
    </section>
  );
}
