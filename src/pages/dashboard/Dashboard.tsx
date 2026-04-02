import {
  Wallet01Icon,
  MoneyReceive01Icon,
  MoneySend01Icon,
} from "@hugeicons/core-free-icons";
import { useDashboardStore } from "../../stores/dashboardStore";
import SummaryCard from "../../components/dashboard/SummaryCard";
import BalanceTrendChart from "../../components/dashboard/BalanceTrendChart";
import SpendingBreakdownChart from "../../components/dashboard/SpendingBreakdownChart";
import RecentTransactions from "../../components/dashboard/RecentTransactions";

function Dashboard() {
  const { data, isLoading, error, fetchDashboard } = useDashboardStore();
  fetchDashboard();

  if (isLoading) {
    return <p className="text-gray-500">Loading dashboard...</p>;
  }

  if (error || !data) {
    return <p className="text-red-500">{error}</p>;
  }

  const { summary, balanceTrend, spendingBreakdown, recentTransactions } = data;

  return (
    <div>
      <h1 className="font-serif text-3xl text-gray-900">Dashboard</h1>
      <p className="mt-1 text-sm text-gray-500">
        Your financial overview at a glance.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
        <SummaryCard
          label={summary.totalBalance.label}
          value={summary.totalBalance.value}
          change={summary.totalBalance.change}
          icon={Wallet01Icon}
        />
        <SummaryCard
          label={summary.income.label}
          value={summary.income.value}
          change={summary.income.change}
          icon={MoneyReceive01Icon}
        />
        <SummaryCard
          label={summary.expenses.label}
          value={summary.expenses.value}
          change={summary.expenses.change}
          icon={MoneySend01Icon}
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <BalanceTrendChart data={balanceTrend} />
        <SpendingBreakdownChart data={spendingBreakdown} />
      </div>

      <div className="mt-5">
        <RecentTransactions transactions={recentTransactions} />
      </div>
    </div>
  );
}

export default Dashboard;
