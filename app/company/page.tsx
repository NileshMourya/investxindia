import Image from "next/image";
import React from "react";

const badges = [
  {
    title: "Experience",
    subtitle: "30+ Years",
    alt: "Banking • Finance • Investments",
  },
  {
    title: "FAMILIES GUIDED",
    subtitle: "850+",
    alt: "Across Ahmedabd & Gujarat",
  },
  {
    title: "IRDA AUTHORIZED",
    subtitle: "SIP | SWP | STP",
    alt: "Goal-based Execution",
  },
];
const page = () => {
  return (
    <section className="w-full px-4 md:px-8 py-10 bg-white shadow-sm mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Left */}
        <div className="rounded-xl p-6 space-y-2">
          <p className="text-sm font-semibold text-[#f38120] uppercase">
            Based in Mumbai
          </p>
          <p className="text-2xl text-[#00113d] leading-relaxed">
            Local expert services for Maharastra & Gujarat families, available
            entirely online.
          </p>
          <p className="text-sm text-[#00113d]">
            Most of our salaried frofessional owners and retirees across
            Maharastra, gujarat. We combine local understanding of cashflows,
            tax behaviour and family priorities with modern fully digital
            execution
          </p>
        </div>

        {/* Right Buttons */}
        <div className="bg-slate-50 rounded-xl p-6">
          <div className="grid grid-cols-1">
            <p className="text-sm font-bold text-[#00113d] mt-5 mb-5">
              Why a local expert instead of only DIY platforms?
            </p>
            <p className="text-sm font-normal text-[#00113d] mt-2 mb-2">
              • We sit on the time zone and understand local realities like
              bonuses. EVMs and tax timing.
            </p>
            <p className="text-sm font-normal text-[#00113d] mt-2 mb-2">
              • Reviews can happen in Maharashtra, Hindi or English - at our
              Gujarat office or over video.
            </p>
            <p className="text-sm font-normal text-[#00113d] mt-2 mb-2">
              • We help keep behaviour disciplined in bad markets, not just pick
              funds in good ones.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white border border-slate-200
                         rounded-xl px-5 py-4 shadow-md hover:shadow-md
                         hover:-translate-y-1 transition-all"
            style={{ flexDirection: "column" }}
          >
            <div>
              <p className="tetxt-sm text-[#f38120]">{badge.title}</p>
            </div>
            <div>
              <p className="text-2xl font-medium text-[#00113d]">
                {badge.subtitle}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#f38120] font-mono">{badge.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
