import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImg from '../assets/Ali.jpg';
import cvFile from '../assets/Ali Yasser Akila.pdf';
import {
    FaLinkedin, FaEnvelope, FaWhatsapp, FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap,
    FaNodeJs, FaJava, FaGitAlt, FaGithub, FaUserFriends, FaLightbulb, FaClock, FaBrain,
    FaSyncAlt, FaSearch, FaComments, FaCertificate, FaCogs, FaDatabase, FaServer, FaTools, FaGlobe, FaCode
} from 'react-icons/fa';
import {
    SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiSpringboot, SiRedux, SiPostman, SiJquery,
    SiNextdotjs, SiTypescript, SiDocker, SiFirebase, SiVercel, SiNetlify, SiDotnet, SiRedis,
    SiJest, SiMocha
} from 'react-icons/si';
import { assets } from "../assets/assets.js";

const frontendSkills = [
    { name: 'React.js', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'jQuery', icon: <SiJquery /> },
];

const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Spring Boot', icon: <SiSpringboot /> },
    { name: 'ASP.NET Core', icon: <SiDotnet /> },
    { name: 'C#', icon: <FaCode /> },
    { name: 'Entity Framework', icon: <FaServer /> },
];

const databaseSkills = [
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'SQL Server', icon: <FaDatabase /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Redis', icon: <SiRedis /> },
];

const toolsSkills = [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'GitHub Actions', icon: <FaCogs /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Vercel', icon: <SiVercel /> },
    { name: 'Netlify', icon: <SiNetlify /> },
];

const workflowSkills = [
    { name: 'Agile', icon: <FaSyncAlt /> },
    { name: 'Scrum', icon: <FaUserFriends /> },
    { name: 'CI/CD', icon: <FaCogs /> },
    { name: 'API Integration', icon: <FaGlobe /> },
    { name: 'Testing (Jest, Mocha)', icon: <SiJest /> },
];

const softSkills = [
    { name: 'Communication', icon: <FaComments /> },
    { name: 'Teamwork', icon: <FaUserFriends /> },
    { name: 'Problem Solving', icon: <FaLightbulb /> },
    { name: 'Adaptability', icon: <FaSyncAlt /> },
    { name: 'Time Management', icon: <FaClock /> },
    { name: 'Leadership', icon: <FaBrain /> },
    { name: 'Critical Thinking', icon: <FaBrain /> },
    { name: 'Creativity', icon: <FaLightbulb /> },
    { name: 'Attention to Detail', icon: <FaSearch /> },
    { name: 'Continuous Learning', icon: <FaBrain /> },
];

const certificates = [
    'Frontend Web Development – Meta',
    'Responsive Design – Coursera',
    'Java Programming – Udemy',
    'Spring Boot API – Code Academy',
];

const achievements = [
    'Built a full-stack e-commerce system with admin panel and Stripe integration.',
    'Developed medical booking app used by 500+ users with JWT & Firebase Auth.',
    'Created responsive portfolio and dashboard improving UX performance by 40%.',
    'Delivered 10+ projects with 100% on-time completion and high client satisfaction.',
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
                        I'm <span className="text-blue-500 font-semibold">Ali Yasser Amer</span>, a passionate Full-Stack Developer from Egypt with 3+ years of experience in building, optimizing, and deploying web applications.
                        I specialize in <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Spring Boot</strong>, and <strong>.NET</strong>, delivering efficient, scalable, and user-friendly systems.
                    </p>
                    <p className="text-gray-700 mb-6">
                        I’ve contributed to over <strong>10 projects</strong> with measurable impact — improving API performance by 35%, reducing load time by 40%, and increasing user engagement by 30%.
                    </p>
                    <p className="text-gray-700 mb-6">
                        I’m passionate about <strong>clean code</strong>, <strong>performance optimization</strong>, and <strong>intuitive UX</strong>.
                        Always eager to learn and explore new technologies to deliver the best user experience.
                    </p>

                    <p><strong className="text-blue-500 font-semibold">Age:</strong>  20 years old</p>
                    <p><strong className="text-blue-500 font-semibold">Phone:</strong>  +20 1123434175</p>
                    <p className="mb-4"><strong className="text-blue-500 font-semibold">Email:</strong>  yly741689@gmail.com</p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 m-8">
                        <a href={cvFile} download className="inline-flex items-center gap-2 px-6 py-3 hover:bg-blue-500 hover:text-white rounded-full font-medium shadow-lg transition">
                            <img src={assets.download_icon} alt="Download" className="w-5" />
                            Download CV
                        </a>
                        <a href="https://wa.me/201123434175" target="_blank" className="hover:bg-green-500 hover:text-white px-4 py-2 rounded-full flex items-center gap-2 transition shadow">
                            <FaWhatsapp /> WhatsApp
                        </a>
                        <a href="mailto:yly741689@gmail.com" className="hover:bg-gray-600 hover:text-white px-4 py-2 rounded-full flex items-center gap-2 transition shadow">
                            <FaEnvelope /> Email
                        </a>
                        <a href="https://www.linkedin.com/in/ali-yasser-amer-aa06202a2/" target="_blank" className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full flex items-center gap-2 transition shadow">
                            <FaLinkedin /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            {/* === Skills Sections === */}
            <div className="max-w-7xl mx-auto mt-16 space-y-16">

                {[
                    { title: 'Frontend Skills', skills: frontendSkills },
                    { title: 'Backend Skills', skills: backendSkills },
                    { title: 'Database Skills', skills: databaseSkills },
                    { title: 'Tools & DevOps', skills: toolsSkills },
                    { title: 'Workflow & Testing', skills: workflowSkills },
                    { title: 'Soft Skills', skills: softSkills },
                ].map((section, i) => (
                    <div key={i} data-aos="fade-up">
                        <h3 className="inline-flex items-center gap-3 text-2xl font-bold text-gray-800 mb-6">
                            <img src={assets.edu_icon} alt="tech" className="w-6 h-6" />
                            {section.title}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {section.skills.map((skill, index) => (
                                <div key={index} className="bg-white border border-gray-200 px-4 py-3 rounded-xl text-sm font-medium text-center shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center gap-2 hover:text-blue-500 group">
                                    <div className="text-2xl text-gray-600 group-hover:text-blue-500 transition">{skill.icon}</div>
                                    <div className="text-gray-700">{skill.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

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

                {/* Education */}
                <div data-aos="fade-up">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">🎓 Education</h3>
                    <ul className="space-y-4 text-gray-700">
                        <li>
                            <strong>Egyptian E-Learning University (EELU)</strong> — B.Sc. Information Technology (2023–2027) <br />
                            <span className="text-gray-500">GPA: 3.3</span>
                        </li>
                        <li>
                            <strong>Information Technology Institute (ITI)</strong> — Full-Stack Web Development (.NET Track) (Aug–Sep 2025) <br />
                            <span className="text-gray-500">Modules: MySQL, C#, ASP.NET, Entity Framework (120 Hours)</span>
                        </li>
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

                {/* Languages */}
                <div data-aos="fade-up">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">🌐 Languages</h3>
                    <ul className="text-gray-700 space-y-2">
                        <li><strong>Arabic:</strong> Native</li>
                        <li><strong>English:</strong> Professional Working Proficiency</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;

