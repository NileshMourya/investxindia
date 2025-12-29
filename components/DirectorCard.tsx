"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Director } from "@/app/types/director";

interface DirectorCardProps {
  director: Director;
}

export default function DirectorCard({ director }: DirectorCardProps) {
  const isReverse = director.index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: director.index * 0.1 }}
      className="relative"
    >
      {/* Accent Strip */}
      <div
        className={`absolute top-0 ${
          isReverse ? "right-0" : "left-0"
        } h-full w-1 rounded-full bg-gradient-to-b from-blue-600 via-indigo-500 to-purple-500`}
      />

      <div
        className={`group flex flex-col ${
          isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-10 items-center rounded-2xl bg-white dark:bg-gray-900 
        p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
      >
        {/* Image */}
        <div className="group flex flex-col items-center text-center gap-5">
          {/* Image Wrapper */}
          <div className="relative w-60 h-72">
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-xl bg-blue-500/20 blur-xl scale-95 
                    group-hover:scale-100 transition-transform"
            />

            {/* Image Container */}
            <div
              className="relative w-full h-full rounded-xl overflow-hidden 
                    border border-gray-200 dark:border-gray-700 bg-white"
            >
              <Image
                src={director.image}
                alt={director.name}
                fill
                className="object-cover"
                sizes="240px"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {director.name}
            </h3>

            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              {director.role}
            </p>

            <p className="text-gray-500 dark:text-gray-400">
              {director.company}
            </p>

            {/* LinkedIn */}
            <a
              href={director.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-sm font-medium 
                 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <LinkedInIcon />
              View LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-5 text-center lg:text-left">
          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

          {/* Description */}
          <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            {director.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM.2 8h4.6v16H.2V8zm7.3 0h4.4v2.2h.1c.6-1.1 2.1-2.3 4.4-2.3 4.7 0 5.6 3.1 5.6 7.1V24h-4.6v-6.9c0-1.6 0-3.7-2.3-3.7s-2.6 1.8-2.6 3.6V24H7.5V8z" />
    </svg>
  );
}
