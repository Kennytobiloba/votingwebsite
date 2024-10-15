"use client";
import Image from "next/image";
import React from "react";
import Heroone from "@/components/assests/Herotwo.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean; // Enable autoplay
  autoplaySpeed: number; // Set speed for how long each slide should be displayed
  adaptiveHeight?: boolean; // Added optional adaptiveHeight property
}

const HomePage = () => {
  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the speed (in milliseconds) for how long each slide should be displayed
    adaptiveHeight: true, // Adjust the slider height based on the current slide
  };

  return (
    <div
      style={{ position: "relative", width: "100%" }}
      className=" md:h-[90vh] h-[50vh] "
    >
      <Image
        src={Heroone}
        layout="fill"
        style={{ objectFit: "cover" }}
        alt=""
      />
      {/* Positioning the slider at the bottom */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex items-center justify-center">
        <div className="slider-container w-[80%] text-center h-auto lg:p-2 min:h-[40vh] mx-auto bg-neutral-100">
          <Slider {...settings}>
            <div>
              <h3 className="lg:text-[28px]  md:text-[18px] text-[12px] px-4 py-4
               md:leading-[30px] md:tracking-widest">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
            </div>
            <div>
              <h3 className="lg:text-[28px]  md:text-[18px] text-[12px] 
               text-red-400 px-4 py-4 md:leading-[30px] md:tracking-widest">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
            </div>
            <div>
              <h3 className="lg:text-[28px]   md:text-[18px] text-[12px]  
               text-blue-500 px-4 py-4 md:leading-[30px] md:tracking-widest">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
