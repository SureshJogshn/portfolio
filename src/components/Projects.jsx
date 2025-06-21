import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Personal Portfolio Website",
        tech: "React.js + Tailwind CSS",
        link: "https://your-portfolio-link.com",
        description: "A modern, responsive portfolio to showcase my work and skills.",
        color: "from-pink-500 to-yellow-400",
    },
    {
        title: "JSC (Jai Shree Chamunda Auto Electric)",
        tech: "React JS + Tailwind CSS + Firebase",
        link: "https://jsc-auto-electric-work.netlify.app/",
        description: "Business website for an auto electric shop with real-time updates.",
        color: "from-blue-500 to-cyan-400",
    },
    {
        title: "Weather App",
        tech: "React.js + API",
        link: "https://bucolic-faun-a464bc.netlify.app/",
        description: "Real-time weather info using OpenWeatherMap.",
        color: "from-green-400 to-blue-500",
    },
    {
        title: "IoT Smart Light Control",
        tech: "Arduino + Bluetooth",
        link: "",
        description: "Home appliance voice control via HC-05.",
        color: "from-purple-500 to-indigo-400",
    },
    {
        title: "Authentication System",
        tech: "Java + Firebase",
        link: "",
        description: "Login/registration with Firebase Auth.",
        color: "from-orange-500 to-pink-500",
    },
];

const Projects = () => (
    <div id="projects" className="py-20 px-4 max-w-5xl mx-auto font-['Roboto',sans-serif]">
        <h2 className="text-3xl font-bold mb-5 text-center">My Projects</h2>
        <div className="font-['Roboto',sans-serif] grid gap-6 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
            {projects.map((project, idx) => (
                <div 
                    key={idx}
                    className="bg-white rounded-lg shadow-md p-6 flex flex-col transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl border border-gray-100"
                >
                    <div className="flex items-center mb-2">
                        <FaExternalLinkAlt className="text-xl text-gray-400 mr-2" />
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{project.tech}</p>
                    {project.description && (
                        <p className="text-gray-700 mb-4">{project.description}</p>
                    )}
                    {project.link ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                            Live Link <FaExternalLinkAlt />
                        </a>
                    ) : (
                        <span className="mt-auto text-gray-400 italic">No live link</span>
                    )}
                </div>
            ))}
        </div>
    </div>
);

export default Projects;