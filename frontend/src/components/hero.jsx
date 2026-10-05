import React from "react";

export const Hero = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <span className="inline-block px-3 py-1 text-xs font-medium text-cyan-600 bg-cyan-50 rounded-full mb-6">
              ✨ New Arrivals
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
              Technology that
              <br />
              <span className="text-cyan-500">fits your life.</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-500 max-w-xl mb-10 leading-relaxed">
              Curated electronics and accessories designed for simplicity,
              performance, and everyday use. No clutter, just great tech.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#shop"
                className="bg-gray-900 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm text-center"
              >
                Shop Collection
              </a>

              <a
                href="#about"
                className="bg-white text-gray-900 border border-gray-200 px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image Area */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg aspect-square bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-center">
              <img
                src="/medias/lap.jpg"
                alt="MacBook Pro on desk"
                className="w-full h-auto object-contain drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
