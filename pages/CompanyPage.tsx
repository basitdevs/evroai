import React, { useState, useRef, useEffect } from "react";
import FounderLetter from "@/components/Company/FounderLetter";
import FoundingTeam from "@/components/Company/FoundingTeam";
import Hero from "@/components/Company/Hero";
import MissionAndValues from "@/components/Company/MissionAndValues";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const CompanyPage = () => {
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
        <Hero ref={sectionRefs[0]} />
        <div className='bg-black'>
          <FounderLetter ref={sectionRefs[1]} />
        </div>
        <MissionAndValues ref={sectionRefs[2]} />
        <div className='bg-black'>
          <FoundingTeam ref={sectionRefs[3]} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyPage;
