import React from "react";
import AmcsSliders from "./AmcsSliders";
const AMCs = () => {
  return (
    <div>
      <div className="w-full bg-[#f7f9fc] py-16 px-4 md:px-8 mt-5 mb-5">
        <div
          className="flex items-center justify-content-center mx-auto lg:w-3/4 sm:w-full"
          style={{ flexDirection: "column" }}
        >
          <p className="text-center text-lg font-semibold text-gray-400">
            PARTNER AMCS
          </p>
          <p className="text-center mt-5 text-2xl font-bold text-[#00113d]">
            Access to 40+ Leading Asset Management Companies
          </p>
          <p className="text-center text-sm md:text-base text-gray-600 leading-relaxed">
            We provide access to top-performing mutual funds across all major
            AMCs, ensuring diversified and research-backed investment options.
            Partner with leading fund houses including HDFC, SBI, ICICI
            Prudential, Axis, Kotak, and 35+ more AMCs.
          </p>
        </div>
      </div>
      <div className="w-full mx-auto">
        <AmcsSliders />
      </div>
    </div>
  );
};

export default AMCs;
