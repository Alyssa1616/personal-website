import React from "react";
import Welcome from "./Welcome"
import Details from "./Details"
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
    </main>

  );
};

export default About;
