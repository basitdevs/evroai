import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaPause, FaPlay } from "react-icons/fa";
import { FiUsers, FiAward, FiShield } from "react-icons/fi";

const solutionsData = [
  {
    id: "teamMembers",
    role: "For Team Members",
    title: "Work with confidence.",
    description:
      "Prepare for tough conversations, get accurate, private performance feedback and grow your career skills.",
    ctaText: "Solutions For Team Members",
    ctaLink: "/solutions",
    visual: {
      imageSrc: "/imgs/solutions/evro-middle-eastern-male-employee-smiling.webp",
      altText: "A male employee smiling, representing a team member",
      card: {
        icon: <FiUsers size={20} />,
        title: "Career Growth",
        description: "Leverage AI for personalized feedback and skill development.",
        status: "Publicly Available",
        isPopular: false,
      },
    },
    accentColor: "rgba(230, 245, 233, 1)",
    buttonText: "Solutions For Team Members",
  },
  {
    id: "teamLeaders",
    role: "For Team Leaders",
    title: "Lead like the best.",
    description:
      "Build psychological safety, reduce conflict, and unlock collaboration with Evro’s AI assistants.",
    ctaText: "Solutions For Team Leaders",
    ctaLink: "/solutions",
    visual: {
      imageSrc: "/imgs/solutions/evro-chinese-female-employee-smiling.webp",
      altText: "A female employee smiling, representing a team leader",
      card: {
        icon: <FiAward size={20} />,
        title: "Team Collaboration",
        description: "Enhance team dynamics and foster a collaborative environment.",
        status: "Popular",
        isPopular: true,
      },
    },
    accentColor: "rgba(227, 242, 253, 1)",
    buttonText: "Solutions For Team Leaders",
  },
  {
    id: "peopleCulture",
    role: "For People & Culture",
    title: "Turn compliance into performance.",
    description:
      "Automate psychosocial risk management, measure ROI on people programs, and build a high performance culture.",
    ctaText: "Solutions For People & Culture Teams",
    ctaLink: "/solutions",
    visual: {
      imageSrc: "/imgs/solutions/evro-pacificislander-female-employee-smiling.webp",
      altText: "A female employee smiling, representing People & Culture",
      card: {
        icon: <FiShield size={20} />,
        title: "Risk Management",
        description: "Automate compliance and psychosocial risk reporting.",
        status: "Enterprise Only",
        isPopular: false,
      },
    },
    accentColor: "rgba(232, 230, 245, 1)",
    buttonText: "Solutions For HR Teams",
  },
];

export const Solutions = React.forwardRef<HTMLElement>((_, ref) => {
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
    <section
      ref={ref}
      className='text-white bg-black rounded-t-[25px] md:rounded-t-[40px] py-12 md:py-[85px] md:pt-[100px]'
    >
      <div className='max-w-[1550px] px-8 sm:px-6 mx-auto mb-12 md:mb-16 '>
        <h2
          data-aos='fade-right'
          data-aos-delay='20'
          className='text-[44px] md:text-[72px] lg:text-[82px] font-heading font-semibold uppercase max-w-[1000px] leading-[1] '
        >
          AI that understands you, your team and your goals.
        </h2>
        <p
          data-aos='fade-up-right'
          data-aos-delay='200'
          className='mt-4 text-[18px] font-medium md:text-[24px] leading-[1.3] text-gray-400 max-w-[640px]'
        >
          While standard AI can help you think through a work problem, Evro knows the bigger
          picture: your goals, your team’s working styles, and your organisation’s objectives.{" "}
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
          {solutionsData.map((slide, index) => (
            <SwiperSlide key={index} className='max-w-[1250px] md:px-0 px-6 w-full mx-auto'>
              <div
                className={`flex flex-col rounded-[32px] overflow-hidden bg-[#101010] md:grid md:grid-cols-2 `}
              >
                <div className='p-6 flex flex-col justify-center md:p-10 md:px-16'>
                  <div className='flex justify-between items-start'>
                    <h3 className='text-2xl uppercase text-white max-w-[85%] md:text-[48px] font-heading leading-[1.1] md:leading-[0.9]'>
                      {slide.title}
                    </h3>
                  </div>
                  <p className='text-base md:text-xl text-gray-400 mt-4'>{slide.description}</p>
                  <div className='flex mt-5'>
                    <a
                      href='/solutions'
                      className='px-6 md:px-8 py-3 md:py-4 hover:bg-[#00C4CC] hover:text-white transition-all duration-300 ease-in-out text-[18px] md:text-[20px] font-semibold text-black bg-white rounded-lg'
                    >
                      {slide.buttonText}
                    </a>
                  </div>
                </div>
                <div
                  className={`bg-gray-100 flex items-center justify-center min-h-[250px] h-[300px] md:h-[600px]`}
                  style={{ backgroundColor: slide.accentColor }}
                >
                  <img
                    src={slide.visual.imageSrc}
                    alt={slide.visual.altText}
                    className='w-full h-full object-contain'
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10'>
          <button
            onClick={handlePlayPause}
            className='w-8 h-8 md:w-10 md:h-10 bg-gray-200 text-black/50 rounded-full flex items-center justify-center transition-colors'
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <div className='flex items-center gap-2 rounded-full bg-gray-200 py-2.5 px-4'>
            {solutionsData.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className='relative flex items-center justify-center'
              >
                {i === activeIndex ? (
                  <div className='h-3 w-8 md:w-10 rounded-full bg-black/20 overflow-hidden'>
                    <div
                      className='h-full bg-black transition-all duration-100 ease-linear'
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                ) : (
                  <div className='h-3 w-3 cursor-pointer rounded-full bg-black/20' />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Solutions;
