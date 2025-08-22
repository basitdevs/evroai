import React from "react";
import { FaBrain, FaGraduationCap } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const differentiationData = [
  {
    icon: FaBrain,
    title: "Employee Experience Platforms (EXP)",
    color: "from-blue-500 to-cyan-500",
    whatTheyDo: "Surveys, engagement scores, action plans",
    comparisons: [
      {
        evro: "Detects friction and burnout in real time",
        competitor: "Relies on periodic surveys and delayed feedback",
      },
      {
        evro: "Surfaces root causes, not vanity scores",
        competitor: "Focuses on engagement metrics without actionable insights",
      },
      {
        evro: "Automates action routing so fixes happen now",
        competitor: "Manual follow-ups with slow response times",
      },
    ],
  },
  {
    icon: FaGraduationCap,
    title: "Learning Management Systems (LMS)",
    color: "from-emerald-500 to-teal-500",
    whatTheyDo: "Static content libraries, course completions",
    comparisons: [
      {
        evro: "Delivers adaptive, just-in-time coaching in Slack/Teams",
        competitor: "Static content that doesn't adapt to individual needs",
      },
      {
        evro: "Tracks real behaviour change, not just completions",
        competitor: "Only measures course completion rates",
      },
      {
        evro: "Personalizes coaching to actual blockers",
        competitor: "Generic learning paths for broad categories",
      },
    ],
  },
  {
    icon: FiMessageCircle,
    title: "Leadership Coaching & Workshops",
    color: "from-purple-500 to-pink-500",
    whatTheyDo: "Expensive, executive-only, episodic sessions",
    comparisons: [
      {
        evro: "Can extend in-person training into ongoing, scalable coaching for all employees",
        competitor: "Limited to expensive, one-time executive sessions",
      },
      {
        evro: "Provides continuous micro-coaching in daily work",
        competitor: "Episodic workshops with no ongoing support",
      },
      {
        evro: "Scales affordable coaching to every employee",
        competitor: "High-cost programs accessible only to leadership",
      },
    ],
  },
];

const SkillsCard = React.forwardRef<HTMLElement, { id: string }>(({ id }, ref) => {
  return (
    <section className='bg-[#f0f0f0]' id={id} ref={ref}>
      <div className='mx-auto px-6 md:px-12 max-w-[1550px] pt-24 pb-16 sm:py-32 '>
        {/* Heading */}
        <h1
          data-aos='fade-right'
          data-aos-delay='20'
          className='font-heading text-[36px] md:text-[64px] font-bold leading-tight mb-16 text-black'
        >
          How Evro Replaces EXP, LMS, and Coaching
        </h1>

        {/* Three Column Comparison Grid */}
        <div className='bg-white rounded-2xl  lg:block hidden shadow-lg overflow-hidden border border-gray-200'>
          <div className='overflow-x-auto overflow-y-hidden'>
            <table className='w-full'>
              <thead>
                <tr className='bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200'>
                  <th className='text-left py-6 px-8 font-semibold text-gray-800 text-lg'>
                    Category
                  </th>
                  <th className='text-left py-6 px-8 font-semibold text-gray-800 text-lg'>
                    What They Do
                  </th>
                  <th className='text-left py-6 px-8 font-semibold text-gray-800 text-lg'>
                    What Evro Does Better
                  </th>
                </tr>
              </thead>
              <tbody className='overflow-hidden '>
                {differentiationData.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                        index === differentiationData.length - 1 ? "border-b-0" : ""
                      }`}
                      data-aos='fade-up'
                      data-aos-delay={index * 100}
                    >
                      {/* Category Column */}
                      <td className='py-8 px-8 align-top'>
                        <div className='flex items-center gap-4'>
                          <div
                            className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex-shrink-0`}
                          >
                            <IconComponent size={24} color='#fff' />
                          </div>
                          <div>
                            <h3 className='font-semibold text-gray-900 text-lg leading-tight'>
                              {category.title}
                            </h3>
                          </div>
                        </div>
                      </td>

                      {/* What They Do Column */}
                      <td className='py-8 px-8 align-top'>
                        <div className='bg-red-50 rounded-lg p-4 border-l-4 border-red-200'>
                          <p className='text-gray-700 leading-relaxed'>{category.whatTheyDo}</p>
                        </div>
                      </td>

                      {/* What Evro Does Better Column */}
                      <td className='py-8 px-8 align-top'>
                        <div className='space-y-4'>
                          {category.comparisons.map((comparison, compIndex) => (
                            <div key={compIndex} className='flex items-start gap-3'>
                              <span className='flex-shrink-0 mt-0.5'>
                                <IoMdCheckmarkCircleOutline size={20} color='#10B981' />
                              </span>
                              <p className='text-gray-900 leading-relaxed font-medium'>
                                {comparison.evro}
                              </p>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className='block lg:hidden space-y-4 sm:space-y-6'>
          {differentiationData.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className='bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden'
                data-aos='fade-up'
                data-aos-delay={index * 100}
              >
                {/* Category Header */}
                <div className='bg-gradient-to-r from-gray-50 to-gray-100 p-4 sm:p-6 border-b border-gray-200'>
                  <div className='flex items-center gap-3 sm:gap-4'>
                    <div
                      className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color} flex-shrink-0`}
                    >
                      <IconComponent size={20} color='#fff' />
                    </div>
                    <h3 className='font-bold text-lg sm:text-xl text-gray-900 leading-tight'>
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className='p-4 sm:p-6 space-y-4 sm:space-y-6'>
                  {/* What They Do */}
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg'>
                      What They Do
                    </h4>
                    <div className='bg-red-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border-l-4 border-red-300'>
                      <p className='text-gray-700 leading-relaxed text-sm sm:text-base'>
                        {category.whatTheyDo}
                      </p>
                    </div>
                  </div>

                  {/* What Evro Does Better */}
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-3 sm:mb-4 text-base sm:text-lg'>
                      What Evro Does Better
                    </h4>
                    <div className='space-y-3 sm:space-y-4'>
                      {category.comparisons.map((comparison, compIndex) => (
                        <div key={compIndex} className='flex items-start gap-2 sm:gap-3'>
                          <span className='flex-shrink-0 mt-0.5'>
                            <IoMdCheckmarkCircleOutline size={18} color='#10B981' />
                          </span>
                          <p className='text-gray-900 leading-relaxed font-medium text-sm sm:text-base'>
                            {comparison.evro}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
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
