import React from "react";
import Header from "@/components/Headers";
import { headers } from "next/headers";
export const goals = [
  {
    title: "Term Life Insurance (Income Security)",
    tag1: "Ideal for",
    tag2: "Working professionals with family dependents",
    tag3: "",
    label: "• Ensures your family’s income continuity in your absence",
    label1: "• Recommended cover: 10–20× annual income including liabilities",
    label2: "• Lower premiums when purchased at a younger age",
    label3:
      "Example: A 35-year-old earning ₹15L annually with a ₹30L home loan may require ₹2–3 Cr term insurance for 25–30 years to safeguard long-term family goals.",
    button: "Check my term insurance need →",
  },
  {
    title: "Health Insurance & Critical Illness Protection",
    tag1: "Ideal for",
    tag2: "All individuals and families",
    tag3: "Tax benefit: Section 80D",
    label: "• Covers hospitalization costs and serious medical conditions",
    label1:
      "• Protects your SIPs and long-term investments from medical expenses",
    label2: "• Family floater plans with super top-ups offer optimal coverage",
    label3:
      "Example: A young metro-based family of four can balance cost and coverage with a ₹10–15L base policy plus a ₹25–50L super top-up.",
    button: "Evaluate my health coverage →",
  },
  {
    title: "Goal-Based Planning & Asset Protection",
    tag1: "• Loan and mortgage protection strategies",
    tag2: "• Business continuity and key-person insurance",
    tag3: "Tax efficiency: 80C and optimized withdrawals",
    label: "• Tax planning using ELSS funds along with PPF or NPS",
    label1:
      "• Emergency readiness through liquid, money market, or short-term debt funds",
    label2:
      "• Optional riders for accidental disability and income replacement",
    label3:
      "Example: Align a reducing term insurance cover with your loan balance so your family retains assets while investments remain focused on education and retirement goals.",
    button: "Analyze my financial risks →",
  },
];

const product = {
  header: "Insurance product discovery",
  title: "Align your life risks with",
  title1: "the right insurance solutions",
  text: `This section is designed as an educational guide. The final insurance
         product, coverage amount, and insurer are selected together after a
         detailed review of your income, expenses, and existing insurance
         policies.`,
};

const page = () => {
  return (
    <>
      <section className="w-full bg-[#f7f9fc] py-16 px-4 md:px-8 mt-5 mb-5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <Header details={product} />

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {goals.map((item, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-b from-white to-gray-50 rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Decorative Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-[#f38120] via-[#ff9c3b] to-[#fcd270]"></div>

                {/* Title with optional Icon */}
                <div className="flex items-center mb-4 space-x-3">
                  {/* Example Icon placeholder, you can replace with real icons */}
                  <div className="w-8 h-8 bg-[#f38120] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#00113d]">
                    {item.title}
                  </h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tag1 && (
                    <span className="px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full shadow-sm">
                      {item.tag1}
                    </span>
                  )}
                  {item.tag2 && (
                    <span className="px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full shadow-sm">
                      {item.tag2}
                    </span>
                  )}
                  {item.tag3 && (
                    <span className="px-3 py-1 text-xs font-medium text-orange-800 bg-orange-100 rounded-full shadow-sm">
                      {item.tag3}
                    </span>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-2 mb-4">
                  {item.label && (
                    <p className="text-sm md:text-base text-gray-800">
                      {item.label}
                    </p>
                  )}
                  {item.label1 && (
                    <p className="text-sm md:text-base text-gray-800">
                      {item.label1}
                    </p>
                  )}
                  {item.label2 && (
                    <p className="text-sm md:text-base text-gray-800">
                      {item.label2}
                    </p>
                  )}
                  {item.label3 && (
                    <p className="text-xs text-gray-500">{item.label3}</p>
                  )}
                </div>

                {/* Action Button */}
                {item.button && (
                  <div>
                    <button className="w-full md:w-auto px-5 py-2 bg-gradient-to-r from-[#f38120] to-[#ff9c3b] text-white text-sm font-semibold rounded-full shadow-md hover:scale-105 transition-transform">
                      {item.button}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-[#f7f9fc] to-white py-16 px-4 md:px-8 mt-6 mb-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <p className="text-xs tracking-widest font-bold text-[#f38120] uppercase">
                Product Education
              </p>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[#00113d] leading-snug">
                Grow with Mutual Funds, <br />
                Protect with Insurance
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xl">
                We keep wealth creation and risk protection separate. Mutual
                funds / SIPs focus on long-term growth, while term and health
                insurance safeguard your financial goals.
              </p>
            </div>

            {/* Product Cards */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 lg:mt-0">
              {/* Growth Card */}
              <div className="relative bg-gradient-to-tr from-blue-50 to-blue-100 rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-lg">
                  💰
                </div>
                <p className="text-sm font-semibold text-[#0b2b7f] mb-4">
                  For Growth
                </p>
                <ul className="text-xs md:text-sm text-[#00113d] space-y-2 list-disc list-inside">
                  <li>
                    Mutual funds / SIPs for long-term goals (retirement,
                    education, wealth)
                  </li>
                  <li>
                    Tax-efficient investing via ELSS, NPS, and strategic asset
                    allocation
                  </li>
                </ul>
              </div>

              {/* Protection Card */}
              <div className="relative bg-gradient-to-tr from-yellow-50 to-yellow-100 rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
                <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-800 font-bold text-lg">
                  🛡️
                </div>
                <p className="text-sm font-semibold text-[#f38120] mb-4">
                  For Protection
                </p>
                <ul className="text-xs md:text-sm text-[#00113d] space-y-2 list-disc list-inside">
                  <li>Term and health insurance solely for risk coverage</li>
                  <li>
                    Add-ons or riders only when they enhance actual protection,
                    not as investment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
