import React from "react";

export interface SolutionPageProps {
  title: string;
  h1: string;
  h2: string;
  ctaText: string;
  ctaLink: string;
  visual: string;
  visualAlt: string;
  useCasesTitle: string;
  useCases: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  accentColor: string;
}

const SolutionPageLayout: React.FC<SolutionPageProps> = ({
  title,
  h1,
  h2,
  ctaText,
  ctaLink,
  visual,
  visualAlt,
  useCasesTitle,
  useCases,
  accentColor,
}) => {
  return (
    <section className='py-16 pt-28 lg:py-24 lg:pt-40'>
      <div className='max-w-[1550px] mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div>
            <p className='text-lg font-semibold' style={{ color: "#00C4CC" }}>
              {title}
            </p>
            <h1 className='mt-4 text-[44px] md:text-[72px] lg:text-[82px] font-heading font-semibold uppercase text-black tracking-normal leading-[1]'>
              {h1}
            </h1>
            <p className='mt-4 md:mt-8 text-[18px] mb-12 font-medium md:text-[24px] text-black/80 leading-[1.3] md:max-w-[80%]'>
              {h2}
            </p>
            <a
              href={ctaLink}
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 md:px-8 py-3 md:py-4 hover:text-black transition-all duration-300 ease-in-out text-[18px] md:text-[20px] font-semibold text-white bg-black rounded-lg'
              style={
                {
                  "--hover-color": "#00C4CC",
                } as React.CSSProperties
              }
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#00C4CC")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "black")}
            >
              {ctaText}
            </a>
          </div>

          <div className='relative w-full h-[400px] lg:h-[550px] flex items-end justify-center'>
            <img
              src={visual}
              alt={visualAlt}
              className='relative z-10 w-full h-full object-contain drop-shadow-2xl'
            />
          </div>
        </div>

        <div className='mt-20 lg:mt-40'>
          <h2 className='text-4xl md:text-6xl font-bold font-heading text-center text-gray-900'>
            {useCasesTitle}
          </h2>

          <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {useCases.map((useCase, index) => (
              <div key={index} className='bg-gray-50/70 p-6 rounded-xl border border-gray-200/80'>
                <div className='mb-4' style={{ color: "#00C4CC" }}>
                  {useCase.icon}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>{useCase.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionPageLayout;
