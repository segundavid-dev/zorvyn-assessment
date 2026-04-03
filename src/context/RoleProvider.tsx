import { useState, useCallback, type ReactNode } from "react";
import type { Role } from "../types/role";
import { RoleContext } from "./RoleContext";

interface RoleProviderProps {
  children: ReactNode;
}

function RoleProvider({ children }: RoleProviderProps) {
  const [role, setRoleState] = useState<Role>(() => {
    const stored = localStorage.getItem("role");
    if (stored === "admin" || stored === "viewer") return stored;
    return "viewer";
  });

  const setRole = useCallback((newRole: Role) => {
    setRoleState(newRole);
    localStorage.setItem("role", newRole);
  }, []);

  return (
    <RoleContext value={{ role, setRole }}>
      {children}
    </RoleContext>
  );
}

export default RoleProvider;
