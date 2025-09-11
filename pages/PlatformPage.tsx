import React, { useState, useRef, useEffect } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import AiAssistantsLibrary from "@/components/Platform/AiAssistantsLibrary";
import IntegratedLearning from "@/components/Platform/IntegratedLearning";
import PerformanceAnalytics from "@/components/Platform/PerformanceAnalytics";
import PlatformHero from "@/components/Platform/PlatformHero";
import WhyEvro from "@/components/Platform/WhyEvro";
import WorkforcePlanning from "@/components/Platform/WorkforcePlanning";

const PlatformPage = () => {
  const [headerBgColor, setHeaderBgColor] = useState("#E9E9E9");

  const sectionRefs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            const sectionEl = entry.target as HTMLElement;
            const bgColor = window.getComputedStyle(sectionEl).backgroundColor;
            setHeaderBgColor(bgColor);
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        root: null,
        threshold: 0.25,
      }
    );

    const sections = sectionRefs
      .map((ref) => ref.current)
      .filter((el): el is HTMLElement => el !== null);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className='antialiased overflow-hidden'>
      <Header backgroundColor={headerBgColor} />
      <main className='bg-[#f0f0f0]'>
        <PlatformHero ref={sectionRefs[0]} />
        <div className='bg-black'>
          <AiAssistantsLibrary ref={sectionRefs[1]} />
        </div>

        <PerformanceAnalytics ref={sectionRefs[2]} />
        <div className='bg-black'>
          <IntegratedLearning ref={sectionRefs[3]} />
        </div>

        <WorkforcePlanning ref={sectionRefs[4]} />
        <div className='bg-black'>
          <WhyEvro ref={sectionRefs[5]} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlatformPage;
