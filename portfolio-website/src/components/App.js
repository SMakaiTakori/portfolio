import React from "react";
// import Alert from 'react-bootstrap/Alert'
import About from "./About";
import Image from "react-bootstrap/Image";

import Background from "../images/Woodbackground.jpg";
import Projects from "./Projects";

const App = () => {
  return (
    <div>
      <Image style={{ width: 2000, height: 500 }} src={Background} />
      <About />
      <Projects />
      <br />
      <h1> Client Projects </h1>
      <p>Capstone Consulting</p>
      <p>Advantage Consulting</p>
      <p>National Black Arts Festival</p>
      <p>Twice A Child</p>
      <br />
      <h1>Blog</h1>
      <label>Read my latest blog here</label>
      <br />
      <h1>Contact</h1>
      You can contact me at ... Or follow me on social media
      <br />
    </div>
  );
};

export default App;
