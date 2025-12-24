import React from "react";

const audiences = [
  {
    title: "Salaried Professionals",
    desc: "Plan SIPs for retirement, tax saving, and children’s future with increasing income.",
    cta: "Plan monthly SIP →",
  },
  {
    title: "Business Owners",
    desc: "Turn irregular cashflows into disciplined investments and contingency reserves.",
    cta: "Map my goals →",
  },
  {
    title: "NRIs & Global Indians",
    desc: "Structure India-focused portfolios while coordinating with overseas income.",
    cta: "Explore NRI options →",
  },
  {
    title: "Families in Mid-Life",
    desc: "Consolidate scattered policies, align term/health cover, and plan SWP for retirement.",
    cta: "Review my plan →",
  },
];

const WhoWeWorkWith = () => {
  return (
    <section className="w-full bg-[#f7f9fc] py-16 px-4 md:px-8 mt-5 mb-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs tracking-widest font-semibold text-blue-500 uppercase mb-3">
              Who we work with
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b7f] leading-tight">
              Goal-based investing for <br />
              Indian families & professionals
            </h2>
          </div>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
            Whether you are just starting a SIP or planning retirement income,
            we help convert your cashflows into clear, measurable mutual fund
            and protection strategies.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                         hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
                         transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-[#0b2b7f] mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {item.desc}
              </p>

              <button className="text-sm font-semibold text-[#0b2b7f] hover:underline underline-offset-4">
                {item.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
