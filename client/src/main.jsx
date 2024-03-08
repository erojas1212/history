import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { HistoryProvider } from "./components/HistoryContext";

const root = createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <HistoryProvider>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
      </style>
      <App />
    </HistoryProvider>
  </React.StrictMode>
);
