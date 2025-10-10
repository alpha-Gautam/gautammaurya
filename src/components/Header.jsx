import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-center w-full header fixed top-0 left-0 p-4 z-50">
      <nav className="header w-[95%]  bg-gray-900 flex items-center justify-center rounded-2xl h-[60px] shadow-white/80 text-white overflow-hidden">
        <ul className="flex space-x-4 justify-center">
          <li className="px-10 flex items-center">
            <div className="w-10 h-10 bg-white rounded-full mr-4 text-black/80 flex justify-center items-center font-bold">
              <span className="">G</span>M
            </div>
            <span className="font-bold ml">Gautam Kumar Maurya</span>
          </li>
          <li className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-2 py-2">
            Experience
          </li>
          <li className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-2 py-2">
            Projects
          </li>
          <li className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-2 py-2">
            Education
          </li>
          <li className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-2 py-2">
            Skills
          </li>
          <li className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-2 py-2">
            Achievements
          </li>
          <li className="rounded-xl hover:shadow-2xl hover:bg-white/40 transition-transform hover:scale-105 px-2 py-2">
            Contacts
          </li>
        </ul>
      </nav>
    </header>
  );
}
