"use client";
import React from "react";
import { Search, LayoutTemplate, PlayCircle, RefreshCcw } from "lucide-react";

const steps = [
  {
    step: "Step 1",
    title: "Assess",
    description:
      "We evaluate your income, expenses, assets, liabilities, and overall risk tolerance.",
    icon: Search,
  },
  {
    step: "Step 2",
    title: "Structure",
    description:
      "We align your goals with appropriate investment categories and high-level allocations across SIP, SWP, STP, lump sum, and protection solutions.",
    icon: LayoutTemplate,
  },
  {
    step: "Step 3",
    title: "Implement",
    description:
      "We execute the strategy through InvestXIndia E-Wealth and other regulated platforms, with complete documentation support.",
    icon: PlayCircle,
  },
  {
    step: "Step 4",
    title: "Monitor & Refine",
    description:
      "We review performance regularly, rebalance portfolios when required, and adapt the plan to evolving life goals.",
    icon: RefreshCcw,
  },
];

const ProcessSection = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold tracking-widest text-orange-500">
            OUR METHODOLOGY
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            A Disciplined 4-Step Planning & Review Framework
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Each client journey is guided by a structured process designed for
            clarity, accountability, and long-term success.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-slate-200" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-3xl bg-white border border-slate-200 p-6
                             shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Step Badge */}
                  <span className="inline-block text-xs font-semibold tracking-wide text-orange-500 mb-2">
                    {item.step}
                  </span>

                  {/* Icon */}
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl 
                                  bg-orange-100 text-orange-600 mb-4"
                  >
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Step Number Indicator */}
                  <div
                    className="absolute -top-3 -right-3 flex h-8 w-8 items-center 
                                  justify-center rounded-full bg-orange-500 text-white 
                                  text-sm font-bold shadow-md"
                  >
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
