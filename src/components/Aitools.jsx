import React from "react";
import { SiTailwindcss, SiMongodb, SiExpress, SiFigma } from "react-icons/si";
import { FaReact, FaJsSquare, FaNodeJs, FaBootstrap, FaDatabase, FaFire } from "react-icons/fa";
import { SiOpenai, SiGithub, SiFigma as SiFigmaAlt } from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";

// Custom SVG for Locofy.ai (since there's no official icon in react-icons)
const LocofyIcon = () => (
    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-500">
        <span className="text-white text-2xl font-bold font-sans">L</span>
    </div>
);

const aitools = [
    {
        name: "ChatGPT",
        icon: <TbBrandOpenai className="text-green-600" size={48} />,
        desc: "Utilized ChatGPT for intelligent code suggestions, quick debugging, and drafting structured technical content.",
    },
    {
        name: "DeepSeek",
        icon: <FaRobot className="text-blue-500" size={48} />,
        desc: "Used DeepSeek for advanced code searches, context-aware suggestions, and exploring open-source solutions.",
    },
    {
        name: "GitHub Copilot",
        icon: <SiGithub className="text-black" size={48} />,
        desc: "Leveraged GitHub Copilot to speed up coding, auto-complete repetitive code, and maintain best practices.",
    },
    {
        name: "Figma",
        icon: <SiFigmaAlt className="text-pink-500" size={48} />,
        desc: "Designed clean, responsive, and user-centric interfaces with Figma to streamline the design-to-development process.",
    },
    {
        name: "Locofy.ai",
        icon: <LocofyIcon />,
        desc: "Converted Figma designs into high-quality, production-ready React code using Locofy.ai for rapid frontend development.",
    },
];

const Aitools = () => {
    return (
        <div id="ai" className="w-full py-30 bg-gray-50 font-['Roboto',sans-serif]">
            <h2 className="text-3xl font-bold text-center mb-8">AI Tools</h2>
            <div className="flex overflow-x-auto space-x-6 px-4 cursor-pointer font-['Roboto',sans-serif]">
                {aitools.map((tool, idx) => (
                    <div
                        key={idx}
                        className="min-w-[220px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
                    >
                        <div className="mb-4 animate-bounce group-hover:animate-none">
                            {tool.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                        <p className="text-gray-600 text-center">{tool.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Aitools;