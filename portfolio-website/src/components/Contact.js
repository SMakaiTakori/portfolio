import React from "react";

import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";

const Contact = () => {
  return (
    <div>
      <h1 className="section-header">Contact</h1>
      <MDBContainer>
        <MDBBtn size="lg" tag="a" floating social="tw">
          <MDBIcon fab icon="twitter" />
        </MDBBtn>

        <MDBBtn size="lg" tag="a" floating social="li">
          <MDBIcon fab icon="linkedin-in" />
        </MDBBtn>

        <MDBBtn size="lg" tag="a" floating social="so">
          <MDBIcon fab icon="stack-overflow" />
        </MDBBtn>

        <MDBBtn size="lg" tag="a" floating social="git">
          <MDBIcon fab icon="github" />
        </MDBBtn>
        <MDBBtn size="lg" tag="a" floating social="comm">
          <MDBIcon icon="comments" />
        </MDBBtn>
        <MDBBtn size="lg" tag="a" floating social="email">
          <MDBIcon icon="envelope" />
        </MDBBtn>
      </MDBContainer>
    </div>
  );
};

export default Contact;
