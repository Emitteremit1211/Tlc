import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.webp";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    const linkClass = (path) =>
        `relative font-semibold text-[15px] transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#17B7F5] after:transition-all after:duration-300 ${pathname === path
            ? "text-[#17B7F5] after:w-full"
            : "text-gray-700 hover:text-[#17B7F5] after:w-0 hover:after:w-full"
        }`;

    return (
        <>
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${scrolled
                    ? "bg-white/20 backdrop-blur-3xl backdrop-saturate-200 border-b border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.15)] py-3"
                    : "bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10 py-4"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between rounded-2xl">

                    {/* Logo */}
                    <Link to="/">
                        <div className="flex items-center gap-3">
                            <img
                                src={logo}
                                alt="L&L Staffing Solution"
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8 ">

                        <Link to="/" className={linkClass("/")}>
                            Home
                        </Link>

                        <Link to="/about" className={linkClass("/about")}>
                            About
                        </Link>

                        <Link to="/services" className={linkClass("/services")}>
                            Services
                        </Link>

                        <Link to="/Appointment" className={linkClass("/Appointment")}>
                            Appointment
                        </Link>

                        <Link to="/jobs" className={linkClass("/jobs")}>
                            Blog
                        </Link>

                        <Link to="/contact" className={linkClass("/contact")}>
                            Contact
                        </Link>
                        <Link to="/faq" className={linkClass("/faq")}>
                            FAQ
                        </Link>

                        <Link
                            to="/contact"
                            className="
  relative overflow-hidden
  px-6 py-3 rounded-full
  bg-gradient-to-r
  from-sky-500
  via-cyan-500
  to-blue-600
  text-white
  font-semibold
  shadow-lg shadow-cyan-500/30
  hover:scale-105
  hover:shadow-cyan-500/50
  transition-all duration-300"
                        >
                            Request Service
                        </Link>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="lg:hidden"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu className="w-8 h-8 text-[#1B3A5C]" />
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[998] transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 left-0 h-screen w-[80%] max-w-sm bg-white z-[999] shadow-2xl transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-5 border-b">

                    <div className="flex items-center gap-3">
                        <img src={logo} className="h-10" alt="" />
                    </div>

                    <button onClick={() => setIsOpen(false)}>
                        <X className="w-7 h-7 text-[#1B3A5C]" />
                    </button>

                </div>

                {/* Links */}
                <div className="flex flex-col px-6 py-8 gap-6">

                    <Link onClick={() => setIsOpen(false)} className={linkClass("/")} to="/">
                        Home
                    </Link>

                    <Link onClick={() => setIsOpen(false)} className={linkClass("/about")} to="/about">
                        About
                    </Link>

                    <Link onClick={() => setIsOpen(false)} className={linkClass("/services")} to="/services">
                        Services
                    </Link>

                    <Link onClick={() => setIsOpen(false)} className={linkClass("/Appointment")} to="/Appointment">
                        Appointment
                    </Link>

                    <Link onClick={() => setIsOpen(false)} className={linkClass("/jobs")} to="/jobs">
                        Blog
                    </Link>

                    <Link onClick={() => setIsOpen(false)} className={linkClass("/contact")} to="/contact">
                        Contact
                    </Link>

                    <Link to="/faq" className={linkClass("/faq")}>
                        FAQ
                    </Link>
                    <Link
                        to="/apply"
                        onClick={() => setIsOpen(false)}
                        className="mt-3 text-center bg-[#17B7F5] hover:bg-[#139fd6] text-white py-3 rounded-lg font-semibold transition"
                    >
                        Request a Service
                    </Link>

                </div>
            </div>
        </>
    );
};

export default Navbar;