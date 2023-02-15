import React from "react";
import { useTranslation } from "react-i18next";
//import { Menu } from "semantic-ui-react";
//import LanguageSelector from "./LanguageSelector";
import { scroller, animateScroll } from "react-scroll";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import logo from "../images/logo.jpg";
import { classNames } from "primereact/utils";
import {
  ScrollDirection,
  useScrollDirection,
} from "../hooks/useScrollDirection";
import "../style/navbar.css";
import { Language } from "../translations/i18n";

export default function Navbar() {
  const scrollDir = useScrollDirection({ threshold: 100 });

  const { t, i18n } = useTranslation();

  const items = [
    {
      label: t("about"),
      command: () =>
        scroller.scrollTo("about", {
          duration: 200,
          smooth: true,
          spy: true,
        }),
    },
    {
      label: t("projects"),
      command: () =>
        scroller.scrollTo("projects", {
          duration: 200,
          smooth: true,
          spy: true,
        }),
    },
    {
      label: t("experience"),
      command: () =>
        scroller.scrollTo("experiences", {
          duration: 200,
          smooth: true,
          spy: true,
        }),
    },
    {
      label: t("contacts"),
      command: () =>
        scroller.scrollTo("contacts", {
          duration: 200,
          smooth: true,
          spy: true,
        }),
    },
  ];
  const otherLang = i18n.language == Language.EN ? Language.IT : Language.EN;
  return (
    <Menubar
      id="navbar"
      start={
        <Image
          src={logo}
          alt="Logo"
          width="50"
          height="50"
          style={{ height: 50, display: "block" }}
          onClick={() =>
            animateScroll.scrollToTop({
              duration: 200,
              smooth: true,
              spy: true,
            })
          }
        />
      }
      model={items}
      className={classNames({
        scrollUp: scrollDir == ScrollDirection.up,
        scrollDown: scrollDir == ScrollDirection.down,
      })}
      end={
        <Button
          label={otherLang.toUpperCase()}
          className="p-button-outlined p-2 border-2"
          onClick={() => i18n.changeLanguage(otherLang)}
        />
      }
    />
  );
}
