import React from "react";
import { FaHandshake } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: "🚀", // Replace this with an actual image/icon as needed
      title: "Free Delivery",
      description:
        "Lorem Ipsum is simply dummy text of the and typesetting industry.",
    },
    {
      icon: "💰", // Replace this with an actual image/icon as needed
      title: "Money Guarantee",
      description:
        "Lorem Ipsum is simply dummy text of the and typesetting industry.",
    },
    {
      icon: "🎧", // Replace this with an actual image/icon as needed
      title: "Online Support",
      description:
        "Lorem Ipsum is simply dummy text of the and typesetting industry.",
    },
  ];

  return (
    <div className="mx-auto px-4 py-12 w-11/12">
      <div className="flex justify-center items-center gap-3 text-center">
        <FaHandshake className="text-6xl text-green-500" />
        <h1 className="font-bold text-3xl text-center">Our Promises</h1>
      </div>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-3 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 bg-white shadow-md p-6 rounded-md"
          >
            {/* Icon */}
            <div className="flex justify-center items-center bg-yellow-300 rounded-full w-16 h-16 text-3xl text-black">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg">{feature.title}</h3>

            {/* Description */}
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
