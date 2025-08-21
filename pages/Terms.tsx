import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import PolicyHeader from "@/components/PolicyHeader";
import TermsContent from "@/components/TermsContent";

export default function Terms() {
  return (
    <div className='antialiased'>
      <Header backgroundColor={"rgb(243, 244, 246)"} />
      <main className='bg-[#E9E9E9]'>
        <PolicyHeader title='Online Terms <br />of Service' />
        <TermsContent />
      </main>
      <Footer />
    </div>
  );
}
