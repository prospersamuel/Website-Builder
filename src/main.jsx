import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextProvider from "./Hooks/State.jsx";
import EditingContextProvider from "./Hooks/Editingcontext.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <EditingContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </EditingContextProvider>
  </ContextProvider>
);
