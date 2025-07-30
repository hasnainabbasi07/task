import React from "react";

const MidCTA = () => {
  return (
    <section className="bg-red-500 text-white px-6 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Be the Reason Someone Smiles Today!
      </h2>
      <p className="mb-6 max-w-xl mx-auto">
        Share positivity, build connections, and make a difference with just one click!
      </p>
      <button className="bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-red-100 transition">
        Get Started
      </button>
      <div className="mt-8 flex justify-center">
        <img src="/balloons.png" alt="Heart Balloons" className="w-40 md:w-60" />
      </div>
    </section>
  );
};

export default MidCTA;
