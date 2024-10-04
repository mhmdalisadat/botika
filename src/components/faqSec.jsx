import React from "react";
import FaqItem from "./faqItem";

const FaqSection = () => {
  const faqs = [
    {
      question: "What is the return policy?",
      answer:
        "Our return policy allows for returns within 30 days of purchase. Please ensure that the item is in its original condition.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order using the tracking link sent to your email after the order is dispatched.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping. Shipping times may vary depending on your location.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
