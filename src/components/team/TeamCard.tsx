import Link from "next/link";
import Image from "next/image";
import { Team } from "@/lib/types";

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <li className="border rounded p-4 hover:shadow transition">
      <Link
        href={`/team/${team.id}`}
        className="flex items-center gap-3"
      >
        <Image
          src={team.crest}
          alt={team.name}
          width={40}
          height={40}
          className="object-contain"
        />
        <span className="font-semibold">{team.name}</span>
      </Link>
    </li>
  );
}
