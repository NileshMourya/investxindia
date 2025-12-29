"use client";
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

const whatWeDo = [
  "Understand your goals, cashflows, time horizon, and family responsibilities.",
  "Help you assess your risk profile and capacity to take risk.",
  "Explain mutual funds, SIP/SWP/STP, insurance, NPS, and other products in simple, practical language.",
  "Suggest suitable categories and broad asset allocations aligned to your profile and goals.",
  "Execute and track your investments through regulated platforms (such as investxindiaE-Wealth) and support documentation.",
  "Provide periodic reviews, portfolio discussions, and help you stay disciplined through market cycles.",
];

const whatWeDontDo = [
  "We do not offer intraday trading tips, stock tips, or guaranteed-return schemes.",
  "We do not promise or assure any fixed rate of return in mutual funds or market-linked products.",
  "We do not handle your internet banking, OTPs, user IDs, or passwords and will never ask for them.",
  "We do not collect cash for investments; all investments are executed only through official banking channels.",
  "We do not provide tax or legal opinions; we work together with your CA wherever required.",
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
