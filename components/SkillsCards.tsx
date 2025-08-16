import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaBrain, FaGraduationCap } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { IoIosArrowForward, IoMdCheckmarkCircleOutline } from "react-icons/io";

const logos = [
  {
    name: "Oracle",
    src: "https://a.storyblok.com/f/314917/91x36/8b0e094cec/oracle-white.svg",
  },
  {
    name: "SAP",
    src: "https://a.storyblok.com/f/314917/91x36/788e78ae7f/sap-white.svg",
  },
  {
    name: "Workday",
    src: "https://a.storyblok.com/f/314917/91x36/5571b784b0/workday-white.svg",
  },
  {
    name: "ServiceNow",
    src: "https://a.storyblok.com/f/314917/91x36/8f7cee8b5d/servicenow-white.svg",
  },
  {
    name: "Coupa",
    src: "https://a.storyblok.com/f/314917/91x36/de06bec0c1/coupa-white.svg",
  },
  {
    name: "Atlassian Jira",
    src: "https://a.storyblok.com/f/314917/91x36/ddde8dbfab/jira-white.svg",
  },
  {
    name: "Anaplan",
    src: "https://a.storyblok.com/f/314917/91x36/77fa7a6831/anaplan-white.svg",
  },
  {
    name: "Slack",
    src: "https://a.storyblok.com/f/314917/91x36/d4fe0e1078/slack-white.svg",
  },
];

const differentiationData = [
  {
    icon: FaBrain,
    title: "Evro vs Employee Experience Platforms",
    color: "from-blue-500 to-cyan-500",
    comparisons: [
      {
        evro: "Real-time, proactive detection",
        competitor: "not lagging surveys",
      },
      {
        evro: "Surfaces root causes",
        competitor: "not vanity engagement scores",
      },
      {
        evro: "Automates action routing",
        competitor: "no more analysis paralysis",
      },
    ],
  },
  {
    icon: FaGraduationCap,
    title: "Evro vs Learning Management Systems",
    color: "from-emerald-500 to-teal-500",
    comparisons: [
      {
        evro: "Adaptive, just-in-time coaching",
        competitor: "not static content libraries",
      },
      {
        evro: "Tracks actual behavioural change",
        competitor: "not just course completion",
      },
      {
        evro: "Personalised to real performance blockers",
        competitor: "not just roles",
      },
    ],
  },
  {
    icon: FiMessageCircle,
    title: "Evro vs Leadership Coaching",
    color: "from-purple-500 to-pink-500",
    comparisons: [
      {
        evro: "Scalable, affordable coaching for all levels",
        competitor: "not expensive and executive-only",
      },
      {
        evro: "Continuous micro-coaching",
        competitor: "not expensive, episodic sessions",
      },
      {
        evro: "Organisationally intelligent and adaptive",
        competitor: "not one-off, outsider insights",
      },
    ],
  },
];

export default function SkillsCards() {
  return (
    <section className='bg-white font-sans' id="why-evro-section">
      <div className='mx-auto px-6 md:px-12 max-w-[1600px] pt-24 pb-16 sm:py-32'>
        <div className='max-w-[1000px] mb-16'>
          <h1 className='font-heading text-[40px] uppercase text-black leading-none md:text-[72px]'>
            Upgrade your Employee Experience, Learning and Coaching Approach
          </h1>
        </div>

        {/* Three Column Comparison Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {differentiationData.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className='group'>
                {/* Category Header */}
                <div className='text-center mb-5 md:mb-8'>
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent size={32} color='#fff' />
                  </div>
                  <h2 className='text-[25px] tracking-[0.5px] md:text-[32px] leading-[1.3] font-bold text-gray-600 font-heading md:tracking-[1px]'>
                    {category.title}
                  </h2>
                </div>

                {/* Comparison Cards */}
                <div className='space-y-4 bg-white text-black border border-gray-300 hover:scale-[1.02] hover:translate-y-[-4px] rounded-[15px] p-6 hover:shadow-lg transition-all duration-300 '>
                  {category.comparisons.map((comparison, compIndex) => (
                    <div key={compIndex} className='group/card'>
                      <div className='space-y-1 md:space-y-4'>
                        <div className='flex items-start gap-3'>
                          <div className='mt-0.5'>
                            <IoMdCheckmarkCircleOutline size={24} color='#000' />
                          </div>
                          <div className='text-[18px] md:text-[22px] leading-[1.3] font-semibold '>
                            {comparison.evro}
                          </div>
                        </div>

                        <div className='flex items-center gap-2 pl-9'>
                          <span className='w-4 h-4 text-gray-800 flex-shrink-0'>
                            <IoIosArrowForward size={16} color='currentColor' />
                          </span>
                          <div className='text-gray-800'>{comparison.competitor}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="mt-24 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {logos.map((l) => (
            <div
              key={l.name}
              className="flex h-20 md:h-32 items-center justify-center rounded-[28px] bg-black p-4"
            >
              <img
                className="h-9 w-auto object-contain"
                src={l.src}
                alt={l.name}
              />
              <span className="sr-only">{l.name}</span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
