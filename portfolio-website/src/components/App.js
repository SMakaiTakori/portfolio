import React from "react";

import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";

const App = () => {
  return (
    <div>
      <Hero />
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
