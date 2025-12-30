import React from "react";

const Component = ({ card, id }) => {
  return (
    <div
      key={id}
      className="relative group rounded-3xl p-6 bg-gradient-to-br from-white to-slate-50 
                 border border-slate-100 shadow-sm 
                 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Left Accent Bar */}
      <div
        className="absolute left-0 top-6 h-14 w-1 rounded-full bg-gradient-to-b from-orange-400 to-orange-200 
                      opacity-60 group-hover:opacity-100 transition"
      />

      {/* Floating Icon */}
      <div
        className="absolute -top-6 right-6 w-12 h-12 rounded-2xl 
                      bg-gradient-to-br from-orange-400 to-orange-500 
                      text-white flex items-center justify-center text-xl 
                      shadow-lg group-hover:scale-110 transition"
      >
        {card.icon}
      </div>

      {/* Content */}
      <div className="pt-6 space-y-3">
        <p className="text-xs font-bold tracking-wider text-orange-500 uppercase">
          {card?.title}
        </p>

        <p className="text-sm text-slate-600 leading-relaxed">{card.text}</p>
      </div>

      {/* Bottom CTA Indicator */}
      <div
        className="mt-6 flex items-center gap-2 text-xs font-semibold text-orange-500 opacity-0 
                      group-hover:opacity-100 transition"
      >
        <span>Learn more</span>
        <span className="group-hover:translate-x-1 transition">→</span>
      </div>
    </div>
  );
};

export default Component;
