import React from "react";
import { HideScroll } from "react-hide-on-scroll";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { Button, Menu, Sidebar } from "semantic-ui-react";
import LanguageSelectorInline from "./LanguageSelectorInline";

export default function VerticalBar(props: {
  visible: boolean;
  setVisible: (b: boolean) => void;
}) {
  const { t } = useTranslation();
  return (
    <>
      <HideScroll variant="down">
        <Button
          id="hamburgerBtn"
          icon={"bars"}
          size="huge"
          onClick={() => props.setVisible(!props.visible)}
        />
      </HideScroll>
      <Sidebar
        id="sidebar"
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={() => props.setVisible(false)}
        vertical
        visible={props.visible}
      >
        <Menu.Item style={{ padding: "2.15rem 0", fontSize: 26 }}>
          Giacomo Sassaro
        </Menu.Item>
        <Menu.Item>
          <Link
            onClick={() => props.setVisible(false)}
            to="home"
            activeClass="active"
            duration={200}
            //containerId="content"
            smooth={true}
            spy={true}
          >
            {t("home")}
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            onClick={() => props.setVisible(false)}
            to="projects"
            activeClass="active"
            duration={200}
            //containerId="content"
            smooth={true}
            spy={true}
          >
            {t("projects")}
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            onClick={() => props.setVisible(false)}
            to="experiences"
            activeClass="active"
            duration={200}
            //containerId="content"
            smooth={true}
            spy={true}
          >
            {t("experience")}
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            onClick={() => props.setVisible(false)}
            to="contacts"
            activeClass="active"
            duration={200}
            //containerId="content"
            smooth={true}
            spy={true}
          >
            {t("contacts")}
          </Link>
        </Menu.Item>
        <div style={{ marginTop: 18 }}>
          <LanguageSelectorInline />
        </div>
        <small
          style={{
            color: "#f5f3f5",
            position: "absolute",
            bottom: 5,
            left: 70,
          }}
        >
          © Giacomo Sassaro
        </small>
      </Sidebar>
    </>
  );
}
