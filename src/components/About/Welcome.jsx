import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePic from '../../assets/afeinberg.jpg';
import "../../styles/Welcome.css";

const Welcome = () => {
  return (
    <Container className="welcome-page">
      <Row className="align-items-center">
        <Col md={4} sm={12} className="text-center mb-3">
          <Image src={profilePic} className="profile-pic" />
        </Col>
        <Col md={8} sm={12}>
          <h1>Alyssa Feinberg</h1>
          <p>
            I'm a sophomore at Brown University studying Computer Science and Linguistics.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
