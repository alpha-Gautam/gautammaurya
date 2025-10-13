import React from "react";

function Skills() {
  const skills = [
    "Python",
    "Django",
    "Flask",
    "SQL",
    "Docker",
    "Celery",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Tailwindcss",
    "Git",
    "GitHub",
    "PostgreSQL",
    "Rest API",
  ];
  return (
    <div className="min-h-screen flex justify-center px-4 bg-gray-800">
      <div className="w-full max-w-4xl flex flex-col gap-10 sm:gap-20 justify-center items-center">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold p-4 sm:p-10 text-center pt-20">
          Skills
        </div>
        <div className="flex rounded-2xl justify-center items-center p-2 mb-20 sm:mb-40 flex-wrap w-full h-full gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-800 size-fit px-3 py-1 m-1 rounded-full text-sm hover:scale-110 hover:bg-white/40"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
