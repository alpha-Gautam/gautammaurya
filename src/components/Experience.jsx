import React from "react";
import LinkIcons from "../assets/icons";

function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Code Smart",
      url: "https://codesmart.in/",
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
    {
      title: "Machine Learning Engineer Intern",
      company: "Menterness",
      locations: "Remote",
      url: "https://drive.google.com/file/d/1z9Weuma0mI4kQZD7tj2sq2AyVRcvsvFK/view?usp=sharing",
      tech_stack: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Machine Learning",
      ],
      duration: "August 2024 – September 2024",
      points: [
        "Built an ML model improving sales forecasting accuracy by 80%, optimizing inventory and marketing strategies.",
        "Achieved up to 80% improvement in operational efficiency and decision-making speed.",
      ],
    },
  ];

  return (
    <div className="flex flex-col py-10 min-h-screen justify-center items-center gap-10 bg-white/5 px-4">
      <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        Experience
      </span>

      <div className="flex flex-col w-full max-w-4xl justify-center border-l-2 items-center gap-10">
        {/* items */}
        {experiences.map((exp, id) => (
          <div className="flex flex-col w-full max-w-2xl justify-center items-center border-2 rounded-2xl p-4">
            {/* <span className="w-full text-5xl ">*</span> */}
            <div
              name="title"
              className="flex flex-col sm:flex-row justify-between w-full p-4 gap-4"
            >
              <div className="flex flex-col">
                <span className=" flex text-lg sm:text-xl font-semibold gap-2">
                  {exp.title}
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-115 transition-all"
                  >
                    <LinkIcons />
                  </a>
                </span>

                <span className="">
                  {exp.company}: {exp.locations}
                </span>
              </div>
              <span className="text-lg sm:text-xl font-semibold">
                {exp.duration}
              </span>
            </div>
            <span name="br" className="border-b-2 w-[97%] mx-5"></span>
            <div className="flex w-full pl-5 text-sm sm:text-lg font-mono overflow-x-auto">
              {experiences[id].tech_stack.join(", ")}
            </div>

            <div name="description" className=" flex w-full p-5">
              <ul className="flex list-disc pl-3 flex-col gap-3 text-sm sm:text-base">
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
