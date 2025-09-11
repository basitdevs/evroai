import React, { useState, useRef, useEffect } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { Introduction } from "@/components/Introduction";
import Solutions from "@/components/Solutions";
import TrustSection from "@/components/TrustSection";
import PricingSection from "@/components/PricingSection";

const faqData = [
  {
    q: "Who can join early access?",
    a: `For teams and organisations (pilots): We’re inviting leaders of teams or departments in companies that have >50% of meetings virtually/video-based to partner with us. We have recently been running pilots with orgs between 100 - 1000 employees in a range of durations and sizes.

For individuals (sample users): Anyone can sign up to try a sample Evro Assistant. It’s a simple way to explore what we’re building.`,
  },
  {
    q: "Is my data private?",
    a: `Yes. Your conversations with Evro are completely private and are not shared with your team leader or your organisation. Conversations with Evro are analysed and de-identified for reporting purposes but never identify you personally. Data is encrypted so that Evro AI employees cannot see your conversations. Evro never trains external models on your information. You can individually delete any or all of your conversations at any time.`,
  },
  {
    q: "What’s included in early access?",
    a: `For teams and organisations (pilots): Free or discounted licences during the pilot, hands-on onboarding, direct support from our founding team, and ROI tracking to measure impact where feasible.

For individuals (sample users): Free access to a limited set of assistants to practise conversations, get feedback, and see how Evro works.`,
  },
  {
    q: "Does it cost anything to join?",
    a: `For organisations (pilots): Pilot partners receive free or discounted licences in exchange for feedback and co-creation of features.

For individuals (sample users): Access is free during early testing. Licence access will expire at the end of the early access period.`,
  },
  {
    q: "What will I need to do as a participant?",
    a: `For teams and organisations (pilots): Use Evro in real scenarios (e.g., see our Solutions page for examples) and provide feedback via surveys or short sessions with our team.

For individuals (sample users): Try out the assistant, share your experience in a short survey, and optionally join feedback interviews.`,
  },
  {
    q: "How long does early access last?",
    a: `Pilots: Pilots typically run for between 4 - 12 weeks but are configurable based on your needs. Towards the end, we’ll discuss ongoing options with you.

Sample users: Access is ongoing while we’re in early access. Features and assistants may change as we test and improve.`,
  },
  {
    q: "Do I need special tools or setup?",
    a: `No. Evro runs as a secure web app you can log into directly. For pilots, we’ll also provide support for single sign-on (SSO). Future releases will integrate with Slack and Teams if your organisation chooses to enable them.`,
  },
  {
    q: "What if I want Evro for my whole team or organisation?",
    a: `That’s exactly what the pilot program is for. If selected, you’ll run a secure pilot with your team, get direct support from our founders, and help shape Evro’s development.`,
  },
  {
    q: "What’s the benefit of joining early?",
    a: `Be first to use a new category of AI platform built by psychologists.

For organisations: influence the roadmap, access discounted pricing later, and build an early case study with measurable ROI.

For individuals: exclusive access to tools not yet available publicly that will help you to feel more confident in your role and enjoy work more.`,
  },
  {
    q: "What happens after early access?",
    a: `Pilots: We’ll review the results with you and outline options for continued use. Early partners may retain special benefits as pricing becomes available.

Sample users: You’ll be invited to stay connected and will have the option to upgrade to the full product once public launch begins.`,
  },
];

export default function Home() {
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
        <Hero id='hero-section' ref={sectionRefs[0]} />
        <div className='bg-black z-[55]'>
          <Introduction id='introduction-section' ref={sectionRefs[2]} />
          <div className='bg-[#E9E9E9]'>
            <Solutions ref={sectionRefs[3]} />
          </div>
        </div>
        <div className='bg-black'>
          <TrustSection ref={sectionRefs[4]} />
        </div>
        <div className='bg-[#E9E9E9]'>
          <PricingSection ref={sectionRefs[5]} />
        </div>
        <div className='bg-[#f0f0f0]' ref={sectionRefs[6]}>
          <FAQ data={faqData} showCta />
        </div>
      </main>
      <Footer />
    </div>
  );
}
