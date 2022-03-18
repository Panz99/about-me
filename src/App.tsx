import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import Contacts from "./components/Contacts";
import Experiences from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { PARTICLES_OPTS } from "./const";
import Bottombar from "./components/Bottombar";
import { ISourceOptions } from "tsparticles";
import Particles from "react-tsparticles";
import VerticalBar from "./components/VerticalBar";
import LanguageSelector from "./components/LanguageSelector";
import { useMediaQuery } from "react-responsive";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <>
      <LanguageSelector />
      {!isTabletOrMobile && <Navbar />}
      {isTabletOrMobile && (
        <VerticalBar visible={sidebarVisible} setVisible={setSidebarVisible} />
      )}
      <Container name="container" id="content">
        <Home />
        <Projects />
        <Experiences />
        <Contacts />
      </Container>
      {!isTabletOrMobile && <Bottombar />}
      <Particles id="tsparticles" options={PARTICLES_OPTS as ISourceOptions} />
    </>
  );
}

export default App;
