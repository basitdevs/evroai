import React from "react";
import Solutions from "./Solutions";

const heroFeatures = [
  {
    title: "Scale coaching",
    text: "Every employee gets personalised, just-in-time coaching, not just executives.",
  },
  {
    title: "Prove ROI",
    text: "Track real behaviour change, not course completions or survey scores.",
  },
  {
    title: "Accelerate execution",
    text: "Remove collaboration blockers fast and keep teams focused on the goals that matter most to the business.",
  },
];

export const Introduction = React.forwardRef<HTMLElement, { id: string }>(({ id }, ref) => {
  return (
    <div ref={ref} id={id} className='py-20 md:py-28 rounded-[30px] md:rounded-[50px] bg-[#E9E9E9]'>
      {/* Top Section */}
      <section id='product-section' className='relative max-w-[1550px] mx-auto px-6 md:px-8'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start gap-10'>
          {/* Text Content */}
          <div className='flex-1 text-left z-20'>
            <h1
              data-aos='fade-right'
              data-aos-delay='20'
              className='font-heading text-[44px] md:text-[72px] font-bold uppercase leading-[1.05] tracking-tight mb-9 text-black'
            >
              Introducing <br /> Evro
            </h1>
            <div data-aos='fade-up-right' data-aos-delay='200' className='space-y-6 max-w-[555px]'>
              <h2 className='text-[22px] md:text-[24px] text-black leading-[1.3] font-medium mb-[40px]'>
                Imagine having a team of workplace experts on demand. Evro gives you AI assistants
                to communicate like a pro, collaborate like everyone wants you in their team, fix
                problems with ease so you can progress your career and enjoy your work.{" "}
              </h2>
              {/* <p className='text-[16px] md:text-[18px] text-black leading-[1.5]'>
                Whereas generic AI copilots help with routine or repetitive tasks, Evro is designed
                to help staff understand how to collaborate at their best, resolve communication
                barriers, and get work done faster and more enjoyably.
              </p> */}

              <a
                href='/product'
                className='px-6 md:px-8 py-3 md:py-4 hover:bg-[#00C4CC] hover:text-black transition-all duration-300 ease-in-out text-[18px] md:text-[20px] font-semibold text-white bg-black rounded-lg'
              >
                Platform
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className='flex-1 flex justify-center relative z-10'>
            <img
              src='/imgs/introMacbookEvroDash.png'
              alt='Evro platform dashboard displayed on a laptop.'
              className='w-full max-h-[600px] h-auto object-contain'
              data-aos='flip-left'
              data-aos-delay='100'
            />
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <div className='max-w-[1550px] px-6 md:px-8 pt-20 mx-auto'>
        {/* Heading + Paragraph */}
        <div className='max-w-[750px]' data-aos='fade-right' data-aos-duration='1000'>
          <h2
            data-aos='fade-right'
            data-aos-delay='20'
            className='text-[32px] md:text-[52px] font-heading font-bold text-black leading-[1] mb-6 uppercase'
          >
            Eliminate team friction. <br /> Unlock collaboration.
          </h2>
          <p
            data-aos='fade-up-right'
            data-aos-delay='200'
            className='text-lg md:text-[20px] max-w-[700px] text-black leading-relaxed mb-12'
          >
            Evro transforms daily collaboration into a driver of business performance—retaining top
            talent, strengthening managers, resolving friction, aligning teams with strategy, and
            proving ROI on people initiatives.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-12 md:mb-12 mb-0'>
          {heroFeatures.map((feat, i) => (
            <div
              key={i}
              className='bg-white p-6 rounded-2xl shadow-sm transition-all duration-300'
              data-aos='fade-up'
              data-aos-delay={i * 150}
              data-aos-duration='1000'
            >
              <h4 className='font-heading uppercase text-2xl md:text-[32px] font-semibold text-black mb-4'>
                {feat.title}
              </h4>
              <p className='text-[18px] text-gray-700 leading-[1.5]'>{feat.text}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
});
