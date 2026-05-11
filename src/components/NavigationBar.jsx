import React from "react";
import "../styles/NavigationBar.css";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
  const navLinkClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

  return (
    <Navbar className="navbar" expand="sm" sticky="top">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          <span className="navbar-brand-name">Alyssa Feinberg</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;