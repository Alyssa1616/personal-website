import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import "../../styles/Details.css";
import ContactButtons from "./ContactButtons";

const Details = () => {
    return (
      <div className="details-page">
        <h1>About Me!</h1>
        <p>
        Emphasize education. I am an experienced researcher and developer with a strong background in computer science and linguistics. Currently, I work with Professor Andy van Dam's graphics research group on Dash, a web-based application sponsored by Adobe. My research at Boston University focuses on analyzing large language models. I am extremely passionate about promoting multilingualism and empowering women in STEM. Through my work with the LEX Language Project and as the Technovation Girls Chapter President, I have led initiatives that foster diversity and inclusion in technology and education.
        </p>
        <p>In my free time, I love singing and listening to music, reading (especially murder mysteries!), and curling. I especially enjoy taking aimless walks and traveling.</p>
        <ContactButtons/>
      </div>
    );
  };
  
export default Details;