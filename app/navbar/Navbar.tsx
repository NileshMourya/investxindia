"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const productMenu = [
  { name: "Mutual Funds", url: "/Products/MutualFunds" },
  { name: "Insurance", url: "/Products/Insurance" },
  { name: "PMS / AIF", url: "/Products/PMS" },
  { name: "SIF", url: "/Products/SIF" },
  { name: "Fixed Deposit", url: "/Products/FixedDeposite" },
  { name: "Loans", url: "/Products/Loans" },
  { name: "Property", url: "/Products/Property" },
];

const serviceMenu = [
  { name: "SIP SWP & STP", url: "/Services/SIP_SWP_STP" },
  { name: "Mutual Fund Basic", url: "/Services/MutualFundBasic" },
  {
    name: "Disclosures & How We Work",
    url: "/Services/Disclosures",
  },
];

const loginMenu = [
  {
    name: "Client Login",
    url: "https://investxindia.my-portfolio.co.in/app/#/login",
  },
  {
    name: "Partner Login",
    url: "https://investxindia.my-portfolio.co.in/app/#/login",
  },
  {
    name: "Employee Login",
    url: "https://investxindia.my-portfolio.co.in/app/#/login",
  },
];

const mainLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/About" },
  { name: "Contact us", url: "/Contact" },
];

const Insurance = [
  {
    name: "Buy Two-Wheeler Insurance ",
    link: "https://pbptwowheeler.policybazaar.com/v3/bike?token=o5aMAq6qZ1tLXTODNpDyVbk4MP6pWDnq6hhpN5u%2BmyKg1siSf8hHB6qSsu8tC%2FK1y9ycteCeMebuv2StqdmIKTYXEemjGB%2BWapImr%2FEh1%2B%2Bpr3hqzQ0IFe9LTt4%2B4xtt0QkKbpeZGriDpA5k0kpIkpekoN1moviPx7QLFNF06WH7uohUVc81QCaAFeJrXRfF%2FONmmEq62RPVGRshyqk9xg%3D%3D&_gl=1*6llmla*_ga*OTU5Njg4MTgxLjE3OTA0MjU2Mjk.*_ga_HJQ0E2N5FF*czE3OTA0MjU2MjkkbzEkZzEkdDE3OTA0MzI2ODMkajU2JGwwJGgw",
  },
  {
    name: "Buy Car Insurance",
    link: "https://pbpci.policybazaar.com/v3/car?token=o5aMAq6qZ1tLXTODNpDyVbk4MP6pWDnq6hhpN5u%2BmyKg1siSf8hHB6qSsu8tC%2FK1y9ycteCeMebuv2StqdmIKTYXEemjGB%2BWapImr%2FEh1%2B%2Bpr3hqzQ0IFe9LTt4%2B4xtt0QkKbpeZGriDpA5k0kpIkpekoN1moviPx7QLFNF06WH7uohUVc81QCaAFeJrXRfF%2FONmmEq62RPVGRshyqk9xg%3D%3D&_gl=1*3j9rji*_ga*OTU5Njg4MTgxLjE3OTA0MjU2Mjk.*_ga_HJQ0E2N5FF*czE3OTA0MjU2MjkkbzEkZzEkdDE3OTA0MzI2ODYkajUzJGwwJGgw",
  },
  {
    name: "Buy Health Insurance",
    link: "https://healthpbp.policybazaar.com/?token=o5aMAq6qZ1tLXTODNpDyVbk4MP6pWDnq6hhpN5u%2BmyKg1siSf8hHB6qSsu8tC%2FK1y9ycteCeMebuv2StqdmIKTYXEemjGB%2BWapImr%2FEh1%2B%2Bpr3hqzQ0IFe9LTt4%2B4xtt0QkKbpeZGriDpA5k0kpIkpekoN1moviPx7QLFNF06WH7uohUVc81QCaAFeJrXRfF%2FONmmEq62RPVGRshyqk9xg%3D%3D&_gl=1%2azk6qfg%2a_ga%2aOTU5Njg4MTgxLjE3OTA0MjU2Mjk.%2a_ga_HJQ0E2N5FF%2aczE3OTA0MjU2MjkkbzEkZzEkdDE3OTA0MzI5MDMkajYwJGwwJGgw&tabel=1",
  },
  {
    name: "Buy Travel Insurance",
    link: "https://travel.policybazaar.com/?utm_source=offlineaffiliate&utm_term=IP19647&utm_medium=IP19647&utm_campaign=IRM411917&_gl=1*zzm72y*_ga*OTU5Njg4MTgxLjE3OTA0MjU2Mjk.*_ga_HJQ0E2N5FF*czE3OTA0MjU2MjkkbzEkZzEkdDE3OTA0MzMwMDkkajYwJGwwJGgw",
  },
  {
    name: "Buy Commercial Vehicle Insurance",
    link: "https://cvpbp.policybazaar.com/?token=o5aMAq6qZ1tLXTODNpDyVbk4MP6pWDnq6hhpN5u%2BmyKg1siSf8hHB6qSsu8tC%2FK1y9ycteCeMebuv2StqdmIKTYXEemjGB%2BWapImr%2FEh1%2B%2Bpr3hqzQ0IFe9LTt4%2B4xtt0QkKbpeZGriDpA5k0kpIkpekoN1moviPx7QLFNF06WH7uohUVc81QCaAFeJrXRfF%2FONmmEq62RPVGRshyqk9xg%3D%3D&_gl=1*c676n8*_ga*OTU5Njg4MTgxLjE3OTA0MjU2Mjk.*_ga_HJQ0E2N5FF*czE3OTA0MjU2MjkkbzEkZzEkdDE3OTA0MzMwNjYkajMkbDAkaDA",
  },
  {
    name: "Buy Home Insurance",
    link: "https://homepbp.policybazaar.com/?token=o5aMAq6qZ1tLXTODNpDyVbk4MP6pWDnq6hhpN5u%2BmyKg1siSf8hHB6qSsu8tC%2FK1y9ycteCeMebuv2StqdmIKTYXEemjGB%2BWapImr%2FEh1%2B%2Bpr3hqzQ0IFe9LTt4%2B4xtt0QkKbpeZGriDpA5k0kpIkpekoN1moviPx7QLFNF06WH7uohUVc81QCaAFeJrXRfF%2FONmmEq62RPVGRshyqk9xg%3D%3D&_gl=1*1hm84fa*_ga*OTU5Njg4MTgxLjE3OTA0MjU2Mjk.*_ga_HJQ0E2N5FF*czE3OTA0MjU2MjkkbzEkZzEkdDE3OTA0MzMyNzMkajI1JGwwJGgw&step=1",
  },
];

const calMeanu = [
  { name: "SIP Calculator", link: "/Calculator/SIP" },
  { name: "Lumpsum Calculator", link: "/Calculator/Lumpsum" },
  { name: "SWP Calculator", link: "/Calculator/SWP" },
  { name: "RD Calculator", link: "/Calculator/RD" },
  { name: "NPS Calculator", link: "/Calculator/NPS" },
  { name: "FD Calculator", link: "/Calculator/FD" },
  { name: "PPF Calculator", link: "/Calculator/PPF" },
  { name: "EMI Calculator", link: "/Calculator/EMI" },
  { name: "Car Loan Calculator", link: "/Calculator/CarLoan" },
  { name: "Home Loan Calculator", link: "/Calculator/HomeLoan" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [insurance, setInsurance] = useState(false);

  const activeClass = (url: string) =>
    pathname === url
      ? "text-[#f38120] border-b-2 border-[#f38120]"
      : "text-gray-700";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={150} height={70} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {mainLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className={`text-sm font-medium hover:text-[#f38120] ${activeClass(
                link.url,
              )}`}
            >
              {link.name}
            </Link>
          ))}

          {/* Calculator Meanu */}

          <div className="relative group">
            <button className="text-sm text-gray-700 font-medium hover:text-[#f38120] cursor-pointer">
              Calculator
            </button>
            <div className="absolute -left-20 mt-2 w-60 bg-white rounded-md shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
              {calMeanu.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="block px-4 py-2 text-sm hover:bg-[#f38120] hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Services Meanu */}

          <div className="relative group">
            <button className="text-sm text-gray-700 font-medium hover:text-[#f38120] cursor-pointer">
              Services
            </button>
            <div className="absolute -left-20 mt-2 w-60 bg-white rounded-md shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
              {serviceMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className="block px-4 py-2 text-sm hover:bg-[#f38120] hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Product Dropdown */}
          <div className="relative group">
            <button className="text-sm text-gray-700 font-medium hover:text-[#f38120] cursor-pointer">
              Product
            </button>
            <div className="absolute -left-20 mt-2 w-60 bg-white rounded-md shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
              {productMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className="block px-4 py-2 text-sm hover:bg-[#f38120] hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button className="text-sm text-gray-700 font-medium hover:text-[#f38120] cursor-pointer">
              Insurance
            </button>
            <div className="absolute -left-20 mt-2 w-60 bg-white rounded-md shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
              {Insurance.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  target="blank"
                  className="block px-4 py-2 text-sm hover:bg-[#f38120] hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Login Dropdown */}
          <div className="relative group">
            <button className="text-sm py-2 px-4 shadow-lg cursor-pointer bg-[#0b2b7f] rounded-lg text-white font-medium hover:bg-[#f38120] hover:text-white">
              Login
            </button>
            <div className="absolute -left-20 mt-2 w-60 bg-white rounded-md shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
              {loginMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className="block px-4 py-2 text-sm hover:bg-[#f38120] hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-sm py-2 px-4 shadow-lg cursor-pointer bg-[#0b2b7f] rounded-lg text-white font-medium hover:bg-[#f38120] hover:text-white">
            <a href="https://forms.gle/TdK9FCF7BY2MKags9" target="blank">
              Sign up
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-white overflow-y-auto shadow px-4 py-3 space-y-3 z-50">
          {mainLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="block text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Calculator Meanu */}
          <div>
            <button
              onClick={() => setCalculatorOpen(!calculatorOpen)}
              className="w-full flex justify-between text-sm font-medium"
            >
              Calculator <span>{calculatorOpen ? "−" : "+"}</span>
            </button>
            {calculatorOpen && (
              <div className="mt-2 pl-4 space-y-2">
                {calMeanu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="block text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Services */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex justify-between text-sm font-medium"
            >
              Services <span>{servicesOpen ? "−" : "+"}</span>
            </button>
            {servicesOpen && (
              <div className="mt-2 pl-4 space-y-2">
                {serviceMenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.url}
                    className="block text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Product */}
          <div>
            <button
              onClick={() => setProductOpen(!productOpen)}
              className="w-full flex justify-between text-sm font-medium"
            >
              Product <span>{productOpen ? "−" : "+"}</span>
            </button>
            {productOpen && (
              <div className="mt-2 pl-4 space-y-2">
                {productMenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.url}
                    className="block text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setInsurance(!insurance)}
              className="w-full flex justify-between text-sm font-medium"
            >
              Product <span>{insurance ? "−" : "+"}</span>
            </button>
            {insurance && (
              <div className="mt-2 pl-4 space-y-2">
                {Insurance.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="block text-sm"
                    onClick={() => setMobileOpen(false)}
                    target="blank"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Login */}
          <div>
            <button
              onClick={() => setLoginOpen(!loginOpen)}
              className="w-full flex justify-between text-sm font-medium"
            >
              Login <span>{loginOpen ? "−" : "+"}</span>
            </button>
            {loginOpen && (
              <div className="mt-2 pl-4 space-y-2">
                {loginMenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.url}
                    className="block text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* mobile view Added */}
          <div
            onClick={() => setLoginOpen(!loginOpen)}
            className="w-full flex justify-between text-sm font-medium"
          >
            <a href="https://forms.gle/TdK9FCF7BY2MKags9" target="blank">
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
