import React from 'react';
import Image from "next/image"; // Import Image from Next.js

import imgthree from "@/components/assests/imgthree.jpg";
import imgfour from "@/components/assests/imgsix.jpg";
import imgfive from "@/components/assests/imgseven.jpg";

const Candidate = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4  mb-4 mt-8">
      {/* Image 1 */}
      <div className="relative overflow-hidden group">
        {/* Rotating Background */}
        <div className="absolute inset-0 bg-slate-700 transition-transform duration-300 ease-in-out transform rounded-full -rotate-3 group-hover:rotate-3"></div>
        <Image 
          src={imgthree} 
          alt="Candidate 1" 
          className="w-full h-auto relative z-10" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-slate-700 bg-opacity-75 z-20">
          {/* Initially visible text */}
          <div className="text-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            <h3 className="text-white text-lg font-bold">Jolly Winston</h3>
          </div>
          {/* Hidden text that appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <h3 className="text-white text-lg font-bold">Jolly Winston</h3>
              <p className="text-white">There are many variations of passages of Lorem Ipsum available.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image 2 */}
      <div className="relative overflow-hidden group">
        {/* Rotating Background */}
        <div className="absolute inset-0 bg-slate-700 transition-transform duration-300 ease-in-out transform rounded-full -rotate-3 group-hover:rotate-3"></div>
        <Image 
          src={imgfour} 
          alt="Candidate 2" 
          className="w-full h-auto relative z-10" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-slate-700 bg-opacity-75 z-20">
          {/* Initially visible text */}
          <div className="text-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            <h3 className="text-white text-lg font-bold">Jolly Winston</h3>
          </div>
          {/* Hidden text that appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <h3 className="text-white text-lg font-bold">Jolly Winston</h3>
              <p className="text-white">There are many variations of passages of Lorem Ipsum available.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image 3 */}
      <div className="relative overflow-hidden group">
        {/* Rotating Background */}
        <div className="absolute inset-0 bg-slate-700 transition-transform duration-300 ease-in-out transform rounded-full -rotate-3 group-hover:rotate-3"></div>
        <Image 
          src={imgfive} 
          alt="Candidate 3" 
          className="w-full h-auto relative z-10" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-slate-700 bg-opacity-75 z-20">
          {/* Initially visible text */}
          <div className="text-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            <h3 className="text-white text-lg font-bold">Jolly Winston</h3>
          </div>
          {/* Hidden text that appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <h3 className="text-white text-lg font-bold">Jolly Winston</h3>
              <p className="text-white">There are many variations of passages of Lorem Ipsum available.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
