import React from "react";
import Image from "next/image";
import { Nunito } from "next/font/google";
import { Rubik } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

const Section1 = () => {
  return (
    <div
      className={`${nunito.className} px-4 md:px-24 xl:px-40 flex justify-center gap-10 items-center bg-[url('https://keendigitalservices.com/wp-content/uploads/2021/01/map-new.png')]`}
    >
      <div className="flex flex-col gap-5 text-[#3b3663]">
        <span className="font-medium ">WHY CHOOSE US</span>
        <span className="text-3xl font-bold">Boosts Your Website Traffic!</span>
        <p className={`max-w-lg ${rubik.className}`}>
          We are passionate about our work. Our designers stay ahead of the
          curve to provide engaging and user-friendly website designs to make
          your business stand out. Our developers are committed to maintaining
          the highest web standards so that your site will withstand the test of
          time. We care about your business, which is why we work with you.
        </p>
        <button className={`text-center text-sm ${rubik.className} w-40 h-10 border border-[#6254e7] rounded-md hover:bg-[#6254e7] hover:text-white transition-colors duration-500`}>
          DISCOVER MORE
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-[270px] cursor-pointer bg-white rounded-lg shadow-custom p-10 flex flex-col gap-5 text-gray-800 hover:text-white hover:bg-[#3b3663] transition-colors duration-500">
          <Image
            src="https://keendigitalservices.com/wp-content/uploads/2021/01/circle_orange.png"
            alt="logo"
            width={90}
            height={90}
            className=""
          />
          <h3 className="text-xl font-extrabold mb-2">Discover, Explore the product</h3>
        </div>
        <div className="w-[270px] cursor-pointer bg-white rounded-lg shadow-custom p-10 flex flex-col gap-5 text-gray-800 hover:text-white hover:bg-[#3b3663] transition-colors duration-500">
          <Image
            src="https://keendigitalservices.com/wp-content/uploads/2021/01/circle_blue.png"
            alt="logo"
            width={90}
            height={90}
            className=""
          />
          <h3 className="text-xl font-extrabold mb-2">Art Direction & Brand Strategy</h3>
        </div>
        <div className="w-[270px] cursor-pointer bg-white rounded-lg shadow-custom p-10 flex flex-col gap-5 text-gray-800 hover:text-white hover:bg-[#3b3663] transition-colors duration-500">
          <Image
            src="https://keendigitalservices.com/wp-content/uploads/2021/01/circle_green.png"
            alt="logo"
            width={90}
            height={90}
            className=""
          />
          <h3 className="text-xl font-extrabold mb-2">
            Product UX, Design & Development
          </h3>
        </div>
        <div className="w-[270px] cursor-pointer bg-white rounded-lg shadow-custom p-10 flex flex-col gap-5 text-gray-800 hover:text-white hover:bg-[#3b3663] transition-colors duration-500">
          <Image
            src="https://keendigitalservices.com/wp-content/uploads/2021/01/circle_purple.png"
            alt="logo"
            width={90}
            height={90}
            className=""
          />
          <h3 className="text-xl font-extrabold mb-2">
            Marketing Strategy & SEO Campaigns
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Section1;
