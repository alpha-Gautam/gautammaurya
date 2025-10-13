import React from "react";
import { CollegeIcons } from "../assets/icons";

function Education() {
  return (
    <div className="flex flex-col items-center pt-20 min-h-screen gap-10 sm:gap-20 bg-blue-500/10 px-4">
      <div className="flex mb-10 text-3xl sm:text-4xl md:text-5xl font-bold">
        <span>Education</span>
      </div>
      <div className="flex flex-col justify-center items-center w-full max-w-md min-h-[200px] rounded-2xl p-5 bg-white/10">
        <div className="flex justify-center items-center p-5 rounded-full bg-white/80 mb-8 sm:mb-15">
          <CollegeIcons />
        </div>
        <span className="font-bold text-center">Bachelor of Technology</span>
        <span className="text-lg sm:text-xl text-center p-3">
          Computer Science and Engineering
        </span>
        <span className="text-white text-lg sm:text-xl text-center">
          Rajkiya Engineering College, Kannauj
        </span>
        <span className="text-center">August 2022 - June 2025</span>
        <span className="text-center">Uttar Pradesh, India</span>
      </div>
    </div>
  );
}

export default Education;
