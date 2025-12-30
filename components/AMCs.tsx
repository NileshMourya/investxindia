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
          <p className="text-center text-lg font-semibold text-[#f38120]">
            Trusted AMC Partners
          </p>

          <p className="text-center text-sm md:text-base text-gray-600 leading-relaxed">
            Access a broad spectrum of mutual funds from 40+ premier Asset
            Management Companies. Our platform partners with established fund
            houses such as HDFC, SBI, ICICI Prudential, Axis, Kotak, along with
            35+ others, to deliver reliable and diversified investment choices.
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
