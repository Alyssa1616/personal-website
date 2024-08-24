import React from "react";
import "../styles/NavigationBar.css";
// import WiCS from "../assets/images/WiCS.png";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


function NavigationBar() {
  return (
    <Navbar className="navbar" expand="sm" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Alyssa Feinberg
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;