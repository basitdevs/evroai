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

const exampleAssistants = [
  {
    icon: (
      <span className='text-[#00C4CC]'>
        <FiUsers size={24} />
      </span>
    ),
    title: "Coworker Communication",
    description: "Learn the communication approach that will work best with each colleague.",
  },
  {
    icon: (
      <span className='text-[#00C4CC]'>
        <FiMessageSquare size={24} />
      </span>
    ),
    title: "Practice High Stakes Conversations",
    description: "Role play a complex conversation and get expert feedback.",
  },
  {
    icon: (
      <span className='text-[#00C4CC]'>
        <FiClipboard size={24} />
      </span>
    ),
    title: "Meeting Prep",
    description: "Get talking points and create perfect agendas for your meetings.",
  },
  {
    icon: (
      <span className='text-[#00C4CC]'>
        <FiCheckSquare size={24} />
      </span>
    ),
    title: "Private Performance Review",
    description: "Upload a meeting transcript and understand your performance confidentially.",
  },
  {
    icon: (
      <span className='text-[#00C4CC]'>
        <FiStar size={24} />
      </span>
    ),
    title: "Discover Your Working Style",
    description: "Answer quick questions and get insights into how you can work at your best.",
  },
  {
    icon: (
      <span className='text-[#00C4CC]'>
        <FiHeart size={24} />
      </span>
    ),
    title: "Motivational Feedback",
    description: "Deliver feedback that motivates and develops your team.",
  },
  {
    icon: (
      <span className='text-[#00C4CC]'>
        <FiHelpCircle size={24} />
      </span>
    ),
    title: "Fix People Problems",
    description: "Troubleshoot and find solutions to complex interpersonal issues and get unstuck.",
  },
  {
    icon: (
      <span className='text-[#00C4CC]'>
        <FiNavigation size={24} />
      </span>
    ),
    title: "Plan Your Career Path",
    description: "Take a minute to figure out your career options and your next move.",
  },
  {
    icon: (
      <span className='text-[#00C4CC]'>
        <FiSmile size={24} />
      </span>
    ),
    title: "Neurodivergent Assistant",
    description:
      "Expert support for neurodivergent workers to understand others and work with less stress.",
  },
];

// const AiAssistantsLibrary: React.FC = () => {
export const AiAssistantsLibrary = React.forwardRef<HTMLElement>((_, ref) => {

  return (
    <section ref={ref} className='bg-[#E9E9E9] rounded-t-[25px] md:rounded-t-[40px] py-16 lg:py-24'>
      <div className='max-w-[1550px] mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 lg:mb-32'>
          <div
            className='relative w-full h-[400px] lg:h-[550px] flex items-center justify-center'
            data-aos='fade-right'
          >
            <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00C4CC]/10 via-[#E9E9E9]/0 to-[#E9E9E9]/0 z-0' />
            <img
              src='/imgs/evro-southeastasian-male-smiling-employee.webp'
              alt='A smiling employee representing an AI copilot user'
              className='relative z-10 w-full h-full object-contain drop-shadow-2xl'
            />
          </div>

          <div data-aos='fade-left'>
            <p className='text-lg mb-1 font-semibold text-[#00C4CC]'>AI Assistants Library</p>
            <h1 className='text-[44px] md:text-[72px] lg:text-[82px] font-heading font-semibold uppercase text-gray-900 tracking-normal leading-[1]'>
              A copilot for every employee, in the flow of work
            </h1>
            <h2 className='mt-4 md:mt-8 text-[18px] font-medium md:text-[24px] text-gray-700 leading-[1.3] md:max-w-[80%]'>
              Evro provides confidential AI assistance for everything from meeting prep,
              understanding personal performance and rehearsing high stakes conversations.
            </h2>
          </div>
        </div>

        <div className='max-w-4xl mx-auto text-center' data-aos='fade-up'>
          <p className='text-gray-700 text-base md:text-lg'>
            Standard AI is great for answering questions but it doesn’t understand your team and
            your colleagues in depth. It also doesn’t understand your goals, your teams or your
            organisation’s objectives. That means that answers can be generic or not aligned with
            all of the data and context for your organisation. Evro is trained to understand all of
            this so that the assistance you get is aligned with your goals and based on the full
            intelligence of your organisation.
          </p>
          <h2 className='mt-16 text-[44px] md:text-[72px] lg:text-[82px] font-heading font-semibold uppercase text-gray-900'>
            Example AI Assistants
          </h2>
        </div>

        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {exampleAssistants.map((assistant, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300'
              data-aos='fade-up'
              data-aos-delay={index * 100}
            >
              <div className='mb-4'>{assistant.icon}</div>
              <h4 className='text-lg font-semibold text-gray-900'>{assistant.title}</h4>
              <p className='mt-2 text-sm text-gray-600 leading-relaxed'>{assistant.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default AiAssistantsLibrary;
