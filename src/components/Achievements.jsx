import React from "react";
import { AchievementsIcons } from "../assets/icons";

function Achievements() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-800 pt-20 px-4">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        Achievements
      </div>

      <div className="flex flex-col items-center p-6 sm:p-10 mt-10 w-full max-w-2xl min-h-50% shadow-2xl rounded-lg bg-white/20">
        <div className="flex justify-center mb-5">
          <span>
            <AchievementsIcons />
          </span>
        </div>
        <span className="text-lg sm:text-xl font-semibold mb-5 text-center">
          🏅 Qualified GATE 2025 DA(Data Science AI) — Score: 319, Rank: 10928
        </span>
        <span className="text-lg sm:text-xl font-semibold mb-5 text-center">
          🏅 1st Rank — Institute-level coding contest 'Ode 2 Code', Jan 2024
        </span>
        <span className="text-lg sm:text-xl font-semibold mb-5 text-center">
          🏅 Solved 300+ problems across (leetcode, gfg, hackerrank, etc).
        </span>
      </div>
    </div>
  );
}

export default Achievements;
