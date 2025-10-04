import React from "react";

export default function Header() {
  return (
    <nav className="header fixed top-0 left-0 w-full p-4 bg-gray-800 text-white z-50 shadow-lg">
      <ul className="flex space-x-4 justify-center">
        <li className="px-10">
          <span className="font-bold ml">Gautam Kumar Maurya</span>
        </li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Education</li>
        <li>Skills</li>
        <li>Achievements</li>
        <li>Contacts</li>
      </ul>
    </nav>
  );
}
