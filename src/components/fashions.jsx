import React from "react";

const FashionCard = ({ image, name, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      {/* Left side: Title and description */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600">{title}</p>
      </div>

      <div className="flex-shrink-0 ml-6 w-40 h-40">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full shadow-md"
        />
      </div>
    </div>
  );
};

export default FashionCard;
