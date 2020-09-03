import React from "react";
import {Jumbotron as Jumbo, Container} from "react-bootstrap";
import styled from "styled-components";
import bgImage from "../assets/bgImage.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${bgImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    position: relative;
    z-index: -5;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -4;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay" />
      <Container>
        <h1>Welcome!</h1>
        <p>SHit hshit shit</p>
      </Container>
    </Jumbo>
  </Styles>
);

export default Jumbotron;