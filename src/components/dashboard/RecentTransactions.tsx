import { Link } from "react-router";
import type { Transaction } from "../../types/transaction";

interface RecentTransactionsProps {
  transactions: Transaction[];
}

function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">
          Recent Transactions
        </h3>
        <Link
          to="/transactions"
          className="text-xs font-medium text-gray-500 hover:text-gray-900"
        >
          View All
        </Link>
      </div>
      <table className="mt-4 w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-100 text-xs text-gray-400">
            <th className="pb-2 font-medium">Date</th>
            <th className="pb-2 font-medium">Description</th>
            <th className="pb-2 font-medium">Category</th>
            <th className="pb-2 text-right font-medium">Amount</th>
            <th className="pb-2 text-right font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id} className="border-b border-gray-50 last:border-0">
              <td className="py-3 text-gray-500">
                {new Date(txn.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </td>
              <td className="py-3 text-gray-900">{txn.description}</td>
              <td className="py-3 text-gray-500">{txn.category}</td>
              <td
                className={`py-3 text-right font-medium ${
                  txn.type === "income" ? "text-emerald-600" : "text-gray-900"
                }`}
              >
                {txn.type === "income" ? "+" : "-"}$
                {txn.amount.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </td>
              <td className="py-3 text-right">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentTransactions;
