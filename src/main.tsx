import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeProvider from "./context/ThemeProvider";
import RoleProvider from "./context/RoleProvider";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RoleProvider>
        <App />
      </RoleProvider>
    </ThemeProvider>
  </StrictMode>,
);
