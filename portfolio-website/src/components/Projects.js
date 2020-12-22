import React from "react";
import ReactPlayer from "react-player";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const Projects = () => {
  return (
    <div>
      <h1>Personal Projects</h1>
      <Container>
        <Row className="rows">
          <Col>
            <ReactPlayer url="https://youtu.be/iwv-IJ1Vmcg" />
          </Col>
          <Col></Col>
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
