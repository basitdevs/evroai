import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Solutions/Hero";
import TeamMemberSolutions from "@/components/Solutions/SolutionPageLayout";
import React from "react";

const SolutionPage = () => {
  return (
    <div className='antialiased overflow-hidden'>
      <Header backgroundColor={"rgb(243, 244, 246)"} />
      <main className='bg-[#f0f0f0]'>
        <Hero />
        {/* <TeamMemberSolutions /> */}
      </main>
      <Footer />
    </div>
  );
};

export default SolutionPage;
