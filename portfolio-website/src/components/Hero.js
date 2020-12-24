import React from "react";
import Image from "react-bootstrap/Image";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Background from "../images/Woodbackground.jpg";

const Hero = () => {
  return (
    <div>
      <Image style={{ width: 2000, height: 900 }} src={Background} />
      <Container>
        <Row
          style={{
            marginTop: "-700px",
            marginBottom: "450px",
            color: "white",
          }}
          className="rows"
        >
          <Col
            style={{
              backgroundColor: "rgba(128,128,128,0.6)",
              padding: "20px",
            }}
          >
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
