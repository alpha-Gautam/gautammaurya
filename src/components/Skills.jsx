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
    <div className="min-h-screen flex justify-center">
      <div className="w-[50%]  flex flex-col gap-20 justify-center items-center">
        <div className="text-5xl font-bold p-10">Skills</div>
        <div className="flex rounded-2xl  justify-center items-center p-2 mb-40 flex-wrap w-full h-full">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-800 size-fit px-3 py-1 m-1  rounded-full text-sm hover:scale-110 hover:bg-white/40"
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
