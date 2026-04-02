import { createBrowserRouter } from "react-router";
import DashboardLayout from "../components/layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Transactions from "../pages/transactions/Transactions";
import Insights from "../pages/insights/Insights";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "transactions", element: <Transactions /> },
      { path: "insights", element: <Insights /> },
    ],
  },
]);

export default router;
