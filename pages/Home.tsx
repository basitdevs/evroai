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

const faqData = [
  {
    q: "Who can apply for the beta?",
    a: "Anyone leading or working in a team can apply. We’re especially looking for managers, HR leaders, and teams in growing organisations who want to shape the future of AI-powered culture and performance.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Your conversations with Evro are completely private and are not shared with your team leader or your organisation. Conversations with Evro are analysed and de-identified for reporting purposes but never identify you personally. Data is encrypted so that Evro AI employees cannot see your conversations. Evro never trains external models on your information. You can individually delete any or all of your conversations at any time.",
  },
  {
    q: "What’s included in early access?",
    a: "You’ll get hands-on access to the beta version of Evro, which is a limited version but contains more than half of the full version and includes our best features. You’ll also get support from the Evro AI team, and the option to request the features you want to see.",
  },
  {
    q: "How much does it cost to join?",
    a: "Beta access is free. In return, we ask for your feedback about the product via surveys and you can opt in to video interviews if you’re open to it.",
  },
  {
    q: "What will I need to do as a beta tester?",
    a: "Use Evro to get expert support with team dynamics, communication, career development, leadership and other areas. Share your experience, and give us feedback through short surveys and optional video calls if you are open to that. No heavy lift required.",
  },
  {
    q: "How long does the beta run? Will I get free access after the beta?",
    a: "The beta will run for three months, with regular updates and improvements along the way. We will notify you towards the end of the beta about opportunities for continued free or discounted access.",
  },
  {
    q: "Do I need special tools or setup?",
    a: "No. Evro is a web app accessible via secure login or SSO. Future releases will also plug into tools you already use, like Slack and Teams if you choose to authorise that. Setup is quick and simple.",
  },
  {
    q: "What if I want Evro for my team or my organisation?",
    a: "If you’re interested in applying for your team or org, then please get in touch with us. If selected, our founding team will work closely with you to run a secure pilot. You’ll have a direct line for help, feedback, and co-creation sessions.",
  },
  {
    q: "What’s the benefit of joining early?",
    a: "Access is free during the closed beta, which only runs for three months. There may also be early-adopter advantages like discounted pricing after launch.",
  },
  {
    q: "What happens after the beta?",
    a: "We will be in touch with you to outline options for continued use, which might include free or discounted access for early testers.",
  },
];

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
        <FAQ data={faqData} showCta />
        {/* <About /> */}
      </main>
      <Footer />
    </div>
  );
}
