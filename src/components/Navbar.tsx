import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
//import { Menu } from "semantic-ui-react";
//import LanguageSelector from "./LanguageSelector";
import { scroller, animateScroll } from "react-scroll";
import { Menubar } from "primereact/menubar";
import { Image } from "primereact/image";
import logo from "../images/logo.jpg";
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
  const [sticked, setSticked] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      console.log(window.scrollY);
      if (window.scrollY >= 100) {
        setSticked(true);
      } else {
        setSticked(false);
      }
    };
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  });
  const { t } = useTranslation();

  return (
    <Menubar
      start={<Image src={logo} alt="Logo" width="50" height="50" />}
      model={items}
      className={`fixed top-0 w-full border-none border-noround justify-content-between ${
        !sticked ? "bg-white-alpha-10" : "bg-blue-500"
      }`}
    />
  );
}
