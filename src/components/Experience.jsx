import React from "react";

function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Code Smart",
      locations: "Remote",
      tech_stack: ["Python", "Flask", "TypeScript", "React", "PostgreSQL"],
      duration: "September 2024 – January 2025",
      points: [
        "Developed features for question difficulty management and delete functionality, enhancing user control.",
        "Extended platform support from LeetCode to 10+ coding sites (HackerRank, InterviewBit, Codeforces, etc.) using React, TypeScript, and web scraping.",
        "Created secure RESTful APIs in Flask for authentication and data management with PostgreSQL",
        "Implemented an extension feature to import a user’s complete LeetCode question history through efficient web scraping with secure storage.",
      ],
    },
  ];

  return (
    <div className="flex flex-col py-10 min-h-screen justify-center items-center gap-10 ">
      <span className="text-5xl font-bold">Experience</span>

      <div className="flex flex-col w-[60%] justify-center border-l-2 items-center gap-10 ">
        {/* items */}
        {experiences.map((exp, id) => (
          <div className="flex flex-col w-[90%] justify-center items-center border-2 rounded-2xl    ">
            <div name="title" className="flex justify-between w-full p-4">
              <div className="flex flex-col">
                <span className="text-xl font-semibold">{exp.title}</span>
                <span className="">
                  {exp.company}: {exp.locations}
                </span>
              </div>
              <span className="text-xl font-semibold">{exp.duration}</span>
            </div>
            <span name="br" className="border-b-2 w-[97%] mx-5"></span>
            <div className="flex w-full pl-5 text-xl font-mono">
              {experiences[id].tech_stack.join(", ")}
            </div>

            <div name="description" className=" flex w-full p-5">
              <ul className="flex list-disc pl-3 flex-col gap-3">
                {experiences[id].points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
