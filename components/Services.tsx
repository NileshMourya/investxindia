import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section className="w-full px-4 md:px-8 py-10 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h4 className="text-center font-semibold text-2xl md:text-3xl text-[#f38120]">
          The Best Services We Offer
        </h4>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Left */}
          <div className="bg-slate-100 rounded-xl p-6 space-y-2">
            <p className="text-sm font-semibold text-[#f38120] uppercase">
              Start Here
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Tell us your goals or run a quick SIP — we’ll help you choose the
              right mutual funds and protection.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="bg-slate-100 rounded-xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Plan my goals",
                "Start a SIP",
                "Free Financial Health Check-Up",
                "Talk to an Expert",
              ].map((text, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center text-center p-4 rounded-xl cursor-pointer transition
                  ${
                    text === "Talk to an Expert"
                      ? "bg-[#264796] text-white font-semibold hover:bg-[#1f3c80]"
                      : "bg-white text-gray-800 shadow-sm hover:shadow-md"
                  }`}
                >
                  <p className="text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-200 my-12" />

        {/* Trust Section */}
        <div className="space-y-3">
          <p className="text-[#f38120] text-sm font-semibold uppercase">
            Your Trusted Investment Partner
          </p>

          <div className="flex items-center flex-wrap gap-1 text-2xl md:text-3xl font-semibold">
            <span className="text-[#00113d]">Welcome to invest</span>
            <span className="text-[#f38120]">x</span>
            <span className="text-[#00113d]">india</span>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mt-5">
          <p className="text-sm md:text-base text-[#00113d] leading-relaxed">
            With 30+ years of banking, finance & investment experience, HRP
            Wealth is your trusted partner for comprehensive wealth management.
            We simplify financial decision-making with a long-term, goal-driven
            approach.
          </p>
        </div>

        {/* Badges */}
      </div>
    </section>
  );
};

export default Page;
