"use client";

import { ChangeEvent, useMemo, useState } from "react";
import SipPieChart from "../SipPieChart";

type investment = {
  initialInvestment: number;
  monthlyWithdrawal: number;
  annualRate: number;
  years: number;
};

export default function SwpCalculator() {
  const [values, setValues] = useState<investment>({
    initialInvestment: 500000,
    monthlyWithdrawal: 10000,
    annualRate: 8,
    years: 5,
  });

  const months = values.years * 12;
  const monthlyRate = Math.pow(1 + values.annualRate / 100, 1 / 12) - 1;

  const { totalWithdrawal, profit, remainingAmount } = useMemo(() => {
    let balance = values.initialInvestment;

    for (let i = 0; i < months; i++) {
      balance = balance + balance * monthlyRate - values.monthlyWithdrawal;
    }

    const remaining = Math.round(balance);
    const withdrawn = values.monthlyWithdrawal * months;
    const profitValue = withdrawn + remaining - values.initialInvestment;

    return {
      totalWithdrawal: withdrawn,
      profit: profitValue,
      remainingAmount: remaining,
    };
  }, [
    values.initialInvestment,
    values.monthlyWithdrawal,
    values.annualRate,
    values.years,
  ]);

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
      <div className="lg:max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 grid gap-10 md:grid-cols-2">
          {/* Left - Inputs */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              SWP Calculator
            </h2>

            {/* Initial Investment */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Initial Investment
              </label>
              <input
                type="range"
                name="initialInvestment"
                min={100000}
                max={10000000}
                step={50000}
                value={values.initialInvestment}
                onChange={handleChange}
                style={{
                  background: getRangeBg(
                    values.initialInvestment,
                    100000,
                    10000000
                  ),
                }}
                className="range-slider w-full mt-2"
              />
              <div className="flex items-center gap-3 mt-2">
                <input
                  type="text"
                  name="initialInvestment"
                  value={formatCurrency(values.initialInvestment)}
                  onChange={handleChange}
                  className="w-40 px-3 py-2 border rounded-lg text-sm"
                />
                <span className="text-sm text-gray-500">₹</span>
              </div>
            </div>

            {/* Monthly Withdrawal */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Monthly Withdrawal (SWP)
              </label>
              <input
                type="range"
                name="monthlyWithdrawal"
                min={5000}
                max={200000}
                step={1000}
                value={values.monthlyWithdrawal}
                onChange={handleChange}
                style={{
                  background: getRangeBg(
                    values.monthlyWithdrawal,
                    5000,
                    200000
                  ),
                }}
                className="range-slider w-full mt-2"
              />
              <div className="flex items-center gap-3 mt-2">
                <input
                  type="text"
                  name="monthlyWithdrawal"
                  value={formatCurrency(values.monthlyWithdrawal)}
                  onChange={handleChange}
                  className="w-40 px-3 py-2 border rounded-lg text-sm"
                />
                {/* <span className="text-sm text-gray-500">
                  Monthly Withdrawal
                </span> */}
              </div>
            </div>

            {/* Annual Return */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Expected Annual Return (%)
              </label>
              <input
                type="range"
                name="annualRate"
                min={1}
                max={20}
                step={0.5}
                value={values.annualRate}
                onChange={handleChange}
                style={{
                  background: getRangeBg(values.annualRate, 1, 20),
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
                <span className="text-sm text-gray-500">%</span>
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Withdrawal Duration (Years)
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

          {/* Right - Results */}
          <div className="bg-orange-50 rounded-2xl p-6 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              SWP Summary
            </h3>

            <SipPieChart
              investedAmount={values.initialInvestment}
              returns={totalWithdrawal - values.initialInvestment}
            />

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-[#0b2b7f]">Total Withdrawn</span>
                <span className="font-semibold">
                  {formatCurrency(totalWithdrawal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0b2b7f]">Investment</span>
                <span className="font-semibold">
                  {formatCurrency(values.initialInvestment)}
                </span>
              </div>

              <hr />
              <div className="flex justify-between">
                <span className="text-gray-600">Final Value</span>
                <span className="font-semibold text-[#f38120]">
                  {formatCurrency(remainingAmount)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
