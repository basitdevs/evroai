import React from "react";
import { FiLock, FiShield, FiUsers } from "react-icons/fi";
import { TbCertificate } from "react-icons/tb";

const featuresData = [
  {
    icon: <TbCertificate size={24} />,
    title: "SOC-2 Ready",
    description: "Evro AI is committed to meeting SOC2 standards for security and reliability.",
    iconBgColor: "bg-blue-500/10 text-blue-400", // subtle blue tint
  },
  {
    icon: <FiLock size={24} />,
    title: "SSO/SAML",
    description: "Use SSO to sign up and login securely with your teams existing credentials.",
    iconBgColor: "bg-yellow-500/10 text-yellow-400", // subtle yellow tint
  },
  {
    icon: <FiShield size={24} />,
    title: "GDPR Ready",
    description:
      "Evro is committed towards full compliance with GDPR to ensure data privacy and security for everyone.",
    iconBgColor: "bg-indigo-500/10 text-indigo-400", // subtle indigo tint
  },
  {
    icon: <FiUsers size={24} />,
    title: "PhD-level Team",
    description:
      "Our team is staffed with PhD level clinical psychologists and security experienced staff from leading companies like ZipCo, Wisr and ANZ bank.",
    iconBgColor: "bg-emerald-500/10 text-emerald-400", // subtle emerald tint
  },
];

const FeatureCard: React.FC<{ feature: any }> = ({ feature }) => (
  <div className='bg-gray-200 border border-gray-300 p-6 rounded-2xl flex flex-col items-start transition-all duration-300 hover:border-gray-400'>
    <div
      className={`flex items-center justify-center h-12 w-12 rounded-full mb-5 ${feature.iconBgColor}`}
    >
      {feature.icon}
    </div>
    <h3 className='text-xl font-semibold text-black mb-2'>{feature.title}</h3>
    <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
  </div>
);

// const TrustSection: React.FC = () => {
export const TrustSection = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      id='trust'
      ref={ref}
      className='bg-[#E9E9E9]  rounded-t-[25px] md:rounded-t-[40px] text-black py-24 sm:py-32'
    >
      <div className='mx-auto max-w-[1550px] px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-[44px] md:text-[72px] lg:text-[82px] font-heading font-semibold uppercase'>
            Complete Data Confidence
          </h1>
          <p className='text-[18px] font-medium md:text-[24px] mx-auto max-w-3xl  text-black/70 leading-[1.4] mt-7 '>
            Data privacy by design (SOC2-ready, VPC deployment option). Built by clinical
            psychologists. Secure dual-LLM architecture.
          </p>
          <div className='mt-10'>
            <a
              href='https://trust.evro.ai/'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 md:px-8 py-3 md:py-4 hover:bg-[#00C4CC] hover:text-black transition-all duration-300 ease-in-out text-[18px] md:text-[20px] font-semibold text-white bg-black rounded-lg'
            >
              See Trust Centre
            </a>
          </div>
        </div>

        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2'>
            {featuresData.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default TrustSection;
