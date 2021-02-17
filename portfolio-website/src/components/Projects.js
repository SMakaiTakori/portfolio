import React from "react";

import ReactPlayer from "react-player";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

import Pinterest from "../images/Pinterest.png";

const Projects = () => {
  return (
    <>
      <h1 className="section-header">Personal Projects</h1>

      <br />
      <div className="project-flex">
        <CardColumns className="project-col">
          <Card
            className="project-card"
            style={{
              backgroundColor: "rgba(125, 20, 174)",
              width: "24rem",
            }}
          >
            <Card.Title style={{ marginTop: "10px", marginLeft: "15px" }}>
              Pinterest Clone App
            </Card.Title>
            <Card.Link
              className="project-link"
              href="https://pinterestclone-client.herokuapp.com/"
            >
              <Image
                className="project-img"
                src={Pinterest}
                style={{ marginLeft: " 15px", width: "350px", height: "250px" }}
              />
            </Card.Link>
            {/* <ReactPlayer
              className="project-vid"
              url="https://youtu.be/iwv-IJ1Vmcg"
              width="350px"
              height="250px"
            /> */}
            <Card.Body>
              <Card.Text>
                Check out my Pinterest Clone App built with Ruby on Rails and
                React/Redux that allows users to search for images they would
                like to view. I used the Pixabay API to fetch images for this
                app.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link
                className="project-link"
                href="https://github.com/SMakaiTakori/Pinterest_Clone_ReactApp"
              >
                Github Repo
              </Card.Link>
            </Card.Body>
          </Card>
          <Card
            className="project-card"
            style={{
              backgroundColor: "rgba(125, 20, 174)",
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
              <Card.Link
                className="project-link"
                href="https://github.com/SMakaiTakori/Pseudo-Tamagotchi-App-RailsJS"
              >
                Github Repo
              </Card.Link>
            </Card.Body>
          </Card>
          <Card
            className="project-card"
            style={{
              backgroundColor: "rgba(125, 20, 174)",
              width: "24rem",
            }}
          >
            <Card.Title style={{ marginTop: "10px", marginLeft: "15px" }}>
              Doggy Hotel App
            </Card.Title>
            <ReactPlayer
              className="project-vid"
              url="https://youtu.be/iOdLfQ4Ha9g"
              width="350px"
              height="250px"
            />
            <Card.Body>
              <Card.Text>
                Check out my Doggy Hotel App that allows users to book
                reservations with the doggy hotel of their choice. I built this
                app using Ruby on Rails.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link
                className="project-link"
                href="https://github.com/SMakaiTakori/Pinterest_Clone_ReactApp"
              >
                Github Repo
              </Card.Link>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    </>
  );
};

export default Projects;
