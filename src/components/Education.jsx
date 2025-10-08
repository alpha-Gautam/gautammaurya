import React from "react";

function Education() {
  return (
    <div className="flex flex-col items-center pt-20 min-h-screen gap-20 bg-blue-500/10">
      <div className="flex mb-10 text-5xl font-bold">
        <span>Education</span>
      </div>
      <div className="flex flex-col  justify-center items-center w-[40%] sm:h-[200px] rounded-2xl p-5 bg-white/10 ">
        <span className="text-xl text-center ">
          Rajkiya Engineering College, Kannauj
        </span>
        <span className="flex mb-5">(batch:2021- 2025)</span>
        <span>B.Tech in Computer Science and Engineering</span>
      </div>
    </div>
  );
}

export default Education;
