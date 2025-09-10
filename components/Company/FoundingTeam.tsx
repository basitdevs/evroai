import React from "react";
import { FiLinkedin } from "react-icons/fi";

const foundingTeamData = [
  {
    name: "Elaine Lee",
    role: "Founder | Co-CEO, Evro",
    linkedinUrl: "https://www.linkedin.com/in/elaine-lee/",
    imageSrc: "/imgs/Evro_CEO_Elaine_Lee_Headshot_B&W.webp",
    bio: [
      "Elaine is a product strategist and transformation leader with more than 15 years of experience driving innovation across fintech, healthtech, and AI-powered SaaS platforms. Her career has spanned building multiple businesses, building digital products from the ground up, leading cross-functional teams through change processes, and delivering multimillion user systems.",
      "Elaine has held senior leadership roles in both startups and large enterprises. At organisations like Wisr, Zip Co, and government health districts, she led product architecture, user experience, and AI strategy, modernising service delivery and enabling data-driven decision-making. She held leadership roles at ANZ bank and multiple financial institutions guiding complex transformation programs across payments, lending, and financial services at scale.",
      "Elaine has also consulted to founders and executive teams advising on AI-driven product strategy, go-to-market execution, and scaling SaaS businesses. Her work blends deep systems thinking with a focus on execution and results, ensuring strategy translates into measurable outcomes.",
      "At Evro, Elaine brings her expertise in data security and AI to design technology that empowers people.",
    ],
  },
  {
    name: "Dr. Jay Spence",
    role: "Founder | Co-CEO, Evro",
    linkedinUrl: "https://www.linkedin.com/in/dr-jay-spence/",
    imageSrc: "/imgs/Evro_CEO_Jay_Spence_Headshot_B&W.webp",
    bio: [
      "Jay is a clinical psychologist and healthtech leader with a PhD and Master of Clinical Psychology. He has worked across academia, private psychotherapy practice, and digital health and has multiple peer-reviewed research publications on the efficacy of digital health treatment approaches.",
      "In 2016, Jay founded a mental health SaaS company that grew from zero to a small multinational organisation before being successfully acquired in 2021. His leadership experience spans both Australia and the US, where he has held Chief Product Officer and Chief Strategy Officer roles, guiding product and strategy teams, driving M&A integration, and embedding agile ways of working at scale.",
      "Alongside his executive career, Jay has run a consulting agency, helping organisations from startups to Fortune 500 enterprises to understand, build and implement AI-focused software. He also serves as Chairman of the Board for an Australian charity.",
      "At Evro, Jay brings a blend of clinical insight and executive experience, ensuring psychological intelligence is designed into the platform from day one.",
    ],
  },
];

// --- The React Component ---
const FoundingTeam: React.FC = () => {
  return (
    <section className='bg-white py-16 lg:py-24'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center max-w-4xl mx-auto'>
          <h1 className='text-4xl lg:text-5xl font-bold font-heading text-gray-900'>Our People</h1>
        </div>

        <div className='mt-16'>
          <div className='text-center'>
            <h2 className='text-3xl lg:text-4xl font-semibold font-heading text-gray-800'>
              Founding Team
            </h2>
          </div>

          <div className='mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
            {foundingTeamData.map((member, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/60'
              >
                <div className='bg-slate-50 p-8'>
                  <div className='flex flex-col sm:flex-row items-center text-center sm:text-left gap-8'>
                    <img
                      src={member.imageSrc}
                      alt={`Headshot of ${member.name}`}
                      className='w-32 h-32 rounded-full object-cover grayscale flex-shrink-0 ring-4 ring-white'
                    />
                    <div>
                      <h3 className='text-3xl font-bold text-gray-900'>{member.name}</h3>
                      <p className='mt-2 text-lg text-cyan-600 font-semibold'>{member.role}</p>
                      <a
                        href={member.linkedinUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`LinkedIn profile of ${member.name}`}
                        className='mt-4 inline-block text-gray-500 hover:text-cyan-600 transition-colors'
                      >
                        <FiLinkedin size={24} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className='p-8 lg:p-10 text-left space-y-5'>
                  {member.bio.map((paragraph, pIndex) => (
                    <p key={pIndex} className='text-gray-700 leading-relaxed'>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingTeam;
