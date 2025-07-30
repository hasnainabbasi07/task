import React from "react";

const features = [
  "Separate Connection",
  "Share Your Story",
  "Real-Time Chat",
  "Privacy First",
  "Connect & Explore",
  "Grow Your Business",
];

const FeaturesGrid = () => {
  return (
    <section className="bg-white px-6 py-16 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-10">
        Features That Keep You Hooked!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-100 shadow-sm rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold">{feature}</h3>
            <p className="text-sm mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
