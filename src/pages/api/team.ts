import { getTeams } from "@/lib/api";

export async function GET() {
  const teams = await getTeams();
  return new Response(JSON.stringify({ teams }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
