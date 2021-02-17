import React from "react";

// import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import TwiceAChild from "../images/TwiceAChildLogo.png";
import NBAF from "../images/NBAF_BlackArts_Logo-300x95.jpg";
import Capstone from "../images/capstonelogo.png";
import Advantage from "../images/Advantage.png";

const Clients = () => {
  return (
    <div className="skills-div">
      <h1 className="skills-header"> Clients </h1>
      <br />
      <div className="client-section">
        <Container className="client-container">
          <Row>
            <Col className="client-logos">
              <Image className="client-list" src={NBAF} />
              <Image className="client-list" src={TwiceAChild} />
              <Image className="client-list" src={Advantage} />
              <Image className="client-list" src={Capstone} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Clients;
