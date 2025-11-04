import { useState, useEffect } from "react";
import hero1 from "../assets/hero-rug.jpg";
import hero2 from "../assets/Home.jpg";
import hero3 from "../assets/Garden.jpg";

export default function Hero() {
  const slides = [
    {
      image: hero1,
      title: "HANDWOVEN RUGS",
      subtitle: "To Redefine Your Space",
    },
    {
      image: hero2,
      title: "CRAFTED WITH CARE",
      subtitle: "Elegance Meets Comfort",
    },
    {
      image: hero3,
      title: "SUSTAINABLE STYLE",
      subtitle: "Eco-Friendly, Handcrafted Beauty",
    },
  ];

  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (

    <section id="home" className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* 🔹 Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[1200ms] ease-in-out ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* 🔹 Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10 transition-all duration-700 ease-in-out">
        <h2
          key={slides[current].title}
          className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wide animate-fade-in-down"
        >
          {slides[current].title}
        </h2>
        <p
          key={slides[current].subtitle}
          className="text-lg md:text-xl text-white mb-8 tracking-widest animate-fade-in-up"
        >
          {slides[current].subtitle}
        </p>
        <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-lg text-sm uppercase tracking-widest font-medium transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
