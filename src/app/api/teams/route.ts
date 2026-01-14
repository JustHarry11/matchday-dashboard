import { getTeams } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const teams = await getTeams();
    return NextResponse.json({ teams });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch teams" }, { status: 500 });
  }
}
