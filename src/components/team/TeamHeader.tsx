import Image from "next/image";
import { Team } from "@/lib/types";

interface TeamHeaderProps {
  team: Team;
}

export default function TeamHeader({ team }: TeamHeaderProps) {
  return (
    <header className="flex items-center gap-4 pb-4 border-b">
      <Image
        src={team.crest}
        alt={team.name}
        width={64}
        height={64}
        className="object-contain"
      />

      <div>
        <h1 className="text-3xl font-bold leading-tight">{team.name}</h1>
        <p className="text-sm text-gray-500">{team.venue}</p>
      </div>
    </header>
  );
}
