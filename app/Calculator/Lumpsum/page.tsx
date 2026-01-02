"use client";

import { useState } from "react";
import SipPieChart from "../SipPieChart";

export default function LumpsumCalculator() {
  const [investment, setInvestment] = useState<number>(500000);
  const [annualRate, setAnnualRate] = useState<number>(12);
  const [years, setYears] = useState<number>(5);

  const n = 1; // Compounded yearly
  const r = annualRate / 100;

  // Lumpsum Formula
  const maturityAmount = investment * Math.pow(1 + r / n, n * years);

  const estimatedReturns = maturityAmount - investment;

  const formatCurrency = (value: number) =>
    `₹ ${Math.round(value).toLocaleString("en-IN")}`;

  const getRangeBg = (value: number, min: number, max: number) => {
    const percent = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #0b2b7f ${percent}%, #e5e7eb ${percent}%)`;
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
      <div className="lg:max-w-5xl sm:w-full mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 grid gap-10 md:grid-cols-2">
          {/* Left - Inputs */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Lumpsum Calculator
            </h2>

            {/* Investment Amount */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Total Investment
              </label>
              <input
                type="range"
                min={10000}
                max={10000000}
                step={10000}
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                style={{
                  background: getRangeBg(investment, 10000, 10000000),
                }}
                className="range-slider w-full mt-2"
              />
              <p className="mt-1 text-[#f38120] font-semibold">
                {formatCurrency(investment)}
              </p>
            </div>

            {/* Annual Return */}
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
                style={{
                  background: getRangeBg(annualRate, 1, 30),
                }}
                className="range-slider w-full mt-2"
              />
              <p className="mt-1 text-[#f38120] font-semibold">
                {annualRate} %
              </p>
            </div>

            {/* Duration */}
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
                style={{
                  background: getRangeBg(years, 1, 40),
                }}
                className="range-slider w-full mt-2"
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
              investedAmount={investment}
              returns={estimatedReturns}
            />

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-[#0b2b7f]">Invested Amount</span>
                <span className="font-semibold">
                  {formatCurrency(investment)}
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
