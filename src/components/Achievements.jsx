import React from "react";
import { AchievementsIcons, LeetCodeIcon } from "../assets/icons";

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
          🏅 Solved 200+ problems across (leetcode, gfg, hackerrank, etc).
        </span>
        <span className="text-lg sm:text-xl font-semibold mb-5 text-center">
          <a
            href="https://leetcode.com/u/Gautam-Maurya/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 hover:text-blue-400 transition-colors"
          >
            <LeetCodeIcon />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Achievements;
