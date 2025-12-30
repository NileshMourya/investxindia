import React from "react";
import WhatWeDo from "@/components/Disclosures/DoDont";
import ProcessSection from "@/components/Disclosures/ProcessSection";
import RiskDisclosureSection from "@/components/Disclosures/RiskDisclosures";
const data = [
  {
    title: "Our Regulatory Capacity",
    message:
      "investxindia operates as an AMFI-registered Mutual Fund Distributor (ARN-346230) and an IRDA-authorized insurance consultant. At present, we are not registered as a SEBI Registered Investment Adviser (RIA).",
    message1:
      "Our role is limited to explaining financial products, aligning them with your goals and risk profile, and facilitating transactions through regulated platforms such as investxindiaE-Wealth.",
  },
  {
    title: "Compensation & Fees",
    message:
      "• We may earn commissions or trail income from asset management companies (AMCs) and insurers for products you choose through our platform.",
    message1:
      "• We do not levy any separate advisory or planning fees unless expressly agreed upon in writing.",
    message2:
      "• Wherever applicable, we disclose product options, associated costs, and trade-offs to help you make well-informed decisions.",
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
                Disclosures & Our Working Framework
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
              This section outlines our regulatory position, compensation
              structure, and scope of services. It also clarifies expectations
              and limitations, helping you make well-informed and confident
              financial decisions.
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
