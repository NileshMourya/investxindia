import HeroSection from "@/app/component/Home";
import Services from "@/app/component/Services";
import Company from "@/app/component/Company";
import WhoWeWorkWith from "@/app/component/Business";
import AMCs from "./component/AMCs";
import Learn from "@/app/Learn/page";
import Tools from "@/app/component/Tools";
import FinanceInsight from "./component/FinanceInsight";
import ContactUs from "./component/ContactUs";
import Testimonials from "./component/Testimonials";
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
