import { Match } from "@/lib/types";

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  const { homeTeam, awayTeam, score } = match;

  return (
    <li className="border rounded p-3">
      <div className="flex justify-between items-center">
        <span>
          {homeTeam.name} vs {awayTeam.name}
        </span>

        {score.fullTime.home !== null &&
          score.fullTime.away !== null && (
            <span className="font-semibold">
              {score.fullTime.home} – {score.fullTime.away}
            </span>
          )}
      </div>
    </li>
  );
}
