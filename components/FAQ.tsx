import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const faqData = [
  {
    q: "Who can apply for the beta?",
    a: "Anyone leading or working in a team can apply. We’re especially looking for managers, HR leaders, and teams in growing organisations who want to shape the future of AI-powered culture and performance.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Your conversations with Evro are completely private and are not shared with your team leader or your organisation. Conversations with Evro are analysed and de-identified for reporting purposes but never identify you personally. Data is encrypted so that Evro AI employees cannot see your conversations. Evro never trains external models on your information. You can individually delete any or all of your conversations at any time.",
  },
  {
    q: "What’s included in early access?",
    a: "You’ll get hands-on access to the beta version of Evro, which is a limited version but contains more than half of the full version and includes our best features. You’ll also get support from the Evro AI team, and the option to request the features you want to see.",
  },
  {
    q: "How much does it cost to join?",
    a: "Beta access is free. In return, we ask for your feedback about the product via surveys and you can opt in to video interviews if you’re open to it.",
  },
  {
    q: "What will I need to do as a beta tester?",
    a: "Use Evro to get expert support with team dynamics, communication, career development, leadership and other areas. Share your experience, and give us feedback through short surveys and optional video calls if you are open to that. No heavy lift required.",
  },
  {
    q: "How long does the beta run? Will I get free access after the beta?",
    a: "The beta will run for three months, with regular updates and improvements along the way. We will notify you towards the end of the beta about opportunities for continued free or discounted access.",
  },
  {
    q: "Do I need special tools or setup?",
    a: "No. Evro is a web app accessible via secure login or SSO. Future releases will also plug into tools you already use, like Slack and Teams if you choose to authorise that. Setup is quick and simple.",
  },
  {
    q: "What if I want Evro for my team or my organisation?",
    a: "If you’re interested in applying for your team or org, then please get in touch with us. If selected, our founding team will work closely with you to run a secure pilot. You’ll have a direct line for help, feedback, and co-creation sessions.",
  },
  {
    q: "What’s the benefit of joining early?",
    a: "Access is free during the closed beta, which only runs for three months. There may also be early-adopter advantages like discounted pricing after launch.",
  },
  {
    q: "What happens after the beta?",
    a: "We will be in touch with you to outline options for continued use, which might include free or discounted access for early testers.",
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
    <div className=' p-5 px-8 sm:px-6 py-20 pb-10 md:pb-24 md:py-28 '>
      <div className='max-w-[800px] mx-auto'>
        <h1
          className='text-[44px] font-heading md:text-[72px] leading-[1]'
          data-aos='fade-right'
          data-aos-delay='200'
        >
          FAQ
        </h1>
        <div className='mt-[18px] md:mt-[22px]' data-aos='fade-up' data-aos-delay='500'>
          {faqData.map((item, index) => (
            <div key={index}>
              <FaqItem question={item.q} answer={item.a} />
            </div>
          ))}
        </div>
        <div data-aos='fade-up' data-aos-delay='400' className='flex mt-6'>
          <a
            href='https://forms.fillout.com/t/nAxnDSwePjus'
            target='_blank'
            className='px-6 md:px-8 py-3 md:py-4 hover:bg-[#00C4CC] hover:text-black transition-all duration-300 ease-in-out text-[18px] md:text-[20px] font-semibold text-white bg-black rounded-lg'
          >
            Apply For Closed Beta
          </a>
        </div>
      </div>
    </div>
  );
};
