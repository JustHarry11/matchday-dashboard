import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <Link href="/" className="font-bold text-xl">
          Matchday
        </Link>
      </div>
    </header>
  );
}
