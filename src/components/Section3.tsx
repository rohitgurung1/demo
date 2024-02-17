import React from "react";
import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const Section3 = () => {
  return (
    <div
      className={`${nunito.className} px-4 md:px-16 xl:px-28 flex justify-center items-center gap-5`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="w-[270px] cursor-pointer bg-white rounded-lg shadow-custom p-10 flex flex-col gap-5 text-gray-800 hover:text-white hover:bg-[#3b3663] transition-colors duration-500">
          <span className="text-5xl font-bold bg-gradient-to-r from-[#FF4969] to-[#FC9D44] text-transparent bg-clip-text">320m</span>
          <h3 className="text-bold text-lg mb-2">
            Discover, Explore the product
          </h3>
        </div>
        <div className="w-[270px] cursor-pointer bg-white rounded-lg shaodow-2xl p-10 flex flex-col gap-5 text-gray-800 hover:text-white hover:bg-[#3b3663] transition-colors duration-500">
          <span className="text-5xl font-bold bg-gradient-to-r from-[#FF4969] to-[#FC9D44] text-transparent bg-clip-text">89%</span>
          <h3 className="text-bold text-lg mb-2">
            Art Direction & Brand Strategy
          </h3>
        </div>
        <div className="w-[270px] cursor-pointer bg-white rounded-lg shadow-custom p-10 flex flex-col gap-5 text-gray-800 hover:text-white hover:bg-[#3b3663] transition-colors duration-500">
          <span className="text-5xl font-bold bg-gradient-to-r from-[#FF4969] to-[#FC9D44] text-transparent bg-clip-text">1350</span>
          <h3 className="text-bold text-lg mb-2">
            Product UX, Design & Development
          </h3>
        </div>
        <div className="w-[270px] cursor-pointer bg-white rounded-lg shadow-xl p-10 flex flex-col gap-5 text-gray-800 hover:text-white hover:bg-[#3b3663] transition-colors duration-500">
          <span className="text-5xl font-bold bg-gradient-to-r from-[#FF4969] to-[#FC9D44] text-transparent bg-clip-text">94</span>
          <h3 className="text-bold text-lg mb-2">
            Marketing Strategy & SEO Campaigns
          </h3>
        </div>
      </div>
      
      <Image
        src="https://keendigitalservices.com/wp-content/uploads/2021/01/girl-with_phone.jpg"
        alt="experience"
        width={637}
        height={58}
        className=""
      />
    </div>
  );
};

export default Section3;
