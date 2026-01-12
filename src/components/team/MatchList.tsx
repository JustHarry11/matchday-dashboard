import { Match } from "@/lib/types";
import MatchCard from "./MatchCard";

interface MatchListProps {
  matches: Match[];
}

export default function MatchList({ matches }: MatchListProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">Recent Matches</h2>

      <ul className="space-y-3">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </ul>
    </section>
  );
}
