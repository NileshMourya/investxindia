import React from "react";

export const goals = [
  {
    title: "Term Insurance (Income Protection)",
    tag1: "Best for",
    tag2: "Earning members with dependants",
    tag3: "",
    label: "• Replaces your income if you are not around",
    label1: "• Typical cover: 10–20× annual income + loans",
    label2: "• Premiums usually lower when taken early",
    label3:
      "Example: 35-year-old with ₹15L income and ₹30L home loan may need ₹2–3 Cr term cover for 25–30 years to secure family goals.",
    button: "Assess my term need →",
  },
  {
    title: "Health & Critical Illness Cover",
    tag1: "Best for",
    tag2: "Everyone; must-have",
    tag3: "Tax: 80D deduction",
    label: "• Covers hospitalization and major illnesses",
    label1: "• Keeps your SIPs and long-term investments untouched",
    label2: "• Family floater + top-up cover often most efficient",
    label3:
      "Example: For a young family of four in a metro, a ₹10–15L base cover with ₹25–50L super top-up balances premium and protection well.",
    button: "Review my health cover →",
  },
  {
    title: "Goal-linked & Asset Protection",
    tag1: "• Mortgage protection for home and large loans",
    tag2: "• Key-person insurance for businesses",
    tag3: "Tax: 80C + efficient withdrawals",
    label: "• Tax saving: ELSS funds for 80C along with PPF / NPS",
    label1: "• Emergency: Liquid / Money Market / Short Duration Debt funds",
    label2: "• Riders for accidental disability / income protection",
    label3:
      "Example: Match loan outstanding with decreasing term cover so family keeps the home and investments stay dedicated to goals like education and retirement.",
    button: "Map my risks →",
  },
];
const page = () => {
  return (
    <>
      <section className="w-full bg-[#f7f9fc] py-16 px-4 md:px-8 mt-5 mb-5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs tracking-widest font-semibold text-[#f38120] uppercase mb-3">
                Product discovery
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b7f] leading-tight">
                Map your life risks to
                <br />
                the right insurance products
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
              Use this as an education guide. Exact product, sum assured, and
              insurer are finalized together after reviewing your cashflows and
              existing policies.
            </p>
          </div>

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
                  <p className="text-sm text-[#0b2b7f] text-wrap">
                    {item.label2}
                  </p>
                  <p className="text-xs text-gray-500 text-wrap mt-2">
                    {item.label3}
                  </p>
                </div>
                <div
                  className="flex flex-wrap mt-4"
                  style={{ flexDirection: "row", columnGap: "10px" }}
                >
                  <button className="p-2 text-xs font-semibold bg-[#f38120] text-white rounded-lg">
                    {item.button}
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
                Product education
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b7f] leading-tight">
                Grow with mutual funds,
                <br />
                protect with insurance.
              </h2>

              <p className="text-xs md:text-base text-gray-600 leading-relaxed max-w-xl mt-5">
                We never mix investment and insurance in a single product.
                Instead, we keep growth in mutual funds / SIPs and use pure
                protection products (term & health) to ring-fence your goals.
              </p>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 sm:grid-col-1 gap-4">
              <div className="p-2 bg-white shadow-md rounded-md">
                <p className="text-sm font-semibold text-[#f38120]">
                  For growth
                </p>
                <p className="text-xs text-[#0b2b7f] mt-2">
                  • Mutual funds / SIPs for all long-term goals (retirement,
                  education, wealth).
                </p>
                <p className="text-xs text-[#0b2b7f] mt-2">
                  • Tax planning via ELSS, NPS, and asset allocation.
                </p>
              </div>
              <div className="p-2 bg-white shadow-md rounded-md">
                <p className="text-sm font-semibold text-[#f38120]">
                  For protection
                </p>
                <p className="text-xs text-[#0b2b7f] mt-2">
                  • Term and health cover purely for risk management.
                </p>
                <p className="text-xs text-[#0b2b7f] mt-2">
                  • Riders / add-ons only when they enhance real protection, not
                  as investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
