import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import ProBanner from "./components/ProBanner";
import WhatWeOffer from "./components/WhatWeOffer";
import ContentBox from "./components/ContentBox";
import OurCollections from "./components/OurCollections";
import PromoBanner from "./components/PromoBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <ProBanner />
      <WhatWeOffer />
      <ContentBox />
      <OurCollections />
      <PromoBanner />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
