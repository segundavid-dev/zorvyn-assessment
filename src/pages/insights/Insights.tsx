import { useEffect } from "react";
import {
  AnalyticsUpIcon,
  MoneySend01Icon,
  MoneyReceive01Icon,
  PiggyBankIcon,
} from "@hugeicons/core-free-icons";
import { useInsightStore } from "../../stores/insight-store";
import InsightSkeleton from "../../components/skeleton/insight-skeleton";
import InsightCard from "../../components/insight/InsightCard";
import TopCategoriesChart from "../../components/insight/TopCategoriesChart";
import MonthlyComparisonChart from "../../components/insight/MonthlyComparisonChart";

function Insights() {
  const { data, isLoading, error, fetchInsights } = useInsightStore();

  useEffect(() => {
    fetchInsights();
  }, [fetchInsights]);

  if (isLoading) {
    return <InsightSkeleton />;
  }

  if (error || !data) {
    return <p className="text-red-500">{error}</p>;
  }

  const highestCategory = data.topCategories[0];
  const savingsRate = Math.round(
    ((data.averageMonthlyIncome - data.averageMonthlySpend) /
      data.averageMonthlyIncome) *
      100,
  );

  return (
    <div>
      <h1 className="font-serif text-3xl text-gray-900">Insights</h1>
      <p className="mt-1 text-sm text-gray-500">
        Understand your spending patterns.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <InsightCard
          title="Highest Spending"
          value={highestCategory.category}
          description={`$${highestCategory.amount.toLocaleString()} · ${highestCategory.percentage}% of total`}
          icon={AnalyticsUpIcon}
        />
        <InsightCard
          title="Avg. Monthly Spend"
          value={`$${data.averageMonthlySpend.toLocaleString()}`}
          description="Across all categories"
          icon={MoneySend01Icon}
        />
        <InsightCard
          title="Avg. Monthly Income"
          value={`$${data.averageMonthlyIncome.toLocaleString()}`}
          description="Salary + freelance"
          icon={MoneyReceive01Icon}
        />
        <InsightCard
          title="Savings Rate"
          value={`${savingsRate}%`}
          description="Of monthly income saved"
          icon={PiggyBankIcon}
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <TopCategoriesChart data={data.topCategories} />
        <MonthlyComparisonChart data={data.monthlyTrends} />
      </div>
    </div>
  );
}

export default Insights;
