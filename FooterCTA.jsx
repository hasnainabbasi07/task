import React from "react";

const FooterCTA = () => {
  return (
    <section className="bg-red-500 text-white px-6 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Join the Fun – Download MyBindle Now!
      </h2>
      <p className="mb-6 max-w-xl mx-auto">
        Available on both App Store and Google Play
      </p>
      <div className="flex justify-center gap-4">
        <img src="/appstore.png" alt="App Store" className="h-12" />
        <img src="/playstore.png" alt="Google Play" className="h-12" />
      </div>
      <div className="mt-8 flex justify-center">
        <img src="/footer-phone.png" alt="App Preview" className="w-52 md:w-72" />
      </div>
    </section>
  );
};

export default FooterCTA;
