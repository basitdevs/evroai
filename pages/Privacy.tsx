import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import PolicyHeader from "@/components/PolicyHeader";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function Privacy() {
  return (
    <div className='antialiased'>
      <Header backgroundColor={"rgb(243, 244, 246)"} />
      <main className='bg-[#E9E9E9]'>
        <PolicyHeader />
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}
