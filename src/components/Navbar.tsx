import React from "react";
import { useTranslation } from "react-i18next";
import { Menu } from "semantic-ui-react";
import LanguageSelector from "./LanguageSelector";
import { Link } from "react-scroll";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <Menu id="navbar" fixed="top" secondary>
      <Menu.Item>
        <Link
          to="home"
          activeClass="active"
          duration={200}
          //offset={-70}
          smooth={true}
          spy={true}
        >
          {t("home")}
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="projects"
          activeClass="active"
          duration={200}
          //offset={-70}
          smooth={true}
          spy={true}
        >
          {t("projects")}
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="experiences"
          activeClass="active"
          duration={200}
          //offset={-70}
          smooth={true}
          spy={true}
        >
          {t("experience")}
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="contacts"
          activeClass="active"
          duration={200}
          //offset={-70}
          smooth={true}
          spy={true}
        >
          {t("contacts")}
        </Link>
      </Menu.Item>
      <LanguageSelector />
    </Menu>
  );
}
