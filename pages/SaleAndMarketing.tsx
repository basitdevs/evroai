import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import SolutionPageLayout from "@/components/Solutions/SolutionPageLayout";
import { marketingAndSalesData, salesFaq } from "@/lib/data";
import React from "react";
import { FAQ } from "@/components/FAQ";

const SaleAndMarketing = () => {
  return (
    <div className='antialiased overflow-hidden'>
      <Header backgroundColor={"rgb(243, 244, 246)"} />
      <main className='bg-[#f0f0f0]'>
        <SolutionPageLayout {...marketingAndSalesData} />
        <FAQ data={salesFaq} />
      </main>
      <Footer />
    </div>
  );
};

export default SaleAndMarketing;
