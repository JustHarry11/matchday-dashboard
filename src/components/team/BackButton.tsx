"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="text-sm text-blue-600 hover:underline"
    >
      ← Back to teams
    </button>
  );
}
