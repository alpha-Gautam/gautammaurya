import React from "react";
import LinkIcons from "../assets/icons";

function Projects() {
  const projects = [
    {
      title: "REC Papers",
      description: [
        "Full-stack platform for Project and Research Paper Management application using React for the frontend and Django Rest Framework for the backend.",
        "This platform enables students to create and manage projects while allowing faculty to track project progress in real-time.",
        "Integrated Django REST Framework authentication with session and token handling for API security.",
        "Deployed on Vercel(Frontend) and render(Backend) with CI/CD pipelines; integrated PostgreSQL for high-performance data handling.",
      ],
      tech_stack: [
        "React",
        "Django Rest Framework",
        "Python",
        "JavaScript",
        "Rest API",
        "PostgreSQL",
        "HTML",
        "Tailwindcss",
      ],
      link: "https://rec-papers.vercel.app/",
    },
    {
      title: "Blog Articles",
      description: [
        "Designed a dynamic blog website that enables users to create, edit, and manage blog posts through a comprehensive admin panel, offering a seamless content management experience.",
        "Implemented a public API that securely delivers blog content to external users, providing structured data access for third-party integrations and enhancing platform versatility.",
      ],
      tech_stack: ["Python", "Flask", "Rest API", "HTML", "Tailwindcss"],
      link: "https://flask-web-xlni.onrender.com/",
    },
    // {
    //   title: "Blog Articles",
    //   description: [
    //     "Designed a dynamic blog website that enables users to create, edit, and manage blog posts through a comprehensive admin panel, offering a seamless content management experience.",
    //     "Implemented a public API that securely delivers blog content to external users, providing structured data access for third-party integrations and enhancing platform versatility.",
    //   ],
    //   tech_stack: ["Python", "Flask", "Rest API", "HTML", "Tailwindcss"],
    //   link: "https://github.com/user/project-one",
    // },
  ];

  return (
    <div className="flex flex-col min-h-screen p-10  items-center bg-gray-700 ">
      <div className="text-5xl font-bold mt-10">Projects</div>

      {/* <--! main container---> */}
      <div className="  justify-center items-center p-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* cards */}
        {projects.map((project, index) => (
          <div className=" relative flex flex-col w-[450px] min-h-[600px] sm-text-wrap z-5">
            <div className="absolute -right-7 -bottom-12 rounded-2xl bg-yellow-500 w-full  min-h-[600px] h-full"></div>
            <div className="relative flex flex-col justify-between items-center bg-black rounded-2xl p-5 gap-5 min-h-[600px] h-full overflow-hidden">
              <div className=" flex justify-between h-[10%] w-full ">
                <span className=" text-xl font-semibold rounded-2xl  px-3 py-1">
                  {project.title}
                  <div className="w-60  h-5 bg-amber-400"></div>
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  className="hover:scale-115 transition-all"
                >
                  <LinkIcons />
                </a>
              </div>
              <div className="h-[80%] flex justify-center items-center ">
                <ul className=" flex flex-col list-disc gap-5 px-5">
                  {project.description.map((desc, id) => (
                    <li key={id}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap w-full p-5 gap-2">
                {project.tech_stack.map((tech, id) => (
                  <span
                    key={id}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:scale-110 hover:bg-white/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
