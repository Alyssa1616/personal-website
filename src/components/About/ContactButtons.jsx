import React from 'react';
import "../../styles/ContactButtons.css";

const ContactButtons = () => {
  return (
    <div className="buttons-container">
      <a href="https://www.linkedin.com/in/alyssa-feinberg-23a38b2a8" className="button linkedin-button" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href="mailto:alyssa_feinberg@brown.edu" className="button email-button">
        Email Me
      </a>
      <a href="/Alyssa Feinberg Resume - 2024.pdf" className="button download-button" download>
        Download Resume
      </a>
    </div>
  );
};

export default ContactButtons;