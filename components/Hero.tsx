import React from "react";

export const Hero = React.forwardRef((_, ref) => (
  <section ref={ref} className='relative bg-[#E9E9E9] pt-20 md:pt-0 overflow-hidden '>
    <div className='mx-auto max-w-[1550px] px-6  md:pt-32 md:pb-16  h-full relative md:gap-8 flex md:items-center'>
      <div className='text-left relative z-10 mt-4'>
        <h1 className='font-[500] font-heading uppercase leading-[1.0] text-[42px] sm:text-[56px] md:text-[6rem] tracking-tight min-w-[350px] md:max-w-[800px]'>
          An AI Assistant for every employee to fix collaboration problems that block growth.
        </h1>
        <p className='mt-4 md:mt-12 text-lg md:text-[12px] lg:text-xl leading-snug max-w-[380px] font-semibold'>
          Evro fixes the complex team dynamics that generic AI can’t.
        </p>
        <div
          className='flex justify-start items-center gap-4 anim-reveal mt-6'
          style={{ "--delay": "300ms" } as React.CSSProperties}
        >
          <a
            href='#'
            className='px-6 md:px-8 py-3 md:py-4 text-[20px] font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-colors duration-300'
          >
            Start Free Trial
          </a>
        </div>
        <div className='block md:hidden min-w-full max-h-[250px]'>
          <div className='w-full h-full overflow-hidden'>
            <video
              className='w-[800px] min-h-[800px] -mt-[300px]'
              src='https://a.storyblok.com/f/314917/x/1fc22db7b3/1721996743-hero-latest.webm'
              loop
              autoPlay
              playsInline
              muted
              preload='auto'
            />
          </div>
        </div>
      </div>

      <div className='md:absolute hidden md:block bottom-0 -right-[450px] max-w-full max-h-full'>
        <video
          className='w-[75%] h-full'
          src='https://a.storyblok.com/f/314917/x/1fc22db7b3/1721996743-hero-latest.webm'
          loop
          autoPlay
          playsInline
          muted
          preload='auto'
        />
        <div className='absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#E9E9E9] to-transparent' />
      </div>
    </div>
  </section>
));
