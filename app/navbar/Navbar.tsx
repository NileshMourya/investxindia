"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const productMenu = [
  { name: "Mutual Funds", url: "/Products/MutualFunds" },
  { name: "Insurance", url: "/Products/Insurance" },
  { name: "PMS / AIF", url: "/Products/PMS" },
  { name: "SIF", url: "/Products/sif" },
  { name: "Fixed Deposit", url: "/Products/FixedDeposite" },
  { name: "Loans", url: "/Products/Loans" },
  { name: "Property", url: "/Products/Property" },
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
  { name: "Services", url: "/Services" },
  { name: "Calculator", url: "/calculator" },
  { name: "Learn", url: "/Learn" },
  { name: "Contact us", url: "/Contact" },
  { name: "Company", url: "/company" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

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
                link.url
              )}`}
            >
              {link.name}
            </Link>
          ))}

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

          {/* Login Dropdown */}
          <div className="relative group">
            <button className="text-sm text-gray-700 font-medium hover:text-[#f38120]">
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
        <div className="md:hidden bg-white shadow px-4 py-3 space-y-3">
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
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
