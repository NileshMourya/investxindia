"use client";

import { ChangeEvent, useState } from "react";
import SipPieChart from "../SipPieChart";

type investment = {
  monthlyInvestment: number;
  annualRate: number;
  years: number;
};

export default function SipCalculator() {
  const [values, setValues] = useState<investment>({
    monthlyInvestment: 10000,
    annualRate: 12,
    years: 5,
  });

  const months = values.years * 12;

  // ✅ Correct compounded monthly rate
  const monthlyRate = Math.pow(1 + values.annualRate / 100, 1 / 12) - 1;

  const investedAmount = values.monthlyInvestment * months;

  const maturityAmount =
    monthlyRate === 0
      ? investedAmount
      : values.monthlyInvestment *
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate);

  const estimatedReturns = maturityAmount - investedAmount;

  const formatCurrency = (value: number) => value.toLocaleString("en-IN");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const rawValue = value.replace(/,/g, "");
    const numericValue = Number(rawValue);

    if (isNaN(numericValue)) return;

    setValues((prev) => ({
      ...prev,
      [name]: numericValue,
    }));
  };

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
                value={values.monthlyInvestment}
                onChange={handleChange}
                style={{
                  background: getRangeBg(values.monthlyInvestment, 500, 100000),
                }}
                className="range-slider w-full mt-2"
              />

              <p className="mt-1 text-[#f38120] font-semibold">
                ₹
                <input
                  type="text"
                  value={formatCurrency(values.monthlyInvestment)}
                  name="monthlyInvestment"
                  onChange={handleChange}
                  className="p-1 rounded-md"
                ></input>
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
                value={values.annualRate}
                onChange={handleChange}
                style={{
                  background: getRangeBg(values.annualRate, 1, 30),
                }}
                className="range-slider w-full mt-2"
              />

              <p className="mt-1 text-[#f38120] font-semibold">
                <input
                  type="text"
                  value={formatCurrency(values.annualRate)}
                  name="annualRate"
                  onChange={handleChange}
                  className="p-1 rounded-md"
                ></input>
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
                value={values.years}
                onChange={handleChange}
                style={{
                  background: getRangeBg(values.years, 1, 40),
                }}
                className="range-slider w-full mt-2"
              />

              <p className="mt-1 text-[#f38120] font-semibold">
                <input
                  type="text"
                  value={formatCurrency(values.years)}
                  name="years"
                  onChange={handleChange}
                  className="p-1 rounded-md"
                ></input>
              </p>
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
