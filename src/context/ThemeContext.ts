import { createContext } from "react";
import type { ThemeContextType } from "../types/theme";

// Context for light/dark mode
export const ThemeContext = createContext<ThemeContextType | null>(null);
