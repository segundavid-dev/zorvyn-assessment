import { NavLink } from "react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import {
  DashboardSquare01Icon,
  TransactionIcon,
  SearchAreaIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
} from "@hugeicons/core-free-icons";

interface NavItem {
  label: string;
  path: string;
  icon: IconSvgElement;
}

// Navigation items : Dashboard, Transactions, Insights
const navItems: NavItem[] = [
  { label: "Dashboard", path: "/", icon: DashboardSquare01Icon },
  { label: "Transactions", path: "/transactions", icon: TransactionIcon },
  { label: "Insights", path: "/insights", icon: SearchAreaIcon },
];

interface SidebarProps {
  isCollapsed: boolean;
  isMobile: boolean;
  onToggle: () => void;
  onNavClick?: () => void;
}

function Sidebar({
  isCollapsed,
  isMobile,
  onToggle,
  onNavClick,
}: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-gray-200 bg-white transition-all duration-300 dark:border-gray-700 dark:bg-gray-900 ${
        isMobile
          ? isCollapsed
            ? "-translate-x-full"
            : "w-full"
          : isCollapsed
            ? "w-16"
            : "w-60"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-6">
        {!isCollapsed && (
          <h1 className="px-2 font-serif text-2xl dark:text-white">FinDash</h1>
        )}
        <button
          onClick={onToggle}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 cursor-pointer"
        >
          <HugeiconsIcon
            icon={isCollapsed ? PanelLeftOpenIcon : PanelLeftCloseIcon}
            size={18}
          />
        </button>
      </div>

      <nav className="flex-1 px-2">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                onClick={onNavClick}
                title={isCollapsed && !isMobile ? item.label : undefined}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isCollapsed && !isMobile ? "justify-center" : ""
                  } ${
                    isActive
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                  }`
                }
              >
                <HugeiconsIcon icon={item.icon} size={18} />
                {(!isCollapsed || isMobile) && <span>{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
