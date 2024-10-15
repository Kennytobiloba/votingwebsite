import Image from "next/image";
import React from "react";
import img from "@/components/assests/imgseven.jpg";
import imgtwo from "@/components/assests/imagone.jpg";
import TabNav from "./TabNav";

const ElectionInfo = () => {
  return (
    <div className="mt-14  grid lg:grid-cols-2 gap-8 grid-cols-1">
      <div>
        <div>
          <h1
            className="relative lg:text-[28px] md:text-[24px] 
           text-[20px] text-[#c05fe6] before:content-[''] font-bold before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[6px] before:bg-red-500 pl-4"
          >
            Welcome To Election!
          </h1>
          <p className="text-gray-500 md:text-[16px] text-[16px] pl-6 mt-2">
            Vote For Real Government.
          </p>
        </div>

        <div className=" flex flex-col  gap-20 mt-14">
          <div className="flex md:gap-4 gap-4">
            <div>
              <h2 className="text-[20px]  text-black  mb-2">
                nihil molestiae consequatur, vel illum
              </h2>
              <p className=" text-[12px] leading-[22px]">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                fugiat quo voluptas nulla pariatur.
              </p>
            </div>
            <div className="content-start">
              <Image src={imgtwo} width={500} height={200} alt="img" />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <h2 className="text-[20px] text-black  mb-2">
                nihil molestiae consequatur, vel illum
              </h2>
              <p className=" text-[12px] leading-[22px]">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                fugiat quo voluptas nulla pariatur.
              </p>
            </div>
            <div className="content-start">
              <Image src={img} width={500} height={200} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <TabNav />
      </div>
    </div>
  );
};

export default ElectionInfo;
