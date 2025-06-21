import React from "react";
import pro from '../Assets/profile.png'

const About = () => {
    return (
        <div id="about" className=" bg-[#0B1D51] py-30">
        <section className="flex items-center justify-center gap-15 px-6 pb-6 rounded-3xl shadow-lg max-w-3xl mx-auto">
            {/* Left Side: Image */}
            <div className="flex-shrink-0 flex justify-center w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px]">
                <img
                    src={pro}
                    alt="About"
                    className="w-full h-full object-cover rounded-[18px] shadow-lg"
                />
            </div>
            {/* Right Side: Text */}
            <div className="flex-1">
                <h2 className="text-[2.2rem] font-bold mb-4 text-white text-[#22223b] tracking-tight">
                    About Me
                </h2>
                <p className="text-[1.15rem] text-white leading-relaxed mb-4">
                    Hi, I’m a passionate <b>Frontend Developer</b> with a knack for building modern, responsive web applications. I love turning ideas into beautiful, interactive products using the latest technologies.
                </p>
                <div className="mt-7">
                    <div className="text-base text-white mb-1.5">
                        <b>Address:</b> Khora Colony Sector 62, Noida 
                    </div>
                    <div className="text-base text-white mb-1.5">
                        <b>Phone:</b> +91 8875920531
                    </div>
                    <div className="text-base text-white">
                        <b>Email:</b> sureshkumar7874900@gmail.com
                    </div>
                </div>
                <ul className="list-none p-0 m-0 flex gap-4 mt-6">
                    <li className="bg-white rounded-lg px-4 py-2 shadow font-medium text-[#22223b]">React</li>
                    <li className="bg-white rounded-lg px-4 py-2 shadow font-medium text-[#22223b]">JavaScript</li>
                    <li className="bg-white rounded-lg px-4 py-2 shadow font-medium text-[#22223b]">UI/UX</li>
                </ul>
            </div>
        </section>
        </div>
    );
};

export default About;