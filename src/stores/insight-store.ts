import { create } from "zustand";
import { fetchJson } from "../services/api";
import type { InsightsData } from "../types/insights";

// Insights: highest category, monthly comparison, top spending categories
interface InsightState {
  data: InsightsData | null;
  isLoading: boolean;
  error: string | null;
  fetchInsights: () => Promise<void>;
}

export const useInsightStore = create<InsightState>((set, get) => ({
  data: null,
  isLoading: false,
  error: null,

  fetchInsights: async () => {
    if (get().data) return;

    set({ isLoading: true, error: null });

    const response = await fetchJson<InsightsData>("/data/insights.json");

    if (response.status === "success") {
      set({ data: response.data, isLoading: false });
    } else {
      set({
        error: response.error ?? "Failed to load insights",
        isLoading: false,
      });
    }
  },
}));
