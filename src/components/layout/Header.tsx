import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon02Icon, PanelLeftOpenIcon } from "@hugeicons/core-free-icons";
import { useTheme } from "../../hooks/useTheme";
import { useRole } from "../../hooks/useRole";
import type { Role } from "../../types/role";

interface HeaderProps {
  onMenuToggle?: () => void;
}

function Header({ onMenuToggle }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const { role, setRole } = useRole();

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 px-6 dark:border-gray-700 dark:bg-gray-900">
      {onMenuToggle ? (
        <button
          onClick={onMenuToggle}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 cursor-pointer"
        >
          <HugeiconsIcon icon={PanelLeftOpenIcon} size={18} />
        </button>
      ) : (
        <div />
      )}
      <div className="flex items-center gap-3">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
          className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-xs font-medium text-gray-600 outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
        <button
          onClick={toggleTheme}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 cursor-pointer"
        >
          <HugeiconsIcon
            icon={theme === "light" ? Moon02Icon : Sun01Icon}
            size={18}
          />
        </button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
          S
        </div>
      </div>
    </header>
  );
}

export default Header;
