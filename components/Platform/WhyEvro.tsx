import React from "react";
import { FiShield, FiDollarSign, FiShare2 } from "react-icons/fi";

// --- Component Data ---
// Managing the key benefits in an array keeps the code clean and easy to update.
const whyEvroBenefits = [
  {
    icon: <FiShield size={28} />,
    title: "Turn Compliance Into Performance",
    description:
      "Turn psychosocial safety obligations into measurable business benefits. Evro automates WHS risk management and reporting, reducing litigation risk while improving employee wellbeing.",
  },
  {
    icon: <FiDollarSign size={28} />,
    title: "ROI You Can Prove",
    description:
      "Go beyond engagement scores. Evro quantifies how leadership, trust, and skills impact attrition, productivity, and performance, giving leaders data they can take to executives or board level.",
  },
  {
    icon: <FiShare2 size={28} />,
    title: "One Integrated Ecosystem",
    description:
      "Most tools are silos. Evro unifies coaching, learning, and organisational intelligence into one continuous system so individual growth and business performance reinforce each other in real time.",
  },
];

// --- The React Component ---
const WhyEvro: React.FC = () => {
  return (
    <section className='bg-gray-50/70 py-16 lg:py-24'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* --- Main Heading Block --- */}
        <div className='text-center max-w-4xl mx-auto'>
          <p className='text-lg font-semibold text-cyan-600'>Why Evro</p>
          <h1 className='mt-4 text-4xl lg:text-5xl font-bold font-heading text-gray-900 leading-tight'>
            PhD-level Psychology at the Core
          </h1>
          <h2 className='mt-6 text-lg lg:text-xl text-gray-600 leading-relaxed'>
            Built by PhD clinical psychologists, Evro applies evidence-based methods to coaching and
            analytics. That means every interaction is empathetic, ethical, and proven to drive real
            behaviour change.
          </h2>
        </div>

        {/* --- Benefit Cards Grid --- */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          {whyEvroBenefits.map((benefit, index) => (
            <div
              key={index}
              className='bg-white p-8 rounded-xl border border-gray-200/80 shadow-sm'
            >
              <div className='text-cyan-600 mb-4'>{benefit.icon}</div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>{benefit.title}</h3>
              <p className='text-gray-600 leading-relaxed'>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEvro;