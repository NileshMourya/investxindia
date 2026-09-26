"use client";

import Link from "next/link";

const disclaimerSections = [
  {
    number: "1",
    title: "About Investxindia",
    content: (
      <>
        <p>
          Investxindia Corporate Distribution Pvt. Ltd. is engaged in the
          distribution of financial products and related services in India.
          Investxindia is registered as a Mutual Fund Distributor with the
          Association of Mutual Funds in India (AMFI) and operates in accordance
          with applicable laws, regulations, guidelines and regulatory
          requirements.
        </p>

        <div className="mt-4 rounded-lg bg-gray-50 p-4">
          <p>
            <strong>AMFI ARN:</strong> 346230
          </p>
          <p>
            <strong>CIN:</strong> U66309MH2025PTC460880
          </p>
        </div>

        <p className="mt-4">
          Investxindia may facilitate or distribute various financial products
          and services, including mutual funds, insurance products, fixed
          deposits, bonds and other financial products, subject to the
          applicable regulatory framework and the authorization/registration
          requirements applicable to each product.
        </p>
      </>
    ),
  },

  {
    number: "2",
    title: "Nature of Information",
    content: (
      <>
        <p>
          The information, articles, opinions, illustrations, calculators,
          product details, market information, educational material and other
          content available on this Website are provided primarily for general
          informational and educational purposes.
        </p>

        <p className="mt-4">
          Except where specifically stated otherwise, the content available on
          the Website should not be construed as:
        </p>

        <ul>
          <li>Investment advice;</li>
          <li>Personalised financial advice;</li>
          <li>Legal, tax or accounting advice;</li>
          <li>
            An offer or solicitation to buy or sell any security or financial
            product;
          </li>
          <li>
            A recommendation or endorsement of any particular security, scheme,
            product or investment strategy; or
          </li>
          <li>A guarantee of any particular return, income or outcome.</li>
        </ul>

        <p className="mt-4">
          Information relating to financial products may be subject to change.
          Users should independently verify the relevant product information,
          applicable terms and conditions, risks, charges, taxation and
          regulatory requirements before making any financial decision.
        </p>
      </>
    ),
  },

  {
    number: "3",
    title: "Mutual Fund Distribution",
    content: (
      <>
        <p>
          Investxindia, in its capacity as a Mutual Fund Distributor, may
          facilitate the distribution of mutual fund schemes and provide
          incidental assistance/information relating to mutual fund products to
          its distribution clients, as permitted under the applicable regulatory
          framework.
        </p>

        <p className="mt-4">
          Any information provided in relation to a mutual fund scheme is
          subject to the scheme-related documents and information issued by the
          respective Asset Management Company AMC and other applicable
          regulatory disclosures.
        </p>

        <p className="mt-4">
          Investors should carefully read the Scheme Information Document (SID),
          Statement of Additional Information (SAI), Key Information Memorandum
          (KIM) and other relevant scheme-related documents before investing.
        </p>

        <p className="mt-4">
          Investxindia does not guarantee or assure any return, income,
          appreciation or performance from any mutual fund scheme or other
          financial product.
        </p>
      </>
    ),
  },

  {
    number: "4",
    title: "Investment Risks",
    content: (
      <>
        <p>
          Investment in financial products involves risks. Market conditions,
          economic factors, interest rates, taxation, regulatory changes,
          issuer-related factors and other circumstances may affect the value
          and performance of investments.
        </p>

        <p className="mt-4 font-medium">
          Past performance is not indicative of future returns.
        </p>

        <p className="mt-4 font-medium">
          Mutual Fund investments are subject to market risks. Read all scheme
          related documents carefully before investing.
        </p>

        <p className="mt-4">
          Investors should assess their own financial circumstances, investment
          objectives, risk tolerance, investment horizon and requirements before
          making any investment decision and, where appropriate, seek advice
          from a suitably qualified professional.
        </p>
      </>
    ),
  },

  {
    number: "5",
    title: "Accuracy and Completeness of Information",
    content: (
      <>
        <p>
          Investxindia makes reasonable efforts to ensure that information
          published on the Website is accurate and updated from time to time.
          However, Investxindia does not warrant or represent that the
          information available on the Website is always complete, accurate,
          current, error-free or suitable for every user or purpose.
        </p>

        <p className="mt-4">
          Information may be obtained from third-party sources, AMCs, financial
          institutions, insurers, exchanges, registrars, regulators, publicly
          available sources and other external sources.
        </p>

        <p className="mt-4">
          Investxindia does not independently guarantee the accuracy or
          completeness of information provided by such third parties.
        </p>

        <p className="mt-4">
          Users are advised to independently verify material information before
          relying upon it or making any financial decision.
        </p>
      </>
    ),
  },

  {
    number: "6",
    title: "No Guarantee of Returns",
    content: (
      <p>
        Nothing contained on this Website should be interpreted as a promise,
        assurance or guarantee of investment returns, capital appreciation,
        income, performance or preservation of capital. Any illustrations,
        examples, historical data, calculators or return projections appearing
        on the Website are for illustrative or educational purposes only and
        should not be considered as a guarantee or prediction of future
        performance.
      </p>
    ),
  },

  {
    number: "7",
    title: "Third-Party Products and Services",
    content: (
      <>
        <p>
          The Website may contain information relating to products and services
          provided by third parties, including AMCs, insurance companies, banks,
          financial institutions, issuers, registrars, exchanges and other
          service providers.
        </p>

        <p className="mt-4">
          Investxindia does not control the policies, performance, availability,
          accuracy or operations of such third parties and shall not be
          responsible for any loss or damage arising from reliance upon
          information, services, products or content provided by third parties.
        </p>

        <p className="mt-4">
          Where applicable, the terms and conditions, privacy policies and other
          documents of the respective third-party provider shall also apply.
        </p>
      </>
    ),
  },

  {
    number: "8",
    title: "External Links",
    content: (
      <>
        <p>
          The Website may contain links to third-party websites or platforms for
          the convenience of users. Such links do not necessarily constitute an
          endorsement, sponsorship or recommendation by Investxindia.
        </p>

        <p className="mt-4">
          Investxindia does not control and is not responsible for the content,
          accuracy, availability, security, privacy practices or services of
          such third-party websites.
        </p>

        <p className="mt-4">
          Users should review the terms and privacy policies applicable to any
          third-party website before using such website or providing any
          information.
        </p>
      </>
    ),
  },

  {
    number: "9",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the extent permitted by applicable law, Investxindia shall not be
          responsible or liable for any direct, indirect, incidental,
          consequential or other loss or damage arising from or relating to:
        </p>

        <ul>
          <li>The use of or inability to use the Website;</li>
          <li>
            Reliance upon any information or content published on the Website;
          </li>
          <li>Errors, omissions, inaccuracies or delays in information;</li>
          <li>
            Technical failures, interruptions or unavailability of the Website;
          </li>
          <li>Loss of data or information;</li>
          <li>Third-party websites, products or services;</li>
          <li>Market movements or investment performance; or</li>
          <li>Any investment or financial decision taken by a user.</li>
        </ul>

        <p className="mt-4">
          Users acknowledge that all investment and financial decisions are made
          at their own discretion and risk.
        </p>

        <p className="mt-4">
          Nothing contained in this Disclaimer shall exclude or limit any
          liability that cannot legally be excluded or limited under applicable
          law.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "User Responsibility",
    content: (
      <p>
        Users are responsible for ensuring that any information provided by them
        to Investxindia is accurate, complete and up to date. Users should
        independently evaluate any financial product before investing and should
        carefully review all relevant product and scheme-related documents,
        terms and conditions, charges, risks and applicable disclosures.
      </p>
    ),
  },

  {
    number: "11",
    title: "Website Content",
    content: (
      <>
        <p>
          The Website may contain articles, blogs, educational material, market
          commentary, calculators, illustrations, opinions, news or other
          content contributed by employees, professionals, external contributors
          or third parties.
        </p>

        <p className="mt-4">
          Such content represents the views or information of the respective
          source and may not necessarily represent the views of Investxindia,
          its management, employees or associates.
        </p>

        <p className="mt-4">
          Any opinions or commentary are subject to change without notice and
          should not be treated as personalised investment advice.
        </p>
      </>
    ),
  },

  {
    number: "12",
    title: "Privacy and Security",
    content: (
      <>
        <p>
          Investxindia may collect, process and use information provided by
          users in accordance with its applicable Privacy Policy and applicable
          laws.
        </p>

        <p className="mt-4">
          Users are responsible for maintaining the confidentiality of their
          login credentials, passwords, OTPs and other authentication
          information.
        </p>

        <p className="mt-4">
          Investxindia will not be responsible for losses arising from the
          unauthorized sharing or misuse of such credentials by the user, except
          to the extent caused by {`Investxindia's`} failure to comply with its
          applicable legal obligations.
        </p>
      </>
    ),
  },

  {
    number: "13",
    title: "Regulatory and Product Disclosures",
    content: (
      <>
        <p>
          Different financial products are governed by different regulators and
          applicable laws. Product specific terms, conditions, disclosures and
          regulatory requirements may apply.
        </p>

        <p className="mt-4">
          Users should carefully review the applicable documents and disclosures
          before purchasing or investing in any financial product.
        </p>

        <p className="mt-4">
          Nothing on this Website should be interpreted as representing that
          Investxindia provides regulated services for which it does not hold
          the requisite registration, licence or authorization.
        </p>
      </>
    ),
  },

  {
    number: "14",
    title: "Changes to this Disclaimer",
    content: (
      <p>
        Investxindia reserves the right to modify, amend, update or replace this
        Disclaimer, User Agreement, Privacy Policy and other Website policies
        from time to time without prior notice. Users are advised to
        periodically review the latest version available on the Website.
      </p>
    ),
  },

  {
    number: "15",
    title: "Governing Law and Jurisdiction",
    content: (
      <p>
        This Disclaimer and the use of the Website shall be governed by and
        interpreted in accordance with the laws of India. Subject to applicable
        law, disputes arising in connection with the Website, its use or this
        Disclaimer shall be subject to the jurisdiction of the competent courts
        at Thane, Maharashtra, India.
      </p>
    ),
  },

  {
    number: "16",
    title: "Intended Users",
    content: (
      <>
        <p>
          This Website is primarily intended for users located in India. Access
          to the Website from jurisdictions where such access or the offering of
          particular financial products or services is restricted or prohibited
          shall be the responsibility of the user.
        </p>

        <p className="mt-4">
          Investxindia does not represent that all products, services or
          information available through the Website are suitable or available
          for users in every jurisdiction.
        </p>
      </>
    ),
  },

  {
    number: "17",
    title: "Acceptance",
    content: (
      <p>
        By accessing or continuing to use this Website or App, you acknowledge
        that you have read, understood and agreed to this Disclaimer and the
        applicable Terms of Use and Privacy Policy. If you do not agree with any
        part of this Disclaimer, please discontinue your use of the Website
        and/or App.
      </p>
    ),
  },
];

export default function DisclaimersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="border-b bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="max-w-4xl">
            <Link
              href="/"
              className="mb-5 inline-flex items-center text-sm font-medium text-gray-500 transition hover:text-gray-900"
            >
              ← Back to Home
            </Link>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Website & App Disclaimer
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
              Important information regarding the use of the Investxindia
              website, mobile application, financial products, investment
              information and related services.
            </p>
          </div>
        </div>
      </section>

      {/* ================= IMPORTANT NOTICE ================= */}
      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <h2 className="text-base font-bold text-gray-900 sm:text-lg">
            Important Notice
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            By accessing, browsing or using this website, mobile application,
            online platform or any associated/group website of Investxindia
            Corporate Distribution Pvt. Ltd. Investxindia, Company, we us or our
            collectively, the Website, you acknowledge that you have read,
            understood and agreed to be legally bound by the terms of this
            Disclaimer, User Agreement and other applicable policies published
            on the Website.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="grid grid-cols-1 gap-6">
          {disclaimerSections.map((section) => (
            <article
              key={section.number}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Section Number */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white sm:h-9 sm:w-9">
                  {section.number}
                </div>

                {/* Section Content */}
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {section.title}
                  </h2>

                  <div className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                    {section.content}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= IMPORTANT INVESTMENT DISCLAIMER ================= */}
      <section className="border-t bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="rounded-xl border border-red-200 bg-red-50 p-5 sm:p-7">
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
              Important Investment Disclaimer
            </h2>

            <div className="mt-4 space-y-3 text-sm leading-6 text-gray-700 sm:text-base">
              <p className="font-semibold">
                Past performance is not indicative of future returns.
              </p>

              <p className="font-semibold">
                Mutual Fund investments are subject to market risks. Read all
                scheme related documents carefully before investing.
              </p>

              <p>
                Investxindia Corporate Distribution Pvt. Ltd. is a Mutual Fund
                Distributor and not a SEBI-registered Investment Adviser, unless
                specifically stated otherwise.
              </p>

              <p>
                Investment decisions should be made after considering your
                financial objectives, risk profile and investment requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
