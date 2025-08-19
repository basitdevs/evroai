import React from "react";

export const Hero = React.forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} className='relative bg-[#E9E9E9] pt-20 md:pt-0 overflow-hidden'>
    <div className='mx-auto max-w-[1550px] px-6 md:pt-32 md:pb-16 h-full relative md:gap-8 flex flex-col md:flex-row md:items-center'>
      {/* Left Content */}
      <div className='text-left relative z-10 mt-4 md:flex-1'>
        <h1 className='font-[500] font-heading uppercase leading-[1.05] text-[42px] sm:text-[56px] md:text-[5rem] tracking-tight min-w-[350px] md:max-w-[900px]'>
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

        {/* Mobile Image */}
        <div className='block md:hidden w-full mt-8'>
          <img
            className='w-full max-h-[280px] object-contain mx-auto'
            src='/imgs/MacBook_Evro_Hero.png'
            alt='Evro AI on MacBook'
          />
        </div>
      </div>

      {/* Desktop Image */}
      <div className='hidden md:flex md:flex-1 justify-center items-end relative z-10'>
        <img
          className='w-full max-w-[700px] h-auto object-contain rounded-lg drop-shadow-xl'
          src='/imgs/MacBook_Evro_Hero.png'
          alt='Evro AI on MacBook'
        />
      </div>
    </div>
  </section>
));
