import { Match } from "@/lib/types";

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  const isFinished = match.status === "FINISHED";

  const home = match.score.fullTime.home;
  const away = match.score.fullTime.away;

  // Determine result (from home team POV – acceptable for now)
  let result: "win" | "draw" | "loss" | "upcoming" = "upcoming";

  if (isFinished && home !== null && away !== null) {
    if (home > away) result = "win";
    else if (home < away) result = "loss";
    else result = "draw";
  }

  const resultStyles = {
    win: "border-l-4 border-green-500 bg-green-50",
    draw: "border-l-4 border-gray-400 bg-gray-50",
    loss: "border-l-4 border-red-500 bg-red-50",
    upcoming: "border-l-4 border-blue-400 bg-blue-50",
  };

  const formattedDate = new Date(match.utcDate).toLocaleString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <li className={`p-4 rounded ${resultStyles[result]}`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">
            {match.homeTeam.name} vs {match.awayTeam.name}
          </p>
          <p className="text-sm text-gray-600">{formattedDate}</p>
        </div>

        <div className="text-right">
          {isFinished ? (
            <>
              <p className="text-xl font-bold">
                {home} – {away}
              </p>
              <p className="text-xs text-gray-500">FT</p>
            </>
          ) : (
            <p className="text-sm font-medium text-blue-600">Upcoming</p>
          )}
        </div>
      </div>
    </li>
  );
}
