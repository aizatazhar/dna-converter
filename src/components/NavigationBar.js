import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import NavItem from "react-bootstrap/NavItem";
import { Link } from "react-router-dom";

const Styles = styled.div`
  .navbar {
    background-image: linear-gradient(to right, #073C16, #0A5C22);
    padding-left: 50px;
    padding-right: 50px;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #ffffff;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/dna-converter"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavItem>
            <Nav.Link as={Link} to="/dna-converter">Home</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={Link} to="/dna-converter/about">About</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={Link} to="/dna-converter/contact">Contact</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavigationBar;