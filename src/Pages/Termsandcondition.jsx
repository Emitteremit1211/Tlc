import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { AlertTriangle, ClipboardList, HeartHandshake, Scale, Lock, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

const sections = [
  {
    id: 1,
    heading: 'Acceptance of Terms',
    text: `These Terms and Conditions of Use ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and TLC Assist Living, a Massachusetts limited liability company operating as tlcassistliving.com ("TLC," "we," "us," or "our"), governing your access to and use of the website located at www.tlcassistliving.com, including all content, features, services, and functionality offered on or through the website (collectively, the "Site").

BY ACCESSING, BROWSING, OR OTHERWISE USING THIS SITE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS IN THEIR ENTIRETY. If you do not agree to these Terms, you must immediately cease use of the Site.

You represent and warrant that you are at least eighteen (18) years of age and have the legal capacity to enter into a binding agreement. If you are accessing the Site on behalf of an organization or entity, you represent and warrant that you have the authority to bind such organization to these Terms.`
  },
  {
    id: 2,
    heading: 'Description of Services',
    text: `TLC Assist Living provides professional home care, caregiver placement, personal care aide (PCA) coordination, and related services within the Commonwealth of Massachusetts. Our services are designed to assist individuals who require assistance with activities of daily living, personal care, companionship, and healthcare support, with a focus on enabling clients to remain safely in their homes and communities.

2.1 Website Purpose
The Site serves as an informational platform describing our services, facilitating caregiver recruitment, enabling prospective client and family inquiries, and providing general information about home care options. The Site does not itself constitute the delivery of care services.

2.2 Service Agreements
Actual home care and staffing services are governed exclusively by separate written Service Agreements and/or Employment Agreements entered into directly between TLC Assist Living and the respective client, family, or caregiver. Nothing on this Site creates a care services contract, an employment contract, or any other binding obligation to provide services except as expressly set forth in a duly executed written agreement.

2.3 Service Availability
Service availability, caregiver availability, geographic coverage areas, and pricing are subject to change without notice. We encourage prospective clients and applicants to contact our office directly for the most current service information.`
  },
  {
    id: 3,
    heading: 'User Responsibilities',
    text: `As a condition of your use of this Site, you agree to the following responsibilities and restrictions:

Accuracy of Information: You agree to provide accurate, current, and complete information in connection with any form submission, inquiry, or application submitted through the Site. You accept responsibility for all information you provide to TLC Assist Living.

Prohibited Conduct: You agree that you will not:
• Use the Site for any unlawful purpose or in violation of any applicable federal, state, or local law or regulation;
• Attempt to gain unauthorized access to any portion of the Site, its servers, or any system connected to the Site;
• Use any automated scraping tool, robot, spider, crawler, or similar automated data collection or extraction tool to access, copy, or collect content from the Site without our prior written consent;
• Reverse engineer, disassemble, or decompile any software, code, or technology used in connection with the Site;
• Transmit any virus, malware, or other malicious code through the Site;
• Submit false, misleading, or fraudulent employment applications, client inquiries, or other communications; or
• Impersonate any person or entity or misrepresent your affiliation with any person or entity.

Compliance: You agree to comply with all applicable local, state, and federal laws and regulations in connection with your use of this Site and any services engaged through TLC Assist Living.`
  },
  {
    id: 4,
    heading: 'Intellectual Property',
    text: `4.1 Ownership
All content on this Site, including but not limited to text, articles, descriptions, graphics, logos, icons, images, audio clips, digital downloads, data compilations, software, and the overall design and "look and feel" of the Site (collectively, "TLC Content"), is the exclusive property of TLC Assist Living or its content suppliers and is protected by United States and international copyright, trademark, trade dress, and other intellectual property laws.

4.2 Limited License
Subject to your compliance with these Terms, TLC Assist Living grants you a limited, non-exclusive, non-transferable, revocable license to access and use this Site solely for your personal, non-commercial informational purposes. This license does not include any right to:
• Reproduce, publish, distribute, or create derivative works based on TLC Content;
• Use TLC Content for commercial purposes without our prior express written consent;
• Remove or alter any proprietary notices or labels on TLC Content; or
• Frame or mirror any portion of the Site on any other website or platform.

4.3 Trademarks
TLC Assist Living, tlcassistliving.com, and associated logos and service marks are trademarks or service marks of TLC Assist Living. Nothing in these Terms grants you any right or license to use our trademarks without our prior written consent.`
  },
  {
    id: 5,
    heading: 'Job Applicant and Caregiver Terms',
    text: `5.1 No Guarantee of Employment
The submission of a job application, caregiver profile, resume, or any other employment-related materials through this Site or by any other means does not constitute an offer of employment or guarantee of placement. All applicants are subject to TLC Assist Living's standard hiring process, which may include multiple interviews, reference checks, and credentialing verification.

5.2 Background Screening Requirements
All applicants for caregiver, home health aide, personal care aide, or other direct care and service positions are subject to:
• Criminal background checks and CORI (Criminal Offender Record Information) checks pursuant to MGL c.6, §§167–178B and applicable MA Department of Public Health regulations;
• Reference verification;
• Credential and licensure verification, including Home Health Aide certification checks with the MA Certified Home Care Aide Registry (CHCF);
• OIG (Office of Inspector General) and SAM (System for Award Management) exclusion list screening;
• Drug screening, where applicable and as permitted by Massachusetts law; and
• Employment eligibility verification pursuant to the Immigration Reform and Control Act (IRCA), 8 U.S.C. §1324a (Form I-9).

5.3 Misrepresentation
Any misrepresentation or omission of material information in a job application, caregiver profile, or any communication with TLC Assist Living including but not limited to misrepresentation of credentials, licensure, certifications, employment history, or criminal record shall be grounds for immediate disqualification from consideration, termination of any existing placement, and may be subject to reporting to appropriate regulatory authorities.

5.4 At-Will Employment
To the extent an employment or contractor relationship is established between TLC Assist Living and a caregiver or staff member, such relationship shall be at-will unless otherwise expressly set forth in a separate written agreement signed by an authorized officer of TLC Assist Living.`
  },
  {
    id: 6,
    heading: 'Service Agreements',
    text: `The actual provision of home care, caregiver placement, PCA coordination, and related services is governed exclusively by separate written agreements executed between TLC Assist Living and each client, family representative, or care coordinator. These Terms of Use apply solely to your access to and use of this Site and do not create, modify, or supersede any such service agreement.

In the event of any conflict between these Terms and a written service agreement, the written service agreement shall control with respect to the services covered therein.`
  },
  {
    id: 7,
    heading: 'Limitation of Liability',
    text: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TLC Assist Living, its officers, members, managers, employees, agents, contractors, affiliates, and successors (collectively, "TLC Parties") shall not be liable to you or any third party for any:

• Indirect, incidental, special, consequential, punitive, or exemplary damages;
• Loss of profits, revenue, data, goodwill, or business opportunities;
• Damages arising from your use of or inability to use the Site;
• Errors, omissions, or inaccuracies in Site content;
• Unauthorized access to or alteration of your data transmissions; or
• Any matter beyond TLC's reasonable control.

In the event that TLC Assist Living is found liable to you for any claim arising out of or related to your use of this Site, TLC's maximum aggregate liability to you shall not exceed the total fees paid by you to TLC Assist Living in the thirty (30) day period immediately preceding the event giving rise to the claim.

Important Limitation: Nothing in this Section shall operate to limit or exclude TLC Assist Living's liability for personal injury caused directly by its own negligence or intentional misconduct, or for any other liability that cannot be excluded under applicable Massachusetts or federal law.`
  },
  {
    id: 8,
    heading: 'Disclaimer of Warranties',
    text: `THIS SITE AND ALL CONTENT, INFORMATION, SERVICES, AND MATERIALS AVAILABLE ON OR THROUGH THE SITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.

To the fullest extent permitted by applicable law, TLC Assist Living expressly disclaims all warranties, including but not limited to:

• Implied warranties of merchantability, fitness for a particular purpose, and non-infringement;
• Any warranty that the Site will be uninterrupted, error-free, or free of viruses or other harmful components;
• Any warranty as to the accuracy, completeness, timeliness, or reliability of any content or information on the Site; and
• Any warranty that defects in the Site will be corrected.

TLC Assist Living does not warrant or make any representation regarding the use or results of use of any information, content, materials, or services on the Site.`
  },
  {
    id: 9,
    heading: 'Indemnification',
    text: `You agree to defend, indemnify, and hold harmless TLC Assist Living and the TLC Parties from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees and court costs) arising out of or related to:

(a) your use of or access to the Site;
(b) your violation of any provision of these Terms;
(c) your violation of any applicable law, rule, or regulation;
(d) any information you submit to TLC Assist Living through the Site, including any misrepresentation; or
(e) your infringement of any third-party intellectual property rights.

TLC Assist Living reserves the right, at its own expense, to assume exclusive defense and control of any matter otherwise subject to indemnification by you, in which case you agree to cooperate fully with TLC in asserting any available defenses.`
  },
  {
    id: 10,
    heading: 'Governing Law and Jurisdiction',
    text: `10.1 Governing Law
These Terms and your use of this Site shall be governed by and construed in accordance with the laws of the Commonwealth of Massachusetts, without regard to its conflict of law principles.

10.2 Jurisdiction and Venue
Any legal action or proceeding arising out of or relating to these Terms or your use of the Site shall be brought exclusively in the state courts of the Commonwealth of Massachusetts, specifically in the Superior Court of Norfolk County, Massachusetts, or in the United States District Court for the District of Massachusetts, and you hereby consent to the personal jurisdiction and venue of such courts.

10.3 Waiver of Jury Trial
TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOU AND TLC ASSIST LIVING EACH WAIVE ANY RIGHT TO A JURY TRIAL IN CONNECTION WITH ANY ACTION OR PROCEEDING ARISING UNDER THESE TERMS.`
  },
  {
    id: 11,
    heading: 'Modification of Terms',
    text: `TLC Assist Living reserves the right to amend, modify, update, or replace these Terms at any time in its sole discretion. Changes will be effective immediately upon posting to the Site, with the "Last Updated" date revised accordingly.

Your continued use of the Site following the posting of revised Terms constitutes your binding acceptance of the modified Terms. It is your responsibility to periodically review these Terms for updates. If any modification is unacceptable to you, your sole remedy is to discontinue use of the Site.`
  },
  {
    id: 12,
    heading: 'Termination of Access',
    text: `TLC Assist Living reserves the right, in its sole discretion and without prior notice, to terminate or suspend your access to all or any part of the Site at any time, for any reason, including but not limited to your actual or suspected violation of these Terms, any applicable law, or the rights of any third party.

Upon termination, your right to use the Site shall immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including but not limited to Sections 4, 7, 8, 9, 10, and 13.`
  },
  {
    id: 13,
    heading: 'Severability and Entire Agreement',
    text: `13.1 Severability
If any provision of these Terms is held by a court of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, shall be severed from these Terms, and the remaining provisions shall continue in full force and effect.

13.2 Entire Agreement
These Terms, together with our Privacy Policy, Cookie Policy, and Website Disclaimer (all incorporated herein by reference), constitute the entire agreement between you and TLC Assist Living with respect to your use of this Site and supersede all prior and contemporaneous negotiations, representations, warranties, agreements, and understandings between the parties regarding such subject matter.

13.3 No Waiver
TLC Assist Living's failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision unless acknowledged and agreed to by TLC in writing.`
  },
  {
    id: 14,
    heading: 'Contact Information',
    text: `For questions, concerns, or notices regarding these Terms and Conditions of Use, please contact:

Company Name: TLC Assist Living
Address: 497 North Main Street, Randolph, MA 02368
Email: tlc@tlcassistliving.com
Phone: 978-552-9703
Website: www.tlcassistliving.com`
  }
]

const highlights = [
  { icon: ClipboardList, title: 'Binding Agreement', desc: 'Using this site means you accept these terms in full.' },
  { icon: HeartHandshake, title: 'Home Care Services', desc: 'Services governed by separate written agreements.' },
  { icon: Scale, title: 'Massachusetts Law', desc: 'Disputes resolved under Commonwealth of MA jurisdiction.' },
  { icon: Lock, title: 'No Warranties', desc: 'Site provided "as is" — see Section 8 for details.' },
]

const TermsAndConditions = () => {
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

        .tc-arrow { transition: transform 0.25s ease; }
        .tc-arrow.open { transform: rotate(45deg); }

        .tc-body-enter { animation: tcFade 0.25s ease; }
        @keyframes tcFade {
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
        <div className="tlc-blob w-[360px] h-[360px] bg-[#FFC9A3] top-[1000px] right-[-120px]" />
        <div className="tlc-blob w-[300px] h-[300px] bg-[#9FD8F2] top-[2200px] left-[-80px]" />

        {/* HERO */}
        <section className="relative pt-36 pb-16 px-6 md:px-12 text-center">
          <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">Legal &amp; Compliance</span>
          <h1 className="tlc-display mt-4 text-4xl md:text-6xl font-semibold text-[#0D2B3E]">Terms &amp; Conditions</h1>
          <p className="tlc-display italic mt-2 text-[#1B8C86] text-lg">of Use — tlcassistliving.com</p>
          <p className="mt-5 text-[#4A5D6B] text-sm">TLC Assist Living</p>
          <p className="text-[#4A5D6B] text-sm">497 North Main Street, Randolph, MA 02368</p>

          <div className="tlc-glass inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full text-xs font-semibold text-[#1B8C86]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1B8C86]" />
            Effective: [Insert Date] · Last Updated: [Insert Date]
          </div>
        </section>

        <section className="relative max-w-4xl mx-auto px-6 md:px-12 pb-24">

          {/* LEGAL ALERT */}
          <div className="tlc-glass rounded-2xl p-5 mb-8 border-l-4 border-l-amber-400 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-[#33495A] leading-relaxed">
              <strong className="text-[#0D2B3E]">Please read these Terms carefully.</strong> By accessing or using{' '}
              <strong className="text-[#0D2B3E]">www.tlcassistliving.com</strong>, you agree to be legally bound by
              these Terms and Conditions. If you do not agree, please discontinue use of the Site immediately.
            </p>
          </div>

          {/* HIGHLIGHT CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {highlights.map((h, i) => {
              const Icon = h.icon
              return (
                <div key={i} className="tlc-glass rounded-2xl p-5 border-b-2 border-b-[#1B8C86] hover:-translate-y-1 transition">
                  <Icon className="w-5 h-5 text-[#0D2B3E] mb-2.5" />
                  <p className="text-sm font-semibold text-[#0D2B3E]">{h.title}</p>
                  <p className="mt-1.5 text-[11.5px] text-[#4A5D6B] leading-relaxed">{h.desc}</p>
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
                    <span className="w-9 h-9 rounded-full bg-[#0D2B3E] text-[#7FDCD2] text-xs font-bold flex items-center justify-center shrink-0">
                      {section.id}
                    </span>
                    <span className="tlc-display flex-1 text-base md:text-lg font-semibold text-[#0D2B3E]">
                      {section.heading}
                    </span>
                    <span className={`tc-arrow ${isOpen ? 'open' : ''} w-8 h-8 rounded-full bg-[#0D2B3E]/10 text-[#0D2B3E] flex items-center justify-center shrink-0`}>
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="tc-body-enter px-6 pb-7 pl-[4.5rem]">
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
            <h3 className="tlc-display text-2xl font-semibold text-white">Questions About These Terms?</h3>
            <p className="mt-3 text-white/60 text-sm">
              Our team is available to clarify any aspect of our Terms and Conditions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:tlc@tlcassistliving.com"
                className="bg-white text-[#0D2B3E] px-7 py-3 rounded-2xl font-semibold text-sm hover:bg-gray-100 transition"
              >
                Contact Us
              </a>
              <Link
                to="/privacy"
                className="border border-white/25 text-white px-7 py-3 rounded-2xl font-semibold text-sm hover:bg-white/10 transition"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}

export default TermsAndConditions