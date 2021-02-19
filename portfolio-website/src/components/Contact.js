import React from "react";

import { SocialIcon } from "react-social-icons";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {
  return (
    <div className="social-background">
      <Container>
        <Row>
          <Col>
            <p className="social-text">Copyright 2020 - S. Makai Takori</p>
          </Col>

          <Col>
            <SocialIcon url="http://twitter.com/MakaiTakori" target="_blank" />

            <SocialIcon
              url="https://www.linkedin.com/in/makai-takori/"
              target="_blank"
            />

            <SocialIcon url="https://github.com/SMakaiTakori" target="_blank" />

            <SocialIcon url="mailto:makai.takori@gmail.com" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
