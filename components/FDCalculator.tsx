"use client";

import { useState } from "react";

export default function FDCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7);
  const [tenure, setTenure] = useState(3);

  const maturityAmount = principal * Math.pow(1 + rate / 100, tenure);

  const interestEarned = maturityAmount - principal;

  const formatINR = (value: number) =>
    value.toLocaleString("en-IN", {
      maximumFractionDigits: 0,
    });

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Calculator Inputs */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-[#f38120] mb-6">
            Fixed Deposit Calculator
          </h3>

          <div className="space-y-5">
            {/* Principal */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Deposit Amount (₹)
              </label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Interest Rate (% p.a.)
              </label>
              <input
                type="number"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Tenure */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Tenure (Years)
              </label>
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-6">
          <h4 className="text-xl font-semibold">FD Investment Summary</h4>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span>Principal Amount</span>
              <span className="font-medium">₹ {formatINR(principal)}</span>
            </div>

            <div className="flex justify-between">
              <span>Interest Earned</span>
              <span className="font-medium text-emerald-400">
                ₹ {formatINR(interestEarned)}
              </span>
            </div>

            <div className="border-t border-slate-700 pt-4 flex justify-between text-base">
              <span>Expected Market Value</span>
              <span className="font-semibold text-indigo-400">
                ₹ {formatINR(maturityAmount)}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            * Calculation is indicative. Actual returns may vary based on bank
            policies and compounding frequency.
          </p>
        </div>
      </div>
    </section>
  );
}
