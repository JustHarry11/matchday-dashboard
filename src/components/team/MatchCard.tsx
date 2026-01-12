import { Match } from "@/lib/types";

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  const { homeTeam, awayTeam, score } = match;

  const hasScore =
    score.fullTime.home !== null &&
    score.fullTime.away !== null;

  return (
    <li className="rounded-lg border p-4 hover:bg-gray-50 transition">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-medium">
            {homeTeam.name} vs {awayTeam.name}
          </span>

          <span className="text-sm text-gray-500">
            Full Time
          </span>
        </div>

        {hasScore && (
          <span className="text-lg font-semibold">
            {score.fullTime.home} – {score.fullTime.away}
          </span>
        )}
      </div>
    </li>
  );
}
