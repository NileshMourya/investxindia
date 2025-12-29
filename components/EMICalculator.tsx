"use client";

import { useState } from "react";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(9);
  const [tenure, setTenure] = useState<number>(10);

  const monthlyRate = interestRate / 12 / 100;
  const months = tenure * 12;

  const emi =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayable = emi * months;
  const totalInterest = totalPayable - loanAmount;

  const formatINR = (value: number) =>
    value.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Inputs */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-[#f38120] mb-6">
            EMI Calculator
          </h3>

          <div className="space-y-5">
            {/* Loan Amount */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
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
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Tenure */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Loan Tenure (Years)
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
          <h4 className="text-xl font-semibold">Loan Summary</h4>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span>Monthly EMI</span>
              <span className="font-semibold text-indigo-400">
                ₹ {formatINR(emi)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Total Interest</span>
              <span className="font-medium text-rose-400">
                ₹ {formatINR(totalInterest)}
              </span>
            </div>

            <div className="border-t border-slate-700 pt-4 flex justify-between">
              <span>Total Amount Payable</span>
              <span className="font-semibold text-emerald-400">
                ₹ {formatINR(totalPayable)}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            * EMI values are indicative and may vary based on lender policies.
          </p>
        </div>
      </div>
    </section>
  );
}
