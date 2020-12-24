import React from "react";
import Image from "react-bootstrap/Image";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Background from "../images/Woodbackground.jpg";

const Hero = () => {
  return (
    <div>
      <Image className="hero-image" src={Background} />
      <Container>
        <Row className="hero-text">
          <Col className="hero-col">
            <h1> Hello World! </h1>
            <p>
              <br />
              This will be some kind of animation..
              <br />
              I am a software developer...
              <br />
              I am always learning...
              <br />
              Lorem Ipsum...
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
