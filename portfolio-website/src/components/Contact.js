import React from "react";

import { SocialIcon } from "react-social-icons";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {
  return (
    <div className="social-background">
      {/* <h1 className="section-header" style={{ marginBottom: "40px" }}>
        Contact
      </h1> */}
      <br />

      <SocialIcon url="http://twitter.com/MakaiTakori" />

      <SocialIcon url="https://www.linkedin.com/in/makai-takori/" />

      <SocialIcon url="https://github.com/SMakaiTakori" />

      <SocialIcon url="mailto:makai.takori@gmail.com" />
    </div>
  );
};

export default Contact;
