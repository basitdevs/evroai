import React from "react";
import { FiArrowUp } from "react-icons/fi";

// The DayosLogo component provided by the user, renders "Evro" text
const DayosLogo = () => (
  <div className='flex-shrink-0'>
    <a href='#' className={`text-[40px] font-bold tracking-[0.5px] transition-all duration-300`}>
      <img
        src='/logo_light.png'
        alt='EvroAI Logo'
        className='h-[40px] md:h-[50px] w-auto transition-all duration-300 '
      />
    </a>
  </div>
);

// The footerLinks data provided by the user
const footerLinks = [
  {
    links: [
      { label: "Trust Centre", href: "https://app.safebase.io/", target: "_blank" },
      { label: "Privacy", href: "/privacy-statement" },
      { label: "Terms", href: "/terms-of-service" },
    ],
  },
  {
    links: [
      {
        label: "Subscribe to our newsletter",
        href: "https://preview.mailerlite.io/forms/1705936/163148231391315767/share",
        target: "_blank",
      },
    ],
  },
  {
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/evro-ai/", target: "_blank" },
    ],
  },
];

export const Footer = React.memo(() => {
  return (
    <footer className='bg-black text-white '>
      <div
        data-aos='fade-in'
        data-aos-delay='20'
        className='mx-auto px-8 sm:px-6 lg:px-10 pt-8 md:pt-20 pb-10 max-w-[1550px]'
      >
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-1/4'>
            <div className='flex justify-between '>
              <DayosLogo />
              <a
                href='#'
                className='md:hidden group cursor-pointer flex items-center gap-3 text-sm'
              >
                Back to top
                <span className='bg-white group-hover:bg-[#00c4cc] transition-all duration-300 ease-in-out rounded-[8px] w-7 h-7 flex items-center justify-center text-black'>
                  <FiArrowUp size={14} />
                </span>
              </a>
            </div>

            {/* Contact info for Desktop (visible only on large screens, positioned below logo) */}
            <div className='mt-6 hidden lg:block'>
              <p className='text-[18px]'>Have questions or want to chat?</p>
              <p className='text-[18px] mt-1'>
                Drop us a line →
                <a href='mailto:hello@evro.ai' className='text-[#00c4cc] ml-[5px]'>
                  hello@evro.ai
                </a>
              </p>
            </div>
          </div>

          <div className='w-full lg:w-3/4 flex flex-wrap justify-start lg:justify-between lg:pl-32 mt-8 lg:mt-0'>
            <div className='w-1/2 md:w-1/4 mb-4 md:mb-8 lg:mb-0'>
              <h3 className='font-bold text-white text-[16px] md:text-[18px] mb-3'>
                Privacy and Terms
              </h3>
              <ul className='space-y-1'>
                {footerLinks[0]?.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.target}
                      className='text-[14px] md:text-[16px] text-neutral-300 hover:text-white leading-[1.0]'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Business Functions (using footerLinks[1] from your provided data) */}
            <div className='w-1/2 md:w-1/4 mb-4 md:mb-8 lg:mb-0'>
              <h3 className='font-bold text-white text-[16px] md:text-[18px] mb-3'>Newsletter</h3>
              <ul className='space-y-1'>
                {footerLinks[1]?.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.target}
                      className='text-[14px] md:text-[16px] text-neutral-300 hover:text-white leading-[1.0]'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='w-1/2 md:w-1/4 mb-4 md:mb-8 lg:mb-0'>
              <h3 className='font-bold text-white text-[16px] md:text-[18px] mb-3'>About</h3>
              <ul className='space-y-1'>
                {footerLinks[2]?.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.target}
                      className='text-[14px] md:text-[16px] text-neutral-300 hover:text-white leading-[1.0]'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info for Mobile/Tablet (visible only on non-large screens, positioned below links) */}
            <div className='mt-3 block lg:hidden w-full'>
              <p className='text-[12px]'>Have questions or want to chat?</p>
              <p className='text-[12px] mt-1'>
                Drop us a line →{" "}
                <a href='mailto:hello@evro.ai' className='text-[#00c4cc] pl-0.5'>
                  hello@evro.ai
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className='mt-12 md:mt-28 flex flex-col lg:flex-row items-start lg:items-end justify-between font-mono text-xs text-neutral-400 gap-8 lg:gap-4'>
          <div className='hidden lg:flex flex-col gap-16 order-1'>
            <a href='#' className='flex group items-center cursor-pointer gap-3 text-sm'>
              <span className='bg-white group-hover:bg-[#00c4cc] transition-all duration-300 ease-in-out rounded-xl w-9 h-9 flex items-center justify-center text-black'>
                <FiArrowUp size={16} />
              </span>
              Back to top
            </a>
            {/* Copyright text for Desktop */}
            <p className='text-[12px]'>Evro AI © 2025 | All rights reserved</p>
          </div>

          <p className='block lg:hidden text-[12px] order-4'>
            Evro AI © 2025 | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
});
