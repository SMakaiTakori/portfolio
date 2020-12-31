import React from "react";

import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Clients from "./Clients";
import Blog from "./Blog";
import Contact from "./Contact";

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
      <Contact />
      <br />
    </div>
  );
};

export default App;
