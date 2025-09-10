import React from "react";
import { FiCheck } from "react-icons/fi";

const list = [
  "Continuous feedback loops that make trust and dialogue the norm.",
  "Real-time coaching that develops leadership skills in the moment, not after the fact.",
  "Strategy that’s visible and actionable, so daily work connects to the big picture.",
  "Measurement and evidence that are automated, so leaders can see progress without the administrative burden.",
];

const FounderLetter: React.FC = () => {
  return (
    <section className=' py-16 pt-24 lg:py-24 lg:pt-40'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='founder-letter-frame'>
          <div className='relative z-10 bg-white rounded-[20px]  md:rounded-[28px] border-2 border-[#00C4CC]/50 p-8 md:p-12 shadow-xl'>
            <div className='text-center mb-12'>
              <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-stone-800 leading-tight'>
                A New Behavioural Intelligence System for Work
              </h1>
              <h2 className='mt-6 text-base md:text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed'>
                Our vision is a world where workplaces become catalysts of human flourishing, where
                every individual’s brilliance is recognised, amplified, and supported through
                empathy, self-awareness, and respect.
              </h2>
            </div>

            <hr className='border-[#00C4CC]/20' />

            <div className='mt-12 space-y-6 text-base md:text-lg text-stone-700 leading-relaxed'>
              <p>Dear Reader,</p>
              <p>
                I’m Elaine, co-founder of Evro. I wanted to write personally because the problem
                we’re solving is one I’ve seen—and felt—firsthand.
              </p>
              <p>
                High performance today is bottlenecked by the way organisations communicate.
                Meetings lose critical details. Context is scattered across emails, chats, and
                decks. Team dynamics quietly erode until misalignment and burnout set in. Leaders
                end up making decisions with stale data and fragmented insight.
              </p>
              <p>
                The numbers are staggering: $8.8 trillion in global costs from miscommunication,
                failed execution, and unresolved conflicts. But behind the numbers are
                people—talented, committed individuals whose brilliance gets dulled by environments
                that don’t support them.
              </p>
              <p>
                Most tools on the market address the symptoms. Dashboards you need to check.
                Coaching platforms you have to go out of your way to use. HR systems that track
                compliance but don’t actually touch the human dynamics that drive performance. They
                add noise. They don’t create clarity.
              </p>
              <p>
                At Evro, we’re starting from first principles. The foundation of any high-performing
                team is psychological safety—the ability to speak up, share ideas, disagree
                constructively, and still feel supported. Yet building that kind of safety
                consistently across an organisation is incredibly difficult. It requires
                self-awareness, emotional maturity, and communication skills that most of us were
                never taught to do well.
              </p>
              <p>
                That’s where we come in. Evro makes these “soft” human skills measurable, coachable,
                and scalable. We’re creating a real-time, intelligent layer inside the flow of
                work—a kind of behavioural intelligence system for your organisation. Instead of
                being another tool you need to remember to use, Evro amplifies the conversations
                already happening, helping teams become smarter, faster, and more connected.
              </p>
              <p>
                Our mission is simple but ambitious: to transform workplaces into catalysts for
                human flourishing. By combining AI with clinical psychology, we’re designing systems
                that don’t just reduce burnout or resolve conflict—they unlock the full potential of
                every individual.
              </p>
              <p>Here’s what that looks like in practice:</p>
              <ul className='space-y-4 pt-2'>
                {list.map((l, i) => (
                  <li key={i} className='flex items-start'>
                    <span className='text-[#00C4CC] mt-1 mr-4 flex-shrink-0'>
                      <FiCheck size={20} />
                    </span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
              <p>
                We’re learning alongside the teams who use Evro every day. If you’re here reading
                this, you might care about the same things we do, so thanks for your part in that.
              </p>

              <div className='mt-12 pt-8 border-t border-[#00C4CC]/20'>
                <p className='italic'>Warmly,</p>
                <p className='mt-6 text-xl font-semibold text-stone-800'>Elaine Lee</p>
                <p className='text-stone-600'>Co-Founder, Evro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderLetter;
