import React from "react";

const highlights = [
  "Send Videos & Voice",
  "Smart Notifications",
  "Interest-Based Communities",
];

const HighlightSection = () => {
  return (
    <section className="bg-white px-6 py-16 md:flex md:items-center md:gap-16">
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img src="/phones-highlight.png" alt="App Devices" className="w-60 md:w-80" />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Where Every Click Sparks a Connection!
        </h2>
        <ul className="space-y-4">
          {highlights.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-500 font-bold mr-2 text-xl">✓</span>
              <p className="text-gray-700">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HighlightSection;
