import { create } from "zustand";
import { fetchJson } from "../services/api";
import type {
  DashboardSummary,
  BalanceTrendPoint,
  SpendingCategory,
} from "../types/dashboard";
import type { Transaction } from "../types/transaction";

interface DashboardData {
  summary: DashboardSummary;
  balanceTrend: BalanceTrendPoint[];
  spendingBreakdown: SpendingCategory[];
  recentTransactions: Transaction[];
}

interface DashboardState {
  data: DashboardData | null;
  isLoading: boolean;
  error: string | null;
  fetchDashboard: () => Promise<void>;
}

export const useDashboardStore = create<DashboardState>((set, get) => ({
  data: null,
  isLoading: false,
  error: null,

  fetchDashboard: async () => {
    if (get().data) return;

    set({ isLoading: true, error: null });

    const response = await fetchJson<DashboardData>("/data/dashboard.json");

    if (response.status === "success") {
      set({ data: response.data, isLoading: false });
    } else {
      set({
        error: response.error ?? "Failed to load dashboard data",
        isLoading: false,
      });
    }
  },
}));
