import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="">
      <Header />
      <Home />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
