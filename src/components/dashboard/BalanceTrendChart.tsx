import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { BalanceTrendPoint } from "../../types/dashboard";
import { formatDollar } from "../../utils/currencyFormat";
import { SEMANTIC_COLORS } from "../../constants/chart-colors";

interface BalanceTrendChartProps {
  data: BalanceTrendPoint[];
}

function BalanceTrendChart({ data }: BalanceTrendChartProps) {
  // Area chart: income, expenses, balance over time
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
        Balance Trend
      </h3>
      <div className="mt-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 5, right: 5, left: -10, bottom: 0 }}
          >
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
            <Area
              type="monotone"
              dataKey="income"
              stroke={SEMANTIC_COLORS.income}
              fill={SEMANTIC_COLORS.income}
              fillOpacity={0.1}
              strokeWidth={2}
              name="Income"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke={SEMANTIC_COLORS.expenses}
              fill={SEMANTIC_COLORS.expenses}
              fillOpacity={0.1}
              strokeWidth={2}
              name="Expenses"
            />
            <Area
              type="monotone"
              dataKey="balance"
              stroke={SEMANTIC_COLORS.balance}
              fill={SEMANTIC_COLORS.balance}
              fillOpacity={0.08}
              strokeWidth={2}
              name="Balance"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BalanceTrendChart;
