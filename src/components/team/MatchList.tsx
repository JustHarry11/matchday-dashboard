import { Match } from "@/lib/types";
import MatchCard from "./MatchCard";

interface MatchListProps {
  matches: Match[];
}

export default function MatchList({ matches }: MatchListProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Recent Matches</h2>

      <ul className="space-y-2">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </ul>
    </section>
  );
}
