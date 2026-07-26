import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import {
    Target,
    Eye,
    HeartHandshake,
    Award,
    UserCheck,
    ShieldCheck,
    MapPin,
    ClipboardCheck,
    GraduationCap,
    UserPlus,
    MessageCircle,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";


// Swap these for your own photos whenever you have them  same assets folder pattern as Body.jsx
import aboutHero from "../assets/about-Hero.jpg";
import aboutSide from "../assets/about-Side.jpg";

/* ---------------------------------------------
   CONTENT
---------------------------------------------- */

const coreValues = [
    {
        title: "Compassion",
        desc: "We treat every client with empathy, patience, and respect  care starts with how we make people feel, not just what we do for them.",
        icon: HeartHandshake,
    },
    {
        title: "Professional Excellence",
        desc: "We uphold the highest standards in caregiving through ongoing training, supervision, and accountability at every level.",
        icon: Award,
    },
    {
        title: "Personalized Care",
        desc: "Every care plan is tailored to the individual  no one-size-fits-all solutions, because no two families' needs are alike.",
        icon: UserCheck,
    },
    {
        title: "Integrity & Trust",
        desc: "We communicate openly and act in the best interest of our clients and their families, always.",
        icon: ShieldCheck,
    },
];

const screeningSteps = [
    {
        title: "Background Checks & Verification",
        desc: "Every caregiver is background-checked and their certifications verified before they ever meet a client.",
        icon: ClipboardCheck,
    },
    {
        title: "Skills & Compatibility Review",
        desc: "We assess experience, temperament, and fit  matching personality and skill set to each client's specific needs.",
        icon: UserPlus,
    },
    {
        title: "Ongoing Training",
        desc: "Caregivers keep building their skills through continued training, so care quality never stands still.",
        icon: GraduationCap,
    },
    {
        title: "Open Family Communication",
        desc: "We check in regularly and stay reachable, so families always know how their loved one is doing.",
        icon: MessageCircle,
    },
];

const trustPoints = [
    "Certified and background-checked caregivers",
    "Personalized care plans for every client",
    "Available around the clock for care and support",
    "Rooted in Randolph, MA and its surrounding communities",
];

const communities = [
    "Randolph", "Braintree", "Quincy", "Milton", "Stoughton", "Canton", "Holbrook", "Avon",
];
const About = () => {
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
                <div className="tlc-blob w-[380px] h-[380px] bg-[#FFC9A3] top-[420px] right-[-120px]" />
                <div className="tlc-blob w-[300px] h-[300px] bg-[#9FD8F2] top-[1300px] left-[-80px]" />

                {/* HERO */}
                <section className="relative w-full pt-36 pb-20 px-6 md:px-12 overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">About TLC Assist Living</span>
                        <h1 className="tlc-display mt-4 text-3xl md:text-6xl font-semibold text-[#0D2B3E] leading-tight">
                            Care You Can Trust,<br className="hidden md:block" /> Rooted in Family Values
                        </h1>
                        <p className="mt-6 text-[#4A5D6B] leading-relaxed max-w-2xl mx-auto">
                            At TLC Assist Living, we provide personalized in-home care and skilled nursing
                            services that help individuals live safely, comfortably, and with dignity  at home,
                            surrounded by what's familiar.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/appointment">
                                <button className="bg-[#0D2B3E] text-white px-7 py-3 rounded-2xl font-semibold hover:bg-[#1B8C86] transition">
                                    Request a Consultation →
                                </button>
                            </Link>
                            <Link to="/services">
                                <button className="tlc-glass text-[#0D2B3E] px-7 py-3 rounded-2xl font-semibold hover:bg-white/70 transition">
                                    See Our Services
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative mt-16 w-full max-w-6xl mx-auto">
                        <div className="tlc-glass rounded-3xl overflow-hidden p-2">
                            <img src={aboutHero} alt="TLC Assist Living caregiving team" className="w-full max-h-[440px] object-cover rounded-2xl" />
                        </div>
                    </div>
                </section>

                {/* WHO WE ARE */}
                <section className="w-full py-20 px-6 md:px-12">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        <div className="tlc-glass rounded-3xl overflow-hidden p-2 order-2 lg:order-1">
                            <img src={aboutSide} alt="Caregiver supporting a client at home" className="w-full h-full object-cover rounded-2xl" />
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">Who We Are</span>
                            <h2 className="tlc-display mt-3 text-3xl md:text-4xl font-semibold text-[#0D2B3E]">
                                A Name Families Have Learned to Rely On
                            </h2>
                            <p className="mt-6 text-[#4A5D6B] leading-relaxed">
                                TLC Assist Living is a trusted home-care and staffing agency dedicated to
                                supporting individuals and families with compassionate, professional in-home
                                care services. We specialize in matching clients with qualified caregivers and
                                nurses who deliver personalized care that respects each individual's lifestyle,
                                preferences, and health needs.
                            </p>
                            <p className="mt-4 text-[#4A5D6B] leading-relaxed">
                                Based in <span className="font-semibold text-[#0D2B3E]">Randolph, Massachusetts</span>,
                                we proudly serve families across surrounding communities, offering dependable
                                care solutions that bring comfort, confidence, and peace of mind  one household
                                at a time.
                            </p>

                            <div className="mt-8 space-y-3">
                                {trustPoints.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#1B8C86] shrink-0" />
                                        <p className="text-[#33495A] text-sm">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* MISSION / VISION */}
                <section className="w-full py-16 px-6 md:px-12">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="tlc-glass relative overflow-hidden rounded-3xl p-8 md:p-10 tlc-sheen">
                            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#0D2B3E]/10 mb-5">
                                <Target className="w-6 h-6 text-[#0D2B3E]" />
                            </div>
                            <h3 className="tlc-display text-xl font-semibold text-[#0D2B3E] mb-3">Our Mission</h3>
                            <p className="text-[#4A5D6B] leading-relaxed">
                                To deliver high-quality, compassionate in-home care that enhances independence,
                                promotes wellbeing, and supports families through every stage of care.
                            </p>
                        </div>

                        <div className="tlc-glass relative overflow-hidden rounded-3xl p-8 md:p-10 tlc-sheen">
                            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#0D2B3E]/10 mb-5">
                                <Eye className="w-6 h-6 text-[#0D2B3E]" />
                            </div>
                            <h3 className="tlc-display text-xl font-semibold text-[#0D2B3E] mb-3">Our Vision</h3>
                            <p className="text-[#4A5D6B] leading-relaxed">
                                To be a trusted leader in home-care services, known for excellence, integrity,
                                and a genuine commitment to improving lives.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CORE VALUES */}
                <section className="w-full py-16 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">Our Core Values</span>
                        <h2 className="tlc-display mt-3 text-3xl md:text-5xl font-semibold text-[#0D2B3E]">
                            Care Rooted in Compassion, Guided by Expertise
                        </h2>
                    </div>

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {coreValues.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <div key={i} className="tlc-glass relative overflow-hidden rounded-3xl p-7 hover:-translate-y-1.5 transition transform tlc-sheen">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#0D2B3E]/10">
                                        <Icon className="w-6 h-6 text-[#0D2B3E]" />
                                    </div>
                                    <h4 className="mt-5 text-base font-semibold text-[#0D2B3E]">{v.title}</h4>
                                    <p className="mt-3 text-[#4A5D6B] text-sm leading-relaxed">{v.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* HOW WE SCREEN & SUPPORT CAREGIVERS */}
                <section className="w-full py-20 px-6 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">Why You Can Trust Our Caregivers</span>
                            <h2 className="tlc-display mt-3 text-3xl md:text-4xl font-semibold text-[#0D2B3E]">
                                Nobody Joins a Client's Home Unvetted
                            </h2>
                            <p className="mt-4 text-[#4A5D6B] max-w-2xl mx-auto leading-relaxed">
                                Trust isn't something we ask for  it's something we build, step by step,
                                before a caregiver ever walks through your door.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {screeningSteps.map((step, i) => {
                                const Icon = step.icon;
                                return (
                                    <div key={i} className="tlc-glass rounded-2xl p-7 relative">
                                        <span className="tlc-display absolute top-5 right-6 text-3xl font-semibold text-[#0D2B3E]/10">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#0D2B3E]/10 mb-5">
                                            <Icon className="w-6 h-6 text-[#0D2B3E]" />
                                        </div>
                                        <h4 className="font-semibold text-[#0D2B3E] text-base">{step.title}</h4>
                                        <p className="mt-3 text-[#4A5D6B] text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* COMMUNITIES WE SERVE */}
                <section className="w-full py-20 px-6 md:px-12">
                    <div className="max-w-5xl mx-auto tlc-glass-dark rounded-3xl p-10 md:p-14 relative overflow-hidden">

                        {/* header row: icon + label together */}
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/10 shrink-0">
                                <MapPin className="w-5 h-5 text-[#7FDCD2]" />
                            </div>
                            <span className="text-[#7FDCD2] text-xs font-bold uppercase tracking-[0.2em]">Where We Serve</span>
                        </div>

                        <h2 className="tlc-display mt-5 text-2xl md:text-3xl font-semibold text-gray-700 max-w-xl">
                            Rooted in Randolph, Reaching Every Neighboring Community
                        </h2>
                        <p className="mt-4 text-gray-500 leading-relaxed max-w-lg">
                            Being local means faster response times, real familiarity with the area,
                            and caregivers who understand the community they're walking into.
                        </p>

                        {/* divider */}
                        <div className="mt-8 h-px w-full bg-white/10" />

                        {/* community grid instead of loose pills */}
                        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {communities.map((town, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                                >
                                    <MapPin className="w-3.5 h-3.5 text-[#7FDCD2] shrink-0" />
                                    <span className="text-gray-500 text-sm">{town}, MA</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROMISE / PULL QUOTE */}
                <section className="w-full py-20 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <Sparkles className="w-8 h-8 text-[#1B8C86] mx-auto mb-6" />
                        <p className="tlc-display text-2xl md:text-3xl font-medium italic text-[#0D2B3E] leading-relaxed">
                            "Every care plan we build starts with one question: what would make this
                            person feel most at home  and most themselves?"
                        </p>
                        <p className="mt-6 text-[#1B8C86] font-semibold text-sm uppercase tracking-[0.15em]">
                            The TLC Assist Living Promise
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="w-full py-16 px-6 text-center">
                    <div className="tlc-glass max-w-4xl mx-auto rounded-3xl p-10 md:p-14">
                        <h2 className="tlc-display text-2xl md:text-4xl font-semibold text-[#0D2B3E]">
                            Let's Talk About the Care Your Family Needs
                        </h2>
                        <p className="mt-4 text-[#4A5D6B] max-w-xl mx-auto leading-relaxed">
                            Every family's situation is different. Reach out and we'll help you figure out
                            exactly what kind of support makes sense  no pressure, just a conversation.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <button className="bg-[#0D2B3E] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#1B8C86] transition">
                                    Contact Us
                                </button>
                            </Link>
                            <Link to="/appointment">
                                <button className="tlc-glass text-[#0D2B3E] px-8 py-3 rounded-2xl font-semibold hover:bg-white/70 transition">
                                    Book a Consultation
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

export default About