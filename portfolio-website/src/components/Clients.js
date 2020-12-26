import React from "react";

import Carousel from "react-bootstrap/Carousel";

import TwiceAChild from "../images/TwiceAChild2.png";
import NBAF from "../images/NBAF3.png";
import Capstone from "../images/Capstone.png";
import Advantage from "../images/AdvantageConsulting.png";

const Clients = () => {
  return (
    <div>
      <h1 className="section-header"> Client Projects </h1>
      <br />
      <br />
      <hr />
      <Carousel>
        <Carousel.Item interval={3000}>
          <a href="http://nbaf.org/" target="_blank">
            <img className="d-block w-100" src={NBAF} alt="NBAF" />
          </a>
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
      </Carousel>
      <br />
    </div>
  );
};

export default Clients;
