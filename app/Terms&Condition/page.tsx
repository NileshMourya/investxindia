"use client";
import React from "react";
import {
  FileText,
  ShieldCheck,
  AlertTriangle,
  Users,
  Scale,
  RefreshCw,
} from "lucide-react";

interface SectionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ icon: Icon, title, children }) => (
  <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm hover:shadow-md transition">
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

export default function TermsAndConditions() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-[#f38120] text-sm font-medium mb-4">
            <FileText size={16} />
            Legal Information
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Terms & Conditions
          </h1>

          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            These Terms and Conditions govern the use of the website and
            services of{" "}
            <span className="font-medium">
              Investxindia Corporate Distribution Pvt. Ltd.
            </span>
          </p>

          <p className="mt-2 text-xs sm:text-sm text-gray-500">
            Last Updated: 2025 · AMFI Registered Mutual Fund Distributor
          </p>
        </div>

        {/* Sections */}
        <div className="grid gap-6 md:grid-cols-2">
          <Section icon={ShieldCheck} title="About Investxindia">
            <p>
              Investxindia Corporate Distribution Pvt. Ltd. (ARN-346230) is an
              AMFI-registered Mutual Fund Distributor operating in India.
            </p>
            <p>
              We provide mutual fund distribution, insurance consulting, and
              general investment guidance. We are not a SEBI-registered
              Investment Adviser and do not provide stock tips or guaranteed
              return schemes.
            </p>
          </Section>

          <Section icon={Users} title="Acceptance & Use of Website">
            <ul className="list-disc pl-5 space-y-1">
              <li>Use the website only for lawful purposes</li>
              <li>No unauthorized access or system interference</li>
              <li>No malware, scraping, or impersonation</li>
              <li>No disruption of website security or operations</li>
            </ul>
          </Section>

          <Section icon={FileText} title="Educational Content">
            <ul className="list-disc pl-5 space-y-1">
              <li>Content is for educational purposes only</li>
              <li>Not personalized investment advice</li>
              <li>No guarantee of returns or outcomes</li>
              <li>Decisions should follow one-to-one consultation</li>
            </ul>
          </Section>

          <Section icon={AlertTriangle} title="Investment Risks & Disclaimers">
            <ul className="list-disc pl-5 space-y-1">
              <li>Mutual funds are subject to market risks</li>
              <li>Past performance does not guarantee future results</li>
              <li>Insurance products follow insurer terms</li>
              <li>No assured or guaranteed returns</li>
            </ul>
          </Section>

          <Section icon={Users} title="Client Responsibilities">
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide accurate KYC information</li>
              <li>Review scheme and policy documents</li>
              <li>Maintain credential security</li>
              <li>Make decisions based on own judgment</li>
            </ul>
          </Section>

          <Section icon={Scale} title="Liability & Indemnification">
            <p>
              We are not liable for market losses, technical failures, or
              decisions made based on website information.
            </p>
            <p>
              You agree to indemnify Investxindia against claims arising from
              misuse of services or violation of these terms.
            </p>
          </Section>

          <Section icon={Scale} title="Governing Law">
            <p>
              These terms are governed by the laws of India. All disputes shall
              be subject to the exclusive jurisdiction of Indian courts.
            </p>
          </Section>

          <Section icon={RefreshCw} title="Changes to Terms">
            <p>
              We may update these Terms & Conditions at any time. Continued use
              of our services constitutes acceptance of the revised terms.
            </p>
          </Section>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-xs sm:text-sm text-gray-500 max-w-4xl mx-auto">
          If you do not agree with these Terms & Conditions, please discontinue
          use of our website and services.
        </div>
      </div>
    </section>
  );
}
