import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./translations/i18n";
import "semantic-ui-css/semantic.min.css";
import "./style/style.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
