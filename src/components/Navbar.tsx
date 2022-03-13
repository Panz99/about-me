import React from "react";
import { useTranslation } from "react-i18next";
import { Menu } from "semantic-ui-react";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <Menu stackable fixed="top">
      <Menu.Item>{t("home")}</Menu.Item>
      <Menu.Item>{t("projects")}</Menu.Item>
      <Menu.Item>{t("experience")}</Menu.Item>
      <Menu.Item>{t("contacts")}</Menu.Item>
    </Menu>
  );
}
