import { ArrowRight } from "lucide-react";
import React from "react";

const cards = [
  {
    tag: "WEALTH BUILDING",
    title: "Mutual Funds – The Right Way to Build Wealth",
    desc: "Discover the right way to build wealth through mutual funds. Learn about inflation impact and systematic investing.",
    icon: "🏦",
    highlight: false,
  },
  {
    tag: "INVESTMENT STRATEGY",
    title: "To Achieve Your All Financial Needs",
    desc: "Discover how SIP in Equity Mutual Funds can help you achieve goals from buying a bike to retirement.",
    icon: "🎯",
    highlight: true,
  },
  {
    tag: "RETIREMENT PLANNING",
    title: "An Additional Source of Cash Flow",
    desc: "Learn how SWP in Hybrid Mutual Funds can provide regular tax-efficient cash flow.",
    icon: "💰",
    highlight: false,
  },
  {
    tag: "CHILD EDUCATION",
    title: "Do You Know What Your Child Wants to Become?",
    desc: "Secure your child’s future dreams through systematic investing in Equity Mutual Funds.",
    icon: "🎓",
    highlight: false,
  },
  {
    tag: "INVESTMENT GUIDANCE",
    title: "With The Right Partner, The Journey Gets Easier",
    desc: "The right financial partner makes investing simple with SIP benefits and goal-based planning.",
    icon: "🤝",
    highlight: false,
  },
  {
    tag: "PORTFOLIO MANAGEMENT",
    title: "Asset Allocation – Diversify Your Investments",
    desc: "Understand why 94% of portfolio performance is driven by asset allocation.",
    icon: "📊",
    highlight: false,
  },
];

const FinanceInsight = () => {
  return (
    <section className="w-full bg-[#f7f9fc] py-16 px-4 md:px-8 mt-5 mb-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs tracking-widest font-semibold text-blue-500 uppercase mb-3">
              Financial Insights
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b7f] leading-tight">
              Expert articles to guide
              <br />
              your investment journey.
            </h2>
          </div>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
            Learn from our comprehensive articles covering SIP strategies,
            retirement planning, wealth building, and more.
          </p>
        </div>
      </div>
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`group cursor-pointer relative rounded-2xl p-4 backdrop-blur-xl transition-all duration-300
           
            hover:-translate-y-2 hover:shadow-xl bg-white/80  hover:border hover:border-[#f38120]`}
            >
              {/* Gradient Hover Glow */}
              <div className="absolute inset-0 rounded-2xl from-orange-400/0 via-orange-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition" />

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-xl mb-4">
                {card.icon}
              </div>

              {/* Tag */}
              <p className="text-xs font-semibold tracking-wide text-[#f38120] mb-2">
                {card.tag}
              </p>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-800 mb-3 leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 mb-6">{card.desc}</p>

              {/* CTA */}
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#f38120] group-hover:gap-3 transition-all">
                Read Article <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default FinanceInsight;
