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
              Check out my Pinterest Clone App built with Ruby on Rails and
              React/Redux that allows users search for images that they would
              like to view. I used the Pixabay API to fetch images for this app.
            </p>
            <a href="https://github.com/SMakaiTakori/Pinterest_Clone_ReactApp">
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
              This is my Pseudo Tamagotchi App inspired by the 90s mini handheld
              game! that allows users to create a pet and perform activities
              with it to change it's current mood. I created this app with Rails
              and Javascript. I plan on adding more features in the future so
              check back!
            </p>
            <a href="https://github.com/SMakaiTakori/Pseudo-Tamagotchi-App-RailsJS">
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
              I made this Doggy Hotel App made with Rails. It allows users to
              book reservations with the luxury doggy hotel of their choice. Who
              doesn't love pampering their pups?
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
