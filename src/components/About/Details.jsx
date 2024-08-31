import React from "react";
import "../../styles/Details.css";
import ContactButtons from "./ContactButtons";

const Details = () => {
    return (
      <div className="details-page">
        <h1>About Me!</h1>
        <p>
        I am currently a research assistant in Professor Andy van Dam’s Graphics Lab, developing AI-driven learning tools for Dash, a web-based application sponsored by Adobe for interacting with and analyzing multimedia documents.
        I am also conducting research with Dr. Najoung Kim in Boston University’s Department of Computer Science and Linguistics to evaluate large language models’ ability to track the state changes of entities across discourse.
        In addition I am a teaching assistant for Brown’s Introduction to Object-Oriented Programming and Computer Science course and serve as the Technology Chair of the Brown University Women in Computer Science organization.
        </p>
        <p>
        In the past, I was president of my local Technovation Girls chapter,
        where I developed several apps to address issues in the community, including two apps that assist with language acquisition.
        In addition, I led teams of young women to create their own apps, and organized workshops to teach club members coding.
        I also worked as an intern at the LEX Language Project, where I helped redesign their website to increase accessibility and inclusivity.   
        </p>
        <p>In my free time, I love to sing, listen to music, and read (especially mysteries!).
            I also enjoy taking aimless walks, traveling, and curling!</p>
        <ContactButtons/>
      </div>
    );
  };
  
export default Details;