import Rug from "../assets/Home.jpg";
import Mat from "../assets/Garden.jpg";
import DoorMat from "../assets/door.jpg";
import Custom from "../assets/LivingRoom.jpg";

export default function WhatWeOffer() {
  const offers = [
    {
      title: "Handwoven Rugs",
      description: "Luxurious, durable rugs crafted with natural coir fibers and timeless designs.",
      image: Rug,
    },
    {
      title: "Floor Mats",
      description: "Perfect for indoors or outdoors — stylish mats that add warmth and texture.",
      image: Mat,
    },
    {
      title: "Doormats",
      description: "Strong, long-lasting doormats that welcome guests with style and sustainability.",
      image: DoorMat,
    },
    {
      title: "Custom Creations",
      description: "Need a specific size or pattern? We craft bespoke rugs tailored to your taste.",
      image: Custom,
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          What We <span className="text-amber-700">Offer</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Thanks to decades of experience as a manufacturer of mats, we offer you optimal and attractive product solutions for you. We manufacture high-quality carpets and doormats for every requirement on our modern production facilities. In order to maintain our consistently high-quality standards, every production step is monitored and controlled in a qualified manner.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white text-center p-4">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
