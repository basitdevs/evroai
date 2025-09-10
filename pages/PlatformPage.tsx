import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import AiAssistantsLibrary from "@/components/Platform/AiAssistantsLibrary";
import IntegratedLearning from "@/components/Platform/IntegratedLearning";
import PerformanceAnalytics from "@/components/Platform/PerformanceAnalytics";
import PlatformHero from "@/components/Platform/PlatformHero";
import WhyEvro from "@/components/Platform/WhyEvro";
import WorkforcePlanning from "@/components/Platform/WorkforcePlanning";
import React from "react";

const PlatformPage = () => {
  return (
    <div className='antialiased overflow-hidden'>
      <Header backgroundColor={"rgb(243, 244, 246)"} />
      <main className='bg-[#f0f0f0]'>
        <PlatformHero />
        <AiAssistantsLibrary />
        <PerformanceAnalytics />
        <IntegratedLearning />
        <WorkforcePlanning />
        <WhyEvro />
      </main>
      <Footer />
    </div>
  );
};

export default PlatformPage;
