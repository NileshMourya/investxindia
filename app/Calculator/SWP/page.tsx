"use client";

import { useMemo, useState } from "react";
import SipPieChart from "../SipPieChart";

export default function SwpCalculator() {
  const [initialInvestment, setInitialInvestment] = useState<number>(500000);
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState<number>(10000);
  const [annualRate, setAnnualRate] = useState<number>(8);
  const [years, setYears] = useState<number>(5);

  const months = years * 12;
  const monthlyRate = Math.pow(1 + annualRate / 100, 1 / 12) - 1;

  const { totalWithdrawal, profit, remainingAmount } = useMemo(() => {
    let balance = initialInvestment;

    for (let i = 0; i < months; i++) {
      balance = balance + balance * monthlyRate - monthlyWithdrawal;
    }

    const remaining = Math.round(balance);
    const withdrawn = monthlyWithdrawal * months;
    const profitValue = withdrawn + remaining - initialInvestment;

    return {
      totalWithdrawal: withdrawn,
      profit: profitValue,
      remainingAmount: remaining,
    };
  }, [initialInvestment, monthlyWithdrawal, annualRate, years]);

  const formatCurrency = (value: number) =>
    `₹ ${Math.round(value).toLocaleString("en-IN")}`;

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
                min={100000}
                max={10000000}
                step={50000}
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                style={{
                  background: getRangeBg(initialInvestment, 100000, 10000000),
                }}
                className="range-slider w-full mt-2"
              />
              <p className="mt-1 text-[#f38120] font-semibold">
                {formatCurrency(initialInvestment)}
              </p>
            </div>

            {/* Monthly Withdrawal */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Monthly Withdrawal (SWP)
              </label>
              <input
                type="range"
                min={5000}
                max={200000}
                step={1000}
                value={monthlyWithdrawal}
                onChange={(e) => setMonthlyWithdrawal(Number(e.target.value))}
                style={{
                  background: getRangeBg(monthlyWithdrawal, 5000, 200000),
                }}
                className="range-slider w-full mt-2"
              />
              <p className="mt-1 text-[#f38120] font-semibold">
                {formatCurrency(monthlyWithdrawal)}
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
                max={20}
                step={0.5}
                value={annualRate}
                onChange={(e) => setAnnualRate(Number(e.target.value))}
                style={{
                  background: getRangeBg(annualRate, 1, 20),
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
                Withdrawal Duration (Years)
              </label>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                style={{
                  background: getRangeBg(years, 1, 30),
                }}
                className="range-slider w-full mt-2"
              />
              <p className="mt-1 text-[#f38120] font-semibold">{years} Years</p>
            </div>
          </div>

          {/* Right - Results */}
          <div className="bg-orange-50 rounded-2xl p-6 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              SWP Summary
            </h3>

            <SipPieChart
              investedAmount={initialInvestment}
              returns={totalWithdrawal - initialInvestment}
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
                  {formatCurrency(initialInvestment)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Profit</span>
                <span className="font-semibold text-green-600">
                  {formatCurrency(remainingAmount)}
                </span>
              </div>

              <hr />

              <div className="flex justify-between text-base">
                <span className="font-semibold text-gray-800">
                  Total Profit
                </span>
                <span className="font-bold text-[#f38120]">
                  {formatCurrency(profit)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
