import React from "react";
import Welcome from "./Welcome";
import AboutCard from "./AboutCard";
import Details from "./Details";
import Skills from "./Skills";
import "../../styles/About.css";
import useScrollFade from "../useScrollFade";

const About = () => {
  useScrollFade();
  return (
    <main>
      <div className="page-wrapper">
        <Welcome />
        <div className="fade-in-section">
          <AboutCard />
        </div>
        <div className="hero-about-circle" />
        <div className="about-details-circle" />
      </div>
      <div className="fade-in-section">
        <Details />
      </div>
      <div className="fade-in-section">
        <Skills />
      </div>
    </main>
  );
};

export default About;