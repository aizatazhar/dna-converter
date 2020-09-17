import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const Styles = styled.div`
  .header {
    font-family: Montserrat;
    margin: 50px;
  }
`;

export const NoMatch = () => (
  <Styles>
    <div>
      <Container>
        <h2 className="header"> Oops! You entered an invalid url :-( </h2>
      </Container>
    </div>
  </Styles>
)

export default NoMatch;