import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import finals from "../assets/finals.png";

const Styles = styled.div`
  .about {
    margin: 50px;
  }
  
  .body p {
    font-size: 16px;
    font-family: Roboto;
    text-align: justify;
  }

  .header {
    font-family: Montserrat;
  }
`;

export const About = () => (
  <Styles>
    <div className="about">
      <Container className="body">
        <h2 className="header"> Origins</h2>
        <p>
          In the second semester of my freshman year at NUS, I took <a href="https://nusmods.com/modules/LSM1102/molecular-genetics">LSM1102 Molecular Genetics</a>
          . Unfortunately, this was also during the time COVID-19 struck which resulted in all of our exams
          being held online. LSM1102's finals in particular became an open-book and open-internet
          exam instead of the originally planned MCQ exam :-(
        </p>

        <p>
          The day before our finals, one of the professors uploaded a revision video covering some 
          "important" concepts, which I took as a hint as to what was going to be on tested on the finals.
          One of the concept he covered was about <a href="https://en.wikipedia.org/wiki/Open_reading_frame">open reading frames</a> which 
          would be tedious to do manually (like in an exam) but a lot easier for a computer to handle.
        </p>

        <p>
          Thus as a <a href="https://www.comp.nus.edu.sg/">computing student</a>, I decided to spend a couple hours that night creating a 
          command-line program to automate the process of trying the different possible reading frames.
          Thankfully it worked out because the next day, this question came out ;-)
        </p>
        
        <br/>
        <center>
          <img src={finals} width="60%" height="60%"/>
        </center>
        <br/>
        
        <p>
          Afterwards I decided to trasnform my command-line program into a website since 
          transcribing/translating DNA is pretty handy, and it would also a good opportunity to learn React.
        </p>
      </Container>
    </div>
  </Styles>
)

export default About;
