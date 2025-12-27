"use client";
import React from "react";
import {
  ShieldCheck,
  Lock,
  FileText,
  Users,
  Globe,
  Cookie,
} from "lucide-react";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface SectionProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ icon: Icon, title, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-xl bg-orange-50 text-[#f38120]">
          <Icon size={22} />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
          {title}
        </h3>
      </div>
      <div className="text-sm sm:text-base text-gray-600 space-y-3">
        {children}
      </div>
    </div>
  );
};

export default function PrivacyPolicy() {
  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-[#f38120] text-sm font-medium mb-4">
            <ShieldCheck size={16} />
            Privacy & Data Protection
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            This Privacy Policy explains how{" "}
            <span className="font-medium text-gray-800">
              Investxindia Corporate Distribution Pvt. Ltd.
            </span>{" "}
            collects, uses, and protects your personal information in compliance
            with applicable laws and regulations.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-gray-500">
            Last Updated: 2025 · AMFI Registered Mutual Fund Distributor
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <Section icon={FileText} title="Information We Collect">
            <ul className="list-disc pl-5 space-y-1">
              <li>Personal details (name, DOB, contact information)</li>
              <li>KYC documents (PAN, Aadhaar, bank details)</li>
              <li>Financial goals, risk profile & investment preferences</li>
              <li>Technical data such as IP address & browser information</li>
            </ul>
          </Section>

          <Section icon={Users} title="How We Use Your Information">
            <ul className="list-disc pl-5 space-y-1">
              <li>Deliver financial & investment services</li>
              <li>Meet regulatory and compliance obligations</li>
              <li>Process transactions and customer requests</li>
              <li>Improve website experience and service quality</li>
            </ul>
          </Section>

          <Section icon={Globe} title="Information Sharing">
            <ul className="list-disc pl-5 space-y-1">
              <li>AMCs, RTAs, and insurance partners</li>
              <li>Regulatory authorities (SEBI, AMFI, IRDAI)</li>
              <li>Trusted technology service providers</li>
            </ul>
            <p className="font-medium text-gray-700 mt-2">
              We do not sell your personal data.
            </p>
          </Section>

          <Section icon={Lock} title="Data Security & Retention">
            <ul className="list-disc pl-5 space-y-1">
              <li>Encrypted data storage and secure access controls</li>
              <li>Regular security audits & staff training</li>
              <li>Data retained as required by law and regulators</li>
            </ul>
          </Section>

          <Section icon={Cookie} title="Cookies & Tracking">
            <p>
              We use essential, analytics, and preference cookies to enhance
              website performance and user experience. You can manage cookies
              through your browser settings.
            </p>
          </Section>

          <Section icon={ShieldCheck} title="Your Rights">
            <ul className="list-disc pl-5 space-y-1">
              <li>Access, correction, or deletion of your data</li>
              <li>Withdraw consent where applicable</li>
              <li>Object to certain processing activities</li>
            </ul>

            <div className="mt-4 text-sm">
              <p>
                📧 <span className="font-medium">contact@investxindia.com</span>
              </p>
              <p>
                📞 <span className="font-medium">+91 9892 440 999</span>
              </p>
            </div>
          </Section>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center text-xs sm:text-sm text-gray-500 max-w-4xl mx-auto">
          Our services are not intended for individuals under 18 years of age.
          We may update this Privacy Policy periodically. Continued use of our
          services indicates acceptance of the updated policy.
        </div>
      </div>
    </section>
  );
}
