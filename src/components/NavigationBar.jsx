import React from "react";
import "../styles/NavigationBar.css";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


function NavigationBar() {
  return (
    <Navbar className="navbar" expand="sm" sticky="top">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          <span>Alyssa Feinberg</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-link">
            <Nav.Link as={NavLink} to="/about" activeClassName="active">About</Nav.Link>
            <Nav.Link as={NavLink} to="/projects" activeClassName="active">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;