"use client";

import { AlertTriangle, ShieldCheck } from "lucide-react";

export default function MutualFundDisclaimer() {
  return (
    <section className="bg-slate-50 border-t border-slate-200 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-50 text-amber-600">
              <AlertTriangle size={20} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Important Disclaimer
            </h3>
          </div>

          {/* Content */}
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              Mutual fund distribution services are offered through an
              <span className="font-medium text-slate-800">
                {" "}
                AMFI-registered Mutual Fund Distributor
              </span>
              ,{" "}
              <span className="font-medium text-slate-800">
                INVESTXINDIA CORPORATE DISTRIBUTION PRIVATE LIMITED
              </span>
              , with
              <span className="font-medium text-slate-800">
                {" "}
                AMFI Registration No.: ARN – 346230
              </span>{" "}
              (Date of Initial Registration: 25-NOV-2025; Current Validity of
              ARN: 24-NOV-2028).
            </p>

            <p className="flex items-start gap-2">
              <ShieldCheck size={16} className="text-indigo-600 mt-0.5" />
              Mutual fund investments are subject to market risks. Please read
              all scheme-related documents carefully before investing.
            </p>

            <p>
              The terms &amp; conditions and privacy policy of this website are
              applicable to all users and services.
            </p>

            <p className="font-medium text-slate-700">
              No employee, partner, or affiliate of InvestxIndia accepts funds
              pertaining to investments into their personal accounts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
