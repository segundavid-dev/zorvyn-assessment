import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";

interface InsightCardProps {
  title: string;
  value: string;
  description: string;
  icon: IconSvgElement;
}

function InsightCard({ title, value, description, icon }: InsightCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">{title}</span>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100">
          <HugeiconsIcon icon={icon} size={18} className="text-gray-600" />
        </div>
      </div>
      <p className="mt-3 font-serif text-2xl text-gray-900">{value}</p>
      <p className="mt-1 text-xs text-gray-500">{description}</p>
    </div>
  );
}

export default InsightCard;
