import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Settings, BarChart3, SlidersHorizontal, Megaphone, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
const sections = [
  {
    id: 1,
    heading: 'What Are Cookies',
    text: `Cookies are small text files that are placed on your computer, tablet, smartphone, or other device by a website when you visit it. They are widely used in order to make websites work, work more efficiently, and to provide information about how a website is being used. Cookies allow a website to recognize your device and remember information about your visit, such as your language preferences or login status.

In addition to traditional cookies, we may also use the following related tracking technologies on tlcassistliving.com:

• Web Beacons (Pixels): Small, transparent image files embedded in web pages or emails that allow us to track whether a page has been viewed or an email has been opened. Web beacons are often used in conjunction with cookies;

• Local Storage: A browser-based storage mechanism that allows websites to store data locally on your device, similar to cookies but with greater storage capacity and session persistence. Local storage data does not expire automatically; and

• Session Storage: Similar to local storage but limited to a single browser session. Session storage data is cleared automatically when you close your browser window or tab.

Throughout this Cookie Policy, references to "cookies" encompass all of the above-described technologies unless otherwise specified.`
  },
  {
    id: 2,
    heading: 'How We Use Cookies',
    text: `TLC Assist Living uses cookies and similar tracking technologies on www.tlcassistliving.com for the following purposes:

2.1 Essential / Strictly Necessary Cookies
These cookies are necessary for the Site to function properly and cannot be disabled in our systems without preventing the Site from working correctly. They are typically set in response to actions made by you, such as setting your privacy preferences, logging in, or filling out forms. These cookies do not store any personally identifiable information beyond what is strictly necessary for their function. You cannot opt out of essential cookies if you wish to use the Site.

2.2 Performance and Analytics Cookies
These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our Site. They help us understand which pages are the most and least popular and see how visitors move around the Site. All information these cookies collect is aggregated and anonymized. We use Google Analytics with IP anonymization enabled, ensuring that your IP address is truncated before processing. If you do not allow these cookies, we will not know when you have visited our Site and will not be able to monitor its performance.

2.3 Functional Cookies
These cookies enable enhanced functionality and personalization on the Site. They may be set by us or by third-party providers whose services we have added to our pages. They allow the Site to remember choices you make, such as your language preference, accessibility settings, or the region you are in, and to provide enhanced, more personalized features. If you do not allow these cookies, some or all of these services may not function properly.

2.4 Marketing and Targeting Cookies
Marketing cookies may be used to deliver advertisements and content that are more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and to help measure the effectiveness of advertising campaigns. These cookies are placed only with your express prior consent. TLC Assist Living does not currently operate paid advertising campaigns through the Site; if this changes, we will update this Cookie Policy accordingly and obtain fresh consent as required.`
  },
  {
    id: 3,
    heading: 'Types of Cookies We Use',
    text: `The following describes the specific cookies currently in use on www.tlcassistliving.com:

ESSENTIAL COOKIES
• session_id — Maintains your active user session while navigating the Site; required for form submissions and site security. Duration: Session (deleted when browser closes). First-party.

• csrf_token — Cross-Site Request Forgery (CSRF) protection token; prevents unauthorized form submissions and protects site security. Duration: Session. First-party.

• tlc_consent — Records your cookie consent preferences so the consent banner is not repeatedly displayed. Duration: 12 months. First-party.

ANALYTICS COOKIES
• _ga — Google Analytics: used to distinguish unique users by assigning a randomly generated number as a client identifier. IP anonymization enabled. Duration: 24 months. Third-party (Google LLC).

• _gid — Google Analytics: distinguishes users; stores and updates a unique value for each page visited. Duration: 24 hours. Third-party (Google LLC).

• _gat — Google Analytics: used to throttle request rate; limits data collection on high-traffic sites. Duration: 1 minute. Third-party (Google LLC).

FUNCTIONAL COOKIES
• tlc_prefs — Stores your language and accessibility preferences to provide a consistent experience across sessions. Duration: 6 months. First-party.

• tlc_region — Stores your service area or geographic region preference for displaying relevant care information. Duration: 30 days. First-party.

This table is periodically updated to reflect changes in our cookie usage. Please check back regularly for the most current list.`
  },
  {
    id: 4,
    heading: 'Third-Party Cookies',
    text: `4.1 Google Analytics
We use Google Analytics, a web analytics service provided by Google LLC ("Google"), to help us understand how users interact with our Site. Google Analytics places cookies on your device that collect information about your use of the Site in anonymized, aggregated form. This information is transmitted to and stored on Google's servers. TLC Assist Living has enabled IP anonymization, which means Google truncates your IP address before processing. Google's use of this data is governed by Google's Privacy Policy, available at policies.google.com/privacy. You may opt out of Google Analytics tracking using the Google Analytics Opt-Out Browser Add-on available at tools.google.com/dlpage/gaoptout.

4.2 Social Media Sharing Features
If social media sharing buttons (such as those for Facebook, LinkedIn, or X/Twitter) are present on our Site, these features may place cookies from the respective social media platform on your device when you interact with them, even if you do not click on the button. We do not control these third-party cookies and encourage you to review the privacy and cookie policies of the relevant social media platforms.

4.3 Third-Party Advertising Networks
TLC Assist Living does not currently permit third-party advertising networks to place tracking cookies on users of our Site for cross-site behavioral advertising without explicit, prior user consent. If we engage such networks in the future, we will update this Cookie Policy and obtain fresh consent prior to enabling any such cookies.`
  },
  {
    id: 5,
    heading: 'Your Cookie Choices',
    text: `5.1 Browser Settings
Most web browsers allow you to control cookies through their settings. You can typically configure your browser to:
• Block all cookies;
• Accept only first-party (website-set) cookies and reject third-party cookies;
• Delete cookies when you close your browser; or
• Alert you each time a new cookie is placed, so you can decide whether to allow or reject it.

Instructions for managing cookies in common browsers are available at:
• Google Chrome: support.google.com/chrome/answer/95647
• Mozilla Firefox: support.mozilla.org/kb/cookies-information-websites-store-on-your-computer
• Microsoft Edge: support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge
• Apple Safari: support.apple.com/guide/safari/manage-cookies-sfri11471

5.2 Google Analytics Opt-Out
To opt out of Google Analytics tracking across all websites, you may install the Google Analytics Opt-Out Browser Add-on, available at tools.google.com/dlpage/gaoptout.

5.3 Impact of Disabling Cookies
Please be aware that disabling or blocking certain types of cookies may impact the functionality of our Site:
• Disabling essential cookies will prevent core Site functionality, including form submissions, security protections, and session management, from operating correctly;
• Disabling analytics cookies will prevent us from understanding how you use our Site, which may limit our ability to improve it; and
• Disabling functional cookies may result in loss of your saved preferences and require you to reset them each visit.`
  },
  {
    id: 6,
    heading: 'Consent',
    text: `6.1 Cookie Consent Banner
Upon your first visit to www.tlcassistliving.com, you will be presented with a cookie consent banner that describes our use of cookies and requests your consent for non-essential cookie categories. Your consent preferences are recorded in the tlc_consent cookie. By continuing to browse the Site after acknowledging the banner and selecting your preferences, you consent to the use of cookies in accordance with this Cookie Policy.

6.2 Granular Consent
Where technically practicable, our cookie consent tool allows you to accept or reject specific categories of cookies (essential, analytics, functional, and marketing) independently. Essential cookies are always active and cannot be declined without impairing Site functionality.

6.3 Withdrawing Consent
You may withdraw or update your cookie consent at any time by clearing your browser's cookies (which will reset the tlc_consent cookie and re-display the consent banner on your next visit) or by adjusting your browser settings as described in Section 5. Withdrawing consent does not affect the lawfulness of any cookie use prior to withdrawal.`
  },
  {
    id: 7,
    heading: 'Updates to This Policy',
    text: `TLC Assist Living may update this Cookie Policy from time to time to reflect changes in the cookies we use, changes in applicable law, or updates to our website technology. When we update this Policy, we will revise the "Last Updated" date at the top of this document. We encourage you to review this Cookie Policy periodically to remain informed about our use of cookies and related technologies.`
  },
  {
    id: 8,
    heading: 'Contact Us',
    text: `If you have any questions about our use of cookies or this Cookie Policy, please contact us:

Company Name: TLC Assist Living
Address: 497 North Main Street, Randolph, MA 02368
Email: tlc@tlcassistliving.com
Phone: 978-552-9703
Website: www.tlcassistliving.com`
  }
]

const cookieTypes = [
  { icon: Settings, label: 'Essential', desc: 'Always active. Required for the site to function.' },
  { icon: BarChart3, label: 'Analytics', desc: 'Helps us understand how visitors use the site.' },
  { icon: SlidersHorizontal, label: 'Functional', desc: 'Remembers your preferences and settings.' },
  { icon: Megaphone, label: 'Marketing', desc: 'Not currently in use. Requires explicit consent.' },
]

const Cookies = () => {
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

        .cp-arrow {
            transition: transform 0.25s ease;
        }
        .cp-arrow.open {
            transform: rotate(45deg);
        }

        .cp-body-enter {
            animation: cpFade 0.25s ease;
        }
        @keyframes cpFade {
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
        <div className="tlc-blob w-[300px] h-[300px] bg-[#9FD8F2] top-[1800px] left-[-80px]" />

        {/* HERO */}
        <section className="relative pt-36 pb-20 px-6 md:px-12 text-center">
          <span className="text-[#1B8C86] text-xs font-bold uppercase tracking-[0.2em]">Legal &amp; Compliance</span>
          <h1 className="tlc-display mt-4 text-4xl md:text-6xl font-semibold text-[#0D2B3E]">Cookie Policy</h1>
          <p className="mt-5 text-[#4A5D6B] text-sm">
            TLC Assist Living · tlcassistliving.com
          </p>
          <p className="text-[#4A5D6B] text-sm">
            497 North Main Street, Randolph, MA 02368
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center text-xs text-[#1B8C86] font-semibold">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B8C86]" /> Effective: [Insert Effective Date]
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B8C86]" /> Last Updated: [Insert Update Date]
            </span>
          </div>
        </section>

        <section className="relative max-w-4xl mx-auto px-6 md:px-12 pb-24">

          {/* COOKIE TYPE CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {cookieTypes.map((t, i) => {
              const Icon = t.icon
              const inactive = t.label === 'Marketing'
              return (
                <div key={i} className={`tlc-glass rounded-2xl p-5 text-center ${inactive ? 'opacity-60' : ''}`}>
                  <Icon className="w-6 h-6 mx-auto text-[#0D2B3E]" />
                  <p className="mt-3 text-sm font-semibold text-[#0D2B3E]">{t.label}</p>
                  <p className="mt-1.5 text-[11px] text-[#4A5D6B] leading-relaxed">{t.desc}</p>
                  <span className={`inline-block mt-3 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                    inactive ? 'bg-[#0D2B3E]/5 text-[#4A5D6B]' : 'bg-[#1B8C86]/10 text-[#1B8C86]'
                  }`}>
                    {t.label === 'Essential' ? 'Always On' : inactive ? 'Not Active' : 'Opt-Out'}
                  </span>
                </div>
              )
            })}
          </div>

          {/* NOTICE */}
          <div className="tlc-glass rounded-2xl p-6 mb-8 border-l-4 border-l-[#1B8C86]">
            <p className="text-sm text-[#33495A] leading-relaxed">
              This Cookie Policy explains how <strong className="text-[#0D2B3E]">TLC Assist Living</strong> uses
              cookies and similar tracking technologies on <strong className="text-[#0D2B3E]">www.tlcassistliving.com</strong>.
              By continuing to use our Site, you consent to our use of cookies in accordance with this policy.
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
                    <span className="w-9 h-9 rounded-xl bg-[#0D2B3E] text-[#7FDCD2] text-xs font-bold flex items-center justify-center shrink-0">
                      {section.id}
                    </span>
                    <span className="tlc-display flex-1 text-base md:text-lg font-semibold text-[#0D2B3E]">
                      {section.heading}
                    </span>
                    <span className={`cp-arrow ${isOpen ? 'open' : ''} w-8 h-8 rounded-lg bg-[#0D2B3E]/10 text-[#0D2B3E] flex items-center justify-center shrink-0`}>
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="cp-body-enter px-6 pb-7 pl-[4.5rem]">
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
            <h3 className="tlc-display text-2xl font-semibold text-gray-700">Questions About Our Cookie Policy?</h3>
            <p className="mt-3 text-gray-500 text-sm">Reach out to our team and we'll get back to you promptly.</p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:tlc@tlcassistliving.com"
                className="bg-white text-[#0D2B3E] px-7 py-3 rounded-2xl font-semibold text-sm hover:bg-gray-100 transition"
              >
                Email Us
              </a>
              <Link
                to="/contact"
                className="border border-white/25 text-gray-500 px-7 py-3 rounded-2xl font-semibold text-sm hover:bg-gray-300 transition"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}

export default Cookies