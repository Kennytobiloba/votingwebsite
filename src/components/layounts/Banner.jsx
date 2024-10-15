import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="banner-bottom1 mt-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {/* Campaign */}
          <div className="bg-slate-200 px-6 py-10 md:py-16 lg:py-12 border-4
           border-t-purple-600  transition duration-300 hover:border-t-white hover:bg-[#c05fe6]">
            <div className="flex items-center justify-center text-center">
              <span
                className="glyphicon glyphicon-user text-3xl text-blue-500 transition duration-300 transform hover:scale-110"
                aria-hidden="true"
              ></span>
              <div className="ml-4">
                <span className="mb-2">
                  <i className="fa-solid text-[18px] fa-user"></i>
                </span>
                <h3 className="text-[20px] md:text-[22px] lg:text-[24px]  mb-2">
                  Campaign
                </h3>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                  Lorem Ipsum is therefore always free.
                </p>
              </div>
            </div>
          </div>

          {/* Accessibility */}
          <div className="bg-slate-200 px-6 py-10 md:py-16 lg:py-12 border-4
           border-t-red-600  transition duration-300 hover:border-t-white hover:bg-red-500">
            <div className="flex items-center justify-center text-center">
              <span
                className="glyphicon glyphicon-user text-3xl text-blue-500 transition duration-300 transform hover:scale-110"
                aria-hidden="true"
              ></span>
              <div className="ml-4">
                <span className="mb-2">
                  <i className="fa-solid text-[18px] fa-user"></i>
                </span>
                <h3 className="text-[20px] md:text-[22px] text-red-200 lg:text-[24px]  mb-2">
                  Accessibility
                </h3>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                  Lorem Ipsum is therefore always free.
                </p>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-slate-200 px-6 py-10 md:py-16 lg:py-12 border-4
           border-t-purple-600  transition duration-300 hover:border-t-white hover:bg-[#c05fe6]">
            <div className="flex items-center justify-center text-center">
              <span
                className="glyphicon glyphicon-user text-3xl text-blue-500 transition duration-300 transform hover:scale-110"
                aria-hidden="true"
              ></span>
              <div className="ml-4">
                <span className="mb-2">
                  <i className="fa-solid text-[18px] fa-user"></i>
                </span>
                <h3 className="text-[20px] md:text-[22px] lg:text-[24px] mb-2">
                  Calendar
                </h3>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                  Lorem Ipsum is therefore always free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
