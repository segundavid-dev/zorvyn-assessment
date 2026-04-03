function FilterBarSkeleton() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 p-4">
      <div className="h-9 w-48 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
      <div className="h-9 w-36 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
      <div className="h-9 w-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
      <div className="h-9 w-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}

function TableRowSkeleton() {
  return (
    <div className="flex items-center gap-4 py-3">
      <div className="h-4 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
      <div className="ml-auto h-4 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-5 w-16 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}

function TransactionSkeleton() {
  return (
    <div>
      <div className="h-8 w-40 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
      <div className="mt-2 h-4 w-56 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />

      <div className="mt-6">
        <FilterBarSkeleton />
      </div>

      <div className="mt-5 rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 p-5">
        <div className="space-y-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <TableRowSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TransactionSkeleton;
