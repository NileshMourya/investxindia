"use client";

import React from "react";
import {
  AlertTriangle,
  BarChart3,
  Building2,
  Calculator,
  CheckCircle2,
  FileText,
  Info,
  Landmark,
  LockKeyhole,
  Percent,
  ShieldCheck,
  TrendingDown,
  Wallet,
  Waves,
} from "lucide-react";

const riskSections = [
  {
    number: "01",
    title: "General Investment Risk",
    icon: AlertTriangle,
    content: (
      <p>
        The value of investments may increase or decrease depending on market
        conditions. Investors may lose part or, in certain products, all of the
        capital invested.
      </p>
    ),
    additional: (
      <p>
        Past performance should not be considered a guarantee or indication of
        future performance.
      </p>
    ),
  },
  {
    number: "02",
    title: "Mutual Fund Risk",
    icon: BarChart3,
    content: (
      <>
        <p>Mutual fund investments are subject to market risks.</p>
        <p>
          The NAV of mutual fund schemes may fluctuate due to changes in the
          value of underlying securities, interest rates, credit conditions,
          market conditions, liquidity and other factors.
        </p>
        <p>Different schemes carry different levels and types of risk.</p>
      </>
    ),
    additional: (
      <p>
        Investors should read the Scheme Information Document, Statement of
        Additional Information, Key Information Memorandum and applicable risk
        disclosures carefully before investing.
      </p>
    ),
  },
  {
    number: "03",
    title: "Equity Market Risk",
    icon: TrendingDown,
    content: (
      <>
        <p>Equity-oriented investments may be affected by:</p>

        <RiskList
          items={[
            "Share-price volatility",
            "Economic conditions",
            "Corporate performance",
            "Interest rates",
            "Global markets",
            "Political and regulatory developments",
            "Liquidity conditions",
            "Investor sentiment",
          ]}
        />

        <p>
          Capital is not guaranteed unless specifically stated in the relevant
          product documentation.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Debt and Fixed-Income Risk",
    icon: Landmark,
    content: (
      <>
        <p>Debt securities and debt-oriented investments may be affected by:</p>

        <RiskList
          items={[
            "Interest-rate movements",
            "Credit/default risk",
            "Downgrade risk",
            "Liquidity risk",
            "Reinvestment risk",
            "Market conditions",
            "Issuer-specific developments",
          ]}
        />

        <p>
          A higher stated interest rate may be associated with higher credit or
          other risks depending on the product.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Fixed Deposit Risk",
    icon: Building2,
    content: (
      <>
        <p>Fixed deposits may be subject to:</p>

        <RiskList
          items={[
            "Issuer/bank credit risk",
            "Premature withdrawal conditions",
            "Interest-rate risk in relation to reinvestment",
            "Taxation",
            "Applicable deposit insurance limits",
            "Terms and conditions of the issuing institution",
          ]}
        />

        <p>
          Investors should verify the applicable deposit terms directly with the
          relevant institution.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Bonds and Market-Linked Securities",
    icon: Wallet,
    content: (
      <>
        <p>
          Investment in bonds and other fixed-income securities may involve:
        </p>

        <RiskList
          items={[
            "Credit risk",
            "Interest-rate risk",
            "Liquidity risk",
            "Reinvestment risk",
            "Call/prepayment risk",
            "Market risk",
            "Issuer-specific risk",
          ]}
        />

        <p>
          The repayment of principal and interest is subject to the terms of the
          relevant instrument and the creditworthiness of the issuer.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Specialized Investment Funds and Other Market-Linked Products",
    icon: Waves,
    content: (
      <>
        <p>
          Specialised or higher-complexity investment products may involve
          higher levels of market, liquidity, concentration, strategy and other
          risks.
        </p>

        <p>
          Investors should carefully review the relevant product documents,
          eligibility conditions, minimum investment requirements and risk
          disclosures before investing.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Insurance Risk Disclosure",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Insurance products are primarily designed to provide insurance
          protection and/or other benefits according to the applicable policy
          terms.
        </p>

        <p>
          Insurance products differ substantially in structure, benefits,
          exclusions, charges, surrender conditions and risks.
        </p>

        <p>
          The policy document issued by the insurer is the governing document.
        </p>

        <p>
          Investors/policyholders should carefully read the policy terms,
          benefits, exclusions, charges, surrender provisions and applicable
          disclosures before purchasing an insurance product.
        </p>

        <p>
          Investxindia does not guarantee the acceptance of a proposal or
          settlement of an insurance claim. Claim decisions are subject to the
          {`insurer's`} applicable policy terms and regulatory framework.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Taxation Risk",
    icon: Calculator,
    content: (
      <>
        <p>
          Tax treatment of financial products may change due to changes in law,
          regulations, notifications or judicial interpretation.
        </p>

        <p>
          Tax treatment may also differ depending on the {`investor's`}
          circumstances and type of product.
        </p>

        <p>
          Users should consult an appropriately qualified tax professional for
          tax advice.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Liquidity Risk",
    icon: Waves,
    content: (
      <p>
        Some financial products may not be easily sold or redeemed at the
        desired price or time. Investors should consider their liquidity
        requirements and investment horizon before investing.
      </p>
    ),
  },
  {
    number: "11",
    title: "Inflation Risk",
    icon: Percent,
    content: (
      <p>
        The purchasing power of money may decline over time due to inflation. An
        {`investment's`} nominal return may not necessarily represent its real
        return after considering inflation and applicable taxes.
      </p>
    ),
  },
  {
    number: "12",
    title: "Interest Rate Risk",
    icon: Percent,
    content: (
      <p>
        Changes in interest rates can affect the value of debt securities and
        debt-oriented investments. Investors should consider the relationship
        between interest rates, duration and the particular product before
        investing.
      </p>
    ),
  },
  {
    number: "13",
    title: "Credit Risk",
    icon: Building2,
    content: (
      <>
        <p>
          Credit risk refers to the possibility that an issuer or counterparty
          may fail to meet its financial obligations.
        </p>

        <p>Credit risk varies between products and issuers.</p>
      </>
    ),
  },
  {
    number: "14",
    title: "Operational and Cyber Risk",
    icon: LockKeyhole,
    content: (
      <>
        <p>
          Digital transactions may involve operational, technology,
          cyber-security and communication risks.
        </p>

        <p>
          Investors should use only authorised channels and should never share
          passwords, PINs, OTPs or other confidential authentication information
          with unauthorised persons.
        </p>
      </>
    ),
  },
  {
    number: "15",
    title: "No Guaranteed Returns",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Unless expressly guaranteed by the relevant product provider under
          legally valid terms, no representation made through {`Investxindia's`}
          Platform should be interpreted as a guarantee of investment returns.
        </p>

        <p>
          Illustrations, calculators, historical returns and projections are for
          informational purposes and should not be interpreted as guaranteed
          outcomes.
        </p>
      </>
    ),
  },
  {
    number: "16",
    title: "Investor Responsibility",
    icon: CheckCircle2,
    content: (
      <>
        <p>Before investing, investors should consider:</p>

        <RiskList
          items={[
            "Financial objectives",
            "Risk tolerance",
            "Investment horizon",
            "Liquidity requirements",
            "Existing investments",
            "Tax implications",
            "Product charges",
            "Relevant risks",
            "Applicable product documentation",
          ]}
        />

        <p>Investors should seek professional advice where appropriate.</p>
      </>
    ),
  },
];

function RiskList({ items }) {
  return (
    <ul className="my-5 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-700"
        >
          <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function RiskCard({ section }) {
  const Icon = section.icon;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-[0_12px_35px_rgba(15,23,42,0.08)] sm:p-6 lg:p-7">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-amber-500 via-amber-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-5 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-100">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 text-xs font-semibold tracking-[0.18em] text-amber-600">
            RISK {section.number}
          </div>

          <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
            {section.title}
          </h2>
        </div>
      </div>

      <div className="space-y-4 text-[15px] leading-7 text-slate-600">
        {section.content}

        {section.additional && (
          <div className="border-t border-slate-100 pt-4">
            {section.additional}
          </div>
        )}
      </div>
    </article>
  );
}

export default function InvestmentRiskDisclosure() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-2 text-xs font-semibold tracking-wide text-amber-700">
              <ShieldCheck className="h-4 w-4" />
              INVESTOR AWARENESS
            </div>

            <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Investment Risk
              <span className="text-amber-600"> Disclosure</span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Investing and purchasing financial products involves varying
              degrees of risk. The risks associated with a product depend on its
              structure, underlying assets, issuer, market conditions, tenure,
              liquidity, taxation and other factors.
            </p>

            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900 sm:p-5">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

              <p>
                Users should carefully read all relevant product and scheme
                documents before making any investment decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Cards */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mb-8 flex items-end justify-between gap-5 sm:mb-10">
          <div>
            <p className="text-sm font-semibold tracking-wide text-amber-600">
              IMPORTANT INFORMATION
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Understanding investment risks
            </h2>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 shadow-sm sm:flex">
            <FileText className="h-4 w-4 text-amber-600" />
            17 disclosures
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {riskSections.map((section) => (
            <RiskCard key={section.number} section={section} />
          ))}
        </div>

        {/* Important Disclaimer */}
        <section className="mt-6 overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
          <div className="bg-amber-500 px-5 py-5 sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <FileText className="h-5 w-5 text-white" />
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-amber-100">
                  RISK DISCLOSURE 17
                </p>

                <h2 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                  Important Disclaimer
                </h2>
              </div>
            </div>
          </div>

          <div className="space-y-4 px-5 py-6 text-[15px] leading-7 text-slate-600 sm:px-7 sm:py-8">
            <p>Past performance is not indicative of future returns.</p>

            <p>
              Mutual Fund investments are subject to market risks. Read all
              Scheme related documents carefully before investing.
            </p>

            <p className="font-medium text-slate-800">
              Investment decisions are ultimately the responsibility of the
              investor.
            </p>

            <p>
              Investxindia acts within the scope of its applicable distribution
              activities and does not guarantee investment performance.
            </p>
          </div>
        </section>

        {/* Bottom Notice */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
              <LockKeyhole className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Protect your investment information
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Use only authorised channels for digital transactions. Never
                share your passwords, PINs, OTPs or other confidential
                authentication information with unauthorised persons.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
