export interface CategoryBreakdown {
  category: string;
  amount: number;
  percentage: number;
  transactionCount: number;
}

export interface MonthlyTrend {
  month: string;
  income: number;
  expenses: number;
  savings: number;
}

export interface InsightsData {
  topCategories: CategoryBreakdown[];
  monthlyTrends: MonthlyTrend[];
  averageMonthlySpend: number;
  averageMonthlyIncome: number;
}
