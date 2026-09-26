"use client";

import React from "react";
import {
  FileText,
  ShieldCheck,
  AlertTriangle,
  Users,
  Scale,
  RefreshCw,
  Lock,
  ExternalLink,
  Copyright,
  Mail,
  Gavel,
  Landmark,
} from "lucide-react";

interface SectionProps {
  icon: React.ElementType;
  title: string;
  number: number;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  icon: Icon,
  title,
  number,
  children,
}) => (
  <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:shadow-md sm:p-6 lg:p-7">
    {/* Section Header */}
    <div className="mb-5 flex items-start gap-3 sm:gap-4">
      <div className="flex shrink-0 items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f38120] text-xs font-bold text-white sm:h-9 sm:w-9 sm:text-sm">
          {number}
        </span>

        <div className="rounded-xl bg-orange-50 p-2 text-[#f38120]">
          <Icon size={21} strokeWidth={2} />
        </div>
      </div>

      <h2 className="pt-1 text-lg font-semibold leading-6 text-gray-900 sm:text-xl">
        {title}
      </h2>
    </div>

    {/* Section Content */}
    <div className="space-y-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
      {children}
    </div>
  </div>
);

const BulletList = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc space-y-2 pl-5 marker:text-[#f38120]">{children}</ul>
);

const ImportantText = ({ children }: { children: React.ReactNode }) => (
  <p className="font-medium text-gray-800">{children}</p>
);

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-sm font-medium text-[#f38120]">
            <FileText size={16} />
            Legal Information
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            These Terms & Conditions govern your access to and use of the
            website, mobile application and digital platforms operated by{" "}
            <span className="font-semibold text-gray-800">
              Investxindia Corporate Distribution Pvt. Ltd.
            </span>
          </p>

          {/* Dates */}
          <div className="mt-5 flex flex-col items-center justify-center gap-2 text-xs text-gray-500 sm:flex-row sm:gap-6 sm:text-sm">
            <p>
              <span className="font-semibold text-gray-700">
                Effective Date:
              </span>{" "}
              14-November-2025
            </p>

            <span className="hidden sm:block">•</span>

            <p>
              <span className="font-semibold text-gray-700">Last Updated:</span>{" "}
              26-September-2026
            </p>
          </div>

          {/* Registration */}
          <div className="mt-4 text-xs text-gray-500 sm:text-sm">
            AMFI Registered Mutual Fund Distributor · AMFI ARN: 346230
          </div>
        </div>

        {/* ================= INTRODUCTION ================= */}
        <div className="mb-8 rounded-2xl border border-orange-100 bg-orange-50 p-5 sm:p-6 lg:p-7">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0 rounded-xl bg-white p-2 text-[#f38120] shadow-sm">
              <ShieldCheck size={22} />
            </div>

            <div className="min-w-0">
              <h2 className="text-base font-semibold text-gray-900 sm:text-lg">
                Welcome to Investxindia
              </h2>

              <div className="mt-3 space-y-3 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                <p>
                  Welcome to the website, mobile application and digital
                  platforms operated by Investxindia Corporate Distribution Pvt.
                  Ltd. Investxindia, Company, we, us or our.
                </p>

                <p>
                  By accessing, browsing or using our website, mobile
                  application, online platform, forms, calculators, content or
                  services {`(collectively, the "Platform")`}, you agree to
                  comply with and be legally bound by these Terms & Conditions.
                </p>

                <p className="font-medium text-gray-900">
                  If you do not agree with these Terms & Conditions, please
                  discontinue use of the Platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTIONS ================= */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* 1 */}
          <Section number={1} icon={ShieldCheck} title="About Investxindia">
            <p>
              Investxindia Corporate Distribution Pvt. Ltd. is engaged in the
              distribution of financial products and related services in India.
            </p>

            <p>
              Investxindia is registered as a Mutual Fund Distributor with the
              Association of Mutual Funds in India (AMFI).
            </p>

            <div className="rounded-xl bg-gray-50 p-4">
              <p>
                <span className="font-semibold text-gray-800">AMFI ARN:</span>{" "}
                346230
              </p>

              <p className="mt-1">
                <span className="font-semibold text-gray-800">CIN:</span>{" "}
                U66309MH2025PTC460880
              </p>
            </div>

            <p>
              Investxindia may facilitate or distribute financial products and
              services subject to the applicable laws, regulations,
              registrations, licences and authorisations applicable to each
              product.
            </p>
          </Section>

          {/* 2 */}
          <Section number={2} icon={Landmark} title="Nature of Services">
            <p>
              The Platform may provide information and facilitation relating to
              financial products and services, which may include:
            </p>

            <BulletList>
              <li>Mutual Funds</li>
              <li>Insurance products</li>
              <li>Fixed Deposits</li>
              <li>Bonds</li>
              <li>
                Specialized Investment Funds (where permitted and applicable)
              </li>
              <li>Portfolio-related products/services where duly authorised</li>
              <li>Loans and financial services</li>
              <li>
                Other financial products/services that Investxindia is legally
                permitted to distribute or facilitate
              </li>
            </BulletList>

            <p>
              The availability of a product or service on the Platform does not
              constitute a representation that such product is suitable for
              every user.
            </p>
          </Section>

          {/* 3 */}
          <Section number={3} icon={FileText} title="Mutual Fund Distribution">
            <p>
              Investxindia acts as a Mutual Fund Distributor and may facilitate
              transactions and provide permitted incidental information relating
              to mutual fund products to its clients.
            </p>

            <p>
              Investxindia is not a SEBI-registered Investment Adviser unless
              expressly stated otherwise.
            </p>

            <ImportantText>
              Users should distinguish between distribution services and
              fee-based investment advisory services.
            </ImportantText>
          </Section>

          {/* 4 */}
          <Section number={4} icon={AlertTriangle} title="No Guarantee">
            <p>Investxindia does not guarantee:</p>

            <BulletList>
              <li>Investment returns</li>
              <li>Capital appreciation</li>
              <li>Income</li>
              <li>Protection from loss</li>
              <li>
                Performance of any mutual fund, security or financial product
              </li>
              <li>Approval of any financial transaction</li>
              <li>Loan approval</li>
              <li>Insurance claim settlement</li>
              <li>Achievement of any financial objective</li>
            </BulletList>

            <ImportantText>
              All investments and financial products are subject to applicable
              risks and terms.
            </ImportantText>
          </Section>

          {/* 5 */}
          <Section number={5} icon={Users} title="User Eligibility">
            <p>By using the Platform, you represent that:</p>

            <BulletList>
              <li>
                You are legally capable of entering into a binding agreement
              </li>
              <li>Information submitted by you is accurate and complete</li>
              <li>You will not use the Platform for unlawful purposes</li>
              <li>You will not impersonate another person</li>
              <li>
                You will not provide false, misleading or fraudulent information
              </li>
              <li>
                You will comply with applicable Indian laws and regulations
              </li>
            </BulletList>
          </Section>

          {/* 6 */}
          <Section number={6} icon={Lock} title="User Accounts and Security">
            <p>
              Where registration or login is required, users are responsible for
              maintaining the confidentiality of their credentials, passwords,
              OTPs and other authentication information.
            </p>

            <p>
              Users must immediately notify Investxindia if they suspect
              unauthorised access to their account.
            </p>

            <p>
              Users should never share OTPs, passwords, PINs or other
              authentication credentials with any person claiming to represent
              Investxindia unless the applicable process specifically requires
              such authentication through an authorised platform.
            </p>
          </Section>

          {/* 7 */}
          <Section
            number={7}
            icon={ShieldCheck}
            title="Accuracy of Information"
          >
            <p>
              Investxindia makes reasonable efforts to provide accurate and
              updated information.
            </p>

            <p>
              However, financial information, interest rates, NAVs, market data,
              product features, taxation provisions, regulatory requirements and
              other information may change from time to time.
            </p>

            <p>
              Investxindia does not guarantee that all information displayed on
              the Platform will always be current, complete, error-free or
              suitable for a particular user s circumstances.
            </p>

            <p>
              Users should verify important information from the relevant
              product provider, AMC, insurer, issuer, regulator or official
              document before taking any decision.
            </p>
          </Section>

          {/* 8 */}
          <Section number={8} icon={ExternalLink} title="Third-Party Services">
            <p>
              The Platform may integrate with or provide access to services
              operated by third parties, including AMCs, insurers, banks, RTAs,
              exchanges, payment providers, KYC agencies, technology providers
              and other financial institutions.
            </p>

            <p>
              The terms and policies of such third parties may apply separately.
            </p>

            <p>
              Investxindia is not responsible for matters exclusively within the
              control of such third-party service providers.
            </p>
          </Section>

          {/* 9 */}
          <Section number={9} icon={ExternalLink} title="External Links">
            <p>The Platform may contain links to external websites.</p>

            <p>
              Such links are provided for convenience and do not necessarily
              constitute an endorsement by Investxindia.
            </p>

            <p>
              Investxindia does not control the content, security, availability
              or privacy practices of external websites.
            </p>
          </Section>

          {/* 10 */}
          <Section number={10} icon={Copyright} title="Intellectual Property">
            <p>
              Unless otherwise stated, all text, graphics, logos, designs,
              images, software, content, trademarks and other materials
              available on the Platform are owned by or licensed to Investxindia
              or their respective owners.
            </p>

            <p>
              No material may be reproduced, modified, distributed, republished,
              copied or commercially exploited without prior written permission,
              except where permitted by applicable law.
            </p>
          </Section>

          {/* 11 */}
          <Section number={11} icon={AlertTriangle} title="Prohibited Use">
            <p>Users shall not:</p>

            <BulletList>
              <li>Attempt to gain unauthorised access to the Platform</li>
              <li>Introduce viruses, malware or harmful code</li>
              <li>
                Scrape or systematically copy Platform content without
                permission
              </li>
              <li>Misuse another user s information</li>
              <li>Attempt fraudulent transactions</li>
              <li>Interfere with the Platform s operation</li>
              <li>Use the Platform for unlawful purposes</li>
              <li>
                Misrepresent their identity or relationship with Investxindia
              </li>
            </BulletList>
          </Section>

          {/* 12 */}
          <Section number={12} icon={Mail} title="Electronic Communications">
            <p>
              By using the Platform, you consent to receiving communications
              electronically, including emails, SMS, telephone calls, app
              notifications and other permitted electronic communications
              relating to your transactions, services, account, requests and
              other relevant matters.
            </p>

            <p>
              Marketing communications will be subject to applicable consent and
              communication preferences.
            </p>
          </Section>

          {/* 13 */}
          <Section number={13} icon={Scale} title="Limitation of Liability">
            <p>
              To the extent permitted by applicable law, Investxindia shall not
              be liable for losses arising from:
            </p>

            <BulletList>
              <li>Market movements</li>
              <li>Investment performance</li>
              <li>Third-party system failures</li>
              <li>Internet or telecommunications interruptions</li>
              <li>Delays caused by external service providers</li>
              <li>Incorrect information supplied by the user</li>
              <li>Unauthorised use of user credentials</li>
              <li>Changes in law or regulation</li>
              <li>Events beyond the reasonable control of Investxindia</li>
            </BulletList>

            <p>
              Nothing in these Terms excludes liability that cannot legally be
              excluded under applicable law.
            </p>
          </Section>

          {/* 14 */}
          <Section number={14} icon={ShieldCheck} title="Indemnity">
            <p>
              To the extent permitted by applicable law, users agree to
              indemnify and hold harmless Investxindia, its directors, officers,
              employees and authorised representatives from claims, losses or
              liabilities arising from unlawful use of the Platform, fraudulent
              activity, breach of these Terms or violation of applicable law by
              the user.
            </p>
          </Section>

          {/* 15 */}
          <Section
            number={15}
            icon={RefreshCw}
            title="Modification of Services"
          >
            <p>
              Investxindia may modify, suspend, discontinue or restrict any part
              of the Platform or its services where reasonably required,
              including due to regulatory, technological, operational or
              security considerations.
            </p>
          </Section>

          {/* 16 */}
          <Section number={16} icon={RefreshCw} title="Modification of Terms">
            <p>
              Investxindia may update these Terms & Conditions from time to
              time.
            </p>

            <p>
              The updated version will be published on the Platform with the
              revised Last Updated date.
            </p>

            <p>
              Continued use of the Platform after such update may constitute
              acceptance of the revised Terms, subject to applicable law.
            </p>
          </Section>

          {/* 17 */}
          <Section number={17} icon={Gavel} title="Governing Law">
            <p>
              These Terms & Conditions shall be governed by the laws of India.
            </p>

            <p>
              Subject to applicable law, courts having competent jurisdiction at
              Thane, Maharashtra, India shall have jurisdiction over disputes
              relating to these Terms or use of the Platform.
            </p>
          </Section>

          {/* 18 */}
          <Section number={18} icon={Landmark} title="Regulatory Compliance">
            <p>
              Investxindia shall operate its distribution activities in
              accordance with applicable laws, regulations, circulars, codes of
              conduct and regulatory requirements applicable to its activities.
            </p>

            <p>
              Nothing contained on the Platform shall be interpreted as granting
              Investxindia any registration, licence or authorisation that it
              does not hold.
            </p>
          </Section>

          {/* 19 */}
          <Section number={19} icon={Mail} title="Contact">
            <p>For general queries, you may contact:</p>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">
                Investxindia Corporate Distribution Pvt. Ltd.
              </p>

              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <span className="font-semibold text-gray-800">Email:</span>{" "}
                  <a
                    href="mailto:contact@investxindia.com"
                    className="break-all text-[#f38120] hover:underline"
                  >
                    contact@investxindia.com
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-gray-800">Website:</span>{" "}
                  <a
                    href="https://www.investxindia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-[#f38120] hover:underline"
                  >
                    www.investxindia.com
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-gray-800">AMFI ARN:</span>{" "}
                  346230
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ================= ACCEPTANCE FOOTER ================= */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm sm:mt-12 sm:p-7">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <div className="rounded-full bg-orange-50 p-3 text-[#f38120]">
              <FileText size={24} />
            </div>

            <h2 className="mt-4 text-base font-semibold text-gray-900 sm:text-lg">
              Acceptance of Terms
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              By accessing or continuing to use the Platform, you acknowledge
              that you have read, understood and agreed to these Terms &
              Conditions.
            </p>

            <p className="mt-3 text-xs text-gray-500 sm:text-sm">
              Effective Date: 14-November-2025 · Last Updated: 26-September-2026
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
