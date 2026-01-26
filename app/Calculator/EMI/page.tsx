"use client";

import { ChangeEvent, useState } from "react";
import EmiChart from "../EmiChart";

type EMIValues = {
  loanAmount: number;
  annualRate: number | string;
  years: number;
};

export default function EMICalculator() {
  const [values, setValues] = useState<EMIValues>({
    loanAmount: 1000000,
    annualRate: 6.5,
    years: 5,
  });

  // Monthly calculations
  const annualRateNumber = Number(values.annualRate) || 0;
  const monthlyRate = annualRateNumber / (12 * 100);
  const totalMonths = values.years * 12;

  // EMI Formula
  const emi =
    (values.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalAmount = emi * totalMonths;
  const totalInterest = totalAmount - values.loanAmount;

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
          {/* Left Inputs */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              EMI Calculator
            </h2>

            {/* Loan Amount */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Loan Amount
              </label>
              <input
                type="range"
                name="loanAmount"
                min={100000}
                max={5000000}
                step={50000}
                value={values.loanAmount}
                onChange={handleChange}
                style={{
                  background: getRangeBg(values.loanAmount, 100000, 5000000),
                }}
                className="range-slider w-full mt-2"
              />
              <div className="flex items-center gap-3 mt-2">
                <input
                  type="text"
                  name="loanAmount"
                  value={values.loanAmount}
                  onChange={handleChange}
                  className="w-40 px-3 py-2 border rounded-lg text-sm"
                />
                <span className="text-sm text-gray-500">₹</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Rate of Interest (% p.a.)
              </label>
              <input
                type="range"
                name="annualRate"
                min={1}
                max={15}
                step={0.1}
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

            {/* Tenure */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Loan Tenure (Years)
              </label>
              <input
                type="range"
                name="years"
                min={1}
                max={30}
                step={1}
                value={values.years}
                onChange={handleChange}
                style={{
                  background: getRangeBg(values.years, 1, 30),
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
          </div>

          {/* Right Results */}
          <div className="bg-orange-50 rounded-2xl p-6 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Loan Summary
            </h3>

            <EmiChart
              investedAmount={values.loanAmount}
              returns={totalInterest}
            />

            <div className="space-y-4 text-sm mt-6">
              <div className="flex justify-between">
                <span>Monthly EMI</span>
                <span className="font-semibold">₹{formatCurrency(emi)}</span>
              </div>

              <div className="flex justify-between">
                <span>Principal Amount</span>
                <span>₹{formatCurrency(values.loanAmount)}</span>
              </div>

              <div className="flex justify-between">
                <span>Total Interest</span>
                <span className="text-red-600">
                  ₹{formatCurrency(totalInterest)}
                </span>
              </div>

              <hr />

              <div className="flex justify-between font-bold">
                <span>Total Amount</span>
                <span className="text-[#f38120]">
                  ₹{formatCurrency(totalAmount)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
