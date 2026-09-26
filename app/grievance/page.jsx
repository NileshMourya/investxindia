"use client";

import React from "react";
import {
  AlertTriangle,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  Headphones,
  Info,
  Landmark,
  LockKeyhole,
  Mail,
  MapPin,
  MessageSquareWarning,
  Phone,
  Scale,
  ShieldAlert,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const grievanceSections = [
  {
    number: "01",
    title: "What is a Grievance?",
    icon: MessageSquareWarning,
    content: (
      <>
        <p>A grievance may include a complaint relating to:</p>

        <RiskList
          items={[
            "Service quality",
            "Transaction-related issues",
            "Communication or service delays",
            "Account or platform-related issues",
            "Distribution-related concerns",
            "Miscommunication or alleged mis-selling",
            "Charges or commissions where applicable",
            "Documentation issues",
            "Other matters relating to services provided by Investxindia",
          ]}
        />
      </>
    ),
  },

  {
    number: "03",
    title: "Complaint Acknowledgement",
    icon: Clock3,
    content: (
      <>
        <p>
          Investxindia will endeavour to acknowledge complaints received through
          its designated channels and process them within the applicable
          regulatory/service timelines.
        </p>

        <p>
          The time required for resolution may depend on the nature of the
          complaint and whether information or action is required from an AMC,
          insurer, RTA, bank, exchange or other third party.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "Escalation – Mutual Fund/Securities Matters",
    icon: Scale,
    content: (
      <>
        <p>
          For matters relating to securities-market activities, investors should
          first approach the concerned regulated entity/intermediary through the
          applicable grievance mechanism.
        </p>

        <p>
          If the matter remains unresolved or the investor is dissatisfied with
          the resolution, the investor may use the SEBI SCORES platform where
          the matter falls within {`SCORES'`} scope.
        </p>

        <InfoBox title="SEBI SCORES">
          <p>
            SEBI describes SCORES as an online facilitation platform for
            complaints against SEBI regulated entities and requires investors to
            first take up the grievance with the concerned entity.
          </p>

          <ExternalLinkButton href="https://scores.sebi.gov.in/">
            SEBI SCORES Complaint Portal
          </ExternalLinkButton>
        </InfoBox>
      </>
    ),
  },

  {
    number: "05",
    title: "Online Dispute Resolution",
    icon: Scale,
    content: (
      <>
        <p>
          Where applicable under the securities-market framework, disputes may
          also be eligible for resolution through the applicable Online Dispute
          Resolution mechanism.
        </p>

        <p>
          Investors should refer to the applicable SEBI framework and the
          relevant ODR platform for eligibility and procedure.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Insurance-Related Complaints",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          For complaints relating to an insurance policy or insurance service,
          policyholders should first approach the concerned insurance{" "}
          {`company's`}
          designated Grievance Redressal Officer.
        </p>

        <p>
          Where the complaint is not satisfactorily resolved or applicable
          timelines are not met, policyholders may use the IRDAI Bima Bharosa
          mechanism, subject to applicable rules.
        </p>

        <InfoBox title="IRDAI Bima Bharosa">
          <div className="grid gap-3 sm:grid-cols-2">
            <ContactItem
              icon={Phone}
              label="IRDAI Grievance Helpline"
              value="155255 / 1800 4254 732"
            />

            <ContactItem
              icon={Mail}
              label="Email"
              value="complaints@irdai.gov.in"
            />
          </div>

          <ExternalLinkButton href="https://bimabharosa.irdai.gov.in/">
            IRDAI Bima Bharosa
          </ExternalLinkButton>
        </InfoBox>

        <p>
          IRDAI states that policyholders should first approach the{" "}
          {`insurer's`}
          grievance officer and may escalate to IRDAI/Bima Bharosa where the
          matter remains unresolved.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "Product-Specific Complaints",
    icon: Building2,
    content: (
      <>
        <p>
          Where a complaint concerns a product provider rather than
          Investxindia—for example:
        </p>

        <RiskList
          items={[
            "Mutual Fund AMC",
            "Registrar and Transfer Agent",
            "Insurance Company",
            "Bank",
            "Bond issuer",
            "Exchange",
            "Depository",
            "Other financial institution",
          ]}
        />

        <p>
          The complaint may also need to be submitted to the relevant
          product/service provider according to its applicable grievance
          procedure.
        </p>

        <p>
          Investxindia may assist clients in directing the complaint to the
          appropriate entity where appropriate.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "Complaints Involving Transactions",
    icon: FileText,
    content: (
      <>
        <p>
          For transaction-related complaints, clients should provide supporting
          information such as:
        </p>

        <RiskList
          items={[
            "Transaction reference number",
            "Folio/account number",
            "Application number",
            "Policy number",
            "Date of transaction",
            "Payment reference",
            "Relevant correspondence",
            "Other supporting documents",
          ]}
        />

        <WarningBox>
          Clients should not send passwords, PINs or OTPs in a grievance email
          unless specifically required through an authorised secure process.
        </WarningBox>
      </>
    ),
  },

  {
    number: "09",
    title: "Fraud or Unauthorised Transaction",
    icon: ShieldAlert,
    content: (
      <>
        <p>
          If you suspect fraud, impersonation, unauthorised transactions or
          misuse of your credentials, contact Investxindia immediately and,
          where applicable, contact your bank, AMC, insurer or other relevant
          financial institution through its official channels.
        </p>

        <p>
          Users should also report suspected cyber fraud to the appropriate
          government/law-enforcement channel where required.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "No Charges for Raising a Grievance",
    icon: CheckCircle2,
    content: (
      <>
        <p>
          Investxindia does not require users to pay any fee merely to submit a
          genuine service grievance to Investxindia.
        </p>

        <WarningBox>
          Users should be cautious of persons requesting payments while claiming
          to represent Investxindia or a regulator for the purpose of releasing
          refunds, investments, claims or grievance settlements.
        </WarningBox>
      </>
    ),
  },

  {
    number: "11",
    title: "Fair and Transparent Handling",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Investxindia aims to handle complaints fairly, transparently and
          within applicable regulatory/service timelines.
        </p>

        <p>
          The resolution of a complaint may depend on facts, documents,
          contractual terms, regulatory requirements and the actions of
          third-party entities.
        </p>
      </>
    ),
  },

  {
    number: "12",
    title: "Regulatory Changes",
    icon: Landmark,
    content: (
      <>
        <p>
          The grievance redressal process may be updated from time to time to
          reflect changes in applicable laws, regulations, regulatory platforms
          and industry procedures.
        </p>

        <p className="font-medium text-slate-800">
          The latest version published on the Investxindia website shall apply.
        </p>
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
          <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ContactItem({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
        <Icon className="h-4 w-4 text-emerald-600" />
        {label}
      </div>

      <p className="mt-2 break-words text-sm font-medium text-slate-800">
        {value}
      </p>
    </div>
  );
}

function InfoBox({ title, children }) {
  return (
    <div className="my-5 overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50/60">
      <div className="flex items-center gap-2 border-b border-emerald-100 bg-emerald-50 px-4 py-3">
        <ShieldCheck className="h-4 w-4 text-emerald-700" />

        <span className="text-sm font-semibold text-emerald-900">{title}</span>
      </div>

      <div className="space-y-4 p-4 text-sm leading-6 text-slate-600">
        {children}
      </div>
    </div>
  );
}

function WarningBox({ children }) {
  return (
    <div className="my-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

      <div>{children}</div>
    </div>
  );
}

function ExternalLinkButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
    >
      {children}

      <ChevronRight className="h-4 w-4" />
    </a>
  );
}

function GrievanceCard({ section }) {
  const Icon = section.icon;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-[0_12px_35px_rgba(15,23,42,0.08)] sm:p-6 lg:p-7">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-5 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 text-xs font-semibold tracking-[0.18em] text-emerald-600">
            STEP {section.number}
          </div>

          <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
            {section.title}
          </h2>
        </div>
      </div>

      <div className="space-y-4 text-[15px] leading-7 text-slate-600">
        {section.content}
      </div>
    </article>
  );
}

export default function GrievanceRedressalPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-semibold tracking-wide text-emerald-700">
              <Headphones className="h-4 w-4" />
              CLIENT SUPPORT & GRIEVANCE
            </div>

            <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Grievance Redressal
              <span className="text-emerald-600"> Policy</span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Investxindia is committed to providing transparent and responsive
              service to its clients and users. This Grievance Redressal Policy
              explains the process for submitting and escalating complaints
              relating to services provided by Investxindia.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Step 1 */}
      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-[0_4px_25px_rgba(15,23,42,0.05)]">
          <div className="bg-emerald-700 px-5 py-5 sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <Phone className="h-5 w-5 text-white" />
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-emerald-100">
                  STEP 02
                </p>

                <h2 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                  Contact Investxindia
                </h2>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-7">
            <p className="mb-6 text-[15px] leading-7 text-slate-600">
              Clients are encouraged to first contact Investxindia with details
              of their concern.
            </p>

            <div className="grid gap-5 lg:grid-cols-2">
              {/* Contact Details */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Building2 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                      Customer / Grievance Contact
                    </p>

                    <h3 className="mt-1 font-semibold text-slate-900">
                      Investxindia Corporate Distribution Pvt. Ltd.
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="mailto:contact@investxindia.com"
                    className="flex items-start gap-3 rounded-xl bg-white p-4 transition hover:ring-1 hover:ring-emerald-200"
                  >
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        Email
                      </p>

                      <p className="mt-1 break-all text-sm font-medium text-slate-800">
                        contact@investxindia.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+919892440999"
                    className="flex items-start gap-3 rounded-xl bg-white p-4 transition hover:ring-1 hover:ring-emerald-200"
                  >
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        Help Desk
                      </p>

                      <p className="mt-1 text-sm font-medium text-slate-800">
                        +91 98924 40999
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 rounded-xl bg-white p-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        Registered & Corporate Office
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-700">
                        902, Gomes Garden, Kaul Heritage City,
                        <br />
                        Chulna Road, Vasai (West),
                        <br />
                        Thane – 401202, Maharashtra, India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Required Information */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <FileText className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                      Please Provide
                    </p>

                    <h3 className="mt-1 font-semibold text-slate-900">
                      Information for your complaint
                    </h3>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {[
                    "Full name",
                    "Registered mobile number/email",
                    "Client/Folio/Application reference, where applicable",
                    "Date of transaction or incident",
                    "Nature of complaint",
                    "Relevant supporting documents",
                    "Expected resolution, if applicable",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-lg bg-slate-50 px-3.5 py-3 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining Sections */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mb-8 sm:mb-10">
          <p className="text-sm font-semibold tracking-wide text-emerald-600">
            GRIEVANCE PROCESS
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Complaint handling & escalation
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {grievanceSections.map((section) => (
            <GrievanceCard key={section.number} section={section} />
          ))}
        </div>

        {/* Final Security Notice */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
              <LockKeyhole className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Keep your credentials secure
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Never share passwords, PINs or OTPs through ordinary grievance
                communication. Use only authorised and secure channels when
                submitting sensitive information.
              </p>
            </div>
          </div>
        </div>

        {/* Company Footer Note */}
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-2">
            <UserRound className="h-4 w-4 text-emerald-600" />
            <span>Investxindia Corporate Distribution Pvt. Ltd.</span>
          </div>

          <span>Grievance Redressal Policy</span>
        </div>
      </section>
    </main>
  );
}
