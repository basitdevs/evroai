import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export const About = () => {
  return (
    <div className='bg-[#f0f0f0] flex items-center justify-center py-16 px-6 md:px-12'>
      <div className='flex flex-col items-start text-left max-w-[800px] w-full space-y-6'>
        {/* Headline */}
        <h1 className='text-[34px] uppercase font-heading md:text-[52px] font-bold leading-[1.1] text-gray-900'>
          Unlock collaboration and <br className='hidden md:block' /> supercharge growth.
        </h1>

        {/* Subheadline */}
        <p className='text-[16px] md:text-[20px] font-light text-gray-700 max-w-[600px]'>
          Give every employee their own AI-powered coach. Discover team dynamics and drive real
          behaviour change from day one.
        </p>

        {/* CTA */}
        <button className='px-7 py-3 bg-black text-white rounded-[8px] cursor-pointer text-[15px] md:text-[16px] font-medium shadow-md hover:bg-gray-800 hover:scale-105 transition-all duration-200'>
          Start Free Trial
        </button>
      </div>
    </div>
  );
};
