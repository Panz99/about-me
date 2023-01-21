import React from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonGroup } from "semantic-ui-react";

export default function LanguageSelectorInline() {
  const { i18n } = useTranslation();
  return (
    <ButtonGroup id="languageSelectorInline">
      <Button
        active={"it" === i18n.language}
        size="huge"
        inverted
        onClick={() => {
          if ("it" !== i18n.language) i18n.changeLanguage("it");
        }}
      >
        IT
      </Button>
      <Button
        active={"en" === i18n.language}
        inverted
        size="huge"
        onClick={() => {
          if ("en" !== i18n.language) i18n.changeLanguage("en");
        }}
      >
        EN
      </Button>
    </ButtonGroup>
  );
}
