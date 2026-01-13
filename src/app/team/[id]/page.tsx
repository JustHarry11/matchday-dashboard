import { getTeam, getTeamMatches, getNextMatch, getRecentMatches } from "@/lib/api";
import { Team, Match } from "@/lib/types";
import TeamHeader from "@/components/team/TeamHeader";
import NextMatch from "@/components/team/NextMatch";
import MatchList from "@/components/team/MatchList";
import StatsCard from "@/components/team/StatsCard";
import BackButton from "@/components/team/BackButton";


interface TeamPageProps {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function TeamPage(props: TeamPageProps) {
  const params = await props.params;
  const teamId = parseInt(params.id, 10);

  const [team, upcomingData, recentData, nextMatchData] = await Promise.all([
    getTeam(teamId),
    getTeamMatches(teamId),
    getRecentMatches(teamId),
    getNextMatch(teamId),
  ]);

const upcomingMatches = upcomingData.matches;
const recentMatches = recentData.matches;
const nextMatch = nextMatchData.matches[0];

  const allMatches: Match[] = [...recentMatches, ...upcomingMatches];



  return (
    <section className="py-10 space-y-6">
      <BackButton />

      {/* Team info */}
      <TeamHeader team={team} />

      {/* Next match */}
      {nextMatch && <NextMatch match={nextMatch} />}

      {/* Stats card (based on all matches) */}
      <StatsCard matches={allMatches} />

      {/* Match list with built-in tabs */}
      <MatchList matches={allMatches} />
    </section>
  );
}
