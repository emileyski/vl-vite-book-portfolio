import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NotebookProvider } from "./Contexts/NotebookContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotebookProvider>
      <App />
    </NotebookProvider>
  </React.StrictMode>
);
