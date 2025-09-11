import React from "react";

export const PlatformHero = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className='pt-28 pb-16 bg-black text-white lg:pt-40 lg:pb-24'>
      <div className='max-w-[1550px] mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center'>
          <div className='text-center lg:text-left'>
            <h1 className='text-[44px] md:text-[72px] leading-[1] lg:text-[82px] font-heading font-semibold uppercase'>
              Like having a team of experts available
            </h1>
            <h2 className='mt-6  max-w-2xl text-[18px] font-medium md:text-[24px] text-gray-200 leading-[1.3]  mx-auto lg:mx-0'>
              Evro maps the precise knowledge and steps experts take and turns them into adaptive AI
              assistants you can trust.
            </h2>
            <p className='mt-6 mb-12 text-[16px] font-medium md:text-[20px] text-gray-400 leading-[1.3]  max-w-2xl mx-auto lg:mx-0'>
              We capture the precise thinking steps top psychologists, leaders and workplace
              professionals use, whether in complex workplace negotiations or one-on-one
              conversations. That logic is mapped into dynamic reasoning frameworks, powering AI
              assistants that deliver expert-level decisions that understand both you and the people
              you work with.
            </p>
            <a
              href='https://forms.fillout.com/t/nAxnDSwePjus'
              target='_blank'
              className='px-6 md:px-8 py-3 md:py-4 hover:bg-[#00C4CC] hover:text-black transition-all duration-300 ease-in-out text-[18px] md:text-[20px] font-semibold text-black bg-white rounded-lg'
            >
              Apply For Closed Beta
            </a>
          </div>

          <div className='relative flex items-center justify-center min-h-[300px] lg:min-h-[500px]'>
            <div className='absolute w-full h-full max-w-[470px] max-h-[470px] bg-[#00C4CC]/30 rounded-full blur-3xl' />

            <img
              src='/imgs/introMacbookEvroDash.png'
              alt='Evro AI assistants displayed on a MacBook screen'
              className='relative z-10 w-full h-full object-contain drop-shadow-2xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default PlatformHero;
