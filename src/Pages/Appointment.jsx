import React, { useState } from "react";
import {
    HeartHandshake, Stethoscope, Brain, Moon, Activity, Users, Feather, UserCheck,
    Check, ChevronRight, ChevronLeft, Shield, Clock, Star, AlertCircle, CalendarCheck,
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

/* ---------------------------------------------
   CONFIG
---------------------------------------------- */

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const STEPS = ["Personal Info", "Schedule", "Service", "Review"];

const services = [
    { id: "Skilled Nursing", label: "Skilled Nursing", icon: Stethoscope, desc: "Medical support, wound care, medication management" },
    { id: "Personal Care Assistance", label: "Personal Care Assistance", icon: HeartHandshake, desc: "Bathing, dressing, mobility & daily living help" },
    { id: "Alzheimer's & Dementia Care", label: "Alzheimer's & Dementia Care", icon: Brain, desc: "Structured, patient-centered memory care" },
    { id: "24-Hour & Live-In Care", label: "24-Hour & Live-In Care", icon: Moon, desc: "Round-the-clock supervision & companionship" },
    { id: "Therapy Services (PT/OT/ST)", label: "Therapy Services", icon: Activity, desc: "Physical, occupational & speech therapy at home" },
    { id: "Friendly Assistance for Elders", label: "Friendly Assistance", icon: Users, desc: "Companionship, errands & light housekeeping" },
    { id: "Hospice Care", label: "Hospice Care", icon: Feather, desc: "Comfort-focused, dignity-centered support" },
    { id: "One-on-One Care (HHA)", label: "One-on-One Care (HHA)", icon: UserCheck, desc: "One dedicated caregiver, full continuity" },
];

const TIME_SLOTS = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
];

const empty = {
    name: "", email: "", phone: "", gender: "", dob: "",
    preferredDate: "", preferredTime: "", service: "",
    message: "", emergencyContact: "", insurance: "",
};

/* ---------------------------------------------
   COMPONENT
---------------------------------------------- */

export default function Appointment() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState(empty);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const selectService = (id) => setForm({ ...form, service: id });
    const selectTime = (t) => setForm({ ...form, preferredTime: t });
    const selectedService = services.find((s) => s.id === form.service);

    const next = () => setStep((s) => Math.min(s + 1, 3));
    const back = () => setStep((s) => Math.max(s - 1, 0));

    const canContinue = () => {
        if (step === 0) return form.name && form.email && form.phone;
        if (step === 1) return form.preferredDate && form.preferredTime;
        if (step === 2) return form.service;
        return true;
    };

    const handleSubmit = async () => {
        setSubmitting(true);
        setError("");
        try {
            const res = await fetch(`${API_URL}/api/appointments`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error("Request failed");
            setSubmitted(true);
        } catch (err) {
            console.error(err);
            setError("Something went wrong booking your appointment. Please try again or call us directly.");
        } finally {
            setSubmitting(false);
        }
    };

    const inputClass = "tlc-input w-full px-4 py-3.5 rounded-2xl text-sm text-[#0D2B3E] placeholder:text-[#4A5D6B]/50";
    const labelClass = "block text-xs font-bold text-[#0D2B3E] uppercase tracking-widest mb-2";

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
                    background: rgba(255,255,255,0.55);
                    backdrop-filter: blur(24px) saturate(160%);
                    -webkit-backdrop-filter: blur(24px) saturate(160%);
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
                .tlc-input {
                    background: rgba(255,255,255,0.6);
                    border: 1px solid rgba(13,43,62,0.12);
                }
                .tlc-input:focus {
                    outline: none;
                    border-color: #1B8C86;
                    box-shadow: 0 0 0 3px rgba(27,140,134,0.15);
                }

                @keyframes tlc-fade-up {
                    from { opacity: 0; transform: translateY(14px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .tlc-fade-up { animation: tlc-fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }

                @media (prefers-reduced-motion: reduce) {
                    .tlc-blob, .tlc-fade-up { animation: none; }
                }
            `}</style>

            <div className="tlc-root w-full relative overflow-hidden bg-gradient-to-b from-[#EAF6F6] via-[#F3FAF9] to-white min-h-screen">

                <div className="tlc-blob w-[420px] h-[420px] bg-[#7FDCD2] top-[-120px] left-[-100px]" />
                <div className="tlc-blob w-[380px] h-[380px] bg-[#FFC9A3] top-[400px] right-[-120px]" />
                <div className="tlc-blob w-[300px] h-[300px] bg-[#9FD8F2] top-[1300px] left-[-80px]" />

                {/* HERO */}
                <section className="relative w-full pt-32 pb-28 px-6 md:px-12 overflow-hidden">
                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">TLC Assist Living</span>
                        <h1 className="tlc-display mt-4 text-3xl md:text-6xl font-semibold text-[#0D2B3E] leading-tight">
                            Book Your Care Consultation
                        </h1>
                        <p className="mt-5 text-[#4A5D6B] leading-relaxed max-w-xl mx-auto">
                            Connect with our compassionate caregivers — we'll match you with the right
                            support, fast.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center mt-8">
                            {[
                                { icon: Shield, text: "Certified & Vetted" },
                                { icon: Star, text: "Family Trusted" },
                                { icon: Clock, text: "24/7 Available" },
                            ].map(({ icon: Icon, text }) => (
                                <div key={text} className="tlc-glass flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#0D2B3E]">
                                    <Icon className="w-3.5 h-3.5 text-[#1B8C86]" /> {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FORM CARD */}
                <section className="max-w-3xl mx-auto px-4 -mt-16 pb-24 relative z-10">
                    {submitted ? (
                        <div className="tlc-glass rounded-3xl p-10 md:p-14 text-center">
                            <div className="w-20 h-20 bg-[#0D2B3E] rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="tlc-display text-2xl md:text-3xl font-semibold text-[#0D2B3E] mb-3">You're All Set!</h2>
                            <p className="text-[#4A5D6B] leading-relaxed mb-1">
                                Thank you, <span className="font-semibold text-[#0D2B3E]">{form.name}</span>. Your appointment request has been received.
                            </p>
                            <p className="text-[#4A5D6B]/80 text-sm mb-8 leading-relaxed">
                                We'll contact you at <span className="font-semibold">{form.email}</span> shortly to confirm.
                            </p>
                            <div className="bg-white/40 border border-white/50 rounded-2xl p-5 text-left space-y-3 mb-8">
                                {[
                                    { label: "Service", val: selectedService?.label },
                                    { label: "Date", val: form.preferredDate },
                                    { label: "Time", val: form.preferredTime },
                                ].map(({ label, val }) => (
                                    <div key={label} className="flex justify-between text-sm">
                                        <span className="text-[#4A5D6B]">{label}</span>
                                        <span className="font-semibold text-[#0D2B3E]">{val || "—"}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => { setSubmitted(false); setForm(empty); setStep(0); }}
                                className="w-full bg-[#0D2B3E] text-white py-4 rounded-2xl font-semibold hover:bg-[#1B8C86] transition"
                            >
                                Book Another Appointment
                            </button>
                        </div>
                    ) : (
                        <div className="tlc-glass rounded-3xl overflow-hidden">

                            {/* STEP INDICATOR */}
                            <div className="px-8 pt-8 pb-6 border-b border-[#0D2B3E]/10">
                                <div className="flex items-center justify-between max-w-sm mx-auto">
                                    {STEPS.map((label, i) => (
                                        <React.Fragment key={i}>
                                            <div className="flex flex-col items-center gap-2">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                                                    i < step ? "bg-[#1B8C86] text-white"
                                                    : i === step ? "bg-[#0D2B3E] text-white scale-110 shadow-lg"
                                                    : "bg-white/50 text-[#4A5D6B]/50"
                                                }`}>
                                                    {i < step ? <Check className="w-4 h-4" /> : i + 1}
                                                </div>
                                                <span className={`text-[11px] font-semibold hidden sm:block ${
                                                    i === step ? "text-[#0D2B3E]" : i < step ? "text-[#1B8C86]" : "text-[#4A5D6B]/40"
                                                }`}>
                                                    {label}
                                                </span>
                                            </div>
                                            {i < STEPS.length - 1 && (
                                                <div className={`flex-1 h-0.5 mx-2 rounded-full ${i < step ? "bg-[#1B8C86]" : "bg-[#0D2B3E]/10"}`} />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 md:p-10">

                                {/* STEP 0 — Personal Info */}
                                {step === 0 && (
                                    <div className="tlc-fade-up">
                                        <h2 className="tlc-display text-2xl font-semibold text-[#0D2B3E] mb-1">Personal Information</h2>
                                        <p className="text-[#4A5D6B] text-sm mb-8">Tell us about yourself so we can personalize your care.</p>

                                        <div className="space-y-5">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className={labelClass}>Full Name *</label>
                                                    <input className={inputClass} name="name" value={form.name} onChange={handle} placeholder="Jane Doe" required />
                                                </div>
                                                <div>
                                                    <label className={labelClass}>Gender</label>
                                                    <select className={inputClass} name="gender" value={form.gender} onChange={handle}>
                                                        <option value="">Select gender</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                        <option>Other</option>
                                                        <option>Prefer not to say</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className={labelClass}>Email Address *</label>
                                                    <input className={inputClass} type="email" name="email" value={form.email} onChange={handle} placeholder="jane@example.com" required />
                                                </div>
                                                <div>
                                                    <label className={labelClass}>Phone Number *</label>
                                                    <input className={inputClass} type="tel" name="phone" value={form.phone} onChange={handle} placeholder="(978) 000-0000" required />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className={labelClass}>Date of Birth</label>
                                                    <input className={inputClass} type="date" name="dob" value={form.dob} onChange={handle} />
                                                </div>
                                                <div>
                                                    <label className={labelClass}>Emergency Contact</label>
                                                    <input className={inputClass} name="emergencyContact" value={form.emergencyContact} onChange={handle} placeholder="Name & phone number" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className={labelClass}>
                                                    Insurance Provider <span className="text-[#4A5D6B]/50 font-normal normal-case tracking-normal">(Optional)</span>
                                                </label>
                                                <input className={inputClass} name="insurance" value={form.insurance} onChange={handle} placeholder="e.g. Blue Cross Blue Shield" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 1 — Schedule */}
                                {step === 1 && (
                                    <div className="tlc-fade-up">
                                        <h2 className="tlc-display text-2xl font-semibold text-[#0D2B3E] mb-1">Schedule Appointment</h2>
                                        <p className="text-[#4A5D6B] text-sm mb-8">Pick your preferred date and time.</p>

                                        <div className="space-y-6">
                                            <div>
                                                <label className={labelClass}>Preferred Date *</label>
                                                <input
                                                    className={inputClass}
                                                    type="date"
                                                    name="preferredDate"
                                                    value={form.preferredDate}
                                                    onChange={handle}
                                                    min={new Date().toISOString().split("T")[0]}
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className={labelClass}>Preferred Time *</label>
                                                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                                                    {TIME_SLOTS.map((t) => {
                                                        const selected = form.preferredTime === t;
                                                        return (
                                                            <button
                                                                key={t}
                                                                type="button"
                                                                onClick={() => selectTime(t)}
                                                                className={`py-3 px-2 rounded-xl text-xs font-bold transition-all ${
                                                                    selected
                                                                        ? "bg-[#0D2B3E] text-white shadow-md"
                                                                        : "tlc-input text-[#4A5D6B] hover:border-[#1B8C86] hover:text-[#0D2B3E]"
                                                                }`}
                                                            >
                                                                {t}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                                <p className="text-[11px] text-[#4A5D6B]/60 mt-3">
                                                    All slots shown are requestable — we'll confirm final availability when we reach out.
                                                </p>
                                            </div>

                                            <div>
                                                <label className={labelClass}>
                                                    Notes <span className="text-[#4A5D6B]/50 font-normal normal-case tracking-normal">(Optional)</span>
                                                </label>
                                                <textarea
                                                    className={`${inputClass} resize-none`}
                                                    name="message"
                                                    value={form.message}
                                                    onChange={handle}
                                                    rows={4}
                                                    placeholder="Describe the care needed, any concerns, or specific requests..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 2 — Select Service */}
                                {step === 2 && (
                                    <div className="tlc-fade-up">
                                        <h2 className="tlc-display text-2xl font-semibold text-[#0D2B3E] mb-1">Select a Service</h2>
                                        <p className="text-[#4A5D6B] text-sm mb-8">Choose the type of care you're looking for.</p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {services.map((s) => {
                                                const Icon = s.icon;
                                                const selected = form.service === s.id;
                                                return (
                                                    <button
                                                        key={s.id}
                                                        type="button"
                                                        onClick={() => selectService(s.id)}
                                                        className={`flex items-start gap-4 p-5 rounded-2xl text-left transition-all ${
                                                            selected ? "tlc-glass-dark" : "tlc-input hover:border-[#1B8C86]/40"
                                                        }`}
                                                    >
                                                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                                            selected ? "bg-white/10" : "bg-[#0D2B3E]/10"
                                                        }`}>
                                                            <Icon className={`w-5 h-5 ${selected ? "text-[#7FDCD2]" : "text-[#0D2B3E]"}`} />
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className={`font-semibold text-sm ${selected ? "text-white" : "text-[#0D2B3E]"}`}>{s.label}</p>
                                                            <p className={`text-xs mt-0.5 ${selected ? "text-white/60" : "text-[#4A5D6B]"}`}>{s.desc}</p>
                                                        </div>
                                                        {selected && <Check className="w-5 h-5 text-[#7FDCD2] flex-shrink-0 mt-0.5" />}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* STEP 3 — Review */}
                                {step === 3 && (
                                    <div className="tlc-fade-up">
                                        <h2 className="tlc-display text-2xl font-semibold text-[#0D2B3E] mb-1">Review & Confirm</h2>
                                        <p className="text-[#4A5D6B] text-sm mb-8">Check your details before confirming.</p>

                                        <div className="space-y-4">
                                            <div className="bg-white/40 border border-white/50 rounded-2xl p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="font-bold text-[#0D2B3E] text-xs uppercase tracking-widest">Personal Info</h3>
                                                    <button onClick={() => setStep(0)} className="text-xs text-[#1B8C86] font-semibold hover:underline">Edit</button>
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {[
                                                        { label: "Name", val: form.name },
                                                        { label: "Gender", val: form.gender },
                                                        { label: "Email", val: form.email },
                                                        { label: "Phone", val: form.phone },
                                                        { label: "Emergency", val: form.emergencyContact },
                                                        { label: "Insurance", val: form.insurance || "—" },
                                                    ].map(({ label, val }) => (
                                                        <div key={label}>
                                                            <p className="text-[#4A5D6B]/60 text-xs">{label}</p>
                                                            <p className="font-semibold text-[#0D2B3E] text-sm truncate">{val || "—"}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="bg-white/40 border border-white/50 rounded-2xl p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="font-bold text-[#0D2B3E] text-xs uppercase tracking-widest">Appointment</h3>
                                                    <button onClick={() => setStep(1)} className="text-xs text-[#1B8C86] font-semibold hover:underline">Edit</button>
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div>
                                                        <p className="text-[#4A5D6B]/60 text-xs">Date</p>
                                                        <p className="font-semibold text-[#0D2B3E] text-sm">{form.preferredDate || "—"}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[#4A5D6B]/60 text-xs">Time</p>
                                                        <p className="font-semibold text-[#0D2B3E] text-sm">{form.preferredTime || "—"}</p>
                                                    </div>
                                                </div>
                                                {form.message && (
                                                    <div className="mt-3 pt-3 border-t border-[#0D2B3E]/10">
                                                        <p className="text-[#4A5D6B]/60 text-xs mb-1">Notes</p>
                                                        <p className="text-[#33495A] text-sm">{form.message}</p>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="bg-white/40 border border-white/50 rounded-2xl p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="font-bold text-[#0D2B3E] text-xs uppercase tracking-widest">Selected Service</h3>
                                                    <button onClick={() => setStep(2)} className="text-xs text-[#1B8C86] font-semibold hover:underline">Edit</button>
                                                </div>
                                                {selectedService ? (
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-[#0D2B3E] rounded-xl flex items-center justify-center">
                                                            <selectedService.icon className="w-5 h-5 text-white" />
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-[#0D2B3E] text-sm">{selectedService.label}</p>
                                                            <p className="text-xs text-[#4A5D6B]">{selectedService.desc}</p>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <p className="text-[#4A5D6B] text-sm">No service selected</p>
                                                )}
                                            </div>

                                            {error && (
                                                <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-2xl p-4">
                                                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                                    <p className="text-red-600 text-sm">{error}</p>
                                                </div>
                                            )}

                                            <div className="tlc-glass-dark rounded-2xl p-4 text-xs text-white/60 leading-relaxed">
                                                By confirming, you agree that TLC Assist Living may contact you via your
                                                provided email and phone to confirm and coordinate your care appointment.
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* NAV BUTTONS */}
                                <div className="flex items-center justify-between mt-10">
                                    <button
                                        type="button"
                                        onClick={back}
                                        className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl tlc-input text-sm font-bold text-[#4A5D6B] hover:text-[#0D2B3E] hover:border-[#1B8C86] transition-all ${step === 0 ? "opacity-0 pointer-events-none" : ""}`}
                                    >
                                        <ChevronLeft className="w-4 h-4" /> Back
                                    </button>

                                    {step < 3 ? (
                                        <button
                                            type="button"
                                            onClick={next}
                                            disabled={!canContinue()}
                                            className="flex items-center gap-2 bg-[#0D2B3E] text-white px-8 py-3.5 rounded-2xl text-sm font-bold hover:bg-[#1B8C86] transition-all disabled:opacity-40 disabled:pointer-events-none"
                                        >
                                            Continue <ChevronRight className="w-4 h-4" />
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={handleSubmit}
                                            disabled={submitting}
                                            className="flex items-center gap-2 bg-[#0D2B3E] text-white px-8 py-3.5 rounded-2xl text-sm font-bold hover:bg-[#1B8C86] transition-all disabled:opacity-60"
                                        >
                                            {submitting ? "Booking..." : <><Check className="w-4 h-4" /> Confirm Appointment</>}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Bottom trust strip */}
                    <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-[#4A5D6B]">
                        {[
                            { icon: Shield, text: "Your data is secure & private" },
                            { icon: CalendarCheck, text: "Response within one business day" },
                            { icon: HeartHandshake, text: "Compassionate care guaranteed" },
                        ].map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-center gap-2">
                                <Icon className="w-4 h-4 text-[#1B8C86]" /> {text}
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}