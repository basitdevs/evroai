import React from "react";
import { FiShield, FiUsers, FiBookOpen, FiHeart } from "react-icons/fi";

const valuesData = [
  {
    icon: <FiShield size={28} />,
    title: "Trust",
    description: "Data privacy and ethical AI at the core.",
  },
  {
    icon: <FiUsers size={28} />,
    title: "Inclusion",
    description: "Tools designed to elevate every voice.",
  },
  {
    icon: <FiBookOpen size={28} />,
    title: "Evidence",
    description: "Grounded in clinical psychology and organisational science.",
  },
  {
    icon: <FiHeart size={28} />,
    title: "Human-first AI",
    description: "We only build AI that we would use on ourselves, friends and families.",
  },
];

const MissionAndValues: React.FC = () => {
  return (
    <section className='py-16 lg:py-24'>
      <div className='max-w-[1550px] mx-auto px-6 lg:px-8'>
        <div className='text-center max-w-6xl mx-auto'>
          <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold font-heading text-black leading-tight'>
            <span className='text-[#00C4CC]'>Mission:</span> To build the human behavioural
            intelligence system for modern organisations, making psychological safety measurable and
            scalable.
          </h1>
        </div>

        <div className='mt-20 lg:mt-24'>
          <div className='text-center'>
            <h2 className='text-4xl lg:text-5xl font-bold font-heading text-black'>Values</h2>
          </div>

          <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {valuesData.map((value, index) => (
              <div
                key={index}
                className='bg-white p-8 rounded-2xl border border-gray-200 text-center'
              >
                <div className='inline-flex items-center justify-center text-[#00C4CC] bg-[#00C4CC]/20 p-4 rounded-full mb-6'>
                  {value.icon}
                </div>
                <h3 className='text-2xl font-semibold text-black'>{value.title}</h3>
                <p className='mt-3 text-gray-600  text-lg lg:text-xl leading-relaxed'>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndValues;
