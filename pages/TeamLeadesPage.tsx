import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import SolutionPageLayout from "@/components/Solutions/SolutionPageLayout";
import { leadersFaq, peopleLeadersData } from "@/lib/data";
import React from "react";

const TeamLeadesPage = () => {
  return (
    <div className='antialiased overflow-hidden'>
      <Header backgroundColor={"rgb(243, 244, 246)"} />
      <main className='bg-[#f0f0f0]'>
        <SolutionPageLayout {...peopleLeadersData} />
        <FAQ data={leadersFaq} />
      </main>
      <Footer />
    </div>
  );
};

export default TeamLeadesPage;
