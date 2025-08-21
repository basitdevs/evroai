import React from "react";
import { GoArrowRight } from "react-icons/go";
import Business from "./Business";

const aiGapClosed = [
  {
    title: "FRICTION",
    text: "caused by unique beliefs and ways of working.",
  },
  {
    title: "BLOCKS",
    text: "cause misunderstandings and avoidance.",
  },
  {
    title: "GROWTH",
    text: "slows down and work becomes hard.",
  },
];

export const Problem = React.forwardRef<HTMLElement, { id: string }>(({ id }, ref) => {
  return (
    <div
      ref={ref}
      id={id}
      className='w-full bg-[#0d0d0d] rounded-t-[50px] text-white overflow-hidden'
    >
      <main className='w-full mx-auto'>
        <div className='py-20 md:py-24'>
          <Business />

          {/* Section 2: REVOLUTIONIZING */}
          <section className='pb-24 lg:pb-32 max-w-[1550px] px-8 sm:px-6 mx-auto'>
            <h1
              data-aos='fade-right'
              data-aos-delay='20'
              className='font-heading text-[44px] lg:text-[72px] font-simebold uppercase leading-[1] tracking-normal mb-10 max-w-[1000px]'
            >
              Traditional HR Tools Can’t Keep Up with Real-World Team Dynamics
            </h1>
            <div className='max-w-[755px]'>
              {/* {revolutionizingText.map((txt, i) => ( */}
              <p
                // key={i}
                data-aos='fade-up-right'
                data-aos-delay='200'
                className={`text-[18px] font-medium md:text-[24px] text-white/70 leading-[1.4] mt-7 `} // ${i === 2 ? "mt-7" : ""}
              >
                Performance reviews are slow. Surveys are skewed. Traditional L&D doesn’t drive real
                change. Meanwhile, collaboration problems silently drain productivity and burn out
                your top talent.
              </p>
            </div>
          </section>

          {/* Section 1: AI. GAP. CLOSED. */}
          <section className='max-w-[1550px] px-8 sm:px-6  mx-auto flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-20 pb-24 lg:pb-32'>
            {aiGapClosed.map((item, i) => (
              <div className='column' key={i}>
                <h3 className='font-heading text-[36px] lg:text-[56px] font-simebold uppercase'>
                  {item.title}
                </h3>
                <p className='text-[18px] text-white leading-relaxed max-w-md'>{item.text}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
});
