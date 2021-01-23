import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import Rct from "../images/React-icon.png";
import Rails from "../images/Ruby.png";
import JS from "../images/javascript.jpg";
import CSS from "../images/htmlcss.png";
import Git from "../images/git.png";

const Skills = () => {
  return (
    <div>
      <h1 className="section-header">Skills</h1>
      <div className="skills-section">
        <Container className="skills-container">
          <Row>
            <Col className="skills-icons">
              <Image className="skills-list" src={Rct} />
              <Image className="skills-list" src={Rails} />

              <Image className="skills-list" src={JS} />
              <Image className="skills-list" src={CSS} />
              <Image className="skills-list" src={Git} />
            </Col>
          </Row>
          {/* <Col className="">
            <a href="#">
              <Button className="skills-btn">View My Resume</Button>
            </a>
          </Col> */}
        </Container>
      </div>
    </div>
  );
};

export default Skills;
