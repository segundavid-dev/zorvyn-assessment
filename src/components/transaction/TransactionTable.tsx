import type { Transaction } from "../../types/transaction";
import { formatCurrency } from "../../utils/currencyFormat";
import { formatShortDate } from "../../utils/dateFormat";

type SortField = "date" | "amount";
type SortDirection = "asc" | "desc";

interface TransactionTableProps {
  transactions: Transaction[];
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
  onEdit?: (transaction: Transaction) => void;
}

function SortIndicator({
  field,
  activeField,
  direction,
}: {
  field: SortField;
  activeField: SortField;
  direction: SortDirection;
}) {
  if (field !== activeField)
    return <span className="ml-1 text-gray-300">↕</span>;
  return <span className="ml-1">{direction === "asc" ? "↑" : "↓"}</span>;
}

function TransactionTable({
  transactions,
  sortField,
  sortDirection,
  onSort,
  onEdit,
}: TransactionTableProps) {
  if (transactions.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-10 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
        No transactions found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <table className="w-full min-w-160 text-left text-sm">
        <thead>
          <tr className="border-b border-gray-100 text-xs text-gray-400 dark:border-gray-800">
            <th
              className="cursor-pointer px-5 py-3 font-medium"
              onClick={() => onSort("date")}
            >
              Date
              <SortIndicator
                field="date"
                activeField={sortField}
                direction={sortDirection}
              />
            </th>
            <th className="px-5 py-3 font-medium">Description</th>
            <th className="px-5 py-3 font-medium">Category</th>
            <th
              className="cursor-pointer px-5 py-3 text-right font-medium"
              onClick={() => onSort("amount")}
            >
              Amount
              <SortIndicator
                field="amount"
                activeField={sortField}
                direction={sortDirection}
              />
            </th>
            <th className="px-5 py-3 text-right font-medium">Status</th>
            {onEdit && (
              <th className="px-5 py-3 text-right font-medium">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr
              key={txn.id}
              className="border-b border-gray-50 last:border-0 dark:border-gray-800"
            >
              <td className="whitespace-nowrap px-5 py-3 text-gray-500 dark:text-gray-400">
                {formatShortDate(txn.date)}
              </td>
              <td className="whitespace-nowrap px-5 py-3 text-gray-900 dark:text-white">
                {txn.description}
              </td>
              <td className="whitespace-nowrap px-5 py-3 text-gray-500 dark:text-gray-400">
                {txn.category}
              </td>
              <td
                className={`px-5 py-3 text-right font-medium ${
                  txn.type === "income"
                    ? "text-emerald-600"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {txn.type === "income" ? "+" : "-"}$
                {formatCurrency(txn.amount)}
              </td>
              <td className="px-5 py-3 text-right">
                <span
                  className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                    txn.status === "completed"
                      ? "bg-emerald-50 text-emerald-700"
                      : txn.status === "pending"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-red-50 text-red-700"
                  }`}
                >
                  {txn.status}
                </span>
              </td>
              {onEdit && (
                <td className="px-5 py-3 text-right">
                  <button
                    onClick={() => onEdit(txn)}
                    className="rounded-md px-2 py-1 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    Edit
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
