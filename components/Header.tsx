import React, { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const desktopNavLinks = [
  { name: "Product", href: "/#product-section" },
  { name: "Use Cases ", href: "/#social-proof-section" },
  { name: "Why Evro", href: "/#why-evro-section" },
  { name: "About Us", href: "https://www.linkedin.com/company/evro-ai/" },
];

const DayosLogo = ({ isDark }) => (
  <div className='flex-shrink-0'>
    <a href='/' className={` h-full`}>
      {isDark ? (
        <img src='/logo.png' alt='EvroAI Logo' className={`h-[24px] md:h-[30px]`} />
      ) : (
        <img src='/logo_light.png' alt='EvroAI Logo' className={`h-[24px] md:h-[30px]`} />
      )}
    </a>
  </div>
);

const isDark = (color) => {
  if (!color || !color.startsWith("rgb")) return false;
  const [r, g, b] = color.match(/\d+/g).map(Number);
  return (r * 299 + g * 587 + b * 114) / 1000 < 128;
};

export const Header = React.memo(({ backgroundColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDarkBg = isDark(backgroundColor);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const headerStyle = { backgroundColor };
  const getStartedClasses = `font-bold rounded-[8px] transition-colors duration-200`;
  const textClass = isDarkBg ? "text-white" : "text-black";

  return (
    <>
      <header
        className='fixed top-0 left-0 right-0 z-50 transition-colors duration-500'
        style={headerStyle}
      >
        <div className='mx-auto px-6 max-w-[1550px] '>
          <div className='flex items-center justify-between h-[72px]'>
            {/* Mobile/Tablet Menu Button */}
            <div className='lg:hidden'>
              <button
                onClick={() => setIsMenuOpen(true)}
                className={`p-2 -ml-2 rounded-md ${textClass}`}
                aria-label='Open menu'
              >
                <MdOutlineMenu size={32} />
              </button>
            </div>

            {/* Desktop Logo */}
            <div className='hidden lg:flex'>
              <DayosLogo isDark={isDarkBg} />
            </div>

            {/* Mobile Logo */}
            <div className='lg:hidden'>
              <DayosLogo isDark={isDarkBg} />
            </div>

            {/* Desktop Navigation */}
            <nav
              className={`hidden lg:flex items-center justify-center py-2 px-6 rounded-full ${
                isDarkBg ? "bg-neutral-800/50" : "bg-white/70 backdrop-blur-sm"
              }`}
            >
              <div className='flex items-center gap-7'>
                {desktopNavLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`font-medium text-sm px-2 py-1 ${
                      isDarkBg
                        ? "text-neutral-400 hover:text-white"
                        : "text-black/70 hover:text-black"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </nav>

            <a
              href='https://forms.fillout.com/t/5L468P5Xptus'
              // target='_blank'
              className={`${getStartedClasses} text-base px-3 md:px-4 py-1.5 md:py-2 ${
                isDarkBg ? "bg-[#00C4CC] text-black" : "bg-black text-white"
              }`}
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black text-white transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className='flex flex-col h-full'>
          {/* Menu Header */}
          <div className='flex items-center justify-between h-20 px-4 flex-shrink-0'>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label='Close menu'
              className='-ml-2 p-2 text-white'
            >
              <RxCross2 size={32} />
            </button>
            <DayosLogo isDark={true} />
            <a
              href='https://forms.fillout.com/t/5L468P5Xptus'
              // target='_blank'
              className={`${getStartedClasses} text-[14px] md:text-base px-3 md:px-4 py-1.5 md:py-2 ${
                isDarkBg || isMenuOpen ? "bg-[#00C4CC] text-black" : "bg-black text-white"
              }`}
            >
              Get Started
            </a>
          </div>

          {/* Menu Navigation */}
          <nav className='flex-grow p-6 pt-10 overflow-y-auto'>
            <div className='space-y-8'>
              {desktopNavLinks.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className='flex justify-between items-center w-full mb-3'
                  >
                    <h3 className='text-xl font-bold text-neutral-300'>{item.name}</h3>
                    <span className='text-neutral-400'>
                      <GoArrowRight />
                    </span>
                  </a>
                  {/* {item.subLinks && (
                    <ul className='space-y-3'>
                      {item.subLinks.map((subLink, subIndex) => (
                        <li key={subIndex}>
                          <a href='#' className='text-xl text-neutral-400 hover:text-white'>
                            {subLink}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )} */}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
});
