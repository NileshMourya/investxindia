"use client";

import DirectorCard from "@/app/component/DirectorCard";
import type { Director } from "@/app/types/director";

const directors: Director[] = [
  {
    index: 1,
    name: "Ketki Pathak",
    role: "Vice President",
    company: "Investxindia Corporate Distribution Pvt. Ltd.",
    image: "/whatsapp.png",
    linkedin: "https://www.linkedin.com/in/ketki-pathak",
    description: [
      "Ketki Pathak is the Vice President at Investxindia Corporate Distribution Pvt. Ltd., bringing over 15 years of experience in the Indian financial services industry.",
      "Her professional journey includes 13+ years with HDFC Bank and 2 years with IndusInd Bank, working extensively with NRI and Foreign Investment clients.",
      "She has deep expertise across Mutual Funds, Insurance, PMS/AIF, Bonds, and Loan products.",
      "At Investxindia, she drives client-centric strategies focused on trust and long-term value creation.",
    ],
  },
  {
    index: 2,
    name: "Rahul Pandey",
    role: "Founder - MD",
    company: "Investxindia Corporate Distribution Pvt. Ltd.",
    image: "/whatsapp.png",
    linkedin: "https://www.linkedin.com/in/ketki-pathak",
    description: [
      "Founded under the leadership of Rahul Pandey, the organization is driven by 12+ years of experience across financial services, wealth management, fintech, and insurance.",
      "With a strong focus on building scalable B2B2C distributor networks, the company delivers transparent, compliant, and growth-oriented financial solutions.",
    ],
  },
  {
    index: 3,
    name: "Manali Rahul Pandey",
    role: "Co-Founder & CEO",
    company: "Investxindia Corporate Distribution Pvt. Ltd.",
    image: "/whatsapp.png",
    linkedin: "https://www.linkedin.com/in/ketki-pathak",
    description: [
      "Co-founded and led by Manali Pandey, the organization is backed by over 10+ years of expertise in financial governance and compliance.",
      "As Co-Founder & CEO, she ensures strong financial controls, regulatory compliance, and sustainable long-term growth.",
    ],
  },
];

export default function LeadershipSection() {
  return (
    <section className="relative py-16 px-4 sm:px-8 lg:px-20 bg-gray-50 dark:bg-black">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Meet Our Leadership
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Experienced leaders driving trust, transparency, and growth.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto space-y-10">
        {directors.map((director) => (
          <DirectorCard key={director.index} director={director} />
        ))}
      </div>
    </section>
  );
}
