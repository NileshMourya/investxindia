import { ArrowRight } from "lucide-react";
import React from "react";

const cards = [
  {
    tag: "WEALTH CREATION",
    title: "Mutual Funds as a Smart Path to Wealth",
    desc: "Learn how mutual funds help grow wealth over time through disciplined and inflation-aware investing.",
    icon: "🏦",
    highlight: false,
  },
  {
    tag: "INVESTMENT PLANNING",
    title: "Meeting Life Goals with the Right Strategy",
    desc: "See how equity SIPs can support financial goals—from short-term needs to long-term milestones.",
    icon: "🎯",
    highlight: true,
  },
  {
    tag: "RETIREMENT INCOME",
    title: "Creating a Reliable Stream of Cash Flow",
    desc: "Understand how SWPs in hybrid funds can deliver consistent and tax-efficient income.",
    icon: "💰",
    highlight: false,
  },
  {
    tag: "CHILD FUTURE PLANNING",
    title: "Planning Today for Your Child’s Tomorrow",
    desc: "Build a strong financial foundation for your child’s education through systematic equity investing.",
    icon: "🎓",
    highlight: false,
  },
  {
    tag: "FINANCIAL ADVISORY",
    title: "A Trusted Partner for Your Investment Journey",
    desc: "Experience simpler investing with expert guidance, SIP discipline, and goal-based planning.",
    icon: "🤝",
    highlight: false,
  },
  {
    tag: "PORTFOLIO STRATEGY",
    title: "Asset Allocation for Balanced Growth",
    desc: "Discover how strategic asset allocation plays a key role in long-term portfolio performance.",
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
            <p className="text-xs tracking-widest font-semibold text-[#f38120] uppercase mb-3">
              Market Perspectives
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#00113d] leading-tight">
              Expert perspectives for
              <br />
              smarter investment journeys
            </h2>
          </div>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
            Gain clarity through expert-led articles covering SIP strategies,
            retirement readiness, and wealth management insights.
          </p>
        </div>
      </div>
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`group cursor-pointer relative rounded-2xl p-4 backdrop-blur-xl transition-all duration-300 shadow-md
            hover:-translate-y-2 hover:shadow-xl bg-white/80 `}
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
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default FinanceInsight;
