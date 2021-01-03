import React from "react";

// import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import TwiceAChild from "../images/TwiceAChildLogo.png";
import NBAF from "../images/NBAF_BlackArts_Logo-300x95.jpg";
import Capstone from "../images/capstonelogo.png";
import Advantage from "../images/advantagelogo.png";

const Clients = () => {
  return (
    <div>
      <h1 className="section-header"> Clients </h1>
      <br />
      <br />
      <hr />
      <Container style={{ width: "1200px" }}>
        <Row>
          <Col>
            <Image className="client-list" src={TwiceAChild} />
          </Col>
          <Col>
            <Image className="client-list" src={NBAF} />
          </Col>

          <Col>
            <Image className="client-list" src={Capstone} />
          </Col>
          <Col>
            <Image className="client-list" src={Advantage} />
          </Col>
        </Row>
      </Container>
      {/* <Carousel>
        <Carousel.Item interval={3000}>
          <a href="http://nbaf.org/" target="_blank">
            <img className="" src={NBAF} alt="NBAF" />
          </a>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <a href="https://advantageconsultingllc.com/" target="_blank">
            <img
              className="d-block w-100"
              src={Advantage}
              alt="Advantage Consulting"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <a href="https://twiceachildpodcast.com/" target="_blank">
            <img
              className="d-block w-100"
              src={TwiceAChild}
              alt="Twice A Child"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <a href="https://www.capaltstrategies.com/" target="_blank">
            <img
              className="d-block w-100"
              src={Capstone}
              alt="Capstone Alternative Strategies"
            />
          </a>
        </Carousel.Item>
      </Carousel> */}

      <br />
    </div>
  );
};

export default Clients;
