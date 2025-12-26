"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Director } from "@/app/types/director";

interface DirectorCardProps {
  director: Director;
}

export default function DirectorCard({ director }: DirectorCardProps) {
  return (
    <motion.div
      key={director.index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: director.index * 0.1 }}
      className={`flex flex-col lg:flex-row gap-8 items-start rounded-2xl
  bg-white dark:bg-gray-900 p-6 shadow-md dark:shadow-gray-800
  ${director.index % 2 === 0 ? "lg:flex-row-reverse" : ""}
`}
    >
      {/* Image */}
      <div
        className={`flex justify-center
    ${director.index % 2 === 0 ? "lg:col-start-3" : "lg:col-start-1"}`}
      >
        <div className="rounded-xl overflow-hidden border dark:border-gray-700">
          <Image
            src={director.image}
            alt={director.name}
            width={220}
            height={280}
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`lg:col-span-2 space-y-4
    ${director.index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"}`}
      >
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {director.name}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">
            {director.role}
          </p>
          <p className="text-gray-500 dark:text-gray-400">{director.company}</p>

          {/* LinkedIn */}
          <a
            href={director.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>

        {/* Description */}
        <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          {director.description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
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
