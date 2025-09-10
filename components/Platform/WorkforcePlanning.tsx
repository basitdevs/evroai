import React from "react";

const WorkforcePlanning: React.FC = () => {
  return (
    <section className='py-16 lg:py-24'>
      <div className='max-w-[1550px] mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center'>
          <div className='text-center lg:text-left'>
            <div className='flex items-center justify-center lg:justify-start'>
              <p className='text-lg font-semibold text-[#00C4CC]'>Workforce Planning</p>
              <span className='ml-3 inline-block bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full'>
                Coming Soon
              </span>
            </div>
            <h1 className='mt-4 text-4xl lg:text-5xl font-bold font-heading text-gray-900 leading-tight'>
              Skill Mapping, Simplified—and Always Up to Date
            </h1>
            <h2 className='mt-6 text-lg lg:text-xl text-gray-900 max-w-2xl mx-auto lg:mx-0 leading-relaxed'>
              Evro turns your meeting transcripts (and other data in real time) into a living skills
              map—automatically updating what your team uses, what they excel in, and where the gaps
              are—with total confidentiality and zero manual upkeep.
            </h2>
            <p className='mt-6 text-base text-gray-700 max-w-2xl mx-auto md:text-lg lg:mx-0'>
              Evro auto-builds and updates your organisation’s skill matrix, from one-on-one chats
              to team meetings, by classifying the skills used as they happen. When employees upload
              a meeting transcript Evro will tag who’s using which skills and anonymise the data to
              preserve privacy. You’ll get a clear, real-time inventory of capabilities, perfect for
              workforce planning, career mobility, and spotting rising stars, all without breaching
              privacy or requiring tedious manual entries.
            </p>
          </div>

          <div className='relative flex items-center justify-center min-h-[400px] lg:min-h-[550px]'>
            <div className='absolute w-full h-full max-w-md max-h-lg bg-cyan-400/10 rounded-full blur-3xl' />

            <img
              src='/imgs/EvroMobileHeroShot.png'
              alt='Evro skills mapping displayed on a mobile phone screen'
              className='relative z-10 w-full h-full max-w-sm max-h-[400px] md:max-h-[600px] object-contain drop-shadow-2xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkforcePlanning;
