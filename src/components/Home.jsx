import React from "react";

export default function Home() {
  return (
    <div className="home flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4 pt-20">
      <div className="flex flex-col justify-center items-center mb-10 gap-5">
        <span className="text-5xl sm:text-6xl md:text-7xl font-bold">
          Gautam Kumar Maurya
        </span>
        <span className="text-[20px]">Noida, Uttar Pradesh</span>
      </div>
      <div className="flex space-x-4 text-white">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          <a
            href="https://drive.google.com/file/d/1dkjIh6eOeeypZWAVa4s8fgj1pYLS4SJU/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          <a href="https://github.com/alpha-Gautam" target="_blank">
            GitHub
          </a>
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          <a href="" target="_blank">
            View Projects
          </a>
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          <a href="">Contact Me</a>
        </button>
      </div>
    </div>
  );
}
