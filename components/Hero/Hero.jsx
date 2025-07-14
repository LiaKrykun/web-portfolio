import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="home" className="hero">
      <div className="hero-text">
        <h1>hi! my name is Lia Krykun</h1>
        <p>Front-End</p>
        <p>Web Developer</p>
      </div>
      <div className="hero-action">
        <div className="hero-projects">
          <AnchorLink href="#projects">My projects</AnchorLink>
        </div>
      </div>
    </div>
  );
}

export default Hero;
