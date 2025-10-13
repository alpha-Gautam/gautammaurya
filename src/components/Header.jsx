import React, { useState } from "react";
import { scroller } from "react-scroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 700,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setIsMenuOpen(false); // Close menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-center w-full header fixed top-0 left-0 p-4 z-50">
      <nav className="header w-[95%] max-w-6xl bg-gray-900 flex items-center justify-between rounded-2xl h-[60px] shadow-white/80 text-white overflow-hidden px-4">
        {/* Logo and Name */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white rounded-full mr-4 text-black/80 flex justify-center items-center font-bold">
            <span className="">G</span>M
          </div>
          <span className="font-bold hidden sm:block">Gautam Kumar Maurya</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 justify-center">
          <li
            onClick={() => scrollToSection("home")}
            className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-2 py-2 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("experience")}
            className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-2 py-2 cursor-pointer"
          >
            Experience
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-2 py-2 cursor-pointer"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-2 py-2 cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() => scrollToSection("education")}
            className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-2 py-2 cursor-pointer"
          >
            Education
          </li>
          <li
            onClick={() => scrollToSection("achievements")}
            className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-2 py-2 cursor-pointer"
          >
            Achievements
          </li>
        </ul>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 rounded-b-2xl mt-2 py-4 shadow-lg">
            <ul className="flex flex-col space-y-2 items-center">
              <li
                onClick={() => scrollToSection("home")}
                className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-4 py-2 cursor-pointer w-full text-center"
              >
                Home
              </li>
              <li
                onClick={() => scrollToSection("experience")}
                className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-4 py-2 cursor-pointer w-full text-center"
              >
                Experience
              </li>
              <li
                onClick={() => scrollToSection("projects")}
                className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-4 py-2 cursor-pointer w-full text-center"
              >
                Projects
              </li>
              <li
                onClick={() => scrollToSection("skills")}
                className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-4 py-2 cursor-pointer w-full text-center"
              >
                Skills
              </li>
              <li
                onClick={() => scrollToSection("education")}
                className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-4 py-2 cursor-pointer w-full text-center"
              >
                Education
              </li>
              <li
                onClick={() => scrollToSection("achievements")}
                className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-4 py-2 cursor-pointer w-full text-center"
              >
                Achievements
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
