"use client";
import React from "react";
import { AlertTriangle, Info } from "lucide-react";

const disclosures = [
  "InvestX India operates as an AMFI-registered mutual fund distributor (ARN-346230) and an IRDA-authorized insurance consultant. We are not registered as a SEBI Registered Investment Adviser (RIA) at present.",
  "We may earn commissions or incentives from asset management companies or insurers for the products selected. No separate advisory or planning fees are charged unless expressly agreed in writing.",
  "All content, illustrations, and calculator results on this website are provided solely for educational and informational purposes and should not be construed as a recommendation to buy, sell, or switch any investment product.",
  "Mutual fund investments are subject to market risks, including potential loss of capital. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results.",
  "Investment choices, asset allocation, and final decisions should be made only after a personalized discussion that considers your income, expenses, risk profile, investment horizon, and existing portfolio.",
  "We do not offer intraday trading advice, guaranteed returns, or informal investment arrangements, and we will never request your internet banking details, OTPs, or login credentials.",
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
                IMPORTANT INFORMATION
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                Read This Before You Invest
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
              All investments carry market risk. This statement is issued in the
              interest of transparency, regulatory adherence, and investor
              awareness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskDisclosureSection;
