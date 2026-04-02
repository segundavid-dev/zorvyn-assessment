export interface SummaryCardData {
  label: string;
  value: number;
  change: number;
}

export interface DashboardSummary {
  totalBalance: SummaryCardData;
  income: SummaryCardData;
  expenses: SummaryCardData;
}

export interface BalanceTrendPoint {
  month: string;
  income: number;
  expenses: number;
  balance: number;
}

export interface SpendingCategory {
  category: string;
  amount: number;
}
