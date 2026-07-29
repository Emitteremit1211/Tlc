import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

const sections = [
  {
    id: 1,
    heading: 'Introduction & Scope',
    text: `TLC Assist Living ("TLC," "we," "us," or "our"), operating as tlcassistliving.com, is a Massachusetts-based provider of home care, caregiver placement, personal care aide (PCA) coordination, and related services headquartered in Randolph, Massachusetts. We are committed to protecting the privacy and confidentiality of all personal information entrusted to us by our clients, caregivers, job applicants, website visitors, and referral sources.

This Privacy Policy ("Policy") describes the types of personal information TLC Assist Living collects, how we use and protect that information, with whom we share it, and the rights you have with respect to your personal data. This Policy applies to all information collected through:

• Our website at www.tlcassistliving.com and any affiliated subdomains or web pages;
• Our home care and care coordination service operations;
• Telephone, email, and written communications with our office;
• Paper and electronic intake forms, employment applications, and service agreements; and
• Any other interaction between you and TLC Assist Living.

By accessing or using www.tlcassistliving.com or engaging our services, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy. If you do not agree with this Policy, please discontinue use of our website and services.

This Policy is designed to comply with applicable Massachusetts state law, including Massachusetts General Laws Chapter 93H (MGL c.93H), Chapter 66A (MGL c.66A), and the Massachusetts Data Security Regulations (201 CMR 17.00), as well as applicable federal law including the Health Insurance Portability and Accountability Act of 1996 (HIPAA), 45 CFR Parts 160 and 164, and the Health Information Technology for Economic and Clinical Health Act (HITECH).`
  },
  {
    id: 2,
    heading: 'Information We Collect',
    text: `TLC Assist Living collects personal information from multiple categories of individuals in connection with the provision of our services and operation of our website.

2.1 Personal Identifiers
• Full legal name, preferred name, and aliases;
• Residential address, mailing address, and location information;
• Email address and telephone number(s);
• Date of birth and age;
• Government-issued identification numbers (where required for employment or licensing purposes); and
• Emergency contact information.

2.2 Health-Related Information (Home Care Clients)
• Medical diagnoses, conditions, and health history;
• Care needs assessments, care plans, and service authorization documents;
• Medication information, treatment regimens, and physician orders;
• Attending physician, specialist, and healthcare provider information;
• Health insurance plan information and payer identification numbers; and
• Functional limitations and activities of daily living assessments.

2.3 Employment Information (Caregivers and Job Applicants)
• Social Security Number (SSN), as required for employment verification, payroll, and tax administration;
• Employment history, references, and professional credentials;
• Home Health Aide (HHA), Personal Care Attendant (PCA), and other certifications and licensure information;
• Background check and Criminal Offender Record Information (CORI) data, obtained and processed in compliance with MGL c.6, §§167–178B;
• Drug screening and occupational health records (where applicable); and
• Immigration and work authorization documentation, as required by federal law (Form I-9).

2.4 Financial Information
• Billing address and payment method information;
• Bank account or ACH routing information (for payroll or direct billing);
• Insurance billing and claims data; and
• Accounts receivable and payment history.

2.5 Website Usage Data
• IP address and general geographic location derived therefrom;
• Browser type, version, and operating system;
• Pages visited, time spent on pages, and referral URLs;
• Cookie identifiers and session data; and
• Device identifiers and screen resolution data.

2.6 Communications and Inquiries
• Content of inquiries submitted through our website contact forms;
• Email correspondence with TLC staff;
• Voicemail and telephone call records (where applicable and where permitted by law); and
• Referral information provided by healthcare providers, case managers, or family members.`
  },
  {
    id: 3,
    heading: 'How We Use Your Information',
    text: `TLC Assist Living uses the personal information we collect for the following purposes, each of which is authorized under applicable law or otherwise necessary for the operation of our business:

1. Service Delivery and Coordination: Providing, scheduling, coordinating, and managing home care, caregiver placement, PCA coordination, and related services for our clients;

2. Caregiver Recruitment and Placement: Recruiting, screening, credentialing, training, scheduling, and placing caregivers and staff with appropriate client placements;

3. Billing, Payroll, and Financial Administration: Processing client invoices, insurance claims, caregiver payroll, tax reporting (including IRS Form W-2 and 1099), and general financial recordkeeping;

4. Legal and Regulatory Compliance: Meeting obligations under HIPAA, HITECH, MGL c.111 §70E, MGL c.149, MGL c.93H, and 201 CMR 17.00, and responding to lawful government requests or legal process;

5. Safety Screening and Verification: Conducting background checks, CORI checks, reference verification, OIG exclusion list screening, and other credentialing activities required or recommended by Massachusetts law and best practices;

6. Quality Improvement and Training: Evaluating service quality, conducting staff performance reviews, and improving our care coordination processes;

7. Communications: Responding to your inquiries, sending appointment confirmations, and communicating service updates; and

8. Marketing and Website Improvement: Analyzing website usage trends, improving user experience, and conducting marketing activities — with consent where required by applicable law.`
  },
  {
    id: 4,
    heading: 'Legal Basis for Processing',
    text: `TLC Assist Living processes personal information on the following legal bases:

• Contractual Necessity: Processing is necessary for the performance of our service agreements with clients and employment agreements with caregivers and staff. Without this processing, we cannot provide our home care services.

• Legitimate Business Interests: Processing is necessary for our legitimate interests in operating a professional home care agency, including ensuring worker safety, maintaining service quality, and managing business operations, provided such interests are not overridden by your privacy rights.

• Legal Obligation: Processing is required to comply with Massachusetts state law, federal law (including HIPAA, IRS requirements, and FLSA), and applicable regulatory requirements.

• Consent: For marketing communications, the use of non-essential cookies, and certain other discretionary data uses, we rely on your affirmative consent. You may withdraw consent at any time without affecting the lawfulness of processing prior to withdrawal.`
  },
  {
    id: 5,
    heading: 'HIPAA-Aligned Privacy Protections',
    text: `To the extent that TLC Assist Living functions as a Covered Entity or Business Associate under HIPAA, all Protected Health Information (PHI) — as defined at 45 CFR §160.103 — is handled in strict accordance with the requirements of 45 CFR Parts 160 and 164 (the HIPAA Privacy Rule and Security Rule).

5.1 Use and Disclosure of PHI
PHI is used and disclosed only as permitted or required by HIPAA, including for treatment, payment, and health care operations (TPO), as required by law, or pursuant to a valid HIPAA-compliant written authorization signed by the client or their authorized representative.

5.2 Notice of Privacy Practices
Clients receiving services subject to HIPAA will receive a separate Notice of Privacy Practices (NPP) at or before the commencement of services. The NPP describes in detail how PHI may be used and disclosed and the rights of HIPAA-covered individuals with respect to their PHI. A copy of our current NPP is available upon request by contacting tlc@tlcassistliving.com.

5.3 Prohibition on Sale of PHI
TLC Assist Living does not sell, rent, or trade PHI to any third party. PHI is not used for marketing purposes without an explicit, HIPAA-compliant written authorization from the individual.

5.4 Minimum Necessary Standard
In all uses and disclosures of PHI, TLC Assist Living applies the HIPAA minimum necessary standard, disclosing only that PHI which is reasonably necessary to accomplish the purpose of the use or disclosure.`
  },
  {
    id: 6,
    heading: 'Sharing of Information',
    text: `TLC Assist Living does not sell, rent, or trade personal information to third parties for their own marketing purposes. We may share personal information with the following categories of recipients, solely to the extent necessary for the purposes described in this Policy:

• Service Providers and Subcontractors: Third-party vendors who assist us in operating our business, including payroll processors, background check companies, electronic health record (EHR) platforms, scheduling software providers, and IT service providers. All such vendors are required to execute confidentiality agreements and, where applicable, Business Associate Agreements (BAAs) as required by HIPAA;

• Healthcare Providers and Care Coordinators: Physicians, specialists, hospitals, skilled nursing facilities, home health agencies, and care management organizations, as necessary to coordinate and provide care, and only with appropriate client authorization or as otherwise permitted by HIPAA;

• Government Agencies and Regulators: The Massachusetts Department of Public Health (DPH), Executive Office of Elder Affairs (EOEA), the Office for Civil Rights (OCR) of the U.S. Department of Health and Human Services (HHS), law enforcement agencies, courts, and other governmental bodies, as required by law, regulation, court order, or lawful governmental process;

• Background Check and Credentialing Services: Consumer reporting agencies and credentialing verification organizations, as necessary to conduct required employment screening, in compliance with the federal Fair Credit Reporting Act (FCRA) and applicable Massachusetts law; and

• Insurance Companies and Payers: Health insurers, MassHealth (Massachusetts Medicaid), and other payers, as necessary for billing and claims adjudication.

Important Notice: TLC Assist Living does not sell, rent, or otherwise disclose your personal information to any third party for commercial or marketing purposes. Any sharing of information is limited to what is legally permitted and operationally necessary.`
  },
  {
    id: 7,
    heading: 'Data Retention',
    text: `TLC Assist Living retains personal information for the periods required or permitted by applicable law and no longer than is necessary for the purposes for which it was collected:

• Client Health and Service Records: Retained for a minimum of six (6) years from the date of the last service or the date of creation, whichever is later, as required by HIPAA (45 CFR §164.530(j)) and Massachusetts Department of Public Health regulations;

• Employment and Caregiver Records: Retained for a minimum of three (3) years from the date of termination of employment or the end of the service engagement, as required by MGL c.149 and applicable federal labor law;

• Financial and Billing Records: Retained for a minimum of seven (7) years for tax and accounting purposes, as required by the Internal Revenue Service and Massachusetts law;

• Background Check Data: Retained only as long as necessary for employment screening purposes and in compliance with FCRA requirements; and

• Website Analytics Data: Retained for up to twenty-four (24) months from collection, after which aggregate or anonymized data may be retained indefinitely for analytics purposes.

Upon expiration of the applicable retention period, personal information is securely destroyed or de-identified in accordance with our data destruction procedures and applicable law.`
  },
  {
    id: 8,
    heading: 'Your Rights Under Massachusetts Law',
    text: `Massachusetts residents have the following rights with respect to their personal information, subject to applicable legal exceptions and our legal obligations regarding record retention:

• Right of Access: You have the right to request access to the personal information we hold about you, pursuant to MGL c.66A and, for HIPAA-covered PHI, 45 CFR §164.524;

• Right to Correction: You have the right to request correction of inaccurate or incomplete personal information we hold about you;

• Right to Request Deletion: You may request deletion of your personal information, subject to our legal obligations to retain certain records under applicable law (including HIPAA and Massachusetts law);

• Right to Opt Out of Marketing: You may opt out of receiving marketing communications from TLC Assist Living at any time by contacting us at tlc@tlcassistliving.com or by following the unsubscribe instructions included in any marketing email;

• Right to File a Complaint: You have the right to file a complaint regarding our privacy practices with:
  – The Massachusetts Attorney General's Office: (617) 727-2200 or www.mass.gov/ago; and
  – The HHS Office for Civil Rights (for HIPAA-related complaints): 1-800-368-1019 or www.hhs.gov/ocr.

To exercise your rights, please submit a written request to: TLC Assist Living, Attn: Privacy Officer, 497 North Main Street, Randolph, MA 02368, or email: tlc@tlcassistliving.com. We will respond to all verifiable requests within thirty (30) days of receipt, as required by applicable law.`
  },
  {
    id: 9,
    heading: 'Data Security',
    text: `TLC Assist Living maintains a comprehensive Written Information Security Program (WISP) as required by 201 CMR 17.00. Our security program incorporates the following safeguards:

• Technical Controls: Encryption of personal information stored on portable devices and transmitted over public networks; role-based access controls limiting access to personal information to those with a legitimate business need; multi-factor authentication for systems containing sensitive data; and regular software updates and patch management;

• Administrative Controls: Annual privacy and security training for all employees and contractors; executed confidentiality agreements with all workforce members; and documented incident response procedures; and

• Physical Controls: Secured file storage for paper records; clean desk and locked filing policies; and controlled access to office premises.

In the event of a security breach involving personal information of Massachusetts residents, TLC Assist Living will provide notification to affected individuals within thirty (30) days of the discovery of the breach, and will notify the Massachusetts Attorney General and the Director of Consumer Affairs and Business Regulation, as required by MGL c.93H. HIPAA breach notifications will be provided in accordance with 45 CFR §§164.400–414.`
  },
  {
    id: 10,
    heading: "Children's Privacy",
    text: `The website at www.tlcassistliving.com is not directed to children under the age of thirteen (13). TLC Assist Living does not knowingly collect, use, or disclose personal information from children under the age of 13 without verifiable parental consent, in compliance with the Children's Online Privacy Protection Act (COPPA), 15 U.S.C. §§6501–6506.

If we become aware that we have inadvertently collected personal information from a child under 13 without appropriate consent, we will take prompt steps to delete such information from our records.

Our home care services may involve the coordination of care for minor clients; however, all such information is collected directly from the parent or legal guardian as the authorized representative and is handled in accordance with applicable law.`
  },
  {
    id: 11,
    heading: 'Third-Party Links',
    text: `The tlcassistliving.com website may contain hyperlinks to third-party websites, resources, or services that are not owned or controlled by TLC Assist Living. These links are provided solely for your convenience and informational purposes. TLC Assist Living has no control over, and assumes no responsibility for, the content, privacy practices, or terms of use of any third-party websites. The inclusion of a link to a third-party site does not constitute an endorsement, recommendation, or approval by TLC Assist Living of that site or its operators.

We encourage you to review the privacy policy and terms of use of every third-party website you visit. TLC Assist Living is not liable for any information you provide to or receive from any third-party website accessed through a link on our site.`
  },
  {
    id: 12,
    heading: 'Changes to This Policy',
    text: `TLC Assist Living reserves the right to update or modify this Privacy Policy at any time to reflect changes in our practices, legal obligations, or regulatory requirements. When material changes are made to this Policy, we will revise the "Last Updated" date at the top of this document and, where appropriate, provide conspicuous notice on our website or by direct communication to affected individuals.

Your continued use of www.tlcassistliving.com or our services following the posting of an updated Privacy Policy constitutes your acceptance of the revised Policy. We encourage you to review this Policy periodically to remain informed about our privacy practices.`
  },
  {
    id: 13,
    heading: 'Contact Us',
    text: `If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:

Company Name: TLC Assist Living
Address: 497 North Main Street, Randolph, MA 02368
Email: tlc@tlcassistliving.com
Phone: 978-552-9703
Website: www.tlcassistliving.com`
  }
]

const Privacy = () => {
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

        .pp-arrow { transition: transform 0.25s ease; }
        .pp-arrow.open { transform: rotate(45deg); }

        .pp-body-enter { animation: ppFade 0.25s ease; }
        @keyframes ppFade {
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
        <div className="tlc-blob w-[360px] h-[360px] bg-[#FFC9A3] top-[1100px] right-[-120px]" />
        <div className="tlc-blob w-[300px] h-[300px] bg-[#9FD8F2] top-[2400px] left-[-80px]" />

        {/* HERO */}
        <section className="relative pt-36 pb-20 px-6 md:px-12 text-center">
          <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em] underline underline-offset-8 decoration-2">
            Legal &amp; Compliance
          </span>
          <h1 className="tlc-display mt-5 text-4xl md:text-6xl font-semibold text-[#0D2B3E]">Privacy Policy</h1>
          <p className="mt-5 text-[#4A5D6B] text-sm">TLC Assist Living</p>
          <p className="text-[#4A5D6B] text-sm">497 North Main Street, Randolph, MA 02368</p>

          <div className="tlc-glass inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full text-xs font-semibold text-[#1B8C86]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1B8C86]" />
            Effective: [Insert Date] · Last Updated: [Insert Date]
          </div>
        </section>

        <section className="relative max-w-4xl mx-auto px-6 md:px-12 pb-24">

          {/* INTRO NOTICE */}
          <div className="tlc-glass rounded-2xl p-6 mb-8 border-l-4 border-l-[#0D2B3E]">
            <p className="text-sm text-[#33495A] leading-relaxed">
              This Privacy Policy applies to all personal information collected through{' '}
              <strong className="text-[#0D2B3E]">www.tlcassistliving.com</strong> and all services provided by{' '}
              <strong className="text-[#0D2B3E]">TLC Assist Living</strong>. It is designed to comply with HIPAA,
              HITECH, MGL c.93H, MGL c.66A, and 201 CMR 17.00.
            </p>
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
                    <span className={`pp-arrow ${isOpen ? 'open' : ''} w-8 h-8 rounded-full bg-[#0D2B3E]/10 text-[#0D2B3E] flex items-center justify-center shrink-0`}>
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pp-body-enter px-6 pb-7 pl-[4.5rem]">
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
            <h3 className="tlc-display text-2xl font-semibold text-white">Privacy Questions or Requests?</h3>
            <p className="mt-3 text-white/60 text-sm">
              Our Privacy Officer will respond within 30 days of your verifiable request.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:tlc@tlcassistliving.com"
                className="bg-white text-[#0D2B3E] px-7 py-3 rounded-2xl font-semibold text-sm hover:bg-gray-100 transition"
              >
                Email the Privacy Officer
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

export default Privacy