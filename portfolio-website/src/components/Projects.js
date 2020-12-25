import React from "react";
import ReactPlayer from "react-player";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

const Projects = () => {
  return (
    <>
      <h1 className="section-header">Personal Projects</h1>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <br />
        <CardColumns style={{ margin: "0 auto" }}>
          <Card
            style={{
              boxShadow: "5px 10px rgba(70, 212, 254) ",
              backgroundColor: " rgba(125, 20, 174)",
              color: "white",
              width: "24rem",
            }}
          >
            <Card.Title style={{ marginTop: "10px", marginLeft: "15px" }}>
              Pinterest Clone App
            </Card.Title>
            <ReactPlayer
              className="project-vid"
              url="https://youtu.be/iwv-IJ1Vmcg"
              width="350px"
              height="250px"
            />
            <Card.Body>
              <Card.Text>
                Check out my Pinterest Clone App built with Ruby on Rails and
                React/Redux that allows users search for images that they would
                like to view. I used the Pixabay API to fetch images for this
                app.
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Link href="https://github.com/SMakaiTakori/Pinterest_Clone_ReactApp">
                Card Link
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            style={{
              boxShadow: "5px 10px rgba(70, 212, 254) ",
              backgroundColor: " rgba(125, 20, 174)",
              color: "white",
              width: "24rem",
            }}
          >
            <Card.Title style={{ marginTop: "10px", marginLeft: "15px" }}>
              Pseudo Tamagotchi
            </Card.Title>
            <ReactPlayer
              className="project-vid"
              url="https://youtu.be/I2t9q1A5bLs"
              width="350px"
              height="250px"
            />
            <Card.Body>
              <Card.Text>
                This is my Pseudo Tamagotchi App inspired by the 90s mini
                handheld game! Users can create a pet and perform activities
                with it to change it's current mood. I created this app with
                Rails and Javascript.
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Link href="https://github.com/SMakaiTakori/Pseudo-Tamagotchi-App-RailsJS">
                Card Link
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            style={{
              boxShadow: "5px 10px rgba(70, 212, 254) ",
              backgroundColor: " rgba(125, 20, 174)",
              color: "white",
              width: "24rem",
            }}
          >
            <Card.Title style={{ marginTop: "10px", marginLeft: "15px" }}>
              Pinterest Clone App
            </Card.Title>
            <ReactPlayer
              className="project-vid"
              url="https://youtu.be/iwv-IJ1Vmcg"
              width="350px"
              height="250px"
            />
            <Card.Body>
              <Card.Text>
                Check out my Pinterest Clone App built with Ruby on Rails and
                React/Redux that allows users to search for images that they
                would like to view. I used the Pixabay API to fetch images for
                this app.
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Link href="https://github.com/SMakaiTakori/Pinterest_Clone_ReactApp">
                Card Link
              </Card.Link>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    </>
  );
};

export default Projects;
