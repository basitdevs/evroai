import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const faqData = [
  {
    q: "How private is Evro?",
    a: "Evro manages data security through a SOC2-ready architecture where enterprise clients retain full data ownership. User interaction is encrypted, the platform is private by default, requiring explicit, granular user consent for any data sharing, and offers a future enterprise VPC deployment option to keep all sensitive data processing within the client's own cloud. This is enforced with a dual-LLM strategy that uses a private, self-hosted LLM inside the client's VPC for sensitive coaching analysis, while external LLMs are only used for non-sensitive tasks with all PII removed.",
  },
  {
    q: "Can Evro be used within Teams or Slack?",
    a: "Evro integrates with Microsoft Teams and Slack so employees can get support within the tools they already use. Plus we have a webapp for advanced features and dashboards.",
  },
  {
    q: "Can't we just use Copilot or Gemini?",
    a: "You could—but those tools lack behavioural insight. Evro is built with clinical expertise to understand the human factors AI can't.",
  },
  {
    q: "Can Evro replace my learning management system?",
    a: "Yes, Evro can replace some features of an LMS such as content libraries, self-authoring and course creation. You can also upload documents from recent leadership trainings and Evro will create personalised content and coaching for each employee.",
  },
  {
    q: "Can Evro replace my employee experience platform?",
    a: "Yes, Evro can replace some features of an EXP such as employee surveys, action and learning plans, 1-on-1 support, career planning and performance reviews. Evro additionally provides enhancements to these by being real-time and objective using organisational context rather than lagging, self reported or static.",
  },
  {
    q: "Is Evro compliant with the WHS Psychosocial Hazard legislation?",
    a: "Yes. Evro is designed to align with Safe Work Australia psychosocial hazard guidelines and helps organisations achieve compliance quickly and easily.",
  },
  {
    q: "How long before Evro provides return on investment and how much?",
    a: "Up to A$800,000 per 100 employees annually—through reduced claims, turnover, and lost productivity.",
  },
  {
    q: "Who is behind Evro?",
    a: "For more information about Evro, please see our <a  href='https://www.linkedin.com/company/evro-ai/' class='font-bold hover:no-underline underline'> LinkedIn page.</a>",
  },
];

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='py-4 md:py-6 border-b border-gray-200 w-full'>
      <div
        className='flex justify-between items-center cursor-pointer'
        onClick={() => setOpen(!open)}
      >
        <p className='text-[20px] md:text-[24px] font-semibold text-black font-sans pr-4 leading-[1.3]'>
          {question}
        </p>
        <span className={`transition-all duration-300 flex-shrink-0 ${open ? "" : "rotate-180"}`}>
          <IoIosArrowUp size={20} />
        </span>
      </div>
      {open && (
        <div className='pt-4 md:pt-6 text-[18px] md:text-[20px] font-sans text-gray-600 space-y-3 leading-[1.5]'>
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  );
};

export const FAQ = () => {
  return (
    <div className='font-heading p-5 px-8 sm:px-6 py-20 md:py-28 '>
      <div className='max-w-[800px] mx-auto'>
        <h1
          className='text-[44px] md:text-[72px] leading-[1]'
          data-aos='fade-right'
          data-aos-delay='200'
        >
          FAQ
        </h1>
        <div className='mt-[18px] md:mt-[22px]' 
         data-aos='fade-up'
            data-aos-delay='500'
        >
          {faqData.map((item, index) => (
            <div key={index}>
              <FaqItem question={item.q} answer={item.a} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
