import React, { useState } from "react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Tech", href: "#tech" },
    { name: "Ai", href: "#ai" },
    { name: "About", href: "#about" },
];
export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed w-full z-50 bg-[#0B1D51] shadow-sm font-['Roboto',sans-serif]">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <div className="text-2xl font-bold tracking-widest animate-pulse">
                    <h1 className="text-white">Port<span className="text-[#4E71FF]">folio</span></h1>
                </div>
                <div className="hidden md:flex space-x-8 font-['Roboto',sans-serif]">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-white font-medium transition duration-300 hover:text-yellow-300 group"
                        >
                            {link.name}
                            <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-500 bg-yellow-300"></span>
                        </a>
                    ))}
                </div>
                <button
                    className="md:hidden flex flex-col space-y-1 cursor-pointer"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle Menu"
                >
                    <span className={`block h-1 w-6 bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block h-1 w-6 bg-white rounded transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
                    <span className={`block h-1 w-6 bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </nav>
            {/* Animated Side Drawer Mobile Menu (Left Side) */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 shadow-lg transform transition-transform duration-500 z-40 ${
                    open ? "translate-x-0" : "-translate-x-full"
                } md:hidden`}
            >
                <button
                    className="absolute top-5 right-5 text-white text-3xl focus:outline-none cursor-pointer"
                    onClick={() => setOpen(false)}
                    aria-label="Close Menu"
                >
                    &times;
                </button>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white font-semibold text-xl transition duration-300 hover:text-yellow-300"
                            onClick={() => setOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
        </header>
    );
}