import React, { useEffect } from "react";
import { assets } from "../assets/assets.js";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
    {
        title: "Frontend Development",
        desc: "Build modern, fast and responsive UIs using React.js, Next.js, HTML, Tailwind CSS.",
        icon: assets.webDev,
        color: "from-blue-500 to-indigo-500",
    },
    {
        title: "Backend Development",
        desc: "Build robust backend systems using Node.js, Express, MongoDB or Spring Boot.",
        icon: assets.backend,
        color: "from-green-500 to-emerald-500",
    },
    {
        title: "Fullstack Projects",
        desc: "Create full working web apps from scratch with authentication, payments, and admin panel.",
        icon: assets.web_icon,
        color: "from-yellow-500 to-orange-500",
    },
    {
        title: "API Integration",
        desc: "Integrate services like Stripe, Razorpay, Paymob, Firebase, etc.",
        icon: assets.api,
        color: "from-pink-500 to-rose-500",
    },
    {
        title: "UI/UX Improvements",
        desc: "Redesign and improve layout, animations, and visual hierarchy for better experience.",
        icon: assets.design,
        color: "from-purple-500 to-fuchsia-500",
    },
    {
        title: "Admin Dashboard",
        desc: "Build dashboards to manage orders, users, and analytics.",
        icon: assets.admin,
        color: "from-cyan-500 to-sky-500",
    },
    {
        title: "Authentication System",
        desc: "Login/Register system using JWT, cookies, Google OAuth or Firebase Auth.",
        icon: assets.jwt,
        color: "from-red-500 to-rose-400",
    },
    {
        title: "Website Optimization",
        desc: "Improve speed, SEO and accessibility for better user experience and rankings.",
        icon: assets.support,
        color: "from-gray-700 to-gray-900",
    },
];

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section
            id="services"
            className="py-20 px-6 md:px-12 lg:px-20 bg-[#0f172a] text-white"
        >
            {/* Title */}
            <div className="text-center mb-14">
                <h2 className="text-4xl sm:text-5xl font-bold">
                    My <span className="text-blue-400">Services</span>
                </h2>
                <div className="mt-3 mx-auto w-24 h-1 bg-blue-500 rounded-full"></div>
                <p className="mt-4 text-gray-400 text-sm sm:text-base">
                    I provide both frontend and backend solutions with modern tech.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        data-aos="fade-up"
                        data-aos-delay={idx * 100}
                        className={`relative bg-gradient-to-br ${service.color} p-6 rounded-2xl shadow-md  transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:bg-white/10 backdrop-blur-md border border-white/10
`}
                    >
                        {/* Icon */}
                        <div className="flex justify-center mb-4">
                            <img
                                src={service.icon}
                                alt={service.title}
                                className="w-14 h-14 drop-shadow-lg"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-white text-center mb-2 tracking-wide">
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-center text-sm text-white/80 leading-relaxed">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>


            {/* CTA Button */}
            <div className="mt-16 text-center">
                <a
                    href="https://wa.me/201123434175?text=Hi%20Ali%2C%20I%20am%20interested%20in%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
                >
                    💬 Request a Service
                </a>
            </div>
        </section>
    );
};

export default Skills;
