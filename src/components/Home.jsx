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
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Download CV
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          View Projects
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Contact Me
        </button>
      </div>
    </div>
  );
}
