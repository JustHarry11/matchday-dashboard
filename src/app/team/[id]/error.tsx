"use client";

export default function Error({
  error,
}: {
  error: Error;
}) {
  return (
    <div className="py-10">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p>{error.message}</p>
    </div>
  );
}
