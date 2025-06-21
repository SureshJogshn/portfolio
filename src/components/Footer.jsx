import React from 'react';

const Footer = () => (
    <footer
        id="footer"
        className="bg-gray-900 text-white font-['Roboto',sans-serif] text-center py-4 fixed left-0 bottom-0 w-full font-sans"
    >
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
);

export default Footer