import React, { useState } from "react";
import Contacts from "./components/Contacts";
import Experiences from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
//import Bottombar from "./components/Bottombar";
//import VerticalBar from "./components/VerticalBar";
import { useMediaQuery } from "react-responsive";
import About from "./components/About";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div className="flex flex-column">
      <Navbar />
      {/* {!isTabletOrMobile && (
        <>
          <Navbar />
          {/* <Bottombar /> 
        </>
       {isTabletOrMobile && (
        <VerticalBar visible={sidebarVisible} setVisible={setSidebarVisible} />
      )} */}
      <Home />
      <About />
      <Projects />
      <Experiences />
      <Contacts />
    </div>
  );
}

export default App;
