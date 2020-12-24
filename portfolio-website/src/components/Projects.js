import React from "react";
import ReactPlayer from "react-player";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Projects = () => {
  return (
    <div>
      <br />
      <h1 className="section-header">Personal Projects</h1>
      <br />
      <Container>
        <Row className="rows">
          <Col className="project-col" md={4}>
            <br />
            <h4>Pinterest Clone App</h4>
            <br />
            <ReactPlayer
              className="project-vid"
              url="https://youtu.be/iwv-IJ1Vmcg"
              width="350px"
              height="250px"
            />
            <div>
              <br />
              <p>
                Check out my Pinterest Clone App built with Ruby on Rails and
                React/Redux that allows users search for images that they would
                like to view. I used the Pixabay API to fetch images for this
                app.
              </p>
              <a
                className="project-link"
                href="https://github.com/SMakaiTakori/Pinterest_Clone_ReactApp"
              >
                Github Repo
              </a>
            </div>
          </Col>
          <Col className="project-col" md={4}>
            <br />
            <h3>Pseudo Tamagotchi</h3>
            <br />
            <ReactPlayer
              url="https://youtu.be/I2t9q1A5bLs"
              width="350px"
              height="250px"
            />
            <br />
            <p>
              This is my Pseudo Tamagotchi App inspired by the 90s mini handheld
              game! Users can create a pet and perform activities with it to
              change it's current mood. I created this app with Rails and
              Javascript.
            </p>
            <a
              className="project-link"
              href="https://github.com/SMakaiTakori/Pseudo-Tamagotchi-App-RailsJS"
            >
              Github Repo
            </a>
            <br />
          </Col>
          <Col
            className="project-col"
            md={4}
            style={{
              borderStyle: "none",
            }}
          >
            <br />
            <h3>Doggy Hotel App</h3>
            <br />
            <ReactPlayer
              url="https://youtu.be/oVWAgO4DvxU"
              width="350px"
              height="250px"
            />
            <br />
            <p>
              I made this Doggy Hotel App made with Rails. It allows users to
              book reservations with the luxury doggy hotel of their choice. Who
              doesn't love pampering their pups?
            </p>
            <br />
            <a
              className="project-link"
              href="https://github.com/SMakaiTakori/doggy_hotel_rails"
            >
              Github Repo
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
