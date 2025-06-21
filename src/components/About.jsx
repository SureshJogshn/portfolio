import React from "react";
import pro from '../Assets/profile.png'

const About = () => {
    return (
        <div
            id="about"
            className="bg-[#0B1D51] py-10 sm:py-16 md:py-20 font-['Roboto',sans-serif]"
        >
            <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 sm:px-8 pb-6 rounded-3xl shadow-lg max-w-3xl mx-auto bg-[#0B1D51]">
                {/* Left Side: Image */}
                <div className="flex-shrink-0 flex justify-center w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] mb-6 md:mb-0">
                    <img
                        src={pro}
                        alt="About"
                        className="w-full h-full object-cover rounded-[18px] shadow-lg"
                    />
                </div>
                {/* Right Side: Text */}
                <div className="flex-1 w-full">
                    <h2 className="text-[2rem] sm:text-[2.2rem] font-bold mb-4 text-white tracking-tight font-['Roboto',sans-serif]">
                        About Me
                    </h2>
                    <p className="text-[1rem] sm:text-[1.15rem] text-white leading-relaxed mb-4 font-['Roboto',sans-serif]">
                        Hi, I’m a passionate <b>Frontend Developer</b> with a knack for building modern, responsive web applications. I love turning ideas into beautiful, interactive products using the latest technologies.
                    </p>
                    <div className="mt-6">
                        <div className="text-base text-white mb-1.5 font-['Roboto',sans-serif]">
                            <b>Address:</b> Khora Colony Sector 62, Noida 
                        </div>
                        <div className="text-base text-white mb-1.5 font-['Roboto',sans-serif]">
                            <b>Phone:</b> +91 8875920531
                        </div>
                        <div className="text-base text-white font-['Roboto',sans-serif]">
                            <b>Email:</b> sureshkumar7874900@gmail.com
                        </div>
                    </div>
                    <ul className="list-none p-0 m-0 flex flex-wrap gap-3 mt-6">
                        <li className="bg-white rounded-lg px-4 py-2 shadow font-medium text-[#22223b] font-['Roboto',sans-serif]">React</li>
                        <li className="bg-white rounded-lg px-4 py-2 shadow font-medium text-[#22223b] font-['Roboto',sans-serif]">JavaScript</li>
                        <li className="bg-white rounded-lg px-4 py-2 shadow font-medium text-[#22223b] font-['Roboto',sans-serif]">UI/UX</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default About;