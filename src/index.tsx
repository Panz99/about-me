import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./translations/i18n";
import "./style/style.css";
import "./style/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
