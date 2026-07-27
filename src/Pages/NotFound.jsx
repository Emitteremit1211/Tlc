import React from 'react'
import { Link } from 'react-router-dom';
import { AlertCircle, Home, ArrowLeft } from 'lucide-react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const NotFound = () => {
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

                @keyframes float-up {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
                .float-icon {
                    animation: float-up 3s ease-in-out infinite;
                }

                @keyframes tlc-fade-up {
                    from { opacity: 0; transform: translateY(18px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .tlc-fade-up {
                    animation: tlc-fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
                }

                @media (prefers-reduced-motion: reduce) {
                    .tlc-blob, .tlc-fade-up, .float-icon { animation: none; }
                }
            `}</style>

            <div className="tlc-root w-full relative overflow-hidden bg-gradient-to-b from-[#EAF6F6] via-[#F3FAF9] to-white min-h-screen flex items-center">

                {/* Ambient blobs */}
                <div className="tlc-blob w-[420px] h-[420px] bg-[#7FDCD2] top-[-120px] left-[-100px]" />
                <div className="tlc-blob w-[380px] h-[380px] bg-[#FFC9A3] bottom-[-120px] right-[-100px]" />

                {/* CONTENT */}
                <section className="relative w-full py-24 px-6 md:px-12">
                    <div className="max-w-2xl mx-auto text-center relative z-10">
                        
                        {/* 404 Icon */}
                        <div className="tlc-fade-up mb-8 flex justify-center" style={{ animationDelay: "0ms" }}>
                            <div className="float-icon p-6 bg-gradient-to-br from-[#FFC9A3] to-[#FFB88C] rounded-full">
                                <AlertCircle className="w-20 h-20 text-white" />
                            </div>
                        </div>

                        {/* 404 Text */}
                        <h1 className="tlc-fade-up tlc-display text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0D2B3E] to-[#1B8C86] mb-4" style={{ animationDelay: "100ms" }}>
                            404
                        </h1>

                        {/* Heading */}
                        <h2 className="tlc-fade-up tlc-display text-3xl md:text-4xl font-semibold text-[#0D2B3E] mb-4" style={{ animationDelay: "200ms" }}>
                            Page Not Found
                        </h2>

                        {/* Description */}
                        <p className="tlc-fade-up text-[#4A5D6B] text-lg leading-relaxed mb-8 max-w-md mx-auto" style={{ animationDelay: "300ms" }}>
                            Oops! We can't find the page you're looking for. It might have been moved or doesn't exist. Let's get you back on track.
                        </p>

                        {/* Buttons */}
                        <div className="tlc-fade-up flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ animationDelay: "400ms" }}>
                            <Link to="/">
                                <button className="inline-flex items-center justify-center gap-2 bg-[#0D2B3E] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#1B8C86] transition">
                                    <Home className="w-5 h-5" />
                                    Back to Home
                                </button>
                            </Link>
                            <button 
                                onClick={() => window.history.back()}
                                className="tlc-glass text-[#0D2B3E] px-8 py-3 rounded-2xl font-semibold hover:bg-white/70 transition inline-flex items-center justify-center gap-2"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Go Back
                            </button>
                        </div>

                        {/* Help Section */}
                        <div className="tlc-glass tlc-fade-up rounded-3xl p-8 max-w-md mx-auto" style={{ animationDelay: "500ms" }}>
                            <p className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.15em] mb-3">Need Help?</p>
                            <p className="text-[#4A5D6B] text-sm mb-4">
                                If you think this is a mistake or need assistance, feel free to reach out to our team.
                            </p>
                            <a 
                                href="tel:9785529703"
                                className="inline-block text-[#1B8C86] font-semibold hover:text-[#0D2B3E] transition"
                            >
                                Call us: 978-552-9703
                            </a>
                        </div>

                    </div>
                </section>

            </div>

            <Footer />
        </>
    )
}

export default NotFound