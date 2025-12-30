import React from "react";

const stats = [
  {
    title: "Industry Experience",
    value: "15+ Years",
    note: "Banking • Finance • Investments",
  },
  {
    title: "Families Supported",
    value: "1000+",
    note: "India & Global Clients",
  },
  {
    title: "Investment Solutions",
    value: "SIP | SWP | STP",
    note: "Goal-Oriented Execution",
  },
];

const LocalExpertSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 px-4 md:px-8 py-14 mt-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#f38120]">
              Mumbai-Based Advisory
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-[#00113d] leading-snug">
              Trusted local expertise for families across Maharashtra & Gujarat
              — delivered fully online.
            </h3>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              We primarily work with salaried professionals, business owners,
              and retirees across Maharashtra and Gujarat. Our approach blends
              deep regional understanding of income patterns, taxation, and
              family priorities with seamless digital execution.
            </p>
          </div>

          {/* Right Info Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h4 className="text-sm md:text-base font-semibold text-[#00113d] mb-4">
              Why choose a local expert over DIY platforms?
            </h4>

            <ul className="space-y-3 text-sm md:text-base text-gray-700">
              <li>
                • We operate in your time zone and understand local realities
                like bonuses, ESOPs, and tax cycles.
              </li>
              <li>
                • Reviews can be conducted in Marathi, Hindi, or English — in
                person or over video.
              </li>
              <li>
                • We help maintain disciplined investing during volatile
                markets, not just fund selection during bull runs.
              </li>
            </ul>
          </div>
        </div>

        {/* Stats / Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl px-6 py-6
                         text-center shadow-sm hover:shadow-md hover:-translate-y-1
                         transition-all"
            >
              <p className="text-xs font-semibold uppercase text-[#f38120] tracking-wide">
                {item.title}
              </p>

              <p className="mt-2 text-2xl md:text-3xl font-bold text-[#00113d]">
                {item.value}
              </p>

              <p className="mt-1 text-sm text-gray-600">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalExpertSection;
