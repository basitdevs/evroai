import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaPause, FaPlay } from "react-icons/fa";

const slidesData = [
  {
    bgColor: "",
    imagePanelBg: "",
    image: "/imgs/C6_light-grey.png",
    title: "Upskill managers who are technically strong but need leadership skills using Evro.",
    description:
      "Named the Top Strategic Tech Trend of 2025 by Gartner, Dayos leads the way in Agentic AI for the enterprise business apps.",
  },
  {
    bgColor: "",
    imagePanelBg: "",
    image: "/imgs/C7_light-grey.png",
    title: "Achieve compliance with new WHS psychosocial hazard legislation using Evro.",
    description:
      'Keep your current MSP for "Keeping the Lights On" and let Dayos step in for advanced support, integrations, and enhancements.\n\nWith no long-term contracts and flexible budgeting, Dayos On-Demand ensures your operations are always equipped for success—no matter the challenge.',
  },
  {
    bgColor: "",
    imagePanelBg: "",
    image: "/imgs/C1_light-grey.png",
    title:
      "Reliably quantify VOI/ROI to validate the business impact of people development initiatives using Evro.",
    description:
      "Experience an accelerated close process and cost savings beyond your ERP system with our AI month-end close agent.",
  },
];

const ArrowIcon = () => (
  <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M1 11L11 1M11 1H3.5M11 1V8.5'
      stroke='white'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const SocialProof = React.forwardRef<HTMLElement, { id: string }>(({ id }, ref) => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressPct, setProgressPct] = useState(0);
  const SLIDE_DELAY = 4000;

  const handlePlayPause = () => {
    if (!swiperInstance) return;
    isPlaying ? swiperInstance.autoplay.stop() : swiperInstance.autoplay.start();
    setIsPlaying(!isPlaying);
  };
  const goToSlide = (i: number) => swiperInstance?.slideToLoop(i) && setProgressPct(0);

  return (
    <section id={id} ref={ref} className='bg-black text-white py-12 md:py-[85px] md:pt-[100px]'>
      <div className='max-w-[1550px] px-8 sm:px-6 mx-auto mb-12 md:mb-16 '>
        <h2
          data-aos='fade-right'
          data-aos-delay='20'
          className='text-[28px] max-w-[1000px] md:text-[48px] leading-[1.2] font-bold'
        >
          Built for HR and Operations leaders at mid-sized companies.
        </h2>
        <p
          data-aos='fade-up-right'
          data-aos-delay='200'
          className='mt-4 text-base md:text-[22px] text-gray-300 max-w-xl'
        >
          Evro is for companies with 100–1000 employees who need to prove their people initiatives
          deliver measurable business outcomes.{" "}
        </p>
      </div>
      <div className='relative' data-aos='fade-up' data-aos-delay='500'>
        <Swiper
          modules={[Autoplay]}
          onSwiper={setSwiperInstance}
          onSlideChange={(s) => {
            setActiveIndex(s.realIndex);
            setProgressPct(0);
          }}
          onAutoplayTimeLeft={(_, __, p) =>
            setProgressPct(Math.min(Math.max((1 - p) * 100, 0), 100))
          }
          slidesPerView='auto'
          centeredSlides
          spaceBetween={16}
          autoplay={{ delay: SLIDE_DELAY, disableOnInteraction: false }}
          className='!pb-12 md:!pb-16'
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className='max-w-[1250px] md:px-0 px-6 w-full mx-auto'>
              <div
                className={`flex flex-col rounded-[32px] overflow-hidden bg-[#111] md:grid md:grid-cols-2 `}
              >
                <div className='p-6 flex flex-col justify-center md:p-10 md:px-16'>
                  <div className='flex justify-between items-start'>
                    <h3 className='text-2xl  uppercase text-white max-w-[85%] md:text-[48px] font-heading leading-[1.1] md:leading-[0.9] tracking-[-0.5px] md:tracking-[-1px]'>
                      {slide.title}
                    </h3>
                    {/* <button className='w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center shrink-0 md:hidden'>
                      <ArrowIcon color='#000' />
                    </button> */}
                  </div>
                  {/* <p className='whitespace-pre-line text-black text-base md:text-neutral-800 md:text-[14px] leading-[1.1] md:mt-4'>
                    {slide.description}
                  </p> */}
                  {/* <button className='hidden md:block mt-5 md:mt-6 bg-black text-white text-xs md:text-sm font-semibold px-4 py-2 md:px-5 md:py-3 rounded-lg self-start hover:bg-neutral-800 transition-colors'>
                    More details
                  </button> */}
                </div>
                <div
                  className={`bg-[#222] flex items-center justify-center min-h-[250px] h-[300px] md:h-[600px]`}
                >
                  <img
                    src={slide.image}
                    alt='Use Case Visual'
                    className='w-full h-full object-cover '
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10'>
          <button
            onClick={handlePlayPause}
            className='w-8 h-8 md:w-10 md:h-10 bg-[#222] text-white/50 rounded-full flex items-center justify-center transition-colors'
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <div className='flex items-center gap-2 rounded-full bg-[#222] py-2.5 px-4'>
            {slidesData.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className='relative flex items-center justify-center'
              >
                {i === activeIndex ? (
                  <div className='h-3 w-8 md:w-10 rounded-full bg-[#fff]/50 overflow-hidden'>
                    <div
                      className='h-full bg-black transition-all duration-100 ease-linear'
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                ) : (
                  <div className='h-3 w-3 cursor-pointer rounded-full bg-[#fff]/50' />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
