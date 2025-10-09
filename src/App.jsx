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
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
    </div>
  );
}

export default App;
