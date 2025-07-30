import React from "react";

const testimonials = [
  { name: "Sarah", review: "MyBindle changed the way I connect with people. Love it!" },
  { name: "Ali", review: "Such a clean and user-friendly experience. Highly recommend!" },
  { name: "Jason", review: "Perfect platform for sharing stories and chatting in real-time." },
  { name: "Ayesha", review: "I’ve built real connections here. It’s amazing." },
];

const Testimonials = () => {
  return (
    <section className="bg-white px-6 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-sm text-left">
            <p className="text-gray-700 mb-3">“{item.review}”</p>
            <p className="font-semibold text-red-500">- {item.name}</p>
          </div>
        ))}
      </div>
      <button className="mt-8 text-red-500 underline font-semibold">See More</button>
    </section>
  );
};

export default Testimonials;
