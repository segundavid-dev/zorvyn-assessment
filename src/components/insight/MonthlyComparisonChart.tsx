import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import type { MonthlyTrend } from "../../types/insights";
import { formatDollar } from "../../utils/currencyFormat";
import { SEMANTIC_COLORS } from "../../constants/chart-colors";

interface MonthlyComparisonChartProps {
  data: MonthlyTrend[];
}

function MonthlyComparisonChart({ data }: MonthlyComparisonChartProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
        Monthly Comparison
      </h3>
      <div className="mt-4">
        <ResponsiveContainer width="100%" height={288}>
          <BarChart data={data} barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip
              formatter={(value) => [formatDollar(value as number), ""]}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                fontSize: "13px",
              }}
            />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: "12px" }}
            />
            <Bar dataKey="income" name="Income" fill={SEMANTIC_COLORS.income} radius={[4, 4, 0, 0]} />
            <Bar dataKey="expenses" name="Expenses" fill={SEMANTIC_COLORS.expenses} radius={[4, 4, 0, 0]} />
            <Bar dataKey="savings" name="Savings" fill={SEMANTIC_COLORS.savings} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MonthlyComparisonChart;
