import React from "react";
import Welcome from "./Welcome"
import Details from "./Details"
import Skills from "./Skills"
import "../../styles/About.css";

const About = () => {
  return (
    <main>
      <section className="welcome">
          <Welcome />
      </section>
      <section className="details">
          <Details />
      </section>
      <section className="skills">
          <Skills />
      </section>
    </main>

  );
};

export default About;
