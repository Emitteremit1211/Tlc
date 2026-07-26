import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
} from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CheckCircle2, Send, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

/* ---------------------------------------------
   CONTENT
---------------------------------------------- */

const contactCards = [
    {
        icon: FaPhoneAlt,
        label: "Call Us",
        value: "978-552-9703",
        href: "tel:9785529703",
    },
    {
        icon: FaEnvelope,
        label: "Email Us",
        value: "tlc@tlcassistliving.com",
        href: "mailto:tlc@tlcassistliving.com",
    },
    {
        icon: FaMapMarkerAlt,
        label: "Visit Us",
        value: "497 North Main Street, Randolph, MA 02368",
        href: "https://www.google.com/maps/search/?api=1&query=497+North+Main+Street+Randolph+MA+02368",
    },
    {
        icon: FaClock,
        label: "Hours",
        value: "24/7 Care Available · Mon–Fri 9AM–5PM Office",
        href: null,
    },
];

const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook", color: "#1877F2" },
    { icon: FaTwitter, href: "#", label: "Twitter", color: "#1DA1F2" },
    { icon: FaInstagram, href: "#", label: "Instagram", color: "#E1306C" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
];

const serviceOptions = [
    "Skilled Nursing",
    "Personal Care Assistance",
    "Alzheimer's & Dementia Care",
    "24-Hour & Live-In Care",
    "Therapy Services (PT/OT/ST)",
    "Friendly Assistance for Elders",
    "Hospice Care",
    "One-on-One Care (HHA)",
    "Not Sure Yet",
];

const faqs = [
    {
        q: "How quickly will I hear back?",
        a: "We aim to respond within one business day. If it's urgent, calling 978-552-9703 directly is faster  our phone lines are open 24/7 for care-related needs.",
    },
    {
        q: "What areas do you serve?",
        a: "We're based in Randolph, Massachusetts, and proudly serve families across the surrounding communities.",
    },
    {
        q: "Can I request a specific caregiver?",
        a: "Yes  if you already have someone in mind or a strong preference (personality, experience, schedule), let us know when you reach out and we'll factor that into the match.",
    },
    {
        q: "Do you offer support outside regular office hours?",
        a: "Office hours are Monday–Friday, 9AM–5PM, but care itself is available 24/7  for anything time-sensitive, a phone call is always the fastest path to a real person.",
    },
];

/* ---------------------------------------------
   COMPONENT
---------------------------------------------- */

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error
    const [openFaq, setOpenFaq] = useState(0);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            // Replace these three with your actual EmailJS Service ID, Template ID, and Public Key
            await emailjs.send(
                "service_kvuyb2j",
                "template_efx95b9",
                {
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    service: form.service,
                    message: form.message,
                },
                "3Y3ooVswguahGAHd4"
            );

            setStatus("sent");
            setForm({ name: "", email: "", phone: "", service: "", message: "" });
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error");
        }
    };

    return (
        <>
            <Navbar />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

                .tlc-root { font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif; }
                .tlc-display { font-family: 'Fraunces', Georgia, serif; }

                .tlc-blob {
                    position: absolute;
                    border-radius: 9999px;
                    filter: blur(70px);
                    opacity: 0.5;
                    animation: tlc-drift 16s ease-in-out infinite;
                    pointer-events: none;
                }
                @keyframes tlc-drift {
                    0%, 100% { transform: translate(0px, 0px) scale(1); }
                    50%      { transform: translate(25px, -30px) scale(1.08); }
                }

                .tlc-glass {
                    background: rgba(255,255,255,0.5);
                    backdrop-filter: blur(22px) saturate(160%);
                    -webkit-backdrop-filter: blur(22px) saturate(160%);
                    border: 1px solid rgba(255,255,255,0.65);
                    box-shadow: 0 8px 32px rgba(15,42,61,0.14), inset 0 1px 0 rgba(255,255,255,0.6);
                }
                .tlc-glass-dark {
                    background: rgba(13,43,62,0.55);
                    backdrop-filter: blur(22px) saturate(160%);
                    -webkit-backdrop-filter: blur(22px) saturate(160%);
                    border: 1px solid rgba(255,255,255,0.14);
                    box-shadow: 0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08);
                }
                .tlc-sheen::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    background: linear-gradient(120deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 30%);
                    pointer-events: none;
                }
                .tlc-input {
                    background: rgba(255,255,255,0.6);
                    border: 1px solid rgba(13,43,62,0.12);
                }
                .tlc-input:focus {
                    outline: none;
                    border-color: #1B8C86;
                    box-shadow: 0 0 0 3px rgba(27,140,134,0.15);
                }

                @media (prefers-reduced-motion: reduce) {
                    .tlc-blob { animation: none; }
                }

                @keyframes tlc-fade-up {
                    from { opacity: 0; transform: translateY(18px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .tlc-fade-up {
                    animation: tlc-fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
                }

                @keyframes tlc-ring {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(27,140,134,0.35); }
                    50%      { box-shadow: 0 0 0 10px rgba(27,140,134,0); }
                }
                .tlc-ring {
                    animation: tlc-ring 2.4s ease-out infinite;
                }

                .tlc-faq-panel {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 0.4s ease;
                }
                .tlc-faq-panel.open {
                    grid-template-rows: 1fr;
                }
                .tlc-faq-inner {
                    overflow: hidden;
                }

                @media (prefers-reduced-motion: reduce) {
                    .tlc-fade-up, .tlc-ring { animation: none; }
                }
            `}</style>

            <div className="tlc-root w-full relative overflow-hidden bg-gradient-to-b from-[#EAF6F6] via-[#F3FAF9] to-white">

                {/* ambient background blobs */}
                <div className="tlc-blob w-[420px] h-[420px] bg-[#7FDCD2] top-[-120px] left-[-100px]" />
                <div className="tlc-blob w-[380px] h-[380px] bg-[#FFC9A3] top-[600px] right-[-120px]" />
                <div className="tlc-blob w-[300px] h-[300px] bg-[#9FD8F2] top-[1500px] left-[-80px]" />

                {/* HERO */}
                <section className="relative w-full pt-36 pb-16 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <span className="tlc-fade-up text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]" style={{ animationDelay: "0ms" }}>Get in Touch</span>
                        <h1 className="tlc-fade-up tlc-display mt-4 text-3xl md:text-6xl font-semibold text-[#0D2B3E] leading-tight" style={{ animationDelay: "120ms" }}>
                            Let's Talk About the Care You Need
                        </h1>
                        <p className="tlc-fade-up mt-6 text-[#4A5D6B] leading-relaxed max-w-xl mx-auto" style={{ animationDelay: "240ms" }}>
                            Whether it's a quick question or you're ready to set up care, our team is
                            available around the clock  reach out however is easiest for you.
                        </p>
                    </div>
                </section>

                {/* CONTACT CARDS */}
                <section className="relative w-full py-4 px-6 md:px-12">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactCards.map((c, i) => {
                            const Icon = c.icon;
                            const content = (
                                <>
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#0D2B3E]/10 mb-4">
                                        <Icon className="text-[#0D2B3E] text-lg" />
                                    </div>
                                    <p className="text-[#1B8C86] text-xs font-bold uppercase tracking-widest">{c.label}</p>
                                    <p className="mt-2 text-[#0D2B3E] text-sm font-medium leading-relaxed">{c.value}</p>
                                </>
                            );
                            return c.href ? (
                                <a
                                    key={i}
                                    href={c.href}
                                    target={c.href.startsWith("http") ? "_blank" : undefined}
                                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="tlc-glass tlc-fade-up rounded-3xl p-7 hover:-translate-y-1 transition block"
                                    style={{ animationDelay: `${i * 90}ms` }}
                                >
                                    {content}
                                </a>
                            ) : (
                                <div key={i} className="tlc-glass tlc-fade-up rounded-3xl p-7" style={{ animationDelay: `${i * 90}ms` }}>
                                    {content}
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* FORM + MAP */}
                <section className="w-full py-20 px-6 md:px-12">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

                        {/* Form */}
                        <div className="lg:col-span-3 tlc-glass relative overflow-hidden rounded-3xl p-8 md:p-10 tlc-sheen">
                            <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">Send a Message</span>
                            <h2 className="tlc-display mt-3 text-2xl md:text-3xl font-semibold text-[#0D2B3E]">
                                Tell Us What's Going On
                            </h2>
                            <p className="mt-3 text-[#4A5D6B] text-sm leading-relaxed">
                                Share a few details and we'll get back to you  usually within one business day.
                            </p>

                            {status === "sent" ? (
                                <div className="mt-8 flex items-start gap-3 bg-[#1B8C86]/10 border border-[#1B8C86]/20 rounded-2xl p-6">
                                    <CheckCircle2 className="w-6 h-6 text-[#1B8C86] shrink-0" />
                                    <div>
                                        <p className="font-semibold text-[#0D2B3E]">Message sent</p>
                                        <p className="text-sm text-[#4A5D6B] mt-1">
                                            Thank you for reaching out  our team will follow up with you soon.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="text-xs font-semibold text-[#0D2B3E] mb-1.5 block">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Jane Doe"
                                                className="tlc-input w-full rounded-xl px-4 py-3 text-sm text-[#0D2B3E] placeholder:text-[#4A5D6B]/50"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs font-semibold text-[#0D2B3E] mb-1.5 block">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="(978) 000-0000"
                                                className="tlc-input w-full rounded-xl px-4 py-3 text-sm text-[#0D2B3E] placeholder:text-[#4A5D6B]/50"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-xs font-semibold text-[#0D2B3E] mb-1.5 block">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="jane@example.com"
                                            className="tlc-input w-full rounded-xl px-4 py-3 text-sm text-[#0D2B3E] placeholder:text-[#4A5D6B]/50"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-xs font-semibold text-[#0D2B3E] mb-1.5 block">What kind of care are you asking about?</label>
                                        <select
                                            name="service"
                                            value={form.service}
                                            onChange={handleChange}
                                            className="tlc-input w-full rounded-xl px-4 py-3 text-sm text-[#0D2B3E]"
                                        >
                                            <option value="">Select a service</option>
                                            {serviceOptions.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-xs font-semibold text-[#0D2B3E] mb-1.5 block">Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Tell us a bit about your situation and what kind of support you're looking for..."
                                            className="tlc-input w-full rounded-xl px-4 py-3 text-sm text-[#0D2B3E] placeholder:text-[#4A5D6B]/50 resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D2B3E] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#1B8C86] transition disabled:opacity-60"
                                    >
                                        {status === "sending" ? "Sending..." : "Send Message"}
                                        {status !== "sending" && <Send className="w-4 h-4" />}
                                    </button>

                                    {status === "error" && (
                                        <p className="text-sm text-red-500">
                                            Something went wrong  please try again, or call us directly at 978-552-9703.
                                        </p>
                                    )}
                                </form>
                            )}
                        </div>

                        {/* Map + social + quick contact */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="tlc-glass rounded-3xl overflow-hidden p-2">
                                <iframe
                                    title="TLC Assist Living location"
                                    src="https://www.google.com/maps?q=497+North+Main+Street+Randolph+MA+02368&output=embed"
                                    className="w-full h-[280px] rounded-2xl border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            <div className="tlc-glass-dark rounded-3xl p-8">
                                <p className="text-[#7FDCD2] text-xs font-bold uppercase tracking-[0.2em] mb-3">Prefer to Talk Now?</p>
                                <a
                                    href="tel:9785529703"
                                    className="tlc-ring inline-block rounded-full tlc-display text-gray-700 text-2xl font-semibold hover:text-[#7FDCD2] transition"
                                >
                                    978-552-9703
                                </a>
                                <p className="text-gray-500 text-sm mt-2">Available 24/7 for care-related calls.</p>

                                <div className="mt-6 flex gap-3 flex-wrap">
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
                </section>

                {/* FAQ */}
                <section className="w-full py-16 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">Common Questions</span>
                            <h2 className="tlc-display mt-3 text-2xl md:text-4xl font-semibold text-[#0D2B3E]">
                                Before You Reach Out
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((item, i) => {
                                const isOpen = openFaq === i;
                                return (
                                    <div key={i} className="tlc-glass rounded-2xl overflow-hidden">
                                        <button
                                            onClick={() => setOpenFaq(isOpen ? -1 : i)}
                                            className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                                        >
                                            <span className="font-semibold text-[#0D2B3E] text-sm md:text-base">{item.q}</span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-[#1B8C86] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        <div className={`tlc-faq-panel ${isOpen ? "open" : ""}`}>
                                            <div className="tlc-faq-inner">
                                                <p className="px-6 pb-5 text-[#4A5D6B] text-sm leading-relaxed">
                                                    {item.a}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="w-full py-16 px-6 text-center">
                    <div className="tlc-glass max-w-4xl mx-auto rounded-3xl p-10 md:p-14">
                        <h2 className="tlc-display text-2xl md:text-4xl font-semibold text-[#0D2B3E]">
                            Ready to Set Up Care?
                        </h2>
                        <p className="mt-4 text-[#4A5D6B] max-w-xl mx-auto leading-relaxed">
                            Skip the form and book a consultation directly  we'll walk through your
                            situation and put together a plan together.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/appointment">
                                <button className="bg-[#0D2B3E] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#1B8C86] transition">
                                    Book a Consultation
                                </button>
                            </Link>
                            <Link to="/services">
                                <button className="tlc-glass text-[#0D2B3E] px-8 py-3 rounded-2xl font-semibold hover:bg-white/70 transition">
                                    View Our Services
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </>
    )
}

export default Contact