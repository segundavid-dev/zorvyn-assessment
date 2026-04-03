import { useState, useCallback } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function DashboardLayout() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isMobile = !useMediaQuery("(min-width: 768px)");
  const [isCollapsed, setIsCollapsed] = useState(!isDesktop);

  const toggleSidebar = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsCollapsed(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {isMobile && !isCollapsed && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity"
          onClick={closeSidebar}
        />
      )}
      <Sidebar
        isCollapsed={isCollapsed}
        isMobile={isMobile}
        onToggle={toggleSidebar}
        onNavClick={isMobile ? closeSidebar : undefined}
      />
      <div
        className={`transition-all duration-300 ${
          isMobile ? "ml-0" : isCollapsed ? "ml-16" : "ml-60"
        }`}
      >
        <Header onMenuToggle={isMobile ? toggleSidebar : undefined} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
