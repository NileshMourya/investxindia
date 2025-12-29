import Categories from "@/components/FundBasic/Categories";
import CommonPitfalls from "@/components/FundBasic/CommonPitfalls";
import FrequentQuestion from "@/components/FundBasic/FrequentQuestion";
import ExpertInsights from "@/components/FundBasic/ExpertInsight";

const page = () => {
  return (
    <div>
      <section className="w-full bg-slate-100 py-16 px-4 md:px-8 mt-5 mb-5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs tracking-widest font-semibold text-[#f38120] uppercase mb-3">
                Investor Education
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b7f] leading-tight">
                Mutual Fund Basics
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
              This page explains mutual funds in simple language—what they are,
              how they work, and what you should keep in mind before investing.
              It is meant for education only and not as a recommendation to buy
              or sell any specific scheme.
            </p>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-semibold text-[#0b2b7f]">
              What is a mutual fund?
            </p>
            <p className="mt-2 text-sm text-slate-600">
              A mutual fund is a pool of money collected from many investors and
              managed by a professional fund manager. The fund invests this pool
              into a basket of securities such as shares, bonds, money-market
              instruments or a combination of these.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Instead of you directly buying individual shares or bonds and
              tracking them, the fund manager does this on your behalf as per
              the fund s stated objective. You own units of the mutual fund, not
              the underlying shares directly.
            </p>
          </div>
        </div>
      </section>
      <div className="w-full bg-slate-100 py-16 px-4 md:px-8 mt-5 mb-5">
        <p className="text-2xl text-[#0b2b7f]">
          What is NAV and how do I earn returns?
        </p>
        <p className="mt-4 text-sm text-gray-600">
          NAV (Net Asset Value) is the price of one unit of a mutual fund. It is
          calculated as:
        </p>
        <p className="mt-4 text-xs text-gray-600">
          NAV = (Market value of all investments – expenses & liabilities) ÷
          Number of units outstanding
        </p>
        <p className="mt-4 text-sm text-gray-600">
          When the value of the fund s investments goes up or down, the NAV also
          changes. Your return comes from:
        </p>

        <p className="text-xs text-gray-600">
          Increase in NAV (capital appreciation).
        </p>
        <p className="text-xs text-gray-600">
          Dividends / payouts in certain types of plans, if opted.
        </p>
        <p className="mt-4 text-xs text-gray-600">
          For long-term goals, the focus is usually on growth of NAV over time,
          not day-to-day fluctuations.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Note: Tax treatment varies by fund type and holding period. Equity
          funds held for more than 1 year qualify for long-term capital gains
          tax benefits.
        </p>
      </div>
      <Categories />
      <CommonPitfalls />
      <FrequentQuestion />
      <ExpertInsights />
    </div>
  );
};

export default page;
