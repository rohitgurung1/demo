import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-white text-gray-700 px-4 md:px-8 xl:px-12">
      <div className="">
        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-5">
            <Image
              src="https://keendigitalservices.com/wp-content/uploads/2019/12/img_box_29_violet.png"
              alt="logo"
              width={40}
              height={50}
              className="h-12"
            />
            <div>
              <p className="mt-2">8 800 2534 236</p>
              <p>email@yoursite.com</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <Image
              src="https://keendigitalservices.com/wp-content/uploads/2019/12/img_box_30_violet.png"
              alt="logo"
              width={50}
              height={48}
            />
            <div>
              <p className="mt-2 max-w-[220px]">
                27 Division St, New YorkNY 10002, United States
              </p>
            </div>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-80  px-5 border border-gray-300 rounded-md bg-[#f8f9fa]"
            />
            <button className="px-10 hover:opacity-80 transition-opacity duration-300 text-white text-xs font-medium uppercase rounded-md bg-[#6254e7]">
              sign up
            </button>
          </div>
        </div>
        <hr className="my-8" />
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-lg mb-3">About</h3>
            <p className="max-w-sm">
              We focus on the needs of small to middle market businesses to
              improve and grow their return.
            </p>
            <div className="flex mt-4 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-400 h-6 w-6"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600 h-6 w-6"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-600 h-6 w-6"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-700 h-6 w-6"
              >
                <line x1={12} x2={12} y1={17} y2={22} />
                <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-700 h-6 w-6"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width={4} height={12} x={2} y={9} />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Services</h3>
            <ul>
              <li>SEO Marketing</li>
              <li>SEO Services</li>
              <li>Pay Per Click</li>
              <li>Social Media</li>
              <li>SEO Audit</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Community</h3>
            <ul>
              <li>Our Product</li>
              <li>Documentation</li>
              <li>Our Services</li>
              <li>Company</li>
              <li>What We Do?</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Main Services</li>
              <li>Pricing</li>
              <li>Our Cases</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-8 text-sm">
          © 2022 — Ewebot by GT3Themes. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
