import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import SolutionPageLayout from "@/components/Solutions/SolutionPageLayout";
import { teamFaq, teamMemberData } from "@/lib/data";
import React from "react";

const TeamMembers = () => {
  return (
    <div className='antialiased overflow-hidden'>
      <Header backgroundColor={"rgb(243, 244, 246)"} />
      <main className='bg-[#f0f0f0]'>
        <SolutionPageLayout {...teamMemberData} />
        <FAQ data={teamFaq} />
      </main>
      <Footer />
    </div>
  );
};

export default TeamMembers;
