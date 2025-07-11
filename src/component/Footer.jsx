import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white px-6 py-10 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:justify-between md:items-center">

                {/* Left: Navigation Links */}
                <div className="flex flex-wrap gap-5 justify-center md:justify-start text-sm text-gray-300">
                    <Link to="/" className="hover:text-blue-400 transition">Home</Link>
                    <Link to="/about" className="hover:text-blue-400 transition">About</Link>
                    <Link to="/skills" className="hover:text-blue-400 transition">Services</Link>
                    <Link to="/projects" className="hover:text-blue-400 transition">My Work</Link>
                    <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
                </div>

                {/* Middle: Social Icons */}
                <div className="flex justify-center gap-5 text-xl text-gray-300">
                    <a href="https://github.com/ALI-YAASER" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/ali-yasser-amer-aa06202a2/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100035505964639" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <FaFacebook />
                    </a>
                </div>

                {/* Right: Copyright */}
                <div className="text-center text-xs text-gray-400">
                    © {new Date().getFullYear()} Ali Yasser. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
