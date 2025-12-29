"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUsPage() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-950 py-16 px-4">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 dark:from-gray-900 dark:to-gray-950" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Contact <span className="text-[#f38120]">InvestxIndia</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We’re here to assist you with investments, queries, and support.
            Reach out to us through any of the channels below.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Address */}
          <ContactCard
            icon={<MapPin className="w-7 h-7" />}
            title="Registered & Corporate Office"
            content={
              <>
                902, Gomes Garden, Kaul Heritage City,
                <br />
                Chulna Road, Vasai (West),
                <br />
                Thane – 401202,
                <br />
                Maharashtra, India
              </>
            }
          />

          {/* Email */}
          <ContactCard
            icon={<Mail className="w-7 h-7" />}
            title="Email"
            content={
              <a
                href="mailto:contact@investxindia.com"
                className="text-[#f38120] dark:text-[#f38120] hover:underline"
              >
                contact@investxindia.com
              </a>
            }
          />

          {/* Help Desk */}
          <ContactCard
            icon={<Phone className="w-7 h-7" />}
            title="Help Desk"
            content={
              <a
                href="tel:+919892440999"
                className="text-[#f38120] dark:text-[#f38120] hover:underline"
              >
                +91 98924 40999
              </a>
            }
          />
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-block rounded-full bg-[#f38120] px-6 py-3 text-white font-medium shadow-md">
            Trusted Financial Guidance • Professional Support • Transparent
            Advice
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Card Component ---------------- */

function ContactCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-orange-50 dark:bg-blue-900/30 text-[#f38120] dark:text-[#f38120] mb-5">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {content}
      </p>
    </motion.div>
  );
}
