import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchJson } from "../services/api";
import type { Transaction } from "../types/transaction";

interface TransactionState {
  transactions: Transaction[] | null;
  isLoading: boolean;
  error: string | null;
  fetchTransactions: () => Promise<void>;
  addTransaction: (transaction: Transaction) => void;
  editTransaction: (id: string, updates: Partial<Transaction>) => void;
}

// Zustand with persist middleware auto-syncs to localStorage
export const useTransactionStore = create<TransactionState>()(
  persist(
    (set, get) => ({
      transactions: null,
      isLoading: false,
      error: null,

      fetchTransactions: async () => {
        // Skip if already loaded
        if (get().transactions) return;

        set({ isLoading: true, error: null });

        const response = await fetchJson<Transaction[]>("/data/transactions.json");

        if (response.status === "success") {
          set({ transactions: response.data, isLoading: false });
        } else {
          set({
            error: response.error ?? "Failed to load transactions",
            isLoading: false,
          });
        }
      },

      addTransaction: (transaction) => {
        // Prepend new transactions so newest appears first
        set((state) => ({
          transactions: state.transactions
            ? [transaction, ...state.transactions]
            : [transaction],
        }));
      },

      editTransaction: (id, updates) => {
        // Update by ID with immutable spread pattern
        set((state) => ({
          transactions: state.transactions?.map((txn) =>
            txn.id === id ? { ...txn, ...updates } : txn,
          ) ?? null,
        }));
      },
    }),
    { name: "transactions" },
  ),
);
