import React from "react";
import { Element } from "react-scroll";
import "../style/home.css";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="section home">
      <p className="text-primary intro font-medium">Hi, my name is</p>
      <h1 className="m-0 mb-1 text-color title">Giacomo Sassaro.</h1>
      <h2 className="subtitle m-0 text-color-secondary">
        Front end & App developer
      </h2>
      <p className="mt-4 max-w-30rem desc text-color-secondary mt-0">
        I like to craft solid and scalable products with great user experience.
        Currently working at{" "}
        <a href="https://datasoil.it/" className="text-primary no-underline">
          Datasoil
        </a>
        .
      </p>
    </div>
  );
}
