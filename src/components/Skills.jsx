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
        <div className="flex gap-2 flex-wrap">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-800 px-3 py-1 rounded-full text-sm"
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
