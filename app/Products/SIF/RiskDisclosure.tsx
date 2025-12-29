const RiskDisclosure = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto rounded-2xl border border-red-200 bg-red-50 p-8">
      <h2 className="text-xl font-semibold text-red-900 mb-4">
        Risk Factors & Disclosures
      </h2>

      <ul className="space-y-2 text-sm text-red-900">
        <li>• Market risk & performance volatility</li>
        <li>• Liquidity and concentration risk</li>
        <li>• Credit & counterparty risk</li>
        <li>• Regulatory and operational risk</li>
      </ul>

      <p className="mt-6 font-semibold text-red-900">
        ⚠️ Returns are not guaranteed. Investments are subject to market risks.
      </p>
    </div>
  </section>
);
export default RiskDisclosure;
