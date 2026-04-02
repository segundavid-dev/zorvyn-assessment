import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-60">
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
