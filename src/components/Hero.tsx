'use client'

import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Success", "Services", "Business"],
    loop: 10,
  });
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        <div>
          <Image
            src="https://keendigitalservices.com/wp-content/uploads/2021/01/smiling_girl.jpg"
            alt="logo"
            width={785}
            height={802}
            className=""
          />
        </div>
        <div className="flex justify-center items-center md:items-start md:justify-start flex-col gap-10 max-w-lg">
          <div className=" h-64 flex flex-col">
            <span
              className={`leading-tight  text-7xl font-extrabold bg-gradient-to-r from-[#FF4969] to-[#FC9D44] text-transparent bg-clip-text ${montserrat.className}`}
            >
              Digital
            </span>
            <span
              className={`leading-tight  text-7xl font-extrabold bg-gradient-to-r from-[#FF4969] to-[#FC9D44] text-transparent bg-clip-text ${montserrat.className}`}
            >
              Marketing
            </span>
            <span
              className={`leading-tight  text-7xl font-extrabold bg-gradient-to-r from-[#FF4969] to-[#FC9D44] text-transparent bg-clip-text ${montserrat.className}`}
            >
              {text}
            </span>
          </div>
          <p>
            Ensuring the best return on investment for your bespoke SEO campaign
            requirement.
          </p>
          <form className="flex flex-col lg:flex-row justify-center rounded-md shadow-2xl w-fit p-2">
            <input
              type="email"
              placeholder="https://www.yoursite.com"
              className="w-60 xl:w-80 p-5 border border-gray-300 rounded-md h-12 bg-[#f8f9fa]"
            />
            <button className="px-4 xl:px-6 py-4 hover:opacity-80 transition-opacity duration-300 text-white text-xs font-medium uppercase rounded-md bg-[#3b3663]">
              Analyze your site
            </button>
          </form>
          <div className="flex gap-5">
            <Image
              src="https://keendigitalservices.com/wp-content/uploads/2020/03/img_box_29_orange.png"
              alt="contact"
              width={60}
              height={60}
              className="w-[50px] h-[64px]"
            />
            <div className="text-[#3b3663] font-semibold flex flex-col gap-3">
              <span className="text-3xl">800-123-4567</span>
              <span className="text-xs">INFO@COMPANY.COM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-16 xl:px-28 flex justify-between items-center">
        <div className="">
          <Image
            src="https://keendigitalservices.com/wp-content/uploads/2019/07/1.png"
            alt="logo"
            width={150}
            height={54}
            className="cursor-pointer w-auto h-auto"
          />
        </div>
        <div className="">
          <Image
            src="https://keendigitalservices.com/wp-content/uploads/2019/07/2.png"
            alt="logo"
            width={150}
            height={56}
            className="cursor-pointer w-auto h-auto"
          />
        </div>
        <div className="">
          <Image
            src="https://keendigitalservices.com/wp-content/uploads/2019/07/3.png"
            alt="logo"
            width={130}
            height={30}
            className="cursor-pointer w-auto h-auto"
          />
        </div>
        <div className="">
          <Image
            src="https://keendigitalservices.com/wp-content/uploads/2019/07/4.png"
            alt="logo"
            width={150}
            height={58}
            className="cursor-pointer w-auto h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
