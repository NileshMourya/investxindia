"use client";

import { ChangeEvent, useState, useMemo } from "react";
import SipPieChart from "../SipPieChart";

type Investment = {
  monthlyInvestment: number;
  annualRate: number | string;
  years: number;
};

export default function RDCalculator() {
  const [values, setValues] = useState<Investment>({
    monthlyInvestment: 5000,
    annualRate: 8,
    years: 1,
  });

  const N = 4; // Quarterly compounding
  const annualRateNumber = Number(values.annualRate) || 0;
  const R = annualRateNumber / 100;
  const totalMonths = values.years * 12;

  /** RD Maturity Calculation */
  const maturityAmount = useMemo(() => {
    let total = 0;

    for (let month = 1; month <= totalMonths; month++) {
      const remainingMonths = totalMonths - month + 1;
      total +=
        values.monthlyInvestment *
        Math.pow(1 + R / N, (N * remainingMonths) / 12);
    }

    return total;
  }, [values, R]);

  const investedAmount = values.monthlyInvestment * totalMonths;
  const estimatedReturns = maturityAmount - investedAmount;

  const formatCurrency = (value: number) =>
    value.toLocaleString("en-IN", { maximumFractionDigits: 2 });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = Number(value.replace(/,/g, ""));
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
              RD Calculator
            </h2>

            {/* Monthly Investment */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Monthly Investment
              </label>
              <input
                type="range"
                name="monthlyInvestment"
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
              <div className="flex items-center gap-3 mt-2">
                <input
                  type="text"
                  name="monthlyInvestment"
                  value={values.monthlyInvestment}
                  onChange={handleChange}
                  className="w-40 px-3 py-2 border rounded-lg text-sm"
                />
                <span className="text-sm text-gray-500">₹</span>
              </div>
            </div>

            {/* Annual Interest */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Interest Rate (%)
              </label>
              <input
                type="range"
                name="annualRate"
                min={1}
                max={15}
                step={0.25}
                value={values.annualRate}
                onChange={handleChange}
                style={{
                  background: getRangeBg(annualRateNumber, 1, 15),
                }}
                className="range-slider w-full mt-2"
              />
              <div className="flex items-center gap-3 mt-2">
                <input
                  type="text"
                  name="annualRate"
                  value={values.annualRate}
                  onChange={handleChange}
                  className="w-40 px-3 py-2 border rounded-lg text-sm"
                />
                <span className="text-sm text-gray-500">%</span>
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Duration (Years)
              </label>
              <input
                type="range"
                name="years"
                min={1}
                max={10}
                step={1}
                value={values.years}
                onChange={handleChange}
                style={{
                  background: getRangeBg(values.years, 1, 10),
                }}
                className="range-slider w-full mt-2"
              />
              <div className="flex items-center gap-3 mt-2">
                <input
                  type="text"
                  name="years"
                  value={values.years}
                  onChange={handleChange}
                  className="w-40 px-3 py-2 border rounded-lg text-sm"
                />
                <span className="text-sm text-gray-500">₹</span>
              </div>
            </div>
          </div>

          {/* Right - Results */}
          <div className="bg-orange-50 rounded-2xl p-6 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              RD Investment Summary
            </h3>

            <SipPieChart
              investedAmount={investedAmount}
              returns={estimatedReturns}
            />

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-[#0b2b7f]">Total Investment</span>
                <span className="font-semibold">
                  ₹{formatCurrency(investedAmount)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Returns</span>
                <span className="font-semibold text-[#f38120]">
                  ₹{formatCurrency(estimatedReturns)}
                </span>
              </div>

              <hr />

              <div className="flex justify-between text-base">
                <span className="font-semibold text-gray-800">Total Value</span>
                <span className="font-bold text-[#f38120]">
                  ₹{formatCurrency(maturityAmount)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
