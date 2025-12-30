"use client";
import { SIP, quickComparison, SWP, STP } from "./data";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-[#f7f9fc] to-white py-16 px-4 md:px-8 mt-6 mb-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-xs tracking-widest font-semibold text-[#f38120] uppercase mb-3">
                Investor Education
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#00113d] leading-tight">
                Understanding SIP, SWP & STP
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
              SIP, SWP, and STP are structured ways to invest or withdraw from
              mutual funds over time. Each serves a different purpose depending
              on your life stage, income pattern, and financial goals.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* SIP */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <p className="text-lg font-bold text-[#00113d] mb-3">
                What is SIP?
              </p>

              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                A Systematic Investment Plan (SIP) allows you to invest a fixed
                amount at regular intervals—usually monthly—into a mutual fund.
                Think of it as a monthly commitment towards building long-term
                wealth.
              </p>

              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>
                  • Promotes disciplined investing regardless of market
                  conditions
                </li>
                <li>• Helps average out purchase costs over time</li>
                <li>
                  • Suitable for long-term goals like retirement, education, or
                  buying a home
                </li>
              </ul>

              <p className="text-xs text-gray-500 leading-relaxed">
                SIPs do not assure returns. Outcomes depend on market
                performance and the chosen mutual fund scheme.
              </p>
            </div>

            {/* SWP */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <p className="text-lg font-bold text-[#00113d] mb-3">
                What is SWP?
              </p>

              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                A Systematic Withdrawal Plan (SWP) enables you to withdraw a
                fixed amount from your mutual fund investment at regular
                intervals, making it useful for generating steady income.
              </p>

              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Commonly used during retirement for monthly cash flow</li>
                <li>
                  • Complements pensions, rental income, or interest earnings
                </li>
                <li>
                  • May offer better tax efficiency than traditional fixed
                  deposits in certain situations
                </li>
              </ul>

              <p className="text-xs text-gray-500 leading-relaxed">
                Withdrawal amount and frequency must be planned carefully to
                ensure the investment lasts through your intended time horizon.
              </p>
            </div>

            {/* STP */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <p className="text-lg font-bold text-[#00113d] mb-3">
                What is STP?
              </p>

              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                A Systematic Transfer Plan (STP) lets you gradually move money
                from one mutual fund scheme to another—typically from a stable
                fund to equity.
              </p>

              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Reduces market timing risk when investing lump sums</li>
                <li>
                  • Often used to transfer from liquid or debt funds into equity
                  over time
                </li>
                <li>
                  • Best suited when the transfer duration matches your risk
                  comfort
                </li>
              </ul>

              <p className="text-xs text-gray-500 leading-relaxed">
                STP does not eliminate market risk. Suitability depends on your
                goals, risk profile, and the source of funds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 px-4  from-slate-50 to-white shadow-md rounded-2xl">
        <p className="text-2xl font-semibold p-5 text-[#0b2b7f]">
          SIP vs SWP vs STP – quick comparison
        </p>
        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {quickComparison.map((card, i) => (
            <div
              key={i}
              className={`group shadow-md cursor-pointer relative rounded-2xl p-5 backdrop-blur-xl transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl bg-white/80`}
            >
              {/* Gradient Hover Glow */}
              <div className="absolute inset-0 rounded-2xl from-orange-400/0 via-orange-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition" />

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-xl mb-4 text-[#f38120] hover:bg-[#f38120] hover:text-white">
                {card.header}
              </div>

              {/* Tag */}

              {/* Description */}
              <p className="text-sm text-[#f38120] mb-5">{card.title}</p>
              <p className="text-sm text-slate-600 mb-6">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4 mt-5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs tracking-widest text-orange-500 font-semibold mb-3">
              EXPERT INSIGHTS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Deep dive into SIP, SWP & STP with our expert
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Explore comprehensive guides, real-life scenarios, and practical
              strategies to master systematic investing and withdrawal plans.
            </p>
          </motion.div>

          {/* Sub Heading */}
          <div className="mt-12 mb-8 flex items-center gap-2 text-blue-700 dark:text-blue-400 font-semibold">
            <ArrowUpRight className="w-5 h-5" />
            SIP (Systematic Investment Plan)
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SIP.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-500 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>

                  {/* Tag */}
                  <p className="text-xs font-semibold tracking-wide text-orange-500 mb-2">
                    {item.tag}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* CTA */}

                  {/* Hover Border Glow */}
                  <span className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-orange-200 dark:group-hover:ring-orange-900 transition" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4 mt-5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          ></motion.div>

          {/* Sub Heading */}
          <div className="mb-8 flex items-center gap-2 text-blue-700 dark:text-blue-400 font-semibold">
            <ArrowUpRight className="w-5 h-5" />
            SIP (Systematic Investment Plan)
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SWP.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-500 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>

                  {/* Tag */}
                  <p className="text-xs font-semibold tracking-wide text-orange-500 mb-2">
                    {item.tag}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* CTA */}

                  {/* Hover Border Glow */}
                  <span className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-orange-200 dark:group-hover:ring-orange-900 transition" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4 mt-5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          ></motion.div>

          {/* Sub Heading */}
          <div className="mb-8 flex items-center gap-2 text-blue-700 dark:text-blue-400 font-semibold">
            <ArrowUpRight className="w-5 h-5" />
            STP (Systematic Transfer Plan)
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STP.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-500 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>

                  {/* Tag */}
                  <p className="text-xs font-semibold tracking-wide text-orange-500 mb-2">
                    {item.tag}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* CTA */}

                  {/* Hover Border Glow */}
                  <span className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-orange-200 dark:group-hover:ring-orange-900 transition" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
