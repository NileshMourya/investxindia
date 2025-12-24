import React from "react";

const services = [
  {
    title: "Mutual Fund Strategies",
    desc: "Diversified equity and debt baskets curated by our research desk.",
    tag: "CORE",
  },
  {
    title: "Systematic Investment Plans (SIP)",
    desc: "Automated monthly allocations with glide paths for every risk profile.",
    tag: "POPULAR",
  },
  {
    title: "Systematic Withdrawal Plans (SWP)",
    desc: "Tax-aware withdrawals calibrated to lifestyle or business needs.",
  },
  {
    title: "Retirement Plans",
    desc: "Defined outcome strategies targeting inflation-beating income.",
  },
  {
    title: "Child Future Expense Plans",
    desc: "Education and corpus plans that sync with tuition timelines.",
    tag: "NEW",
  },
];

const tagStyles = {
  CORE: "bg-blue-50 text-blue-600",
  POPULAR: "bg-orange-50 text-orange-600",
  NEW: "bg-green-50 text-green-600",
};

const ServicesSection = () => {
  return (
    <section className="w-full from-[#f7f9fc] to-white py-20 px-4 md:px-8 mt-5 mb-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <p className="text-xs tracking-widest font-semibold text-blue-500 uppercase mb-3">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b7f] leading-tight">
              Expert solutions aligned to <br className="hidden sm:block" />
              every life goal.
            </h2>
          </div>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
            Mutual funds, SIPs, SWPs, retirement income strategies, child future
            plans, goal-based solutions, and protection—each backed by
            disciplined reviews and transparent reporting.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-7 shadow-[0_20px_45px_rgba(0,0,0,0.08)]
                         hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)]
                         transition-all duration-300"
            >
              {/* Tag */}
              {service.tag && (
                <span
                  className={`absolute top-6 right-6 text-xs font-semibold px-3 py-1 rounded-full ${[
                    tagStyles,
                  ]}`}
                >
                  {service.tag}
                </span>
              )}

              <h3 className="text-lg font-semibold text-[#0b2b7f] mb-3 pr-16">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                {service.desc}
              </p>

              <button className="text-sm font-semibold text-[#0b2b7f] inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
