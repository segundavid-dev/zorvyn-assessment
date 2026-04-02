import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";

interface SummaryCardProps {
  label: string;
  value: number;
  change: number;
  icon: IconSvgElement;
}

function SummaryCard({ label, value, change, icon }: SummaryCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">{label}</span>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100">
          <HugeiconsIcon icon={icon} size={18} className="text-gray-600" />
        </div>
      </div>
      <p className="mt-3 font-serif text-2xl text-gray-900">
        ${value.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </p>
      <p className={`mt-1 text-xs font-medium ${isPositive ? "text-emerald-600" : "text-red-500"}`}>
        {isPositive ? "+" : ""}{change}% from last month
      </p>
    </div>
  );
}

export default SummaryCard;
