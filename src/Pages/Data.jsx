import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ShieldCheck, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

const sections = [
  {
    id: 1,
    heading: 'Our Commitment to Data Protection',
    text: `TLC Assist Living ("TLC," "we," "us," or "our"), operating as tlcassistliving.com, takes its obligations as a custodian of personal information and protected health information (PHI) with the utmost seriousness. We recognize that the individuals we serve — our home-care clients, their families, our caregivers, and our staff — entrust us with sensitive personal and health information as an essential part of our service relationship. This trust is foundational to our mission, and we are deeply committed to protecting that information from unauthorized access, use, disclosure, modification, or destruction.

Our data protection program is designed to comply with, and in many cases exceed, the requirements of the following applicable laws and regulations:

• Massachusetts 201 CMR 17.00 — Standards for the Protection of Personal Information of Residents of the Commonwealth, requiring a comprehensive Written Information Security Program (WISP);
• MGL c.93H — Massachusetts data security breach notification law;
• MGL c.66A — Massachusetts Fair Information Practices Act;
• HIPAA Privacy Rule — 45 CFR Part 164, Subparts A and E, governing the use and disclosure of Protected Health Information (PHI);
• HIPAA Security Rule — 45 CFR Part 164, Subparts A and C, requiring administrative, physical, and technical safeguards for electronic PHI (ePHI); and
• HITECH Act — Health Information Technology for Economic and Clinical Health Act, strengthening HIPAA enforcement and breach notification requirements.`
  },
  {
    id: 2,
    heading: 'Categories of Data We Protect',
    text: `TLC Assist Living maintains protective measures for the following categories of sensitive information:

2.1 Client Protected Health Information (PHI)
Individually identifiable health information about our home care clients, including:
• Medical diagnoses, conditions, care plans, and treatment histories;
• Medication lists, physician orders, and prescription information;
• Attending physician, specialist, and care coordinator information;
• Health insurance information, MassHealth/Medicaid identifiers, and prior authorization records; and
• Functional assessments and activities of daily living documentation.

2.2 Caregiver and Employee Personally Identifiable Information (PII)
Personal information relating to our caregivers, home health aides, personal care aides, and other staff, including:
• Social Security Numbers, government-issued identification numbers, and Form I-9 documentation;
• Background check, CORI check, and criminal history data;
• Professional certifications, licensure records, and credentialing data;
• Contact information, home addresses, and emergency contact details; and
• Payroll, direct deposit, and tax withholding information.

2.3 Financial Records
• Client billing records, invoices, and payment histories;
• Insurance claims data and remittance information;
• Caregiver payroll records and W-2/1099 tax documents; and
• Banking and ACH information for payroll and client billing.

2.4 Employment and Operational Records
• Personnel files and employment history;
• Performance evaluations and disciplinary records;
• Training records and certification renewals; and
• Incident reports and quality assurance documentation.`
  },
  {
    id: 3,
    heading: 'Our Written Information Security Program (WISP)',
    text: `TLC Assist Living maintains a Written Information Security Program (WISP) as required by Massachusetts 201 CMR 17.00. Our WISP is a comprehensive, documented security framework that governs how we collect, store, access, transmit, and dispose of personal information about Massachusetts residents.

3.1 WISP Components
Our WISP addresses the following core areas:

• Physical Safeguards: Policies for the secure storage of paper records, access controls to our office premises, and procedures for the secure disposal of paper documents containing personal information;
• Technical Controls: Technical measures governing electronic access to personal information, encryption standards, network security, and software security;
• Administrative Safeguards: Personnel policies, training requirements, vendor management, and incident response procedures; and
• Risk Assessment: Periodic evaluation of internal and external threats to the security of personal information, with documented remediation of identified vulnerabilities.

3.2 Annual Review and Risk Assessment
Our WISP is reviewed and updated at least annually, or whenever there is a material change in our business practices, technology environment, or applicable legal requirements. Annual risk assessments are conducted to identify foreseeable internal and external risks to the security, confidentiality, and integrity of personal information.

3.3 Workforce Security Training
All employees and contractors who have access to personal information or PHI receive security awareness training at the time of hire and at least annually thereafter. Training covers HIPAA Privacy and Security Rules, Massachusetts data protection requirements, phishing and social engineering awareness, password hygiene, and our incident reporting procedures.`
  },
  {
    id: 4,
    heading: 'Technical Safeguards',
    text: `TLC Assist Living implements the following technical safeguards to protect electronic personal information and ePHI:

• Encryption in Transit: All electronic transmission of personal information and ePHI over public or untrusted networks is encrypted using Transport Layer Security (TLS) version 1.2 or higher (TLS 1.3 preferred). Unencrypted transmission of PHI or PII over public networks is prohibited;

• Encryption at Rest: Electronic personal information and ePHI stored on servers, laptops, portable storage devices, and mobile devices is encrypted using industry-standard encryption protocols (AES-256 or equivalent);

• Role-Based Access Controls (RBAC): Access to electronic personal information and ePHI is restricted to workforce members who require access to perform their specific job functions. The principle of minimum necessary access is applied to all systems containing sensitive data;

• Multi-Factor Authentication (MFA): Multi-factor authentication is required for all staff accounts that access systems containing PHI, PII, financial records, or other sensitive information, including remote access and cloud-based systems;

• Audit Logging: Access to systems containing PHI and sensitive personal information is logged and audited. Audit logs are retained and reviewed periodically to detect unauthorized access or anomalous activity;

• Regular Software Patching: Operating systems, applications, and security software are updated and patched on a regular basis to remediate known vulnerabilities; and

• Vulnerability Scanning and Penetration Testing: Periodic vulnerability assessments are conducted on systems and networks that process or store personal information, with documented remediation of identified vulnerabilities.`
  },
  {
    id: 5,
    heading: 'Administrative Safeguards',
    text: `• Privacy Officer: TLC Assist Living has designated a Privacy Officer responsible for overseeing our HIPAA compliance program, privacy policies, and response to privacy-related complaints and inquiries. The Privacy Officer may be contacted at tlc@tlcassistliving.com;

• Security Officer: TLC Assist Living has designated a Security Officer responsible for our WISP, HIPAA Security Rule compliance, and the technical security of our information systems;

• Confidentiality Agreements: All employees and contractors are required to execute confidentiality and non-disclosure agreements as a condition of access to personal information and PHI;

• HIPAA Workforce Training: All workforce members with access to PHI receive HIPAA Privacy and Security training as required by 45 CFR §164.530(b) and §164.308(a)(5);

• Vendor Management and Business Associate Agreements (BAAs): All vendors and service providers who create, receive, maintain, or transmit PHI on our behalf are required to execute a HIPAA-compliant Business Associate Agreement (BAA) before any PHI is shared, as required by 45 CFR §164.308(b). We conduct due diligence on all such vendors; and

• Incident Response Procedures: TLC Assist Living maintains documented incident response procedures for identifying, containing, investigating, and reporting data security incidents and breaches, consistent with HIPAA and MGL c.93H requirements.`
  },
  {
    id: 6,
    heading: 'Physical Safeguards',
    text: `• Secure Storage of Paper Records: Paper documents containing personal information or PHI are stored in locked filing cabinets or secure storage rooms. Access to such records is restricted to authorized personnel on a need-to-know basis;

• Clean Desk Policy: All employees are required to secure or store away paper documents containing personal information or PHI when not in active use, particularly at the end of each business day. Computer screens displaying sensitive information must be locked when unattended;

• Locked Filing and Secure Disposal: Paper documents containing personal information or PHI are disposed of using cross-cut shredding or other secure destruction methods. We do not dispose of such documents in ordinary trash or recycling;

• Visitor Access Controls: Access to our office premises is controlled. Visitors are required to sign in and are accompanied by a staff member at all times in areas where personal information may be visible or accessible; and

• Workstation Controls: Workstations used to access ePHI are positioned to minimize the possibility of unauthorized viewing. Screen lock policies are enforced.`
  },
  {
    id: 7,
    heading: 'Breach Notification',
    text: `7.1 Massachusetts Data Breach Notification (MGL c.93H)
In the event of a security breach involving the personal information of Massachusetts residents, TLC Assist Living will:

• Notify all affected Massachusetts residents in writing within thirty (30) days of the discovery and confirmation of the breach, as required by MGL c.93H, §3;
• Notify the Massachusetts Attorney General's Office and the Director of Consumer Affairs and Business Regulation, concurrently with or prior to notifying affected individuals; and
• Provide each affected individual with notification that includes: (a) the nature of the breach; (b) the categories of personal information involved; (c) the approximate date of the breach; (d) steps taken to secure the data; and (e) steps the affected individual may take to protect themselves from potential identity theft or fraud.

7.2 HIPAA Breach Notification (45 CFR §§164.400–414)
For breaches of unsecured PHI covered by HIPAA, TLC Assist Living will:

• Notify each affected individual without unreasonable delay and no later than sixty (60) calendar days after discovery of the breach;
• Notify the Secretary of the U.S. Department of Health and Human Services (HHS) through the HHS Office for Civil Rights (OCR) breach reporting portal:
  – For breaches affecting 500 or more individuals: notification within 60 days of discovery; and
  – For breaches affecting fewer than 500 individuals: notification logged annually through the HHS OCR web portal by March 1 of the following calendar year;
• For breaches affecting 500 or more residents of a state or jurisdiction, provide notification to prominent media outlets in that state, as required by 45 CFR §164.406; and
• Conduct a thorough investigation and risk assessment, and document all breach determinations and response activities.

7.3 Breach Notification Content
All breach notifications will include, to the extent known at the time of notification:
• A description of the nature of the breach and how it occurred;
• The categories and approximate number of individuals and records affected;
• The types of information involved;
• Steps TLC Assist Living has taken to investigate, contain, and remediate the breach;
• Steps affected individuals can take to protect themselves; and
• Contact information for TLC Assist Living, including the Privacy Officer.`
  },
  {
    id: 8,
    heading: 'Data Subject Rights',
    text: `8.1 Massachusetts Residents
Massachusetts residents may exercise the following rights with respect to their personal information held by TLC Assist Living:

• Right of Access: Request a copy of the personal information we hold about you, pursuant to MGL c.66A;
• Right to Correction: Request correction of inaccurate, incomplete, or outdated personal information; and
• Right to Request Deletion: Request deletion of your personal information, subject to our legal obligations to retain certain records under applicable law.

8.2 HIPAA-Covered Individuals
Individuals whose information is PHI subject to HIPAA have the following additional rights under 45 CFR §§164.524–528:

• Right of Access to PHI (45 CFR §164.524): Request access to and obtain a copy of your PHI maintained in our designated record sets;
• Right to Amend PHI (45 CFR §164.526): Request amendment or correction of PHI that you believe to be inaccurate or incomplete;
• Right to an Accounting of Disclosures (45 CFR §164.528): Request an accounting of certain disclosures of your PHI made by TLC Assist Living;
• Right to Request Restrictions (45 CFR §164.522(a)): Request restrictions on certain uses and disclosures of your PHI; and
• Right to Confidential Communications (45 CFR §164.522(b)): Request that we communicate with you about your PHI in a specific manner or at a specific location.

8.3 How to Submit Requests
To exercise any of the above rights, please submit a written request — including your full name, contact information, and a description of the specific right you wish to exercise — to:
• By Email: tlc@tlcassistliving.com
• By Mail: TLC Assist Living, Attn: Privacy Officer, 497 North Main Street, Randolph, MA 02368

TLC Assist Living will acknowledge receipt of your request promptly and will respond substantively within thirty (30) days of receipt of a verifiable written request, as required by applicable law.`
  },
  {
    id: 9,
    heading: 'Data Transfers',
    text: `All personal information and PHI collected and processed by TLC Assist Living is stored and processed within the United States. We do not transfer personal information or PHI to recipients located outside of the United States. Our data storage systems, servers, and cloud service providers are located in the United States and are subject to U.S. law, including applicable HIPAA, HITECH, and Massachusetts data protection requirements.

If this policy changes in the future, we will update this Data Protection Statement and obtain any required consents or provide required notifications to affected individuals prior to implementing any international data transfers.`
  },
  {
    id: 10,
    heading: 'Contact Our Privacy Officer',
    text: `TLC Assist Living has designated a Privacy Officer to oversee our data protection program and to serve as the primary point of contact for privacy-related inquiries, complaints, and requests.

Company Name: TLC Assist Living
Attn: Privacy Officer
Address: 497 North Main Street, Randolph, MA 02368
Email: tlc@tlcassistliving.com
Phone: 978-552-9703
Website: www.tlcassistliving.com

We take all privacy inquiries and complaints seriously and will respond to all communications in a timely and professional manner. If you believe your privacy rights have been violated, we encourage you to first contact our Privacy Officer directly so that we may address your concerns.`
  },
  {
    id: 11,
    heading: 'Regulatory Contacts',
    text: `If you believe your privacy rights or data protection rights have not been adequately addressed by TLC Assist Living, you have the right to file a complaint directly with the applicable regulatory authority:

Massachusetts Attorney General's Office
Jurisdiction: Massachusetts data security and consumer protection complaints (MGL c.93H, c.93A)
Contact: One Ashburton Place, Boston, MA 02108 | Tel: (617) 727-2200 | www.mass.gov/ago

HHS Office for Civil Rights (OCR)
Jurisdiction: HIPAA Privacy and Security complaints
Contact: 200 Independence Ave., SW, Washington, DC 20201 | Tel: 1-800-368-1019 | TTY: 1-800-537-7697 | www.hhs.gov/ocr

Federal Trade Commission (FTC)
Jurisdiction: Federal consumer protection and privacy
Contact: 600 Pennsylvania Avenue NW, Washington, DC 20580 | Tel: 1-877-382-4357 | reportfraud.ftc.gov

Filing a complaint with a regulatory authority will not result in any retaliation or adverse action by TLC Assist Living against you. We support your right to seek regulatory assistance.`
  }
]

const regBadges = [
  { label: '201 CMR 17.00', desc: 'MA Written Information Security Program (WISP)' },
  { label: 'HIPAA', desc: 'Privacy & Security Rule · 45 CFR Parts 160 & 164' },
  { label: 'HITECH Act', desc: 'Breach notification & HIPAA enforcement' },
  { label: 'MGL c.93H', desc: 'MA data breach notification law' },
]

const Data = () => {
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

        .dp-arrow { transition: transform 0.25s ease; }
        .dp-arrow.open { transform: rotate(45deg); }

        .dp-body-enter { animation: dpFade 0.25s ease; }
        @keyframes dpFade {
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
          <h1 className="tlc-display mt-4 text-4xl md:text-6xl font-semibold text-[#0D2B3E]">Data Protection Statement</h1>
          <p className="mt-5 text-[#4A5D6B] text-sm">TLC Assist Living · tlcassistliving.com</p>
          <p className="text-[#4A5D6B] text-sm">497 North Main Street, Randolph, MA 02368</p>

          <div className="mt-6 flex flex-wrap gap-2.5 justify-center">
            {['Effective: [Insert Date]', 'Last Updated: [Insert Date]', 'HIPAA Compliant', '201 CMR 17.00'].map((chip, i) => (
              <span key={i} className="tlc-glass text-[#1B8C86] text-[11px] font-semibold px-3.5 py-1.5 rounded-full">
                {chip}
              </span>
            ))}
          </div>
        </section>

        <section className="relative max-w-4xl mx-auto px-6 md:px-12 pb-24">

          {/* SHIELD BANNER */}
          <div className="tlc-glass rounded-2xl p-6 md:p-7 mb-8 flex items-start gap-5">
            <div className="w-11 h-11 rounded-xl bg-[#0D2B3E] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#7FDCD2]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0D2B3E] mb-1.5">Your Data Is Protected</h4>
              <p className="text-sm text-[#33495A] leading-relaxed">
                This Data Protection Statement describes how <strong className="text-[#0D2B3E]">TLC Assist Living</strong> safeguards
                the personal information and protected health information (PHI) of our clients, caregivers, and staff, in accordance
                with HIPAA, HITECH, MGL c.93H, MGL c.66A, and Massachusetts 201 CMR 17.00.
              </p>
            </div>
          </div>

          {/* REGULATORY BADGES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {regBadges.map((r, i) => (
              <div key={i} className="tlc-glass rounded-2xl p-5 border-t-2 border-t-[#1B8C86]">
                <h5 className="text-xs font-bold text-[#0D2B3E] tracking-wide">{r.label}</h5>
                <p className="mt-1 text-[11.5px] text-[#4A5D6B] leading-relaxed">{r.desc}</p>
              </div>
            ))}
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
                    <span className={`dp-arrow ${isOpen ? 'open' : ''} w-8 h-8 rounded-lg bg-[#0D2B3E]/10 text-[#0D2B3E] flex items-center justify-center shrink-0`}>
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="dp-body-enter px-6 pb-7 pl-[4.5rem]">
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
            <h3 className="tlc-display text-2xl font-semibold text-gray-700">Contact Our Privacy Officer</h3>
            <p className="mt-3 text-gray-500 text-sm">
              All privacy inquiries are handled within 30 days of a verifiable written request.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:tlc@tlcassistliving.com"
                className="bg-white text-[#0D2B3E] px-7 py-3 rounded-2xl font-semibold text-sm hover:bg-gray-100 transition"
              >
                Privacy Officer
              </a>
              <Link
                to="/contact"
                className="border border-white/25 text-white px-7 py-3 rounded-2xl font-semibold text-sm hover:bg-white/10 transition"
              >
                General Inquiries
              </Link>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}

export default Data