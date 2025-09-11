import React from "react";

export const Hero = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <div ref={ref} className='bg-black text-white pt-32  py-16 lg:pb-24 lg:pt-40 px-6'>
      <div className='text-center mb-12 max-w-[1350px] mx-auto'>
        <h1 className='text-[44px] md:text-[72px] lg:text-[82px] font-heading font-semibold uppercase leading-[1]'>
          A New Behavioural Intelligence System for Work
        </h1>
        <h2 className='mt-6 text-[18px] font-medium md:text-[24px] text-gray-300 max-w-[1000px] mx-auto leading-relaxed'>
          Our vision is a world where workplaces become catalysts of human flourishing, where every
          individual’s brilliance is recognised, amplified, and supported through empathy,
          self-awareness, and respect.
        </h2>
      </div>
    </div>
  );
});

export default Hero;
