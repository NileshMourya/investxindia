"use client";

import { ChangeEvent, useState } from "react";
import SipPieChart from "../SipPieChart";

type FDValues = {
  principal: number;
  rate: number | string;
  years: number;
};

export default function FDCalculator() {
  const [values, setValues] = useState<FDValues>({
    principal: 100000,
    rate: 10,
    years: 5,
  });

  const n = 4; // quarterly compounding

  const annualRateNumber = Number(values.rate) || 0;
  const maturityAmount =
    values.principal *
    Math.pow(1 + annualRateNumber / (100 * n), n * values.years);

  const estimatedReturns = maturityAmount - values.principal;

  const formatCurrency = (value: number) =>
    value.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    // Allow typing decimals for text input
    if (type === "text") {
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
      return;
    }

    // Range inputs stay numeric
    setValues((prev) => ({
      ...prev,
      [name]: Number(value),
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
          {/* Left - Inputs */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Fixed Deposit Calculator
            </h2>

            {/* Principal */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Deposit Amount
              </label>
              <input
                type="range"
                name="principal"
                min={10000}
                max={10000000}
                step={10000}
                value={values.principal}
                onChange={handleChange}
                style={{
                  background: getRangeBg(values.principal, 10000, 10000000),
                }}
                className="range-slider w-full mt-2"
              />

              <div className="flex items-center gap-3 mt-2">
                <input
                  type="text"
                  name="principal"
                  value={values.principal}
                  onChange={handleChange}
                  className="w-40 px-3 py-2 border rounded-lg text-sm"
                />
                <span className="text-sm text-gray-500">₹</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Interest Rate (% p.a.)
              </label>
              <input
                type="range"
                name="rate"
                min={1}
                max={15}
                step={0.1}
                value={values.rate}
                onChange={handleChange}
                style={{
                  background: getRangeBg(annualRateNumber, 1, 15),
                }}
                className="range-slider w-full mt-2"
              />
              <div className="flex items-center gap-3 mt-2">
                <input
                  type="text"
                  name="rate"
                  value={values.rate}
                  onChange={handleChange}
                  className="w-40 px-3 py-2 border rounded-lg text-sm"
                />
                <span className="text-sm text-gray-500">%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Tenure (Years)
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
                <span className="text-sm text-gray-500">Years</span>
              </div>
            </div>
          </div>

          {/* Right - Results */}
          <div className="bg-orange-50 rounded-2xl p-6 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              FD Summary
            </h3>

            <SipPieChart
              investedAmount={values.principal}
              returns={estimatedReturns}
            />

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-[#0b2b7f]">Principal Amount</span>
                <span className="font-semibold">
                  ₹{formatCurrency(values.principal)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Interest Earned</span>
                <span className="font-semibold text-[#f38120]">
                  ₹{formatCurrency(estimatedReturns)}
                </span>
              </div>

              <hr />

              <div className="flex justify-between text-base">
                <span className="font-semibold text-gray-800">
                  Expected Market Value
                </span>
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
