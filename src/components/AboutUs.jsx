import React from "react";
import AboutImage from "../assets/Garden.jpg";

export default function AboutUs() {
  return (
    <section
      id="about" 
      className="bg-gray-100 py-16 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <img
            src={AboutImage}
            alt="About Marari Coir Rubs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>


        <div className="text-gray-800">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-amber-700">Us</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At <span className="font-semibold text-amber-700">Coir Rubs</span>,
            we blend traditional craftsmanship with modern design to create
            eco-friendly mats and rugs that bring nature into your home. Our
            products are made using 100% natural coir fibers sourced
            responsibly and crafted with care.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            From the calm shores of Mararikulam to homes across the world, we
            take pride in sharing the artistry and sustainability of coir. Every
            piece we produce tells a story of skill, heritage, and our deep
            respect for nature.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We work closely with skilled artisans who’ve mastered the art of
            weaving over generations, ensuring that each product not only meets
            global standards of quality but also carries the soul of Kerala’s
            timeless craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
}
