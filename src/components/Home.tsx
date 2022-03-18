import React from "react";
import { Element } from "react-scroll";
import { Grid, GridColumn, Icon, Image } from "semantic-ui-react";
import "../style/home.css";

export default function Home() {
  return (
    <Element name="home" className="section home">
      <Grid columns={2} stackable centered>
        <GridColumn textAlign="center" verticalAlign="middle">
          <Image
            src="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-25.jpg"
            size="large"
            circular
          />
        </GridColumn>
        <GridColumn textAlign="center" verticalAlign="middle">
          <div>
            <h1 style={{ marginBottom: 0 }}>Giacomo Sassaro</h1>
            <p>
              <span style={{ marginRight: 20 }}>
                <Icon name="calendar" />
                17 May 1999
              </span>
              <span>
                <Icon name="map marker alternate" />
                Padova, Italy
              </span>
            </p>
            <h2
              style={{
                background: "#07beb8",
                borderRadius: 10,
                margin: 0,
                padding: "4px 8px",
              }}
            >
              Front-end developer
            </h2>
          </div>
        </GridColumn>
      </Grid>
    </Element>
  );
}
