import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { Button, Menu, Sidebar } from "semantic-ui-react";

export default function VerticalBar(props: {
  visible: boolean;
  setVisible: (b: boolean) => void;
}) {
  const { t } = useTranslation();
  return (
    <>
      {
        <Button
          id="hamburgerBtn"
          icon={"bars"}
          size="huge"
          onClick={() => props.setVisible(!props.visible)}
        />
      }
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
            offset={-55}
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
            onClick={() => props.setVisible(false)}
            to="projects"
            offset={-55}
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
            onClick={() => props.setVisible(false)}
            offset={-55}
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
            onClick={() => props.setVisible(false)}
            to="contacts"
            offset={-55}
            activeClass="active"
            duration={200}
            containerId="content"
            smooth={true}
            spy={true}
          >
            {t("contacts")}
          </Link>
        </Menu.Item>
      </Sidebar>
    </>
  );
}
