import React from "react";
import Home from "../assets/Home.jpg";
import Hotel from "../assets/LivingRoom.jpg";
import Resort from "../assets/Garden.jpg";
import Office from "../assets/Porch.jpg";
import Retail from "../assets/Welcome1.jpg";
import School from "../assets/butterfly.jpg";
import Hospital from "../assets/door.jpg";
import Temple from "../assets/hold.jpg";


const industries = [
  {
    name: "Residential Homes",
    description: "Elegant and durable coir rugs and mats that bring warmth and natural charm to every home.",
    image: Home,
  },
  {
    name: "Hotels & Resorts",
    description: "Premium entrance mats and decorative rugs tailored for hospitality and comfort.",
    image: Hotel,
  },
  {
    name: "Beachside & Coastal Resorts",
    description: "Weather-resistant mats perfect for sandy environments and coastal atmospheres.",
    image: Resort,
  },
  {
    name: "Corporate Offices",
    description: "Stylish, long-lasting mats and carpets designed for modern workspaces and receptions.",
    image: Office,
  },
  {
    name: "Retail Stores & Showrooms",
    description: "Attractive, practical flooring solutions that enhance customer experience and ambience.",
    image: Retail,
  },
  {
    name: "Educational Institutions",
    description: "Durable, easy-to-maintain mats ideal for classrooms, corridors, and common spaces.",
    image: School,
  },
  {
    name: "Healthcare Facilities",
    description: "Hygienic and slip-resistant mats suited for hospitals, clinics, and wellness centers.",
    image: Hospital,
  },
  {
    name: "Temples & Spiritual Spaces",
    description: "Natural coir mats that add authenticity, simplicity, and durability to sacred areas.",
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
      {/* Header */}
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

      {/* Grid */}
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
