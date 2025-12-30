import React from "react";
import HomePage from "../../routes/homePage/homePage";
import Contact from "../Contact/contact";
import About from "../About/about";
import "./hero.scss";
const Hero = () => {
  return (
    <div className="hero">
      <div className="home">
        <HomePage />
      </div>
      <div className="about contact">
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Hero;
