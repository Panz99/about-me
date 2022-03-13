import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="app">
      <Navbar />
      <h1>My Site</h1>
      <h3>{t("contacts")}</h3>
      <input
        type="button"
        onClick={() => {
          console.log("onclick");
          if (i18n.language === "it") i18n.changeLanguage("en");
          else i18n.changeLanguage("it");
        }}
        value={i18n.language}
      />
    </div>
  );
}

export default App;
