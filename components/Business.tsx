import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FiAlertTriangle, FiTarget } from "react-icons/fi";
import { FaBrain, FaRegHeart } from "react-icons/fa";

const cardData = [
  {
    title: "Bias Reinforcement",
    description:
      "Generic copilots reinforce user biases and misinterpret patterns, leading to poor decision-making.",
    icon: FiAlertTriangle,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    borderColor: "border-red-100",
  },
  {
    title: "Surface-Level Analysis",
    description:
      "Surface-level advice fails to capture emotional, interpersonal, and cultural complexity.",
    icon: FaRegHeart,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
    borderColor: "border-pink-100",
  },
  {
    title: "Flattery Over Accuracy",
    description:
      "LLMs flatter users and aren't built to diagnose human problems accurately and challenge users with emotional intelligence when necessary.",
    icon: FiTarget,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    borderColor: "border-purple-100",
  },
];

export default function Business() {
  const [swiper, setSwiper] = useState(null);
  return (
    <section className='bg-[#f0f0f0] py-24 sm:py-32 px-6 lg:px-8'>
      <div className='mx-auto max-w-[1550px]'>
        <div className='max-w-[1000px]'>
          <h2 className='text-[44px] md:text-[72px] font-heading font-semibold uppercase text-black tracking-normal leading-[1]'>
            Generic AI Assistants Miss the Human Complexity Behind Workplace Performance
          </h2>
          <p className='mt-6 text-[18px] font-sans font-semibold md:text-[24px] text-[#000] leading-[1.3] max-w-[900px]'>
            LLM-powered copilots like Google Gemini and MS Copilot give shallow advice, reinforce
            bias, and flatters users instead of being accurate about psychological factors. Evro is
            built with clinical expertise to understand the human factors AI can’t.
          </p>
        </div>
      </div>

      <div className='block'>
        <div className='mt-16 max-w-[1550px] mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {cardData.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-3xl p-8 transition-all duration-500 border ${card.borderColor} shadow-sm hover:shadow-lg hover:scale-[1.02] group relative overflow-hidden`}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${card.iconBg} ${card.iconColor} shadow-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent size={28} />
                  </div>

                  {/* Title & Description */}
                  <div className='mt-6 space-y-3'>
                    <h3 className='text-[28px] font-bold text-gray-900 font-heading'>
                      {card.title}
                    </h3>
                    <p className='text-[18px] leading-relaxed text-gray-600 font-medium'>
                      {card.description}
                    </p>
                  </div>

                  {/* Hover shine effect */}
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div className='md:hidden'>
        <div className='mt-16 max-w-[1550px] mx-auto overflow-hidden'>
          <Swiper
            onSwiper={setSwiper}
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            className='!overflow-visible'
          >
            {cardData.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <SwiperSlide key={index}>
                  <div
                    className={`bg-gradient-to-br ${card.gradient} backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 ${card.borderColor} mx-4 relative overflow-hidden`}
                  >
                    <div className='absolute inset-0 bg-white/60 backdrop-blur-sm'></div>
                    <div className='relative z-10 space-y-6'>
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 ${card.iconColor} shadow-sm`}
                      >
                        <IconComponent size={24} />
                      </div>
                      <div className='space-y-3'>
                        <h3 className='text-[20px] font-bold text-gray-900 leading-tight'>
                          {card.title}
                        </h3>
                        <p className='text-[16px] leading-[1.6] text-gray-700 font-medium'>
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className='mt-8 flex justify-center gap-3'>
          <button
            onClick={() => swiper?.slidePrev()}
            aria-label='Previous slide'
            className='flex h-[40px] w-[40px] items-center justify-center rounded-lg border border-neutral-300 bg-white text-black transition hover:bg-neutral-100 shadow-sm'
          >
            <GoArrowLeft size={18} />
          </button>
          <button
            onClick={() => swiper?.slideNext()}
            aria-label='Next slide'
            className='flex h-[40px] w-[40px] items-center justify-center rounded-lg border border-neutral-300 bg-white text-black transition hover:bg-neutral-100 shadow-sm'
          >
            <GoArrowRight size={18} />
          </button>
        </div>
      </div> */}
    </section>
  );
}
