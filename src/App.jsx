// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
function App() {
  return (
    <div className="">
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
    </div>
  );
}

export default App;
