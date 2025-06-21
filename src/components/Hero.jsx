import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import myprofile from '../Assets/profile.png';
import resume from '../Assets/Suresh_Kumar_Resume.pdf';
import { TypeAnimation } from 'react-type-animation';


const Hero = () => { 
    return (
        <section id="home" className="py-40 bg-[#0B1D51] min-h-[100vh]">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-25 px-4">
                {/* Left Side - Image */}
                <div className="flex-shrink-0 mb-8 md:mb-0">
                    <img
                        src={myprofile}
                        alt="Profile"
                        className="rounded-full w-78 h-78 object-cover border-4 border-indigo-500 shadow-lg shadow-[#4E71FF]"
                    />
                </div>
                {/* Right Side - Content */}
                <div className="text-center md:text-left w-125">
                    <h3 className="text-4xl md:text-2xl font-bold text-white">Hello, I'm</h3>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">Suresh Kumar</h1>
                    <TypeAnimation
                        sequence={[
                            "I build with React.js",
                            1500,
                            "I create beautiful UIs with Tailwind CSS",
                            1500,
                            "I integrate seamless services with Firebase",
                            1500,
                            "I design clean interfaces with Figma",
                            1500,
                            "I design clean interfaces with Figma",
                            1500,
                            "I code smarter with ChatGPT & Copilot",
                            1500,
                            "I streamline workflow with Locofy.ai",
                            1500,
                        ]}
                        wrapper="span"
                        speed={40}
                        style={{ fontSize: '1.5em', color: 'white', display: 'inline-block', fontWeight: 'bold' }}
                        repeat={Infinity}
                    />
                    <p className="text-lg text-gray-300 mb-6 pt-3">
                        I am a passionate web developer.<br />
                        I love building beautiful and functional websites.
                    </p>
                    <div className="flex justify-center md:justify-start gap-6 mb-6">
                        <a href="https://github.com/SureshJogshn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                            <FaGithub size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/suresh-kumar-54b0b0272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                            <FaLinkedin size={28} />
                        </a>

                    </div>
                    <div className="flex justify-center md:justify-start gap-4">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded shadow transition">Hire Me</button>
                        <a
                            href={resume}
                            download
                            className="bg-white hover:bg-gray-200 text-indigo-700 font-semibold py-2 px-6 rounded shadow transition flex items-center"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;