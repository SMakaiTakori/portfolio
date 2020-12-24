import React from "react";
import ReactPlayer from "react-player";

import Profile from "../images/Headshot.jpg";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <div>
      <br />
      <Container>
        <Row
          style={{
            marginTop: "-700px",
            color: "white",
          }}
          className="rows"
        >
          <Col style={{ backgroundColor: "rgba(255,255,255, 0.5)" }}>
            <Image src={Profile} roundedCircle />
          </Col>
          <Col style={{ backgroundColor: "rgba(255,255,255, 0.5)" }}>
            <br />
            <h1> Hello World! </h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
