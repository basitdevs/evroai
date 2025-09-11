import React from "react";

export const PerformanceAnalytics = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className='py-16 lg:pb-0 lg:py-24  rounded-t-[25px] md:rounded-t-[40px] bg-black text-white'>
      <div className='max-w-[1550px] mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center'>
          <div className='relative flex items-center justify-center min-h-[300px] lg:min-h-[400px]'>
            <div className='absolute inset-0 rounded-2xl shadow-sm' />
            <div className='absolute w-full h-full max-w-md max-h-md bg-cyan-400/10 rounded-full blur-3xl' />

            <img
              src='/imgs/evro-maori-female-smiling-employee.webp'
              alt='A female employee smiling, representing data analysis'
              className='relative z-10 w-full h-full object-contain drop-shadow-xl'
            />
          </div>

          <div className='text-center lg:text-left lg:pb-24 mb-[-20px]'>
            <p className='text-lg font-semibold text-[#00C4CC]'>Performance & Impact Analytics</p>
            <h1 className='mt-4 text-[44px] md:text-[72px] font-heading font-semibold uppercase leading-[1] font-heading text-white'>
              Objective ROI evidence, like talking with a data expert.
            </h1>
            <h2 className='mt-6 text-[18px] font-medium md:text-[24px] text-gray-200 leading-[1.3] max-w-2xl mx-auto lg:mx-0'>
              Ask questions in plain language and get instant, objective answers from complex
              behavioural data. Evro acts like a real-time data analyst for your organisation,
              spotting psychosocial risks, clarifying ROI with objective data, and giving leaders
              clarity they can act on.
            </h2>
            <p className='mt-6 text-base md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0'>
              No more waiting on lagging surveys or reviewing static reports. With Evro, you can
              explore your organisation like a conversation—ask about psychosocial risks, leadership
              effectiveness, or team alignment, and get clear, evidence-based insights in seconds.
              It’s the fastest way to see what’s working, fix what’s not, and measure the impact of
              major decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default PerformanceAnalytics;
