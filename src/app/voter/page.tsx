"use client";
import React from "react";
import { Input } from "@nextui-org/react";


const Page = () => {
  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg mt-10 mb-20">
      <h1 className="text-2xl font-bold text-center mb-6">Voter Registration</h1>
      <form className="space-y-4">
        {/* Name Field */}
        <div>
          <label
           
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <Input
            radius={"none"}
            placeholder="Enter your Fullname"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border
             rounded-md shadow-sm focus:outline-none
             focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Address Field */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <Input
           radius={"none"}
            id="address"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border
             border-gray-300 rounded-md shadow-sm focus:outline-none
              focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your address"
            
          />
        </div>

        {/* Age Field */}
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <Input
            id="age"
            radius={"none"}
            type="number"
            placeholder="Enter your age"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border
             border-gray-300 rounded-md shadow-sm focus:outline-none
              focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Image Upload Field */}
        <div className="mb-2">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image
          </label>
          <Input
            id="image"
            type="file"
            className="mt-1 block w-full mb-4 text-sm text-gray-500 border border-gray-300
             rounded-md shadow-sm cursor-pointer bg-gray-50 focus:outline-none 
             focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="button"
            className="w-full bg-indigo-600 text-white py-2 px-6 rounded-md transition-all 
            duration-300 hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2
             focus:ring-indigo-500 focus:ring-offset-2"
          >
            Register Voter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
