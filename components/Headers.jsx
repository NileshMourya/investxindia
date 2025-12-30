import React from "react";

const Headers = ({ details }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <div>
        <p className="text-xs tracking-widest font-semibold text-[#f38120] uppercase mb-3">
          {details.header}
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b7f] leading-tight">
          {details.title}
          <br /> {details.title1}
        </h2>
      </div>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
        {details.text}
      </p>
    </div>
  );
};

export default Headers;
