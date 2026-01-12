"use client";

import { ChangeEvent, useMemo, useState } from "react";
import SipPieChart from "../SipPieChart";

type NPSInvestment = {
  monthlyContribution: number;
  annualRate: number;
  age: number;
};
const RETIREMENT_AGE = 60;
export default function NPSCalculator() {
  const [values, setValues] = useState<NPSInvestment>({
    monthlyContribution: 10000,
    annualRate: 9,
    age: 20,
  });

  const yearsToInvest = RETIREMENT_AGE - values.age;
  const months = yearsToInvest * 12;

  const monthlyRate = values.annualRate / 100 / 12;

  const maturityAmount = useMemo(() => {
    return (
      values.monthlyContribution *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
    );
  }, [values.monthlyContribution, monthlyRate, months]);

  const totalInvestment = values.monthlyContribution * months;
  const interestEarned = maturityAmount - totalInvestment;

  /** NPS Rules */
  const minAnnuityInvestment = maturityAmount * 0.4;

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
              NPS Calculator
            </h2>

            {/* Monthly Contribution */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Monthly Contribution
              </label>
              <input
                type="range"
                name="monthlyContribution"
                min={500}
                max={50000}
                step={500}
                value={values.monthlyContribution}
                onChange={handleChange}
                style={{
                  background: getRangeBg(
                    values.monthlyContribution,
                    500,
                    50000
                  ),
                }}
                className="range-slider w-full mt-2"
              />
              <div className="flex items-center gap-3 mt-2">
                <input
                  type="text"
                  name="monthlyContribution"
                  value={formatCurrency(values.monthlyContribution)}
                  onChange={handleChange}
                  className="w-40 px-3 py-2 border rounded-lg text-sm"
                />
                <span className="text-sm text-gray-500">₹</span>
              </div>
            </div>

            {/* Expected Return */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Expected Annual Return (%)
              </label>
              <input
                type="range"
                name="annualRate"
                min={6}
                max={14}
                step={0.5}
                value={values.annualRate}
                onChange={handleChange}
                style={{
                  background: getRangeBg(values.annualRate, 6, 14),
                }}
                className="range-slider w-full mt-2"
              />
              <div className="flex items-center gap-3 mt-2">
                <input
                  type="text"
                  name="annualRate"
                  value={formatCurrency(values.annualRate)}
                  onChange={handleChange}
                  className="w-40 px-3 py-2 border rounded-lg text-sm"
                />
                <span className="text-sm text-gray-500">₹</span>
              </div>
            </div>

            {/* Years till Retirement */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Your Age
              </label>
              <input
                type="range"
                name="age"
                min={1}
                max={40}
                step={1}
                value={values.age}
                onChange={handleChange}
                style={{
                  background: getRangeBg(values.age, 5, 35),
                }}
                className="range-slider w-full mt-2"
              />
              <div className="flex items-center gap-3 mt-2">
                <input
                  type="text"
                  name="age"
                  value={formatCurrency(values.age)}
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
              NPS Investment Summary
            </h3>

            <SipPieChart
              investedAmount={totalInvestment}
              returns={interestEarned}
            />

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Total investment</span>
                <span>₹{formatCurrency(totalInvestment)}</span>
              </div>

              <div className="flex justify-between">
                <span>Interest earned</span>
                <span>₹{formatCurrency(interestEarned)}</span>
              </div>

              <div className="flex justify-between font-semibold">
                <span>Maturity amount</span>
                <span>₹{formatCurrency(maturityAmount)}</span>
              </div>

              <div className="flex justify-between text-green-700 font-semibold">
                <span>Min. annuity investment</span>
                <span>₹{formatCurrency(minAnnuityInvestment)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
