import React from "react";

const PricingCard = ({ planName, price, features }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{planName}</h3>
      <p className="text-3xl font-bold text-purple-600 mb-4">{price}</p>
      <ul className="mb-6 space-y-2 text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="text-sm">
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
