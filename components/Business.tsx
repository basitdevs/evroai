import React from "react";
import { FiAlertTriangle, FiTarget } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const cardData = [
  {
    title: "BIASED",
    description:
      "Standard AI reinforces user biases and misinterprets patterns, leading to poor decision-making.",
    icon: FiAlertTriangle,
    iconBg: "bg-black",
    iconColor: "text-white",
    borderColor: "border-black",
  },
  {
    title: "GENERIC",
    description:
      "Human dynamics are oversimplified, missing the emotional, cultural, and interpersonal factors that drive performance.",
    icon: FaRegHeart,
    iconBg: "bg-black",
    iconColor: "text-white",
    borderColor: "border-black",
  },
  {
    title: "FLATTERY",
    description:
      "Rather than challenge users with accurate feedback, they flatter, leaving real collaboration issues unresolved.",
    icon: FiTarget,
    iconBg: "bg-black",
    iconColor: "text-white",
    borderColor: "border-black",
  },
];

export default function Business() {
  return (
    <section className='py-20 sm:py-24 px-6 lg:px-8'>
      <div className='mx-auto max-w-[1550px]'>
        <div className='max-w-[1000px] ml-auto text-right'>
          {/* Heading */}
          <h2
            data-aos='fade-left'
            data-aos-delay='20'
            className='text-[44px] md:text-[72px] font-heading font-semibold uppercase text-white tracking-normal leading-[1]'
          >
            Standard AI can’t fix complex team dynamics.
          </h2>

          {/* Paragraph */}
          <p
            data-aos='fade-up-left'
            data-aos-delay='200'
            className='mt-6 text-[18px] font-medium md:text-[24px] text-white/80 leading-[1.3] max-w-[900px] ml-auto'
          >
            AI gives shallow advice, reinforces bias, and flatters users instead of being accurate
            about psychological factors. Evro is built with clinical expertise to understand the
            human factors standard AI can’t.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className='block'>
        <div className='mt-16 max-w-[1550px] mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {cardData.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div className='column' key={index}>
                  <h3 className='font-heading text-[36px] lg:text-[56px] font-simebold uppercase'>
                    {card.title}
                  </h3>
                  <p className='text-[18px] text-white leading-relaxed max-w-md'>
                    {card.description}
                  </p>
                </div>
                // <div
                //   key={index}
                //   data-aos='fade-up'
                //   data-aos-delay={index * 100}
                //   className='bg-black border border-white/10 rounded-3xl p-8 transition-all duration-500 shadow-sm hover:shadow-lg hover:scale-[1.02] group relative overflow-hidden'
                // >
                //   {/* Icon */}
                //   <div className='inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-white shadow-sm group-hover:scale-110 transition-transform duration-300'>
                //     <IconComponent size={28} />
                //   </div>

                //   {/* Title & Description */}
                //   <div className='mt-6 space-y-3'>
                //     <h3 className='text-[28px] font-bold text-white font-heading'>{card.title}</h3>
                //     <p className='text-[18px] leading-relaxed text-white/80 font-medium'>
                //       {card.description}
                //     </p>
                //   </div>

                //   {/* Subtle hover shine */}
                //   <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
