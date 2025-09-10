import React from "react";
import { FiArrowRight } from "react-icons/fi";

// --- The React Component ---
const PlatformHero: React.FC = () => {
  return (
    <section className='pt-28 pb-16 lg:pt-40 lg:pb-24'>
      <div className='max-w-[1550px] mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center'>
          {/* --- Left Column: Text Content --- */}
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl lg:text-6xl font-bold font-heading leading-tight text-gray-900'>
              Like having a team of experts available
            </h1>
            <h2 className='mt-6 text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed'>
              Evro maps the precise knowledge and steps experts take and turns them into adaptive AI
              assistants you can trust.
            </h2>
            <p className='mt-6 text-base text-gray-500 max-w-2xl mx-auto lg:mx-0'>
              We capture the precise thinking steps top psychologists, leaders and workplace
              professionals use, whether in complex workplace negotiations or one-on-one
              conversations. That logic is mapped into dynamic reasoning frameworks, powering AI
              assistants that deliver expert-level decisions that understand both you and the people
              you work with.
            </p>
            <a
              href='/beta-application' // Replace with your actual link
              className='mt-10 inline-flex items-center gap-3 bg-black text-white font-semibold py-4 px-8 rounded-lg text-lg group transition-transform hover:scale-105 shadow-lg'
            >
              Apply For Closed Beta
              <FiArrowRight className='transition-transform duration-300 group-hover:translate-x-1' />
            </a>
          </div>

          {/* --- Right Column: Visual --- */}
          <div className='relative flex items-center justify-center min-h-[300px] lg:min-h-[500px]'>
            {/* Background decorative glow */}
            <div className='absolute w-full h-full max-w-md max-h-md bg-cyan-400/20 rounded-full blur-3xl' />

            {/* Main Image */}
            <img
              src='/imgs/introMacbookEvroDash.png' // IMPORTANT: Replace with your image path
              alt='Evro AI assistants displayed on a MacBook screen'
              className='relative z-10 w-full h-full object-contain drop-shadow-2xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformHero;
