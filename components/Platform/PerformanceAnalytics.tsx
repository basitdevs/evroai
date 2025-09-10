import React from "react";

const PerformanceAnalytics: React.FC = () => {
  return (
    <section className='py-16 lg:py-24'>
      <div className='max-w-[1550px] mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center'>
          <div className='relative flex items-center justify-center min-h-[300px] lg:min-h-[400px] max-w-[600px]'>
            <div className='absolute inset-0 bg-white rounded-2xl shadow-sm' />
            <div className='absolute w-full h-full max-w-md max-h-md bg-cyan-400/10 rounded-full blur-3xl' />

            <img
              src='/imgs/evro-maori-female-smiling-employee.webp'
              alt='A female employee smiling, representing data analysis'
              className='relative z-10 w-full h-full max-h-[550px] object-contain drop-shadow-xl'
            />
          </div>

          <div className='text-center lg:text-left'>
            <p className='text-lg font-semibold text-[#00C4CC]'>Performance & Impact Analytics</p>
            <h1 className='mt-4 text-4xl lg:text-5xl font-bold font-heading text-gray-900 leading-tight'>
              Objective ROI evidence, like talking with a data expert.
            </h1>
            <h2 className='mt-6 text-lg lg:text-xl text-gray-900 max-w-2xl mx-auto lg:mx-0 leading-relaxed'>
              Ask questions in plain language and get instant, objective answers from complex
              behavioural data. Evro acts like a real-time data analyst for your organisation,
              spotting psychosocial risks, clarifying ROI with objective data, and giving leaders
              clarity they can act on.
            </h2>
            <p className='mt-6 text-base md:text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0'>
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
};

export default PerformanceAnalytics;
