import React from "react";
import ReactPlayer from "react-player";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
            <br />

            <Card style={{ width: "22rem", height: "auto", color: "white" }}>
              <ReactPlayer
                url="https://youtu.be/iwv-IJ1Vmcg"
                width="100%"
                height="100%"
              />
              <Card.Body style={{ backgroundColor: "#7d14ae" }}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  href="https://github.com/SMakaiTakori/Pinterest_Clone_ReactApp"
                  variant="primary"
                >
                  Github Repo
                </Button>
              </Card.Body>
            </Card>

            {/* <h3>Pinterest Clone App</h3>
            <br />
            <ReactPlayer
              url="https://youtu.be/iwv-IJ1Vmcg"
              width="350px"
              height="250px"
            />
            <br />
            <p>
              Check out my Pinterest Clone App built with Ruby on Rails and
              React/Redux that allows users search for images that they would
              like to view. I used the Pixabay API to fetch images for this app.
            </p>
            <a href="https://github.com/SMakaiTakori/Pinterest_Clone_ReactApp">
              Github Repo
            </a> */}
          </Col>
          <Col>
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
              game! that allows users to create a pet and perform activities
              with it to change it's current mood. I created this app with Rails
              and Javascript. I plan on adding more features in the future so
              check back!
            </p>
            <a href="https://github.com/SMakaiTakori/Pseudo-Tamagotchi-App-RailsJS">
              Github Repo
            </a>
            <br />
          </Col>
          <Col>
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
            <a href="https://github.com/SMakaiTakori/doggy_hotel_rails">
              Github Repo
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
