import React from "react";
import { Image } from "react-bootstrap";
import profilePic from "../../assets/afeinberg.jpg";
import "../../styles/AboutCard.css";

const AboutCard = () => {
  return (
    <section className="aboutcard-section">
      
      
      <div className="about-circle ac1" />
      <div className="about-circle ac2" />
      <div className="about-circle ac3" />
      <div className="aboutcard-pic-wrap">
        <div className="aboutcard-glow" />
        <Image src={profilePic} className="aboutcard-pic" />
      </div>
      <div className="aboutcard-text">
        <span className="aboutcard-eyebrow">Get to know me</span>
        <h2 className="aboutcard-heading">About Me</h2>
        <p className="aboutcard-body">
I'm a rising senior at Brown studying CS, currently interning at Google on the YouTube Music Podcasts team. My work has also included research on AI-powered educational tools and large language models.
On campus, I’m the Co-President of the Brown University Women in Computer Science club and have been a TA for intro programming and data structures courses.
In my free time, I love singing, listening to music, reading mystery novels, and curling!
        </p>
      </div>
    </section>
  );
};

export default AboutCard;