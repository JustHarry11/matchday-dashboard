import { Match } from "@/lib/types";

interface NextMatchProps {
  match?: Match;
}

export default function NextMatch({ match }: NextMatchProps) {
  if (!match) {
    return (
      <section>
        <h2 className="text-xl font-semibold mb-2">Next Match</h2>
        <p>No upcoming matches</p>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Next Match</h2>

      <div className="border rounded p-4">
        <p className="font-medium">
          {match.homeTeam.name} vs {match.awayTeam.name}
        </p>
      </div>
    </section>
  );
}
