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
      <br />
      <Container>
        <Row className="rows">
          <Col>
            <h3 style={{ textAlign: "center" }}>Pinterest Clone App</h3>
            <br />
            <ReactPlayer
              url="https://youtu.be/iwv-IJ1Vmcg"
              width="350px"
              height="200px"
            />
            <br />
            <p>
              This is a Doggy Hotel App made with Rails that allows users to
              book reservations with the doggy hotel of their choice. In order
              to use this app, clone it, run "bundle install" to install the
              dependencies, and run rails db:seed for the hotels to be created.
              Run rails server in your terminal and go to the localhost on the
              specific port shown in the terminal.
            </p>
            <a href="https://github.com/SMakaiTakori/doggy_hotel_rails">
              Github Repo
            </a>
          </Col>
          <Col>
            <h3 style={{ textAlign: "center" }}>Pseudo Tamagotchi</h3>
            <br />
            <ReactPlayer
              url="https://youtu.be/I2t9q1A5bLs"
              width="350px"
              height="200px"
            />
            <br />
            <p>
              This is a Doggy Hotel App made with Rails that allows users to
              book reservations with the doggy hotel of their choice. In order
              to use this app, clone it, run "bundle install" to install the
              dependencies, and run rails db:seed for the hotels to be created.
              Run rails server in your terminal and go to the localhost on the
              specific port shown in the terminal.
            </p>
            <a href="https://github.com/SMakaiTakori/doggy_hotel_rails">
              Github Repo
            </a>
          </Col>
          <Col>
            <h3 style={{ textAlign: "center" }}>Doggy Hotel App</h3>
            <br />
            <ReactPlayer
              url="https://youtu.be/oVWAgO4DvxU"
              width="350px"
              height="200px"
            />
            <br />
            <p>
              This is a Doggy Hotel App made with Rails that allows users to
              book reservations with the doggy hotel of their choice. In order
              to use this app, clone it, run "bundle install" to install the
              dependencies, and run rails db:seed for the hotels to be created.
              Run rails server in your terminal and go to the localhost on the
              specific port shown in the terminal.
            </p>
            <a href="https://github.com/SMakaiTakori/doggy_hotel_rails">
              Github Repo
            </a>
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
