import React from "react";
import FashionCard from "./fashions";

const FashionSection = () => {
  const fashionItems = [
    {
      image: "https://via.placeholder.com/150",
      name: "Model 1",
      title: "Summer Dress Collection",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Model 2",
      title: "Winter Casual Style",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Model 3",
      title: "Autumn Work Attire",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-purple-600 mb-6">
        Featured Women Fashion
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fashionItems.map((item, index) => (
          <FashionCard
            key={index}
            image={item.image}
            name={item.name}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default FashionSection;
