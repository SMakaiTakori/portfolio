import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import Profile from "../images/Headshot.jpg";

const About = () => {
  return (
    <div>
      <br />
      <Container>
        <Row id="about" className="rows">
          <Col className="about-col">
            <Image src={Profile} roundedCircle style={{ marginTop: "60px" }} />
          </Col>
          <Col>
            <br />
            <hr />
            <h1> Hello World! </h1>
            <br />
            <p>
              I am a passionate Full Stack Software Engineer and Web Developer
              with a background in finance and customer service, seeking a new
              and challenging position to enhance website design and
              functionality. I have experience building full stack applications
              with CSS, JavaScript, Ruby, Rails, and React, along with WordPress
              and HubSpot. I have also worked independently as well as
              collaborated in a team setting to strategize, debug, and use
              object oriented programming to create modern websites and
              web-based applications.
            </p>
            <p>
              In my spare time, I enjoy building (and breaking) new applications
              to keep learning and practicing. I also enjoy attending virtual
              community workshops and events held within the Atlanta tech
              community to build on my current skills, help others do the same,
              and connect with more developers. I also love participating in
              coding hackathons that are geared towards civic projects within my
              community. If you would like to contact me about a civic project
              or another opportunity.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
