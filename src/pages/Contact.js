import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const Styles = styled.div`
  .contact {
    margin: 50px;
  }
`;

export const Contact = () => (
  <Styles>
    <div className="contact">
      <Container>
        <h2> Contact Page (Under construction) </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Expiores minus adipisci perspiciatis numquam tempora doloremque!
        </p>
        <p>
          Hea nam nulla in asperiores minus adipisci perspiciatis numquam tempora doloremque!
        </p>
      </Container>
    </div>
  </Styles>
  
)

export default Contact;
