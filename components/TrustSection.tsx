import React from "react";
import { FiLock, FiShield, FiUsers } from "react-icons/fi";
import { TbCertificate } from "react-icons/tb";

const featuresData = [
  {
    icon: <TbCertificate size={24} />,
    title: "SOC-2 Ready",
    description: "Evro AI is committed to meeting SOC2 standards for security and reliability.",
    iconBgColor: "bg-blue-900/50 text-blue-400",
  },
  {
    icon: <FiLock size={24} />,
    title: "SSO/SAML",
    description: "Use SSO to sign up and login securely with your teams existing credentials.",
    iconBgColor: "bg-yellow-900/50 text-yellow-400",
  },
  {
    icon: <FiShield size={24} />,
    title: "GDPR Ready",
    description:
      "Evro is committed towards full compliance with GDPR to ensure data privacy and security for everyone.",
    iconBgColor: "bg-indigo-900/50 text-indigo-400",
  },
  {
    icon: <FiUsers size={24} />,
    title: "PhD-level Team",
    description:
      "Our team is staffed with PhD level clinical psychologists and security experienced staff from leading companies like ZipCo, Wisr and ANZ bank.",
    iconBgColor: "bg-emerald-900/50 text-emerald-400",
  },
];

const FeatureCard: React.FC<{ feature: any }> = ({ feature }) => (
  <div className='bg-gray-800/50 border border-gray-700 p-6 rounded-2xl flex flex-col items-start transition-all duration-300 hover:bg-gray-800 hover:border-gray-600'>
    <div
      className={`flex items-center justify-center h-12 w-12 rounded-full mb-5 ${feature.iconBgColor}`}
    >
      {feature.icon}
    </div>
    <h3 className='text-xl font-semibold text-white mb-2'>{feature.title}</h3>
    <p className='text-gray-400 leading-relaxed'>{feature.description}</p>
  </div>
);

const TrustSection: React.FC = () => {
  return (
    <section id='trust' className='bg-black text-white py-24 sm:py-32'>
      <div className='mx-auto max-w-[1550px] px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-[44px] lg:text-[72px] font-simebold leading-[1] tracking-normal'>
            Complete Data Confidence
          </h1>
          <p className='text-[18px] font-medium md:text-[24px] mx-auto max-w-3xl  text-white/70 leading-[1.4] mt-7 '>
            Data privacy by design (SOC2-ready, VPC deployment option). Built by clinical
            psychologists. Secure dual-LLM architecture.
          </p>
          <div className='mt-10'>
            <a
              href='https://trust.evro.ai/'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 md:px-8 py-3 md:py-4 hover:bg-[#00C4CC] hover:text-black transition-all duration-300 ease-in-out text-[18px] md:text-[20px] font-semibold text-black bg-white rounded-lg'
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
};

export default TrustSection;
