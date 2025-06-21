import React from "react";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaJsSquare, FaNodeJs, FaBootstrap, FaDatabase, FaFire } from "react-icons/fa";

const techs = [
{
    name: "React JS",
    icon: <FaReact className="text-blue-400" size={48} />,
    desc: "Building interactive and responsive user interfaces.",
},
{
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" size={48} />,
    desc: "Adding logic and dynamics for seamless user experience.",
},
{
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" size={48} />,
    desc: "Designing clean, modern, and mobile‑first layouts quickly",
},
{
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-600" size={48} />,
    desc: "Quickly building sleek, mobile‑friendly website layouts.",
},
{
    name: "Node JS",
    icon: <FaNodeJs className="text-green-600" size={48} />,
    desc: "Powering fast and efficient server‑side applications.",
},
{
    name: "Express JS",
    icon: <SiExpress className="text-gray-700" size={48} />,
    desc: "Creating robust REST APIs and backend services.",
},
{
    name: "MongoDB",
    icon: <SiMongodb className="text-green-700" size={48} />,
    desc: "Managing and storing data reliably and securely.",
},
{
    name: "Firebase",
    icon: <FaFire className="text-orange-500" size={48} />,
    desc: "Adding seamless authentication and real‑time data services.",
},
];

const Tech = () => {
return (
    <div id="tech" className="w-full py-21 bg-[#0B1D51] font-['Roboto',sans-serif]">
        <h2 className="text-3xl font-bold text-white text-center mb-7">Technologies</h2>
        <div className="font-['Roboto',sans-serif] grid grid-cols-1 cursor-pointer sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 max-w-6xl mx-auto">
            {techs.map((tech, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                    <div className="mb-5">
                        {tech.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{tech.name}</h3>
                    <p className="text-gray-500 text-center text-sm">{tech.desc}</p>
                </div>
            ))}
        </div>
    </div>
);
};

export default Tech;