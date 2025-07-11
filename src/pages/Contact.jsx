"use client";

import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import {assets} from "../assets/assets.js";

export default function Contact() {
    const form = useRef();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_gk7qwec",
                "template_uhwjp0d",
                form.current,
                "B_fhg5eWsWMIy0eAR"
            )
            .then(
                (result) => {
                    console.log("Message sent ✅", result.text);
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.error("❌ Error sending message:", error.text);
                    alert("Failed to send message!");
                }
            );
    };

    return (
        <section
            id="contact"
            className="min-h-screen px-6 py-20 flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-white"
        >
            <div className="max-w-3xl w-full text-center">
                <h2
                    className="text-4xl font-bold inline-flex items-center gap-3 text-gray-800 mb-4"
                    data-aos="fade-up"
                >
                    <img
                        src={assets.mail_icon}
                        alt="Mail Icon"
                        className="w-8 h-8 md:w-10 md:h-10"
                    />
                    Connect with Me
                </h2>

                <p
                    className="text-gray-600 mb-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Feel free to reach out! I’m always open to discussing new
                    projects or collaboration.
                </p>

                {/* Contact Links */}
                <div
                    className="flex flex-wrap justify-center gap-4 mb-10"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                >
                    <a
                        href="https://wa.me/201123434175"
                        target="_blank"
                        className="flex items-center gap-2 hover:bg-green-500 hover:text-white px-5 py-2.5 rounded-full shadow-md transition"
                    >
                        <FaWhatsapp className="text-lg" /> WhatsApp
                    </a>
                    <a
                        href="mailto:yly741689@gmail.com"
                        className="flex items-center gap-2 hover:bg-gray-600 hover:text-white px-5 py-2.5 rounded-full shadow-md transition"
                    >
                        <FaEnvelope className="text-lg" /> Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ali-yasser-amer-aa06202a2/"
                        target="_blank"
                        className="flex items-center gap-2 hover:bg-blue-500 hover:text-white px-5 py-2.5 rounded-full shadow-md transition"
                    >
                        <FaLinkedin className="text-lg" /> LinkedIn
                    </a>
                </div>

                {/* Contact Form */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="bg-white rounded-2xl shadow-md p-6 md:p-8 w-full space-y-5 border border-gray-200"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <input
                            type="email"
                            name="reply_to"
                            placeholder="Your Email"
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow"
                    >
                        Send Message →
                    </button>
                </form>
            </div>
        </section>
    );
}
