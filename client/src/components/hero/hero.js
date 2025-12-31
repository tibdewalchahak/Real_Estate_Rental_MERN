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

      <div className="infoRow">
        <div className="about">
          <About />
        </div>

        <div className="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Hero;
