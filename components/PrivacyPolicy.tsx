// src/components/PrivacyPolicy.jsx
import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className=' px-4 sm:px-6 lg:px-8 py-10  border-t border-slate-300'>
      <div className='mx-auto max-w-[1000px] '>
        {/* Header */}
        <header>
          <p className='text-[20px] sm:text-[24px] md:text-[26px] font-semibold text-slate-900'>
            Last Updated: January 16, 2024
          </p>
          <p className='mt-5 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
            At Dayos, we prioritize privacy as a fundamental right. We handle your personal
            information with care and transparency to maintain your trust.
          </p>
        </header>

        {/* Main Content */}
        <article className='mt-12 space-y-16'>
          {/* About Privacy */}
          <section id='about-privacy'>
            <h2 className='font-bold mb-4 font-heading uppercase leading-[1.1] text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] tracking-tight'>
              About Dayos Privacy
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              Our Privacy Statement outlines how we collect, use, and share personal information. We
              are committed to handling your data with care and transparency.
            </p>
          </section>

          {/* About Dayos */}
          <section id='about-dayos' className='space-y-5'>
            <h2 className='font-bold mb-4 font-heading uppercase leading-[1.1] text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] tracking-tight'>
              About Dayos
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              Dayos is a leading provider of cloud-based AI solutions and managed services,
              specializing in ERP and HCM systems like Oracle, SAP, and Workday. Our solutions
              integrate seamlessly with enterprise systems to ensure efficiency and scalability.
            </p>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              We operate under a Software-as-a-Service (SaaS) and professional services model,
              delivering value through subscription services and on-demand support. We do not
              monetize user data or share it without explicit consent.
            </p>
          </section>

          {/* Scope */}
          <section id='scope' className='space-y-5'>
            <h2 className='font-bold mb-4 font-heading uppercase leading-[1.1] text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] tracking-tight'>
              Scope of this Privacy Statement
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              This Privacy Statement applies when Dayos acts as a <strong>data controller</strong>,
              collecting and using your personal information for its own purposes, including when
              you:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              <li>
                Visit Dayos websites, such as <span className='font-medium'>www.dayos.com</span> or{" "}
                <span className='font-medium'>www.dayos.ai</span>.
              </li>
              <li>
                Engage with Dayos as a representative of a company (e.g., a customer or supplier).
              </li>
              <li>Register for or attend Dayos events, webinars, or demos.</li>
              <li>Communicate with us directly or provide feedback.</li>
            </ul>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              When Dayos acts as a <strong>data processor</strong> on behalf of its clients, this
              Privacy Statement does not apply. In those cases, inquiries should be directed to the
              organization using Dayos products.
            </p>
          </section>

          {/* Collection + Use */}
          <section id='collection-use' className='space-y-10'>
            <h2 className='font-bold mb-4 font-heading uppercase leading-[1.1] text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] tracking-tight'>
              How We Collect and Use Personal Information
            </h2>

            {/* Info You Provide */}
            <div className='space-y-6'>
              <h3 className='font-bold font-heading uppercase text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] tracking-tight'>
                Information You Provide to Us
              </h3>
              <ul className='list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
                <li>
                  <strong>Data:</strong> Name, email, phone number, company details.
                </li>
                <li>
                  <strong>Purpose:</strong> Fulfill requests and provide relevant information about
                  our products and services.
                </li>
                <li>
                  <strong>Legal Basis:</strong> Legitimate interests or consent (where applicable).
                </li>
              </ul>
            </div>

            {/* Events/Webinars */}
            <div className='space-y-6'>
              <h4 className='font-semibold font-heading uppercase text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] tracking-tight'>
                When registering for events/webinars
              </h4>
              <ul className='list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
                <li>
                  <strong>Data:</strong> Contact details, billing information (if applicable),
                  preferences.
                </li>
                <li>
                  <strong>Purpose:</strong> Manage events, tailor experiences, and communicate
                  updates.
                </li>
                <li>
                  <strong>Legal Basis:</strong> Legitimate interests, consent, or contract
                  performance.
                </li>
              </ul>
            </div>

            {/* Feedback */}
            <div className='space-y-6'>
              <h4 className='font-semibold font-heading uppercase text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] tracking-tight'>
                When providing feedback
              </h4>
              <ul className='list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
                <li>
                  <strong>Data:</strong> Contact details and voluntary survey responses/insights.
                </li>
                <li>
                  <strong>Purpose:</strong> Improve offerings and user experience.
                </li>
                <li>
                  <strong>Legal Basis:</strong> Legitimate interests or consent.
                </li>
              </ul>
            </div>

            {/* Info Auto */}
            <div className='space-y-6'>
              <h3 className='font-bold font-heading uppercase text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] tracking-tight'>
                Information We Collect Automatically
              </h3>

              <h4 className='font-semibold font-heading uppercase text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] tracking-tight'>
                From websites
              </h4>
              <ul className='list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
                <li>
                  <strong>Data:</strong> Device type, browser information, IP address, interaction
                  logs (clicked links, viewed content).
                </li>
                <li>
                  <strong>Purpose:</strong> Analytics, service improvements, and security.
                </li>
                <li>
                  <strong>Legal Basis:</strong> Legitimate interests.
                </li>
              </ul>

              <h4 className='font-semibold font-heading uppercase text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] tracking-tight'>
                From applications
              </h4>
              <ul className='list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
                <li>
                  <strong>Data:</strong> Device make, model, and operational data.
                </li>
                <li>
                  <strong>Purpose:</strong> App performance monitoring and troubleshooting.
                </li>
                <li>
                  <strong>Legal Basis:</strong> Legitimate interests.
                </li>
              </ul>
            </div>
          </section>

          {/* Sharing */}
          <section id='sharing' className='space-y-5'>
            <h2 className='font-bold mb-4 font-heading uppercase leading-[1.1] text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] tracking-tight'>
              Sharing Your Information
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              Dayos may share personal information in the following scenarios:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              <li>
                <strong>With service providers:</strong> For IT support, payment processing, or
                event management.
              </li>
              <li>
                <strong>With your organization:</strong> As required for account management or event
                participation.
              </li>
              <li>
                <strong>Legal or compliance purposes:</strong> To meet legal obligations or respond
                to lawful requests.
              </li>
            </ul>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              <strong>We do not sell</strong> or share your personal information for advertising
              purposes.
            </p>
          </section>

          {/* Rights */}
          <section id='rights' className='space-y-5'>
            <h2 className='font-bold mb-4 font-heading uppercase leading-[1.1] text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] tracking-tight'>
              Your Privacy Rights
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              Depending on your jurisdiction, you may have rights to:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              <li>Access, correct, or delete personal information.</li>
              <li>Object to or restrict processing.</li>
              <li>Request data portability.</li>
            </ul>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              To exercise these rights, contact us at{" "}
              <a
                className='text-sky-600 underline decoration-from-font underline-offset-2'
                href='mailto:privacy@dayos.com'
              >
                privacy@dayos.com
              </a>
              . We will respond within the timeframe required by law.
            </p>
          </section>

          {/* Retention */}
          <section id='retention' className='space-y-5'>
            <h2 className='font-bold mb-4 font-heading uppercase leading-[1.1] text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] tracking-tight'>
              Data Retention
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              Dayos retains personal data only as long as necessary to fulfill its purposes, comply
              with legal obligations, or resolve disputes. When no longer needed, data is securely
              deleted or anonymized.
            </p>
          </section>

          {/* Security */}
          <section id='security' className='space-y-5'>
            <h2 className='font-bold mb-4 font-heading uppercase leading-[1.1] text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] tracking-tight'>
              Security and Compliance
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              We implement robust technical and organizational measures to protect your data. For
              international transfers, we adhere to frameworks such as the EU–U.S. Data Privacy
              Framework and comply with applicable local laws.
            </p>
          </section>

          {/* Contact */}
          <section id='contact' className='space-y-5'>
            <h2 className='font-bold mb-4 font-heading uppercase leading-[1.1] text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] tracking-tight'>
              Contact Us
            </h2>
            <address className='not-italic text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              <p className='font-semibold'>Dayos, Inc.</p>
              <p>Attn.: Privacy</p>
              <p>15 Beach Road, 2nd Floor</p>
              <p>Singapore, 189677</p>
              <p className='mt-2'>
                Email:{" "}
                <a
                  className='text-sky-600 underline decoration-from-font underline-offset-2'
                  href='mailto:info@dayos.com'
                >
                  info@dayos.com
                </a>
              </p>
            </address>
          </section>
        </article>
      </div>
    </main>
  );
}
