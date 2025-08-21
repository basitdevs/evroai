import React from "react";
import { FaBrain, FaGraduationCap } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { IoIosArrowForward, IoMdCheckmarkCircleOutline } from "react-icons/io";

const differentiationData = [
  {
    icon: FaBrain,
    title: "Employee Experience Platforms (EXP)",
    color: "from-blue-500 to-cyan-500",
    comparisons: [
      {
        evro: "Detects friction and burnout in real time",
        competitor: "Surveys, engagement scores, action plans",
      },
      {
        evro: "Surfaces root causes, not vanity scores",
        competitor: "Focuses on vanity engagement metrics",
      },
      {
        evro: "Automates action routing so fixes happen now",
        competitor: "Manual follow-ups and delayed actions",
      },
    ],
  },
  {
    icon: FaGraduationCap,
    title: "Learning Management Systems (LMS)",
    color: "from-emerald-500 to-teal-500",
    comparisons: [
      {
        evro: "Delivers adaptive, just-in-time coaching in Slack/Teams",
        competitor: "Static content libraries, course completions",
      },
      {
        evro: "Tracks real behaviour change, not just completions",
        competitor: "Only tracks course completion",
      },
      {
        evro: "Personalizes coaching to actual blockers",
        competitor: "Generic learning by roles",
      },
    ],
  },
  {
    icon: FiMessageCircle,
    title: "Leadership Coaching & Workshops",
    color: "from-purple-500 to-pink-500",
    comparisons: [
      {
        evro: "Scales affordable coaching to every employee",
        competitor: "Expensive, executive-only programs",
      },
      {
        evro: "Provides continuous micro-coaching in daily work",
        competitor: "Episodic, one-off workshops",
      },
      {
        evro: "Extends in-person training into ongoing coaching",
        competitor: "No continuity beyond training days",
      },
    ],
  },
];

const SkillsCard = React.forwardRef<HTMLElement, { id: string }>(({ id }, ref) => {
  return (
    <section className='bg-[#f0f0f0]' id={id} ref={ref}>
      <div className='mx-auto px-6 md:px-12 max-w-[1550px] pt-24 pb-16 sm:py-32'>
        {/* Heading */}
        <h1
          data-aos='fade-right'
          data-aos-delay='20'
          className='font-heading text-[36px] md:text-[64px] font-bold leading-tight mb-16 text-black'
        >
          How Evro Replaces EXP, LMS, and Coaching
        </h1>

        {/* Three Column Comparison Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch'>
          {differentiationData.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                data-aos='fade-up'
                data-aos-delay={index * 100}
                className='group flex flex-col bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300'
              >
                {/* Category Header */}
                <div className='text-center mb-8'>
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} mb-6`}
                  >
                    <IconComponent size={32} color='#fff' />
                  </div>
                  <h2 className='text-[22px] md:text-[28px] font-semibold text-gray-800 leading-snug'>
                    {category.title}
                  </h2>
                </div>

                {/* Comparison Points */}
                <div className='space-y-6 text-left'>
                  {category.comparisons.map((comparison, compIndex) => (
                    <div key={compIndex}>
                      {/* Evro Benefit */}
                      <div className='flex items-start gap-3'>
                        <IoMdCheckmarkCircleOutline size={22} color='#10B981' />
                        <p className='text-[18px] leading-snug font-medium text-gray-900'>
                          {comparison.evro}
                        </p>
                      </div>

                      {/* Competitor Weakness */}
                      <div className='flex items-center gap-2 pl-8 mt-1 text-gray-500 text-sm'>
                        <IoIosArrowForward size={14} />
                        <span>{comparison.competitor}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default SkillsCard;
