import React, { useState, useRef, useEffect } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Problem } from "../components/Problem";
import { SocialProof } from "../components/SocialProof";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import SkillsCards from "../components/SkillsCards";
import Business from "../components/Business";
import { About } from "../components/About";
import { Introduction } from "@/components/Introduction";
import Solutions from "@/components/Solutions";
import TrustSection from "@/components/TrustSection";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  const [headerBgColor, setHeaderBgColor] = useState("rgb(243, 244, 246)");

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
        <Hero id='hero-section' ref={sectionRefs[0]} />
        {/* <Problem id='problem-section' ref={sectionRefs[1]} /> */}
        <div className='bg-blac z-[55]'>
          <Introduction id='introduction-section' ref={sectionRefs[2]} />
          <Solutions />
        </div>
        <TrustSection />

        {/* <SocialProof id='social-proof-section' ref={sectionRefs[3]} /> */}

        {/* <SkillsCards id='why-evro-section' ref={sectionRefs[4]} /> */}
        <PricingSection />
        <FAQ />
        {/* <About /> */}
      </main>
      <Footer />
    </div>
  );
}
