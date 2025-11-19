import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { assets } from '../assets/assets';
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaFacebook,
} from 'react-icons/fa6';

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="min-h-screen overflow-x-hidden  flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto w-full gap-16">

                {/* Left Side: Text */}
                <div className="space-y-6 text-center md:text-left">
                    <h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
                        data-aos="fade-up"
                    >
                        I’m Ali Yasser.<br />
                        I live in Fayoum, Egypt,<br />
                        where I build the future.
                    </h1>

                    <p
                        className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
                        data-aos="fade-up"
                    >
                        I'm a full-stack developer who crafts modern, responsive front-end experiences using
                        <span className="text-blue-500 font-medium"> React.js</span> and <span className="text-blue-500 font-medium"> Tailwind CSS</span>,
                        and builds robust backends with
                        <span className="text-pink-500 font-medium"> Node.js</span> and <span className="text-pink-500 font-medium"> Spring Boot</span>.
                    </p>

                    <p
                        className="text-gray-600 max-w-xl mx-auto md:mx-0"
                        data-aos="fade-up"
                    >
                        Currently pursuing a degree in Information Technology at <strong>EELU</strong> with a GPA of <strong>3.3</strong>, combining academic knowledge with real-world projects to deliver clean, scalable, and high-performing applications.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start" data-aos="zoom-in-up">
                        <Link
                            to="/contact"
                            className="bg-black text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-900 transition"
                        >
                            Connect with me
                            <img src={assets.right_arrow_white} alt="arrow" className="w-5" />
                        </Link>

                        <a
                            href="/Ali Yasser Akila.pdf"
                            download
                            className="border border-gray-700 px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition"
                        >
                            My Resume
                            <img src={assets.download_icon} alt="download" className="w-5" />
                        </a>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col items-center gap-6" data-aos="fade-left">

                    <img
                        src={assets.ali}
                        alt="Ali Yasser"
                        className="w-48 sm:w-64 md:w-72 lg:w-80 rounded-xl transform rotate-2 shadow-2xl border-4 border-gray-300"
                    />

                    {/* Social Icons */}
                    <div className="flex flex-wrap justify-center gap-6 text-xl pt-4">
                        <a
                            href="https://github.com/ALI-YAASER"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 hover:text-black transition"
                        >
                            <FaGithub />
                            <span className="text-sm sm:text-base">GitHub</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ali-yasser-amer-aa06202a2/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
                        >
                            <FaLinkedin />
                            <span className="text-sm sm:text-base">LinkedIn</span>
                        </a>

                        <a
                            href="https://www.instagram.com/ali_akila_16/?hl=ar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition"
                        >
                            <FaInstagram />
                            <span className="text-sm sm:text-base">Instagram</span>
                        </a>

                        <a
                            href="https://www.facebook.com/profile.php?id=100035505964639"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 hover:text-black transition"
                        >
                            <FaFacebook />
                            <span className="text-sm sm:text-base">Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
