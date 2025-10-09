import React from "react";

function Achievements() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white/10 pt-20">
      <div className="text-[50px] font-bold">Achievements</div>

      <div className="flex flex-col p-10 mt-10 w-[50%] min-h-50% shadow-2xl rounded-lg bg-white/20">
        <span className="text-[20px] font-semibold mb-5">
          Qualified GATE 2025 DA(Data Science AI) — Score: 319, Rank: 10928
        </span>
        <span className="text-[20px] font-semibold mb-5">
          1st Rank — Institute-level coding contest ’Ode 2 Code’, Jan 2024
        </span>
        <span className="text-[20px] font-semibold mb-5">
          Solved 300+ problems across (leetcodegfg, hackerrank, , etc).
        </span>
      </div>
    </div>
  );
}

export default Achievements;
