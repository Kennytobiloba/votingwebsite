"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"; // Import Image from Next.js
import imgone from "@/components/assests/imgtwo.jpg";
import imgtwo from "@/components/assests/imagone.jpg";
import imgthree from "@/components/assests/imgthree.jpg";
import imgfour from "@/components/assests/imgsix.jpg";
import imgfive from "@/components/assests/imgseven.jpg";

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  adaptiveHeight?: boolean;
  responsive?: Array<{ breakpoint: number; settings: { slidesToShow: number; slidesToScroll: number } }>;
}

const Group: React.FC = () => {
  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default to show 3 slides on large screens
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024, // lg screen size (e.g., 1024px and above)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // md screen size (e.g., 768px to 1023px)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // sm screen size (e.g., less than 768px)
        settings: {
        
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    { img: imgone },
    { img: imgtwo },
    { img: imgthree },
    { img: imgfour },
    { img: imgfive },
    { img: imgtwo },
    { img: imgone },
    { img: imgthree },
  ];

  return (
    <div className="slider-container overflow-hidden  mt-12">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item relative group">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={image.img}
                alt={`Image ${index + 1}`}
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 text-white transition-all duration-700 ease-in-out group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 w-full bg-[#a791ff] bg-opacity-40 text-center p-2 transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:translate-y-full">
                  <h3 className="text-[20px] font-bold">James Cameron</h3>
                  <h4 className="text-sm">Manager</h4>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-[#b378cb] inset-0 bg-opacity-30 h-full flex flex-col transition-all duration-700 transform text-center translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 p-4">
                  <h3 className="text-[20px] font-bold">James Cameron</h3>
                  <h4 className="text-sm">Manager</h4>
                  <p className="text-xs">
                    It was popularised in the 1960s with the release of Letraset sheets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Group;
