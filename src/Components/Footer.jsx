import React from 'react'
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
} from "react-icons/fa"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook", color: "#1877F2" },
    { icon: FaTwitter, href: "#", label: "Twitter", color: "#1DA1F2" },
    { icon: FaInstagram, href: "#", label: "Instagram", color: "#E1306C" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
]

const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About-Us" },
    { to: "/services", label: "Services" },
    { to: "/appointment", label: "Appointment" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact Us" },
]

const services = [
    "Skilled Nursing Care",
    "Personal Care Assistance",
    "Alzheimer's & Dementia Care",
    "24-Hour & Live-In Care",
    "Therapy Services",
]

const legalLinks = [
    { to: "/privacypolicy", label: "Privacy Policy" },
    { to: "/Termsandcondition", label: "Terms & Conditions" },
    { to: "/cookiespolicy", label: "Cookie Policy" },
    { to: "/dataprotection", label: "Data Protection" },
    { to: "/websitedisclaimer", label: "Website Disclaimer" },
]

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-[#0D2B3E] to-[#081C29] text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
                .tlc-display { font-family: 'Fraunces', Georgia, serif; }
                .tlc-blob {
                    position: absolute;
                    border-radius: 9999px;
                    filter: blur(80px);
                    opacity: 0.25;
                    pointer-events: none;
                }
                .tlc-glass-dark {
                    background: rgba(255,255,255,0.06);
                    backdrop-filter: blur(20px) saturate(150%);
                    -webkit-backdrop-filter: blur(20px) saturate(150%);
                    border: 1px solid rgba(255,255,255,0.12);
                }
            `}</style>

            {/* ambient blobs */}
            <div className="tlc-blob w-[380px] h-[380px] bg-[#1B8C86] -top-24 -left-24" />
            <div className="tlc-blob w-[320px] h-[320px] bg-[#FFC9A3] bottom-0 right-0" />

            {/* Top CTA strip */}
            <div className="relative z-10 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-8 md:px-16 py-6">
                    <div className="tlc-glass-dark rounded-2xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <p className="text-white font-semibold text-base">Have questions about care?</p>
                            <p className="text-white/50 text-sm mt-0.5">Reach out anytime our team is available around the clock.</p>
                        </div>
                        <div className="flex gap-3 flex-shrink-0">
                            <Link to="/appointment" className="bg-[#1B8C86] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#166f6a] transition">
                                Book Appointment
                            </Link>
                            <Link to="/contact" className="tlc-glass-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-white/10 transition">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main footer body */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Column 1 Brand */}
                    <div className="lg:col-span-1">
                        <h2 className="tlc-display text-xl font-semibold mb-2 text-white">
                            TLC Assist Living
                        </h2>
                        <div className="w-10 h-0.5 bg-[#1B8C86] mb-5" />
                        <p className="text-white/60 text-sm leading-7 mb-8">
                            TLC Assist Living provides compassionate, professional in-home care and skilled nursing services designed to support comfort, dignity, and independence.
                        </p>

                        <div className="space-y-4">
                            <a href="tel:9785529703" className="flex items-center gap-3 group">
                                <div className="w-9 h-9 rounded-xl tlc-glass-dark flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition">
                                    <FaPhoneAlt className="text-[#7FDCD2] text-xs" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs">Phone</p>
                                    <p className="text-white/80 text-sm group-hover:text-[#7FDCD2] transition">978-552-9703</p>
                                </div>
                            </a>

                            <a href="mailto:tlc@tlcassistliving.com" className="flex items-center gap-3 group">
                                <div className="w-9 h-9 rounded-xl tlc-glass-dark flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition">
                                    <FaEnvelope className="text-[#7FDCD2] text-xs" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs">Email</p>
                                    <p className="text-white/80 text-sm group-hover:text-[#7FDCD2] transition">tlc@tlcassistliving.com</p>
                                </div>
                            </a>

                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-xl tlc-glass-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <FaMapMarkerAlt className="text-[#7FDCD2] text-xs" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs">Address</p>
                                    <p className="text-white/80 text-sm leading-6">497 North Main Street<br />Randolph, MA 02368</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-xl tlc-glass-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <FaClock className="text-[#7FDCD2] text-xs" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs">Hours</p>
                                    <p className="text-white/80 text-sm leading-6">24/7 Care Available<br />Mon – Fri: 9:00 AM – 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/90 mb-2">Quick Links</h3>
                        <div className="w-8 h-0.5 bg-[#1B8C86] mb-6" />
                        <ul className="space-y-3">
                            {quickLinks.map(({ to, label }) => (
                                <li key={label}>
                                    <Link
                                        to={to}
                                        className="text-white/55 text-sm hover:text-[#7FDCD2] transition flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-[#7FDCD2]/40 group-hover:bg-[#7FDCD2] transition flex-shrink-0" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 Services */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/90 mb-2">Services</h3>
                        <div className="w-8 h-0.5 bg-[#1B8C86] mb-6" />
                        <ul className="space-y-3">
                            {services.map((s) => (
                                <li key={s}>
                                    <Link
                                        to="/services"
                                        className="text-white/55 text-sm hover:text-[#7FDCD2] transition flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-[#7FDCD2]/40 group-hover:bg-[#7FDCD2] transition flex-shrink-0" />
                                        {s}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 Visit Us + Social */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/90 mb-2">Visit Us</h3>
                        <div className="w-8 h-0.5 bg-[#1B8C86] mb-6" />

                        <div className="tlc-glass-dark rounded-2xl p-5 mb-8">
                            <p className="text-white/80 text-sm leading-6">
                                497 North Main Street<br />Randolph, MA 02368
                            </p>
                            <div className="mt-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#7FDCD2] flex-shrink-0" />
                                <span className="text-white/40 text-xs">24/7 Care Available · Mon–Fri 9AM–5PM</span>
                            </div>
                        </div>

                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/90 mb-4">Social Profiles</h3>
                        <div className="flex gap-3 flex-wrap">
                            {socialLinks.map(({ icon: Icon, href, label, color }) => (
                                <button
                                    key={label}
                                    onClick={() => window.open(href, "_blank")}
                                    title={label}
                                    style={{ backgroundColor: color }}
                                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl text-white hover:opacity-80 hover:scale-105 transition-all"
                                >
                                    <Icon size={16} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="relative z-10 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-8 md:px-16 py-6">

                    {/* Legal links */}
                    <div className="flex flex-wrap gap-2 mb-5 justify-center">
                        {legalLinks.map(({ to, label }) => (
                            <Link
                                key={label}
                                to={to}
                                className="text-xs text-white/35 hover:text-white border border-white/10 hover:border-white/25 px-3 py-1.5 rounded-full transition-all duration-200"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Copyright row */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
                        <p>
                            Copyright © {new Date().getFullYear()}{" "}
                            <span className="text-white/50 font-semibold">TLC Assist Living</span>. All rights reserved.
                        </p>
                        <div className='flex gap-2'>
                            <p>
                                designed and developed by 
                                <a href="https://personal-portfolio-rho-three-54.vercel.app/" target='_blank' className='hover:text-blue-600'>Temitope</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer