import { create } from "zustand";
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

export const useTransactionStore = create<TransactionState>((set, get) => ({
  transactions: null,
  isLoading: false,
  error: null,

  fetchTransactions: async () => {
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
    set((state) => ({
      transactions: state.transactions
        ? [transaction, ...state.transactions]
        : [transaction],
    }));
  },

  editTransaction: (id, updates) => {
    set((state) => ({
      transactions: state.transactions?.map((txn) =>
        txn.id === id ? { ...txn, ...updates } : txn,
      ) ?? null,
    }));
  },
}));
