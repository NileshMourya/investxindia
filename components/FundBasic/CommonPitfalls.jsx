"use client";
import React from "react";
import {
  AlertTriangle,
  TrendingDown,
  PauseCircle,
  Layers,
  Percent,
} from "lucide-react";

const pitfalls = [
  {
    title: "Relying Too Much on Historical Returns",
    description:
      "Strong past performance doesn’t ensure future success. Evaluate consistency, the fund manager’s experience, and how well the fund fits your financial objectives.",
    icon: TrendingDown,
  },
  {
    title: "Pausing SIPs When Markets Fall",
    description:
      "Market ups and downs are expected. Halting SIPs during corrections can cause you to miss the advantage of accumulating units at lower prices.",
    icon: PauseCircle,
  },
  {
    title: "Holding Too Many Funds",
    description:
      "Excessive diversification can reduce potential gains and make portfolio management harder. Generally, 4–6 carefully selected funds are enough.",
    icon: Layers,
  },
  {
    title: "Overlooking Expense Costs",
    description:
      "Minor variations in expense ratios can add up over time and affect returns. Always compare costs among funds in the same category.",
    icon: Percent,
  },
];

const CommonPitfalls = () => {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
              <AlertTriangle size={22} />
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Common Pitfalls to Avoid
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Being aware of these common mistakes can help you make better, more
            disciplined investment decisions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {pitfalls.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-slate-100 p-6 
                           transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl 
                                  bg-amber-100 text-amber-600 shrink-0"
                  >
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommonPitfalls;
