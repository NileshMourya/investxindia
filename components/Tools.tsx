import React from "react";

const steps = [
  {
    step: "Step 1",
    title: "Discover Goals",
    description:
      "Understand cashflows, risk appetite, timelines, and existing assets.",
  },
  {
    step: "Step 2",
    title: "Design Allocations",
    description:
      "Blend SIP, STP, and lumpsum allocations aligned with research insights.",
  },
  {
    step: "Step 3",
    title: "Execute & Protect",
    description:
      "Implement across platforms with term insurance and health cover.",
  },
  {
    step: "Step 4",
    title: "Review & Refresh",
    description:
      "Quarterly monitoring, rebalancing, and milestone tracking dashboards.",
  },
];

export default function OurApproach() {
  return (
    <section className="relative bg-gradient-to-b mt-5 mb-5 shadow-sm from-white to-slate-50 py-16 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <p className="text-sm font-semibold tracking-widest text-[#f38120] uppercase">
            Our Approach
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            From discovery to <br className="hidden sm:block" />
            disciplined reviews.
          </h2>
        </div>

        <p className="text-slate-600 text-base sm:text-lg flex items-center">
          Every plan is collaborative, measurable, and supported by regular
          checkpoints so you always know the next action.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-2xl bg-white/80 backdrop-blur-lg p-6 cursor-pointer shadow-md border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Gradient accent */}
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-blue-500 to-indigo-500" />

            <span className="text-sm font-semibold text-orange-500">
              {item.step}
            </span>

            <h3 className="mt-3 text-xl font-semibold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Hover indicator */}
            <div className="mt-6 h-1 w-0 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-12" />
          </div>
        ))}
      </div>
    </section>
  );
}
