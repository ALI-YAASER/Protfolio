

import React, { useEffect } from "react";
import AOS from "aos";
import {assets} from "../assets/assets.js";
import "aos/dist/aos.css";

const projects = [
    {
        title: "Appointment Doctor App",
        description: "A full-stack medical booking system with patient/doctor portals and real-time appointments.",
        github: "https://github.com/ALI-YAASER/Appointment-doctor",
        live: "https://appointment-doctor.vercel.app/",
        skills: ["React", "Node.js", "Express", "MongoDB", "JWT", "Multer"],
        images: [
            assets.appoinment1,
            assets.appoinment2,
            assets.appoinment3,
            assets.appoinment,
        ],
    },
    {
        title: "E-Commerce Full Stack",
        description: "An online shopping platform with product listings, cart, user auth, and order management.",
        github: "https://github.com/ALI-YAASER/e-commerce-fullStack",
        live: "https://e-commerce-fullstack-ali.vercel.app",
        skills: ["React", "Redux","Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe"],
        images: [
            assets.ecommerce1,
            assets.ecommerce2,
            assets.ecommerce3,
        ],
    },

    {
        title: "Education Website",
        description: "A responsive education-themed site with landing page, course listings, and contact section.",
        github: "https://github.com/ALI-YAASER/Eduction-website",
        live: "https://eduction-website-beta.vercel.app/",
        skills: ["HTML", "CSS", "JavaScript"],
        images: [
            assets.eduction1,
            assets.eduction2,
        ],
    },
    {
        title: "HTML/CSS Static Design",
        description: "A clean and modern design built using just HTML5 and CSS3. Great for portfolios or landing pages.",
        github: "https://github.com/ALI-YAASER/Project-HTML-CSS",
        live: "https://project-html-css-nu.vercel.app/",
        skills: ["HTML", "CSS"],
        images: [
            assets.html_css
        ],
    },
    {
        title: "Simple Store",
        description: "A clean and simple e-commerce store with product listing, cart, and responsive layout.",
        github: "https://github.com/ALI-YAASER/Simple-Store",
        live: "https://simple-store-eight.vercel.app/",
        skills: ["HTML", "CSS", "JavaScript"],
        images: [assets.soter1, assets.soter2],
    },
    {
        title: "XO Game",
        description: "A fun, browser-based XO (Tic Tac Toe) game using HTML, CSS, and JavaScript.",
        github: "https://github.com/ALI-YAASER/XO-Game",
        live: "https://xo-game-omega.vercel.app/",
        skills: ["JavaScript", "HTML", "CSS"],
        images: [
            assets.ox
        ],
    },
];

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="projects" className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
            <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold inline-flex text-gray-800"><img src={assets.web_icon} alt='..' className='w-8 h-8 md:w-10 md:h-10 mx-3 my-3'/> My Projects</h2>
                <p className="text-gray-600 mt-3">Some of the best work I've built across full stack, UI, and backend.</p>
                <div className="mt-3 mx-auto w-24 h-1 bg-blue-500 rounded-full"></div>
            </div>

            <div className="space-y-16 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-6 md:p-10 group"
                        data-aos="fade-up"
                    >
                        {/* Gradient Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl" />

                        {/* Title */}
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>

                        {/* Project Images */}
                        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
                            {project.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`${project.title} image ${i + 1}`}
                                    className="h-48 w-auto rounded-xl border shadow-sm hover:scale-105 transition"
                                />
                            ))}
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 text-sm mt-5 mb-6">
                            {project.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-blue-100 transition"
                                >
              {skill}
            </span>
                            ))}
                        </div>

                        {/* Project Links */}
                        <div className="flex flex-wrap gap-4 mt-auto">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition"
                            >
                                🔗 GitHub
                            </a>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium hover:bg-green-600 hover:text-white transition"
                            >
                                🌐 Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Projects;
