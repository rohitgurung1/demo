import React from "react";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white bg-opacity-90 z-50">
      <div className="h-[100px] flex justify-between items-center px-4 md:px-8 xl:px-12">
        <Image
          src="https://keendigitalservices.com/wp-content/uploads/2019/08/logo_retinablack.png"
          alt="logo"
          width={149}
          height={48}
        />
        <div className="flex gap-5">
          <ul className="flex gap-5">
            <li className="text-[#FF4969] cursor-pointer">Home 10</li>
            <li className="text-[#3B3663] cursor-pointer">About</li>
          </ul>
          <button className="px-5 py-3 hover:opacity-80 transition-opacity duration-300 text-white text-xs font-medium uppercase rounded-md bg-gradient-to-r from-[#FF4969] to-[#FC9D44] relative bottom-[7px]">
            Get in Touch
          </button>
          <IoIosSearch className="text-3xl relative bottom-1 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
