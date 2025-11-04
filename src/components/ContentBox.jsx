import { useEffect, useState } from "react";
import Img1 from "../assets/hero-rug.jpg";
import Img2 from "../assets/Home.jpg";
import Img3 from "../assets/Garden.jpg";

export default function ContentBox() {
  const slides = [Img1, Img2, Img3]; 
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[500px] overflow-hidden">

      {slides.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}


      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute top-1/2 right-10 -translate-y-1/2 bg-white/95 backdrop-blur-sm shadow-lg p-8 max-w-md transition-all duration-700">
        <p className="text-xs uppercase tracking-[3px] text-gray-500 mb-2">
          Evergreen Styles
        </p>
        <h2 className="text-3xl font-bold mb-3 text-gray-900">
          RUBBER & COIR MATS
        </h2>
        <p className="text-gray-600 mb-6">
          Perfect way to bring nature indoors.
        </p>
        <button className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
