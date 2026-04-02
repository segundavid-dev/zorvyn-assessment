function CardSkeleton() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
        <div className="h-9 w-9 animate-pulse rounded-lg bg-gray-200" />
      </div>
      <div className="mt-3 h-7 w-32 animate-pulse rounded bg-gray-200" />
      <div className="mt-2 h-3 w-24 animate-pulse rounded bg-gray-200" />
    </div>
  );
}

function ChartSkeleton() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
      <div className="mt-4 h-64 animate-pulse rounded bg-gray-100" />
    </div>
  );
}

function TableSkeleton() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="h-4 w-36 animate-pulse rounded bg-gray-200" />
      <div className="mt-4 space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
            <div className="ml-auto h-4 w-16 animate-pulse rounded bg-gray-200" />
            <div className="h-5 w-16 animate-pulse rounded-full bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div>
      <div className="h-8 w-40 animate-pulse rounded bg-gray-200" />
      <div className="mt-2 h-4 w-64 animate-pulse rounded bg-gray-200" />

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ChartSkeleton />
        <ChartSkeleton />
      </div>

      <div className="mt-5">
        <TableSkeleton />
      </div>
    </div>
  );
}

export default DashboardSkeleton;
