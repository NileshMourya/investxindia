import HeroSection from "@/app/Home/page";
import Services from "@/app/Services/page";
import Company from "@/app/company/page";
import WhoWeWorkWith from "@/app/component/Business";
import AMCs from "./component/AMCs";
import Learn from "@/app/Learn/page";
import Tools from "@/app/component/Tools";
export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center">
        <HeroSection />
      </div>
      <div className="w-full bg-slate-50 mt-5"></div>
      <Services />
      <Company />
      <WhoWeWorkWith />
      <AMCs />
      <Learn />
      <Tools />
    </div>
  );
}
