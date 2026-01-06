"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="py-10">
      <h2 className="text-xl font-semibold mb-2">
        Something went wrong
      </h2>
      <p className="text-gray-600 mb-4">
        {error.message}
      </p>
      <button
        onClick={reset}
        className="underline"
      >
        Try again
      </button>
    </div>
  );
}
