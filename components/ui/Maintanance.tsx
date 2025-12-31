"use client";
import React from "react";

export default function UnderMaintenance() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 px-6">
      <div className="relative max-w-2xl w-full text-center">
        {/* Glow Effect */}
        <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 rounded-full"></div>

        {/* Card */}
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Icon */}
          <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 animate-pulse">
            <span className="text-4xl">🚧</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We’re Under Maintenance
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto mb-8 leading-relaxed">
            Our website is currently undergoing scheduled maintenance. We’ll be
            back very soon with a better experience for you.
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden mb-8">
            <div className="h-full w-2/3 bg-gradient-to-r from-orange-400 to-pink-500 animate-[pulse_2s_ease-in-out_infinite]"></div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-full bg-white text-indigo-900 font-semibold hover:bg-gray-100 transition">
              Back to Home
            </button>
            {/* <button className="px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition">
              Notify Me
            </button> */}
          </div>

          {/* Footer */}
          <p className="mt-8 text-xs text-gray-400">
            © {new Date().getFullYear()} • All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
