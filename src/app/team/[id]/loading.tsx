export default function LoadingTeamPage() {
  return (
    <section className="py-10 space-y-6 animate-pulse">
      {/* Back button placeholder */}
      <div className="h-6 w-32 bg-gray-200 rounded" />

      {/* Team header */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 bg-gray-200 rounded" />
        <div className="h-6 w-48 bg-gray-200 rounded" />
      </div>

      {/* Next match */}
      <div className="h-24 bg-gray-200 rounded" />

      {/* Stats */}
      <div className="h-24 bg-gray-200 rounded" />

      {/* Match list */}
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-16 bg-gray-200 rounded" />
        ))}
      </div>
    </section>
  );
}
