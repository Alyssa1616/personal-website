import React from "react";
import Welcome from "./Welcome";
import AboutCard from "./AboutCard";
import Details from "./Details";
import Skills from "./Skills";
import "../../styles/About.css";

const About = () => {
  return (
    <main>
      <div className="page-wrapper">
        <Welcome />
        <AboutCard />
        <div className="hero-about-circle" />
        <div className="about-details-circle" />
      </div>
      <Details />
      <Skills />
    </main>
  );
};

export default About;
