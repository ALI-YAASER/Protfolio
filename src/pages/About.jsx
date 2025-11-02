import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImg from '../assets/Ali.jpg';
import cvFile from '../assets/Ali Yasser Akila.pdf';
import {
    FaLinkedin, FaEnvelope, FaWhatsapp, FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap,
    FaNodeJs, FaJava, FaGitAlt, FaGithub, FaUserFriends, FaLightbulb, FaClock, FaBrain,
    FaSyncAlt, FaSearch, FaComments, FaCertificate
} from 'react-icons/fa';
import {
    SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiSpringboot, SiRedux, SiPostman , SiJquery
} from 'react-icons/si';
import {assets} from "../assets/assets.js";

const techSkills = [
    { name: 'React.js', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'jQuery', icon: <SiJquery /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Spring Boot', icon: <SiSpringboot /> },
    { name: 'REST APIs', icon: <SiPostman /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
];

const softSkills = [
    { name: 'Problem Solving', icon: <FaLightbulb /> },
    { name: 'Teamwork', icon: <FaUserFriends /> },
    { name: 'Communication', icon: <FaComments /> },
    { name: 'Time Management', icon: <FaClock /> },
    { name: 'Continuous Learning', icon: <FaBrain /> },
    { name: 'Adaptability', icon: <FaSyncAlt /> },
    { name: 'Attention to Detail', icon: <FaSearch /> },
];

const certificates = [
    'Frontend Web Development – Meta',
    'Responsive Design – Coursera',
    'Java Programming – Udemy',
    'Spring Boot API – Code Academy',
];

const achievements = [
    'Built a full-stack e-commerce system',
    'Developed medical booking app with real users',
    'Created responsive portfolio and admin dashboard',
    'Maintained GPA 3.3 while learning advanced tech',
];

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="about" className="py-20 px-6 sm:px-12 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
                <div className="flex-shrink-0 mx-auto lg:mx-0" data-aos="fade-right">
                    <img
                        src={profileImg}
                        alt="Ali Yasser"
                        className="w-72 h-72 object-cover rounded-3xl shadow-lg border-4 border-gray-300"
                    />
                </div>

                <div className="flex-1 text-center lg:text-left" data-aos="fade-up">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">🧑‍💻 About Me</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        I'm <span className="text-blue-500 font-semibold">Ali Yasser Amer</span>, a full-stack developer based in Egypt.
                        , with a strong focus on both frontend and backend technologies.
                        I build fast, responsive, and scalable web applications using modern technologies and frameworks.
                    </p>
                    <p  className="text-gray-700 mb-6">
                        On the <strong className="text-blue-500 font-semibold"> frontend </strong>, I specialize in React.js, crafting interactive user interfaces with Tailwind CSS, JavaScript, and Redux.
                    </p>
                    <p  className="text-gray-700 mb-6">
                        On the<strong className="text-blue-500 font-semibold"> backend </strong>, I work with Node.js + Express.js for JavaScript-based development, and also use Java Spring Boot to build robust RESTful APIs and enterprise-grade systems.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Currently studying Information Technology at <strong>EELU</strong> with a GPA of 3.3.
                        I’m passionate about clean code, performance, and intuitive user experiences.
                    </p>
                    <p><strong className="text-blue-500 font-semibold">Age:</strong>  20 years old</p>
                    <p><strong className="text-blue-500 font-semibold">Phone:</strong>  +20 1123434175</p>
                    <p className="mb-4"><strong className="text-blue-500 font-semibold">Email:</strong>  yly741689@gmail.com</p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 m-8">
                        <a
                            href={cvFile}
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 hover:bg-blue-500 hover:text-white rounded-full font-medium shadow-lg transition"
                        >
                            <img src={assets.download_icon} alt="Download" className="w-5" />
                            Download CV
                        </a>
                        <a href="https://wa.me/201123434175" target="_blank" className=" hover:bg-green-500 hover:text-white px-4 py-2 rounded-full flex items-center gap-2 transition shadow">
                            <FaWhatsapp /> WhatsApp
                        </a>
                        <a href="mailto:yly741689@gmail.com" className=" hover:bg-gray-600 hover:text-white px-4 py-2 rounded-full flex items-center gap-2 transition shadow">
                            <FaEnvelope /> Email
                        </a>
                        <a href="https://www.linkedin.com/in/ali-yasser-amer-aa06202a2/" target="_blank" className=" hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full flex items-center gap-2 transition shadow">
                            <FaLinkedin /> LinkedIn
                        </a>

                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 space-y-16">
                {/* Tech Stack */}
                <div data-aos="fade-up">
                    <h3
                        data-aos="fade-right"
                        className="inline-flex items-center gap-3 text-2xl font-bold text-gray-800 mb-6"
                    >
                        <img src={assets.edu_icon} alt="tech" className="w-6 h-6" />
                        My Tech Stack
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {techSkills.map((skill, index) => (
                            <div key={index} className="bg-white border border-gray-200 px-4 py-3 rounded-xl text-sm font-medium text-center shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center gap-2 hover:text-blue-500 group">
                                <div className="text-3xl text-gray-600 group-hover:text-blue-500 transition">{skill.icon}</div>
                                <div className="text-gray-700">{skill.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div data-aos="fade-up">
                    <h3
                        data-aos="fade-right"
                        className="inline-flex items-center gap-3 text-2xl font-bold text-gray-800 mb-6"
                    >
                        <img src={assets.edu_icon} alt="tech" className="w-6 h-6" />
                        Soft Skills
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {softSkills.map((skill, index) => (
                            <div key={index} className="bg-white border border-gray-200 px-4 py-3 rounded-xl text-sm font-medium text-center shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center gap-2 hover:text-blue-500 group">
                                <div className="text-2xl text-gray-600 group-hover:text-blue-500 transition">{skill.icon}</div>
                                <div className="text-gray-700">{skill.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certificates */}
                <div data-aos="fade-up">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">🎓 Certificates</h3>
                    <ul className="space-y-3 pl-4 border-l-4 border-blue-200">
                        {certificates.map((cert, index) => (
                            <li key={index} className="flex items-center gap-3 text-gray-700">
                                <FaCertificate className="text-blue-500" />
                                <span>{cert}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Achievements */}
                <div data-aos="fade-up">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">🏆 Achievements</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
                        {achievements.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
