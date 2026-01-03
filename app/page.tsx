import HeroSection from "@/components/Home";
import Services from "@/components/Services";
import Company from "@/components/Company";
import WhoWeWorkWith from "@/components/Business";
import AMCs from "../components/AMCs";
import Tools from "@/components/Tools";
import FinanceInsight from "../components/FinanceInsight";
import ContactUs from "../components/ContactUs";
import Testimonials from "../components/Testimonials";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <HeroSection />
      </div>
      <div className="w-full bg-slate-100 mt-5"></div>
      <Services />
      <Company />
      <WhoWeWorkWith />
      <AMCs />

      <Tools />
      <FinanceInsight />
      <ContactUs />
      <Testimonials />
      <Link
        href="https://api.whatsapp.com/send/?phone=919892440999&text&type=phone_number&app_absent=0"
        className="fixed p-2 cursor-pointer bg-white rounded-full shadow-lg bottom-20 right-10"
      >
        <BsWhatsapp color="green" size={50} />
      </Link>
    </div>
  );
}
