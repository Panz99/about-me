import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Menu } from "semantic-ui-react";
import LanguageSelector from "./LanguageSelector";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  const { t } = useTranslation();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <Menu id="navbar" fixed="top" secondary>
      {!isTabletOrMobile && (
        <>
          <Menu.Item>
            <Link
              to="home"
              activeClass="active"
              duration={200}
              containerId="content"
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
              containerId="content"
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
              containerId="content"
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
              containerId="content"
              smooth={true}
              spy={true}
            >
              {t("contacts")}
            </Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
}
