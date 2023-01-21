import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./translations/i18n";
import "./style/style.css";
import "primereact/resources/themes/arya-green/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
