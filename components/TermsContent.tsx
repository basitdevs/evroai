import React from "react";
import {
  FiUserCheck,
  FiDatabase,
  FiDollarSign,
  FiXCircle,
  FiAlertTriangle,
  FiBookOpen,
} from "react-icons/fi";

const SectionHeading = ({ number, title }: { number: number; title: string }) => (
  <h2 className='text-3xl md:text-5xl font-bold font-heading mb-6 text-stone-800 border-b border-stone-200 pb-4'>
    {number}. {title}
  </h2>
);

export default function TermsContent() {
  return (
    <main className='px-4 sm:px-6 lg:px-8 py-10 border-t border-stone-200 bg-slate-50'>
      <div className='mx-auto max-w-[1000px]'>
        {/* --- Header --- */}
        <header className='mb-12'>
          <p className='text-xl font-semibold text-stone-800'>Last Updated: 10 September 2025</p>
        </header>

        {/* --- Plain Language Summary (Callout Box) --- */}
        <section className='bg-white p-8 rounded-2xl border border-stone-200 shadow-lg space-y-6 mb-16'>
          <h2 className='text-2xl font-bold text-stone-800 font-heading'>Plain Language Summary</h2>
          <p className='text-lg text-stone-700'>
            This Agreement sets out the rules for using Evro AI’s services. By signing up or using
            the platform, you agree to these terms.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4'>
            <div className='flex items-start'>
              <span className='mr-3 mt-1 text-cyan-600 flex-shrink-0'>
                <FiUserCheck size={20} />
              </span>
              <span className='text-stone-700'>
                <strong>Access & Use:</strong> You get a non-exclusive licence for internal business
                use during your subscription.
              </span>
            </div>
            <div className='flex items-start'>
              <span className='mr-3 mt-1 text-cyan-600 flex-shrink-0'>
                <FiDatabase size={20} />
              </span>
              <span className='text-stone-700'>
                <strong>Data & AI Output:</strong> You own your data and its AI outputs. We own our
                tech.
              </span>
            </div>
            <div className='flex items-start'>
              <span className='mr-3 mt-1 text-cyan-600 flex-shrink-0'>
                <FiDollarSign size={20} />
              </span>
              <span className='text-stone-700'>
                <strong>Payments:</strong> Fees are non-refundable and auto-renew unless cancelled
                30 days prior.
              </span>
            </div>
            <div className='flex items-start'>
              <span className='mr-3 mt-1 text-cyan-600 flex-shrink-0'>
                <FiXCircle size={20} />
              </span>
              <span className='text-stone-700'>
                <strong>Acceptable Use:</strong> No illegal use or building competing products with
                our service.
              </span>
            </div>
            <div className='flex items-start'>
              <span className='mr-3 mt-1 text-cyan-600 flex-shrink-0'>
                <FiAlertTriangle size={20} />
              </span>
              <span className='text-stone-700'>
                <strong>Liability:</strong> Services are “as is.” Our liability is capped at 12
                months of fees paid.
              </span>
            </div>
            <div className='flex items-start'>
              <span className='mr-3 mt-1 text-cyan-600 flex-shrink-0'>
                <FiBookOpen size={20} />
              </span>
              <span className='text-stone-700'>
                <strong>Disputes:</strong> Governed by NSW law (Sydney courts).
              </span>
            </div>
          </div>
          <p className='text-base text-stone-500 italic pt-4 border-t border-stone-200'>
            This summary is to help you understand the key points. The full legal terms below are
            binding.
          </p>
        </section>

        {/* --- Main Content Article --- */}
        <article className='mt-16 space-y-16 text-lg text-stone-700 leading-relaxed'>
          <section id='intro'>
            <p>
              These Terms of Service (the “Agreement”) constitute a legally binding agreement
              between Evro AI Pty Ltd (ACN 686 025 454) (“Evro AI”, “we”, “us”, or “our”) and the
              entity or organisation subscribing to the Services (“Customer” or “you”).
            </p>
            <p className='mt-4'>
              This Agreement governs the access and use of Evro AI’s Services by the Customer and
              any individuals authorised by the Customer to use the Services (each, an “Authorised
              User”). By executing an Order Form that references this Agreement, or by accessing or
              using the Services, you agree to be bound by its terms.
            </p>
            <p className='mt-4'>
              If you are entering into this Agreement on behalf of a company, organisation, or
              another legal entity, you represent that you have the authority to bind such entity
              and its affiliates to this Agreement. If you do not have such authority, or if you do
              not agree with these terms, you must not accept this Agreement and may not use the
              Services.
            </p>
          </section>

          <section id='definitions'>
            <SectionHeading number={1} title='Definitions' />
            <div className='space-y-4'>
              <p>
                <strong>“Affiliate”</strong> means any entity that directly or indirectly controls,
                is controlled by, or is under common control with the subject entity.
              </p>
              <p>
                <strong>“AI Output”</strong> means any data, text, reports, or other content
                generated, returned, or synthesised by the Services based on Customer Data or
                queries submitted by Authorised Users.
              </p>
              <p>
                <strong>“Authorised User”</strong> means an individual employee, contractor, or
                agent of the Customer who is authorised by the Customer to use the Services in
                accordance with this Agreement.
              </p>
              <p>
                <strong>“Confidential Information”</strong> means all information disclosed by one
                party to the other, whether orally or in writing, that is designated as confidential
                or that reasonably should be understood to be confidential given the nature of the
                information and the circumstances of disclosure.
              </p>
              <p>
                <strong>“Customer Data”</strong> means all electronic data, information, content,
                and materials provided or submitted by or on behalf of the Customer or its
                Authorised Users to the Services. Customer Data does not include AI Output.
              </p>
              <p>
                <strong>“Documentation”</strong> means the applicable security and compliance
                documentation, user guides, and policies for the Services, as updated from time to
                time.
              </p>
              <p>
                <strong>“Intellectual Property Rights”</strong> means all patents, copyrights, moral
                rights, trademarks, trade secrets, and any other form of intellectual property
                rights recognised in any jurisdiction, including applications and registrations for
                any of the foregoing.
              </p>
              <p>
                <strong>“Order Form”</strong> means the ordering documents or online order
                specifying the Services to be provided hereunder that is entered into between
                Customer and Evro AI.
              </p>
              <p>
                <strong>“Services”</strong> means the AI-powered Software-as-a-Service platform and
                related functionalities provided by Evro AI to support organisational performance,
                leadership development, and workplace wellbeing, as specified in the applicable
                Order Form.
              </p>
              <p>
                <strong>“Subscription Term”</strong> means the period during which Customer and its
                Authorised Users are permitted to access and use the Services, as set forth in the
                relevant Order Form.
              </p>
            </div>
          </section>

          <section id='services'>
            <SectionHeading number={2} title='The Services' />
            <p>
              <strong>2.1. Provision of Services.</strong> Subject to the terms of this Agreement,
              Evro AI will use commercially reasonable efforts to provide the Services to the
              Customer and its Authorised Users. We grant the Customer a limited, non-exclusive,
              non-transferable, non-sublicensable right to access and use the Services during the
              Subscription Term solely for its internal business purposes.
            </p>
            <p className='mt-4'>
              <strong>2.2. Service Modifications.</strong> We reserve the right to enhance, modify,
              or discontinue features of the Services at our discretion. We will not, however, make
              any changes that materially decrease the core functionality of the Services purchased
              by the Customer during the then-current Subscription Term without providing at least
              thirty (30) days’ prior written notice.
            </p>
            <p className='mt-4'>
              <strong>2.3. Customer Responsibilities.</strong> The Customer is responsible for (a)
              its Authorised Users’ compliance with this Agreement; (b) the accuracy, quality, and
              legality of Customer Data; (c) using the Services in accordance with all applicable
              laws and regulations; and (d) all activities that occur under its and its Authorised
              Users’ accounts.
            </p>
          </section>

          <section id='account-management'>
            <SectionHeading number={3} title='Account Management and Security' />
            <p>
              <strong>3.1. Account Registration.</strong> Customer and its Authorised Users must
              provide accurate, current, and complete information during the registration process.
            </p>
            <p className='mt-4'>
              <strong>3.2. Security.</strong> The Customer is responsible for maintaining the
              confidentiality and security of its account credentials. The use of strong passwords
              and multi-factor authentication (where available) is required. The Customer will
              prevent unauthorised access to or use of the Services and will notify Evro AI promptly
              of any such unauthorised access or use or any suspected security breach.
            </p>
          </section>

          <section id='data-ownership'>
            <SectionHeading number={4} title='Data Ownership, Licensing, and AI Output' />
            <p>
              <strong>4.1. Customer Data.</strong> As between the parties, the Customer retains all
              right, title, and interest, including all Intellectual Property Rights, in and to the
              Customer Data. The Customer grants Evro AI and its subcontractors a worldwide,
              non-exclusive, royalty-free license to host, copy, transmit, and display Customer Data
              as reasonably necessary to provide, maintain, and improve the Services.
            </p>
            <p className='mt-4'>
              <strong>4.2. AI Output.</strong> The Customer owns the AI Output generated from its
              use of the Services. The Customer may use AI Output for its internal business
              purposes. Evro AI retains all right, title, and interest in the underlying algorithms,
              models, and mechanisms used to generate the AI Output.
            </p>
            <p className='mt-4'>
              <strong>4.3. Restrictions on AI Output.</strong> AI Output may not always be unique,
              accurate, or complete. The Customer acknowledges and agrees that it will not: a. Rely
              on AI Output as the sole basis for any legally or materially significant decisions,
              including but not limited to credit, employment, housing, insurance, medical, or legal
              decisions. Independent validation is required. b. Use AI Output to develop, train, or
              improve any other artificial intelligence or machine learning models that compete with
              the Services.
            </p>
            <p className='mt-4'>
              <strong>4.4. Data Processing.</strong> We will process Customer Data and AI Output
              only to deliver, secure, and improve the Services. We will not use Customer Data to
              train any public or third-party artificial intelligence models. Our data processing
              practices are further detailed in our Privacy Policy.
            </p>
          </section>

          <section id='acceptable-use'>
            <SectionHeading number={5} title='Acceptable Use Policy' />
            <p>Customer and its Authorised Users shall not:</p>
            <ul className='list-disc pl-6 mt-4 space-y-2'>
              <li>Use the Services for any unlawful, fraudulent, or malicious purpose.</li>
              <li>
                Upload, post, or transmit any content that is illegal, harmful, defamatory,
                infringing, harassing, or discriminatory.
              </li>
              <li>
                Disclose any individual’s private or personally identifiable information without
                their express prior authorisation.
              </li>
              <li>
                Attempt to reverse engineer, decompile, disassemble, or otherwise discover the
                source code or underlying ideas of the Services.
              </li>
              <li>
                Probe, scan, or test the vulnerability of the Services or any related system or
                network, or attempt to circumvent any security or authentication measures.
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the Services, including
                through the use of viruses, spamming, or automated scripts.
              </li>
              <li>
                Impersonate any person or entity or misrepresent your affiliation with any person or
                entity.
              </li>
              <li>Access the Services to build a competitive product or service.</li>
            </ul>
            <p className='mt-4'>
              Evro AI reserves the right to suspend or terminate any account found to be in
              violation of this policy.
            </p>
          </section>

          <section id='privacy-security'>
            <SectionHeading number={6} title='Privacy and Security' />
            <p>
              <strong>6.1. Compliance.</strong> Evro AI complies with applicable data protection
              laws, including the Australian Privacy Act 1988 (Cth), the GDPR, and CCPA/CPRA.
            </p>
            <p className='mt-4'>
              <strong>6.2. Security Measures.</strong> We implement and maintain appropriate
              technical and organisational security measures designed to protect Customer Data from
              unauthorised access, use, alteration, or disclosure. These measures include data
              encryption in transit and at rest and least-privilege access controls.
            </p>
            <p className='mt-4'>
              <strong>6.3. Data Hosting and Transfers.</strong> Customer Data is hosted in
              Australia. If any cross-border data transfers are required to provide the Services,
              they will be conducted with appropriate contractual and technical safeguards in place.
            </p>
          </section>

          <section id='subscription-fees'>
            <SectionHeading number={7} title='Subscription, Fees, and Payment' />
            <p>
              <strong>7.1. Fees.</strong> The Customer will pay all fees specified in the applicable
              Order Form. Fees are based on the Services purchased and not actual usage. All payment
              obligations are non-cancelable, and fees paid are non-refundable.
            </p>
            <p className='mt-4'>
              <strong>7.2. Billing and Renewal.</strong> Fees, billing cycles, and payment terms are
              specified in the Order Form. Unless otherwise stated, subscriptions will automatically
              renew for additional periods equal to the expiring Subscription Term unless either
              party gives the other notice of non-renewal at least thirty (30) days before the end
              of the relevant term.
            </p>
            <p className='mt-4'>
              <strong>7.3. Late Payments.</strong> Late payments may accrue interest at the rate of
              1.5% of the outstanding balance per month, or the maximum rate permitted by law,
              whichever is lower. Evro AI may suspend access to the Services if any payment is more
              than thirty (30) days overdue.
            </p>
          </section>

          <section id='confidentiality'>
            <SectionHeading number={8} title='Confidentiality' />
            <p>
              <strong>8.1. Obligations.</strong> Each party (the “Receiving Party”) agrees to
              protect the Confidential Information of the other party (the “Disclosing Party”) with
              the same degree of care that it uses to protect its own confidential information of
              like kind (but not less than reasonable care). The Receiving Party will not use any
              Confidential Information of the Disclosing Party for any purpose outside the scope of
              this Agreement and will limit access to the Disclosing Party’s Confidential
              Information to its employees and contractors who need that access for purposes
              consistent with this Agreement and who have signed confidentiality agreements with the
              Receiving Party containing protections no less stringent than those herein.
            </p>
            <p className='mt-4'>
              <strong>8.2. Compelled Disclosure.</strong> The Receiving Party may disclose
              Confidential Information of the Disclosing Party to the extent compelled by law,
              provided the Receiving Party gives the Disclosing Party prior notice of the compelled
              disclosure (to the extent legally permitted) and reasonable assistance, at the
              Disclosing Party's cost, if the Disclosing Party wishes to contest the disclosure.
            </p>
          </section>

          <section id='ip'>
            <SectionHeading number={9} title='Intellectual Property' />
            <p>
              <strong>9.1. Evro AI IP.</strong> Evro AI and its licensors own all right, title, and
              interest, including all related Intellectual Property Rights, in and to the Services,
              the underlying software, platform, and Documentation. No rights are granted to the
              Customer hereunder other than as expressly set forth in this Agreement.
            </p>
            <p className='mt-4'>
              <strong>9.2. Feedback.</strong> If the Customer or any Authorised User provides any
              suggestions, enhancement requests, or other feedback to Evro AI, the Customer grants
              Evro AI a fully paid-up, royalty-free, worldwide, transferable, sublicensable,
              irrevocable, perpetual license to use or incorporate such feedback into the Services
              without obligation or compensation.
            </p>
          </section>

          <section id='termination'>
            <SectionHeading number={10} title='Term and Termination' />
            <p>
              <strong>10.1. Term.</strong> This Agreement commences on the date of the first Order
              Form and continues until all Subscription Terms thereunder have expired or have been
              terminated.
            </p>
            <p className='mt-4'>
              <strong>10.2. Termination for Cause.</strong> Either party may terminate this
              Agreement for cause upon thirty (30) days’ written notice to the other party of a
              material breach if such breach remains uncured at the expiration of such period.
            </p>
            <p className='mt-4'>
              <strong>10.3. Effect of Termination.</strong> Upon termination, all rights granted to
              the Customer will immediately cease. Evro AI will have no obligation to maintain or
              provide any Customer Data and will, unless legally prohibited, delete or irreversibly
              anonymise all Customer Data in its systems within ninety (90) days of termination.
              Sections 4, 8, 9, 11, 12, 13, 14, and 15 will survive any termination or expiration of
              this Agreement.
            </p>
          </section>

          <section id='warranties'>
            <SectionHeading number={11} title='Warranties and Disclaimers' />
            <div className='p-6 rounded-lg border border-amber-300 bg-amber-50 text-amber-900'>
              <p>
                EXCEPT AS EXPRESSLY PROVIDED HEREIN, THE SERVICES ARE PROVIDED “AS IS” AND “AS
                AVAILABLE.” EVRO AI DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY,
                OR OTHERWISE, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY
                APPLICABLE LAW. EVRO AI DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED,
                ERROR-FREE, OR THAT AI OUTPUTS WILL BE ACCURATE OR RELIABLE.
              </p>
            </div>
          </section>

          <section id='liability'>
            <SectionHeading number={12} title='Limitation of Liability' />
            <p>
              <strong>12.1. Exclusion of Damages.</strong> IN NO EVENT WILL EITHER PARTY BE LIABLE
              FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, SPECIAL, OR EXEMPLARY DAMAGES,
              INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOST PROFITS, GOODWILL, OR DATA, ARISING OUT
              OF OR IN CONNECTION WITH THIS AGREEMENT, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES.
            </p>
            <p className='mt-4'>
              <strong>12.2. Liability Cap.</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, EACH
              PARTY’S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT WILL NOT
              EXCEED THE TOTAL AMOUNT PAID BY THE CUSTOMER HEREUNDER IN THE TWELVE (12) MONTHS
              PRECEDING THE FIRST INCIDENT OUT OF WHICH THE LIABILITY AROSE.
            </p>
            <p className='mt-4'>
              <strong>12.3. Exclusions.</strong> The limitations in this Section 12 will not apply
              to liability for death, personal injury, fraud, or wilful misconduct, or any other
              liability which cannot be excluded or limited under applicable law.
            </p>
          </section>

          <section id='indemnification'>
            <SectionHeading number={13} title='Indemnification' />
            <p>
              The Customer agrees to defend, indemnify, and hold harmless Evro AI, its affiliates,
              officers, directors, employees, and agents from and against any and all claims,
              damages, obligations, losses, liabilities, costs, or debt, and expenses (including but
              not limited to attorney's fees) arising from: (a) the Customer’s or its Authorised
              Users’ breach of this Agreement; (b) Customer Data that infringes the Intellectual
              Property Rights or privacy rights of a third party; or (c) the Customer’s or its
              Authorised Users’ misuse of the Services in violation of applicable law.
            </p>
          </section>

          <section id='governing-law'>
            <SectionHeading number={14} title='Governing Law and Dispute Resolution' />
            <p>
              <strong>14.1. Governing Law.</strong> This Agreement shall be governed by and
              construed in accordance with the laws of New South Wales, Australia, without regard to
              its conflict of law principles.
            </p>
            <p className='mt-4'>
              <strong>14.2. Dispute Resolution.</strong> The parties agree to the exclusive
              jurisdiction of the state and federal courts located in Sydney, New South Wales. For
              disputes involving a party domiciled outside of Australia, the parties agree to submit
              the dispute to binding arbitration under the Rules of Arbitration of the International
              Chamber of Commerce (ICC). The arbitration shall be seated in Singapore and conducted
              in the English language.
            </p>
            <p className='mt-4'>
              <strong>14.3. Injunctive Relief.</strong> Notwithstanding the foregoing, nothing in
              this Agreement will prevent Evro AI from seeking injunctive or other equitable relief
              in any court of competent jurisdiction to protect its Intellectual Property Rights.
            </p>
          </section>

          <section id='general-provisions'>
            <SectionHeading number={15} title='General Provisions' />
            <p>
              <strong>15.1. Entire Agreement.</strong> This Agreement, including all exhibits,
              addenda, and Order Forms, constitutes the entire agreement between the parties and
              supersedes all prior and contemporaneous agreements, proposals, or representations,
              written or oral, concerning its subject matter.
            </p>
            <p className='mt-4'>
              <strong>15.2. Assignment.</strong> Neither party may assign any of its rights or
              obligations hereunder, whether by operation of law or otherwise, without the other
              party’s prior written consent (not to be unreasonably withheld); provided, however,
              either party may assign this Agreement in its entirety without the other party's
              consent to its Affiliate or in connection with a merger, acquisition, corporate
              reorganisation, or sale of all or substantially all of its assets.
            </p>
            <p className='mt-4'>
              <strong>15.3. Force Majeure.</strong> Neither party shall be liable for any failure or
              delay in performance under this Agreement (other than for delay in the payment of
              money) due to causes beyond its reasonable control, including but not limited to acts
              of God, war, terrorism, riots, embargoes, or acts of civil or military authorities.
            </p>
            <p className='mt-4'>
              <strong>15.4. Notices.</strong> All notices under this Agreement must be in writing
              and will be deemed to have been duly given when received, if personally delivered;
              when receipt is electronically confirmed, if transmitted by email; or the day after it
              is sent, if sent for next day delivery by recognised overnight delivery service.
            </p>
            <p className='mt-4'>
              <strong>15.5. Severability.</strong> If any provision of this Agreement is held by a
              court of competent jurisdiction to be contrary to law, the provision will be deemed
              null and void, and the remaining provisions of this Agreement will remain in effect.
            </p>
            <p className='mt-4'>
              <strong>15.6. Changes.</strong> We may update this Agreement from time to time.
              Updates will be posted on our website with a revised “Last Updated” date. We will
              provide at least thirty (30) days' notice of material changes, either through the
              Services or by email. Continued use of the Services after the effective date of any
              changes will constitute acceptance of the modified terms.
            </p>
          </section>

          <section id='contact-us'>
            <SectionHeading number={16} title='Contact Information' />
            <address className='not-italic mt-4 p-6 bg-white rounded-lg border border-stone-200'>
              <p className='font-semibold'>Evro AI Pty Ltd</p>
              <p>Attn: Legal Department</p>
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
