import React from "react";
import { GoArrowRight } from "react-icons/go";

const aiGapClosed = [
  {
    title: "AI.",
    text: "The technology no one can afford to ignore-buy most struggle to implement securely, understand fully, or use effectively.",
  },
  {
    title: "GAP.",
    text: "The Gap between technology, skills and people resources.",
  },
  {
    title: "CLOSED.",
    text: "Real solutions. Real people. Real outcomes.",
  },
];

const revolutionizingText = [
  "You don’t need theoretical AI.",
  "You don’t need legacy apps disguised as AI.",
  'You need "real" AI that works now—AI that delivers real value to your enterprise today, no matter where you are on your digital transformation journey.',
];

const heroFeatures = [
  {
    title: "No calls to HR",
    text: "AI provides support for complex and high stakes conversations.",
    img: "/imgs/orange-sphere.png",
  },
  {
    title: "No boring L&D",
    text: "Skills are taught in the flow of work via Teams and Slack using AI coaching. ",
    img: "/imgs/aqua-cube.png",
  },
  {
    title: "No waiting",
    text: "No waiting for performance reviews. AI provides instant objective data based on the actual situation.",
    img: "/imgs/purple-hemisphere.png",
  },
];

export const Problem = React.forwardRef<HTMLElement, { id: string }>(({ id }, ref) => {
  return (
    <div
      ref={ref}
      id={id}
      className='w-full bg-[#0d0d0d] rounded-t-[40px] text-white overflow-hidden'
    >
      <main className='w-full mx-auto'>
        <div className='py-20 md:py-24'>
          {/* Section 1: AI. GAP. CLOSED. */}
          <section className='max-w-[1550px] px-8 sm:px-6  mx-auto flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-20 pb-24 lg:pb-32'>
            {aiGapClosed.map((item, i) => (
              <div className='column' key={i}>
                <h3 className='font-heading text-[36px] lg:text-[56px] font-simebold uppercase'>
                  {item.title}
                </h3>
                <p className='text-[18px] text-white leading-relaxed max-w-md'>{item.text}</p>
              </div>
            ))}
          </section>

          {/* Section 2: REVOLUTIONIZING */}
          <section className='pb-24 lg:pb-32 max-w-[1550px] px-8 sm:px-6 mx-auto'>
            <h1 className='font-heading text-[44px] lg:text-[72px] font-simebold uppercase leading-[1] tracking-normal mb-10 max-w-[750px]'>
              Traditional HR Tools Can’t Keep Up with Real-World Team Dynamics
            </h1>
            <div className='max-w-[455px]'>
              {/* {revolutionizingText.map((txt, i) => ( */}
              <p
                // key={i}
                className={`text-[18px] text-white leading-[1.4] mt-7 `} // ${i === 2 ? "mt-7" : ""}
              >
                Performance reviews are slow. Surveys are skewed. Traditional L&D doesn’t drive real
                change. Meanwhile, collaboration problems silently drain productivity and burn out
                your top talent.
              </p>
            </div>
          </section>

          {/* Section 3: INTRODUCING HERO */}
          <section id='product-section' className='relative'>
            <div className='md:hidden max-h-[357px] h-auto z-40 w-full flex justify-end'>
              <img
                src='https://www.dayos.com/_vercel/image?url=https:%2F%2Fa.storyblok.com%2Ff%2F314917%2F2782x2124%2F4b6cc5367e%2Flatest.png%2Fm%2Ffilters:format(webp):quality(85)&w=1536&q=85'
                alt='Hero platform dashboard displayed on a laptop.'
                className='max-h-[357px] h-auto z-40'
              />
            </div>
            <div className='hero-text-content max-w-[1550px] px-8 sm:px-6 mx-auto pt-10 md:pt-0 z-50'>
              <h2 className='font-heading text-[44px] md:text-[72px] font-simebold uppercase leading-[1.05] tracking-tight mb-9 max-w-4xl'>
                Introducing
                <br />
                Evro
              </h2>
              <div className='space-y-4 max-w-[555px]'>
                <p className='text-[24px] text-white leading-[1.2]'>
                  Evro turns every team member into a better collaborator—automatically, every day.
                </p>
                <p className='text-[18px] text-white leading-[1.4] sm:leading-[1.2]'>
                  Whereas generic AI copilots help to do routine or repetitive tasks, Evro is
                  designed to help staff understand how to collaborate at their best, resolve
                  communication barriers and get work done faster and more enjoyably.
                </p>
              </div>
              {/* <a
                href='#book-intro'
                className='inline-block bg-white text-black font-bold text-base py-3 px-6 rounded-md mt-8 transition-all duration-300 hover:bg-neutral-200 hover:scale-105'
              >
                Book an intro
              </a> */}
            </div>
            <div className='lg:hidden max-h-[557px] h-auto z-40 w-full flex justify-end'>
              <img
                src='https://www.dayos.com/_vercel/image?url=https:%2F%2Fa.storyblok.com%2Ff%2F314917%2F2782x2124%2F4b6cc5367e%2Flatest.png%2Fm%2Ffilters:format(webp):quality(85)&w=1536&q=85'
                alt='Hero platform dashboard displayed on a laptop.'
                className='max-h-[557px] h-auto z-40 mt-14'
              />
            </div>
            <img
              src='https://www.dayos.com/_vercel/image?url=https:%2F%2Fa.storyblok.com%2Ff%2F314917%2F2782x2124%2F4b6cc5367e%2Flatest.png%2Fm%2Ffilters:format(webp):quality(85)&w=1536&q=85'
              alt='Hero platform dashboard displayed on a laptop.'
              className='hidden lg:block absolute top-0 right-0 w-[717px] h-auto z-10'
            />

            {/* Super charge section how it works */}
            <div className='mt-16 md:mt-48 max-w-[1550px] px-8 sm:px-6 mx-auto'>
              <div className='max-w-[515px]'>
                <h2 className='text-[28px] md:text-[46px] font-bold text-white leading-tight mb-6'>
                  Eliminate team friction. <br /> Unlock collaboration.
                </h2>
                <p className='text-lg md:text-[18px] max-w-[555px] text-white leading-relaxed mb-8'>
                  Evro gives every manager and employee an AI assistant that helps them to expertly
                  understand and fix team dynamics. Plus real time performance data for leadership
                  teams to unlock faster growth and better work.
                </p>
                {/* <a
                  href='/platform'
                  className='inline-flex items-center gap-2 bg-[#4f4f4f] text-white font-bold text-base py-3 px-6 rounded-lg transition-all duration-300 hover:bg-neutral-200 hover:scale-105'
                >
                  More details <GoArrowRight size={20} />
                </a> */}
              </div>
            </div>
          </section>

          {/* Section 4: HERO FEATURES */}
          <section className='max-w-[1550px] px-8 sm:px-6 mt-16 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10'>
            {heroFeatures.map((feat, i) => (
              <div className='feature-card' key={i}>
                <div className='w-[200px] h-[200px] my-3 flex justify-center items-center'>
                  <img src={feat.img} alt='' className='min-w-[317px] min-h-[317px] mb-10' />
                </div>
                <h4 className='font-heading text-3xl md:text-[48px] font-simebold uppercase mb-4'>
                  {feat.title}
                </h4>
                <p className='text-[20px] text-white leading-[1.4] max-w-[300px] md:max-w-max'>
                  {feat.text}
                </p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
});
