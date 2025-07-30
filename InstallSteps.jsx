import React from "react";

const steps = [
  { number: "01", title: "Download", desc: "Get MyBindle from Play Store or App Store" },
  { number: "02", title: "Install App", desc: "Easy, secure and fast installation" },
  { number: "03", title: "Ready to Use", desc: "Start making meaningful connections" },
];

const InstallSteps = () => {
  return (
    <section className="bg-gray-100 px-6 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">How to Install Our App</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-red-500 text-4xl font-bold mb-2">{step.number}</div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstallSteps;
