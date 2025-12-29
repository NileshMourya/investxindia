import React from "react";
import WhatWeDo from "@/components/Disclosures/DoDont";
import ProcessSection from "@/components/Disclosures/ProcessSection";
import RiskDisclosureSection from "@/components/Disclosures/RiskDisclosures";
const data = [
  {
    title: "Our Regulatory Role",
    message:
      "HRP Wealth currently operates as an AMFI registered mutual fund distributor (ARN-342284) and IRDA authorized insurance consultant. We are not registered as a SEBI Investment Adviser (RIA) at present.",
    message1:
      "Our primary role is to help you understand products, map them to your goals and risk profile, and execute transactions through regulated platforms such as investxindiaE-Wealth.",
  },
  {
    title: "How We Are Compensated",
    message:
      "• We may receive commissions and trail income from AMCs and insurers on products you choose to invest in through us.",
    message1:
      "• We do not charge any separate planning fee unless explicitly agreed with you in writing.",
    message2:
      "• Wherever possible, we explain different options, costs, and trade-offs so you can make an informed choice.",
  },
];
const page = () => {
  return (
    <>
      <section className="w-full bg-slate-100 py-16 px-4 md:px-8 mt-5 mb-5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs tracking-widest font-semibold text-[#f38120] uppercase mb-3">
                Regulatory Transparency
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b7f] leading-tight">
                Disclosures & How We Work
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
              This page explains our role, how we are compensated, what you can
              expect from our relationship, and where the boundaries are. We
              want every customer to make informed, confident decisions.
            </p>
          </div>
          <div className="p-4 grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-10">
            {data.map((item, id) => (
              <div key={id} className="bg-white p-4 shadow-md rounded-lg">
                <p className="text-2xl font-semibold text-[#0b2b7f]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-gray-600">{item.message}</p>
                <p className="mt-2 text-sm text-gray-600">{item.message1}</p>
                {item.message2 && (
                  <p className="mt-2 text-sm text-gray-600">{item.message1}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhatWeDo />
      <ProcessSection />
      <RiskDisclosureSection />
    </>
  );
};

export default page;
