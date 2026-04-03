import type { TransactionCategory } from "../../types/transaction";

const CATEGORIES: TransactionCategory[] = [
  "Food & Dining",
  "Transportation",
  "Shopping",
  "Bills & Utilities",
  "Entertainment",
  "Healthcare",
  "Income/Salary",
  "Freelance",
];

interface TransactionFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  type: string;
  onTypeChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
}

const selectStyles =
  "shrink-0 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-gray-500";

function TransactionFilters({
  searchQuery,
  onSearchChange,
  category,
  onCategoryChange,
  type,
  onTypeChange,
  status,
  onStatusChange,
}: TransactionFiltersProps) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="shrink-0 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-500 dark:focus:border-gray-500 w-48"
      />

      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className={selectStyles}
      >
        <option value="all">All Categories</option>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={type}
        onChange={(e) => onTypeChange(e.target.value)}
        className={selectStyles}
      >
        <option value="all">All Types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className={selectStyles}
      >
        <option value="all">All Status</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
        <option value="failed">Failed</option>
      </select>
    </div>
  );
}

export default TransactionFilters;
