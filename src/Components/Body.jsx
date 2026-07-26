import React from 'react'
import { useState, useEffect } from "react";
import {
    HeartHandshake,
    UserCheck,
    Stethoscope,
    Brain,
    Moon,
    Activity,
    Users,
    Feather,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    CalendarCheck,
    ClipboardList,
    UserPlus,
    RefreshCcw,
    Phone,
    Mail,
    MapPin,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import nurses from "../assets/nurses.jpg";
import works from "../assets/works.jpg";
import llvid from "../assets/llvid.mp4";
import { Link } from "react-router-dom";

/* ---------------------------------------------
   CONTENT
---------------------------------------------- */

const slides = [
    {
        image: slide1,
        eyebrow: "Home Care, Reimagined",
        title: "Care That Feels Like Family",
        desc: "Personalized home-care and nursing support for seniors, those recovering from illness, or anyone who needs a steady hand at home. Every caregiver is certified, vetted, and chosen for genuine compassion.",
        btn: "Read More",
        link: "/about",
    },
    {
        image: slide2,
        eyebrow: "Clinical Support, At Home",
        title: "Skilled Nursing at Your Doorstep",
        desc: "Registered nurses and licensed practitioners handling medication management, wound care, and post-surgical recovery  so hospital-grade attention never means leaving the house.",
        btn: "Book a Nurse",
        link: "/contact",
    },
    {
        image: slide3,
        eyebrow: "Support For Every Season",
        title: "From Daily Help to Hospice Care",
        desc: "Whatever stage of life your loved one is in, our team adapts alongside them  companionship, therapy, memory care, or end-of-life support, always delivered with dignity.",
        btn: "Get Started",
        link: "/services",
    },
];

const services = [
    {
        title: "Skilled Nursing",
        desc: "Registered nurses and licensed practitioners providing medical support, wound care, medication management, and post-surgical care.",
        icon: Stethoscope,
    },
    {
        title: "Personal Care Assistance",
        desc: "Help with bathing, grooming, dressing, eating, and mobility  delivered with empathy, patience, and respect for independence.",
        icon: HeartHandshake,
    },
    {
        title: "Alzheimer's & Dementia Care",
        desc: "Specialized, patient-centered care that prioritizes safety, comfort, and emotional wellbeing at every stage of memory loss.",
        icon: Brain,
    },
    {
        title: "24-Hour & Live-In Care",
        desc: "Round-the-clock support for clients who need continuous supervision, companionship, and peace of mind through the night.",
        icon: Moon,
    },
    // {
    //     title: "Therapy Services (PT/OT/ST)",
    //     desc: "Licensed physical, occupational, and speech therapists working in the home to rebuild strength, mobility, and independence.",
    //     icon: Activity,
    // },
    // {
    //     title: "Friendly Assistance for Elders",
    //     desc: "Light housekeeping, meal preparation, errands, and genuine conversation that keeps daily life connected and unhurried.",
    //     icon: Users,
    // },
    // {
    //     title: "Hospice Care",
    //     desc: "Working closely with families and physicians to manage comfort and pain, offering steady companionship through a sensitive time.",
    //     icon: Feather,
    // },
    // {
    //     title: "One-on-One Care (HHA)",
    //     desc: "A dedicated caregiver focused solely on your loved one, ensuring consistent attention tailored to their specific needs.",
    //     icon: UserCheck,
    // },
];

const whyChooseUs = [
    { title: "Vetted, Certified Caregivers", desc: "Every caregiver clears background checks and certification before ever entering a client's home.", icon: "🛡️" },
    { title: "Always-On Availability", desc: "Care doesn't keep business hours, so neither do we  day, night, and weekends included.", icon: "🌙" },
    { title: "Plans Built Around the Person", desc: "No two care plans look alike; each is shaped by the client's routine, health needs, and preferences.", icon: "🧩" },
    { title: "Family Stays In the Loop", desc: "Regular updates and open communication mean families are never left guessing.", icon: "💬" },
    { title: "Rooted in Massachusetts", desc: "Based in Randolph and serving surrounding communities with local, dependable support.", icon: "📍" },
    { title: "Consistency Over Time", desc: "We monitor and adjust care as needs evolve, so support grows with the client instead of staying static.", icon: "🔄" },
];

const howItWorks = [
    { icon: CalendarCheck, title: "Schedule a Consultation", desc: "Tell us about your care needs. We listen, assess, and guide you toward the right next step." },
    { icon: ClipboardList, title: "Personalized Care Planning", desc: "We match you with the right caregiver and build a care plan shaped around your situation." },
    { icon: UserPlus, title: "Care Begins at Home", desc: "Your caregiver steps in  from companionship and daily help to skilled nursing care." },
    { icon: RefreshCcw, title: "Ongoing Support & Adjustments", desc: "We monitor progress and adjust the plan as needs change, so care never falls behind." },
];

const testimonials = [
    { text: "TLC Staffing Agency exceeded our expectations. The caregivers were kind, patient, and treated my mother with dignity. Knowing she was in safe hands gave our family complete peace of mind.", name: "Sarah M.", role: "Family Member" },
    { text: "From the first consultation to daily care, everything was handled professionally. The nurse assigned to my father was knowledgeable, attentive, and always on time.", name: "Michael R.", role: "Client's Son" },
    { text: "After my surgery, I needed short-term care at home. TLC Staffing Agency made the process easy and stress-free. Their team checked in regularly and adjusted care as I recovered.", name: "Janet K.", role: "Patient" },
    { text: "The caregivers didn't just provide care, they built a relationship with our dad. The compassion and respect they showed meant everything to us.", name: "Linda & James P.", role: "Family Members" },
    { text: "We needed round-the-clock support for our aunt, and TLC Staffing Agency delivered exactly what they promised. Their caregivers were attentive, gentle, and highly skilled.", name: "Angela T.", role: "Family Member" },
];

const stats = [
    { value: "8+", label: "Care Services" },
    { value: "24/7", label: "Support Available" },
    { value: "100%", label: "Personalized Plans" },
    { value: "MA", label: "Massachusetts Based" },
];

/* ---------------------------------------------
   COMPONENT
---------------------------------------------- */

const Body = () => {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4500);
        return () => clearInterval(interval);
    }, []);

    return (
        <>

            {/* Fonts + liquid-glass keyframes */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

                .tlc-root { font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif; }
                .tlc-display { font-family: 'Fraunces', Georgia, serif; }

                .tlc-blob {
                    position: absolute;
                    border-radius: 9999px;
                    filter: blur(70px);
                    opacity: 0.55;
                    animation: tlc-drift 16s ease-in-out infinite;
                    pointer-events: none;
                }
                @keyframes tlc-drift {
                    0%   { transform: translate(0px, 0px) scale(1); }
                    50%  { transform: translate(25px, -30px) scale(1.08); }
                    100% { transform: translate(0px, 0px) scale(1); }
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
                @keyframes tlc-hang {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50%      { transform: translateY(-10px) rotate(0.4deg); }
                }
                .tlc-hang {
                    animation: tlc-hang 6s ease-in-out infinite;
                    transform-origin: top center;
                }
                @media (prefers-reduced-motion: reduce) {
                    .tlc-hang { animation: none; }
                }
                .tlc-sheen::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    background: linear-gradient(120deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 30%);
                    pointer-events: none;
                }
                    .tlc-scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.tlc-scrollbar-hide::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
}
            `}</style>

            <div className="tlc-root w-full relative overflow-hidden bg-gradient-to-b from-[#EAF6F6] via-[#F3FAF9] to-white">

                {/* ambient background blobs (shared signature element) */}
                <div className="tlc-blob w-[420px] h-[420px] bg-[#7FDCD2] top-[-120px] left-[-100px]" />
                <div className="tlc-blob w-[380px] h-[380px] bg-[#FFC9A3] top-[500px] right-[-120px]" />
                <div className="tlc-blob w-[300px] h-[300px] bg-[#9FD8F2] top-[1400px] left-[-80px]" />

                {/* HERO SLIDER */}
                <section className="relative w-full h-screen overflow-hidden">
                    {slides.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-[1400ms] ease-in-out ${current === index
                                ? "opacity-100 scale-100 z-10"
                                : "opacity-0 scale-[1.06] z-0 pointer-events-none"
                                }`}
                        >
                            <img src={item.image} alt="slide" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B3E]/70 via-[#0D2B3E]/20 to-transparent"></div>

                            <div className="
                                absolute left-1/2 -translate-x-1/2 bottom-[36px] w-[90%] max-w-lg
                                md:left-14 md:translate-x-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:w-[520px]
                            ">
                                <div
                                    className={`tlc-glass tlc-hang relative overflow-hidden p-7 md:p-10 rounded-3xl tlc-sheen transition-all duration-[1400ms] ease-in-out ${current === index ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                                        }`}
                                >
                                    <span className="tlc-display italic text-[#1B8C86] text-sm md:text-base tracking-wide">{item.eyebrow}</span>
                                    <h1 className="tlc-display mt-2 text-2xl md:text-4xl font-semibold text-[#0D2B3E] leading-tight">{item.title}</h1>
                                    <p className="mt-4 text-sm md:text-base text-[#33495A] leading-relaxed">{item.desc}</p>
                                    <Link to={item.link}>
                                        <button className="mt-6 bg-[#0D2B3E] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#1B8C86] transition-colors">
                                            {item.btn} →
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
                        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white text-[#0D2B3E] shadow-xl z-20 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <button
                        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white text-[#0D2B3E] shadow-xl z-20 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`h-2.5 rounded-full cursor-pointer transition-all duration-500 ${current === index ? "bg-white w-7" : "bg-white/40 w-2.5"}`}
                            />
                        ))}
                    </div>
                </section>

                {/* QUICK INFO BAR */}
                <section className="relative z-10 -mt-8 px-4">
                    <div className="tlc-glass max-w-5xl mx-auto rounded-2xl py-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#0D2B3E] text-sm font-medium">
                        <a href="tel:9785529703" className="flex items-center gap-2 hover:text-[#1B8C86] transition">
                            <Phone className="w-4 h-4" /> 978-552-9703
                        </a>
                        <a href="mailto:tlc@tlcassistliving.com" className="flex items-center gap-2 hover:text-[#1B8C86] transition">
                            <Mail className="w-4 h-4" /> tlc@tlcassistliving.com
                        </a>
                        <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> Randolph, MA & Surrounding Communities
                        </span>
                    </div>
                </section>

                {/* INTRO / CARE SECTION */}
                <section className="w-full py-20">
                    <div className="px-6 md:px-12 text-center max-w-2xl mx-auto">
                        <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">Our Promise</span>
                        <h2 className="tlc-display mt-3 text-3xl md:text-5xl font-semibold text-[#0D2B3E]">
                            Care That Feels Like Family
                        </h2>
                        <p className="mt-6 text-[#4A5D6B] leading-relaxed">
                            At TLC Staffing Agency, we provide personalized home-care and nursing services
                            designed to enhance quality of life for seniors, individuals recovering from illness,
                            or anyone needing daily support. Our caregivers are certified, thoroughly vetted, and
                            committed to delivering dignified care with patience, respect, and compassion.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/services">
                                <button className="bg-[#0D2B3E] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#1B8C86] transition">
                                    Explore Services →
                                </button>
                            </Link>
                            <Link to="/appointment">
                                <button className="tlc-glass text-[#0D2B3E] px-6 py-3 rounded-2xl font-semibold hover:bg-white/70 transition">
                                    Request Consultation
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative mt-16 w-full max-w-6xl mx-auto px-6 md:px-12">
                        <div className="tlc-glass rounded-3xl overflow-hidden p-2">
                            <img src={nurses} alt="care team" className="w-full max-h-[420px] object-cover rounded-2xl" />
                        </div>
                    </div>
                </section>

                {/* STATS */}
                <section className="relative w-full py-12 px-6 md:px-12">
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {stats.map((stat, i) => (
                            <div key={i} className="tlc-glass rounded-2xl py-7 px-4">
                                <h3 className="tlc-display text-[#0D2B3E] text-3xl font-semibold">{stat.value}</h3>
                                <p className="text-[#4A5D6B] text-sm mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* WHO WE ARE */}
                <section className="w-full pt-20 pb-10 px-6 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">Who We Are</span>
                            <h2 className="tlc-display mt-3 text-3xl md:text-4xl font-semibold text-[#0D2B3E]">
                                A Trusted Name in Home Care
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                            <div className="tlc-glass rounded-3xl p-8 md:p-10">
                                <p className="text-[#4A5D6B] leading-relaxed">
                                    TLC Staffing Agency is a trusted home-care and staffing agency dedicated to
                                    supporting individuals and families with compassionate, professional in-home
                                    care. We specialize in matching clients with qualified caregivers and nurses
                                    who deliver care that respects each person's lifestyle, preferences, and health needs.
                                </p>
                                <p className="mt-4 text-[#4A5D6B] leading-relaxed">
                                    Based in <span className="font-semibold text-[#0D2B3E]">Randolph, Massachusetts</span>,
                                    we proudly serve families across surrounding communities, offering dependable
                                    care solutions that bring comfort, confidence, and peace of mind.
                                </p>
                                <div className="mt-8">
                                    <Link to="/about">
                                        <button className="bg-[#0D2B3E] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#1B8C86] transition">
                                            Learn More About Us →
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                {[
                                    { title: "Our Mission", desc: "Deliver high-quality, compassionate in-home care that enhances independence and wellbeing." },
                                    { title: "Our Vision", desc: "Be a trusted leader in home-care, known for excellence, integrity, and genuine commitment." },
                                    { title: "Our Values", desc: "Compassion, professional excellence, personalized care, and integrity in everything we do." },
                                ].map((card, i) => (
                                    <div key={i} className="tlc-glass rounded-2xl p-6">
                                        <Sparkles className="w-5 h-5 text-[#1B8C86] mb-3" />
                                        <h4 className="font-semibold text-[#0D2B3E]">{card.title}</h4>
                                        <p className="mt-2 text-sm text-[#4A5D6B] leading-relaxed">{card.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="relative w-full pt-20 pb-20 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">Our Care Services</span>
                        <h2 className="tlc-display mt-3 text-3xl md:text-5xl font-semibold text-[#0D2B3E]">
                            Professional Home-Care for Every Stage of Life
                        </h2>
                        <p className="mt-6 text-[#4A5D6B] leading-relaxed">
                            Whether your loved one needs skilled medical support, daily personal care, or
                            compassionate companionship, our certified caregivers deliver reliable, respectful,
                            and personalized care  all within the comfort of home.
                        </p>
                    </div>

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="tlc-glass relative overflow-hidden rounded-3xl p-6 hover:-translate-y-1.5 transition transform tlc-sheen">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#0D2B3E]/10">
                                        <Icon className="w-6 h-6 text-[#0D2B3E]" />
                                    </div>
                                    <h3 className="mt-5 text-base font-semibold text-[#0D2B3E]">{service.title}</h3>
                                    <p className="mt-3 text-[#4A5D6B] text-sm leading-relaxed">{service.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/services">
                            <button className="bg-[#0D2B3E] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#1B8C86] transition">
                                View All Services →
                            </button>
                        </Link>
                    </div>
                </section>

                {/* WHY CHOOSE US */}
                <section className="w-full py-20 px-6 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">Why Families Choose Us</span>
                            <h2 className="tlc-display mt-3 text-3xl md:text-4xl font-semibold text-[#0D2B3E]">
                                Care Rooted in Compassion, Guided by Expertise
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whyChooseUs.map((item, i) => (
                                <div key={i} className="tlc-glass rounded-2xl p-7 hover:-translate-y-1 transition">
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h3 className="text-[#0D2B3E] font-semibold text-base mb-2">{item.title}</h3>
                                    <p className="text-[#4A5D6B] text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section className="w-full py-20 px-6 md:px-12">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="tlc-glass rounded-3xl overflow-hidden p-2">
                            <img src={works} alt="how it works" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div>
                            <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">How It Works</span>
                            <h2 className="tlc-display mt-3 text-3xl md:text-5xl font-semibold text-[#0D2B3E]">
                                Simple, Supportive, Stress-Free
                            </h2>
                            <p className="mt-6 text-[#4A5D6B] leading-relaxed">
                                Getting quality care at home shouldn't be complicated. Our process is designed
                                to be simple, supportive, and tailored to your family's unique needs.
                            </p>
                            <div className="mt-8 space-y-5">
                                {howItWorks.map(({ icon: Icon, title, desc }, i) => (
                                    <div key={i} className="tlc-glass flex items-start gap-4 rounded-2xl p-4">
                                        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#0D2B3E]/10 shrink-0">
                                            <Icon className="w-5 h-5 text-[#0D2B3E]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#0D2B3E]">{title}</h4>
                                            <p className="text-[#4A5D6B] text-sm mt-1">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 flex gap-4">
                                <Link to="/appointment">
                                    <button className="bg-[#0D2B3E] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#1B8C86] transition">
                                        Get Started
                                    </button>
                                </Link>
                                <Link to="/services">
                                    <button className="tlc-glass text-[#0D2B3E] px-6 py-3 rounded-2xl font-semibold hover:bg-white/70 transition">
                                        Our Services
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* VIDEO */}
                <section className="w-full px-6 md:px-12">
                    <div className="tlc-glass max-w-6xl mx-auto rounded-3xl overflow-hidden p-2">
                        <video src={llvid} autoPlay loop muted playsInline className="w-full max-h-[480px] object-cover rounded-2xl" />
                    </div>
                </section>

                {/* CTA BANNER */}
                <section className="w-full py-20 px-6 text-center">
                    <div className="tlc-glass-dark max-w-4xl mx-auto rounded-3xl p-10 md:p-14">
                        <span className="text-[#7FDCD2] text-xs font-bold uppercase tracking-[0.2em]">Take the Next Step</span>
                        <h2 className="tlc-display text-3xl md:text-4xl font-semibold text-gray-700 mt-4">
                            Let's Build a Care Plan That Fits
                        </h2>
                        <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-8">
                            Reach out today and our team will help you find the right care solution for your
                            loved one  with support available around the clock.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <button className="bg-white text-[#0D2B3E] px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition shadow-lg">
                                    Contact Us
                                </button>
                            </Link>
                            <Link to="/apply">
                                <button className="bg-[#1B8C86] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#166f6a] transition shadow-lg">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                        <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center text-500 text-sm">
                            {[
                                "Certified & Vetted Caregivers",
                                "Personalized Care Plans",
                                "24/7 Available",
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-2 justify-center">
                                    <CheckCircle2 className="w-4 h-4 text-[#7FDCD2]" />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                {/* TESTIMONIALS */}
                <section className="w-full py-20 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-xs uppercase tracking-[0.2em] text-[#1B8C86] font-bold">TLC Staffing Agency</h3>
                        <h2 className="tlc-display mt-3 text-3xl md:text-5xl font-semibold text-[#0D2B3E]">What Families Are Saying</h2>
                    </div>

                    <div className="mt-16 overflow-x-auto tlc-scrollbar-hide">
                        <div className="flex gap-6 w-max snap-x snap-mandatory px-2">
                            {testimonials.map((t, i) => (
                                <div key={i} className="tlc-glass snap-start rounded-3xl p-8 w-[300px] md:w-[350px] flex-shrink-0 hover:-translate-y-2 transition">
                                    <div className="flex text-[#F2A24A] text-lg">★★★★★</div>
                                    <p className="mt-4 text-[#33495A] leading-relaxed text-sm">{t.text}</p>
                                    <h4 className="mt-6 font-semibold text-[#0D2B3E]">{t.name}</h4>
                                    <span className="text-sm text-[#4A5D6B]">{t.role}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Body