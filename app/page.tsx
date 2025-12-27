import HeroSection from "@/components/Home";
import Services from "@/components/Services";
import Company from "@/components/Company";
import WhoWeWorkWith from "@/components/Business";
import AMCs from "../components/AMCs";
import Learn from "@/app/Learn/page";
import Tools from "@/components/Tools";
import FinanceInsight from "../components/FinanceInsight";
import ContactUs from "../components/ContactUs";
import Testimonials from "../components/Testimonials";
export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <HeroSection />
      </div>
      <div className="w-full bg-slate-50 mt-5"></div>
      <Services />
      <Company />
      <WhoWeWorkWith />
      <AMCs />
      <Learn />
      <Tools />
      <FinanceInsight />
      <ContactUs />
      <Testimonials />
    </div>
  );
}
