import React from "react";
import { PhoneIcon, EmailIcon } from "../assets/icons.jsx";

export default function Home() {
  return (
    <div className="home flex flex-col items-center justify-center min-h-screen text-white bg-gray-800 p-4 pt-20">
      <div className="flex flex-col justify-center items-center mb-10 gap-5 max-w-4xl mx-auto">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4 shadow-lg">
          GM
        </div>
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex justify-center items-center flex-col sm:flex-row font-bold text-center">
          Gautam Kumar Maurya
        </span>
        <span className="text-lg sm:text-xl md:text-2xl text-center">
          Noida, Uttar Pradesh
        </span>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 w-full justify-center">
          <a
            href="tel:8932081132"
            className="border1 rounded-2xl px-4 py-2 shadow-lg bg-gray-600 hover:scale-105 hover:bg-gray-500 transition-all duration-300 flex justify-center items-center gap-2 hover:shadow-xl"
          >
            <PhoneIcon />
            <span>8932081132</span>
          </a>
          <a
            href="mailto:gautammaurya.mail@gmail.com"
            target="_blank"
            className="border1 pointer-events-auto rounded-2xl px-4 py-2 shadow-lg transition-all duration-300 bg-gray-600 hover:scale-105 hover:bg-gray-500 flex justify-center items-center gap-2 hover:shadow-xl"
          >
            <EmailIcon />
            <span>gautammaurya.mail@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="flex space-x-4 text-white flex-col sm:flex-row gap-5 w-full justify-center max-w-md sm:max-w-none">
        <button className="text-white px-4 w-full sm:w-40 py-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors duration-300 hover:scale-105 hover:shadow-lg">
          <a
            href="https://drive.google.com/file/d/1dkjIh6eOeeypZWAVa4s8fgj1pYLS4SJU/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
        </button>
        <button className="bg-blue-500 text-white w-full sm:w-40 px-4 py-2 rounded hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <a href="https://github.com/alpha-Gautam" target="_blank">
            GitHub
          </a>
        </button>
        <button className="bg-blue-500 text-white w-full sm:w-40 px-4 py-2 rounded hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <a href="https://www.linkedin.com/in/zero--one/" target="_blank">
            Linkedin
          </a>
        </button>
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">
          <a href=""></a>
        </button> */}
      </div>
    </div>
  );
}
