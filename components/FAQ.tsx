import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

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
        <span
          className={`transition-all duration-300 flex-shrink-0 ${
            open ? "rotate-90" : "rotate-180"
          }`}
        >
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

export const FAQ = ({ data, showCta = false }: { data: any; showCta?: boolean }) => {
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
          {data.map((item, index) => (
            <div key={index}>
              <FaqItem question={item.q} answer={item.a} />
            </div>
          ))}
        </div>
        {showCta && (
          <div data-aos='fade-up' data-aos-delay='400' className='flex flex-wrap mt-6 gap-6'>
            <a
              href='https://forms.fillout.com/t/uZfJaWkLmpus'
              target='_blank'
              className='px-6 md:px-8 py-3 md:py-4 hover:bg-[#00C4CC] hover:text-black transition-all duration-300 ease-in-out text-[18px] md:text-[20px] font-semibold text-white bg-black rounded-lg'
            >
              Explore A Pilot For Your Team
            </a>
            <a
              href='https://forms.fillout.com/t/7M17jCbgZgus'
              target='_blank'
              className='px-6 md:px-8 py-3 md:py-4 hover:bg-[#000] hover:text-white transition-all duration-300 ease-in-out text-[18px] md:text-[20px] font-semibold text-black border border-black bg-transparent rounded-lg'
            >
              Get A Sample Evro Assistant
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
