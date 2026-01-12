import { Match } from "@/lib/types";

interface NextMatchProps {
  match?: Match;
}

export default function NextMatch({ match }: NextMatchProps) {
  if (!match) {
    return <p className="text-gray-500">No upcoming matches</p>;
  }

  return (
    <div className="p-4 mb-6 bg-blue-50 border-l-4 border-blue-500 rounded">
      <h2 className="text-xl font-semibold mb-2">Next Match</h2>
      <p className="text-lg">
        {match.homeTeam.name} vs {match.awayTeam.name}
      </p>
      <p className="text-sm text-gray-600">{new Date(match.utcDate).toLocaleString()}</p>
    </div>
  );
}
