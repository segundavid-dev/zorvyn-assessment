import { useState } from "react";
import type {
  Transaction,
  TransactionType,
  TransactionCategory,
  TransactionStatus,
} from "../../types/transaction";
import { CATEGORIES } from "../../constants/categories";
import Button from "../ui/button";

interface TransactionModalProps {
  transaction?: Transaction;
  onSave: (transaction: Transaction) => void;
  onClose: () => void;
}

function TransactionModal({ transaction, onSave, onClose }: TransactionModalProps) {
  // Determines if we're editing (true) or adding (false)
  const isEditing = !!transaction;

  // Form init with defaults for add mode, existing values for edit mode
  const [form, setForm] = useState({
    description: transaction?.description ?? "",
    amount: transaction?.amount?.toString() ?? "",
    type: (transaction?.type ?? "expense") as TransactionType,
    category: (transaction?.category ?? "Food & Dining") as TransactionCategory,
    status: (transaction?.status ?? "completed") as TransactionStatus,
    date: transaction?.date ?? new Date().toISOString().split("T")[0],
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const saved: Transaction = {
      id: transaction?.id ?? `txn-${Date.now()}`,
      description: form.description,
      amount: parseFloat(form.amount),
      type: form.type,
      category: form.category,
      status: form.status,
      date: form.date,
    };

    onSave(saved);
  }

  const inputStyles =
    "w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-gray-500";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900" onClick={(e) => e.stopPropagation()}>
        <h2 className="font-serif text-xl text-gray-900 dark:text-white">
          {isEditing ? "Edit Transaction" : "Add Transaction"}
        </h2>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400">
              Description
            </label>
            <input
              type="text"
              required
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className={inputStyles}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400">
                Amount
              </label>
              <input
                type="number"
                required
                min="0.01"
                step="0.01"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                className={inputStyles}
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400">
                Date
              </label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className={inputStyles}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400">
                Type
              </label>
              <select
                value={form.type}
                onChange={(e) =>
                  setForm({ ...form, type: e.target.value as TransactionType })
                }
                className={inputStyles}
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400">
                Status
              </label>
              <select
                value={form.status}
                onChange={(e) =>
                  setForm({ ...form, status: e.target.value as TransactionStatus })
                }
                className={inputStyles}
              >
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400">
              Category
            </label>
            <select
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value as TransactionCategory })
              }
              className={inputStyles}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" size="sm" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button size="sm" type="submit">
              {isEditing ? "Save Changes" : "Add Transaction"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TransactionModal;
