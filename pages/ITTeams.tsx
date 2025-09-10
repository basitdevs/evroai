import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import SolutionPageLayout from "@/components/Solutions/SolutionPageLayout";
import { iitFaq, itTeamsData } from "@/lib/data";
import React from "react";
import { FAQ } from "@/components/FAQ";

const ITTeams = () => {
  return (
    <div className='antialiased overflow-hidden'>
      <Header backgroundColor={"rgb(243, 244, 246)"} />
      <main className='bg-[#f0f0f0]'>
        <SolutionPageLayout {...itTeamsData} />
        <FAQ data={iitFaq} />
      </main>
      <Footer />
    </div>
  );
};

export default ITTeams;
