import React, { useRef, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const sideMenuRef = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        isMenuOpen ? closeMenu() : openMenu();
    };

    const openMenu = () => {
        setIsMenuOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        const handleClickOutside = (event) => {
            if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About me', href: '/about' },
        { label: 'Services', href: '/skills' },
        { label: 'My work', href: '/projects' },
        { label: 'Contact me', href: '/contact' }
    ];

    return (
        <nav className={`w-full fixed top-0 left-0 z-50 px-6 lg:px-12 py-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-white/30 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>

            {/* Logo */}
            <a href="/" className="text-xl sm:text-2xl font-bold text-gray-800">
                Ali Yasser
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-1 justify-center">
                <ul className="flex gap-6 lg:gap-10 rounded-full px-6 py-2 bg-white/60 backdrop-blur-sm shadow-sm">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
                                to={item.href}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
                {/* Contact Button */}
                <Link
                    className="hidden lg:flex items-center gap-2 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition shadow"
                    to="/contact"
                >
                    Contact <img src={assets.arrow_icon} alt="arrow" className="w-3" />
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="block md:hidden p-2 rounded-full hover:bg-gray-100 transition"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    <img
                        src={isMenuOpen ? assets.close_black : assets.menu_black}
                        alt="menu"
                        className="w-6"
                    />
                </button>
            </div>

            {/* Mobile Menu + Overlay */}
            <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {/* Overlay */}
                <div className="absolute inset-0  bg-black/30 backdrop-blur-sm" onClick={closeMenu}></div>

                {/* Side Menu */}
                <div
                    ref={sideMenuRef}
                    className={`absolute right-0 top-0 bottom-0 w-64 bg-white shadow-lg z-50 transition-transform duration-300 flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    {/* Close Button */}
                    <div className="absolute top-4 right-4">
                        <button
                            onClick={closeMenu}
                            aria-label="Close menu"
                            className="text-gray-700 hover:text-red-500 text-xl font-bold transition"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <ul className="flex flex-col p-6 pt-20">
                        {navItems.map((item, index) => (
                            <li key={index} className="mb-4">
                                <Link
                                    onClick={closeMenu}
                                    className="block py-2 text-gray-800 hover:text-blue-500 font-medium"
                                    to={item.href}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Contact Button */}
                    <Link
                        onClick={closeMenu}
                        to="/contact"
                        className="mt-auto mb-6 mx-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-center rounded-lg transition"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
