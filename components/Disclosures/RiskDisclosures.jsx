"use client";
import React from "react";
import { AlertTriangle, Info } from "lucide-react";

const disclosures = [
  "HRP Wealth currently acts as an AMFI registered mutual fund distributor (ARN-342284) and IRDA authorized insurance consultant. We do not act as a SEBI registered investment adviser (RIA) as of now.",
  "We may receive commissions and incentives from AMCs / insurers for the products you choose. We do not charge any additional planning fee unless explicitly agreed in writing.",
  "All information, illustrations, and calculator outputs on this website are for education and awareness only. They are not a recommendation to buy, sell, or switch any specific scheme.",
  "Mutual fund investments are subject to market risks, including possible loss of principal. Read all scheme-related documents carefully before investing. Past performance does not guarantee future returns.",
  "Final product selection, asset allocation, and investment decisions should be taken only after a one-to-one discussion where we understand your income, expenses, risk profile, time horizon, and existing portfolio.",
  "We do not provide intraday trading tips, guaranteed returns, or unofficial shortcuts. We never ask for your internet banking, OTP, or login credentials.",
];

const RiskDisclosureSection = () => {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-16 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
          {/* Header */}
          <div className="flex items-start gap-4 mb-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <AlertTriangle size={22} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-orange-500 mb-1">
                IMPORTANT DISCLOSURES & RISK INFORMATION
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                Please Read Carefully Before Investing
              </h3>
            </div>
          </div>

          {/* Content */}
          <ul className="space-y-4">
            {disclosures.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Info size={18} className="text-slate-400 mt-1 shrink-0" />
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          {/* Footer Note */}
          <div className="mt-8 rounded-xl bg-slate-100 border border-slate-200 p-4">
            <p className="text-xs sm:text-sm text-slate-600">
              Investing involves market risks. This disclosure is provided in
              the interest of transparency, regulatory compliance, and investor
              awareness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskDisclosureSection;
