import React from "react";

import Carousel from "react-bootstrap/Carousel";

import TwiceAChild from "../images/TwiceAChild2.png";
import NBAF from "../images/NBAF2.png";
import Capstone from "../images/Capstone.png";
import Advantage from "../images/AdvantageConsulting.png";

const Clients = () => {
  return (
    <div>
      <h1 className="section-header"> Client Projects </h1>
      <br />
      <hr />
      <Carousel>
        <Carousel.Item interval={2000} height="200px">
          <img className="d-block w-100" src={NBAF} alt="NBAF" />
          <Carousel.Caption>
            {/* <h3>National Black Arts Festival</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Advantage}
            alt="Advantage Consulting"
          />
          <Carousel.Caption>
            {/* <h3>Advantage Consulting LLC</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={TwiceAChild}
            alt="Twice A Child"
          />
          <Carousel.Caption>
            {/* <h3>Twice A Child</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Capstone}
            alt="Capstone Alternative Strategies"
          />
          <Carousel.Caption>
            {/* <h3>Capstone Alternative Strategies</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
    </div>
  );
};

export default Clients;
