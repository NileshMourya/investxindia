"use client";
import React from "react";
import { Search, Target, TrendingUp, ArrowRight } from "lucide-react";

const insights = [
  {
    label: "Mutual Fund Guide",
    title: "Beginner’s Guide to Selecting the Right Mutual Fund",
    description:
      "Discover a step-by-step approach to picking the right mutual fund. This beginner-friendly guide explains goal setting, risk evaluation, fund analysis, performance checks, and why a structured process builds investing confidence.",
    icon: <Search />,
  },
  {
    label: "Mutual Fund Guide",
    title: "Choosing Mutual Funds That Match Your Financial Goals",
    description:
      "Learn how to select mutual funds based on goals such as retirement planning, education funding, or long-term wealth creation. Includes insights on risk profiling, fund manager assessment, expense ratios, and SIP suitability.",
    icon: <Target />,
  },
  {
    label: "Mutual Fund Guide",
    title:
      "Systematic Transfer Plan (STP) Explained: Meaning, Advantages, Types & Ideal Use Cases",
    description:
      "An in-depth explanation of STP in mutual funds—how it works, key benefits, different STP options, and situations where STP may be a better choice than lump sum or SIP investing.",
    icon: <TrendingUp />,
  },
  {
    label: "Mutual Fund Guide",
    title:
      "STP in Mutual Funds: A Smarter Approach to Investing Lump Sum Amounts",
    description:
      "An easy-to-understand guide on using Systematic Transfer Plans to gradually move lump sum money into equity funds. Includes relatable examples like bonuses, fixed deposit maturity, and property sale proceeds.",
    icon: <Target />,
  },
  {
    label: "Mutual Fund Guide",
    title:
      "IDCW in Mutual Funds Explained: Meaning, Benefits & When It Makes Sense",
    description:
      "A complete guide to IDCW (Income Distribution cum Capital Withdrawal) in mutual funds, covering its meaning, benefits, tax impact, comparison with SWP and growth options, and when IDCW may suit investors seeking periodic income.",
    icon: <TrendingUp />,
  },
];

const ExpertInsights = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-widest text-orange-500 mb-3">
            EXPERT INSIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Deep Dive into Mutual Funds
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Explore our comprehensive guides on choosing the right mutual funds,
            understanding STP, IDCW, and more to make informed investment
            decisions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={index}
                className="group relative rounded-3xl bg-white border border-slate-200 p-7
                           shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Floating Icon */}
                <div className="mb-6">
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl 
                                  bg-orange-100 text-orange-600"
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Label */}
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-500 mb-2">
                  {item.label}
                </p>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* CTA */}
                <div className="mt-auto">
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold 
                                   text-orange-600 group-hover:gap-3 transition-all"
                  >
                    Read Article <ArrowRight size={16} />
                  </span>
                </div>

                {/* Accent */}
                <span
                  className="absolute left-0 top-8 h-20 w-1 rounded-r-full bg-orange-400 opacity-0 
                                 group-hover:opacity-100 transition-opacity"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertInsights;
