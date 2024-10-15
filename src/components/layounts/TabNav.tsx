"use client";
import Image from "next/image";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Keep default styles as a fallback
import imgone from "@/components/assests/imgtwo.jpg";
import imgtwo from "@/components/assests/imgthree.jpg";
import imgthre from "@/components/assests/imgseven.jpg";
import imgfive from "@/components/assests/imgseven.jpg";

const TabNav = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Tabs>
        {/* TabList Styles */}
        <TabList className="flex p-0 m-0 justify-between border-b-2 border-gray-300">
          <Tab
            className="w-full text-black text-center py-4 cursor-pointer transition-all 
            duration-300 ease-in-out bg-gray-100 hover:bg-gray-200 focus:outline-none 
            text-base md:text-lg"
            selectedClassName="bg-red-500 text-white font-bold" // Active tab style
          >
            2014 Nominees
          </Tab>
          <Tab
            className="w-full text-black text-center py-4 cursor-pointer transition-all 
            duration-300 ease-in-out bg-gray-100 hover:bg-gray-200 focus:outline-none 
            text-base md:text-lg"
            selectedClassName="bg-red-500 text-white font-bold" // Active tab style
          >
            2015 Nominees
          </Tab>
        </TabList>

        {/* TabPanel for 2014 Nominees */}
        <TabPanel className="bg-[#c05fe6] text-white px-6 py-2">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-start">
              <Image
                src={imgone}
                width={150}
                height={150}
                alt="2014 nominee image"
              />
              <div>
                <h4 className="font-semibold text-lg md:text-xl">
                  Excepturi Sint Occaecati
                </h4>
                <h4 className="text-sm md:text-base mb-2">October 23, 2015</h4>
                <p className="text-sm md:text-base">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Image
                src={imgtwo}
                width={150}
                height={150}
                alt="2014 nominee image"
              />
              <div>
                <h4 className="font-semibold text-lg md:text-xl">
                  Excepturi Sint Occaecati
                </h4>
                <h4 className="text-sm md:text-base mb-2">October 23, 2015</h4>
                <p className="text-sm md:text-base">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Image
                src={imgfive}
                width={150}
                height={150}
                alt="2014 nominee image"
              />
              <div>
                <h4 className="font-semibold text-lg md:text-xl">
                  Excepturi Sint Occaecati
                </h4>
                <h4 className="text-sm md:text-base mb-2">October 23, 2015</h4>
                <p className="text-sm md:text-base">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime.
                </p>
              </div>
            </div>
          </div>
        </TabPanel>

        {/* TabPanel for 2015 Nominees */}
        <TabPanel className="bg-[#c05fe6] text-white px-6">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-4 items-start">
              <Image
                src={imgthre}
                width={150}
                height={150}
                alt="2015 nominee image"
              />
              <div>
                <h4 className="font-semibold text-lg md:text-xl">
                  Doloremque Laudantium
                </h4>
                <h4 className="text-sm md:text-base mb-2">November 10, 2015</h4>
                <p className="text-sm md:text-base">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Image
                src={imgone}
                width={150}
                height={150}
                alt="2015 nominee image"
              />
              <div>
                <h4 className="font-semibold text-lg md:text-xl">
                  Doloremque Laudantium
                </h4>
                <h4 className="text-sm md:text-base mb-2">November 10, 2015</h4>
                <p className="text-sm md:text-base">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Image
                src={imgthre}
                width={150}
                height={150}
                alt="2015 nominee image"
              />
              <div>
                <h4 className="font-semibold text-lg md:text-xl">
                  Doloremque Laudantium
                </h4>
                <h4 className="text-sm md:text-base mb-2">November 10, 2015</h4>
                <p className="text-sm md:text-base">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet.
                </p>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabNav;
