import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import type { SpendingCategory } from "../../types/dashboard";

interface SpendingBreakdownChartProps {
  data: SpendingCategory[];
}

const COLORS = [
  "#ef4444",
  "#8b5cf6",
  "#f97316",
  "#14b8a6",
  "#3b82f6",
  "#ec4899",
];

function SpendingBreakdownChart({ data }: SpendingBreakdownChartProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
        Spending Breakdown
      </h3>
      <div className="mt-4 flex flex-col">
        <div className="mx-auto h-52 w-52">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="amount"
                nameKey="category"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                strokeWidth={2}
              >
                {data.map((_entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [
                  `$${Number(value).toLocaleString()}`,
                  "",
                ]}
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  fontSize: "13px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex flex-row flex-wrap justify-center gap-x-5 gap-y-2 self-stretch">
          {data.map((item, index) => (
            <div
              key={item.category}
              className="flex items-center gap-1.5 text-sm"
            >
              <span
                className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="whitespace-nowrap text-gray-600 dark:text-gray-400">
                {item.category}
              </span>
              <span className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                ${item.amount.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpendingBreakdownChart;
