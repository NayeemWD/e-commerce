import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  const categories = [
    "Dairy & Milk",
    "Snack & Spice",
    "Fast Food",
    "Juice & Drinks",
    "Bakery",
    "Seafood",
  ];
  const company = [
    "About us",
    "Delivery",
    "Legal Notice",
    "Terms & Conditions",
    "Secure Payment",
    "Contact us",
  ];

  return (
    <footer className="bg-white border-t border-gray-200  mt-12">
      {/* Top Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 text-center sm:text-left text-gray-700">
        {/* Logo & Description */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-md bg-green-600 flex items-center justify-center text-white font-bold text-lg">
              M S
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Nayeem </h2>
          </div>
          <p className="text-sm mb-4">
            Nayeem is the biggest market of grocery products.
            <br />
            Get your daily needs from our store.
          </p>

          {/* App Store Buttons (text version, no image) */}
          <div className="flex gap-3 justify-center sm:justify-start">
            <button className="flex items-center gap-2 px-3 py-2 border rounded-md text-sm hover:shadow transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h18v18H3z" />
              </svg>
              <span className="font-medium">Google Play</span>
            </button>

            <button className="flex items-center gap-2 px-3 py-2 border rounded-md text-sm hover:shadow transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="font-medium">App Store</span>
            </button>
          </div>
        </div>

        {/* Category */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Category</h3>
          <ul className="space-y-2 text-sm">
            {categories.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            {company.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start justify-center sm:justify-start gap-2">
              <HiOutlineLocationMarker className="text-green-600 w-5 h-5 mt-0.5" />
              <span>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <AiOutlinePhone className="text-green-600 w-5 h-5" />
              <span>+00 9876543210</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <AiOutlineMail className="text-green-600 w-5 h-5" />
              <span>example@email.com</span>
            </li>
          </ul>

          <div className="flex gap-3 mt-4 justify-center sm:justify-start text-gray-600 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-green-600" />
            <FaTwitter className="cursor-pointer hover:text-green-600" />
            <FaLinkedinIn className="cursor-pointer hover:text-green-600" />
            <FaInstagram className="cursor-pointer hover:text-green-600" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200  py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p className="text-center sm:text-left">
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-green-600 font-semibold">Nayeem </span> all
            rights reserved. Powered by{" "}
            <span className="text-green-600 font-semibold">Nayeem </span>.
          </p>

          <div className="flex items-center gap-3 text-2xl text-gray-600">
            <FaCcVisa className="hover:text-green-600" />
            <FaCcMastercard className="hover:text-green-600" />
            <FaCcPaypal className="hover:text-green-600" />
            <FaCcAmex className="hover:text-green-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
