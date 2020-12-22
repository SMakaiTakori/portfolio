import React from "react";
import ReactPlayer from "react-player";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const Projects = () => {
  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center" }}>Personal Projects</h1>
      <Container>
        <Row className="rows">
          <Col>
            <h2>Pinterest Clone App</h2>
            <ReactPlayer
              url="https://youtu.be/iwv-IJ1Vmcg"
              width="250px"
              height="200px"
            />
          </Col>
          <Col>
            <h2>Pseudo Tamagotchi</h2>
            <ReactPlayer
              url="https://youtu.be/I2t9q1A5bLs"
              width="250px"
              height="200px"
            />
          </Col>
          <Col>
            <h2>Doggy Hotel App</h2>
            <ReactPlayer
              url="https://youtu.be/oVWAgO4DvxU"
              width="250px"
              height="200px"
            />
          </Col>
        </Row>
      </Container>

      <table>
        <tr>
          <label>Image 1</label> <br />
          <label> Project title| Link</label>
          <p>Project description</p>
        </tr>
        <tr>
          <label>Image 2 </label>
          <br />
          <label>Project title| Link</label>
          <p>Project description</p>
        </tr>
        <tr>
          <label>Image 3</label>
          <br />
          <label>Project title| Link</label>
          <p>Project description</p>
        </tr>
      </table>
    </div>
  );
};

export default Projects;
