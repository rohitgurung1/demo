import React from "react";
import Image from "next/image";
import { Nunito } from "next/font/google";
import { Rubik } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

const Section2 = () => {
  return (
    <div className={`${nunito.className} flex justify-center items-center gap-5`}>
      <Image
        src="/experience.png"
        alt="experience"
        width={600}
        height={600}
        className="w-[600px] h-[600px]"
      />
      <div className="max-w-lg flex flex-col gap-5 text-[#3b3663]">
        <span className="text-sm font-bold">EXPERIENCE</span>
        <span className="text-3xl font-extrabold">
          Pay for Qualified Traffic
        </span>
        <p className="font-semibold">
          Ewebot stays ahead of the curve with digital marketing trends. Our
          success has us leading the pack amongst our competitors with our
          ability to anticipate change and innovation.
        </p>
        <div className="font-bold flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p>SEO Analysis</p>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="bg-[#FC9D44] text-xs font-medium text-[#3b3663] text-center p-0.5 leading-none rounded-full"
                style={{ width: "90%" }}
              >
                <span className="text-white font-bold">90%</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p>SEO Audit</p>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="bg-[#FC9D44] text-xs font-medium text-[#3b3663] text-center p-0.5 leading-none rounded-full"
                style={{ width: "70%" }}
              >
                <span className="text-white font-bold">70%</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p>Optimization</p>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="bg-[#FC9D44] text-xs font-medium text-[#3b3663] text-center p-0.5 leading-none rounded-full"
                style={{ width: "95%" }}
              >
                <span className="text-white font-bold">95%</span>
              </div>
            </div>
          </div>
        </div>
        <button className={`text-center ${rubik.className} text-sm w-40 h-10 border border-[#6254e7] rounded-md hover:bg-[#6254e7] hover:text-white transition-colors duration-500`}>
          DISCOVER MORE
        </button>
      </div>
    </div>
  );
};

export default Section2;
