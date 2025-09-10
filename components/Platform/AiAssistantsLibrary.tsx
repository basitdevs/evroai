import React from "react";
import {
  FiUsers,
  FiMessageSquare,
  FiClipboard,
  FiCheckSquare,
  FiStar,
  FiHeart,
  FiHelpCircle,
  FiNavigation,
  FiSmile,
} from "react-icons/fi";

// 2. Data for the detailed grid of example AI assistants
const exampleAssistants = [
  {
    icon: <FiUsers size={24} />,
    title: "Coworker Communication",
    description: "Learn the communication approach that will work best with each colleague.",
  },
  {
    icon: <FiMessageSquare size={24} />,
    title: "Practice High Stakes Conversations",
    description: "Role play a complex conversation and get expert feedback.",
  },
  {
    icon: <FiClipboard size={24} />,
    title: "Meeting Prep",
    description: "Get talking points and create perfect agendas for your meetings.",
  },
  {
    icon: <FiCheckSquare size={24} />,
    title: "Private Performance Review",
    description: "Upload a meeting transcript and understand your performance confidentially.",
  },
  {
    icon: <FiStar size={24} />,
    title: "Discover Your Working Style",
    description: "Answer quick questions and get insights into how you can work at your best.",
  },
  {
    icon: <FiHeart size={24} />,
    title: "Motivational Feedback",
    description: "Deliver feedback that motivates and develops your team.",
  },
  {
    icon: <FiHelpCircle size={24} />,
    title: "Fix People Problems",
    description: "Troubleshoot and find solutions to complex interpersonal issues and get unstuck.",
  },
  {
    icon: <FiNavigation size={24} />,
    title: "Plan Your Career Path",
    description: "Take a minute to figure out your career options and your next move.",
  },
  {
    icon: <FiSmile size={24} />,
    title: "Neurodivergent Assistant",
    description:
      "Expert support for neurodivergent workers to understand others and work with less stress.",
  },
];

// --- The React Component ---
const AiAssistantsLibrary: React.FC = () => {
  return (
    <section className='py-16 lg:py-24'>
      <div className='max-w-[1550px] mx-auto px-6 lg:px-8'>
        {/* --- Main Heading Block --- */}
        <div className='text-center max-w-4xl mx-auto'>
          <p className='text-lg font-semibold text-cyan-600'>AI Assistants Library</p>
          <h1 className='mt-4 text-4xl lg:text-5xl font-bold font-heading text-gray-900 leading-tight'>
            A copilot for every employee, in the flow of work
          </h1>
          <h2 className='mt-6 text-lg lg:text-xl text-gray-600 leading-relaxed'>
            Evro provides confidential AI assistance for everything from meeting prep, understanding
            personal performance and rehearsing high stakes conversations.
          </h2>
        </div>

        {/* --- Microcopy and Examples Divider --- */}
        <div className='mt-20 lg:mt-24 max-w-4xl mx-auto text-center'>
          <p className='text-gray-600'>
            Standard AI is great for answering questions but it doesn’t understand your team and
            your colleagues in depth. It also doesn’t understand your goals, your teams or your
            organisation’s objectives. That means that answers can be generic or not aligned with
            all of the data and context for your organisation. Evro is trained to understand all of
            this so that the assistance you get is aligned with your goals and based on the full
            intelligence of your organisation.
          </p>
          <h2 className='mt-16 text-3xl lg:text-4xl font-bold font-heading text-gray-900'>
            Example AI Assistants
          </h2>
        </div>

        {/* --- Example AI Assistants Grid --- */}
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {exampleAssistants.map((assistant, index) => (
            <div key={index} className='bg-gray-50/80 p-6 rounded-xl border border-gray-200/80'>
              <div className='text-cyan-600 mb-4'>{assistant.icon}</div>
              <h4 className='text-lg font-semibold text-gray-900'>{assistant.title}</h4>
              <p className='mt-2 text-sm text-gray-600 leading-relaxed'>{assistant.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiAssistantsLibrary;
