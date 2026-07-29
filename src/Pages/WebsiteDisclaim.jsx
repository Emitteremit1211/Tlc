import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Scale, AlertTriangle, Ban, Briefcase, MapPin, Link2, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'


const sections = [
    {
        id: 1,
        heading: 'General Disclaimer',
        text: `The information contained on this website, www.tlcassistliving.com (the "Site"), is provided by TLC Assist Living, a Massachusetts limited liability company ("TLC," "we," "us," or "our"), for general informational and educational purposes only. The information on this Site is provided in good faith; however, TLC Assist Living makes no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.

Under no circumstances shall TLC Assist Living be liable for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided on the Site. Your use of the Site and your reliance on any information on the Site are solely at your own risk.

Important Notice to All Users: The information provided on this website does not constitute professional medical, legal, financial, employment, or regulatory advice. It is intended for general informational purposes only. Always seek the advice of a qualified professional with respect to any specific matter or concern.`
    },
    {
        id: 2,
        heading: 'No Medical Advice',
        text: `Nothing on this website, including articles, descriptions of care services, caregiver profiles, care tips, health information, testimonials, or any other content, constitutes medical advice, medical diagnosis, medical treatment recommendations, or the practice of medicine. TLC Assist Living does not hold a medical license and does not practice medicine in any form.

Specifically:

• Home care content and descriptions of personal care services on this Site are provided for informational purposes only and are not a substitute for consultation with a licensed physician, nurse practitioner, registered nurse, or other qualified healthcare professional;
• If you or a loved one are experiencing a medical emergency, call 9-1-1 immediately;
• Nothing on this Site should be used to delay seeking professional medical advice or to disregard the advice of a licensed healthcare provider; and
• The inclusion of links to external health information resources does not constitute an endorsement of the medical content found on those resources.

Clients engaging home care services through TLC Assist Living should consult with their attending physician, specialist, or care manager regarding all medical decisions. Our caregivers are trained to provide personal care and assistance with activities of daily living — they do not provide medical treatment or make clinical judgments unless specifically licensed to do so under Massachusetts law.`
    },
    {
        id: 3,
        heading: 'No Employment Guarantee',
        text: `The posting of job openings, caregiver positions, or other employment opportunities on this Site, and the submission of employment applications, caregiver profiles, or resumes through this Site or any other channel, does not:

• Create an employment relationship, staffing relationship, or contractor relationship between TLC Assist Living and the applicant;
• Guarantee placement in any caregiver, home care aide, or other position;
• Constitute an offer of employment or a promise of employment; or
• Confer any rights against TLC Assist Living with respect to employment decisions.

All employment and placement decisions are made by TLC Assist Living in its sole discretion and are subject to the successful completion of all required background screening, credentialing, reference verification, and onboarding processes. An employment relationship is created only upon the execution of a written employment or contractor agreement signed by an authorized officer of TLC Assist Living.`
    },
    {
        id: 4,
        heading: 'Accuracy and Completeness',
        text: `TLC Assist Living endeavors to keep all information on this Site current, accurate, and complete. However, we make no warranty, express or implied, as to the accuracy, completeness, timeliness, or fitness for any particular purpose of any content on this Site. The following may change without notice:

• Service offerings, service areas, and geographic coverage;
• Caregiver availability and staffing capacity;
• Rates, fees, and pricing information;
• Insurance payers and coverage accepted;
• Regulatory compliance information;
• Contact information and office hours; and
• Job openings and caregiver positions available.

We reserve the right to modify, update, correct, or remove any content on this Site at any time and without prior notice. For the most current and accurate information regarding our services, pricing, and availability, please contact our office directly at tlc@tlcassistliving.com.`
    },
    {
        id: 5,
        heading: 'External Links Disclaimer',
        text: `This Site may contain hyperlinks to external websites, resources, organizations, government agencies, and other entities that are not owned or operated by TLC Assist Living. These links are provided solely as a convenience to users and for informational purposes.

TLC Assist Living:

• Does not control, and is not responsible for, the content, accuracy, privacy practices, or terms of use of any linked external website;
• Does not endorse, recommend, or sponsor any linked external website or its operators;
• Does not make any representation or warranty regarding any external website;
• Is not liable for any information you provide to, or receive from, any external website accessed through a link on our Site; and
• Encourages users to review the privacy policy and terms of use of every external website before providing any personal information.

The inclusion of any link to an external site does not imply an affiliation, endorsement, or adoption by TLC Assist Living of any information, product, service, or viewpoint expressed on or available through that site.`
    },
    {
        id: 6,
        heading: 'Geographic Limitations',
        text: `TLC Assist Living's home care and staffing services are provided primarily within the Commonwealth of Massachusetts. Service availability varies by geographic location, even within Massachusetts. The information on this Site may not be applicable to, or accurate for, services or operations in jurisdictions other than Massachusetts.

Nothing on this Site constitutes an offer to provide services in any jurisdiction where TLC Assist Living is not licensed, registered, or otherwise authorized to operate. Users located outside of Massachusetts are advised that this Site is directed at Massachusetts residents and that we may be unable to service their needs.

If you are unsure whether services are available in your specific area, please contact our office directly.`
    },
    {
        id: 7,
        heading: 'Regulatory Compliance Notice',
        text: `TLC Assist Living operates in compliance with applicable Massachusetts state and federal laws and regulations governing home care agencies, including but not limited to:

• MGL c.111, §70E — Patient's Bill of Rights, governing the rights of home care clients;
• MGL c.149 — Massachusetts labor law, governing employment practices and wage and hour compliance;
• MGL c.93H — Massachusetts data security law, governing the protection of personal information;
• 201 CMR 17.00 — Massachusetts Data Security Regulations, requiring a Written Information Security Program (WISP);
• MGL c.6, §§167–178B — Massachusetts CORI law, governing the use of criminal record information in employment decisions;
• HIPAA (45 CFR Parts 160 and 164) — Federal law governing the privacy and security of protected health information; and
• HITECH Act — Federal law governing electronic health records and strengthening HIPAA enforcement.

Any regulatory compliance information provided on this Site is intended for general informational purposes only and does not constitute legal advice. Compliance obligations vary based on individual circumstances, and TLC Assist Living strongly encourages all clients, caregivers, and partners to consult with qualified legal counsel regarding specific regulatory requirements applicable to their situation.`
    },
    {
        id: 8,
        heading: 'Limitation of Liability',
        text: `TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, TLC ASSIST LIVING, ITS MEMBERS, MANAGERS, OFFICERS, EMPLOYEES, AGENTS, AND CONTRACTORS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES OF ANY KIND INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, REVENUE, DATA, GOODWILL, USE, OR OTHER INTANGIBLE LOSSES ARISING OUT OF OR RELATED TO:

• Your access to or use of, or inability to access or use, this Site;
• Any content or information on this Site, including any errors, omissions, or inaccuracies therein;
• Your reliance on any information obtained from this Site;
• Unauthorized access to or alteration of your transmissions or data; or
• Any other matter relating to this Site.

Nothing in this Section shall be construed to limit TLC Assist Living's liability for personal injury directly caused by its own negligence, fraud, or any other liability that cannot be excluded under applicable law.`
    },
    {
        id: 9,
        heading: 'Contact Information',
        text: `If you have questions about this Website Disclaimer or require clarification about any content on our Site, please contact:

Company Name: TLC Assist Living
Address: 497 North Main Street, Randolph, MA 02368
Email: tlc@tlcassistliving.com
Phone: 978-552-9703
Website: www.tlcassistliving.com`
    }
]

const disclaimerCards = [
    { icon: Ban, title: 'Not Medical Advice', desc: 'Content here is informational only. Always consult a licensed professional.' },
    { icon: Briefcase, title: 'No Employment Promise', desc: 'Applying through this site does not guarantee placement or employment.' },
    { icon: MapPin, title: 'Massachusetts Only', desc: 'Services are provided within the Commonwealth of Massachusetts.' },
    { icon: Link2, title: 'External Links', desc: 'We are not responsible for the content of third-party websites.' },
]

const WebsiteDisclaim = () => {
    const [openSections, setOpenSections] = useState({ 0: true })

    const toggle = (idx) => {
        setOpenSections(prev => ({ ...prev, [idx]: !prev[idx] }))
    }
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
            pointer-events: none;
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

        .dis-arrow { transition: transform 0.25s ease; }
        .dis-arrow.open { transform: rotate(45deg); }

        .dis-body-enter { animation: disFade 0.25s ease; }
        @keyframes disFade {
            from { opacity: 0; transform: translateY(-6px); }
            to   { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
            .tlc-blob { animation: none; }
        }
      `}</style>

            <div className="tlc-root relative overflow-hidden bg-gradient-to-b from-[#EAF6F6] via-[#F3FAF9] to-white">

                {/* ambient background blobs */}
                <div className="tlc-blob w-[420px] h-[420px] bg-[#7FDCD2] top-[-120px] left-[-100px]" />
                <div className="tlc-blob w-[360px] h-[360px] bg-[#FFC9A3] top-[900px] right-[-120px]" />
                <div className="tlc-blob w-[300px] h-[300px] bg-[#9FD8F2] top-[1900px] left-[-80px]" />

                {/* HERO */}
                <section className="relative pt-32 pb-16 px-6 md:px-12 text-center">
                    <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">Legal &amp; Compliance</span>
                    <div className="w-12 h-12 rounded-2xl bg-[#0D2B3E] flex items-center justify-center mx-auto mt-5">
                        <Scale className="w-6 h-6 text-[#7FDCD2]" />
                    </div>
                    <h1 className="tlc-display mt-4 text-4xl md:text-6xl font-semibold text-[#0D2B3E]">Website Disclaimer</h1>
                    <p className="mt-5 text-[#4A5D6B] text-sm">TLC Assist Living · tlcassistliving.com</p>
                    <p className="text-[#4A5D6B] text-sm">497 North Main Street, Randolph, MA 02368</p>

                    <div className="tlc-glass inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full text-xs font-semibold text-[#1B8C86]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B8C86]" />
                        Effective: [Insert Date] · Last Updated: [Insert Date]
                    </div>
                </section>

                <section className="relative max-w-4xl mx-auto px-6 md:px-12 pb-24">

                    {/* WARNING BAR */}
                    <div className="tlc-glass rounded-2xl p-5 mb-8 border-l-4 border-l-red-400 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-[#33495A] leading-relaxed">
                            <strong className="text-[#0D2B3E]">Important:</strong> The information on{' '}
                            <strong className="text-[#0D2B3E]">www.tlcassistliving.com</strong> is provided for general
                            informational purposes only. It does not constitute medical, legal, financial, or employment
                            advice. By using this Site, you acknowledge and accept this disclaimer in full.
                        </p>
                    </div>

                    {/* SUMMARY CARDS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        {disclaimerCards.map((c, i) => {
                            const Icon = c.icon
                            return (
                                <div key={i} className="tlc-glass rounded-2xl p-5 border-t-2 border-t-[#0D2B3E] hover:-translate-y-1 transition">
                                    <Icon className="w-5 h-5 text-[#0D2B3E] mb-2.5" />
                                    <p className="text-sm font-semibold text-[#0D2B3E]">{c.title}</p>
                                    <p className="mt-1.5 text-[11.5px] text-[#4A5D6B] leading-relaxed">{c.desc}</p>
                                </div>
                            )
                        })}
                    </div>

                    {/* ACCORDION */}
                    <div className="space-y-3">
                        {sections.map((section, idx) => {
                            const isOpen = !!openSections[idx]
                            return (
                                <div key={section.id} className="tlc-glass rounded-2xl overflow-hidden">
                                    <button
                                        onClick={() => toggle(idx)}
                                        aria-expanded={isOpen}
                                        className="w-full flex items-center gap-4 text-left px-6 py-5"
                                    >
                                        <span className="w-9 h-9 rounded-xl bg-[#0D2B3E] text-[#7FDCD2] text-xs font-bold flex items-center justify-center shrink-0">
                                            {section.id}
                                        </span>
                                        <span className="tlc-display flex-1 text-base md:text-lg font-semibold text-[#0D2B3E]">
                                            {section.heading}
                                        </span>
                                        <span className={`dis-arrow ${isOpen ? 'open' : ''} w-8 h-8 rounded-lg bg-[#0D2B3E]/10 text-[#0D2B3E] flex items-center justify-center shrink-0`}>
                                            <Plus className="w-4 h-4" />
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="dis-body-enter px-6 pb-7 pl-[4.5rem]">
                                            <div className="h-px bg-[#0D2B3E]/10 mb-5" />
                                            <p className="text-sm text-[#33495A] leading-[1.9] whitespace-pre-wrap">
                                                {section.text}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* CONTACT STRIP */}
                <section className="w-full pb-20 px-6 text-center">
                    <div className="tlc-glass-dark max-w-3xl mx-auto rounded-3xl p-10 md:p-14">
                        <h3 className="tlc-display text-2xl font-semibold text-white">Need Clarification?</h3>
                        <p className="mt-3 text-white/60 text-sm">
                            If you have questions about this disclaimer or any content on our Site, reach out to us directly.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 justify-center">
                            <a
                                href="mailto:tlc@tlcassistliving.com"
                                className="bg-white text-[#0D2B3E] px-7 py-3 rounded-2xl font-semibold text-sm hover:bg-gray-100 transition"
                            >
                                Contact Us
                            </a>
                            <Link
                                to="/terms"
                                className="border border-white/25 text-white px-7 py-3 rounded-2xl font-semibold text-sm hover:bg-white/10 transition"
                            >
                                Terms &amp; Conditions
                            </Link>
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </>
    )
}

export default WebsiteDisclaim