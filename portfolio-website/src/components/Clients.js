import React from "react";

import Carousel from "react-bootstrap/Carousel";
import TwiceAChild from "../images/TwiceAChild.png";
import NBAF from "../images/NBAF1.png";

const Clients = () => {
  return (
    <div>
      <h1 className="section-header"> Client Projects </h1>
      <br />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={TwiceAChild}
            alt="Twice A Child"
          />
          <Carousel.Caption>
            <h3>Twice A Child</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={NBAF} alt="NBAF" />
          <Carousel.Caption>
            <h3>National Black Arts Festival</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <p>Capstone Consulting</p>
      <p>Advantage Consulting</p>
      <p>National Black Arts Festival</p>
      <p>Twice A Child</p>
      <br />
    </div>
  );
};

export default Clients;
