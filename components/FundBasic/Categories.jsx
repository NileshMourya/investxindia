"use client";
import React from "react";
import { TrendingUp, Landmark, Layers, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Equity Funds",
    description:
      "Invest mainly in shares of companies. Suitable for long-term goals (5+ years) with higher growth potential and higher volatility.",
    icon: TrendingUp,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Debt / Fixed Income Funds",
    description:
      "Invest in bonds, government securities, and money-market instruments. Aim for stability, income, and lower risk than equity funds.",
    icon: Landmark,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Hybrid / Balanced Funds",
    description:
      "Invest in a mix of equity and debt to balance growth with stability. Suitable for moderate-risk investors.",
    icon: Layers,
    gradient: "from-orange-500 to-rose-500",
  },
];

const MutualFundCategories = () => {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Main Categories of Mutual Funds
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Mutual funds are broadly classified based on their investment
            objective and asset allocation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-white p-6 shadow-sm border border-slate-200 
                           transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl 
                              bg-gradient-to-r ${item.gradient} text-white mb-5`}
                >
                  <Icon size={22} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* CTA */}
                <div
                  className="mt-5 flex items-center gap-2 text-sm font-medium text-blue-600 opacity-0 
                                group-hover:opacity-100 transition-opacity"
                >
                  Learn more <ArrowRight size={16} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-xs sm:text-sm text-slate-500 text-center max-w-4xl mx-auto">
          Each category includes multiple SEBI-defined sub-categories such as
          large-cap, mid-cap, liquid, and short-duration funds. Selection should
          depend on your goals, time horizon, and risk profile.
          <span className="text-blue-600 font-medium cursor-pointer ml-1">
            Learn how to choose the right fund
          </span>
        </p>
      </div>
    </section>
  );
};

export default MutualFundCategories;
