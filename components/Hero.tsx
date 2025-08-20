import React from "react";

export const Hero = React.forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} className='relative bg-[#E9E9E9] pt-20 md:pt-0 overflow-hidden'>
    <div className='mx-auto max-w-[1550px] px-6 md:pt-20 pb-10 lg:pt-32 md:pb-16 h-full relative'>
      {/* Left Content */}
      <div className='text-left relative z-10 mt-4 max-w-[1200px]'>
        <h1 className='font-[500] font-heading uppercase leading-[1.05] text-[42px] sm:text-[56px] md:text-[4rem] lg:text-[5rem] tracking-tight'>
          An AI Assistant for every employee to fix collaboration problems that block growth.
        </h1>
        <p className='mt-4 md:mt-8 text-lg md:text-base lg:text-xl leading-snug max-w-[420px] font-semibold'>
          Evro fixes the complex team dynamics that generic AI can’t.
        </p>

        <div
          className='flex justify-start items-center gap-4 anim-reveal mt-6'
          style={{ "--delay": "300ms" } as React.CSSProperties}
        >
          <a
            href='https://forms.fillout.com/t/1YmZve4Fqdus'
            className='px-6 md:px-8 py-3 md:py-4 text-[18px] md:text-[20px] font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-colors duration-300'
          >
            Start Free Trial
          </a>
        </div>
      </div>

      <div className='w-full mt-8 max-w-[1400px] bg-[#373940] backdrop-blur-[20px] p-[8px] md:p-[12px] rounded-[18px] md:rounded-[24px] -skew-x-[2deg] hover:skew-x-0 transition-all duration-300 ease-in-out'>
        <img
          className='w-full rounded-[16px] md:rounded-[20px] '
          src='/imgs/MacBook_Evro_Hero.png'
          alt='Evro AI on MacBook'
        />
      </div>
    </div>
  </section>
));
