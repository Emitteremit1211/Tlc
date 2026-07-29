import { Send } from "lucide-react";

const Newsletter = () => {
    return (

        <section className="py-24 px-6">
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
                    .tlc-input-dark {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.16);
}
.tlc-input-dark:focus {
    outline: none;
    border-color: #7FDCD2;
    box-shadow: 0 0 0 3px rgba(127,220,210,0.2);
}
            `}</style>

            <div className="tlc-glass-dark max-w-6xl mx-auto rounded-[35px] overflow-hidden p-12 relative">

                <div className="tlc-blob -right-20 -top-20 w-72 h-72 bg-[#1B8C86]"></div>
                <div className="tlc-blob -left-16 -bottom-16 w-64 h-64 bg-[#FFC9A3]"></div>

                <div className="relative text-center">

                    <h2 className="tlc-display text-3xl md:text-4xl font-semibold text-gray-500">
                        Stay Updated
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                        Subscribe to receive healthcare insights, caregiver tips and staffing updates.
                    </p>

                    <div className="mt-10 flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-gray-700 flex-1 rounded-2xl px-5 py-3.5 outline-none text-sm text-gray-100 placeholder:text-white/40"
                        />
                        <button className="bg-[#1B8C86] hover:bg-[#166f6a] transition px-8 py-3.5 rounded-2xl text-white font-semibold flex items-center justify-center gap-2">
                            <Send size={16} />
                            Subscribe
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Newsletter;