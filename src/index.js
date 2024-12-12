import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './i18n'; // Importa a configuração do i18next
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
