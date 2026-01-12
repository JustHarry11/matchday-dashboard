import { Match } from "@/lib/types";

interface NextMatchProps {
  match?: Match;
}

export default function NextMatch({ match }: NextMatchProps) {
  return (
    <section className="rounded-lg border bg-gray-50 p-5">
      <h2 className="text-lg font-semibold mb-3">Next Match</h2>

      {!match ? (
        <p className="text-sm text-gray-500">No upcoming matches</p>
      ) : (
        <div className="flex justify-between items-center">
          <p className="font-medium">
            {match.homeTeam.name} vs {match.awayTeam.name}
          </p>

          <span className="text-sm text-gray-600">Scheduled</span>
        </div>
      )}
    </section>
  );
}
