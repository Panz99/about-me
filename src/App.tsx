import React from "react";
import { Container } from "semantic-ui-react";
import Contacts from "./components/Contacts";
import Experiences from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { PARTICLES_OPTS } from "./const";
import Bottombar from "./components/Bottombar";
import { ISourceOptions, Engine, Container as pContainer } from "tsparticles";
import Particles from "react-tsparticles";

function App() {
  const particlesInit = async (main: Engine) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = async (container: pContainer) => {
    console.log(container);
  };
  return (
    <>
      <Navbar />
      <Container name="container" id="content">
        <Home />
        <Projects />
        <Experiences />
        <Contacts />
      </Container>
      <Bottombar />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={PARTICLES_OPTS as ISourceOptions}
      />
    </>
  );
}

export default App;
