import { getTeams } from "@/lib/api";
import TeamCard from "@/components/team/TeamCard"

export default async function HomePage() {
  const teams = await getTeams();

  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold mb-6">Teams</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </ul>
    </section>
  );
}
