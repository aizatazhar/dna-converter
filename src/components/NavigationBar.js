import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import NavItem from "react-bootstrap/NavItem";
import { Link } from "react-router-dom";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/">Code Life</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavItem>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavigationBar;