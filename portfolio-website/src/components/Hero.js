import React from "react";
import Image from "react-bootstrap/Image";

import Background from "../images/Woodbackground.jpg";

const Hero = () => {
  return (
    <div>
      <Image style={{ width: 2000, height: 900 }} src={Background} />
    </div>
  );
};

export default Hero;
