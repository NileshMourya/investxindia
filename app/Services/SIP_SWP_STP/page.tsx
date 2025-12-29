"use client";
import { SIP, quickComparison, SWP, STP } from "./data";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <>
      <section className="w-full bg-[#f7f9fc] py-16 px-4 md:px-8 mt-5 mb-5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs tracking-widest font-semibold text-[#f38120] uppercase mb-3">
                Investor Education
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b7f] leading-tight">
                SIP, SWP & STP Explained
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
              SIP, SWP and STP are simply different ways of putting money into
              or taking money out of mutual funds in a systematic manner. This
              page explains when each method is useful and how it can fit into
              your financial plan.
            </p>
          </div>
        </div>
        <div className="p-4 mt-2 mb-2">
          <p className="text-2xl text-[#0b2b7f]">What is SIP?</p>
          <p className="mt-2 text-sm text-[#0b2b7f]">
            SIP (Systematic Investment Plan) is a method of investing a fixed
            amount at regular intervals—commonly monthly—into a mutual fund
            scheme. It is like a monthly EMI towards your future goals, but
            instead of paying a loan, you are building assets.
          </p>
          <p className="mt-2 text-sm text-[#0b2b7f]">
            • Encourages disciplined investing, independent of market moods.
          </p>
          <p className="mt-2 text-sm text-[#0b2b7f]">
            • Averages your purchase cost over time (rupee cost averaging).
          </p>
          <p className="mt-2 text-sm text-[#0b2b7f]">
            • Works best for long-term goals: retirement, children s education,
            home, etc.
          </p>
          <p className="mt-5 text-xs text-[#0b2b7f]">
            SIP does not guarantee returns. It is a convenient way to invest
            regularly into a market-linked product. Returns will still depend on
            the performance of the underlying scheme and markets.
          </p>
        </div>

        <div className="p-4 mt-2 mb-2">
          <p className="text-2xl text-[#0b2b7f]">What is SWP?</p>
          <p className="mt-2 text-sm text-[#0b2b7f]">
            SWP (Systematic Withdrawal Plan) is the reverse of SIP. Instead of
            investing a fixed amount regularly, you withdraw a fixed amount at
            regular intervals (for example monthly) from your mutual fund
            investment.
          </p>
          <p className="mt-2 text-sm text-[#0b2b7f]">
            • Useful in retirement to generate a monthly income from your
            corpus.
          </p>
          <p className="mt-2 text-sm text-[#0b2b7f]">
            • Can complement pensions, rental income and interest from FDs.
          </p>
          <p className="mt-2 text-sm text-[#0b2b7f]">
            • Compared to simply taking interest from an FD, SWP can be more
            tax-efficient in certain cases—depending on holding period and tax
            rules.
          </p>
          <p className="mt-5 text-xs text-[#0b2b7f]">
            The withdrawal amount, frequency, selected scheme and your risk
            profile need to be carefully aligned so that the corpus is not
            exhausted too early.
          </p>
        </div>

        <div className="p-4 mt-2 mb-2">
          <p className="text-2xl text-[#0b2b7f]">What is STP?</p>
          <p className="mt-2 text-sm text-[#0b2b7f]">
            STP (Systematic Transfer Plan) allows you to move money in parts
            from one mutual fund scheme to another over a period of time.
            Typically, investors park a lump sum in a relatively stable fund and
            gradually transfer it into an equity fund.
          </p>
          <p className="mt-2 text-sm text-[#0b2b7f]">
            • Helpful when you have a lump sum but want to reduce timing risk in
            equities.
          </p>
          <p className="mt-2 text-sm text-[#0b2b7f]">
            • Common structure: invest lump sum in a liquid / ultra-short /
            short-duration fund, and STP to equity over 6–18 months.
          </p>
          <p className="mt-2 text-sm text-[#0b2b7f]">
            • Works best when the transfer horizon matches your comfort with
            market volatility.
          </p>
          <p className="mt-5 text-xs text-[#0b2b7f]">
            STP is not a guarantee against loss. It simply spreads your entry
            into equity over time. Suitability depends on your horizon, risk
            profile and the nature of the lump sum (bonus, property sale,
            inheritance, etc.).
          </p>
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
              Deep dive into SIP, SWP & STP with our expert articles
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Explore comprehensive guides, real-life scenarios, and practical
              strategies to master systematic investing and withdrawal plans.
            </p>
          </motion.div>

          {/* Sub Heading */}
          <div className="mt-12 mb-8 flex items-center gap-2 text-blue-700 dark:text-blue-400 font-semibold">
            <ArrowUpRight className="w-5 h-5" />
            SIP (Systematic Investment Plan) Articles
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
                  <div className="mt-6 flex items-center gap-2 text-orange-500 font-medium group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

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
            SIP (Systematic Investment Plan) Articles
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
                  <div className="mt-6 flex items-center gap-2 text-orange-500 font-medium group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

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
            STP (Systematic Transfer Plan) Articles
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
                  <div className="mt-6 flex items-center gap-2 text-orange-500 font-medium group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Hover Border Glow */}
                  <span className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-orange-200 dark:group-hover:ring-orange-900 transition" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mt-2 mb-2 py-6 px-4  from-slate-50 to-white shadow-md rounded-2xl">
        <p className="text-2xl font-semibold text-[#0b2b7f]">
          What should you do next?
        </p>
        <p className="mt-2 text-sm text-[#0b2b7f]">
          Use our calculators to get a feel for numbers, then speak to us before
          committing real money so that your choices match your goals and risk
          profile.
        </p>
      </div>
    </>
  );
};

export default ServicesSection;
