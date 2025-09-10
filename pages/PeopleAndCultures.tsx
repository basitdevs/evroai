import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import SolutionPageLayout from "@/components/Solutions/SolutionPageLayout";
import { peopleAndCultureData, peopleFaq } from "@/lib/data";
import React from "react";

const PeopleAndCultures = () => {
  return (
    <div className='antialiased overflow-hidden'>
      <Header backgroundColor={"rgb(243, 244, 246)"} />
      <main className='bg-[#f0f0f0]'>
        <SolutionPageLayout {...peopleAndCultureData} />
        <FAQ data={peopleFaq} />
      </main>
      <Footer />
    </div>
  );
};

export default PeopleAndCultures;
