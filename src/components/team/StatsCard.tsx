import { Match } from "@/lib/types";

interface StatsCardProps {
  matches: Match[];
}

export default function StatsCard({ matches }: StatsCardProps) {
  const wins = matches.filter(m => m.status === "FINISHED" && m.score.fullTime.home! > m.score.fullTime.away!).length;
  const losses = matches.filter(m => m.status === "FINISHED" && m.score.fullTime.home! < m.score.fullTime.away!).length;
  const draws = matches.filter(m => m.status === "FINISHED" && m.score.fullTime.home === m.score.fullTime.away).length;

  return (
    <div className="p-4 bg-white border rounded shadow flex gap-4">
      <div className="text-center">
        <div className="text-xl font-bold">{wins}</div>
        <div className="text-gray-500 text-sm">Wins</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold">{draws}</div>
        <div className="text-gray-500 text-sm">Draws</div>
      </div>
      <div className="text-center">
        <div className="text-xl font-bold">{losses}</div>
        <div className="text-gray-500 text-sm">Losses</div>
      </div>
    </div>
  );
}
