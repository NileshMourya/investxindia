"use client";

import {
  Banknote,
  Shield,
  Unlock,
  Home,
  Car,
  Gem,
  Building2,
  GraduationCap,
  CreditCard,
  Briefcase,
  Clock,
  TrendingUp,
} from "lucide-react";

import { ReactNode } from "react";
import EMICalculator from "@/components/EMICalculator";

interface LoanItem {
  icon: ReactNode;
  name: string;
  desc: string;
}

interface LoanCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  advantages: string[];
  disadvantages: string[];
  loans: LoanItem[];
}

interface MiniCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

export default function LoanTypesSection() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#f38120]">
              Loans & Credit
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Understanding Loans & Their Types
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              A loan is money borrowed from a bank or financial institution that
              must be repaid over time with interest. Loans help meet major life
              needs such as education, housing, business growth, or emergencies.
            </p>
          </div>

          {/* Loan Basics */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Principal Amount",
                desc: "The actual amount borrowed from the lender.",
              },
              {
                title: "Interest",
                desc: "Extra cost charged by the lender for using the money.",
              },
              {
                title: "Repayment Schedule",
                desc: "Monthly or yearly payments over a fixed tenure.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm"
              >
                <Banknote className="mx-auto text-[#f38120] mb-3" />
                <h4 className="font-semibold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Secured vs Unsecured */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Secured Loans */}
            <LoanCard
              title="Secured Loans"
              icon={<Shield className="text-emerald-600" />}
              description="Backed by collateral such as property, vehicle, or gold."
              advantages={[
                "Lower interest rates",
                "Higher loan amounts",
                "Longer repayment period",
              ]}
              disadvantages={["Risk of losing asset if loan is not repaid"]}
              loans={[
                {
                  icon: <Home />,
                  name: "Home Loan",
                  desc: "15–30 years tenure, low interest",
                },
                {
                  icon: <Car />,
                  name: "Vehicle Loan",
                  desc: "3–7 years tenure",
                },
                { icon: <Gem />, name: "Gold Loan", desc: "Quick processing" },
                {
                  icon: <Building2 />,
                  name: "Loan Against Property",
                  desc: "High-value loan",
                },
              ]}
            />

            {/* Unsecured Loans */}
            <LoanCard
              title="Unsecured Loans"
              icon={<Unlock className="text-rose-600" />}
              description="No collateral required. Approved based on income & credit score."
              advantages={[
                "No asset required",
                "Quick approval",
                "Flexible usage",
              ]}
              disadvantages={["Higher interest rates", "Lower loan limits"]}
              loans={[
                {
                  icon: <Banknote />,
                  name: "Personal Loan",
                  desc: "For emergencies & needs",
                },
                {
                  icon: <GraduationCap />,
                  name: "Education Loan",
                  desc: "For higher studies",
                },
                {
                  icon: <CreditCard />,
                  name: "Credit Card Loan",
                  desc: "Short-term borrowing",
                },
                {
                  icon: <Briefcase />,
                  name: "Business Loan",
                  desc: "For business growth",
                },
              ]}
            />
          </div>

          {/* Other Loan Types */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 text-center mb-8">
              Other Types of Loans
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <MiniCard
                icon={<Clock />}
                title="Short-Term Loan"
                desc="Repaid within a year"
              />
              <MiniCard
                icon={<TrendingUp />}
                title="Long-Term Loan"
                desc="Repaid over many years"
              />
              <MiniCard
                icon={<Shield />}
                title="Fixed Interest Loan"
                desc="Interest remains constant"
              />
              <MiniCard
                icon={<TrendingUp />}
                title="Floating Interest Loan"
                desc="Rate varies with market"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <EMICalculator /> */}
    </>
  );
}

/* ---------------- Components ---------------- */

function LoanCard({
  title,
  icon,
  description,
  advantages,
  disadvantages,
  loans,
}: LoanCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      </div>

      <p className="text-slate-600 text-sm mb-6">{description}</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {loans.map((loan, i) => (
          <div
            key={i}
            className="flex gap-3 p-4 border border-slate-200 rounded-xl"
          >
            <div className="text-[#f38120]">{loan.icon}</div>
            <div>
              <p className="font-medium text-slate-900">{loan.name}</p>
              <p className="text-xs text-slate-600">{loan.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="font-semibold text-emerald-600 mb-2">Advantages</p>
          <ul className="space-y-1 text-slate-600">
            {advantages.map((a: string, i: number) => (
              <li key={i}>• {a}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-rose-600 mb-2">Disadvantages</p>
          <ul className="space-y-1 text-slate-600">
            {disadvantages.map((d: string, i: number) => (
              <li key={i}>• {d}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MiniCard({ icon, title, desc }: MiniCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-md transition">
      <div className="mx-auto mb-3 text-[#f38120]">{icon}</div>
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-600 mt-1">{desc}</p>
    </div>
  );
}
