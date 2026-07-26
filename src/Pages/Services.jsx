import React from 'react'
import {
    Stethoscope,
    HeartHandshake,
    Brain,
    Moon,
    Activity,
    Users,
    Feather,
    UserCheck,
    ArrowRight,
    CalendarCheck,
    ClipboardList,
    UserPlus,
    RefreshCcw,
    CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
 
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import servicesHero from "../assets/nurses.jpg";


const services = [
    {
        title: "Skilled Nursing",
        icon: Stethoscope,
        tagline: "Clinical support, delivered at home",
        desc: "Registered nurses and licensed practitioners bring hospital-grade attention into the home managing medications, tracking vital signs, and coordinating directly with your physician so recovery or chronic-condition management never means an unnecessary trip out.",
        bullets: [
            "Medication administration & management",
            "Wound care & dressing changes",
            "Vital signs & ongoing health monitoring",
            "Coordination with your physician",
        ],
    },
    {
        title: "Personal Care Assistance",
        icon: HeartHandshake,
        tagline: "Everyday help, delivered with dignity",
        desc: "Bathing, dressing, grooming, and mobility can become quietly exhausting or unsafe without support. Our caregivers step in for the parts of the day that matter most, always led by the client's own pace and preferences.",
        bullets: [
            "Bathing, grooming & dressing support",
            "Mobility & transfer assistance",
            "Incontinence care",
            "Meal assistance & feeding support",
        ],
    },
    {
        title: "Alzheimer's & Dementia Care",
        icon: Brain,
        tagline: "Patient, structured, safety-first care",
        desc: "Caregivers trained specifically in memory care bring structure and calm to unpredictable days reducing wandering risk, easing confusion, and giving family caregivers real, scheduled breaks without guilt.",
        bullets: [
            "Memory-care trained caregivers",
            "Structured daily routines",
            "Wandering & safety supervision",
            "Respite time for family caregivers",
        ],
    },
    {
        title: "24-Hour & Live-In Care",
        icon: Moon,
        tagline: "Continuous care, day and night",
        desc: "For clients who can't safely be left alone, we coordinate caregiver shifts so coverage is continuous without any one caregiver being overextended meaning consistent alertness through the night, not just the day.",
        bullets: [
            "Round-the-clock supervision",
            "Overnight safety checks",
            "Coordinated, rotating caregiver shifts",
            "Built for clients who can't be left alone",
        ],
    },
    {
        title: "Therapy Services (PT/OT/ST)",
        icon: Activity,
        tagline: "Rebuilding strength and independence",
        desc: "Licensed physical, occupational, and speech therapists work with clients in the environment they'll actually be living in which makes strength, balance, daily-living skills, and communication progress translate directly to real life.",
        bullets: [
            "Physical therapy for strength & mobility",
            "Occupational therapy for daily living skills",
            "Speech therapy for communication & swallowing",
            "Home safety & fall-risk assessments",
        ],
    },
    {
        title: "Friendly Assistance for Elders",
        icon: Users,
        tagline: "Companionship that fights isolation",
        desc: "Sometimes the most valuable support isn't clinical it's a familiar face, light help around the house, and real conversation. This service is built around connection as much as task completion.",
        bullets: [
            "Friendly, consistent companionship",
            "Light housekeeping & meal preparation",
            "Errands & appointment accompaniment",
            "Reducing isolation through real conversation",
        ],
    },
    {
        title: "Hospice Care",
        icon: Feather,
        tagline: "Comfort and dignity, together",
        desc: "Working alongside your hospice medical team, we focus on comfort, pain-aware support, and steady companionship for the client and for the family walking through this alongside them.",
        bullets: [
            "Pain & comfort-focused support",
            "Close coordination with hospice medical teams",
            "Emotional support for both client and family",
            "Dignity-centered, unhurried care",
        ],
    },
    {
        title: "One-on-One Care (HHA)",
        icon: UserCheck,
        tagline: "One dedicated caregiver, full continuity",
        desc: "Instead of rotating faces, one caregiver is matched and stays consistent learning routines, preferences, and personality over time. That familiarity alone can make an enormous difference, especially for clients living with memory loss.",
        bullets: [
            "One consistent, dedicated caregiver",
            "Familiarity and trust built over time",
            "Fully customized daily routine",
            "Ideal for clients who thrive on consistency",
        ],
    },
];
 
const howItWorks = [
    { icon: CalendarCheck, title: "Schedule a Consultation", desc: "Tell us about your care needs. We listen, assess, and guide you toward the right next step." },
    { icon: ClipboardList, title: "Personalized Care Planning", desc: "We match you with the right caregiver and build a care plan shaped around your situation." },
    { icon: UserPlus, title: "Care Begins at Home", desc: "Your caregiver steps in from companionship and daily help to skilled nursing care." },
    { icon: RefreshCcw, title: "Ongoing Support & Adjustments", desc: "We monitor progress and adjust the plan as needs change, so care never falls behind." },
];
 


const Services = () => {
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
 
                @media (prefers-reduced-motion: reduce) {
                    .tlc-blob { animation: none; }
                }
            `}</style>
 
            <div className="tlc-root w-full relative overflow-hidden bg-gradient-to-b from-[#EAF6F6] via-[#F3FAF9] to-white">
 
                {/* ambient background blobs */}
                <div className="tlc-blob w-[420px] h-[420px] bg-[#7FDCD2] top-[-120px] left-[-100px]" />
                <div className="tlc-blob w-[380px] h-[380px] bg-[#FFC9A3] top-[520px] right-[-120px]" />
                <div className="tlc-blob w-[300px] h-[300px] bg-[#9FD8F2] top-[1600px] left-[-80px]" />
 
                {/* HERO */}
                <section className="relative w-full pt-36 pb-16 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">Our Care Services</span>
                        <h1 className="tlc-display mt-4 text-3xl md:text-6xl font-semibold text-[#0D2B3E] leading-tight">
                            Professional Home Care, Matched to Every Need
                        </h1>
                        <p className="mt-6 text-[#4A5D6B] leading-relaxed max-w-2xl mx-auto">
                            From clinical nursing to daily companionship, every service below is delivered
                            by certified, background-checked caregivers and shaped around the person
                            receiving it, not a fixed package.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/appointment">
                                <button className="bg-[#0D2B3E] text-white px-7 py-3 rounded-2xl font-semibold hover:bg-[#1B8C86] transition">
                                    Request a Consultation →
                                </button>
                            </Link>
                            <Link to="/contact">
                                <button className="tlc-glass text-[#0D2B3E] px-7 py-3 rounded-2xl font-semibold hover:bg-white/70 transition">
                                    Talk to Our Team
                                </button>
                            </Link>
                        </div>
                    </div>
 
                    <div className="relative mt-14 w-full max-w-6xl mx-auto">
                        <div className="tlc-glass rounded-3xl overflow-hidden p-2">
                            <img src={servicesHero} alt="TLC Assist Living caregiver with client" className="w-full max-h-[380px] object-cover rounded-2xl" />
                        </div>
                    </div>
                </section>
 
                {/* QUICK STATS */}
                <section className="relative w-full py-4 px-6 md:px-12">
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { value: "8", label: "Care Services" },
                            { value: "24/7", label: "Support Available" },
                            { value: "100%", label: "Personalized Plans" },
                            { value: "MA", label: "Massachusetts Based" },
                        ].map((stat, i) => (
                            <div key={i} className="tlc-glass rounded-2xl py-7 px-4">
                                <h3 className="tlc-display text-[#0D2B3E] text-3xl font-semibold">{stat.value}</h3>
                                <p className="text-[#4A5D6B] text-sm mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>
 
                {/* DETAILED SERVICES */}
                <section className="w-full py-20 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto text-center mb-14">
                        <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">What We Offer</span>
                        <h2 className="tlc-display mt-3 text-3xl md:text-5xl font-semibold text-[#0D2B3E]">
                            A Service for Every Stage of Care
                        </h2>
                        <p className="mt-6 text-[#4A5D6B] leading-relaxed">
                            Explore each service below. Every plan can also combine more than one of these
                            most clients' needs don't fit neatly into a single category, and neither do our plans.
                        </p>
                    </div>
 
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="tlc-glass relative overflow-hidden rounded-3xl p-8 md:p-9 flex flex-col tlc-sheen">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#0D2B3E]/10 shrink-0">
                                            <Icon className="w-7 h-7 text-[#0D2B3E]" />
                                        </div>
                                        <span className="tlc-display italic text-[#1B8C86] text-sm mt-2 text-right">{service.tagline}</span>
                                    </div>
 
                                    <h3 className="mt-6 text-xl font-semibold text-[#0D2B3E]">{service.title}</h3>
                                    <p className="mt-3 text-[#4A5D6B] text-sm leading-relaxed">{service.desc}</p>
 
                                    <div className="mt-6 space-y-2.5">
                                        {service.bullets.map((b, i) => (
                                            <div key={i} className="flex items-start gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-[#1B8C86] shrink-0 mt-0.5" />
                                                <p className="text-[#33495A] text-sm leading-relaxed">{b}</p>
                                            </div>
                                        ))}
                                    </div>
 
                                    <div className="mt-7 pt-6 border-t border-[#0D2B3E]/10">
                                        <Link
                                            to="/appointment"
                                            className="inline-flex items-center gap-2 text-[#0D2B3E] font-semibold text-sm hover:text-[#1B8C86] transition group"
                                        >
                                            Request This Service
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
 
                {/* HOW IT WORKS (condensed, standalone) */}
                <section className="w-full py-16 px-6 md:px-12">
                    <div className="max-w-6xl mx-auto tlc-glass-dark rounded-3xl p-10 md:p-14">
                        <div className="text-center mb-12">
                            <span className="text-[#7FDCD2] text-xs font-bold uppercase tracking-[0.2em]">Getting Started</span>
                            <h2 className="tlc-display mt-3 text-2xl md:text-3xl font-semibold text-gray-700">
                                Simple, Supportive, and Stress-Free
                            </h2>
                        </div>
 
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {howItWorks.map(({ icon: Icon, title, desc }, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 mb-4">
                                        <Icon className="w-5 h-5 text-[#7FDCD2]" />
                                    </div>
                                    <h4 className="font-semibold text-gray-500 text-sm">{title}</h4>
                                    <p className="mt-2 text-gray-500 text-sm leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
 
                {/* CTA */}
                <section className="w-full py-16 px-6 text-center">
                    <div className="tlc-glass max-w-4xl mx-auto rounded-3xl p-10 md:p-14">
                        <h2 className="tlc-display text-2xl md:text-4xl font-semibold text-[#0D2B3E]">
                            Not Sure Which Service Fits?
                        </h2>
                        <p className="mt-4 text-[#4A5D6B] max-w-xl mx-auto leading-relaxed">
                            That's exactly what the consultation is for. Tell us what's going on, and we'll
                            help you figure out the right combination of support no pressure, just a conversation.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/appointment">
                                <button className="bg-[#0D2B3E] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#1B8C86] transition">
                                    Book a Consultation
                                </button>
                            </Link>
                            <Link to="/contact">
                                <button className="tlc-glass text-[#0D2B3E] px-8 py-3 rounded-2xl font-semibold hover:bg-white/70 transition">
                                    Contact Us
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

export default Services