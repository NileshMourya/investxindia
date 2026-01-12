"use client";

import { ChangeEvent, useState } from "react";
import SipPieChart from "../SipPieChart";

type PPFValues = {
  yearlyInvestment: number;
  years: number;
  rate: number;
};

export default function PPFCalculator() {
  const [values, setValues] = useState<PPFValues>({
    yearlyInvestment: 10000,
    years: 17,
    rate: 7.1,
  });

  const r = values.rate / 100;
  const n = values.years;
  const P = values.yearlyInvestment;

  // PPF Formula
  const maturityValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

  const investedAmount = P * n;
  const totalInterest = maturityValue - investedAmount;

  const formatCurrency = (value: number, isDecimal = false) =>
    isDecimal
      ? value.toString()
      : value.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Remove commas
    const rawValue = value.replace(/,/g, "");

    // Parse decimal numbers
    const numericValue = parseFloat(rawValue);

    // Allow empty input
    if (rawValue === "") {
      setValues((prev) => ({ ...prev, [name]: 0 }));
      return;
    }

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
      <div className="lg:max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 grid gap-10 md:grid-cols-2">
          {/* Inputs */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              PPF Calculator
            </h2>

            {/* Yearly Investment */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Yearly Investment
              </label>
              <input
                type="range"
                name="yearlyInvestment"
                min={500}
                max={150000}
                step={500}
                value={values.yearlyInvestment}
                onChange={handleChange}
                style={{
                  background: getRangeBg(values.yearlyInvestment, 500, 150000),
                }}
                className="range-slider w-full mt-2"
              />
              <div className="flex items-center gap-3 mt-2">
                <input
                  type="text"
                  name="yearlyInvestment"
                  value={formatCurrency(values.yearlyInvestment)}
                  onChange={handleChange}
                  className="w-40 px-3 py-2 border rounded-lg text-sm"
                />
                <span className="text-sm text-gray-500">₹</span>
              </div>
            </div>

            {/* Years */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Time Period (Years)
              </label>
              <input
                type="range"
                name="years"
                min={5}
                max={25}
                step={1}
                value={values.years}
                onChange={handleChange}
                style={{
                  background: getRangeBg(values.years, 5, 25),
                }}
                className="range-slider w-full mt-2"
              />
              <div className="flex items-center gap-3 mt-2">
                <input
                  type="text"
                  name="years"
                  value={formatCurrency(values.years)}
                  onChange={handleChange}
                  className="w-40 px-3 py-2 border rounded-lg text-sm"
                />
                <span className="text-sm text-gray-500">Years</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Rate of Interest (%)
              </label>

              <p className="mt-2 font-semibold text-[#f38120]">
                <p className="mt-1 text-[#f38120] font-semibold">
                  {formatCurrency(values.rate, true)}
                </p>
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="bg-orange-50 rounded-2xl p-6 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              PPF Summary
            </h3>

            <SipPieChart
              investedAmount={investedAmount}
              returns={totalInterest}
            />

            <div className="space-y-4 text-sm mt-6">
              <div className="flex justify-between">
                <span>Invested Amount</span>
                <span>₹{formatCurrency(investedAmount)}</span>
              </div>

              <div className="flex justify-between">
                <span>Total Interest</span>
                <span className="text-[#f38120]">
                  ₹{formatCurrency(totalInterest)}
                </span>
              </div>

              <hr />

              <div className="flex justify-between font-bold">
                <span>Maturity Value</span>
                <span className="text-[#f38120]">
                  ₹{formatCurrency(maturityValue)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
