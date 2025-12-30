import React from "react";

const ServicesSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 px-4 md:px-8 py-14">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Heading */}
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-wider font-semibold text-[#f38120]">
            What We Do Best
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#00113d]">
            Smart Financial Solutions, Built for You
          </h2>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Info Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition">
            <p className="text-xs font-semibold text-[#f38120] uppercase">
              Begin Your Journey
            </p>
            <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
              Share your financial goals or explore investment options like
              SIPs. Our experts guide you toward the right mix of mutual funds
              and protection plans.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Goal-Based Planning",
                "Launch a SIP",
                "Complimentary Financial Review",
                "Speak with an Advisor",
              ].map((label, index) => (
                <button
                  key={index}
                  className={`rounded-xl px-4 py-4 text-sm font-medium transition-all
                  ${
                    label === "Speak with an Advisor"
                      ? "bg-[#264796] text-white hover:bg-[#1f3c80]"
                      : "bg-slate-50 text-[#00113d] hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-200" />

        {/* Trust Section */}
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase text-[#f38120]">
            A Partner You Can Trust
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-[#00113d]">
            Welcome to <span className="text-[#f38120]">InvestX</span> India
          </h3>

          <p className="max-w-3xl text-sm md:text-base text-gray-700 leading-relaxed">
            Backed by over three decades of experience in banking, finance, and
            investments, InvestX India delivers structured, goal-oriented wealth
            management solutions designed for long-term success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
