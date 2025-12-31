// "use client";

// import { useMemo, useState } from "react";

// const formatCurrency = (value: number) =>
//   value.toLocaleString("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   });

// export default function SWPCalculator() {
//   const [investment, setInvestment] = useState(500000);
//   const [withdrawal, setWithdrawal] = useState(10000);
//   const [rate, setRate] = useState(8);
//   const [years, setYears] = useState(5);

//   const result = useMemo(() => {
//     const monthlyRate = rate / 100 / 12;
//     const months = years * 12;

//     let balance = investment;
//     let totalWithdrawn = 0;

//     for (let i = 0; i < months; i++) {
//       balance = balance * (1 + monthlyRate) - withdrawal;
//       totalWithdrawn += withdrawal;
//       if (balance <= 0) {
//         balance = 0;
//         break;
//       }
//     }

//     return {
//       totalWithdrawn,
//       finalValue: Math.round(balance),
//     };
//   }, [investment, withdrawal, rate, years]);

//   return (
//     <section className="w-full max-w-5xl mx-auto px-4 py-10">
//       <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 md:p-10">
//         <h2 className="text-2xl md:text-3xl font-bold text-[#0b2b7f] mb-8">
//           SWP (Systematic Withdrawal Plan) Calculator
//         </h2>

//         {/* Inputs */}
//         <div className="grid md:grid-cols-2 gap-8">
//           <RangeInput
//             label="Total Investment"
//             value={investment}
//             min={100000}
//             max={5000000}
//             step={50000}
//             display={formatCurrency(investment)}
//             onChange={setInvestment}
//           />

//           <RangeInput
//             label="Withdrawal per Month"
//             value={withdrawal}
//             min={1000}
//             max={100000}
//             step={1000}
//             display={formatCurrency(withdrawal)}
//             onChange={setWithdrawal}
//           />

//           <RangeInput
//             label="Expected Return Rate (p.a)"
//             value={rate}
//             min={1}
//             max={15}
//             step={0.5}
//             display={`${rate}%`}
//             onChange={setRate}
//           />

//           <RangeInput
//             label="Time Period"
//             value={years}
//             min={1}
//             max={30}
//             step={1}
//             display={`${years} Years`}
//             onChange={setYears}
//           />
//         </div>

//         {/* Results */}
//         <div className="mt-10 grid sm:grid-cols-3 gap-6">
//           <ResultCard
//             title="Total Investment"
//             value={formatCurrency(investment)}
//           />
//           <ResultCard
//             title="Total Withdrawal"
//             value={formatCurrency(result.totalWithdrawn)}
//           />
//           <ResultCard
//             highlight
//             title="Final Value"
//             value={formatCurrency(result.finalValue)}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------- Reusable Components ---------- */

// function RangeInput({
//   label,
//   value,
//   min,
//   max,
//   step,
//   display,
//   onChange,
// }: {
//   label: string;
//   value: number;
//   min: number;
//   max: number;
//   step: number;
//   display: string;
//   onChange: (val: number) => void;
// }) {
//   return (
//     <div>
//       <div className="flex justify-between items-center mb-2">
//         <p className="text-sm font-medium text-gray-700">{label}</p>
//         <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">
//           {display}
//         </span>
//       </div>

//       <input
//         type="range"
//         min={min}
//         max={max}
//         step={step}
//         value={value}
//         onChange={(e) => onChange(Number(e.target.value))}
//         className="w-full accent-emerald-500 cursor-pointer"
//       />
//     </div>
//   );
// }

// function ResultCard({
//   title,
//   value,
//   highlight,
// }: {
//   title: string;
//   value: string;
//   highlight?: boolean;
// }) {
//   return (
//     <div
//       className={`rounded-2xl p-5 text-center shadow-md ${
//         highlight
//           ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white"
//           : "bg-gray-50"
//       }`}
//     >
//       <p className={`text-sm ${highlight ? "text-white/80" : "text-gray-500"}`}>
//         {title}
//       </p>
//       <p className="text-xl md:text-2xl font-bold mt-1">{value}</p>
//     </div>
//   );
// }

import React from "react";
import UnderMaintenance from "@/components/ui/Maintanance";
const page = () => {
  return (
    <div>
      <UnderMaintenance />
    </div>
  );
};

export default page;
