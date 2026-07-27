import React, { useState } from 'react'
import { ChevronDown, HelpCircle, Heart, Clock, DollarSign, Users, Shield, Briefcase } from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

/* FAQ CATEGORIES AND DATA */
const faqCategories = [
    {
        id: "getting-started",
        title: "Getting Started",
        icon: Heart,
        color: "#1B8C86",
        questions: [
            {
                q: "How do I get started with TLC Assist Living?",
                a: "Getting started is simple! Call us at 978-552-9703 or fill out our appointment form on the website. We'll discuss your needs, answer your questions, and schedule a consultation at a time that works for you."
            },
            {
                q: "What's the first step in the process?",
                a: "The first step is a free initial consultation where we learn about the person who needs care, their medical history, preferences, and what matters most to your family. This helps us find the perfect match."
            },
            {
                q: "How long does it take to set up care?",
                a: "Depending on your timeline and our caregiver availability, we can often start within 24-48 hours. For urgent needs, we have emergency placement options available."
            },
            {
                q: "Do I need a doctor's referral to hire a caregiver?",
                a: "No, you don't need a doctor's referral. However, having your loved one's medical information and any care instructions from their healthcare provider helps us provide better, personalized care."
            },
        ]
    },
    {
        id: "services",
        title: "Our Services",
        icon: Briefcase,
        color: "#7FDCD2",
        questions: [
            {
                q: "What types of care do you provide?",
                a: "We offer skilled nursing, personal care assistance, Alzheimer's & dementia care, 24-hour live-in care, therapy services (PT/OT/ST), hospice care, and companion care for seniors. Each service is customized to individual needs."
            },
            {
                q: "Can you provide care for Alzheimer's and dementia patients?",
                a: "Yes! We specialize in Alzheimer's and dementia care with trained caregivers experienced in memory loss, behavioral changes, and compassionate communication. We create safe, structured environments that preserve dignity."
            },
            {
                q: "Do you offer 24-hour care?",
                a: "Absolutely. We provide round-the-clock care for clients who need continuous support. Whether it's overnight care, live-in caregiving, or full 24-hour coverage, we can accommodate those needs."
            },
            {
                q: "Do you provide therapy services?",
                a: "Yes! We work with licensed physical therapists, occupational therapists, and speech therapists. They can visit your home or facility to provide targeted therapy as part of the care plan."
            },
            {
                q: "Can a caregiver help with household tasks?",
                a: "Yes, our caregivers help with light housekeeping, meal preparation, laundry, and other daily living tasks as part of personal care assistance. This keeps the home safe and reduces stress for families."
            },
        ]
    },
    {
        id: "caregivers",
        title: "Our Caregivers",
        icon: Users,
        color: "#FFC9A3",
        questions: [
            {
                q: "How do you select and train your caregivers?",
                a: "Every caregiver undergoes thorough background checks, reference verification, and skills assessment. We only hire compassionate, reliable professionals and provide ongoing training on the latest care techniques."
            },
            {
                q: "Are your caregivers licensed and insured?",
                a: "Yes! All our nurses are licensed, and our caregivers are trained and insured. We maintain comprehensive coverage to protect both our clients and caregivers."
            },
            {
                q: "Can I request a specific caregiver?",
                a: "Absolutely! Many families develop strong bonds with their caregivers. If you have a preference, we'll work hard to keep that consistency. If you're unhappy with a match, we'll find someone better."
            },
            {
                q: "What if I don't like the caregiver assigned to me?",
                a: "We take feedback seriously. If the fit isn't right, let us know and we'll immediately find you a better match. Your comfort and trust are our priority."
            },
            {
                q: "Do caregivers have experience with specific conditions?",
                a: "Yes! Our caregivers have specialized training in areas like Alzheimer's, Parkinson's, diabetes management, wound care, mobility assistance, and more. We match caregivers to your specific medical needs."
            },
        ]
    },
    {
        id: "hours-availability",
        title: "Hours & Availability",
        icon: Clock,
        color: "#1B8C86",
        questions: [
            {
                q: "What are your office hours?",
                a: "Our office is open Monday–Friday, 9AM–5PM. However, care itself is available 24/7. For anything time-sensitive, call our 24/7 care line at 978-552-9703."
            },
            {
                q: "Do you work on weekends and holidays?",
                a: "Yes! We provide care 7 days a week, including weekends and holidays. Our caregivers are on call year-round to ensure your loved one always has support."
            },
            {
                q: "How quickly can you respond to urgent care needs?",
                a: "For urgent or emergency care needs, we can often arrange same-day placement. Call 978-552-9703 immediately and speak to our care coordinator."
            },
            {
                q: "Can I adjust my caregiver's hours?",
                a: "Yes! Whether you need adjustments for medical appointments, travel, or changing needs, we're flexible and can work with you to modify the schedule."
            },
        ]
    },
    {
        id: "pricing",
        title: "Pricing & Insurance",
        icon: DollarSign,
        color: "#7FDCD2",
        questions: [
            {
                q: "How much does care cost?",
                a: "Pricing depends on the type of care, caregiver experience, and hours needed. We offer flexible hourly rates, weekly packages, and live-in arrangements. Call us for a personalized quote."
            },
            {
                q: "Do you accept insurance?",
                a: "We accept many insurance plans, including Medicare, Medicaid, and private insurance. Our billing team can verify your coverage and explain what your insurance will pay for."
            },
            {
                q: "Can I use my insurance to pay for care?",
                a: "It depends on your policy and the type of care needed. Skilled nursing is often covered by insurance, while personal care assistance may vary. We'll help you navigate your benefits."
            },
            {
                q: "Do you offer payment plans?",
                a: "Yes! We work with families on flexible payment arrangements. We accept multiple payment methods and can discuss options that fit your budget."
            },
            {
                q: "Are there any hidden fees?",
                a: "Absolutely not. We're transparent about all costs upfront—no surprise fees. Everything is clearly outlined in your service agreement."
            },
            {
                q: "What if I need to cancel or reduce care?",
                a: "We understand circumstances change. Depending on your agreement, you can adjust your care plan with notice. We'll work with you to transition smoothly."
            },
        ]
    },
    {
        id: "health-safety",
        title: "Health & Safety",
        icon: Shield,
        color: "#FFC9A3",
        questions: [
            {
                q: "How do you ensure my loved one's safety?",
                a: "Safety is our top priority. Our caregivers are trained in fall prevention, medication management, infection control, and emergency response. We also conduct regular home safety assessments."
            },
            {
                q: "What if there's a medical emergency?",
                a: "Our caregivers are trained to respond to emergencies and will call 911 immediately if needed. They'll also notify family members and the client's physician right away."
            },
            {
                q: "Do caregivers manage medications?",
                a: "Yes! Our caregivers can remind clients to take medications and help with administration when appropriate. We maintain detailed medication records and communicate with your doctor."
            },
            {
                q: "Are caregivers trained in CPR and first aid?",
                a: "Most of our caregivers are CPR and first aid certified. We can specifically request a certified caregiver if that's important for your loved one's care."
            },
            {
                q: "How do you handle health information and privacy?",
                a: "We take privacy very seriously and comply fully with HIPAA. Your medical information is kept confidential and secure. Only authorized care team members have access to sensitive health data."
            },
            {
                q: "Can caregivers work with my loved one's doctor?",
                a: "Yes! We coordinate closely with physicians, physical therapists, and other healthcare providers. We share updates, follow care instructions, and attend medical appointments when needed."
            },
        ]
    },
];

/* COMPONENT */
const Faq = () => {
    const [openFaq, setOpenFaq] = useState({}); // Track which FAQs are open per category
    const [activeCategory, setActiveCategory] = useState("getting-started");

    const toggleFaq = (categoryId, index) => {
        const key = `${categoryId}-${index}`;
        setOpenFaq(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const activeData = faqCategories.find(cat => cat.id === activeCategory);

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

                @keyframes tlc-fade-up {
                    from { opacity: 0; transform: translateY(18px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .tlc-fade-up {
                    animation: tlc-fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
                }

                .category-tab {
                    position: relative;
                    transition: all 0.3s ease;
                }
                .category-tab.active::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: currentColor;
                    border-radius: 2px;
                }

                @media (prefers-reduced-motion: reduce) {
                    .tlc-blob, .tlc-fade-up { animation: none; }
                }
            `}</style>

            <div className="tlc-root w-full relative overflow-hidden bg-gradient-to-b from-[#EAF6F6] via-[#F3FAF9] to-white">

                {/* Ambient blobs */}
                <div className="tlc-blob w-[420px] h-[420px] bg-[#7FDCD2] top-[-120px] left-[-100px]" />
                <div className="tlc-blob w-[380px] h-[380px] bg-[#FFC9A3] top-[800px] right-[-120px]" />
                <div className="tlc-blob w-[300px] h-[300px] bg-[#9FD8F2] bottom-[100px] left-[-80px]" />

                {/* HERO */}
                <section className="relative w-full pt-32 pb-12 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="tlc-fade-up inline-flex items-center justify-center gap-2 bg-white/60 backdrop-blur-md rounded-full px-4 py-2 mb-6" style={{ animationDelay: "0ms" }}>
                            <HelpCircle className="w-5 h-5 text-[#1B8C86]" />
                            <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.15em]">FAQ</span>
                        </div>
                        <h1 className="tlc-fade-up tlc-display text-4xl md:text-6xl font-semibold text-[#0D2B3E] leading-tight" style={{ animationDelay: "100ms" }}>
                            Questions Answered
                        </h1>
                        <p className="tlc-fade-up mt-6 text-[#4A5D6B] text-lg leading-relaxed max-w-2xl mx-auto" style={{ animationDelay: "200ms" }}>
                            Find answers to common questions about our services, caregivers, pricing, and more. Can't find what you're looking for? <span className="font-semibold text-[#1B8C86]">Call us at 978-552-9703</span>.
                        </p>
                    </div>
                </section>

                {/* CATEGORY TABS */}
                <section className="relative w-full px-6 md:px-12 py-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="overflow-x-auto pb-4">
                            <div className="flex gap-2 md:gap-6 min-w-max md:min-w-full md:justify-center">
                                {faqCategories.map((cat) => {
                                    const IconComponent = cat.icon;
                                    const isActive = activeCategory === cat.id;
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => setActiveCategory(cat.id)}
                                            className={`category-tab flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition ${
                                                isActive
                                                    ? "tlc-glass-dark text-white"
                                                    : "text-[#4A5D6B] hover:text-[#0D2B3E]"
                                            }`}
                                            style={isActive ? { color: cat.color } : {}}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                            <span className="hidden sm:inline">{cat.title}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ ITEMS */}
                <section className="w-full py-12 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        {/* Category header */}
                        <div className="mb-12 text-center">
                            <div className="inline-flex items-center justify-center gap-3 mb-4">
                                {activeData && <activeData.icon className="w-8 h-8" style={{ color: activeData.color }} />}
                                <h2 className="tlc-display text-3xl md:text-4xl font-semibold text-[#0D2B3E]">
                                    {activeData?.title}
                                </h2>
                            </div>
                            <p className="text-[#4A5D6B] text-sm md:text-base max-w-xl mx-auto">
                                Everything you need to know about {activeData?.title.toLowerCase()}
                            </p>
                        </div>

                        {/* FAQ items */}
                        <div className="space-y-4">
                            {activeData?.questions.map((item, i) => {
                                const key = `${activeCategory}-${i}`;
                                const isOpen = openFaq[key];
                                return (
                                    <div key={i} className="tlc-glass rounded-2xl overflow-hidden hover:shadow-lg transition">
                                        <button
                                            onClick={() => toggleFaq(activeCategory, i)}
                                            className="w-full flex items-start justify-between gap-4 text-left px-6 py-6 md:py-7"
                                        >
                                            <span className="font-semibold text-[#0D2B3E] text-base md:text-lg leading-relaxed">
                                                {item.q}
                                            </span>
                                            <ChevronDown
                                                className={`w-6 h-6 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                                style={{ color: activeData?.color }}
                                            />
                                        </button>
                                        <div className={`tlc-faq-panel ${isOpen ? "open" : ""}`}>
                                            <div className="tlc-faq-inner">
                                                <p className="px-6 pb-6 text-[#4A5D6B] text-base leading-relaxed border-t border-white/30">
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

                {/* CTA SECTION */}
                <section className="w-full py-20 px-6 md:px-12">
                    <div className="tlc-glass max-w-4xl mx-auto rounded-3xl p-10 md:p-14 text-center">
                        <h2 className="tlc-display text-3xl md:text-4xl font-semibold text-[#0D2B3E] mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-[#4A5D6B] text-lg mb-8 max-w-xl mx-auto">
                            Our team is ready to help. Get personalized answers from someone who knows your situation best.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:9785529703" className="inline-block bg-[#0D2B3E] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#1B8C86] transition">
                                Call Us: 978-552-9703
                            </a>
                            <button className="tlc-glass text-[#0D2B3E] px-8 py-3 rounded-2xl font-semibold hover:bg-white/70 transition">
                                Send a Message
                            </button>
                        </div>
                        <p className="text-[#4A5D6B] text-sm mt-6">Available 24/7 for care-related calls</p>
                    </div>
                </section>

            </div>

            <Footer />
        </>
    )
}

export default Faq