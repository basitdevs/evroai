import React from "react";

export const Hero = React.forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    className='relative bg-[#E9E9E9] pt-28 md:pt-12 pb-10 md:pb-20 overflow-hidden'
  >
    <div className='mx-auto max-w-[1550px] flex md:flex-row flex-col items-center px-6 md:pt-20 pb-10 lg:pt-32 md:pb-16 h-full relative'>
      {/* Left Content */}
      <div className='text-left relative z-10 mt-4 md:1/2'>
        <h1
          data-aos='fade-right'
          data-aos-delay='20'
          className='text-[44px] md:text-[72px] lg:text-[82px] font-heading font-semibold uppercase text-black tracking-normal leading-[1]'
        >
          AI For Every Employee To Unlock Performance.
        </h1>
        <p
          data-aos='fade-up-right'
          data-aos-delay='200'
          className='mt-4 md:mt-8 text-[18px] font-medium md:text-[24px] text-[#000] leading-[1.3] md:max-w-[80%]'
        >
          Get early access to Evro, the AI Performance Enablement Platform. Built by psychologists,
          designed to elevate your confidence and performance. Join our closed beta today.
        </p>

        <div
          data-aos='fade-up'
          data-aos-delay='400'
          className='flex justify-start items-center gap-4 mt-6'
        >
          <a
            href='https://forms.fillout.com/t/nAxnDSwePjus'
            target='_blank'
            className='px-6 md:px-8 py-3 md:py-4 hover:bg-[#00C4CC] hover:text-black transition-all duration-300 ease-in-out text-[18px] md:text-[20px] font-semibold text-white bg-black rounded-lg'
          >
            Apply For Closed Beta
          </a>
        </div>
      </div>

      <div className='w-full mt-8 md:w-1/2 md:min-w-[750px] transition-all duration-300 ease-in-out'>
        <img
          data-aos='fade-left'
          data-aos-delay='200'
          className='w-full'
          src='/imgs/evro-middle-eastern-female-smiling-employee.webp'
          alt='Evro AI on MacBook'
        />
      </div>
    </div>
  </section>
));
