"use client";
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
const whatWeDo = [
  "Assess your financial goals, income patterns, investment horizon, and family obligations.",
  "Evaluate your risk appetite and ability to withstand market fluctuations.",
  "Simplify concepts such as mutual funds, SIP/SWP/STP, insurance, NPS, and related products using practical examples.",
  "Recommend appropriate fund categories and high-level asset allocation based on your profile and objectives.",
  "Facilitate execution and monitoring of investments through regulated platforms (such as InvestXIndia E-Wealth), along with required documentation support.",
  "Conduct regular portfolio reviews, performance discussions, and provide guidance to help you stay disciplined across market cycles.",
];

const whatWeDontDo = [
  "We do not provide intraday trading advice, stock tips, or schemes promising assured returns.",
  "We do not guarantee or commit to any fixed returns on mutual funds or market-linked investments.",
  "We never access or request your internet banking details, OTPs, login IDs, or passwords.",
  "We do not accept cash for investments; all transactions are carried out only via authorized banking channels.",
  "We do not offer tax or legal advice and coordinate with your Chartered Accountant whenever necessary.",
];

const WhatWeDoSection = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* What We Do */}
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-semibold text-emerald-900 mb-6">
              What We Do
            </h3>

            <ul className="space-y-4">
              {whatWeDo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-emerald-600 mt-0.5 shrink-0"
                  />
                  <p className="text-sm sm:text-base text-emerald-900 leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Don't Do */}
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-semibold text-rose-900 mb-6">
              What We Don&apos;t Do
            </h3>

            <ul className="space-y-4">
              {whatWeDontDo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle
                    size={20}
                    className="text-rose-600 mt-0.5 shrink-0"
                  />
                  <p className="text-sm sm:text-base text-rose-900 leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
