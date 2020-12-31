import React from "react";

import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Clients from "./Clients";
import Blog from "./Blog";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <br />
      <Projects />
      <br />
      <Clients />
      <br />
      <Blog />
      <br />
      <h1>Contact</h1>
      You can contact me at ... Or follow me on social media
      <br />
    </div>
  );
};

export default App;
