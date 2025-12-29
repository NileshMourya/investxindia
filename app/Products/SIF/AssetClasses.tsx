const AssetClasses = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-8">
        Asset Classes Covered
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Equity & equity-linked instruments",
          "Debt & fixed income securities",
          "Private equity & unlisted opportunities",
          "Real assets & structured products",
          "Derivatives (hedging / leverage)",
        ].map((item) => (
          <div
            key={item}
            className="rounded-xl bg-white shadow-md p-5 text-sm text-slate-700"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AssetClasses;
