import { solutionsData } from "@/lib/data";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const [activeRoleId, setActiveRoleId] = useState<string>(solutionsData[2].id);

  return (
    <section className='py-16 pt-20 lg:py-24 lg:pt-36 min-h-screen flex items-center justify-center'>
      <div className='max-w-[1550px] mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-stretch overflow-hidden rounded-3xl shadow-subtle'>
          <div className='relative w-full h-[350px] md:h-[450px] lg:h-auto bg-[#00C4CC]/5 flex items-end justify-center p-8 pb-0 overflow-hidden'>
            <div className='absolute -bottom-20 -left-20 w-48 h-48 bg-[#00C4CC]/20 rounded-full' />
            <div className='absolute -top-24 -right-12 w-72 h-72 bg-[#00C4CC]/20 rounded-full' />
            <img
              src='/imgs/solutions/evro-aboriginal-male-employee-smiling.webp'
              alt='An employee smiling, representing team solutions'
              className='relative z-10 w-full h-full max-h-[600px] mb-[-20px] md:mb-0 object-contain drop-shadow-2xl'
            />
          </div>

          <div className='flex flex-col bg-gray-50/40'>
            <div className='p-8 lg:p-12 pb-6'>
              <h2 className=' text-4xl lg:text-5xl font-medium font-heading text-gray-900'>
                Solutions By Role
              </h2>
              <p className='mt-3 text-lg text-gray-600 max-w-lg'>
                AI that supercharges every team with execution intelligence.
              </p>
            </div>

            <div className='flex-grow flex flex-col border-t border-gray-100'>
              {solutionsData.map((solution) => (
                <Link
                  to={solution.id}
                  href={solution.href}
                  onMouseEnter={() => setActiveRoleId(solution.id)}
                  className={`group flex justify-between items-center py-5 px-6 border-b border-gray-100 transition-colors duration-300 ease-in-out ${
                    activeRoleId === solution.id ? "bg-[#00C4CC]/6" : "bg-transparent"
                  }`}
                >
                  <span className='text-xl font-medium text-gray-800'>{solution.title}</span>

                  <span
                    className={`transition-all duration-300 ease-in-out group-hover:text-gray-600 ${
                      activeRoleId === solution.id
                        ? "opacity-100 translate-x-0 text-gray-600"
                        : "opacity-0 -translate-x-3 text-gray-400"
                    }`}
                  >
                    <FiArrowRight size={24} />
                  </span>
                </Link>
              ))}
              <div className='flex-grow'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
