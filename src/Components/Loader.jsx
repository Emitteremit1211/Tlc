import React, { useState, useEffect, useRef } from 'react'
import logo from '../assets/logo.webp' // adjust this path to wherever your TLC logo lives

/**
 * TLC Assist Living — Loader
 * Signature element: a traveling heartbeat/pulse trace (EKG line) — a direct,
 * literal nod to the caregiving/nursing subject matter rather than a generic
 * spinner. Runs on a real elapsed-time progress bar, then fades and unmounts.
 */
const Loader = ({ onFinish, minDuration = 2200 }) => {
    const [progress, setProgress] = useState(0)
    const [fadeOut, setFadeOut] = useState(false)
    const startRef = useRef(null)

    useEffect(() => {
        let frame

        const tick = (timestamp) => {
            if (startRef.current === null) startRef.current = timestamp
            const elapsed = timestamp - startRef.current
            const pct = Math.min(100, (elapsed / minDuration) * 100)
            setProgress(pct)

            if (pct < 100) {
                frame = requestAnimationFrame(tick)
            } else {
                setFadeOut(true)
                setTimeout(() => {
                    if (onFinish) onFinish()
                }, 650) // matches the fade-out transition duration below
            }
        }

        frame = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame)
    }, [minDuration, onFinish])

    return (
        <div
            className={`
                fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden
                bg-gradient-to-b from-[#0D2B3E] to-[#081C29]
                transition-opacity duration-[650ms] ease-in-out
                ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
            `}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

                .tlcl-display { font-family: 'Fraunces', Georgia, serif; }
                .tlcl-sans { font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif; }

                .tlcl-blob {
                    position: absolute;
                    border-radius: 9999px;
                    filter: blur(90px);
                    opacity: 0.35;
                    animation: tlcl-drift 9s ease-in-out infinite;
                }
                @keyframes tlcl-drift {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50%      { transform: translate(20px, -20px) scale(1.08); }
                }

                .tlcl-glass {
                    background: rgba(255,255,255,0.06);
                    backdrop-filter: blur(20px) saturate(160%);
                    -webkit-backdrop-filter: blur(20px) saturate(160%);
                    border: 1px solid rgba(255,255,255,0.14);
                    box-shadow: 0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);
                }

                .tlcl-halo {
                    animation: tlcl-thump 1.15s ease-in-out infinite;
                }
                @keyframes tlcl-thump {
                    0%, 100% { transform: scale(1);    opacity: 0.55; }
                    18%      { transform: scale(1.12); opacity: 0.8;  }
                    36%      { transform: scale(0.98); opacity: 0.5;  }
                }

                .tlcl-pulse-path {
                    stroke-dasharray: 340;
                    stroke-dashoffset: 340;
                    animation: tlcl-draw 2.4s linear infinite;
                }
                @keyframes tlcl-draw {
                    0%   { stroke-dashoffset: 340; }
                    60%  { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: -20; }
                }

                @media (prefers-reduced-motion: reduce) {
                    .tlcl-blob, .tlcl-halo, .tlcl-pulse-path { animation: none; }
                }
            `}</style>

            {/* ambient background blobs */}
            <div className="tlcl-blob w-[420px] h-[420px] bg-[#1B8C86] -top-32 -left-24" />
            <div className="tlcl-blob w-[360px] h-[360px] bg-[#FFC9A3] -bottom-28 -right-16" />

            {/* centerpiece card */}
            <div className="tlcl-glass relative z-10 rounded-[2rem] px-10 py-12 sm:px-14 sm:py-14 flex flex-col items-center w-[88%] max-w-sm">

                {/* logo + heartbeat halo */}
                <div className="relative flex items-center justify-center mb-7">
                    <div className="tlcl-halo absolute w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white blur-xl" />
                    <img
                        src={logo}
                        alt="TLC Assist Living"
                        className="relative z-10 w-24 h-24 sm:w-24 sm:h-24 object-contain rounded-full bg-white/5 p-2"
                    />
                </div>

                {/* wordmark */}
                <h1 className="tlcl-display text-white text-xl sm:text-2xl font-semibold tracking-wide text-center">
                    TLC Assist Living
                </h1>
                <p className="tlcl-sans text-white/50 text-xs sm:text-sm mt-1 tracking-wide text-center">
                    Compassionate care, on the way
                </p>

                {/* heartbeat / pulse trace — signature element */}
                <svg
                    className="mt-8 w-full max-w-[220px] h-10"
                    viewBox="0 0 300 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 30 H90 L105 10 L120 50 L135 18 L150 30 H300"
                        stroke="#7FDCD2"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tlcl-pulse-path"
                    />
                </svg>

                {/* progress bar */}
                <div className="w-full mt-8">
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-[#1B8C86] to-[#7FDCD2]"
                            style={{ width: `${progress}%`, transition: "width 80ms linear" }}
                        />
                    </div>
                    <div className="tlcl-sans mt-2 flex justify-between text-white/40 text-[11px] tracking-wide">
                        <span>Loading</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader