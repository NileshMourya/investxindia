const SIFOverview = () => (
  <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <span className="text-xs font-semibold tracking-widest text-[#f38120]">
        SPECIALIZED INVESTMENT FUND (SIF)
      </span>

      <h1 className="mt-4 text-4xl font-bold text-slate-900 max-w-3xl">
        A Sophisticated Investment Vehicle for Informed Investors
      </h1>

      <p className="mt-6 text-slate-600 max-w-3xl leading-relaxed">
        A Specialized Investment Fund (SIF) is designed for high-net-worth,
        institutional, and accredited investors seeking exposure to specialized
        strategies, alternative assets, and advanced portfolio construction
        approaches beyond traditional mutual funds.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          "Sophisticated strategies",
          "Higher risk tolerance",
          "Regulated structure",
          "Long-term capital focus",
        ].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default SIFOverview;
