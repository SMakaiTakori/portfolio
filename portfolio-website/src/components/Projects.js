import React from "react";
import ReactPlayer from "react-player";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Projects = () => {
  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center" }}>Personal Projects</h1>
      <br />
      <Container>
        <Row className="rows">
          <Col
            md={4}
            style={{
              backgroundColor: "rgb(125, 20, 174)",
              boxShadow: "5px 10px rgba(70, 212, 254)",
              color: "white",
              borderRight: "solid rgba(255,255,255, 0.5)",
            }}
          >
            <br />
            <h4 style={{ color: "white" }}>Pinterest Clone App</h4>
            <br />
            <ReactPlayer
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
                style={{ color: "yellow" }}
                href="https://github.com/SMakaiTakori/Pinterest_Clone_ReactApp"
              >
                Github Repo
              </a>
            </div>
          </Col>
          <Col
            md={4}
            style={{
              backgroundColor: "rgb(125, 20, 174)",
              boxShadow: "5px 10px rgba(70, 212, 254)",
              color: "white",
              borderRight: "solid rgba(255,255,255, 0.5)",
            }}
          >
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
              style={{ color: "yellow" }}
              href="https://github.com/SMakaiTakori/Pseudo-Tamagotchi-App-RailsJS"
            >
              Github Repo
            </a>
            <br />
          </Col>
          <Col
            md={4}
            style={{
              backgroundColor: "rgb(125, 20, 174)",
              boxShadow: "5px 10px rgba(70, 212, 254)",
              color: "white",
              // marginRight: "15px",
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
              style={{ color: "yellow" }}
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
