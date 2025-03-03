
console.log(">>> main.tsx is loaded!");

import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
