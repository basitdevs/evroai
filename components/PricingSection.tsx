import React from "react";

const pricingTiers = [
  {
    title: "Selected Organisation Partners",
    status: "Free Licence",
    accentColor: "border-indigo-500", // A professional blue/purple
  },
  {
    title: "Selected User Partners",
    status: "Free Licence",
    accentColor: "border-teal-500", // A modern teal
  },
  {
    title: "Future Plans",
    status: "Coming Soon",
    accentColor: "border-gray-400", // A neutral gray for "Coming Soon"
  },
];

// --- The Main Pricing Section Component ---
const PricingSection: React.FC = () => {
  return (
    <section className='py-24 sm:py-32'>
      <div className='mx-auto max-w-[1550px] px-6 lg:px-8'>
        {/* Main Headings */}
        <div className='mx-auto max-w-3xl text-center mb-16'>
          <h1 className='text-[44px] lg:text-[72px] font-simebold uppercase font-heading leading-[1] tracking-normal max-w-[1000px]'>
            Closed Beta Access
          </h1>
          <p className='text-[18px] font-medium md:text-[24px] text-black/70 leading-[1.4] mt-7'>
            Early partners receive free or discounted licences in exchange for feedback and
            co-creation.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {pricingTiers.map((tier, i) => (
            <div
              key={i}
              // The 'group' class can be used for more advanced hover effects if needed
              className={`
                  group bg-white p-8 rounded-2xl shadow-lg 
                  transition-all duration-300 ease-in-out 
                  hover:shadow-2xl
                  border-t-4 ${tier.accentColor}
                  flex flex-col items-center text-center
                `}
              data-aos='fade-up'
              data-aos-delay={i * 150}
              data-aos-duration='1000'
            >
              {/* Refined Title Typography */}
              <h4 className='text-2xl font-semibold text-gray-800 mb-6 h-16 flex items-center'>
                {tier.title}
              </h4>

              {/* Modern Status Badge */}
              <p className='text-base font-medium text-gray-700 bg-gray-100 px-5 py-2 rounded-full'>
                {tier.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
