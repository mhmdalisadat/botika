import React from "react";
import fashionModel from "../assets/2151386949.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container mx-auto px-6 py-12 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Section: Description and Buttons */}
        <div className="lg:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Discover the Latest Women's Fashion
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Explore a wide range of trendy and stylish outfits. Stay ahead of
            the fashion curve and find your perfect look today.
          </p>
          <div className="flex space-x-4">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white">
              See Products
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
          <img
            src={fashionModel}
            alt="Fashion"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
