import React from "react";
import PricingCard from "./priceCard";

const PricingSection = () => {
  const pricingPlans = [
    {
      planName: "Basic Plan",
      price: "$19/month",
      features: ["1 User", "5GB Storage", "Email Support"],
    },
    {
      planName: "Standard Plan",
      price: "$49/month",
      features: ["5 Users", "50GB Storage", "Priority Email Support"],
    },
    {
      planName: "Premium Plan",
      price: "$99/month",
      features: ["Unlimited Users", "200GB Storage", "Phone & Email Support"],
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
        Choose Your Plan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            planName={plan.planName}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
