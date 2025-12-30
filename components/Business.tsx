import React from "react";

const segments = [
  {
    title: "Working Professionals",
    desc: "Build SIPs for retirement, tax efficiency, and children’s goals as your income grows over time.",
    cta: "Start SIP Planning →",
  },
  {
    title: "Entrepreneurs & Business Owners",
    desc: "Convert uneven business cashflows into systematic investments and emergency buffers.",
    cta: "Structure My Goals →",
  },
  {
    title: "NRIs & Global Indians",
    desc: "Design India-focused portfolios while coordinating overseas income and compliance.",
    cta: "View NRI Solutions →",
  },
  {
    title: "Pre-Retirement Families",
    desc: "Streamline policies, optimise insurance cover, and plan SWP for stable retirement income.",
    cta: "Review My Strategy →",
  },
];

const WhoWeServe = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f7f9fc] to-white py-16 px-4 md:px-8 mt-6 mb-6">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f38120] mb-3">
              Who We Serve
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#00113d] leading-tight">
              Structured investing for <br className="hidden sm:block" />
              Indian families & professionals
            </h2>
          </div>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
            From starting your first SIP to planning dependable retirement
            income, we help turn your cashflows into clearly defined mutual fund
            and protection strategies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-6 border border-slate-100
                         shadow-sm hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300"
            >
              {/* Accent line */}
              <div className="h-1 w-10 bg-[#f38120] rounded-full mb-4" />

              <h3 className="text-lg font-semibold text-[#00113d] mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {item.desc}
              </p>

              <button
                className="text-sm font-semibold text-[#264796]
                                 group-hover:underline underline-offset-4"
              >
                {item.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
