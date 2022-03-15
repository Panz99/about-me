import React from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "semantic-ui-react";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  return (
    <Dropdown
      id="languageSelector"
      selection
      compact
      value={i18n.language}
      options={[
        { text: "IT", value: "it" },
        { text: "EN", value: "en" },
      ]}
      onChange={(_, data) => {
        if (data.value !== i18n.language)
          i18n.changeLanguage(data.value as string);
      }}
    ></Dropdown>
  );
}
