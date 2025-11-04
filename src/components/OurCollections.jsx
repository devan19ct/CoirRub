import React from "react";
import Home from "../assets/Home.jpg";
import Hotel from "../assets/LivingRoom.jpg";
import Resort from "../assets/Garden.jpg";
import Office from "../assets/poly.jpg";
import Retail from "../assets/Welcome1.jpg";
import School from "../assets/butterfly.jpg";
import Hospital from "../assets/door.jpg";
import Temple from "../assets/hold.jpg";


const industries = [
  {
    name: "Polypropylene Mats",
    image: Home,
  },
  {
    name: "Digital Printed Coir Mats",
    image: Hotel,
  },
  {
    name: "Wire Brush Mats",
    image: Resort,
  },
  {
    name: "Polypropylene Loop Mats",
    image: Office,
  },
  {
    name: "Coir Embossed Mats",
    image: Retail,
  },
  {
    name: "Shaped Mats",
    image: School,
  },
  {
    name: "PVC Coir Mats",
    image: Hospital,
  },
  {
    name: "Rubber Tray Mat",
    image: Temple,
  },
];


const IndustryCard = ({ industry }) => (
  <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-lg shadow-lg cursor-pointer group transition-all duration-300 transform hover:scale-[1.02]">

    <img
      src={industry.image}
      alt={industry.name}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />


    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-opacity duration-300"></div>


    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />


    <div className="absolute bottom-4 left-4 right-4 p-2 text-white">
      <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
        {industry.name}
      </h3>
      <p className="text-sm opacity-90 hidden md:block">{industry.description}</p>
    </div>
  </div>
);


export default function IndustriesWeServe() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans p-4 md:p-8">

      <header className="py-12 md:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Industries <span className="text-amber-700">We Serve</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our handcrafted coir and natural fiber products are trusted across
          multiple sectors from homes to hospitality blending beauty,
          durability, and sustainability.
        </p>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
      </main>

      <div className="h-16"></div>
    </div>
  );
}
