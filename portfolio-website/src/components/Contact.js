import React from "react";

import { SocialIcon } from "react-social-icons";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {
  return (
    <div className="social-background">
      {/* <h1 className="section-header"></h1> */}
      <Container>
        <Row>
          <Col>
            <p className="social-text">Copyright 2020 - by S. Makai Takori </p>
          </Col>

          <Col>
            <SocialIcon url="http://twitter.com/MakaiTakori" />

            <SocialIcon url="https://www.linkedin.com/in/makai-takori/" />

            <SocialIcon url="https://github.com/SMakaiTakori" />

            <SocialIcon url="mailto:makai.takori@gmail.com" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
