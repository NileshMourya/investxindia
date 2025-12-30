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
      <section className="w-full shadow-md rounded-lg bg-white py-16 px-4 md:px-8 mt-5 mb-5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs tracking-widest font-semibold text-[#f38120] uppercase mb-3">
                Investment Products
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b7f] leading-tight">
                Portfolio Management Services (PMS)
              </h2>
            </div>
            <p className="text-sm text-[#0b2b7f]">
              Professional portfolio management services tailored for high net
              worth individuals and institutions, offering personalized
              investment strategies and active portfolio management.
            </p>
          </div>
          <div className="">
            <p className="text-2xl font-semibold text-[#0b2b7f] mt-4 mb-4">
              About Portfolio Management Services
            </p>
            <p className="text-sm text-[#0b2b7f]">
              Portfolio Management Service (PMS) is a professionally tailored
              investment solution designed to meet the specific investment
              objectives of discerning investor classes. This sophisticated
              service caters to a niche segment of clients, including
              high-net-worth individuals and institutional entities, providing
              them with personalized wealth management solutions.
            </p>
            <p className="text-sm text-[#0b2b7f] mt-2">
              In essence, Portfolio Management Service involves the professional
              management of clients investments by experienced portfolio
              managers, with the primary goal of creating and preserving wealth
              through strategic asset allocation and active portfolio
              management.
            </p>
            <p className="text-sm text-[#0b2b7f] mt-2">
              At investxindia, we act as a mutual fund distributor and
              facilitator for investxindiaPMS / investxindiaNDPMS. We are not
              SEBI-registered portfolio managers ourselves. Final PMS selection,
              suitability and documentation are always discussed one-to-one
              based on your net worth, risk profile and existing holdings.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full shadow-md rounded-lg bg-white py-16 px-4 md:px-8 mt-5 mb-5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs tracking-widest font-semibold text-[#f38120] uppercase mb-3">
                Suitability
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b7f] leading-tight">
                Who should consider PMS / investxindiaNDPMS – and who should not
              </h2>
            </div>
            <p className="text-sm text-[#0b2b7f]">
              PMS and NDPMS are advanced solutions meant for a limited set of
              investors. Most families are better served primarily through
              mutual funds, with PMS considered only after core goals are
              secured.
            </p>
          </div>
          <div className="w-full p-4 grid grid-cols-1 lg:grid-col-2 sm:grid-cols-2 gap-8">
            <div className="p-4 shadow-md rounded-md bg-white hover:shadow-lg">
              <p className="text-md font-semibold text-[#0b2b7f] mb-2">
                Typically suitable for
              </p>
              <p className="text-xs text-[#0b2b7f] mt-1">
                • High net worth investors (usually ₹50L+ in financial assets).
              </p>
              <p className="text-xs text-[#0b2b7f] mt-1">
                • Those with stable cashflows and a long-term horizon for this
                capital.
              </p>
              <p className="text-xs text-[#0b2b7f] mt-1">
                • Investors who already have emergency, insurance and core goals
                addressed.
              </p>
              <p className="text-xs text-[#0b2b7f] mt-1">
                • Individuals comfortable with equity volatility and
                concentrated portfolios.
              </p>
            </div>
            <div className="p-4 shadow-md rounded-md bg-white hover:shadow-lg">
              <p className="text-md font-semibold text-[#0b2b7f] mb-2">
                Typically suitable for
              </p>
              <p className="text-xs text-[#0b2b7f] mt-1">
                • High net worth investors (usually ₹50L+ in financial assets).
              </p>
              <p className="text-xs text-[#0b2b7f] mt-1">
                • Those with stable cashflows and a long-term horizon for this
                capital.
              </p>
              <p className="text-xs text-[#0b2b7f] mt-1">
                • Investors who already have emergency, insurance and core goals
                addressed.
              </p>
              <p className="text-xs text-[#0b2b7f] mt-1">
                • Individuals comfortable with equity volatility and
                concentrated portfolios.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full shadow-md rounded-lg bg-white py-16 px-4 md:px-8 mt-5 mb-5">
        <p className="text-3xl md:text-4xl font-bold text-[#0b2b7f]">
          Understanding Portfolio Management Services
        </p>
        <p className="mt-2 text-sm text-[#0b2b7f]">
          Explore the key aspects of PMS and how it can benefit your investment
          strategy.
        </p>
        <div className="max-w-7xl mt-5 mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioService.map((card, i) => (
            <Component card={card} key={i} id={i} />
          ))}
        </div>
      </section>

      <section className="w-full shadow-md rounded-lg bg-white py-16 px-4 md:px-8 mt-5 mb-5">
        <p className="text-3xl md:text-4xl font-bold text-[#0b2b7f]">
          Rationale for Portfolio Management Services
        </p>
        <p className="mt-2 text-sm text-[#0b2b7f]">
          Discretionary PMS offers numerous unique advantages that make it an
          attractive investment solution for sophisticated investors:
        </p>
        <div className="max-w-7xl mt-5 mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {managementServices.map((card, i) => (
            <Component card={card} key={i} id={i} />
          ))}
        </div>
      </section>

      <section className="w-full shadow-md rounded-lg bg-white py-16 px-4 md:px-8 mt-5 mb-5">
        <p className="text-3xl md:text-4xl font-bold text-[#0b2b7f]">
          Why Choose Our Portfolio Management Services?
        </p>
        <p className="mt-2 text-sm text-[#0b2b7f]">
          Our comprehensive approach to portfolio management combines expertise,
          innovation, and personalized service to deliver exceptional results.
        </p>
        <div className="max-w-7xl mt-5 mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((card, i) => (
            <Component card={card} key={i} id={i} />
          ))}
        </div>
      </section>

      <section className="w-full shadow-md rounded-lg bg-white py-16 px-4 md:px-8 mt-5 mb-5">
        <p className="text-3xl md:text-4xl font-bold text-[#0b2b7f]">
          Key Benefits of Our Portfolio Management Service
        </p>
        <p className="mt-2 text-sm text-[#0b2b7f]">
          Experience the advantages of professional portfolio management with
          our comprehensive service offerings.
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
