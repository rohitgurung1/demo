"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="p-5 group cursor-pointer">
          <Image
            src="https://keendigitalservices.com/wp-content/uploads/2019/06/portfolio_img_01_new-1200x870.jpg"
            alt="experience"
            width={1200}
            height={870}
            className="rounded-xl brightness-75"
          />
          <div className="flex flex-col text-white font-medium relative bottom-20 left-10 transition-all duration-300 transform translate-y-0 opacity-100 group-hover:bottom-24">
            <span className="text-xs shadow-2xl">Marketing</span>
            <span className="text-lg shadow-2xl">Online Media Management</span>
          </div>
        </div>

        <div className="p-5 group cursor-pointer">
          <Image
            src="https://keendigitalservices.com/wp-content/uploads/2020/06/flowy-dark-haired-woman-1200x870.jpg"
            alt="experience"
            width={1200}
            height={870}
            className="rounded-xl brightness-75"
          />
          <div className="flex flex-col text-white font-medium relative bottom-20 left-10 transition-all duration-300 transform translate-y-0 opacity-100 group-hover:bottom-24">
            <span className="text-xs shadow-2xl">Marketing</span>
            <span className="text-lg shadow-2xl">Online Media Management</span>
          </div>
        </div>
        <div className="p-5 group cursor-pointer">
          <Image
            src="https://keendigitalservices.com/wp-content/uploads/2020/03/portfolio_img_04-1200x870.jpg"
            alt="experience"
            width={1200}
            height={870}
            className="rounded-xl brightness-75"
          />
          <div className="flex flex-col text-white font-medium relative bottom-20 left-10 transition-all duration-300 transform translate-y-0 opacity-100 group-hover:bottom-24">
            <span className="text-xs shadow-2xl">SEO</span>
            <span className="text-lg shadow-2xl">Mannix Marketing</span>
          </div>
        </div>
        <div className="p-5 group cursor-pointer">
          <Image
            src="https://keendigitalservices.com/wp-content/uploads/2020/03/portfolio_img_02-1200x870.jpg"
            alt="experience"
            width={1200}
            height={870}
            className="rounded-xl brightness-75"
          />
          <div className="flex flex-col text-white font-medium relative bottom-20 left-10 transition-all duration-300 transform translate-y-0 opacity-100 group-hover:bottom-24">
            <span className="text-xs shadow-2xl">SEO</span>
            <span className="text-lg shadow-2xl">Mannix Marketing</span>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;
