"use client";

import React, { ReactNode } from "react";
import {
  ShieldCheck,
  Lock,
  FileText,
  Users,
  Globe,
  Cookie,
  Database,
  Scale,
  Mail,
  RefreshCw,
  UserCheck,
  Megaphone,
  Baby,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface SectionProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ icon: Icon, title, children }) => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl bg-orange-50 p-2 text-[#f38120]">
          <Icon size={22} />
        </div>

        <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
          {title}
        </h3>
      </div>

      <div className="space-y-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
        {children}
      </div>
    </div>
  );
};

const BulletList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-[#f38120]">
      {children}
    </ul>
  );
};

const SubHeading = ({ children }: { children: ReactNode }) => {
  return <h4 className="pt-1 font-semibold text-gray-800">{children}</h4>;
};

export default function PrivacyPolicy() {
  return (
    <section className="w-full bg-gray-50 px-4 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-sm font-medium text-[#f38120]">
            <ShieldCheck size={16} />
            Privacy & Data Protection
          </div>

          <h1 className="text-2xl font-bold text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            Investxindia Corporate Distribution Pvt. Ltd. (
            <span className="font-medium text-gray-800">
              {`"Investxindia", "we", "us" or "our"`}
            </span>
            ) respects the privacy of individuals who use our website, mobile
            application, digital platforms and services.
          </p>

          <p className="mx-auto mt-3 max-w-4xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            This Privacy Policy explains how we collect, use, store, disclose
            and protect personal information.
          </p>

          <p className="mx-auto mt-3 max-w-4xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            By using our Platform or submitting information to us, you
            acknowledge that you have read this Privacy Policy.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center gap-2 text-xs text-gray-500 sm:flex-row sm:gap-6 sm:text-sm">
            <span>
              <strong className="text-gray-700">Effective Date:</strong>{" "}
              14-November-2025
            </span>

            <span className="hidden sm:inline">•</span>

            <span>
              <strong className="text-gray-700">Last Updated:</strong>{" "}
              26-September-2026
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* 1. Information We May Collect */}
          <Section icon={FileText} title="1. Information We May Collect">
            <p>Depending on the services requested, we may collect:</p>

            <SubHeading>A. Identity Information</SubHeading>

            <BulletList>
              <li>Name</li>
              <li>Date of birth</li>
              <li>Gender, where required</li>
              <li>PAN</li>
              <li>KYC information</li>
              <li>Identification information</li>
              <li>Nationality/residential status, where applicable</li>
            </BulletList>

            <SubHeading>B. Contact Information</SubHeading>

            <BulletList>
              <li>Mobile number</li>
              <li>Email address</li>
              <li>Residential/business address</li>
              <li>Communication preferences</li>
            </BulletList>

            <SubHeading>C. Financial Information</SubHeading>

            <p>Depending on the product or service:</p>

            <BulletList>
              <li>Bank account details</li>
              <li>Investment information</li>
              <li>Transaction information</li>
              <li>Financial goals</li>
              <li>Income-related information</li>
              <li>Risk-related information</li>
              <li>Insurance-related information</li>
              <li>
                Other information required for processing a financial product or
                service
              </li>
            </BulletList>
          </Section>

          {/* 2. How We Collect Information */}
          <Section icon={Users} title="2. How We Collect Information">
            <p>Information may be collected when you:</p>

            <BulletList>
              <li>Register on our Platform;</li>
              <li>Submit an enquiry;</li>
              <li>Complete a financial-product application;</li>
              <li>Request a callback;</li>
              <li>Submit KYC information;</li>
              <li>Conduct or request a transaction;</li>
              <li>Contact our support team;</li>
              <li>Subscribe to communications;</li>
              <li>Use our website or mobile application; or</li>
              <li>Interact with our authorised service providers.</li>
            </BulletList>
          </Section>

          {/* 3. Purpose of Processing */}
          <Section icon={ShieldCheck} title="3. Purpose of Processing">
            <p>We may use information for purposes including:</p>

            <BulletList>
              <li>
                Providing requested financial-product distribution services;
              </li>
              <li>Processing transactions;</li>
              <li>Completing KYC and regulatory requirements;</li>
              <li>Communicating with users;</li>
              <li>Providing customer support;</li>
              <li>Maintaining records;</li>
              <li>Fraud prevention;</li>
              <li>Cybersecurity;</li>
              <li>Compliance with legal and regulatory obligations;</li>
              <li>Service improvement;</li>
              <li>Internal administration;</li>
              <li>Sending service-related communications; and</li>
              <li>
                Sending marketing communications where permitted and based on
                applicable consent/preferences.
              </li>
            </BulletList>
          </Section>

          {/* 4. Sharing of Information */}
          <Section icon={Globe} title="4. Sharing of Information">
            <p>
              We may share information where necessary with relevant parties
              such as:
            </p>

            <BulletList>
              <li>Asset Management Companies;</li>
              <li>Mutual fund registrars and transfer agents;</li>
              <li>Insurance companies;</li>
              <li>Banks;</li>
              <li>Financial institutions;</li>
              <li>Exchanges;</li>
              <li>KYC Registration Agencies;</li>
              <li>Payment service providers;</li>
              <li>Technology and infrastructure providers;</li>
              <li>Regulatory authorities;</li>
              <li>Government authorities;</li>
              <li>Auditors, legal advisers and professional advisers; and</li>
              <li>Other authorised service providers.</li>
            </BulletList>

            <p className="font-medium text-gray-800">
              Information will be shared only for legitimate, necessary or
              legally permitted purposes.
            </p>
          </Section>

          {/* 5. Regulatory and Statutory Disclosure */}
          <Section icon={Scale} title="5. Regulatory and Statutory Disclosure">
            <p>
              Investxindia may disclose or retain information where required by:
            </p>

            <BulletList>
              <li>Applicable law;</li>
              <li>Court orders;</li>
              <li>Government authorities;</li>
              <li>Regulatory authorities;</li>
              <li>Tax authorities;</li>
              <li>Financial-sector regulators; or</li>
              <li>Other legally authorised bodies.</li>
            </BulletList>
          </Section>

          {/* 6. Data Security */}
          <Section icon={Lock} title="6. Data Security">
            <p>
              Investxindia takes reasonable technical and organisational
              measures to protect personal information against unauthorised
              access, loss, misuse, alteration or disclosure.
            </p>

            <p>
              However, no electronic transmission or storage system can be
              guaranteed to be completely secure.
            </p>

            <p>
              Users should also take appropriate steps to protect their
              passwords, OTPs and login credentials.
            </p>
          </Section>

          {/* 7. Data Retention */}
          <Section icon={Database} title="7. Data Retention">
            <p>
              We may retain personal information for as long as necessary to:
            </p>

            <BulletList>
              <li>Provide the requested services;</li>
              <li>Complete transactions;</li>
              <li>Meet regulatory requirements;</li>
              <li>Meet accounting and tax requirements;</li>
              <li>Resolve disputes;</li>
              <li>Prevent fraud; or</li>
              <li>Comply with legal obligations.</li>
            </BulletList>

            <p>
              Retention periods may vary depending on the nature of the
              information and applicable legal/regulatory requirements.
            </p>
          </Section>

          {/* 8. Cookies */}
          <Section icon={Cookie} title="8. Cookies">
            <p>Our website may use cookies and similar technologies to:</p>

            <BulletList>
              <li>Maintain website functionality;</li>
              <li>Improve user experience;</li>
              <li>Understand website usage;</li>
              <li>Maintain security; and</li>
              <li>Support analytics and permitted marketing activities.</li>
            </BulletList>

            <p>
              Users may manage cookies through browser settings, although
              disabling certain cookies may affect website functionality.
            </p>
          </Section>

          {/* 9. Third-Party Websites */}
          <Section icon={Globe} title="9. Third-Party Websites">
            <p>Our Platform may contain links to third-party websites.</p>

            <p>
              This Privacy Policy does not govern the privacy practices of such
              external websites.
            </p>

            <p>
              Users should review the privacy policies of third-party platforms
              before providing information.
            </p>
          </Section>

          {/* 10. User Rights and Requests */}
          <Section icon={UserCheck} title="10. User Rights and Requests">
            <p>
              Subject to applicable law and regulatory requirements, individuals
              may request information relating to their personal data or
              exercise applicable rights provided under law.
            </p>

            <p>Requests may be submitted to:</p>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="flex flex-wrap items-center gap-2">
                <Mail size={17} className="text-[#f38120]" />
                <span className="font-medium text-gray-800">Email:</span>
                <span className="break-all">contact@investxindia.com</span>
              </p>
            </div>

            <p>
              Investxindia may require appropriate verification before
              processing a request.
            </p>
          </Section>

          {/* 11. Withdrawal of Consent */}
          <Section icon={RefreshCw} title="11. Withdrawal of Consent">
            <p>
              Where processing is based on consent and applicable law permits
              withdrawal, users may withdraw consent by contacting us.
            </p>

            <p>
              Withdrawal of consent may affect our ability to provide certain
              services where such information is necessary for the service or
              required by law.
            </p>
          </Section>

          {/* 12. Marketing Communications */}
          <Section icon={Megaphone} title="12. Marketing Communications">
            <p>
              Users may receive service-related communications necessary for
              transactions or account servicing.
            </p>

            <p>
              Where marketing communications are subject to consent or
              preference management, users may opt out using the applicable
              unsubscribe mechanism or by contacting us.
            </p>
          </Section>

          {/* 13. Children's Data */}
          <Section icon={Baby} title="13. Children's Data">
            <p>
              Our services are intended for adults and persons legally capable
              of entering into financial transactions.
            </p>

            <p>
              We do not knowingly seek to collect personal information from
              children except where legally permitted and appropriately
              authorised.
            </p>
          </Section>

          {/* 14. Changes to Privacy Policy */}
          <Section icon={RefreshCw} title="14. Changes to Privacy Policy">
            <p>We may update this Privacy Policy from time to time.</p>

            <p>
              The latest version will be published on the Platform with the
              applicable effective date.
            </p>
          </Section>

          {/* 15. Contact Us */}
          <Section icon={Mail} title="15. Contact Us">
            <p>For privacy-related questions or requests:</p>

            <div className="space-y-2 rounded-xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-800">
                Investxindia Corporate Distribution Pvt. Ltd.
              </p>

              <p className="flex flex-wrap gap-2">
                <span className="font-medium text-gray-800">Email:</span>
                <span className="break-all">contact@investxindia.com</span>
              </p>

              <p className="flex flex-wrap gap-2">
                <span className="font-medium text-gray-800">Website:</span>
                <span className="break-all">www.investxindia.com</span>
              </p>
            </div>
          </Section>
        </div>

        {/* Footer Note */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-orange-100 bg-orange-50 p-5 text-center text-xs leading-6 text-gray-600 sm:p-6 sm:text-sm">
          <p className="font-medium text-gray-800">Privacy & Data Protection</p>

          <p className="mt-2">
            This Privacy Policy describes how Investxindia Corporate
            Distribution Pvt. Ltd. collects, uses, stores, discloses and
            protects personal information in connection with its Platform and
            services.
          </p>
        </div>
      </div>
    </section>
  );
}
