"use client";
import React from "react";
import { Input } from "@nextui-org/react";

const Page: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg mt-10 mb-20">
      <h1 className="text-2xl font-bold text-center mb-6">Candidate Registration</h1>
      <form className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <Input
           radius="none"
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border
            border-gray-300 rounded-md shadow-sm focus:outline-none
            focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Address Field */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <Input
           radius="none"
            type="text"
            id="address"
            name="address"
            required
            className="mt-1 block w-full px-3 py-2
            bg-gray-100 border border-gray-300 rounded-md 
            shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Age Field */}
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <Input
            type="number"
            radius="none"
            id="age"
            name="age"
            min="18"
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300
            rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Image Upload Field */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <Input
            type="file"
            radius="none"
            id="image"
            name="image"
            accept="image/*"
            required
            className="mt-1 block w-full text-sm text-gray-500 border border-gray-300
            rounded-md shadow-sm cursor-pointer bg-gray-50 focus:outline-none 
            focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="
            w-full bg-indigo-600 text-white py-2 px-6 rounded-md transition-all 
            duration-300 hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2
            focus:ring-indigo-500 focus:ring-offset-2"
          >
            Register Candidate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
