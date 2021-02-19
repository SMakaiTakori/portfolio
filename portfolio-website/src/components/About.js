import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { SocialIcon } from "react-social-icons";

import Profile from "../images/Headshot.jpg";

const About = () => {
  return (
    <div className="about-col">
      <br />
      <Container>
        <Row id="about" className="rows">
          <Col>
            <Image
              id="headshot"
              src={Profile}
              roundedCircle
              style={{ marginTop: "60px" }}
            />
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
              community. If you have any projects or opportunities you think I'd
              be interested in, let's connect!
              <div className="about-social">
                <SocialIcon
                  url="http://twitter.com/MakaiTakori"
                  target="_blank"
                />
                <SocialIcon
                  url="https://www.linkedin.com/in/makai-takori/"
                  target="_blank"
                />
                <SocialIcon
                  url="https://github.com/SMakaiTakori"
                  target="_blank"
                />
                <SocialIcon url="mailto:makai.takori@gmail.com" />
              </div>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
