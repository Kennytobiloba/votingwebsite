"use client";
import React, { useState } from "react";

const Page = () => {
  // State to handle form input
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    age: "",
    image: null as File | null,
  });

  // Handle input change for text fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can send the form data to your server or backend
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Voter Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="18"
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Image Upload Field */}
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm cursor-pointer bg-gray-50 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
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
