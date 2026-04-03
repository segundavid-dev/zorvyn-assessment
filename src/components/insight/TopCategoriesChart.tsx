import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import type { CategoryBreakdown } from "../../types/insights";

interface TopCategoriesChartProps {
  data: CategoryBreakdown[];
}

const COLORS = [
  "#ef4444",
  "#8b5cf6",
  "#f97316",
  "#14b8a6",
  "#3b82f6",
  "#ec4899",
];

function TopCategoriesChart({ data }: TopCategoriesChartProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
        Top Spending Categories
      </h3>
      <div className="mt-4">
        <ResponsiveContainer width="100%" height={288}>
          <BarChart data={data} layout="vertical" barCategoryGap="20%">
            <XAxis
              type="number"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `$${v}`}
            />
            <YAxis
              type="category"
              dataKey="category"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
              width={110}
            />
            <Tooltip
              formatter={(value) => [`$${Number(value).toLocaleString()}`, "Amount"]}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                fontSize: "13px",
              }}
            />
            <Bar dataKey="amount" radius={[0, 4, 4, 0]}>
              {data.map((_entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TopCategoriesChart;
