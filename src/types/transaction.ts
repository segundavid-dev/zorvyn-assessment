export type TransactionType = "income" | "expense";

export type TransactionCategory =
  | "Food & Dining"
  | "Transportation"
  | "Shopping"
  | "Bills & Utilities"
  | "Entertainment"
  | "Healthcare"
  | "Income/Salary"
  | "Freelance";

export type TransactionStatus = "completed" | "pending" | "failed";

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  status: TransactionStatus;
}
