import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { LangProvider } from "./context/LangContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <LangProvider>
    <App />
  </LangProvider>
);
