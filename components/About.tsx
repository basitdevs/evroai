import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export const About = () => {
  return (
    <div className=' flex items-center justify-center py-16 '>
      <div className='grid md:grid-cols-2 gap-10 max-w-[1550px] px-6 md:px-12 w-full'>
        {/* Left Column */}
        <div
          data-aos='fade-up-right'
          data-aos-delay='300'
          className='flex flex-col items-start text-left space-y-6'
        >
          <h1 className='text-[28px] md:text-[36px] uppercase font-heading font-bold leading-[1.2] text-gray-900'>
            Plans start from $5 per user/mo
          </h1>
          <p className='text-[16px] md:text-[18px] font-light text-gray-700 max-w-[500px]'>
            Give every employee their own AI-powered coach. Discover team dynamics and drive real
            behaviour change from day one.
          </p>
          <a
            href='https://forms.fillout.com/t/1YmZve4Fqdus'
            target='_blank'
            className='px-6 py-3  hover:bg-[#00C4CC] hover:text-black transition-all duration-300 ease-in-out text-[18px] md:text-[20px] font-semibold text-white bg-black rounded-lg'
          >
            Get Early Access
          </a>
        </div>

        {/* Right Column */}
        <div
          data-aos='fade-up-left'
          data-aos-delay='300'
          className='flex flex-col items-start text-left space-y-6'
        >
          <h1 className='text-[28px] md:text-[36px] uppercase font-heading font-bold leading-[1.2] text-gray-900'>
            Complete Data Confidence
          </h1>
          <p className='text-[16px] md:text-[18px] font-light text-gray-700 max-w-[500px]'>
            Data privacy by design (SOC2-ready, VPC deployment option). Built by clinical
            psychologists. Secure dual-LLM architecture.
          </p>
          <a
            href='https://app.safebase.io/'
            target='_blank'
            className='px-6 py-3  hover:bg-[#00C4CC] hover:text-black transition-all duration-300 ease-in-out text-[18px] md:text-[20px] font-semibold text-white bg-black rounded-lg'
          >
            See Trust Centre{" "}
          </a>
          {/* <a
            href='https://app.safebase.io/'
            target='_blank'
            className='inline-flex items-center text-[16px] md:text-[18px] font-medium text-gray-900 hover:text-[#00C4CC] transition-colors'
          >
            See Trust Centre for more information
            <GoArrowUpRight />
          </a> */}
        </div>
      </div>
    </div>
  );
};
