import React from "react";

const Component = ({ card, id }) => {
  return (
    <div
      key={id}
      className={`group shadow-md cursor-pointer relative rounded-2xl p-5 backdrop-blur-xl transition-all duration-300
                          hover:-translate-y-2 hover:shadow-xl bg-white/80`}
    >
      {/* Gradient Hover Glow */}
      <div className="absolute inset-0 rounded-2xl from-orange-400/0 via-orange-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition" />

      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-xl mb-4 text-[#f38120] hover:bg-[#f38120] hover:text-white">
        {card.icon}
      </div>

      {/* Tag */}
      <p className="text-xs font-semibold tracking-wide text-[#f38120] mb-2">
        {card?.title?.toLocaleUpperCase()}
      </p>

      {/* Description */}
      <p className="text-sm text-slate-600 mb-6">{card.text}</p>
    </div>
  );
};

export default Component;
