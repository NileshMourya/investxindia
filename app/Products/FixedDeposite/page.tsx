"use client";
import FDCalculator from "@/components/FDCalculator";
import {
  ShieldCheck,
  Percent,
  Calendar,
  Wallet,
  TrendingDown,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safety & Security",
    desc: "Returns are not affected by market fluctuations.",
  },
  {
    icon: Percent,
    title: "Fixed Interest Rate",
    desc: "Interest rate remains constant throughout the tenure.",
  },
  {
    icon: Calendar,
    title: "Flexible Tenure",
    desc: "Tenure ranges from 7 days to 10 years.",
  },
  {
    icon: Wallet,
    title: "Guaranteed Returns",
    desc: "Know exactly how much you’ll receive at maturity.",
  },
];

const fdTypes = [
  "Regular Fixed Deposit",
  "Senior Citizen FD",
  "Tax-Saving FD",
  "Cumulative FD",
  "Non-Cumulative FD",
];

export default function FixedDepositSection() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-14">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#f38120]">
              Fixed Deposits (FDs)
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Safe, Stable & Guaranteed Investment Option
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Fixed Deposits are one of the most trusted investment choices for
              individuals who prefer guaranteed returns with minimal risk.
            </p>
          </div>

          {/* What is FD */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">
                What is a Fixed Deposit?
              </h3>
              <p className="text-slate-600">
                A Fixed Deposit is an investment where a lump sum amount is
                deposited with a bank or financial institution for a fixed
                tenure at a pre-decided interest rate.
              </p>
              <p className="text-slate-600">
                At the end of the tenure, the investor receives the principal
                amount along with the accumulated interest. Premature
                withdrawals may attract a penalty.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-slate-900 mb-4">
                Who Should Invest?
              </h4>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li className="flex gap-2">
                  <Users size={18} className="text-[#f38120]" />
                  Students and beginners
                </li>
                <li className="flex gap-2">
                  <Users size={18} className="text-[#f38120]" />
                  People seeking stable income
                </li>
                <li className="flex gap-2">
                  <Users size={18} className="text-[#f38120]" />
                  Retired individuals
                </li>
                <li className="flex gap-2">
                  <Users size={18} className="text-[#f38120]" />
                  Risk-averse investors
                </li>
              </ul>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 text-center mb-8">
              Key Features of Fixed Deposits
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-md transition"
                  >
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-orange-50 text-[#f38120] mb-4">
                      <Icon size={22} />
                    </div>
                    <h4 className="font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Types, Benefits & Limitations */}
          <div className="grid md:grid-cols-3 gap-6">
            <InfoCard title="Types of Fixed Deposits" list={fdTypes} />
            <InfoCard
              title="Benefits"
              list={[
                "Easy to open and manage",
                "Suitable for short & long-term goals",
                "Can be used as loan collateral",
                "Encourages disciplined saving",
              ]}
            />
            <InfoCard
              title="Limitations"
              list={[
                "Lower returns than high-risk investments",
                "Penalty on premature withdrawal",
                "May not always beat inflation",
              ]}
              icon={<TrendingDown className="text-[#f38120]" />}
            />
          </div>
        </div>
      </section>
      {/* <FDCalculator /> */}
    </>
  );
}

/* Reusable Card */
function InfoCard({
  title,
  list,
  icon,
}: {
  title: string;
  list: string[];
  icon?: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h4>
      <ul className="space-y-2 text-sm text-slate-600">
        {list.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
