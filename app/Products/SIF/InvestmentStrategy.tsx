const InvestmentStrategy = () => (
  <section className="py-16 px-4 bg-slate-100 shadow-sm">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-slate-900 mb-10">
        Investment Strategy
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          "Active management with tactical asset allocation",
          "Sectoral and thematic exposure based on macro trends",
          "Use of derivatives strictly for hedging or efficient execution",
          "Geographic diversification including global opportunities",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default InvestmentStrategy;
