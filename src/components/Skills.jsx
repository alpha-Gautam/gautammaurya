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
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold p-4 sm:p-20 text-center pt-20">
          Skills
        </div>
        <div className="flex flex-wrap justify-center items-center rounded-2xl  p-2 mb-20 sm:mb-40 w-[80%] h-[80%] bg-white/10">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-800 size-fit px-2 py-1 rounded-2xl text-sm hover:scale-110 hover:bg-white/40 m-1"
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
