import FounderLetter from "@/components/Company/FounderLetter";
import FoundingTeam from "@/components/Company/FoundingTeam";
import MissionAndValues from "@/components/Company/MissionAndValues";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";

const CompanyPage = () => {
  return (
    <div className='antialiased overflow-hidden'>
      <Header backgroundColor={"rgb(243, 244, 246)"} />
      <main className='bg-[#f0f0f0]'>
        <FounderLetter />
        <MissionAndValues />
        <FoundingTeam />
      </main>
      <Footer />
    </div>
  );
};

export default CompanyPage;
