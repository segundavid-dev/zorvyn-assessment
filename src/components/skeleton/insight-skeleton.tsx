function CardSkeleton() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
        <div className="h-9 w-9 animate-pulse rounded-lg bg-gray-200" />
      </div>
      <div className="mt-3 h-7 w-28 animate-pulse rounded bg-gray-200" />
      <div className="mt-2 h-3 w-36 animate-pulse rounded bg-gray-200" />
    </div>
  );
}

function ChartSkeleton() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="h-4 w-36 animate-pulse rounded bg-gray-200" />
      <div className="mt-4 h-72 animate-pulse rounded bg-gray-100" />
    </div>
  );
}

function InsightSkeleton() {
  return (
    <div>
      <div className="h-8 w-32 animate-pulse rounded bg-gray-200" />
      <div className="mt-2 h-4 w-56 animate-pulse rounded bg-gray-200" />

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ChartSkeleton />
        <ChartSkeleton />
      </div>
    </div>
  );
}

export default InsightSkeleton;
