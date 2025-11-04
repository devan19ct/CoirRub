export default function WhyChooseUs() {
  const features = [
    {
      title: "Handcrafted Excellence",
      description: "Each rug is handwoven by skilled artisans with generations of expertise.",
      icon: "🧶",
    },
    {
      title: "Sustainable Materials",
      description: "We use eco-friendly and biodegradable coir fibers that respect nature.",
      icon: "🌿",
    },
    {
      title: "Durability Guaranteed",
      description: "Designed to last, our rugs stand up to everyday wear with timeless charm.",
      icon: "🛋️",
    },
    {
      title: "Trusted by Customers",
      description: "Thousands of homes trust Marari Coir Rub for comfort and craftsmanship.",
      icon: "🏡",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-amber-700">Coir Rub</span>?
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We blend traditional weaving techniques with modern design sensibilities to bring you rugs that are as beautiful as they are durable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
