"use client";
import React from "react";
import { Search, Target, TrendingUp, ArrowRight } from "lucide-react";

const insights = [
  {
    label: "Mutual Fund Guide",
    title: "How to Choose the Right Mutual Fund – Complete Guide for Beginners",
    description:
      "Learn how to choose the right mutual fund for your goals. A complete beginner’s guide covering risk assessment, fund analysis, performance review, and how structured selection helps you invest with confidence.",
    icon: <Search />,
  },
  {
    label: "Mutual Fund Guide",
    title: "How to Choose the Right Mutual Fund for Your Goals",
    description:
      "Understand how to align mutual funds with goals like retirement, education, or wealth creation. Covers risk profiling, fund manager evaluation, expense ratios, and SIP-friendly recommendations.",
    icon: <Target />,
  },
  {
    label: "Mutual Fund Guide",
    title:
      "Systematic Transfer Plan (STP) in Mutual Funds: Meaning, Benefits, Types & When to Use It",
    description:
      "A detailed guide to STP in mutual funds — meaning, how it works, benefits, types of STP, and when STP makes more sense than lump sum or SIP investments.",
    icon: <TrendingUp />,
  },
  {
    label: "Mutual Fund Guide",
    title: "STP Mutual Funds: A Smart Way to Invest Lump Sum Gradually",
    description:
      "Simple, story-based guide to how Systematic Transfer Plan (STP) in mutual funds helps you deploy lump sum amounts gradually into equity. Real-life scenarios for bonus, FD maturity and property sale proceeds.",
    icon: <Target />,
  },
  {
    label: "Mutual Fund Guide",
    title:
      "Understanding IDCW in Mutual Funds: Meaning, Benefits, and When to Choose It",
    description:
      "Learn about IDCW (Income Distribution cum Capital Withdrawal) in mutual funds. Comprehensive guide on IDCW meaning, benefits, tax implications, comparison with SWP and growth plans, and when to choose IDCW for regular income from mutual funds.",
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
