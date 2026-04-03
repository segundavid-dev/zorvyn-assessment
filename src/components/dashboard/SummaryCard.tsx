import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import { formatCurrency } from "../../utils/currencyFormat";

interface SummaryCardProps {
  label: string;
  value: number;
  change: number;
  icon: IconSvgElement;
}

function SummaryCard({ label, value, change, icon }: SummaryCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</span>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
          <HugeiconsIcon icon={icon} size={18} className="text-gray-600 dark:text-gray-400" />
        </div>
      </div>
      <p className="mt-3 font-serif text-2xl text-gray-900 dark:text-white">
        ${formatCurrency(value)}
      </p>
      <p className={`mt-1 text-xs font-medium ${isPositive ? "text-emerald-600" : "text-red-500"}`}>
        {isPositive ? "+" : ""}{change}% from last month
      </p>
    </div>
  );
}

export default SummaryCard;
