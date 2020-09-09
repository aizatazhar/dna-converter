import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const Styles = styled.div`
  .about {
    margin: 50px;
  }
`;

export const About = () => (
  <Styles>
    <div className="about">
      <Container>
        <h2> About page (Under Construction) </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Expedita ut dolorum asdfas vel placeat rerum isteto, 
          nam nulla in asperiores minus adipisci perspiciatis numquam tempora doloremque!
        </p>
        <p>
          Hea nam nulla in asperiores minus adipisci perspiciatis numquam tempora doloremque!
        </p>
      </Container>
    </div>
  </Styles>
)

export default About;
