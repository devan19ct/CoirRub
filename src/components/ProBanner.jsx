import Monsoonrug  from "../assets/door.jpg";
import Monsoonrug1 from "../assets/hold.jpg";

export default function PromoGrid() {
  return (
    <section className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4 md:px-8 py-8">

      <div className="relative h-[400px] w-full overflow-hidden">

        <img
          src={Monsoonrug}
          alt="Monsoon Ready"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />


        <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-6">
          <p className="text-sm uppercase tracking-[3px] mb-2">
            Time to get
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            MONSOON READY
          </h2>
          <button className="bg-gray-100 text-black px-6 py-3 text-sm uppercase font-medium tracking-wide rounded-md hover:bg-gray-200 transition">
            Shop Monsoon
          </button>
        </div>
      </div>


      <div className="relative h-[400px] w-full overflow-hidden">

        <img
          src={Monsoonrug1}
          alt="Gift Cards"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            GIFT CARDS
          </h2>
          <p className="text-sm mb-4">Perfect gift for any occasion</p>
          <button className="bg-gray-100 text-black px-6 py-3 text-sm uppercase font-medium tracking-wide rounded-md hover:bg-gray-200 transition">
            Shop Gift Cards
          </button>
        </div>
      </div>
    </section>
  );
}
