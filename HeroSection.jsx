import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-red-500 text-white px-6 py-16 text-center md:flex md:items-center md:justify-between md:px-20">
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Stay Connected <br /> Stay Social <br /> Stay You!
        </h1>
        <p className="mb-6 text-lg md:text-xl">
          MyBindle helps you connect with people in a smart, secure and simple way. Explore endless connections!
        </p>
        <button className="bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-red-100 transition">
          Get Started
        </button>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img src="/app-mockup.png" alt="App Preview" className="w-64 md:w-80 drop-shadow-xl" />
      </div>
    </section>
  );
};

export default HeroSection;
