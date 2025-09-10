import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

// --- Component Data ---
// All content is managed here, making it easy to update the steps.
const learningSteps = [
  {
    title: "Learn the Concept",
    description1:
      "Bite-sized L&D conversations with AI on leadership, communication, and human skills.",
    description2:
      "Evro is trained on the approaches from the best and brightest in each field and then cross checked with your organisations frameworks, policies and goals.",
  },
  {
    title: "Explore with AI",
    description1: 'Ask questions in plain English (“How do I give feedback without sounding harsh?”).',
    description2:
      "Evro explains the topic, shares best practices, and adapts examples to your team’s context.",
  },
  {
    title: "Practise in Realistic Scenarios",
    description1:
      "Live role-play and rehearsal with AI assistants (e.g., Feedback Coach, High-Stakes Conversation Coach).",
    description2: "Safely test out different approaches before using them with your team.",
  },
  {
    title: "Apply in the Moment",
    description1:
      "AI nudges can be set to appear before and after meetings to prepare you or provide accurate feedback.",
    description2: "Skills are reinforced exactly when you need them, not weeks later.",
  },
  {
    title: "Continuous Feedback & Growth",
    description1: "Post-meeting insights highlight what worked and where to improve.",
    description2:
      "Data flows into your career pathways and skill inventory, helping you track progress and stay aligned with organisational goals.",
  },
];

// --- The Accordion Item Sub-Component ---
// Breaking this out makes the main component cleaner.
interface AccordionItemProps {
  step: number;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  step,
  title,
  children,
  isOpen,
  onClick,
}) => {
  return (
    <div className='border-b border-gray-200'>
      <button
        onClick={onClick}
        className='flex items-center justify-between w-full py-6 text-left group'
      >
        <div className='flex items-center gap-6'>
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold transition-colors duration-300 ${
              isOpen
                ? "bg-cyan-600 text-white"
                : "bg-gray-200 text-gray-700 group-hover:bg-cyan-100"
            }`}
          >
            {step}
          </div>
          <h3
            className={`text-xl lg:text-2xl font-semibold transition-colors duration-300 ${
              isOpen ? "text-cyan-600" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
        </div>
        <div className='text-gray-500'>
          {isOpen ? <FiMinus size={24} /> : <FiPlus size={24} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className='pb-6 pl-16'>{children}</div>
      </div>
    </div>
  );
};

// --- The Main Section Component ---
const IntegratedLearning: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first item to be open

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Allows closing the open item
  };

  return (
    <section className='bg-white py-16 lg:py-24'>
      <div className='max-w-4xl mx-auto px-6 lg:px-8'>
        {/* --- Main Heading Block --- */}
        <div className='text-center'>
          <p className='text-lg font-semibold text-cyan-600'>Integrated Learning</p>
          <h1 className='mt-4 text-4xl lg:text-5xl font-bold font-heading text-gray-900 leading-tight'>
            Learn by chatting with an expert, not slides and courses.
          </h1>
        </div>

        {/* --- Accordion Flow Diagram --- */}
        <div className='mt-16'>
          {learningSteps.map((step, index) => (
            <AccordionItem
              key={index}
              step={index + 1}
              title={step.title}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            >
              <div className='space-y-4 text-gray-600 leading-relaxed'>
                <p>{step.description1}</p>
                <p>{step.description2}</p>
              </div>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegratedLearning;