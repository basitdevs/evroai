import React from "react";
import { FiArrowRight } from "react-icons/fi";

const pricingTiers = [
  {
    title: "Team or Company Pilots",
    description:
      "Work directly with our founding team to run a secure pilot for your managers and HR team. Includes tailored onboarding, co-creation sessions, and measurable ROI tracking.",
    status: "Free or Discounted Licence",
    buttonText: "Book a Pilot Conversation",
    link: "https://forms.fillout.com/t/uZfJaWkLmpus",
    accentColor: "border-cyan-500",
    isNewsletter: false,
  },
  {
    title: "Individual Early Access",
    description:
      "Get hands-on with a sample Evro Assistant (e.g., High-Stakes Conversation Coach) and see how AI coaching works in practice. A simple way to explore Evro before full launch.",
    status: "Free Licence",
    buttonText: "Get A Sample Evro Assistant",
    link: "https://forms.fillout.com/t/7M17jCbgZgus",
    accentColor: "border-indigo-500",
    isNewsletter: false,
  },
  {
    title: "Future Pricing",
    description:
      "Standard plans will be available with our public beta launch in 2026. Early partners will received pricing discounts. Pricing will reflect the value created in pilots and be aligned to budgets for HR and Operations teams.",
    status: "Coming Soon",
    buttonText: "Sign Up For Newsletter",
    link: "https://preview.mailerlite.io/forms/1705936/163148231391315767/share", // Link is no longer needed here
    accentColor: "border-gray-500",
  },
];

// const PricingSection: React.FC = () => {
export const PricingSection = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className='py-24 sm:py-32 bg-black text-white rounded-t-[25px] md:rounded-t-[40px]'
      id='pricing'
    >
      <div className='mx-auto max-w-[1550px] px-6 lg:px-8'>
        <div className='mx-auto max-w-[1000px] text-center mb-16' data-aos='fade-up'>
          <h1 className='text-[44px] lg:text-[72px] font-semibold uppercase font-heading leading-[1] tracking-normal'>
            Early Access & Pilot Offers
          </h1>
          <p className='text-[18px] font-medium md:text-[24px] text-white/70 leading-[1.4] mt-7'>
            Feedback from our first pilots has been positive. Early partners are already using Evro
            in their teams to prepare for high stakes conversations, keep projects on track, and for
            leadership training. Join them as we expand our early access program.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {pricingTiers.map((tier, i) => (
            <div
              key={i}
              className={`group bg-[#101010] p-8 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.03] border-t-4 ${tier.accentColor} flex flex-col text-left`}
              data-aos='fade-up'
              data-aos-delay={i * 150}
              data-aos-duration='1000'
            >
              <div className='flex-grow'>
                <h4 className='text-2xl font-semibold text-white mb-4'>{tier.title}</h4>
                <p className='text-base text-gray-300 leading-relaxed'>{tier.description}</p>
              </div>

              <div className='mt-8 pt-8 border-t border-white/10'>
                <p className='text-base font-medium text-gray-400 bg-[#313131] inline-block px-5 py-2 rounded-full mb-6'>
                  {tier.status}
                </p>

                <a
                  href={tier.link!}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full inline-flex items-center justify-center gap-2 bg-white/90 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300 hover:bg-white'
                >
                  {tier.buttonText}
                  <FiArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default PricingSection;
