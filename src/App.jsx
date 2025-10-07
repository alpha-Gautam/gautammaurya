// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="">
      <Header />
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;
