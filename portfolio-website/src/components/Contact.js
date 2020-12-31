import React from "react";

import { SocialIcon } from "react-social-icons";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {
  return (
    <div>
      <h1 className="section-header">Contact</h1>
      <Container>
        <Row>
          <Col>
            <SocialIcon url="http://twitter.com/MakaiTakori" />
          </Col>
          <Col>
            <SocialIcon url="https://www.linkedin.com/in/makai-takori/" />
          </Col>
          <Col>
            <SocialIcon url="https://github.com/SMakaiTakori" />
          </Col>
          <Col>
            <SocialIcon url="mailto:makai.takori@gmail.com" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
