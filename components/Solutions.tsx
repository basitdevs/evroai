import React, { useState, useEffect } from "react";
import { FiUsers, FiAward, FiShield, FiArrowRight } from "react-icons/fi"; // Using react-icons for icons

// --- Component Data ---
// All your content is managed here. You can easily add, remove, or edit solutions.
const solutionsData = [
  {
    id: "teamMembers",
    role: "For Team Members",
    title: "Work with confidence.",
    description:
      "Prepare for tough conversations, get accurate, private performance feedback and grow your career skills.",
    ctaText: "Solutions For Team Members",
    ctaLink: "/solutions", // Replace with your actual link
    visual: {
      imageSrc: "/imgs/solutions/evro-middle-eastern-male-employee-smiling.webp", // IMPORTANT: Replace with your image path
      altText: "A male employee smiling, representing a team member",
      card: {
        icon: <FiUsers size={20} />,
        title: "Career Growth",
        description: "Leverage AI for personalized feedback and skill development.",
        status: "Publicly Available",
        isPopular: false,
      },
    },
    accentColor: "rgba(230, 245, 233, 1)", // A light green
  },
  {
    id: "teamLeaders",
    role: "For Team Leaders",
    title: "Lead like the best.",
    description:
      "Build psychological safety, reduce conflict, and unlock collaboration with Evro’s AI assistants.",
    ctaText: "Solutions For Team Leaders",
    ctaLink: "/solutions", // Replace with your actual link
    visual: {
      imageSrc: "/imgs/solutions/evro-chinese-female-employee-smiling.webp", // IMPORTANT: Replace with your image path
      altText: "A female employee smiling, representing a team leader",
      card: {
        icon: <FiAward size={20} />,
        title: "Team Collaboration",
        description: "Enhance team dynamics and foster a collaborative environment.",
        status: "Popular",
        isPopular: true,
      },
    },
    accentColor: "rgba(227, 242, 253, 1)", // A light blue
  },
  {
    id: "peopleCulture",
    role: "For People & Culture",
    title: "Turn compliance into performance.",
    description:
      "Automate psychosocial risk management, measure ROI on people programs, and build a high performance culture.",
    ctaText: "Solutions For People & Culture Teams",
    ctaLink: "/solutions", // Replace with your actual link
    visual: {
      imageSrc: "/imgs/solutions/evro-pacificislander-female-employee-smiling.webp", // IMPORTANT: Replace with your image path
      altText: "A female employee smiling, representing People & Culture",
      card: {
        icon: <FiShield size={20} />,
        title: "Risk Management",
        description: "Automate compliance and psychosocial risk reporting.",
        status: "Enterprise Only",
        isPopular: false,
      },
    },
    accentColor: "rgba(232, 230, 245, 1)", // A light purple
  },
];

// --- The React Component ---
const Solutions: React.FC = () => {
  // State to track the currently hovered/active role
  const [activeSolutionId, setActiveSolutionId] = useState<string>(solutionsData[1].id); // Default to the popular one

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // If the user is hovering, do nothing and don't start the timer.
    if (isHovered) {
      return;
    }

    // Set up an interval to change the solution every 5 seconds.
    const intervalId = setInterval(() => {
      setActiveSolutionId((prevId) => {
        const currentIndex = solutionsData.findIndex((s) => s.id === prevId);
        const nextIndex = (currentIndex + 1) % solutionsData.length; // Loop back to the start
        return solutionsData[nextIndex].id;
      });
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup function: this will clear the interval when the component
    // unmounts or when the isHovered state changes, preventing memory leaks.
    return () => clearInterval(intervalId);
  }, [isHovered]); // This effect re-runs whenever the isHovered state changes.
  // --- NEW CODE E

  const activeSolution = solutionsData.find((s) => s.id === activeSolutionId) || solutionsData[0];

  return (
    <section className=' py-20 px-4 pb-0'>
      <div className='max-w-[1550px] mx-auto'>
        {/* Main Headings */}
        <div className='text-center mb-16'>
          <h1 className='text-[44px] font-heading lg:text-[72px] font-simebold uppercase leading-[1] tracking-normal mb-10 mx-auto max-w-[1000px]'>
            AI that understands you, your team and your goals.
          </h1>
          <p className='text-[18px] font-medium max-w-[1000px] text-center mx-auto md:text-[24px] text-black/70 leading-[1.4] mt-7'>
            While standard AI can help you think through a work problem, Evro knows the bigger
            picture: your goals, your team’s working styles, and your organisation’s objectives.
          </p>
        </div>

        {/* Interactive Solutions Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column: Visuals */}
          <div
            className='relative w-full h-[500px] rounded-2xl transition-colors duration-500 ease-in-out'
            style={{ backgroundColor: activeSolution.accentColor }}
          >
            {solutionsData.map((solution) => (
              <img
                key={solution.id}
                src={solution.visual.imageSrc}
                alt={solution.visual.altText}
                className={`absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-500 ease-in-out ${
                  activeSolutionId === solution.id ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Visual Card Overlay */}
            {/* <div className='absolute bottom-8 left-8 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-200/50 w-[300px]'>
              <div className='flex items-center justify-between mb-2'>
                <div className='p-2 bg-blue-100 text-blue-600 rounded-full'>
                  {activeSolution.visual.card.icon}
                </div>
                {activeSolution.visual.card.isPopular && (
                  <span className='text-xs font-semibold bg-blue-600 text-white px-3 py-1 rounded-full'>
                    Popular
                  </span>
                )}
              </div>
              <h4 className='font-bold text-gray-800 mb-1'>{activeSolution.visual.card.title}</h4>
              <p className='text-sm text-gray-600 mb-3'>{activeSolution.visual.card.description}</p>
              <div className='flex items-center gap-2 text-xs text-gray-500'>
                <FiUsers />
                <span>{activeSolution.visual.card.status}</span>
              </div>
            </div> */}
          </div>

          {/* Right Column: Content */}
          <div>
            <h2 className='text-5xl font-heading text-gray-900 mb-8'>Solutions by role</h2>
            <div className='flex flex-col border-t border-gray-200'>
              {solutionsData.map((solution) => (
                <div
                  key={solution.id}
                  className='py-6 border-b border-gray-200 cursor-pointer'
                  onMouseEnter={() => setActiveSolutionId(solution.id)}
                >
                  <h3 className='text-xl font-medium text-gray-800'>{solution.role}</h3>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeSolutionId === solution.id ? "max-h-40 mt-4" : "max-h-0"
                    }`}
                  >
                    <h4 className='text-2xl font-semibold text-gray-900'>{solution.title}</h4>
                    <p className='text-gray-600 my-3'>{solution.description}</p>
                    <a
                      href={solution.ctaLink}
                      className='font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-2'
                    >
                      {solution.ctaText}
                      <FiArrowRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
