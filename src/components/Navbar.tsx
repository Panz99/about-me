import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
//import { Menu } from "semantic-ui-react";
//import LanguageSelector from "./LanguageSelector";
import { scroller, animateScroll } from "react-scroll";
import { Menubar } from "primereact/menubar";
import { Image } from "primereact/image";
import logo from "../images/logo.jpg";
import { classNames } from "primereact/utils";
import {
  ScrollDirection,
  useScrollDirection,
} from "../hooks/useScrollDirection";
import "../style/navbar.css";
const items = [
  {
    label: "Home",
    icon: "pi pi-fw pi-file",
    command: () =>
      animateScroll.scrollToTop({
        duration: 200,
        smooth: true,
        spy: true,
      }),
  },
  {
    label: "Projects",
    icon: "pi pi-fw pi-pencil",
    command: () =>
      scroller.scrollTo("projects", { duration: 200, smooth: true, spy: true }),
  },
  {
    label: "Experiences",
    icon: "pi pi-fw pi-user",
    command: () =>
      scroller.scrollTo("experiences", {
        duration: 200,
        smooth: true,
        spy: true,
      }),
  },
  {
    label: "Contacts",
    icon: "pi pi-fw pi-calendar",
    command: () =>
      scroller.scrollTo("contacts", { duration: 200, smooth: true, spy: true }),
  },
];
export default function Navbar() {
  const scrollDir = useScrollDirection({ threshold: 100 });

  const { t } = useTranslation();

  return (
    <Menubar
      id="navbar"
      start={<Image src={logo} alt="Logo" width="50" height="50" />}
      model={items}
      className={classNames({
        scrollUp: scrollDir == ScrollDirection.up,
        scrollDown: scrollDir == ScrollDirection.down,
      })}
    />
  );
}
