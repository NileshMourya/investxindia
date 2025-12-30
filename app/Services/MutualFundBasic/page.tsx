import Categories from "@/components/FundBasic/Categories";
import CommonPitfalls from "@/components/FundBasic/CommonPitfalls";
import FrequentQuestion from "@/components/FundBasic/FrequentQuestion";
import ExpertInsights from "@/components/FundBasic/ExpertInsight";

const page = () => {
  return (
    <div>
      <section className="w-full bg-gradient-to-b from-slate-100 to-white py-16 px-4 md:px-8 mt-6 mb-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-xs tracking-widest font-semibold text-[#f38120] uppercase mb-3">
                Investor Education
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#00113d] leading-tight">
                Mutual Fund Basics Explained
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
              This section explains mutual funds in clear, simple terms—what
              they are, how they function, and the key factors to consider
              before investing. The information is purely educational and not
              investment advice.
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all">
            <h3 className="text-xl md:text-2xl font-semibold text-[#00113d] mb-4">
              What is a mutual fund?
            </h3>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              A mutual fund brings together money from multiple investors and is
              professionally managed by a fund manager. This pooled money is
              invested across a diversified set of securities such as equities,
              bonds, money market instruments, or a combination of these.
            </p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Instead of selecting and monitoring individual investments
              yourself, the fund manager does this on your behalf based on the
              fund’s stated objective. As an investor, you hold units of the
              mutual fund rather than directly owning each underlying security.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-slate-100 to-white py-16 px-4 md:px-8 mt-6 mb-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#00113d]">
            What is NAV and how do I earn returns?
          </h2>

          {/* NAV Definition */}
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            NAV (Net Asset Value) represents the price of one unit of a mutual
            fund. It is calculated as:
          </p>

          <div className="bg-white rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm">
            <p className="text-xs md:text-sm text-gray-600 font-mono">
              NAV = (Market Value of All Investments – Expenses & Liabilities) ÷
              Number of Units Outstanding
            </p>
          </div>

          {/* Returns Explanation */}
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4">
            Your returns come from:
          </p>

          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-1">
            <li>Capital appreciation — the increase in NAV over time</li>
            <li>Dividends or payouts in certain plans (if opted)</li>
          </ul>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4">
            For long-term goals, the emphasis is usually on the growth of NAV
            over time rather than short-term fluctuations.
          </p>

          <p className="text-xs md:text-sm text-gray-500 mt-4">
            Note: Tax treatment varies by fund type and holding period. For
            example, equity funds held for more than one year are eligible for
            long-term capital gains tax benefits.
          </p>
        </div>
      </section>

      <Categories />
      <CommonPitfalls />
      <FrequentQuestion />
      <ExpertInsights />
    </div>
  );
};

export default page;
