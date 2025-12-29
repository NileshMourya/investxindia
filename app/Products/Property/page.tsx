"use client";

import { Home, Building2, Factory, Map, Key, LineChart } from "lucide-react";

const propertyTypes = [
  {
    icon: <Home />,
    title: "Residential Property",
    desc: "Apartments, villas & houses used for living purposes.",
    benefits: ["High housing demand", "Easy to rent", "Lower risk"],
    ideal: "Beginners & long-term investors",
  },
  {
    icon: <Building2 />,
    title: "Commercial Property",
    desc: "Offices, shops, malls & business spaces.",
    benefits: [
      "Higher rental yield",
      "Long lease tenure",
      "Tenant-managed maintenance",
    ],
    ideal: "Experienced investors",
  },
  {
    icon: <Factory />,
    title: "Industrial Property",
    desc: "Factories, warehouses & logistics hubs.",
    benefits: [
      "Stable long-term leases",
      "Low management",
      "E-commerce driven demand",
    ],
    ideal: "Low-maintenance income seekers",
  },
  {
    icon: <Map />,
    title: "Land Investment",
    desc: "Undeveloped land for future appreciation.",
    benefits: ["Low maintenance", "High appreciation", "Flexible future use"],
    ideal: "Long-term vision investors",
  },
  {
    icon: <Key />,
    title: "Rental Property",
    desc: "Properties leased for monthly income.",
    benefits: ["Regular cash flow", "Tax benefits", "Passive income"],
    ideal: "Income-focused investors",
  },
  {
    icon: <LineChart />,
    title: "REITs",
    desc: "Indirect real estate investment without ownership.",
    benefits: ["Low entry cost", "High liquidity", "Professional management"],
    ideal: "Hands-free investors",
  },
];

const cityGrowth = [
  { city: "Delhi-NCR", value: 19 },
  { city: "Bengaluru", value: 15 },
  { city: "Pune", value: 13 },
  { city: "Hyderabad", value: 13 },
  { city: "Ahmedabad", value: 13 },
  { city: "Mumbai (MMR)", value: 6 },
  { city: "Kolkata", value: 7 },
  { city: "Chennai", value: 4 },
];

export default function PropertyInvestmentSection() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#f38120]">
            Property Investment
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            A Complete Guide to Real Estate Investing
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Property investment involves purchasing real estate to earn returns
            through rental income, capital appreciation, or both. It remains one
            of the most reliable long-term wealth creation strategies.
          </p>
        </div>

        {/* Why Invest */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            "Stable long-term returns",
            "Regular rental income",
            "Inflation protection",
            "Tangible asset ownership",
            "Leverage through loans",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-sm"
            >
              <p className="text-sm font-medium text-slate-700">{item}</p>
            </div>
          ))}
        </div>

        {/* Property Types */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 text-center mb-10">
            Types of Property Investments
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertyTypes.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-3 text-[#f38120]">
                  {item.icon}
                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                </div>

                <p className="text-sm text-slate-600 mb-4">{item.desc}</p>

                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  {item.benefits.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>

                <p className="text-xs font-medium text-[#f38120]">
                  Ideal for: {item.ideal}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Factors */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Key Factors to Consider Before Investing
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 text-sm text-slate-600">
            <div>📍 Location & infrastructure</div>
            <div>💰 Budget & loan eligibility</div>
            <div>📊 Market demand & pricing</div>
            <div>📄 Legal verification</div>
            <div>🎯 Investment objective</div>
          </div>
        </div>

        {/* Growth Chart */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 text-center mb-8">
            Property Price Growth in India (Top Cities)
          </h3>

          <div className="space-y-4 max-w-3xl mx-auto">
            {cityGrowth.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm text-slate-700 mb-1">
                  <span>{item.city}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-[#f38120] h-3 rounded-full"
                    style={{ width: `${item.value * 4}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
