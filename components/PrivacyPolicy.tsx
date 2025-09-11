import React from "react";
import { FiDatabase, FiLock, FiPocket, FiEye, FiSliders, FiGlobe } from "react-icons/fi";

const PrincipleCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className='bg-white p-6 rounded-xl border border-stone-200 shadow-sm'>
    <div className='text-cyan-600 mb-4'>{icon}</div>
    <h3 className='text-xl md:text-2xl font-semibold text-stone-800'>{title}</h3>
    <p className='mt-2 text-stone-600 leading-relaxed'>{text}</p>
  </div>
);

// A reusable section heading component for consistency and clean code
const SectionHeading = ({ number, title }: { number: number | string; title: string }) => (
  <h2 className='text-3xl md:text-5xl font-bold font-heading mb-6 text-stone-800 border-b border-stone-200 pb-4'>
    {number}. {title}
  </h2>
);

export default function PrivacyPolicy() {
  return (
    <main className='px-4 sm:px-6 lg:px-8 py-10 border-t border-stone-200 bg-slate-50'>
      <div className='mx-auto max-w-[1000px]'>
        {/* --- Header --- */}
        <header className='mb-12'>
          <p className='text-xl font-semibold text-stone-800'>Last Updated: 26 Aug 2025</p>
          <p className='mt-5 text-lg text-stone-700 leading-relaxed'>
            At Evro AI, we are building a platform to handle some of the most sensitive
            conversations within an organisation. Trust is our most critical asset. Our commitment
            to privacy is not just a legal obligation; it is the foundation of our product and
            culture.
          </p>
          <p className='mt-5 text-lg text-stone-700 leading-relaxed'>
            We handle personal information with transparency, integrity, and in compliance with:
          </p>
          <ul className='list-disc pl-6 mt-4 space-y-2 text-lg text-stone-700 leading-relaxed'>
            <li>The Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs)</li>
            <li>The General Data Protection Regulation (GDPR)</li>
            <li>
              The California Consumer Privacy Act (CCPA), as amended by the CPRA, and other
              applicable US state laws
            </li>
            <li>Other relevant global data protection standards</li>
          </ul>
        </header>

        {/* --- Plain Language Summary (Callout Box) --- */}
        <section className='bg-white p-8 rounded-2xl border border-stone-200 shadow-lg space-y-6 mb-16'>
          <h2 className='text-2xl font-bold text-stone-800 font-heading'>Plain Language Summary</h2>
          <p className='text-lg text-stone-700'>
            At Evro AI, protecting privacy is central to our product and culture. This policy
            explains how we collect, use, store, and protect personal information.
          </p>
          <div>
            <h3 className='text-xl font-semibold text-stone-800 mb-4'>Key Points:</h3>
            <ul className='space-y-4'>
              <li className='flex items-start'>
                <span className='mr-4 mt-1 text-cyan-600 flex-shrink-0'>
                  <FiSliders size={20} />{" "}
                </span>
                <span className='text-lg text-stone-700'>
                  <strong>Your Data, Your Control:</strong> You and your organisation own your data.
                  We don’t sell it or use it to train public AI models.
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-4 mt-1 text-cyan-600 flex-shrink-0'>
                  <FiLock size={20} />{" "}
                </span>
                <span className='text-lg text-stone-700'>
                  <strong>Privacy by Design:</strong> Our systems minimise data collection and use
                  strong security controls. Evro employees cannot access identifiable conversation
                  data.
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-4 mt-1 text-cyan-600 flex-shrink-0'>
                  <FiDatabase size={20} />{" "}
                </span>
                <span className='text-lg text-stone-700'>
                  <strong>What We Collect:</strong> Basic account details, de-identified
                  conversation data, and anonymised usage statistics.
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-4 mt-1 text-cyan-600 flex-shrink-0'>
                  <FiPocket size={20} />{" "}
                </span>
                <span className='text-lg text-stone-700'>
                  <strong>How We Use It:</strong> To deliver and improve our services, comply with
                  laws, and for consented research.
                </span>
              </li>
            </ul>
          </div>
          <p className='text-base text-stone-500 italic pt-4 border-t border-stone-200'>
            This summary is for convenience only. The detailed Privacy Policy below is legally
            binding.
          </p>
        </section>

        {/* --- Main Content Article --- */}
        <article className='mt-16 space-y-16 text-lg text-stone-700 leading-relaxed'>
          <section id='about-evro'>
            <SectionHeading number={1} title='About Evro AI' />
            <p>
              Evro AI Pty Ltd (ACN 686 025 454) is an Australian proprietary limited company
              providing AI-powered Software-as-a-Service (SaaS) solutions that support
              organisational performance, leadership development, and workplace wellbeing.
            </p>
            <p className='mt-4'>
              We operate under a subscription and services model. We do not sell or monetise your
              data. We only collect, use, and disclose information necessary to deliver our
              Services, improve our platform, and meet our legal obligations.
            </p>
          </section>

          <section id='core-principles'>
            <SectionHeading number={2} title='Our Core Privacy Principles' />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <PrincipleCard
                icon={<FiSliders size={24} />}
                title='You Own Your Data'
                text='You and your organisation retain full control and ownership of the data you provide to Evro AI.'
              />
              <PrincipleCard
                icon={<FiLock size={24} />}
                title='Privacy by Design'
                text='Our systems are architected on the Principle of Least Privilege, minimising data collection and ensuring no access to identifiable conversation data.'
              />
              <PrincipleCard
                icon={<FiGlobe size={24} />}
                title='No Training on Your Data'
                text='We will never use personal or conversational data to train global, public AI models.'
              />
              <PrincipleCard
                icon={<FiEye size={24} />}
                title='Transparency'
                text='We are radically transparent about how our systems work, how your data is handled, and how privacy rights are enforced.'
              />
            </div>
          </section>

          <section id='scope'>
            <SectionHeading number={3} title='Scope of this Privacy Policy' />
            <p>
              This Privacy Policy applies when Evro AI acts as the organisation responsible for
              handling personal information (commonly referred to internationally as a “data
              controller”). This includes when you:
            </p>
            <ul className='list-disc pl-6 mt-4 space-y-2'>
              <li>visit our websites (e.g. www.evro.ai);</li>
              <li>
                engage with us as a representative of a customer, prospect, supplier, or partner;
              </li>
              <li>register for or attend an Evro AI event, webinar, or demo;</li>
              <li>
                communicate with us directly, including via email, chat, or support channels; or
              </li>
              <li>
                provide feedback, participate in research, or otherwise engage with our Services.
              </li>
            </ul>
            <p className='mt-4'>
              When we process personal information within our platform (e.g. end-user data uploaded
              into our platform), we act as a service provider or data processor. In those cases,
              your organisation’s privacy policy governs, and you remain responsible for ensuring
              valid consents have been obtained.
            </p>
          </section>

          <section id='collection-use'>
            <SectionHeading number={4} title='How We Collect and Use Personal Information' />
            <div className='space-y-8'>
              <div>
                <h3 className='text-xl font-semibold text-stone-800 mb-3'>
                  Information You Provide
                </h3>
                <p>
                  <strong>Account Information:</strong> Name, email, organisation, role. Stored in a
                  restricted PII Vault, used only for authentication, account administration, and
                  essential communications.
                </p>
                <p className='mt-2'>
                  <strong>Billing Information:</strong> Standard payment details, securely processed
                  by PCI-compliant providers.
                </p>
                <p className='mt-2'>
                  <strong>Event & Research Data:</strong> Registration details, preferences, survey
                  responses — used to manage participation and improve services.
                </p>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-stone-800 mb-3'>
                  Information Generated Through Use
                </h3>
                <p>
                  <strong>Coaching & Interaction Data:</strong> Conversations with our AI Coaches,
                  feedback, and goals. These are de-identified and stored separately from PII,
                  linked only by anonymous user IDs.
                </p>
                <p className='mt-2'>
                  <strong>Uploaded Files:</strong> Processed ephemerally in-memory. Original files
                  are permanently discarded after extraction of necessary content.
                </p>
                <p className='mt-2'>
                  <strong>Usage Data:</strong> Aggregated, anonymised platform usage statistics for
                  analytics and product improvement.
                </p>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-stone-800 mb-3'>Legal Basis</h3>
                <p>
                  Depending on jurisdiction, our legal bases include contract performance,
                  legitimate interests, legal obligations, or consent (where required).
                </p>
              </div>
            </div>
          </section>

          <section id='ai-use'>
            <SectionHeading number={5} title='Use of AI and Customer Data' />
            <p>
              When you submit data to our AI systems, it is processed only for the purpose of
              delivering outputs and improving platform functionality.
            </p>
            <p className='mt-4'>
              We do not use Customer Data to train public AI models. We use enterprise-grade APIs
              (e.g. Microsoft Azure OpenAI) with contractual and technical safeguards that prohibit
              partners from using Evro data to train public models.
            </p>
            <p className='mt-4'>
              We may use aggregated and anonymised data for analytics, benchmarking, and product
              development, but will not attempt to re-identify individuals.
            </p>
            <p className='mt-4'>
              Customers remain responsible for ensuring that end-users’ personal information is
              lawfully collected and disclosed to Evro.
            </p>
          </section>

          <section id='sharing'>
            <SectionHeading number={6} title='Sharing Your Information' />
            <p>We never sell or monetise personal data. Disclosure is limited to:</p>
            <ul className='list-disc pl-6 mt-4 space-y-2'>
              <li>
                <strong>Your Organisation:</strong> For account administration and authorised
                aggregated insights.
              </li>
              <li>
                <strong>Service Providers (Sub-processors):</strong> Limited trusted providers (e.g.
                Azure, payment processors), each bound by Data Processing Addendums (DPAs) and
                equivalent data protection obligations.
              </li>
              <li>
                <strong>Legal Compliance:</strong> Where required by law, subpoena, or lawful
                authority.
              </li>
            </ul>
          </section>

          <section id='transfers'>
            <SectionHeading number={7} title='Cross-Border Transfers' />
            <p>
              Personal information may be stored in Australia or transferred to other countries,
              including the United States. Where personal information is transferred across borders,
              Evro AI takes appropriate safeguards — including contractual protections, technical
              measures, and compliance with APP 8 (Australia) and applicable US state laws — to
              ensure your information is protected consistently with relevant privacy obligations.
            </p>
          </section>

          <section id='retention'>
            <SectionHeading number={8} title='Data Retention and Destruction' />
            <p>
              We retain personal information only for as long as necessary to provide the Services,
              comply with legal obligations, resolve disputes, and enforce agreements.
            </p>
            <p className='mt-4'>
              Unless otherwise required by law, we will delete or irreversibly anonymise personal
              information within 90 days of account termination or upon request. Backup copies will
              be securely destroyed within standard retention cycles.
            </p>
          </section>

          <section id='security'>
            <SectionHeading number={9} title='Security and Breach Response' />
            <p>We implement reasonable technical and organisational measures, including:</p>
            <ul className='list-disc pl-6 mt-4 space-y-2'>
              <li>encryption in transit and at rest;</li>
              <li>access controls and least-privilege permissions;</li>
              <li>monitoring and logging; and</li>
              <li>contractual obligations with service providers.</li>
            </ul>
            <p className='mt-4'>
              In the event of a data breach likely to cause serious harm, we will notify affected
              individuals and the Office of the Australian Information Commissioner (OAIC), and
              comply with applicable US state breach notification laws.
            </p>
          </section>

          <section id='rights'>
            <SectionHeading number={10} title='Your Privacy Rights' />
            <h3 className='text-xl font-semibold text-stone-800 mb-3'>Australia</h3>
            <p>
              You may access, correct, or request deletion of your personal information. If you are
              dissatisfied with our response, you may escalate to the OAIC (www.oaic.gov.au).
            </p>
            <h3 className='text-xl font-semibold text-stone-800 mt-6 mb-3'>
              United States (including California)
            </h3>
            <p>
              If you are a resident of the United States, you may have additional rights under state
              laws, including the CCPA/CPRA. These may include the right to:
            </p>
            <ul className='list-disc pl-6 mt-4 space-y-2'>
              <li>
                Request disclosure of the categories of personal information collected, used, or
                disclosed;
              </li>
              <li>Request access to, correction of, or deletion of your personal information;</li>
              <li>
                Opt out of the “sale” or “sharing” of personal information (Evro AI does not sell or
                share personal information as those terms are defined under applicable law);
              </li>
              <li>Limit the use or disclosure of sensitive personal information; and</li>
              <li>Exercise these rights without discrimination.</li>
            </ul>
            <p className='mt-4'>
              You may submit a request by emailing{" "}
              <a href='mailto:legal@evro.ai' className='text-cyan-600 hover:underline'>
                legal@evro.ai
              </a>
              . We will verify your identity before processing requests. You may also designate an
              authorised agent to make a request on your behalf.
            </p>
          </section>

          <section id='children'>
            <SectionHeading number={11} title='Children’s Data' />
            <p>
              Our Services are not directed to children under the age of 16, and we do not knowingly
              collect personal information from anyone under 13 years of age. If we become aware
              that we have collected such information, we will delete it promptly in accordance with
              the Children’s Online Privacy Protection Act (COPPA) and the Privacy Act 1988 (Cth).
            </p>
          </section>

          <section id='dpa'>
            <SectionHeading number={12} title='Data Processing Addendum (DPA)' />
            <p>
              For enterprise customers requiring additional contractual assurances, Evro AI makes
              available a Data Processing Addendum (DPA) governing the handling of Customer Data,
              including cross-border transfers and security obligations.
            </p>
          </section>

          <section id='terms-relationship'>
            <SectionHeading number={13} title='Relationship with Terms of Use' />
            <p>
              This Privacy Policy is subject to, and should be read together with, our Terms of Use,
              which set out additional terms relating to liability, indemnity, and dispute
              resolution.
            </p>
          </section>

          <section id='changes'>
            <SectionHeading number={14} title='Changes to this Privacy Policy' />
            <p>
              We may update this Privacy Policy from time to time. Updates will be published on our
              website with the “Last Updated” date revised. Where legally required, we will also
              notify users directly (e.g. by email or in-app notice).
            </p>
          </section>

          <section id='contact-us'>
            <SectionHeading number={15} title='Contact Us' />
            <p>For privacy questions, requests, or complaints, contact:</p>
            <address className='not-italic mt-4 p-6 bg-white rounded-lg border border-stone-200'>
              <p className='font-semibold'>Evro AI Pty Ltd</p>
              <p>Attn: Privacy Officer</p>
              <p>
                Email:{" "}
                <a href='mailto:legal@evro.ai' className='text-cyan-600 hover:underline'>
                  legal@evro.ai
                </a>
              </p>
            </address>
          </section>
        </article>
      </div>
    </main>
  );
}
