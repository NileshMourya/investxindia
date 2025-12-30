"use client";

import DirectorCard from "@/components/DirectorCard";
import type { Director } from "@/app/types/director";
import { ShieldCheck, TrendingUp, Briefcase, Target } from "lucide-react";

const directors: Director[] = [
  {
    index: 1,
    name: "Rahul Pandey",
    role: "Founder - MD",
    company: "Investxindia Corporate Distribution Pvt. Ltd.",
    image: "/rahual.jpeg",
    linkedin: "https://www.linkedin.com/in/rahulcnvmoney/",
    description: [
      "Founded under the leadership of Rahul Pandey, our organization is driven by deep industry expertise and a strong commitment to delivering reliable financial solutions. Rahul Pandey brings over 12+ years of experience in the financial services industry, with a proven track record of building, managing, and scaling businesses across multiple verticals.",
      "Over the course of his career, he has held key leadership positions including Manager at Prudent Corporate Advisory Services Limited, Business Head at CNVMONEY Fintech Pvt. Ltd., and CEO at CNVEST Insurance Brokers Pvt. Ltd. These roles have enabled him to develop extensive knowledge across wealth management, fintech, insurance distribution, and corporate advisory services.",
      "Our core strength lies in handling and expanding B2B2C distributor networks for financial product distribution. We specialize in building robust partner ecosystems that connect distributors, advisors, and end customers efficiently, ensuring transparent processes, compliance-driven operations, and sustainable growth.",
      "With a client-centric approach and a strong focus on long-term value creation, we aim to empower distributors and partners with the right products, technology, and support to succeed in a competitive financial landscape.",
    ],
  },
  {
    index: 2,
    name: "Manali Rahul Pandey",
    role: "Co-Founder & CEO",
    company: "Investxindia Corporate Distribution Pvt. Ltd.",
    image: "/manaali.jpeg",
    linkedin: "https://www.linkedin.com/in/manalipandey/",
    description: [
      "Co-founded and led by Manali Pandey, our organization is backed by strong financial governance and compliance expertise. Manali Pandey brings over 10+ years of experience in the financial industry, with a solid academic foundation as Inter CA, Inter CS, and M.Com.",
      "Her professional experience spans statutory audits, taxation, and financial compliance, having worked with reputed organizations such as GS Caltex Corporation, Champion Rolling Mill Private Limited, NABARD (National Bank for Agriculture and Rural Development), Reliance MediaWorks Ltd., Mata Amritanandamayi Math Trust, and Athena Pharmaceuticals.",
      "As Co-Founder & CEO, she ensures robust financial controls, regulatory compliance, and transparent reporting, supporting sustainable growth and long-term value creation for the organization and its stakeholders.",
    ],
  },

  {
    index: 3,
    name: "Ketki Pathak",
    role: "Vice President",
    company: "Investxindia Corporate Distribution Pvt. Ltd.",
    image: "/ketki.jpeg",
    linkedin: "https://www.linkedin.com/in/ketki-pathak-a3a3a065/",
    description: [
      "Ketki Pathak is the Vice President at Investxindia Corporate Distribution Pvt. Ltd., bringing over 15 years of experience in the Indian financial services industry.",
      "Her professional journey includes 13+ years with HDFC Bank and 2 years with IndusInd Bank, working extensively with NRI and Foreign Investment clients.",
      "She has deep expertise across Mutual Funds, Insurance, PMS/AIF, Bonds, and Loan products.",
      "At Investxindia, she drives client-centric strategies focused on trust and long-term value creation.",
    ],
  },
];

const expertise = [
  {
    icon: TrendingUp,
    title: "Investment Distribution & Advisory",
  },
  {
    icon: ShieldCheck,
    title: "Life Insurance Solutions",
  },
  {
    icon: Briefcase,
    title: "Wealth Management Strategies",
  },
  {
    icon: Target,
    title: "Financial Planning & Risk Management",
  },
];

export default function LeadershipSection() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block text-sm font-semibold tracking-wide text-[#f38120] uppercase">
              About Investxindia
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b7f] leading-tight">
              Structured Financial Solutions for Long-Term Wealth & Protection
            </h2>

            <div className="h-1 w-20 bg-[#f38120] rounded-full" />

            <p className="text-slate-600 leading-relaxed">
              Investxindia Corporate Distribution Pvt. Ltd. is a professionally
              managed financial distribution company delivering comprehensive
              investment and life insurance solutions. Backed by a leadership
              team with over{" "}
              <span className="font-semibold text-slate-800">
                15+ years of collective experience
              </span>
              , we bring deep industry expertise, disciplined processes, and
              governance-driven advisory.
            </p>

            <p className="text-slate-600 leading-relaxed">
              We partner with individuals, families, and businesses to design
              structured financial strategies aligned with client objectives,
              risk appetite, and lifecycle needs—ensuring prudent, transparent,
              and sustainable outcomes.
            </p>
          </div>

          {/* Right Card */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <h3 className="text-xl font-semibold text-[#f38120] mb-6">
              Our Expertise
            </h3>

            <div className="grid sm:grid-cols-2 gap-5">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-orange-50 text-[#f38120]">
                      <Icon size={20} />
                    </div>
                    <p className="text-sm font-medium text-[#0b2b7f]">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Vision & Mission */}
            <div className="mt-8 space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900">Our Vision</h4>
                <p className="text-sm text-slate-600 mt-1">
                  To be a trusted financial distribution organization in India,
                  enabling investors to maximize wealth creation and achieve
                  financial security through integrity and professionalism.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">Our Mission</h4>
                <p className="text-sm text-slate-600 mt-1">
                  To deliver goal-oriented investment and insurance solutions
                  while maintaining transparency, ethics, and long-term
                  partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}
