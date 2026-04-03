export function formatCurrency(amount: number): string {
  return amount.toLocaleString("en-US", { minimumFractionDigits: 2 });
}

export function formatDollar(value: number | string): string {
  return `$${Number(value).toLocaleString()}`;
}
