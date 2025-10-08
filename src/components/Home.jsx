import React from "react";

export default function Home() {
  return (
    <div className="home flex flex-col items-center justify-center min-h-screen text-gray-300 bg-gray-700 p-4 pt-20">
      <div className="flex flex-col justify-center items-center mb-10 gap-5">
        <span className="text-5xl flex justify-center items-center sm:text-6xl md:text-7xl flex-col sm:flex-row font-bold">
          Gautam Kumar Maurya
        </span>
        <span className="text-[20px]">Noida, Uttar Pradesh</span>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
          <span className="border1 rounded-2xl px-3 py-2 shadow-lg bg-gray-600 hover:scale-105 transition-all">
            Mob:- 8932081132
          </span>
          <span className="border1 rounded-2xl px-3 py-2 shadow-lg transition-all bg-gray-600 hover:scale-105">
            Email:- gautammaurya.mail@gmail.com
          </span>
        </div>
      </div>
      <div className="flex space-x-4 text-white flex-col items-center sm:flex-row gap-5">
        <button className="text-white px-4 w-40 py-2 rounded">
          <a
            href="https://drive.google.com/file/d/1dkjIh6eOeeypZWAVa4s8fgj1pYLS4SJU/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
        </button>
        <button className="bg-blue-500 text-white w-40 px-4 py-2 rounded">
          <a href="https://github.com/alpha-Gautam" target="_blank">
            GitHub
          </a>
        </button>
        <button className="bg-blue-500 text-white w-40 px-4 py-2 rounded">
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
