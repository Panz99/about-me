import React, { useState } from "react";
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
import { useMediaQuery } from "react-responsive";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <>
      {!isTabletOrMobile && (
        <>
          <Navbar />
          <Bottombar />
        </>
      )}
      {isTabletOrMobile && (
        <VerticalBar visible={sidebarVisible} setVisible={setSidebarVisible} />
      )}
      <Home />
      <Projects />
      <Experiences />
      <Contacts />
      <Particles id="tsparticles" options={PARTICLES_OPTS as ISourceOptions} />
    </>
  );
}

export default App;
