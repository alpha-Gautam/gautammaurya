import React from "react";

function Education() {
  return (
    <div className="flex flex-col items-center pt-20 min-h-screen gap-20 bg-blue-500/10">
      <div className="flex mb-10 text-5xl font-bold">
        <span>Education</span>
      </div>
      <div className="flex flex-col  justify-center items-center w-[40%] sm:h-[200px] rounded-2xl p-5 bg-white/10 ">
        <span className="font-bold">Bachelor of Technology</span>
        <span className="text-xl text-center p-3">
          Computer Science and Engineering
        </span>
        <span className="text-white text-xl">
          Rajkiya Engineering College, Kannauj
        </span>
        <span>August 2022 - June 2025</span>
        <span className="">Uttar Pradesh, India</span>
      </div>
    </div>
  );
}

export default Education;
