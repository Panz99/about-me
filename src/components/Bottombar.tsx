import React from "react";
import { Menu } from "semantic-ui-react";

export default function Bottombar() {
  return (
    <Menu id="bottombar" fixed="bottom" inverted secondary>
      <Menu.Item>@Giacomo Sassaro</Menu.Item>
      {/* <Menu.Item>
        <Button color="facebook" icon="facebook" size="mini" />
      </Menu.Item> */}
    </Menu>
  );
}
