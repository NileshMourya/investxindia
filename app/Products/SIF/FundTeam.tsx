const FundTeam = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-slate-900 mb-8">
        Fund Management Team
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-xl border bg-white shadow-md p-6 text-sm"
          >
            <p className="font-semibold text-slate-900">Fund Manager Name</p>
            <p className="text-slate-600">Experience: 15+ years</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default FundTeam;
