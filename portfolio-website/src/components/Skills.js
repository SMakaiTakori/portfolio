import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const Skills = () => {
  return (
    <div>
      <h1 className="section-header">Skills</h1>

      <Container className="">
        <Row>
          <Col className="">
            {/* <Image className="" src={NBAF} /> */}
            {/* <Image className="" src={TwiceAChild} /> */}

            {/* <Image className="" src={Advantage} /> */}
            {/* <Image className="" src={Capstone} /> */}
            <a href="#">
              <Button variant="primary">Download Resume</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
