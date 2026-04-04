import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// Accesses theme context for toggle between light/dark
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
