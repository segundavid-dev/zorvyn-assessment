// Format as "1,234.56" always 2 decimals for financial amounts
export function formatCurrency(amount: number): string {
  return amount.toLocaleString("en-US", { minimumFractionDigits: 2 });
}

// Format as "$1,234" for chart tooltips
export function formatDollar(value: number | string): string {
  return `$${Number(value).toLocaleString()}`;
}
