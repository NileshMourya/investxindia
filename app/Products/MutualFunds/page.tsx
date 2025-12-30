import {
  accountData,
  card,
  cards,
  categories,
  goals,
  journey,
} from "@/components/details";
import Header from "@/components/Headers";
import { headers } from "next/headers";
const goalBased = {
  header: " Goal-Based Investment Guidance",
  title: "Which mutual fund categories",
  title1: "align with your financial goals?",
  text: `Simple, high-level insights to help you match your life goals with
              the right mutual fund categories. Final fund selection is always
              personalized through a one-to-one discussion with your advisor.`,
};

const benefit = {
  header: "KEY BENEFITS",
  title: "Why Invest in Mutual Funds?",
  title1: "",
  text: `Discover the advantages that make mutual funds a preferred choice for
          smart investors`,
};

const option = {
  header: "Why Choose Us",
  title: " Why Invest in Mutual Funds?",
  title1: "",
  text: `Trusted financial experts committed to your mutual fund investment
          success`,
};
const page = () => {
  return (
    <div className="p-2 mt-5 bg-white">
      <section className="w-full py-16 px-4 md:px-8 mt-6 mb-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-6">
          <p className="text-md md:text-lg font-semibold text-[#f38120]">
            Why Mutual Funds Make Sense for Indian Investors
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Mutual funds have become a preferred investment choice in India,
            combining professional management, diversification, and convenience.
            By pooling resources from multiple investors, mutual funds allow you
            to access well-structured portfolios that would be difficult to
            create independently.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Diversification across sectors, companies, and asset classes helps
            manage risk effectively. Experienced fund managers continuously
            monitor markets and make informed investment decisions on your
            behalf, saving you time and effort. Systematic Investment Plans
            (SIPs) let you invest regularly, benefit from rupee cost averaging,
            and maintain discipline across market cycles.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Mutual funds also provide tax-saving opportunities through ELSS
            under Section 80C, along with strong potential for long-term wealth
            creation. Whether your goal is retirement, funding a child’s
            education, buying a home, or building wealth, mutual funds offer
            flexible solutions. With investments starting as low as ₹500 per
            month, disciplined investing is accessible to investors of all
            income levels.
          </p>
        </div>
      </section>

      <section className="py-6 px-4  from-slate-50 to-white">
        <Header details={benefit} />
        <div className="mt-4 max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`group shadow-md cursor-pointer relative rounded-2xl p-5 backdrop-blur-xl transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl bg-white/80`}
            >
              {/* Gradient Hover Glow */}
              <div className="absolute inset-0 rounded-2xl from-orange-400/0 via-orange-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition" />

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-xl mb-4 text-[#f38120] hover:bg-[#f38120] hover:text-white">
                {card.icon}
              </div>

              {/* Tag */}
              <p className="text-xs font-semibold tracking-wide text-[#f38120] mb-2">
                {card?.tag?.toLocaleUpperCase()}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-600 mb-6">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-6 px-4  from-slate-50 to-white">
        <Header details={option} />
        <div className="mt-4 max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {card.map((card, i) => (
            <div
              key={i}
              className={`group shadow-md cursor-pointer relative rounded-2xl p-5 backdrop-blur-xl transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl bg-white/80`}
            >
              {/* Gradient Hover Glow */}
              <div className="absolute inset-0 rounded-2xl from-orange-400/0 via-orange-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition" />

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-xl mb-4 text-[#f38120] hover:bg-[#f38120] hover:text-white">
                {card.icon}
              </div>

              {/* Tag */}
              <p className="text-xs font-semibold tracking-wide text-[#f38120] mb-2">
                {card?.tag?.toLocaleUpperCase()}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-600 mb-6">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full py-10 px-4">
        <p className="text-sm text-[#f38120] text-center mt-2">
          Investment Options
        </p>
        <p className="text-2xl font-semibold text-[#f38120] text-center mt-4">
          Popular Mutual Fund Categories We Recommend
        </p>
        <p className="text-sm text-center mt-2">
          Explore diverse fund categories tailored to different risk profiles
          and investment objectives
        </p>
        <p className="text-xs text-center mt-2">
          *Returns are indicative based on past 7-10 year CAGR. Past performance
          does not guarantee future results.
        </p>
      </div>
      <section className="py-6 px-4  from-slate-50 to-white">
        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((card, i) => (
            <div
              key={i}
              className={`group shadow-md relative rounded-2xl p-5 backdrop-blur-xl transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl bg-white/80`}
            >
              {/* Gradient Hover Glow */}
              <div className="absolute inset-0 rounded-2xl from-orange-400/0 via-orange-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition" />

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-xl mb-4 text-[#f38120] hover:bg-[#f38120] hover:text-white">
                {card.icon}
              </div>

              {/* Tag */}
              <p className="text-xs font-semibold tracking-wide text-[#f38120] mb-2">
                {card?.tag?.toLocaleUpperCase()}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-600 mb-6">{card.desc}</p>

              <button className="w-full p-2 bg-orange-50 shadow-sm hover:bg-[#f38120] rounded-md">
                <p className="text-[#f38120] font-semibold text-xs">
                  {card.textReturn}
                </p>
                <p className="text-blue-600 font-semibold text-xs">
                  {card.return}
                </p>
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#f7f9fc] py-16 px-4 md:px-8 mt-5 mb-5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <Header details={goalBased} />

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                         hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
                         transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#0b2b7f] mb-3">
                  {item.title}
                </h3>

                <div
                  className="flex flex-wrap"
                  style={{ flexDirection: "row", columnGap: "10px" }}
                >
                  <p className="text-gray-600 leading-relaxed p-1 rounded-lg bg-blue-50 mb-2 text-xs">
                    {item.tag1}
                  </p>

                  <p className="text-gray-600 leading-relaxed p-1 rounded-lg bg-green-50 mb-2 text-xs">
                    {item.tag2}
                  </p>
                  <p className="text-gray-600 leading-relaxed p-1 rounded-lg bg-orange-50 mb-2 text-xs">
                    {item.tag3}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-[#0b2b7f] text-wrap">
                    {item.label}
                  </p>
                  <p className="text-sm text-[#0b2b7f] text-wrap">
                    {item.label1}
                  </p>
                  <p className="text-xs text-gray-500 text-wrap mt-2">
                    {item.label2}
                  </p>
                </div>
                <div
                  className="flex flex-wrap mt-4"
                  style={{ flexDirection: "row", columnGap: "10px" }}
                >
                  <button className="p-2 text-xs font-semibold bg-[#f38120] text-white rounded-lg">
                    {item.button}
                  </button>
                  <button className="p-1 text-xs bg-orange-50 text-[#f38120] rounded-lg">
                    {item.button1}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f7f9fc] py-16 px-4 md:px-8 mt-5 mb-5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs tracking-widest font-semibold text-[#f38120] uppercase mb-3">
                Sample journeys
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b7f] leading-tight">
                How mutual funds can <br />
                look in real life (illustrative)
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
              These are simplified examples to help you imagine structures. They
              are not recommendations or guarantees. Your actual plan will
              always be customised.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {journey.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                         hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
                         transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#0b2b7f] mb-3">
                  {item.title}
                </h3>

                <p className="text-xs">{item.tag}</p>
                <div className="mt-2">
                  <p className="text-sm text-[#0b2b7f] text-wrap">
                    {item.label}
                  </p>
                  <p className="text-sm text-[#0b2b7f] text-wrap">
                    {item.label1}
                  </p>
                  <p className="text-xs text-gray-500 text-wrap mt-2">
                    {item.label2}
                  </p>
                </div>
                <div
                  className="flex flex-wrap mt-4"
                  style={{ flexDirection: "row", columnGap: "10px" }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 px-4  from-slate-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs tracking-widest font-semibold text-[#f38120] uppercase mb-3">
              Smart Investment Platform in India
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b7f] leading-tight">
              InvestXIndia Mutual
              <br /> Fund Account
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
            A powerful and easy-to-use investment management platform designed
            for Indian investors. InvestXIndia offers industry-leading tools,
            exclusive features, and seamless portfolio tracking to help you
            invest smarter and grow your wealth with confidence.
          </p>
        </div>
        <div className="mt-4 max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {accountData.map((card, i) => (
            <div
              key={i}
              className={`group shadow-md relative rounded-2xl p-5 backdrop-blur-xl transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl bg-white/80`}
            >
              {/* Gradient Hover Glow */}
              <div className="absolute inset-0 rounded-2xl from-orange-400/0 via-orange-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition" />

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-xl mb-4 text-[#f38120] hover:bg-[#f38120] hover:text-white">
                {card.icon}
              </div>

              {/* Tag */}
              <p className="text-xs font-semibold tracking-wide text-[#f38120] mb-2">
                {card?.tag?.toLocaleUpperCase()}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-600 mb-6">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
