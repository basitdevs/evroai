import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import PolicyHeader from "@/components/PolicyHeader";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function Privacy() {
  return (
    <div className='antialiased'>
      <Header backgroundColor={"rgb(248 250 252)"} /> 
      <main className='bg-slate-50'>
        <PolicyHeader title='Privacy <br /> Policy' />
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}