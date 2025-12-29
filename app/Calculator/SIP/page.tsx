"use client";

import { useState } from "react";
import SipPieChart from "../SipPieChart";

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000);
  const [annualRate, setAnnualRate] = useState<number>(12);
  const [years, setYears] = useState<number>(10);

  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;

  const investedAmount = monthlyInvestment * months;

  const maturityAmount =
    monthlyInvestment *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);

  const estimatedReturns = maturityAmount - investedAmount;

  const formatCurrency = (value: number) =>
    `₹ ${Math.round(value).toLocaleString("en-IN")}`;

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 grid gap-10 md:grid-cols-2">
          {/* Left - Inputs */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              SIP Calculator
            </h2>

            {/* Monthly Investment */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Monthly Investment
              </label>
              <input
                type="range"
                min={500}
                max={100000}
                step={500}
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full mt-2 "
              />
              <p className="mt-1 text-[#f38120] font-semibold">
                {formatCurrency(monthlyInvestment)}
              </p>
            </div>

            {/* Interest Rate */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Expected Annual Return (%)
              </label>
              <input
                type="range"
                min={1}
                max={30}
                step={0.5}
                value={annualRate}
                onChange={(e) => setAnnualRate(Number(e.target.value))}
                className="w-full mt-2"
              />
              <p className="mt-1 text-[#f38120] font-semibold">
                {annualRate} %
              </p>
            </div>

            {/* Time Period */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Investment Duration (Years)
              </label>
              <input
                type="range"
                min={1}
                max={40}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full mt-2"
              />
              <p className="mt-1 text-[#f38120] font-semibold">{years} Years</p>
            </div>
          </div>

          {/* Right - Results */}
          <div className="bg-orange-50 rounded-2xl p-6 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Investment Summary
            </h3>

            <SipPieChart
              investedAmount={investedAmount}
              returns={estimatedReturns}
            />

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-[#0b2b7f]">Invested Amount</span>
                <span className="font-semibold">
                  {formatCurrency(investedAmount)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Returns</span>
                <span className="font-semibold text-green-600">
                  {formatCurrency(estimatedReturns)}
                </span>
              </div>

              <hr />

              <div className="flex justify-between text-base">
                <span className="font-semibold text-gray-800">
                  Maturity Value
                </span>
                <span className="font-bold text-[#f38120]">
                  {formatCurrency(maturityAmount)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
