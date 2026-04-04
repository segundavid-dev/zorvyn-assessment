import { createContext } from "react";
import type { RoleContextType } from "../types/role";

// Context for global role state admin or viewer
export const RoleContext = createContext<RoleContextType | null>(null);
