import React from "react";
import {
  portfolioService,
  managementServices,
  services,
  benefits,
} from "./data";
import Component from "./Component";

const page = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-white to-gray-50 shadow-lg rounded-2xl py-12 px-4 md:px-8 mt-6 mb-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <p className="text-xs tracking-widest font-bold text-[#f38120] uppercase">
                Investment Products
              </p>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b2b7f] leading-snug">
                Portfolio Management Services (PMS)
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Professional portfolio management services tailored for
              high-net-worth individuals and institutions, offering personalized
              investment strategies and active portfolio management.
            </p>
          </div>

          {/* About PMS */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
            <p className="text-2xl font-semibold text-[#0b2b7f] mb-4">
              About Portfolio Management Services
            </p>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                Portfolio Management Service (PMS) is a professionally tailored
                investment solution designed to meet the specific objectives of
                discerning investors. This service caters to high-net-worth
                individuals and institutions, offering personalized wealth
                management solutions.
              </p>

              <p>
                PMS involves professional management of client investments by
                experienced portfolio managers, aiming to create and preserve
                wealth through strategic asset allocation and active portfolio
                management.
              </p>

              <p>
                At investxindia, we act as a mutual fund distributor and
                facilitator for investxindiaPMS / investxindiaNDPMS. We are not
                SEBI-registered portfolio managers ourselves. Final PMS
                selection, suitability, and documentation are always discussed
                one-to-one based on your net worth, risk profile, and existing
                holdings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 px-4 md:px-8 mt-6 mb-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <p className="text-xs tracking-widest font-bold text-[#f38120] uppercase">
                Suitability
              </p>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[#00113d] leading-snug">
                Who should consider PMS / investxindiaNDPMS – and who should not
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              PMS and NDPMS are advanced investment solutions designed for a
              select group of investors. Most families are better served with
              mutual funds, while PMS is suitable only after core goals are
              secured.
            </p>
          </div>

          {/* Suitability Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Suitable */}
            <div className="relative bg-gradient-to-tr from-green-50 to-green-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all">
              <div className="absolute top-4 right-4 w-10 h-10 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-bold text-lg">
                ✅
              </div>
              <p className="text-md font-semibold text-green-800 mb-4">
                Typically Suitable For
              </p>
              <ul className="text-sm text-green-900 space-y-2 list-disc list-inside">
                <li>High net worth investors (₹50L+ in financial assets)</li>
                <li>
                  Those with stable cashflows and long-term capital horizon
                </li>
                <li>
                  Investors with emergency funds, insurance, and core goals
                  secured
                </li>
                <li>
                  Individuals comfortable with equity volatility and
                  concentrated portfolios
                </li>
              </ul>
            </div>

            {/* Not Suitable */}
            <div className="relative bg-gradient-to-tr from-red-50 to-red-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all">
              <div className="absolute top-4 right-4 w-10 h-10 bg-red-200 rounded-full flex items-center justify-center text-red-800 font-bold text-lg">
                ❌
              </div>
              <p className="text-md font-semibold text-red-800 mb-4">
                Typically Not Suitable For
              </p>
              <ul className="text-sm text-red-900 space-y-2 list-disc list-inside">
                <li>Investors new to equities or long-term investing</li>
                <li>Those without emergency funds or insurance coverage</li>
                <li>Individuals seeking only short-term gains</li>
                <li>
                  Investors uncomfortable with portfolio concentration or
                  volatility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full shadow-md rounded-lg bg-white py-12 px-4 md:px-8 mt-5 mb-5">
        <p className="text-3xl md:text-4xl font-bold text-[#0b2b7f]">
          Portfolio Management Services Explained
        </p>

        <p className="p-2 text-sm text-[#0b2b7f]">
          Learn how Portfolio Management Services (PMS) work and how they can
          strengthen your investment planning and long-term wealth strategy.
        </p>

        <div className="max-w-7xl mt-5 mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioService.map((card, i) => (
            <Component card={card} key={i} id={i} />
          ))}
        </div>
      </section>

      <section className="w-full shadow-md rounded-lg bg-white py-12 px-4 md:px-8 mt-5 mb-5">
        <p className="text-3xl md:text-4xl font-bold text-[#0b2b7f]">
          The Case for Portfolio Management Services
        </p>

        <p className="p-2 text-sm text-[#0b2b7f]">
          Discretionary Portfolio Management Services (PMS) offer a range of
          strategic benefits, making them an effective investment solution for
          experienced and goal-driven investors.
        </p>

        <div className="max-w-7xl mt-5 mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {managementServices.map((card, i) => (
            <Component card={card} key={i} id={i} />
          ))}
        </div>
      </section>

      <section className="w-full shadow-md rounded-lg bg-white py-12 px-4 md:px-8 mt-5 mb-5">
        <p className="text-3xl md:text-4xl font-bold text-[#0b2b7f]">
          Why Opt for Our Portfolio Management Services?
        </p>

        <p className="p-2 text-sm text-[#0b2b7f]">
          We offer a holistic portfolio management approach that blends deep
          market expertise, innovative strategies, and tailored solutions to
          help you achieve your financial goals efficiently.
        </p>

        <div className="max-w-7xl mt-5 mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((card, i) => (
            <Component card={card} key={i} id={i} />
          ))}
        </div>
      </section>

      <section className="w-full shadow-md rounded-lg bg-white py-12 px-4 md:px-8 mt-5 mb-5">
        <p className="text-3xl md:text-4xl font-bold text-[#0b2b7f]">
          Key Advantages of Our Portfolio Management Services
        </p>

        <p className="p-2 text-sm text-[#0b2b7f]">
          Discover the benefits of expert-led portfolio management through our
          comprehensive, personalized services designed to grow and protect your
          wealth.
        </p>

        <div className="max-w-7xl mt-5 mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {benefits.map((card, i) => (
            <Component card={card} key={i} id={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
